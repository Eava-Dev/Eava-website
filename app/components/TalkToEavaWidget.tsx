"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

type Status = "checking" | "available" | "cooldown" | "claiming" | "active";

export default function TalkToEavaWidget() {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    let cancelled = false;
    fetch("/api/cooldown", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setStatus(data.allowed ? "available" : "cooldown");
      })
      .catch(() => {
        if (!cancelled) setStatus("cooldown");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleStartCall = () => {
    setStatus("claiming");
    fetch("/api/cooldown", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.allowed ? "active" : "cooldown");
      })
      .catch(() => {
        setStatus("cooldown");
      });
  };

  useEffect(() => {
    if (status !== "active") return;

    const publicKey = process.env.NEXT_PUBLIC_RETELL_VOICE_PUBLIC_KEY;
    const agentId = process.env.NEXT_PUBLIC_RETELL_VOICE_AGENT_ID;
    if (!publicKey || !agentId) return;

    const script = document.createElement("script");
    script.id = "retell-widget";
    script.src = "https://dashboard.retellai.com/retell-widget-v2.js";
    script.type = "module";
    script.setAttribute("data-voice-public-key", publicKey);
    script.setAttribute("data-voice-agent-id", agentId);
    script.setAttribute("data-fab-text", "Talk to Eava");
    script.setAttribute("data-title", "Talk to Eava");
    script.setAttribute("data-bot-name", "Eava");
    script.setAttribute("data-theme-color", "#0A0B0D");
    script.setAttribute("data-component-color", "#22D3EE");
    script.setAttribute("data-color", "#22D3EE");

    document.head.appendChild(script);

    return () => {
      document.getElementById("retell-widget")?.remove();
    };
  }, [status]);

  return (
    <div
      style={{
        background: "#0A0B0D",
        padding: "3rem 6vw 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FadeIn>
        <div
          style={{
            border: "1px solid rgba(34,211,238,0.2)",
            borderRadius: "4px",
            background: "rgba(255,255,255,0.02)",
            padding: "2rem",
            maxWidth: "560px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid rgba(34,211,238,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.25rem",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#22D3EE"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4Z" />
              <path d="M6 11a6 6 0 0 0 12 0M12 21v-4" />
            </svg>
          </div>

          {status === "cooldown" ? (
            <>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1.3rem",
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                }}
              >
                You&rsquo;ve Already Talked to Eava Today
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "#E5E5E5",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Live demo calls are limited to one per day. Want to go
                deeper? Book time with our team instead.
              </p>
              <motion.a
                href="https://calendly.com/taylor-eavaai/30min"
                target="_blank"
                rel="noopener noreferrer"
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
                  padding: "0.9rem 2.2rem",
                  borderRadius: "2px",
                  textDecoration: "none",
                }}
              >
                Book a Demo
              </motion.a>
            </>
          ) : (
            <>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1.3rem",
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                }}
              >
                Talk to Eava, Live
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "#E5E5E5",
                  lineHeight: 1.6,
                  marginBottom:
                    status === "available" || status === "claiming"
                      ? "1.5rem"
                      : 0,
                }}
              >
                {status === "checking" &&
                  "Loading…"}
                {(status === "available" || status === "claiming") &&
                  "Start a live voice conversation with Eava, right in your browser."}
                {status === "active" &&
                  "Click the “Talk to Eava” button in the corner of your screen to start a live voice conversation."}
              </p>
              {(status === "available" || status === "claiming") && (
                <motion.button
                  type="button"
                  onClick={handleStartCall}
                  disabled={status === "claiming"}
                  whileHover={
                    status === "claiming"
                      ? undefined
                      : { background: "#0A0B0D", color: "#22D3EE" }
                  }
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
                    padding: "0.9rem 2.2rem",
                    borderRadius: "2px",
                    cursor: status === "claiming" ? "default" : "pointer",
                    opacity: status === "claiming" ? 0.6 : 1,
                  }}
                >
                  {status === "claiming" ? "Starting…" : "Start Live Demo"}
                </motion.button>
              )}
            </>
          )}
        </div>
      </FadeIn>
    </div>
  );
}
