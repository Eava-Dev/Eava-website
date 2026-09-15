import ArrowIcon from "./ArrowIcon";

const essentialFeatures = [
  "24/7 AI receptionist answering your inbound calls",
  "Trained on your business, services, hours, and FAQs",
  "Lead qualification, contact capture, and appointment requests",
  "Emergency detection, real-time alerts, and missed-call text-back",
  "Call recordings, transcripts, and summaries",
  "EAVA Portal access and weekly reporting",
  "Works with your existing business number",
  "Dedicated onboarding and support",
];
const proFeatures = [
  "Outbound speed-to-lead AI agent with immediate response to new leads",
  "Outbound lead qualification and direct calendar booking",
  "SMS Agent and automated lead follow-up",
  "Appointment reminders",
  "Higher included usage",
  "Weekly business digest and priority support",
];

export default function Plans() {
  return <section className="plans section pricing-refresh" id="plans">
    <div className="plan-title reveal">
      <p className="eyebrow">05 / EAVA PLANS</p>
      <h2>More Revenue.<br /> <em>More Time.</em></h2>
      <p>EAVA answers. EAVA follows up. EAVA automates.</p>
    </div>
    <div className="voice-plan-grid">
      <article className="plan reveal">
        <div className="plan-label-row"><p className="eyebrow">INBOUND / ESSENTIAL</p></div>
        <h3>Essential</h3>
        <p className="plan-promise">EAVA Answers.</p>
        <div className="plan-price">$599<span>/month</span></div>
        <p className="plan-setup">$497 one-time setup</p>
        <p>EAVA handles your inbound calls so you don’t have to.</p>
        <p className="feature-label">Your inbound AI employee</p>
        <ul>{essentialFeatures.map(feature => <li key={feature}>{feature}</li>)}</ul>
        <a className="button outline" href="/onboarding">Explore Essential <span><ArrowIcon /></span></a>
      </article>
      <article className="plan pro reveal">
        <div className="plan-label-row"><p className="eyebrow">INBOUND + OUTBOUND</p><span className="recommended">RECOMMENDED</span></div>
        <h3>EAVA Pro</h3>
        <p className="plan-promise">EAVA Answers + Follows Up.</p>
        <div className="plan-price">$999<span>/month</span></div>
        <p className="plan-setup">$997 one-time setup</p>
        <p>EAVA answers your business and works your leads. Built for businesses generating leads through ads, their website, and beyond.</p>
        <ol className="lead-workflow" aria-label="Pro lead workflow">{["New lead", "EAVA responds", "Qualifies", "Follows up", "Books"].map((step,i)=><li key={step}>{i > 0 && <span aria-hidden="true">/</span>}{step}</li>)}</ol>
        <p className="feature-label">Everything in Essential, plus</p>
        <ul>{proFeatures.map(feature => <li key={feature}>{feature}</li>)}</ul>
        <a className="button" href="/onboarding">Explore EAVA Pro <span><ArrowIcon /></span></a>
      </article>
    </div>
    <article className="growth-offering reveal">
      <div>
        <p className="eyebrow">EAVA GROWTH / CUSTOM SERVICE</p>
        <h3>EAVA Automates.</h3>
        <p className="growth-intro">We find the repetitive work inside your business and build EAVA to handle it.</p>
        <p className="growth-detail">Start with an EAVA Growth Audit. We analyze your business, identify the highest-value automation opportunities, then scope the right Growth Agent for you.</p>
        <p className="growth-detail">From lead or estimate follow-up to rebooking, e-commerce, and internal operations. One custom scope, built around what your business needs.</p>
        <a className="button" href="/onboarding">Discuss Your Growth Audit <span><ArrowIcon /></span></a>
      </div>
      <div className="growth-offering-copy">
        <dl className="growth-prices">
          <div><dt>EAVA Growth Audit</dt><dd>$750 <span>one-time</span></dd></div>
          <div><dt>Custom Growth Agent builds</dt><dd><span>Starting at</span> $1,500</dd></div>
          <div><dt>Ongoing Growth Agent management</dt><dd><span>Starting at</span> $250<span>/month</span></dd></div>
        </dl>
        <p className="audit-credit">Move forward with an approved Growth Agent build within 30 days and the $750 Growth Audit can be credited toward your build.</p>
        <p>Custom strategy and implementation, scoped separately from Essential and EAVA Pro.</p>
      </div>
    </article>
  </section>;
}
