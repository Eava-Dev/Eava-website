export default function Plans() {
  return (<section className="plans section" id="plans">
    <div className="plan-title reveal">
      <p className="eyebrow">{"05 / EAVA PLANS"}</p>
      <h2>{"The right support."}
        <br />{"At your stage."}</h2>
      <p>{"Voice Agent plans. Custom Growth Agent solutions."}
        <br />{"Two distinct ways to work with EAVA."}</p>
      <p className="voice-pricing-note">Voice Agent pricing is shaped around your call volume and needs.</p>
    </div>
    <article className="plan reveal">
      <span className="eyebrow">{"VOICE AGENT / THE FOUNDATION"}</span>
      <h3>{"Essential"}</h3>
      <p>{"A dependable first point of contact."}</p>
      <ul>
        <li>{"24/7 AI receptionist"}</li>
        <li>{"Answers every inbound call"}</li>
        <li>{"Qualifies new leads"}</li>
        <li>{"Captures appointment requests"}</li>
        <li>{"Emergency call detection"}</li>
        <li>{"Real-time emergency email alerts to you"}</li>
        <li>{"Full call recordings & transcripts"}</li>
        <li>{"Live lead & contact pipeline"}</li>
        <li>{"Weekly reporting dashboard"}</li>
        <li>{"Works with your existing number"}</li>
        <li>{"Dedicated onboarding & support"}</li>
      </ul>
      <a className="button outline" href="/onboarding">{"Explore Essential "}
        <span>{"↗"}</span>
      </a>
    </article>
    <article className="plan pro reveal">
      <span className="eyebrow">{"VOICE AGENT / THE NEXT CHAPTER"}</span>
      <h3>{"EAVA Pro"}</h3>
      <p>{"Keep the conversation moving forward."}</p>
      <ul>
        <li>{"Everything in Essential, plus:"}</li>
        <li>{"Missed-call recovery, automatic AI callback within minutes of any missed, unanswered, or dropped call"}</li>
        <li>{"Weekly business digest, a Sunday evening summary of calls, leads, and appointments before your week starts"}</li>
        <li>{"Returning caller recognition, Eava knows your repeat customers and greets them accordingly"}</li>
        <li>{"Automated appointment reminders, customers get a reminder the day before, cutting down no-shows"}</li>
        <li>{"Automated lead follow-up, anyone who calls but doesn't book gets a friendly follow-up so the lead doesn't go cold"}</li>
        <li>{"Higher call volume included"}</li>
        <li>{"Priority support & faster response"}</li>
      </ul>
      <a className="button" href="/onboarding">{"Explore Pro "}
        <span>{"↗"}</span>
      </a>
    </article>
    <article className="growth-offering reveal">
      <div>
        <p className="eyebrow">GROWTH AGENT / CUSTOM SCOPE</p>
        <h3>Custom Strategy<br /><em>+ Implementation.</em></h3>
      </div>
      <div className="growth-offering-copy">
        <p>Build around your business. Work with EAVA to identify opportunities and develop AI automations, sales systems, and specialized agents around your priorities.</p>
        <p>Scope and pricing are agreed for your project. Growth Agent work is separate from Essential and EAVA Pro.</p>
        <a className="button" href="/onboarding">Build With EAVA <span>↗</span></a>
      </div>
    </article>
  </section>);
}
