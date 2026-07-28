"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FormSection,
  FieldLabel,
  TextField,
  TextAreaField,
  RadioGroupField,
  CheckboxGroupField,
} from "./fields";

interface QAPair {
  question: string;
  answer: string;
}

interface OnboardingFormData {
  businessName: string;
  industry: string;
  businessAddress: string;
  businessHours: string;
  serviceArea: string;
  currentPhone: string;
  phonePreference: string;

  callReasons: string[];
  bookingMode: string;
  callerInfo: string[];

  hasEmergencies: string;
  emergencyDescription: string;
  emergencyPhone: string;
  noEmergencyHandling: string;

  services: string;
  pricingMode: string;
  pricingDetails: string;

  faqs: QAPair[];

  tone: string;
  toneOther: string;
  neverSayDo: string;
  introLine: string;

  notifyName: string;
  notifyPhone: string;
  notifyEmail: string;
  notificationMethods: string[];
  sendCustomerConfirmation: string;

  additionalDetails: string;
}

const initialFormData: OnboardingFormData = {
  businessName: "",
  industry: "",
  businessAddress: "",
  businessHours: "",
  serviceArea: "",
  currentPhone: "",
  phonePreference: "",

  callReasons: [],
  bookingMode: "",
  callerInfo: [],

  hasEmergencies: "",
  emergencyDescription: "",
  emergencyPhone: "",
  noEmergencyHandling: "",

  services: "",
  pricingMode: "",
  pricingDetails: "",

  faqs: [
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
  ],

  tone: "",
  toneOther: "",
  neverSayDo: "",
  introLine: "",

  notifyName: "",
  notifyPhone: "",
  notifyEmail: "",
  notificationMethods: [],
  sendCustomerConfirmation: "",

  additionalDetails: "",
};

type ListField = "callReasons" | "callerInfo" | "notificationMethods";

type Status = "idle" | "submitting" | "submitted" | "error";

