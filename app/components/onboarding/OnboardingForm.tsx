"use client";
import ArrowIcon from "../website/ArrowIcon";

import { useRef, useState, type FormEvent } from "react";
import { type OnboardingPayload } from "./emailFields";
import { submitLead } from "./submitLead";
import CalEmbed from "./CalEmbed";
import ConsentNotice from "../ConsentNotice";
import { useThirdPartyConsent } from "../../hooks/useThirdPartyConsent";
export default function OnboardingForm() {
  const [data, setData] = useState<OnboardingPayload>({ name: "", phone: "", email: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [unlocked, setUnlocked] = useState(false);
  const pending = useRef(false);
  const { hasConsented, grantConsent } = useThirdPartyConsent();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(pending.current)
      return;
    pending.current = true;
    setStatus("submitting");
    try {
      const result = await submitLead(data, process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
      if(result.success) {
        setStatus("sent");
        setUnlocked(true);
      }
      else
        setStatus("error");
    }
    finally {
      pending.current = false;
    }
  }
  return <>
    <form onSubmit={handleSubmit} className="lead-form" aria-label="Demo request" aria-busy={status === "submitting"}>
      <label htmlFor="lead-name">Name<input id="lead-name" name="name" autoComplete="name" required value={data.name} onChange={e => setData({ ...data, name: e.target.value })} placeholder="Your name" />
      </label>
      <label htmlFor="lead-phone">Phone Number<input id="lead-phone" name="phone" type="tel" autoComplete="tel" required value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })} placeholder="Your phone number" />
      </label>
      <label htmlFor="lead-email">Email<input id="lead-email" name="email" type="email" autoComplete="email" required value={data.email} onChange={e => setData({ ...data, email: e.target.value })} placeholder="you@yourbusiness.com" />
      </label>
      <p className="form-note">We’ll use your details to follow up on your demo request. Read our <a href="/privacy">Privacy Policy</a>.</p>
      <button className="button" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Submitting…" : "Continue to scheduling"}
        <span aria-hidden="true"><ArrowIcon /></span>
      </button>
      <div role="status" aria-live="polite" aria-atomic="true">
        {status === "sent" && <p className="form-success">Got it, now pick a time below.</p>}
        {status === "error" && <p className="form-error">Something went wrong submitting your details. Please try again, or contact <a href="mailto:hello@eavaai.com">hello@eavaai.com</a>.</p>}
      </div>
    </form>
    <section className="scheduling" aria-labelledby="scheduling-heading">
      <p className="eyebrow">NEXT / A CONVERSATION</p>
      <h2 id="scheduling-heading">Find a time to meet.</h2>
      <p>Pick a time that works for you to book your demo.</p>
      {hasConsented ? <div className="calendar-shell">
        <div inert={!unlocked} aria-hidden={!unlocked}>
          <CalEmbed />
        </div>
        {!unlocked && <div className="calendar-lock" role="status">Submit your details above to unlock scheduling.</div>}
      </div> : <ConsentNotice onContinue={grantConsent} />}
    </section>
  </>;
}
