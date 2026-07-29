"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function ClosingCTA() {
  return (
    <section
      style={{
        background: "#0A0B0D",
        padding: "10rem 6vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
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
          Ready When You Are
        </span>
      </FadeIn>

      <FadeIn index={1}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
            color: "#ffffff",
            marginTop: "1.25rem",
            lineHeight: 1.15,
          }}
        >
          Your next customer is calling.
          <br />
          <span style={{ fontStyle: "italic", color: "#E5E5E5" }}>
            Eava is already answering.
          </span>
        </h2>
      </FadeIn>

      <FadeIn index={2}>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "1.05rem",
            color: "#E5E5E5",
            maxWidth: "480px",
            marginTop: "1.5rem",
            lineHeight: 1.6,
          }}
        >
          See how Eava answers, qualifies, and books your calls before you
          even pick up the phone. Fifteen minutes, no obligation.
        </p>
      </FadeIn>

      <FadeIn index={3}>
        <div
          style={{
            position: "relative",
            marginTop: "2.75rem",
            display: "inline-block",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-60px",
              background:
                "radial-gradient(ellipse, rgba(34,211,238,0.15) 0%, transparent 70%)",
              zIndex: 0,
            }}
          />
          <motion.a
            href="/onboarding"
            whileHover={{ background: "#0A0B0D", color: "#22D3EE" }}
            style={{
              position: "relative",
              zIndex: 1,
              display: "inline-block",
              background: "#22D3EE",
              color: "#0A0B0D",
              border: "1px solid #22D3EE",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.9rem 2.6rem",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            Book a Free Demo
          </motion.a>
        </div>
      </FadeIn>
    </section>
  );
}
