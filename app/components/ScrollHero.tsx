"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FRAME_COUNT = 241;

function frameSrc(index: number) {
  const n = String(index + 1).padStart(4, "0");
  return `/frames/frame_${n}.jpg`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.1, duration: 0.8, ease: "easeOut" as const },
  }),
};

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentIdxRef = useRef(-1);
  const [ready, setReady] = useState(false);
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = (index: number) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = window.devicePixelRatio || 1;
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;

      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
      currentIdxRef.current = index;
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (currentIdxRef.current >= 0) draw(currentIdxRef.current);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let loaded = 0;
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      img.onload = () => {
        loaded += 1;
        if (i === 0) draw(0);
        if (loaded === FRAME_COUNT) setReady(true);
      };
      images.push(img);
    }
    imagesRef.current = images;

    let rafId: number;
    const tick = () => {
      const rect = container.getBoundingClientRect();
      const scrollable = container.offsetHeight - window.innerHeight;
      const progress =
        scrollable > 0
          ? Math.max(0, Math.min(1, -rect.top / scrollable))
          : 0;
      const target = Math.round(progress * (FRAME_COUNT - 1));
      if (target !== currentIdxRef.current) draw(target);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "300vh", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background: "#0A0B0D",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100%", height: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 6vw 8vh",
          }}
        >
          <motion.span
            custom={0}
            initial="hidden"
            animate={ready ? "visible" : "hidden"}
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#22D3EE",
              marginBottom: "2.5rem",
            }}
          >
            AI Voice Agent · AI Marketing Agent
          </motion.span>

          {logoCutoutSrc && (
            <motion.div
              custom={1}
              initial="hidden"
              animate={ready ? "visible" : "hidden"}
              variants={fadeUp}
              style={{
                position: "relative",
                overflow: "hidden",
                width: "calc(clamp(2.4rem, 6vw, 5.5rem) * 4.0781)",
                height: "calc(clamp(2.4rem, 6vw, 5.5rem) * 0.8013)",
                marginBottom: "2.5rem",
              }}
            >
              <img
                src={logoCutoutSrc}
                alt="Eava"
                style={{
                  position: "absolute",
                  left: "calc(clamp(2.4rem, 6vw, 5.5rem) * -0.5104)",
                  top: "calc(clamp(2.4rem, 6vw, 5.5rem) * -0.8123)",
                  width: "calc(clamp(2.4rem, 6vw, 5.5rem) * 4.948)",
                  height: "auto",
                }}
              />
            </motion.div>
          )}

          <motion.p
            custom={2}
            initial="hidden"
            animate={ready ? "visible" : "hidden"}
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "1.05rem",
              color: "#E5E5E5",
              maxWidth: "460px",
              lineHeight: 1.5,
              marginBottom: "2.25rem",
            }}
          >
            We generate you more calls and ensure every one turns into a
            booked job.
          </motion.p>

          <motion.a
            href="#features"
            custom={3}
            initial="hidden"
            animate={ready ? "visible" : "hidden"}
            variants={fadeUp}
            style={{
              display: "inline-block",
              width: "fit-content",
              background: "#22D3EE",
              color: "#0A0B0D",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.9rem 2.6rem",
              borderRadius: "2px",
              textDecoration: "none",
              pointerEvents: "auto",
            }}
          >
            See Eava in Action
          </motion.a>
        </div>
      </div>
    </div>
  );
}
