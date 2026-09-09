import ArrowIcon from "./ArrowIcon";
import type { CSSProperties } from "react";
export default function Hero() {
  return (<section className="hero">
    <div className="hero-copy">
      <p className="eyebrow">
        <i>
        </i>{" YOUR AI EMPLOYEE. BUILT TO HELP YOU GROW."}</p>
      <h1>{"More Than a Bot."}
        <br />{"An Employee"}
        <br /><em>{"Built For You."}</em>
      </h1>
      <p className="intro">{"Your AI employee for customer conversations. Your growth partner for the systems behind a smarter business. EAVA helps you do both."}</p>
      <div className="actions">
        <a className="button" href="/onboarding">{"Find your EAVA "}
          <span><ArrowIcon /></span>
        </a>
        <a className="text-link" href="/#experience">{"See a call unfold "}
          <span><ArrowIcon direction="down" /></span>
        </a>
      </div>

    </div>
    <div className="signal-scene" aria-label="Conceptual EAVA intelligence interface for Voice Agent and Growth Agent">
      <div className="scene-grid">
      </div>
      <div className="orbital" aria-hidden="true">{Array.from({ length: 35 }, (_, i) => <span key={i} style={{ "--h": `${95 + 210 * Math.pow(Math.sin(i / 34 * Math.PI), .8)}px`, "--d": `${i * -.12}s` } as CSSProperties} />)}</div>
      <div className="scene-top">
        <span>{"EAVA / INTELLIGENCE"}</span>
        <span>{"VOICE + GROWTH"}</span>
      </div>
      <div className="intelligence-roles">
        <div><span className="role-symbol" aria-hidden="true">◉</span><div><small>VOICE AGENT</small><strong>Handle the conversation.</strong><p>Questions. Leads. Next steps.</p></div></div>
        <div><span className="role-symbol" aria-hidden="true"><ArrowIcon /></span><div><small>GROWTH AGENT</small><strong>Build what moves you forward.</strong><p>Strategy. Agents. Automation.</p></div></div>
      </div>
      <div className="scene-bottom">
        <span>
          <i>
          </i>{" BUILT AROUND YOUR BUSINESS"}</span>
        <span>{"CONCEPTUAL VIEW"}</span>
      </div>
    </div>
  </section>);
}
