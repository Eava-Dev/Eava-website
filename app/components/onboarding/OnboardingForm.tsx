"use client";

import { useEffect, useRef, useState } from "react";
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

type SubmitStatus = "idle" | "sent" | "error";

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

  const formDataRef = useRef(formData);
  formDataRef.current = formData;

  const updateField = <K extends keyof OnboardingPayload>(
    key: K,
    value: OnboardingPayload[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const isReady = isRequiredFilled(formData);

  useEffect(() => {
    const handleBookingSuccessful = () => {
      const current = formDataRef.current;
      if (!isRequiredFilled(current)) return;

      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        setSubmitStatus("error");
        return;
      }

      const fields = buildEmailFields(current);

      fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Onboarding Submission${
            current.business ? `: ${current.business}` : ""
          }`,
          from_name: "Eava Onboarding Form",
          email: RECIPIENT_EMAIL,
          ...fields,
        }),
      })
        .then(async (res) => {
          const rawBody = await res.text();
          let data: { success?: boolean } = {};
          try {
            data = JSON.parse(rawBody);
          } catch {
            data = {};
          }
          setSubmitStatus(res.ok && data.success ? "sent" : "error");
        })
        .catch(() => setSubmitStatus("error"));
    };

    let cal: Awaited<ReturnType<typeof getCalApi>> | null = null;
    let cancelled = false;

    (async () => {
      const api = await getCalApi();
      if (cancelled) return;
      cal = api;
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#22d3ee" } },
      });
      cal("on", {
        action: "bookingSuccessfulV2",
        callback: handleBookingSuccessful,
      });
    })();

    return () => {
      cancelled = true;
      if (cal) {
        cal("off", {
          action: "bookingSuccessfulV2",
          callback: handleBookingSuccessful,
        });
      }
    };
  }, []);

  return (
    <>
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

      <div style={{ marginTop: "2rem" }}>
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
          {!isReady && (
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
                Fill in your details above to unlock scheduling.
              </p>
            </div>
          )}
        </div>

        {submitStatus === "error" && (
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "0.8rem",
              color: "#ff6b6b",
              textAlign: "center",
              marginTop: "0.85rem",
            }}
          >
            We couldn&rsquo;t save your details automatically. Your booking
            still went through, please email us your details directly too.
          </p>
        )}
      </div>
    </>
  );
}
