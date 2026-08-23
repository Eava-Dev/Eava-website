"use client";

import FadeIn from "./FadeIn";

const stats = [
  {
    stat: "24/7",
    title: "Always Answering",
    body: "Every call gets picked up — nights, weekends, holidays — so no opportunity slips through.",
  },
  {
    stat: "$40,000+",
    title: "Recovered Every Year",
    body: "Average revenue businesses were losing to missed and after-hours calls, now captured instead.",
  },
  {
    stat: "20+ Hours",
    title: "Back In Your Week",
    body: "No more chasing missed calls after hours or catching up on messages before bed, Eava already handled it.",
  },
  {
    stat: "1 Missed Call",
    title: "Could Cost You Everything",
    body: "The call you would have missed at 9pm could be your biggest job of the year, Eava's already on it.",
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
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          The Time and Money Eava Gives Back
        </h2>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))",
          gap: "1.5rem",
          maxWidth: "1160px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {stats.map((s, i) => (
          <FadeIn key={s.stat} index={i + 1}>
            <div
              style={{
                border: "1px solid rgba(34,211,238,0.2)",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.02)",
                padding: "2.5rem 2rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
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
                {s.stat}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "#ffffff",
                  marginBottom: "0.6rem",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  color: "#E5E5E5",
                  lineHeight: 1.5,
                }}
              >
                {s.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
