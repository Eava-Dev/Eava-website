import ArrowIcon from "./ArrowIcon";
export default function Growth() {
  return (<section className="growth section" id="growth">
    <div className="section-top reveal">
      <p className="eyebrow">03 / EAVA GROWTH AGENT</p>
      <p className="side-note">Your ambition.<br />A plan to put AI to work.</p>
    </div>
    <div className="statement reveal">
      <h2>Turn AI Into<br /><em>Business Growth.</em></h2>
      <div className="statement-copy">
        <p>Start with your business: how you sell, how your team works, and where manual effort holds you back. We help identify the opportunities, shape a strategy, and build the AI systems to act on it.</p>
        <p>From stronger sales processes to smoother operations, Growth Agent combines business insight with hands-on implementation. Built around your goals, whether or not you use EAVA for calls.</p>
        <a className="text-link" href="/onboarding">Build with EAVA <span><ArrowIcon /></span></a>
      </div>
    </div>
    <div className="principles growth-areas">
      <article className="reveal"><span className="number">01</span><h3>Find the opportunity.</h3><p>Review your processes and sales approach. Identify where AI can save time, improve operations, and support new revenue opportunities.</p></article>
      <article className="reveal"><span className="number">02</span><h3>Put busy work on automation.</h3><p>EAVA identifies repetitive work that slows your business down and builds AI-powered systems to handle more of it automatically.</p></article>
      <article className="reveal"><span className="number">03</span><h3>Build your sales engine.</h3><p>Develop lead generation systems and AI sales agents for outbound prospecting, qualification, follow-up, and nurture.</p></article>
      <article className="reveal"><span className="number">04</span><h3>Make AI work your way.</h3><p>Design specialized agents and AI-powered workflows around your operations, focused on reducing manual effort.</p></article>
    </div>
    <aside className="growth-capacity reveal">
      <p className="eyebrow">MORE CAPACITY FOR YOUR TEAM</p>
      <h3>More gets done without adding more to your team’s plate.</h3>
      <p>Find the repetitive work EAVA can take on. Improve the process, support sales, and give your team more room to focus on the work that needs them.</p>
    </aside>
    <p className="growth-scope reveal">Growth Agent strategy and implementation are scoped separately. Custom agents, automations, and integrations are not included in the Essential or EAVA Pro voice plans.</p>
  </section>);
}
