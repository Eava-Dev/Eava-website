export interface OnboardingPayload {
  name: string;
  phone: string;
  email: string;
}
export function buildEmailFields(data: OnboardingPayload): Record<string, string> {
  return {
    Name: data.name.trim(),
    Phone: data.phone.trim(),
    Email: data.email.trim(),
  };
}
