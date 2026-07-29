"use client";

import FadeIn from "./FadeIn";
import WelcomeVideoPlayer from "./WelcomeVideoPlayer";

const blocks = [
  {
    title: "Generic AI Receptionists",
    copy: "Self-serve setup, scraped from your website. Generic scripts that guess at answers. Support is a ticket queue. You configure it yourself and live with the limits.",
    highlighted: false,
  },
  {
    title: "Phone Systems With AI Bolted On",
    copy: "Built for companies who need an entire phone system. AI answering is an add-on feature, not the product. Support scales to thousands of accounts, not your specific business.",
    highlighted: false,
  },
  {
    title: "Eava",
    copy: "Built entirely around your business, your services, your pricing, your emergency process, not a generic script. Every call flow is custom designed and tested before it ever answers a real customer. No guessing what a caller means, no robotic dead ends. It's a personal assistant in your back pocket, always on, always representing your business exactly the way you want. Your agent evolves as your business does, updated whenever something changes, not locked into a one size fits all template.",
    highlighted: true,
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
          More Than a Bot. A Front Desk Built For You.
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
          Every other AI answering service configures itself from your
          website in minutes. Eava is built by hand, for your business, by
          people who pick up the phone when you call.
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
              style={
                b.highlighted
                  ? {
                      border: "1px solid #22D3EE",
                      borderRadius: "4px",
                      background: "rgba(34,211,238,0.06)",
                      boxShadow: "0 0 40px rgba(34,211,238,0.12)",
                      padding: "2rem",
                      height: "100%",
                    }
                  : {
                      borderTop: "1px solid rgba(34,211,238,0.2)",
                      paddingTop: "1.5rem",
                      height: "100%",
                    }
              }
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: b.highlighted ? 700 : 500,
                  fontSize: b.highlighted ? "1.35rem" : "1.15rem",
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
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: "1.05rem",
            color: "#E5E5E5",
            maxWidth: "700px",
            marginTop: "3rem",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          You are not buying software. You are getting a front desk that
          actually knows your business, backed by people who do too.
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
