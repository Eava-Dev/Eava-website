"use client";

import FadeIn from "./FadeIn";
import WelcomeVideoPlayer from "./WelcomeVideoPlayer";

const blocks = [
  {
    title: "Lead Generation",
    copy: "Targeted local ads and outreach campaigns built to put your business in front of homeowners who are ready to book.",
  },
  {
    title: "Review and Reputation Management",
    copy: "Automated review requests after every job, plus monitoring so a bad review never sits unanswered.",
  },
  {
    title: "Follow Up Automation",
    copy: "Text and email sequences that reconnect with old leads and past customers, turning missed opportunities into booked jobs.",
  },
];

const highlights = [
  {
    title: "24/7 Coverage",
    copy: "Every call answered instantly, day or night, so no lead ever slips through the cracks",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  {
    title: "Sounds Completely Human",
    copy: "Callers get a natural, real conversation, not a robotic phone tree",
    icon: <path d="M4 5h16v10H8l-4 4V5Z" />,
  },
  {
    title: "Books Real Appointments",
    copy: "Straight into your calendar in real time, no manual follow up required",
    icon: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M4 10h16M8 3v4M16 3v4M9 14l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Grows Your Business",
    copy: "Marketing, reviews, and follow ups included, not just call answering",
    icon: (
      <>
        <path d="M4 16l6-6 4 4 6-8" />
        <path d="M15 6h5v5" />
      </>
    ),
  },
];

export default function MarketingSection() {
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
          }}
        >
          More Than Answering. Growing Your Business.
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
          }}
        >
          Eava does not just pick up the phone. We help fill your pipeline
          in the first place.
        </p>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {blocks.map((b, i) => (
          <FadeIn key={b.title} index={i + 2}>
            <div
              style={{
                borderTop: "1px solid rgba(34,211,238,0.2)",
                paddingTop: "1.5rem",
                height: "100%",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.15rem",
                  color: "#ffffff",
                  marginBottom: "0.6rem",
                }}
              >
                {b.title}
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
                {b.copy}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn index={5}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            color: "#E5E5E5",
            maxWidth: "760px",
            marginTop: "4rem",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            textAlign: "center",
          }}
        >
          One partner for the calls, the leads, and the growth.
        </p>
      </FadeIn>

      <FadeIn index={6}>
        <WelcomeVideoPlayer />
      </FadeIn>

      <FadeIn index={7}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: "760px",
            margin: "3.5rem auto 0",
          }}
        >
          {highlights.map((h) => (
            <div
              key={h.title}
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
                >
                  {h.icon}
                </svg>
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#ffffff",
                    marginBottom: "0.35rem",
                  }}
                >
                  {h.title}
                </h4>
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
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
