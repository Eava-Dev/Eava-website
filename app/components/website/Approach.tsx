import ArrowIcon from "./ArrowIcon";
export default function Approach() {
  return (<section className="approach section" id="approach">
    <div className="section-top reveal">
      <p className="eyebrow">01 / TWO WAYS TO MOVE FORWARD</p>
      <p className="side-note">Built to run the work.<br />Built to grow the business.</p>
    </div>
    <h2 className="reveal">One EAVA.<br /><em>Two ways to grow.</em></h2>
    <div className="pillar-grid">
      <article className="pillar reveal">
        <p className="eyebrow">EAVA VOICE AGENT</p>
        <h3>Handle Every<br />Conversation.</h3>
        <p>Be there when customers come to you. EAVA answers calls, handles questions, and captures leads and appointment requests — around the clock.</p>
        <a className="text-link" href="/#experience">Meet your Voice Agent <span><ArrowIcon /></span></a>
      </article>
      <article className="pillar reveal">
        <p className="eyebrow">EAVA GROWTH AGENT</p>
        <h3>Build a Smarter<br />Business.</h3>
        <p>Work with EAVA to find where AI can make a difference, then build the agents, automations, and sales systems that help your business operate better and grow.</p>
        <a className="text-link" href="/#growth">Meet your Growth Agent <span><ArrowIcon /></span></a>
      </article>
    </div>
  </section>);
}
