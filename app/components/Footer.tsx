export default function Footer() {
  return (
    <footer
      style={{
        background: "#0A0B0D",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "2rem 6vw",
        textAlign: "center",
      }}
    >
      <a
        href="/privacy"
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 300,
          fontSize: "0.75rem",
          color: "#888888",
          textDecoration: "underline",
        }}
      >
        Privacy Policy
      </a>
    </footer>
  );
}
