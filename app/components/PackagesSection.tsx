"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const packages = [
  {
    badge: null,
    title: "Eava Starter",
    tagline: "Never miss another customer call.",
    highlighted: false,
    features: [
      "24/7 AI receptionist",
      "Answers every inbound call",
      "Qualifies new leads",
      "Books appointments",
      "Emergency call detection",
      "Missed call text back",
      "Client portal access, view your calls, leads, and appointments anytime",
      "Works with your existing phone number",
      "Dedicated onboarding and support",
    ],
  },
  {
    badge: "Most Popular",
    title: "Eava Essential",
    tagline:
      "Your assistant starts working even when you're not on the phone.",
    highlighted: true,
    features: [
      "Everything in Starter, plus:",
      "Two-way SMS",
      "Automated appointment reminders, Eava texts customers ahead of their appointment to confirm and cut down no-shows",
      "Automated follow-up for leads who didn't book",
      "Review requests after every completed job",
      "Full call recordings and transcripts in your portal",
      "Weekly and monthly reporting dashboard",
      "Higher monthly usage",
      "Priority support",
    ],
  },
  {
    badge: null,
    title: "Eava Pro",
    tagline: "A true personal assistant for your business.",
    highlighted: false,
    features: [
      "Everything in Essential, plus:",
      "Returning caller recognition, Eava knows your repeat customers and greets them accordingly",
      "Outbound quote follow-up, Eava reaches back out to leads who got a quote but haven't booked",
      "Win-back campaigns for past customers who haven't booked in a while",
      "Daily and weekly digest, a summary of everything Eava handled, sent straight to you",
      "Lead pipeline tracking in your portal",
      "Customer history across every call",
      "Advanced workflows",
      "Custom integrations",
      "Multiple departments or locations",
      "Fastest support",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#22D3EE"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: "0.2rem" }}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PackagesSection() {
  return (
    <section
      id="packages"
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
          Find the Right Fit for Your Business
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
          Every plan includes a custom-built AI voice agent tailored to
          your business, pricing depends on your call volume and needs
        </p>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        {packages.map((pkg, i) => (
          <FadeIn key={pkg.title} index={i + 2}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                border: pkg.highlighted
                  ? "1px solid #22D3EE"
                  : "1px solid rgba(34,211,238,0.2)",
                borderRadius: "4px",
                background: pkg.highlighted
                  ? "rgba(34,211,238,0.05)"
                  : "rgba(255,255,255,0.02)",
                padding: pkg.highlighted ? "2.5rem" : "2rem",
                boxShadow: pkg.highlighted
                  ? "0 0 40px rgba(34,211,238,0.12)"
                  : "none",
              }}
            >
              {pkg.badge && (
                <span
                  style={{
                    display: "inline-block",
                    width: "fit-content",
                    background: "#22D3EE",
                    color: "#0A0B0D",
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "2px",
                    marginBottom: "1.25rem",
                  }}
                >
                  {pkg.badge}
                </span>
              )}

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  color: "#ffffff",
                  marginBottom: "0.6rem",
                }}
              >
                {pkg.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  color: "#E5E5E5",
                  lineHeight: 1.5,
                  marginBottom: "1.75rem",
                }}
              >
                {pkg.tagline}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  marginBottom: "2rem",
                  flexGrow: 1,
                }}
              >
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 300,
                      fontSize: "0.9rem",
                      color: "#E5E5E5",
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="/onboarding"
                whileHover={{ background: "#0A0B0D", color: "#22D3EE" }}
                style={{
                  display: "inline-block",
                  width: "fit-content",
                  background: "#22D3EE",
                  color: "#0A0B0D",
                  border: "1px solid #22D3EE",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "0.9rem 2.2rem",
                  borderRadius: "2px",
                  textDecoration: "none",
                }}
              >
                Book Demo For Pricing
              </motion.a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
