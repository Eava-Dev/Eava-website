"use client";

import FadeIn from "./FadeIn";

const features = [
  {
    title: "24/7 Call Answering",
    copy: "Eava picks up every call — nights, weekends, and holidays — so a ringing phone never turns into a lost job for your HVAC, plumbing, or dental practice.",
    icon: (
      <path d="M4 5c0 8.284 6.716 15 15 15v-3.5a1.5 1.5 0 0 0-1.2-1.47l-3.2-.64a1.5 1.5 0 0 0-1.55.66l-.9 1.35a11.5 11.5 0 0 1-5.55-5.55l1.35-.9a1.5 1.5 0 0 0 .66-1.55l-.64-3.2A1.5 1.5 0 0 0 6.5 4H4Z" />
    ),
  },
  {
    title: "Instant Lead Qualification",
    copy: "The agent asks the right questions in real time — job type, urgency, location — so your team only follows up on calls worth their time.",
    icon: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20a7 7 0 0 1 14 0" />
      </>
    ),
  },
  {
    title: "Automated Appointment Booking",
    copy: "Eava checks live availability and books directly onto your calendar, confirming the visit with the caller before the line even hangs up.",
    icon: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M4 10h16M8 3v4M16 3v4" />
      </>
    ),
  },
  {
    title: "CRM & Calendar Integration",
    copy: "Every call syncs straight into the tools you already run — Outlook, Google Calendar, and more — no manual data entry required.",
    icon: (
      <>
        <rect x="3" y="4" width="8" height="8" rx="1" />
        <rect x="13" y="4" width="8" height="8" rx="1" />
        <rect x="3" y="14" width="8" height="6" rx="1" />
        <rect x="13" y="14" width="8" height="6" rx="1" />
      </>
    ),
  },
  {
    title: "Natural Conversational Voice",
    copy: "Callers talk to Eava like they would a front-desk employee — no menus, no scripts that break under pressure, just a calm, capable conversation.",
    icon: (
      <>
        <path d="M12 3a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4Z" />
        <path d="M6 11a6 6 0 0 0 12 0M12 21v-4" />
      </>
    ),
  },
  {
    title: "Real-Time Call Summaries",
    copy: "Every conversation is transcribed and summarized the moment it ends, landing in your inbox with next steps already flagged.",
    icon: (
      <>
        <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
        <path d="M9 12h6M9 16h6M9 8h3" />
      </>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
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
          Never Miss Another Call
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
            marginBottom: "4rem",
            maxWidth: "760px",
          }}
        >
          What Eava handles for you
        </h2>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {features.map((f, i) => (
          <FadeIn key={f.title} index={i}>
            <div
              style={{
                borderTop: "1px solid rgba(34,211,238,0.2)",
                paddingTop: "1.5rem",
                height: "100%",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginBottom: "1.25rem" }}
              >
                {f.icon}
              </svg>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.15rem",
                  color: "#ffffff",
                  marginBottom: "0.6rem",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "#E5E5E5",
                  lineHeight: 1.6,
                }}
              >
                {f.copy}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
