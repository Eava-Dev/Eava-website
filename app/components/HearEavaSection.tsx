"use client";

import FadeIn from "./FadeIn";

const highlights = [
  {
    title: "Every Call Qualified",
    copy: "Eava asks the right questions on every call to gauge urgency, so nothing gets missed or mishandled",
    icon: <path d="M4 4h16l-6 8v7l-4 2v-9L4 4Z" />,
  },
  {
    title: "Instant Follow-Up on Missed Calls",
    copy: "Automatic text-back the moment a call is missed, turning after-hours calls into booked jobs instead of lost revenue",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4M12 16h.01" />
      </>
    ),
  },
  {
    title: "Upsell Opportunities Flagged",
    copy: "Eava recognizes add-on and upgrade opportunities during the call and notes them for your team to close",
    icon: (
      <>
        <path d="M6 3v18" />
        <path d="M6 4h12l-3 4 3 4H6" />
      </>
    ),
  },
  {
    title: "Nothing Falls Through the Cracks",
    copy: "Every call is summarized and logged, so no potential job ever gets forgotten or lost in the shuffle",
    icon: (
      <>
        <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
];

export default function HearEavaSection() {
  return (
    <section
      id="hear-eava"
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
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          Every Call, Handled Right
        </h2>
      </FadeIn>

      <FadeIn index={1}>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "1.05rem",
            color: "#E5E5E5",
            maxWidth: "600px",
            lineHeight: 1.6,
            marginTop: "1.25rem",
            marginBottom: "4rem",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          Here&rsquo;s what happens behind the scenes on every call Eava
          takes.
        </p>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          maxWidth: "760px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {highlights.map((h, i) => (
          <FadeIn key={h.title} index={i + 2}>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(34,211,238,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                  aria-hidden="true"
                >
                  {h.icon}
                </svg>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#ffffff",
                    marginBottom: "0.35rem",
                  }}
                >
                  {h.title}
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
                  {h.copy}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
