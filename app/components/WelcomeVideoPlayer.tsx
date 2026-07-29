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
        position: "relative",
        maxWidth: "760px",
        marginTop: "3.5rem",
        marginLeft: "auto",
        marginRight: "auto",
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
      />

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
            <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 2.5v11l10-5.5-10-5.5Z" />
            </svg>
          </motion.button>
        </div>
      )}
    </div>
  );
}
