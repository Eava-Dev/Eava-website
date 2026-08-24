export default function Footer() {
  return (
    <footer
      style={{
        background: "#0A0B0D",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "2rem 6vw",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.6rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 300,
          fontSize: "0.75rem",
          color: "#888888",
        }}
      >
        EAVA AI &middot;{" "}
        <a
          href="mailto:hello@eavaai.com"
          style={{ color: "#888888", textDecoration: "underline" }}
        >
          hello@eavaai.com
        </a>{" "}
        &middot;{" "}
        <a
          href="/privacy"
          style={{ color: "#888888", textDecoration: "underline" }}
        >
          Privacy Policy
        </a>
      </span>
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 300,
          fontSize: "0.7rem",
          color: "#555555",
        }}
      >
        &copy; 2026 EAVA AI. All rights reserved.
      </span>
    </footer>
  );
}
