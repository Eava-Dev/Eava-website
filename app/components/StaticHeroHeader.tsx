"use client";

import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

export default function StaticHeroHeader() {
  const [logoCutoutSrc, setLogoCutoutSrc] = useState<string | null>(null);

  useEffect(() => {
    const src = new Image();
    src.src = "/eava-logo.png";
    src.onload = () => {
      const off = document.createElement("canvas");
      off.width = src.naturalWidth;
      off.height = src.naturalHeight;
      const octx = off.getContext("2d");
      if (!octx) return;
      octx.drawImage(src, 0, 0);
      const imageData = octx.getImageData(0, 0, off.width, off.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const luminance = Math.max(data[i], data[i + 1], data[i + 2]);
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
        data[i + 3] = luminance;
      }
      octx.putImageData(imageData, 0, 0);
      setLogoCutoutSrc(off.toDataURL("image/png"));
    };
  }, []);

  return (
    <div
      style={{
        background: "#0A0B0D",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "clamp(1rem, 3vh, 2rem)",
        padding: "clamp(4rem, 10vh, 6rem) 7vw clamp(2rem, 5vh, 3rem)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(1rem, 2.5vh, 1.5rem)",
          flexShrink: 0,
        }}
      >
        {logoCutoutSrc && (
          <FadeIn index={0}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "calc(clamp(2.6rem, 7.5vw, 8rem) * 4.0781)",
                height: "calc(clamp(2.6rem, 7.5vw, 8rem) * 0.8013)",
              }}
            >
              <img
                src={logoCutoutSrc}
                alt="Eava"
                style={{
                  position: "absolute",
                  left: "calc(clamp(2.6rem, 7.5vw, 8rem) * -0.5104)",
                  top: "calc(clamp(2.6rem, 7.5vw, 8rem) * -0.8123)",
                  width: "calc(clamp(2.6rem, 7.5vw, 8rem) * 4.948)",
                  height: "auto",
                }}
              />
            </div>
          </FadeIn>
        )}

        <FadeIn index={1}>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#22D3EE",
            }}
          >
            Voice Agent · Growth Agent
          </span>
        </FadeIn>
      </div>

      <FadeIn index={2}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <a
            href="https://portal.eavaai.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              width: "fit-content",
              background: "transparent",
              color: "#888888",
              border: "1px solid rgba(255,255,255,0.2)",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.85rem 1.8rem",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            Client Portal
          </a>
          <a
            href="/onboarding"
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
              padding: "0.85rem 1.8rem",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            New Client? Start Here
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
