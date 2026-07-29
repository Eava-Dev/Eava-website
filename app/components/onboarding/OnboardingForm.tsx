"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";
import { FormSection, TextField, SelectField } from "./fields";
import { buildEmailFields, type OnboardingPayload } from "./emailFields";
import CalEmbed from "./CalEmbed";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const RECIPIENT_EMAIL = "Contact@eavaai.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialFormData: OnboardingPayload = {
  name: "",
  business: "",
  email: "",
  phone: "",
  industry: "",
  phoneProblem: "",
};

type SubmitStatus = "idle" | "submitting" | "sent" | "error";

function isRequiredFilled(data: OnboardingPayload): boolean {
  return (
    data.name.trim() !== "" &&
    data.business.trim() !== "" &&
    EMAIL_PATTERN.test(data.email.trim()) &&
    data.phone.trim() !== "" &&
    data.industry.trim() !== ""
  );
}

export default function OnboardingForm() {
  const [formData, setFormData] = useState<OnboardingPayload>(initialFormData);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [hasUnlocked, setHasUnlocked] = useState(false);

  const updateField = <K extends keyof OnboardingPayload>(
    key: K,
    value: OnboardingPayload[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cal = await getCalApi();
      if (cancelled) return;
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#22d3ee" } },
      });
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isRequiredFilled(formData)) {
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("submitting");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setSubmitStatus("error");
      return;
    }

    const fields = buildEmailFields(formData);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Onboarding Submission${
            formData.business ? `: ${formData.business}` : ""
          }`,
          from_name: "Eava Onboarding Form",
          email: RECIPIENT_EMAIL,
          ...fields,
        }),
      });

      const rawBody = await res.text();
      let data: { success?: boolean } = {};
      try {
        data = JSON.parse(rawBody);
      } catch {
        data = {};
      }

      if (res.ok && data.success) {
        setSubmitStatus("sent");
        setHasUnlocked(true);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormSection title="Your Details">
        <TextField
          label="Name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
        />
        <TextField
          label="Business"
          name="business"
          required
          value={formData.business}
          onChange={(e) => updateField("business", e.target.value)}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
        />
        <SelectField
          label="Industry"
          name="industry"
          required
          value={formData.industry}
          onChange={(v) => updateField("industry", v)}
          options={["HVAC", "Plumbing", "Electrical", "Other"]}
        />
        <TextField
          label="Current phone problem"
          name="phoneProblem"
          placeholder="What's frustrating about how your phones are handled now?"
          value={formData.phoneProblem}
          onChange={(e) => updateField("phoneProblem", e.target.value)}
        />
      </FormSection>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2.5rem",
        }}
      >
        <motion.button
          type="submit"
          disabled={submitStatus === "submitting"}
          whileHover={
            submitStatus === "submitting"
              ? undefined
              : { background: "#0A0B0D", color: "#22D3EE" }
          }
          style={{
            display: "inline-block",
            width: "fit-content",
            background: "#22D3EE",
            color: "#0A0B0D",
            border: "1px solid #22D3EE",
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "1rem 3rem",
            borderRadius: "2px",
            cursor: submitStatus === "submitting" ? "default" : "pointer",
            opacity: submitStatus === "submitting" ? 0.6 : 1,
          }}
        >
          {submitStatus === "submitting" ? "Submitting…" : "Submit"}
        </motion.button>

        {submitStatus === "sent" && (
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "0.9rem",
              color: "#22D3EE",
              textAlign: "center",
            }}
          >
            Got it, now pick a time below.
          </p>
        )}

        {submitStatus === "error" && (
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "0.8rem",
              color: "#ff6b6b",
              textAlign: "center",
            }}
          >
            Something went wrong submitting your details. Please try again.
          </p>
        )}
      </div>

      <div>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "0.95rem",
            color: "#E5E5E5",
            textAlign: "center",
            marginBottom: "1.25rem",
          }}
        >
          Pick a time that works for you to book your demo.
        </p>

        <div style={{ position: "relative" }}>
          <CalEmbed />
          {!hasUnlocked && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(10,11,13,0.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "2rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  color: "#888888",
                  maxWidth: "320px",
                }}
              >
                Submit your details above to unlock scheduling.
              </p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
