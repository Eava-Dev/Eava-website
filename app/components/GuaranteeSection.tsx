"use client";

import FadeIn from "./FadeIn";

export default function GuaranteeSection() {
  return (
    <section
      style={{
        background: "#0A0B0D",
        padding: "6rem 6vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FadeIn>
        <div
          style={{
            border: "1px solid #22D3EE",
            borderRadius: "4px",
            background: "rgba(34,211,238,0.05)",
            boxShadow: "0 0 40px rgba(34,211,238,0.12)",
            padding: "3rem",
            maxWidth: "700px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid rgba(34,211,238,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#22D3EE"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            The Missed Call Guarantee
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "1rem",
              color: "#E5E5E5",
              lineHeight: 1.6,
            }}
          >
            If a verified technical failure on Eava's end causes a call
            to go unanswered, you get a free month of the AI Voice
            Agent service, credited to your account.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
