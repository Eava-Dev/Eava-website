"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const calls = [
  {
    id: "hvac",
    title: "HVAC Service Request",
    industry: "Home Services",
    src: "/audio/hvac-sample-call.mp3",
  },
  {
    id: "plumbing",
    title: "Plumbing Emergency",
    industry: "Home Services",
    src: "/audio/plumbing-sample-call.mp3",
  },
];

function WaveformBar({ isPlaying, delay }: { isPlaying: boolean; delay: number }) {
  return (
    <motion.span
      style={{
        display: "inline-block",
        width: "3px",
        borderRadius: "1px",
        background: "#22D3EE",
      }}
      animate={
        isPlaying
          ? { height: ["30%", "100%", "45%", "80%", "30%"] }
          : { height: "20%" }
      }
      transition={
        isPlaying
          ? { duration: 1.1, repeat: Infinity, ease: "easeInOut", delay }
          : { duration: 0.2 }
      }
    />
  );
}

function AudioCard({
  call,
  isPlaying,
  onToggle,
  onEnded,
  index,
}: {
  call: (typeof calls)[number];
  isPlaying: boolean;
  onToggle: () => void;
  onEnded: () => void;
  index: number;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <FadeIn index={index}>
      <div
        style={{
          border: "1px solid rgba(34,211,238,0.2)",
          borderRadius: "4px",
          background: "rgba(255,255,255,0.02)",
          padding: "2rem",
          height: "100%",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#22D3EE",
          }}
        >
          {call.industry}
        </span>

        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "1.25rem",
            color: "#ffffff",
            marginTop: "0.6rem",
            marginBottom: "1.75rem",
          }}
        >
          {call.title}
        </h3>

        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <motion.button
            type="button"
            onClick={onToggle}
            aria-label={isPlaying ? "Pause" : "Play"}
            whileHover={{ background: "#0A0B0D", color: "#22D3EE" }}
            style={{
              flexShrink: 0,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid #22D3EE",
              background: "#22D3EE",
              color: "#0A0B0D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {isPlaying ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="3" y="2" width="4" height="12" rx="1" />
                <rect x="9" y="2" width="4" height="12" rx="1" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4 2.5v11l10-5.5-10-5.5Z" />
              </svg>
            )}
          </motion.button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              height: "24px",
            }}
          >
            {[0, 0.15, 0.3, 0.45, 0.6].map((delay, i) => (
              <WaveformBar key={i} isPlaying={isPlaying} delay={delay} />
            ))}
          </div>
        </div>

        <audio
          ref={audioRef}
          src={call.src}
          onEnded={onEnded}
          preload="none"
        />
      </div>
    </FadeIn>
  );
}

export default function HearEavaSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);

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
          }}
        >
          Hear Eava in Action
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
          Listen to real examples of how Eava handles calls across
          different industries
        </p>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {calls.map((call, i) => (
          <AudioCard
            key={call.id}
            call={call}
            index={i + 2}
            isPlaying={playingId === call.id}
            onToggle={() =>
              setPlayingId(playingId === call.id ? null : call.id)
            }
            onEnded={() => setPlayingId(null)}
          />
        ))}
      </div>
    </section>
  );
}
