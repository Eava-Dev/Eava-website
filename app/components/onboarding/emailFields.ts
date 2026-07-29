export interface OnboardingPayload {
  name: string;
  business: string;
  email: string;
  phone: string;
  industry: string;
  phoneProblem: string;
}

export function buildEmailFields(data: OnboardingPayload): Record<string, string> {
  return {
    Name: data.name ?? "",
    Business: data.business ?? "",
    Email: data.email ?? "",
    Phone: data.phone ?? "",
    Industry: data.industry ?? "",
    "Current Phone Problem": data.phoneProblem ?? "",
  };
}
