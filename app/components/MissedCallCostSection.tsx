"use client";

import FadeIn from "./FadeIn";

const stats = [
  {
    number: "$45,600",
    label: "Lost yearly to missed calls, per HVAC contractor",
  },
  {
    number: "74%",
    label: "Of contractor calls go unanswered",
  },
  {
    number: "$0.40",
    label: "Cost of an AI-answered call, versus $7-12 for a human-answered one",
  },
];

export default function MissedCallCostSection() {
  return (
    <section
      style={{
        background: "#0A0B0D",
        padding: "8rem 6vw",
      }}
    >
      <FadeIn>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            color: "#ffffff",
            maxWidth: "760px",
            marginBottom: "4rem",
          }}
        >
          The Cost of a Missed Call
        </h2>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "2rem",
        }}
      >
        {stats.map((s, i) => (
          <FadeIn key={s.number} index={i + 1}>
            <div
              style={{
                border: "1px solid rgba(34,211,238,0.2)",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.02)",
                padding: "2rem",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(2.4rem, 5vw, 3.25rem)",
                  color: "#22D3EE",
                  lineHeight: 1.1,
                  marginBottom: "0.75rem",
                }}
              >
                {s.number}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  color: "#E5E5E5",
                  lineHeight: 1.5,
                }}
              >
                {s.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
