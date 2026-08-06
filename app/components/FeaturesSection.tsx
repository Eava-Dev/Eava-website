"use client";

import FadeIn from "./FadeIn";

const features = [
  {
    title: "24/7 Call Answering",
    copy: "Every call answered instantly, day or night, weekends and holidays included, so no lead ever goes to voicemail.",
    icon: (
      <path d="M4 5c0 8.284 6.716 15 15 15v-3.5a1.5 1.5 0 0 0-1.2-1.47l-3.2-.64a1.5 1.5 0 0 0-1.55.66l-.9 1.35a11.5 11.5 0 0 1-5.55-5.55l1.35-.9a1.5 1.5 0 0 0 .66-1.55l-.64-3.2A1.5 1.5 0 0 0 6.5 4H4Z" />
    ),
  },
  {
    title: "Lead Qualification & Appointment Requests",
    copy: "Eava asks the right questions, understands the job, and captures everything your team needs — so you can get the appointment on the books fast.",
    icon: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20a7 7 0 0 1 14 0" />
      </>
    ),
  },
  {
    title: "Emergency Detection & Instant Alerts",
    copy: "Urgent calls are recognized instantly, and you're notified by email right away with the caller's details and a call summary — so nothing urgent slips through.",
    icon: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M4 10h16M8 3v4M16 3v4" />
      </>
    ),
  },
  {
    title: "Missed Call Callback",
    copy: "If a call is ever missed, Eava calls the lead right back so they never go cold.",
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
    title: "Returning Caller Recognition",
    copy: "Eava recognizes repeat callers and greets them by name, so returning customers feel like more than just another number.",
    icon: (
      <>
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </>
    ),
  },
  {
    title: "Weekly Performance Reports",
    copy: "Get a clear weekly summary of every call, lead, and appointment — so you always know exactly how your phone line is performing.",
    icon: (
      <>
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
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
                aria-hidden="true"
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
