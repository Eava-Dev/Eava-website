import ArrowIcon from "./ArrowIcon";
export default function Process() {
  return (<section className="process section" id="process">
    <div className="section-top reveal">
      <p className="eyebrow">{"04 / PERSONAL FROM DAY ONE"}</p>
      <span className="side-note">{"Your business. Your goals. Your EAVA."}</span>
    </div>
    <div className="process-heading reveal">
      <h2>{"We do the setup."}
        <br />{"You get your time back."}</h2>
      <a className="button" href="/onboarding">{"Let’s talk about your business "}
        <span><ArrowIcon /></span>
      </a>
    </div>
    <div className="steps">
      <article className="reveal">
        <span>{"01 / CONNECT"}</span>
        <h3>{"Start with a conversation."}</h3>
        <p>{"Book a demo. Tell us where calls get missed, work gets stuck, and what a better day would look like."}</p>
      </article>
      <article className="reveal">
        <span>{"02 / CUSTOMIZE"}</span>
        <h3>{"We learn your world."}</h3>
        <p>{"For Voice Agent, we build and test your call flows. For Growth Agent, we identify priorities with you and scope the systems to build."}</p>
      </article>
      <article className="reveal">
        <span>{"03 / STAY IN THE LOOP"}</span>
        <h3>{"A clear way forward."}</h3>
        <p>{"Track Voice Agent calls, leads, and appointment requests in your portal. For Growth Agent, we work with you on the agreed implementation."}</p>
      </article>
    </div>
  </section>);
}
