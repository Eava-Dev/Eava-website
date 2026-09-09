import ArrowIcon from "../components/website/ArrowIcon";
import type { Metadata } from "next";
import Header from "../components/website/Header";
import OnboardingForm from "../components/onboarding/OnboardingForm";
export const metadata: Metadata = {
  title: "Client Onboarding · Eava",
  description: "Explore how EAVA Voice Agent, Growth Agent, or both can help your business.",
};
export default function OnboardingPage() {
  return <div className="website-v2">
    <Header />
    <main id="main" className="onboarding-page">
      <a href="/" className="text-link"><ArrowIcon direction="left" /> Back to Home</a>
      <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
      <h1>Let’s Build<br />
        <em>What’s Next.</em>
      </h1>
      <p className="intro">Let’s understand your business and explore how Voice Agent, Growth Agent, or both can help. Share a few details, then choose a time to talk.</p>
      <OnboardingForm />
    </main>
  </div>;
}
