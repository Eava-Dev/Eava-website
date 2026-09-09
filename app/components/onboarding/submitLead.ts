import { buildEmailFields, type OnboardingPayload } from "./emailFields";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
export type LeadResult = {
  success: true;
} | {
  success: false;
  reason: "invalid" | "configuration" | "delivery";
};
/** The access key determines the recipient; email/replyto identify the visitor. */
export async function submitLead(data: OnboardingPayload, accessKey: string | undefined, request: typeof fetch = fetch): Promise<LeadResult> {
  if(!data.name.trim() || !data.phone.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    return { success: false, reason: "invalid" };
  if(!accessKey?.trim())
    return { success: false, reason: "configuration" };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await request(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        access_key: accessKey,
        subject: "New Onboarding Submission",
        from_name: "Eava Onboarding Form",
        email: data.email.trim(),
        replyto: data.email.trim(),
        ...buildEmailFields(data),
      }),
    });
    const body = await response.json();
    return response.ok && body?.success === true ? { success: true } : { success: false, reason: "delivery" };
  }
  catch {
    return { success: false, reason: "delivery" };
  }
  finally {
    clearTimeout(timeout);
  }
}
