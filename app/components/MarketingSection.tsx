"use client";

import FadeIn from "./FadeIn";

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

export default function MarketingSection() {
  return (
    <section
      style={{
        background: "#0A0B0D",
        padding: "3rem 6vw 8rem",
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
          More Than a Bot.
          <br />
          An Employee Built For You.
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
          website in minutes. Eava is built by hand, for your business, a
          personal assistant tailored to you.
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
    </section>
  );
}
