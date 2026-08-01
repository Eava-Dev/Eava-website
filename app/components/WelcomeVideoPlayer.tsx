"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function WelcomeVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    videoRef.current?.play();
  };

  return (
    <div
      style={{
        maxWidth: "760px",
        marginTop: "3.5rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        style={{
          position: "relative",
          border: "1px solid rgba(34,211,238,0.2)",
          borderRadius: "4px",
          overflow: "hidden",
          background: "#000000",
        }}
      >
        <video
          ref={videoRef}
          src="/video/final_output_mixed.mp4"
          controls
          playsInline
          autoPlay={false}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            aspectRatio: "16 / 9",
            background: "#000000",
          }}
        >
          <track
            kind="captions"
            src="/captions/welcome-en.vtt"
            srcLang="en"
            label="English"
            default
          />
        </video>

        {!isPlaying && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 70%)",
              }}
            />
            <motion.button
              type="button"
              onClick={handlePlayClick}
              aria-label="Play welcome video"
              whileHover={{ background: "#0A0B0D", color: "#22D3EE" }}
              style={{
                position: "relative",
                pointerEvents: "auto",
                width: "72px",
                height: "72px",
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4 2.5v11l10-5.5-10-5.5Z" />
              </svg>
            </motion.button>
          </div>
        )}
      </div>

      <details style={{ marginTop: "1rem" }}>
        <summary
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: "0.8rem",
            letterSpacing: "0.05em",
            color: "#888888",
            cursor: "pointer",
          }}
        >
          Video transcript
        </summary>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "0.9rem",
            color: "#E5E5E5",
            lineHeight: 1.6,
            marginTop: "0.75rem",
          }}
        >
          It&rsquo;s her birthday. Not a customer&rsquo;s emergency. Right
          now, you&rsquo;re crouched down, ready to help her blow out the
          candles. And somewhere, a phone lights up. But you don&rsquo;t
          reach for it. Because Eava is already on it, twenty-four seven,
          answering, booking, following up, running the front of your
          business like a real employee would. So you get to actually
          enjoy the things you deserve. Eava. Your all-around AI employee,
          working while you live your life.
        </p>
      </details>
    </div>
  );
}
