import type { Metadata } from "next";
import OnboardingForm from "../components/onboarding/OnboardingForm";
import CalendlyEmbed from "../components/onboarding/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Client Onboarding · Eava",
};

export default function OnboardingPage() {
  return (
    <main style={{ background: "#0A0B0D", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "6rem 6vw 8rem",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#ffffff",
            marginBottom: "1rem",
          }}
        >
          Client Onboarding
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "1rem",
            color: "#E5E5E5",
            lineHeight: 1.6,
            marginBottom: "3rem",
          }}
        >
          Tell us about your business so we can build your AI voice agent
          exactly the way you want it. The more detail you give us, the
          better Eava will sound from day one.
        </p>
        <OnboardingForm />

        <div
          style={{
            border: "1px solid rgba(34,211,238,0.2)",
            borderRadius: "4px",
            background: "rgba(255,255,255,0.02)",
            padding: "2.5rem 2rem",
            marginTop: "2rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "1.4rem",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "0.5rem",
            }}
          >
            Or Pick a Time That Works for You
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "0.85rem",
              color: "#888888",
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
            Optional, not a required second step after submitting the form above.
          </p>
          <CalendlyEmbed />
        </div>
      </div>
    </main>
  );
}
