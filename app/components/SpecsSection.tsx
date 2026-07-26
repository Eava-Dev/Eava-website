"use client";

import FadeIn from "./FadeIn";

const specs = [
  { label: "Response Time", value: "Under 1 second" },
  { label: "Call Capacity", value: "Unlimited concurrent calls" },
  { label: "Languages Supported", value: "English & Spanish" },
  {
    label: "Integrations",
    value: "ServiceTitan, Housecall Pro, Jobber, Google Calendar, HubSpot",
  },
  { label: "Setup Time", value: "Live in under 48 hours" },
  { label: "Uptime", value: "99.9%" },
  { label: "Call Recording & Transcripts", value: "Included on every call" },
  { label: "Lead Routing", value: "Automatic, by service type & zip code" },
  { label: "Booking Sync", value: "Real-time, two-way calendar sync" },
  { label: "Pricing Model", value: "Flat monthly rate, no per-call fees" },
];

export default function SpecsSection() {
  return (
    <section
      style={{
        background: "#0A0B0D",
        padding: "8rem 6vw",
      }}
    >
      <FadeIn>
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#22D3EE",
          }}
        >
          How Eava Works
        </span>
      </FadeIn>
      <FadeIn index={1}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            color: "#ffffff",
            marginTop: "1rem",
            marginBottom: "3.5rem",
            maxWidth: "760px",
          }}
        >
          Built to sound human. Built to never sleep.
        </h2>
      </FadeIn>

      <div style={{ maxWidth: "760px" }}>
        {specs.map((s, i) => (
          <FadeIn key={s.label} index={i}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                padding: "1.1rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  color: "#22D3EE",
                }}
              >
                {s.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  color: "#E5E5E5",
                }}
              >
                {s.value}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
