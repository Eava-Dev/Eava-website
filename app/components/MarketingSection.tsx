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
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          One partner for the calls, the leads, and the growth.
        </p>
      </FadeIn>

      <FadeIn index={6}>
        <WelcomeVideoPlayer />
      </FadeIn>
    </section>
  );
}
