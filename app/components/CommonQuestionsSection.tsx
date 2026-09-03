"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const questions = [
  {
    q: "How long does setup actually take?",
    a: "After the demo, we kick off setup the same week. Our team trains Eava on your business, your goals, and your voice — you don't lift a finger.",
  },
  {
    q: "Do clients know they're talking to AI?",
    a: "Eava sounds human. Multiple owners report their clients don't notice. You can disclose AI use or not; it's a setting you control.",
  },
  {
    q: "Can I use Eava alongside my existing receptionist?",
    a: "Yes, most businesses do. Eava handles after-hours, overflow, your team handles in-person closings.",
  },
  {
    q: "Do we keep our existing phone number?",
    a: "Yes. You forward your existing line to a dedicated Eava number. Your customers keep dialing the same digits they always have.",
  },
  {
    q: "What happens if Eava does not know the answer?",
    a: "She politely tells the caller she will follow up, captures the question, and pings your team with the full transcript so the right person can call back.",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#22D3EE"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{
        flexShrink: 0,
        transform: open ? "rotate(45deg)" : "rotate(0deg)",
        transition: "transform 0.25s ease",
      }}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(34,211,238,0.2)" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          background: "transparent",
          border: "none",
          padding: "1.5rem 0",
          textAlign: "left",
          cursor: "pointer",
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: "1.1rem",
          color: "#ffffff",
        }}
      >
        <span>{q}</span>
        <PlusIcon open={open} />
      </button>

      <div
        style={{
          maxHeight: open ? "300px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "0.95rem",
            color: "#E5E5E5",
            lineHeight: 1.6,
            maxWidth: "680px",
            paddingBottom: "1.5rem",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function CommonQuestionsSection() {
  return (
    <section
      id="common-questions"
      style={{
        background: "#0A0B0D",
        padding: "8rem 6vw",
      }}
    >
      <div
        className="common-questions-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "4rem",
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#ffffff",
            }}
          >
            Common Questions
          </h2>
        </FadeIn>

        <FadeIn index={1}>
          <div
            style={{
              borderTop: "1px solid rgba(34,211,238,0.2)",
            }}
          >
            {questions.map((item) => (
              <AccordionItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
