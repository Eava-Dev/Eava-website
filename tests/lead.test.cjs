const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

// Exercise the production submission function without enabling any network access.
function loadSource(file, timers = {}) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  vm.runInNewContext(code, {
    exports,
    require: name => loadSource(path.join(path.dirname(file), name + '.ts'), timers),
    fetch: () => { throw new Error('Real network access is prohibited in tests'); },
    AbortController, setTimeout, clearTimeout, ...timers,
  });
  return exports;
}
const source = path.resolve(__dirname, '../app/components/onboarding/submitLead.ts');
const { submitLead } = loadSource(source);
const lead = { name: ' Local Preview ', phone: '5550101234', email: 'preview@example.com' };

test('missing configuration and invalid input never send a request', async () => {
  let calls = 0;
  const request = async () => { calls++; throw new Error('Unexpected request'); };
  assert.equal((await submitLead(lead, undefined, request)).reason, 'configuration');
  assert.equal((await submitLead(lead, '  ', request)).reason, 'configuration');
  assert.equal((await submitLead({ ...lead, email: 'invalid' }, 'test', request)).reason, 'invalid');
  assert.equal((await submitLead({ ...lead, name: ' ' }, 'test', request)).reason, 'invalid');
  assert.equal(calls, 0);
});

test('successful delivery preserves the provider, three fields, and visitor reply-to', async () => {
  let calls = 0;
  const request = async (url, options) => {
    calls++;
    assert.equal(url, 'https://api.web3forms.com/submit');
    assert.equal(options.method, 'POST');
    assert.equal(options.headers['Content-Type'], 'application/json');
    const body = JSON.parse(options.body);
    assert.deepEqual(body, {
      access_key: 'test-only', subject: 'New Onboarding Submission',
      from_name: 'Eava Onboarding Form', email: lead.email, replyto: lead.email,
      Name: 'Local Preview', Phone: lead.phone, Email: lead.email,
    });
    return { ok: true, json: async () => ({ success: true }) };
  };
  assert.equal((await submitLead(lead, 'test-only', request)).success, true);
  assert.equal(calls, 1);
});

for (const [name, request] of [
  ['HTTP failure', async () => ({ ok: false, json: async () => ({ success: true }) })],
  ['provider rejection', async () => ({ ok: true, json: async () => ({ success: false }) })],
  ['malformed response', async () => ({ ok: true, json: async () => { throw new Error('HTML'); } })],
  ['network failure', async () => { throw new Error('Offline'); }],
]) {
  test(name + ' cannot unlock scheduling', async () => {
    assert.equal((await submitLead(lead, 'test-only', request)).reason, 'delivery');
  });
}

test('a stalled request is aborted and reports delivery failure', async () => {
  const { submitLead: timedSubmit } = loadSource(source, {
    setTimeout: callback => { queueMicrotask(callback); return 1; }, clearTimeout: () => {},
  });
  let aborted = false;
  const request = (_url, { signal }) => new Promise((_resolve, reject) => {
    signal.addEventListener('abort', () => { aborted = true; reject(new Error('Aborted')); });
  });
  assert.equal((await timedSubmit(lead, 'test-only', request)).reason, 'delivery');
  assert.equal(aborted, true);
});
