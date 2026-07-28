import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const RECIPIENT_EMAIL = "Contact@eavaai.com";

interface QAPair {
  question: string;
  answer: string;
}

interface OnboardingPayload {
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

function label(value: string, map: Record<string, string>): string {
  return map[value] ?? "";
}

function buildEmailFields(data: OnboardingPayload): Record<string, string> {
  const fields: Record<string, string> = {
    "Business Name": data.businessName ?? "",
    "Industry / Type of Business": data.industry ?? "",
    "Business Address": data.businessAddress ?? "",
    "Business Hours": data.businessHours ?? "",
    "Service Area": data.serviceArea ?? "",
    "Current Business Phone Number": data.currentPhone ?? "",
    "Phone Number Preference": label(data.phonePreference, {
      keep: "Keep current number",
      new: "New dedicated number",
    }),

    "Main Reasons Customers Call": (data.callReasons ?? []).join(", "),
    "Booking Mode": label(data.bookingMode, {
      book: "Book directly",
      collect: "Collect info only",
    }),
    "Info to Collect from Callers": (data.callerInfo ?? []).join(", "),

    "Has True Emergencies": label(data.hasEmergencies, {
      yes: "Yes",
      no: "No",
    }),
    "Emergency Description": data.emergencyDescription ?? "",
    "Emergency Transfer Phone Number": data.emergencyPhone ?? "",
    "Non-Emergency Handling": data.noEmergencyHandling ?? "",

    "Main Services/Products": data.services ?? "",
    "Pricing Approach": label(data.pricingMode, {
      quote: "Quote prices over phone",
      defer: "Defer to callback",
    }),
    "Pricing Details": data.pricingDetails ?? "",

    Tone:
      data.tone === "other"
        ? `Other: ${data.toneOther ?? ""}`
        : label(data.tone, {
            warm: "Warm and casual",
            professional: "Professional and polished",
            energetic: "Energetic and upbeat",
          }),
    "Things AI Should Never Say or Do": data.neverSayDo ?? "",
    "AI Introduction Line": data.introLine ?? "",

    "Notify Name": data.notifyName ?? "",
    "Notify Phone": data.notifyPhone ?? "",
    "Notify Email": data.notifyEmail ?? "",
    "Notification Method": (data.notificationMethods ?? []).join(", "),
    "Send Customer Confirmation Texts": label(data.sendCustomerConfirmation, {
      yes: "Yes",
      no: "No",
    }),

    "Additional Details": data.additionalDetails ?? "",
  };

  (data.faqs ?? []).forEach((faq, i) => {
    if (faq.question || faq.answer) {
      fields[`FAQ ${i + 1} - Question`] = faq.question ?? "";
      fields[`FAQ ${i + 1} - Answer`] = faq.answer ?? "";
    }
  });

  return fields;
}

export async function POST(req: NextRequest) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: "Form is not configured yet." },
      { status: 500 }
    );
  }

  let payload: OnboardingPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid submission." },
      { status: 400 }
    );
  }

  const fields = buildEmailFields(payload);

  const web3formsRes = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New Onboarding Submission${
        payload.businessName ? `: ${payload.businessName}` : ""
      }`,
      from_name: "Eava Onboarding Form",
      email: RECIPIENT_EMAIL,
      ...fields,
    }),
  });

  const data = await web3formsRes.json();

  if (!web3formsRes.ok || !data.success) {
    return NextResponse.json(
      { success: false, message: data?.message || "Submission failed." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
