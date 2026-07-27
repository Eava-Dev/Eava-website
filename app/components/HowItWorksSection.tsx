"use client";

import FadeIn from "./FadeIn";

const steps = [
  {
    title: "Call Comes In",
    copy: "A customer calls, any time, day or night",
    icon: (
      <path d="M4 5c0 8.284 6.716 15 15 15v-3.5a1.5 1.5 0 0 0-1.2-1.47l-3.2-.64a1.5 1.5 0 0 0-1.55.66l-.9 1.35a11.5 11.5 0 0 1-5.55-5.55l1.35-.9a1.5 1.5 0 0 0 .66-1.55l-.64-3.2A1.5 1.5 0 0 0 6.5 4H4Z" />
    ),
  },
  {
    title: "Eava Answers",
    copy: "Sounds human, asks the right questions",
    icon: <path d="M4 5h16v10H8l-4 4V5Z" />,
  },
  {
    title: "Job Gets Booked",
    copy: "Straight into your calendar, in real time",
    icon: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M4 10h16M8 3v4M16 3v4M9 14l2 2 4-4" />
      </>
    ),
  },
  {
    title: "You Get Notified",
    copy: "Instant text or email, no missed opportunity",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4M12 16h.01" />
      </>
    ),
  },
];

export default function HowItWorksSection() {
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
          How It Works
        </h2>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
        }}
      >
        {steps.map((step, i) => (
          <FadeIn key={step.title} index={i + 1}>
            <div
              style={{
                borderTop: "1px solid rgba(34,211,238,0.2)",
                paddingTop: "1.5rem",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(34,211,238,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {step.icon}
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  color: "#ffffff",
                  marginBottom: "0.5rem",
                }}
              >
                {step.title}
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
                {step.copy}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