export default function OnboardingForm() {
  const [formData, setFormData] = useState<OnboardingFormData>(initialFormData);
  const [status, setStatus] = useState<Status>("idle");

  const updateField = <K extends keyof OnboardingFormData>(
    key: K,
    value: OnboardingFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleListValue = (key: ListField, value: string) => {
    setFormData((prev) => {
      const list = prev[key];
      const next = list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value];
      return { ...prev, [key]: next };
    });
  };

  const updateFaq = (index: number, field: keyof QAPair, value: string) => {
    setFormData((prev) => {
      const faqs = prev.faqs.map((faq, i) =>
        i === index ? { ...faq, [field]: value } : faq
      );
      return { ...prev, faqs };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("submitted");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "submitted") {
    return (
      <div
        style={{
          border: "1px solid rgba(34,211,238,0.2)",
          borderRadius: "4px",
          background: "rgba(255,255,255,0.02)",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "1.6rem",
            color: "#ffffff",
            marginBottom: "0.75rem",
          }}
        >
          Thanks!
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
          We&rsquo;ll be in touch within 3-5 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormSection title="1. Business Basics">
        <TextField
          label="Business Name"
          name="businessName"
          required
          value={formData.businessName}
          onChange={(e) => updateField("businessName", e.target.value)}
        />
        <TextField
          label="Industry / Type of Business"
          name="industry"
          required
          value={formData.industry}
          onChange={(e) => updateField("industry", e.target.value)}
        />
        <TextField
          label="Business Address"
          name="businessAddress"
          value={formData.businessAddress}
          onChange={(e) => updateField("businessAddress", e.target.value)}
        />
        <TextAreaField
          label="Business Hours"
          name="businessHours"
          placeholder="e.g. Mon-Fri 8am-6pm, Sat 9am-2pm, Sun closed"
          value={formData.businessHours}
          onChange={(e) => updateField("businessHours", e.target.value)}
        />
        <TextField
          label="Service Area"
          name="serviceArea"
          placeholder="Cities, zip codes, or radius you serve"
          value={formData.serviceArea}
          onChange={(e) => updateField("serviceArea", e.target.value)}
        />
        <TextField
          label="Current Business Phone Number"
          name="currentPhone"
          value={formData.currentPhone}
          onChange={(e) => updateField("currentPhone", e.target.value)}
        />
        <RadioGroupField
          label="Keep your current number, or set up a new dedicated number?"
          name="phonePreference"
          value={formData.phonePreference}
          onChange={(v) => updateField("phonePreference", v)}
          options={[
            { value: "keep", label: "Keep current number" },
            { value: "new", label: "New dedicated number" },
          ]}
        />
      </FormSection>

      <FormSection title="2. What the AI Agent Should Handle">
        <CheckboxGroupField
          label="Main reasons customers call"
          values={formData.callReasons}
          onToggle={(v) => toggleListValue("callReasons", v)}
          options={[
            "Booking appointment/service",
            "Placing an order",
            "Checking existing appointment/order",
            "Pricing questions",
            "General questions",
            "Emergency/urgent requests",
            "Other",
          ]}
        />
        <RadioGroupField
          label="Should the AI book directly, or just collect info?"
          name="bookingMode"
          value={formData.bookingMode}
          onChange={(v) => updateField("bookingMode", v)}
          options={[
            { value: "book", label: "Book directly" },
            { value: "collect", label: "Collect info only" },
          ]}
        />
        <CheckboxGroupField
          label="Info to collect from callers"
          values={formData.callerInfo}
          onToggle={(v) => toggleListValue("callerInfo", v)}
          options={[
            "Name",
            "Phone number",
            "Address",
            "Reason for call",
            "Preferred date/time",
            "Other",
          ]}
        />
      </FormSection>

      <FormSection title="3. Emergency / Urgent Calls">
        <RadioGroupField
          label="Does your business have true emergencies that need a live person?"
          name="hasEmergencies"
          value={formData.hasEmergencies}
          onChange={(v) => updateField("hasEmergencies", v)}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
        />
        {formData.hasEmergencies === "yes" && (
          <>
            <TextAreaField
              label="Describe what qualifies as an emergency"
              name="emergencyDescription"
              value={formData.emergencyDescription}
              onChange={(e) =>
                updateField("emergencyDescription", e.target.value)
              }
            />
            <TextField
              label="Phone number for emergency transfer"
              name="emergencyPhone"
              value={formData.emergencyPhone}
              onChange={(e) => updateField("emergencyPhone", e.target.value)}
            />
          </>
        )}
        {formData.hasEmergencies === "no" && (
          <TextAreaField
            label="If there's no live transfer yet, how should the AI handle it instead?"
            name="noEmergencyHandling"
            value={formData.noEmergencyHandling}
            onChange={(e) =>
              updateField("noEmergencyHandling", e.target.value)
            }
          />
        )}
      </FormSection>

      <FormSection title="4. Services & Pricing">
        <TextAreaField
          label="List your main services/products"
          name="services"
          required
          rows={4}
          value={formData.services}
          onChange={(e) => updateField("services", e.target.value)}
        />
        <RadioGroupField
          label="Quote prices over the phone, or defer to a callback?"
          name="pricingMode"
          value={formData.pricingMode}
          onChange={(v) => updateField("pricingMode", v)}
          options={[
            { value: "quote", label: "Quote prices" },
            { value: "defer", label: "Defer to callback" },
          ]}
        />
        {formData.pricingMode === "quote" && (
          <TextAreaField
            label="Pricing details"
            name="pricingDetails"
            value={formData.pricingDetails}
            onChange={(e) => updateField("pricingDetails", e.target.value)}
          />
        )}
      </FormSection>

      <FormSection
        title="5. Common Questions"
        description="Give us up to 5 questions customers frequently ask, and how you'd answer them."
      >
        {formData.faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              paddingBottom: i < formData.faqs.length - 1 ? "1.5rem" : 0,
              borderBottom:
                i < formData.faqs.length - 1
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "none",
            }}
          >
            <TextField
              label={`Question ${i + 1}`}
              name={`faq-question-${i}`}
              value={faq.question}
              onChange={(e) => updateFaq(i, "question", e.target.value)}
            />
            <TextField
              label={`Answer ${i + 1}`}
              name={`faq-answer-${i}`}
              value={faq.answer}
              onChange={(e) => updateFaq(i, "answer", e.target.value)}
            />
          </div>
        ))}
      </FormSection>

      <FormSection title="6. Tone & Personality">
        <div>
          <RadioGroupField
            label="Desired tone"
            name="tone"
            value={formData.tone}
            onChange={(v) => updateField("tone", v)}
            options={[
              { value: "warm", label: "Warm and casual" },
              { value: "professional", label: "Professional and polished" },
              { value: "energetic", label: "Energetic and upbeat" },
              { value: "other", label: "Other" },
            ]}
          />
          {formData.tone === "other" && (
            <div style={{ marginTop: "0.75rem" }}>
              <TextField
                label="Describe the tone"
                name="toneOther"
                value={formData.toneOther}
                onChange={(e) => updateField("toneOther", e.target.value)}
              />
            </div>
          )}
        </div>
        <TextAreaField
          label="Anything the AI should never say or do"
          name="neverSayDo"
          value={formData.neverSayDo}
          onChange={(e) => updateField("neverSayDo", e.target.value)}
        />
        <TextAreaField
          label="How should the AI introduce itself?"
          name="introLine"
          value={formData.introLine}
          onChange={(e) => updateField("introLine", e.target.value)}
        />
      </FormSection>

      <FormSection title="7. Notifications & Follow-Up">
        <div>
          <FieldLabel>Who should be notified of new bookings</FieldLabel>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem",
            }}
          >
            <TextField
              label="Name"
              name="notifyName"
              value={formData.notifyName}
              onChange={(e) => updateField("notifyName", e.target.value)}
            />
            <TextField
              label="Phone"
              name="notifyPhone"
              value={formData.notifyPhone}
              onChange={(e) => updateField("notifyPhone", e.target.value)}
            />
            <TextField
              label="Email"
              name="notifyEmail"
              value={formData.notifyEmail}
              onChange={(e) => updateField("notifyEmail", e.target.value)}
            />
          </div>
        </div>
        <CheckboxGroupField
          label="Notification method"
          values={formData.notificationMethods}
          onToggle={(v) => toggleListValue("notificationMethods", v)}
          options={["Text message", "Email"]}
        />
        <RadioGroupField
          label="Send customer confirmation texts?"
          name="sendCustomerConfirmation"
          value={formData.sendCustomerConfirmation}
          onChange={(v) => updateField("sendCustomerConfirmation", v)}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
        />
      </FormSection>

      <FormSection title="8. Anything Else">
        <TextAreaField
          label="Anything else we should know?"
          name="additionalDetails"
          rows={5}
          value={formData.additionalDetails}
          onChange={(e) => updateField("additionalDetails", e.target.value)}
        />
      </FormSection>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <motion.button
          type="submit"
          disabled={status === "submitting"}
          whileHover={
            status === "submitting"
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
            cursor: status === "submitting" ? "default" : "pointer",
            opacity: status === "submitting" ? 0.6 : 1,
          }}
        >
          {status === "submitting" ? "Submitting…" : "Submit"}
        </motion.button>
        {status === "error" && (
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "0.85rem",
              color: "#ff6b6b",
              textAlign: "center",
            }}
          >
            Something went wrong submitting the form. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
