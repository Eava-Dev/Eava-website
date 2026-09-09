"use client";
import ArrowIcon from "./ArrowIcon";

import { type CSSProperties, useState } from "react";
const scenarios = [
  {
    "caller": "“How late are you guys open?”",
    "answer": "“We’re open until 6 today. Is there anything I can help you with before you come in?”",
    "request": "Business hours inquiry",
    "next": "Business information shared",
    "result": "An answer based on your business hours"
  },
  {
    "caller": "“I’d like to book an appointment. Do you have anything available tomorrow?”",
    "answer": "“Of course — let me check tomorrow’s availability. Would you prefer morning or afternoon?”",
    "request": "Appointment inquiry",
    "next": "Available slot selected & confirmed",
    "result": "Appointment booked directly into the client’s calendar"
  },
  {
    "caller": "“Hi, I’m a new customer. Can you tell me about your services?”",
    "answer": "“Of course. Tell me a little about what you’re looking for, and I’ll help you understand how our team can help.”",
    "request": "New customer inquiry",
    "next": "Needs & contact details captured",
    "result": "Qualified lead ready for follow-up"
  },
  {
    "caller": "“Hi, it’s Alex again. I have a question about another job.”",
    "answer": "“Welcome back, Alex. Tell me a little about what you need this time, and I’ll get the details to our team.”",
    "request": "Returning customer · New request",
    "next": "Request captured for follow-up",
    "result": "Returning caller recognition · Pro"
  }
];
const labels = ["Business hours", "Appointments", "New customer", "Returning caller"];
export default function Conversation() {
  const [active, setActive] = useState(0); const scenario = scenarios[active]; return (<section className="experience section" id="experience">
    <div className="section-top">
      <p className="eyebrow">{"02 / EAVA VOICE AGENT"}</p>
      <span className="example-label">{"ILLUSTRATIVE EXPERIENCE · NO LIVE CALL"}</span>
    </div>
    <div className="experience-grid">
      <div>
        <h2>{"Every conversation."}
          <br />
          <em>{"Somewhere to go."}</em>
        </h2>
        <p className="intro">{"A call shouldn’t end in a forgotten voicemail."}
          <br />{"See how EAVA turns a conversation into context your team can act on."}</p>
        <div className="tabs" role="tablist" aria-label="Example call type" aria-orientation="vertical">{labels.map((label, i) => <button key={label} type="button" role="tab" aria-selected={active === i} aria-controls="call-panel" id={`tab-${i}`} tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={e => {
          let next = active; if(e.key === "ArrowDown" || e.key === "ArrowRight")
            next = (active + 1) % labels.length;
          else if(e.key === "ArrowUp" || e.key === "ArrowLeft")
            next = (active + labels.length - 1) % labels.length;
          else if(e.key === "Home")
            next = 0;
          else if(e.key === "End")
            next = labels.length - 1;
          else
            return; e.preventDefault(); setActive(next); document.getElementById(`tab-${next}`)?.focus();
        }}>{label}
          <span aria-hidden="true"><ArrowIcon /></span>
        </button>)}</div>
        <p className="caption">{"An example of the experience, not a customer call or a live product dashboard."}</p>
      </div>
      <div className="call-panel" id="call-panel" role="tabpanel" aria-labelledby={`tab-${active}`} tabIndex={0}>
        <div className="panel-head">
          <span className="agent-avatar" aria-hidden="true"><ArrowIcon direction="down-left" /></span>
          <div><strong>Inbound call / {labels[active]}</strong><small>EAVA VOICE AGENT · SAMPLE CALL RECORD</small></div>
          <span className="sample">ILLUSTRATIVE</span>
        </div>
        <div className="call-audio" aria-hidden="true">
          <div className="audio-label"><span>VOICE / CONVERSATION EXCERPT</span><span><ArrowIcon direction="down-left" /> CALLER · EAVA <ArrowIcon /></span></div>
          <div className="audio-wave">{Array.from({length:48},(_,i)=><i key={i} style={{"--bar":`${8 + Math.abs(Math.sin(i * 1.9 + active) * Math.cos(i * .31)) * 36}px`} as CSSProperties} />)}</div>
          <div className="audio-label"><span>CONCEPTUAL WAVEFORM</span><span>NO AUDIO PLAYBACK</span></div>
        </div>
        <div className="conversation transcript" aria-live="polite">
          <p className="transcript-label">CALL TRANSCRIPT <span>EXCERPT</span></p>
          <div className="transcript-turn"><span className="turn-marker" aria-hidden="true"><ArrowIcon direction="down-left" /></span><div><p className="speaker">CALLER</p><p id="caller">{scenario.caller}</p></div></div>
          <div className="transcript-turn"><span className="turn-marker eava-turn" aria-hidden="true">E</span><div><p className="speaker">EAVA / VOICE AGENT</p><p id="answer">{scenario.answer}</p></div></div>
        </div>
        {active === 1 && <div className="booking-steps" aria-live="polite">
          <p className="transcript-label">ILLUSTRATIVE BOOKING FLOW</p>
          <ol>
            <li><span aria-hidden="true">✓</span><div><strong>Check availability</strong><p>EAVA checks open times directly in your calendar.</p></div></li>
            <li><span aria-hidden="true">✓</span><div><strong>Choose an open slot</strong><p>EAVA offers available times and the caller chooses one.</p></div></li>
            <li><span aria-hidden="true">✓</span><div><strong>Confirm & book</strong><p>EAVA confirms the appointment with the caller and books it directly into your calendar.</p></div></li>
          </ol>
        </div>}
        <div className="outcome">
          <div className="outcome-title">
            <span><ArrowIcon direction="turn-right" /></span>
            <span>{"CALL SUMMARY / CAPTURED OUTCOME"}</span>
          </div>
          <div className="outcome-row">
            <span>{"Request"}</span>
            <strong id="request">{scenario.request}</strong>
          </div>
          <div className="outcome-row">
            <span>{"Next step"}</span>
            <strong id="next">{scenario.next}</strong>
          </div>
          <div className="outcome-footer">
            <span className="status-dot">
            </span>
            <span id="result">{scenario.result}</span>
            <span>{"✓"}</span>
          </div>
        </div>
      </div>
    </div>
  </section>);
}
