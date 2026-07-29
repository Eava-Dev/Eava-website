export interface QAPair {
  question: string;
  answer: string;
}

export interface OnboardingPayload {
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

export function buildEmailFields(data: OnboardingPayload): Record<string, string> {
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
