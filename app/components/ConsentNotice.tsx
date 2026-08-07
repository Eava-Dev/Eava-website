"use client";

import { motion } from "framer-motion";

export default function ConsentNotice({
  onContinue,
}: {
  onContinue: () => void;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(34,211,238,0.2)",
        borderRadius: "4px",
        background: "rgba(255,255,255,0.02)",
        padding: "1.25rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.85rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 300,
          fontSize: "0.85rem",
          color: "#E5E5E5",
          lineHeight: 1.5,
          maxWidth: "440px",
        }}
      >
        This site uses third-party tools that may set cookies or process
        data (scheduling, live voice demo). Continuing means you&rsquo;re
        okay with that &mdash; see our{" "}
        <a
          href="/privacy"
          style={{ color: "#22D3EE", textDecoration: "underline" }}
        >
          Privacy Policy
        </a>{" "}
        for details.
      </p>
      <motion.button
        type="button"
        onClick={onContinue}
        whileHover={{ background: "#0A0B0D", color: "#22D3EE" }}
        style={{
          display: "inline-block",
          background: "#22D3EE",
          color: "#0A0B0D",
          border: "1px solid #22D3EE",
          fontFamily: "var(--font-inter)",
          fontWeight: 500,
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          padding: "0.7rem 2rem",
          borderRadius: "2px",
          cursor: "pointer",
        }}
      >
        Continue
      </motion.button>
    </div>
  );
}
