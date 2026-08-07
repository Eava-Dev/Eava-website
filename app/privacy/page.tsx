import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy · Eava",
};

const h2Style: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  fontSize: "1.5rem",
  color: "#ffffff",
  marginTop: "2.5rem",
  marginBottom: "1rem",
};

const pStyle: CSSProperties = {
  fontFamily: "var(--font-inter)",
  fontWeight: 300,
  fontSize: "0.95rem",
  color: "#E5E5E5",
  lineHeight: 1.7,
  marginBottom: "1.25rem",
};

const linkStyle: CSSProperties = {
  color: "#22D3EE",
  textDecoration: "underline",
};

const leadStyle: CSSProperties = {
  color: "#ffffff",
  fontWeight: 500,
};

export default function PrivacyPolicyPage() {
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
            marginBottom: "0.75rem",
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "0.85rem",
            color: "#888888",
            marginBottom: "2.5rem",
          }}
        >
          Last updated: August 6, 2026
        </p>

        <p style={pStyle}>
          Eava AI (&ldquo;Eava,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
          explains what information we collect through eavaai.com (the
          &ldquo;Site&rdquo;), why we collect it, and who we share it with.
        </p>

        <p style={pStyle}>
          We update this page as our practices change.
        </p>

        <h2 style={h2Style}>Information We Collect</h2>

        <p style={pStyle}>
          <span style={leadStyle}>Contact form.</span> If you fill out our
          contact/demo request form, we collect your name, business name,
          email address, phone number, industry, and any details you
          provide about your current phone/call-handling situation.
        </p>

        <p style={pStyle}>
          <span style={leadStyle}>Booking a demo.</span> If you book a call
          through our scheduling widget, we collect your name, email
          address, timezone, and the appointment details you select.
        </p>

        <p style={pStyle}>
          <span style={leadStyle}>Live voice demo.</span> If you choose to
          start a live voice demo on this Site, your voice is processed in
          real time, and the conversation may be recorded and transcribed
          for demonstration and quality purposes. This only happens if you
          actively click to start the demo &mdash; nothing is recorded
          before that.
        </p>

        <p style={pStyle}>
          <span style={leadStyle}>Standard technical information.</span>{" "}
          Like most websites, our hosting provider automatically logs
          standard technical information such as IP address and request
          data as part of normal server operation.
        </p>

        <h2 style={h2Style}>How We Use Third-Party Services</h2>

        <p style={pStyle}>
          We use trusted third-party services to operate this Site. When
          you interact with these features, your information is also
          subject to that provider&rsquo;s own privacy policy:
        </p>

        <ul
          style={{
            listStyle: "disc",
            paddingLeft: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
            marginBottom: "1.25rem",
          }}
        >
          <li style={pStyle}>
            <span style={leadStyle}>Form processing service</span>{" "}
            &mdash; processes and delivers contact form submissions to our
            team by email.
          </li>
          <li style={pStyle}>
            <span style={leadStyle}>Scheduling service</span> &mdash;
            powers our appointment scheduling widget.
          </li>
          <li style={pStyle}>
            <span style={leadStyle}>Voice AI technology provider</span>{" "}
            &mdash; powers our live voice demo, including real-time voice
            processing and any recording/transcription of that demo call.
          </li>
          <li style={pStyle}>
            <span style={leadStyle}>Hosting provider</span> &mdash; our
            website hosting provider.
          </li>
        </ul>

        <p style={pStyle}>We do not sell your personal information.</p>

        <h2 style={h2Style}>Voice Data Notice</h2>

        <p style={pStyle}>
          Because our live demo processes and may record your voice,
          please be aware that voice data can be considered sensitive or
          biometric information under certain state laws. By choosing to
          start the live voice demo, you consent to your voice being
          processed and potentially recorded and transcribed by our voice
          AI provider for the purpose of demonstrating our product. If you
          do not wish for this to happen, simply do not start the live
          voice demo &mdash; you can still explore the rest of the Site
          and contact us through the form instead.
        </p>

        <h2 style={h2Style}>Your Choices</h2>

        <p style={pStyle}>
          You can contact us at{" "}
          <a href="mailto:hello@eavaai.com" style={linkStyle}>
            hello@eavaai.com
          </a>{" "}
          at any time to ask what information we have about you, request a
          copy of it, or request that we delete it. We&rsquo;ll respond as
          quickly as we reasonably can.
        </p>

        <p style={pStyle}>
          If you are located in the European Economic Area, United
          Kingdom, or California, you may have additional rights under
          GDPR or CCPA/CPRA regarding your personal information, including
          the right to access, correct, or delete your data. Contact us at
          the email above to make a request.
        </p>

        <h2 style={h2Style}>Data Retention</h2>

        <p style={pStyle}>
          We retain contact form submissions and demo booking information
          for as long as reasonably necessary to respond to your inquiry
          and operate our business, unless you request deletion sooner.
          Voice demo recordings/transcripts are retained according to our
          voice AI provider&rsquo;s standard retention practices.
        </p>

        <h2 style={h2Style}>Children&rsquo;s Privacy</h2>

        <p style={pStyle}>
          This Site is intended for business owners and is not directed at
          children. We do not knowingly collect information from anyone
          under 18.
        </p>

        <h2 style={h2Style}>Changes to This Policy</h2>

        <p style={pStyle}>
          We may update this Privacy Policy from time to time. The
          &ldquo;Last updated&rdquo; date at the top of this page will
          reflect the most recent changes.
        </p>

        <h2 style={h2Style}>Contact Us</h2>

        <p style={pStyle}>
          Questions about this policy? Reach out to us at{" "}
          <a href="mailto:hello@eavaai.com" style={linkStyle}>
            hello@eavaai.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
