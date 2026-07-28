"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function OnboardingCTA() {
  return (
    <div
      style={{
        background: "#0A0B0D",
        padding: "5rem 6vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FadeIn>
        <motion.a
          href="/onboarding"
          whileHover={{ background: "rgba(34,211,238,0.08)" }}
          style={{
            display: "inline-block",
            width: "fit-content",
            background: "transparent",
            color: "#22D3EE",
            border: "1px solid rgba(34,211,238,0.5)",
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
          New Client? Start Here
        </motion.a>
      </FadeIn>
    </div>
  );
}
