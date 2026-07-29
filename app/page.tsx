import ScrollHero from "./components/ScrollHero";
import OnboardingCTA from "./components/OnboardingCTA";
import TalkToEavaWidget from "./components/TalkToEavaWidget";
import FeaturesSection from "./components/FeaturesSection";
import MarketingSection from "./components/MarketingSection";
import HearEavaSection from "./components/HearEavaSection";
import PackagesSection from "./components/PackagesSection";
import MissedCallCostSection from "./components/MissedCallCostSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <main style={{ background: "#0A0B0D" }}>
      <ScrollHero />
      <OnboardingCTA />
      <MarketingSection />
      <HowItWorksSection />
      <TalkToEavaWidget />
      <HearEavaSection />
      <FeaturesSection />
      <MissedCallCostSection />
      <PackagesSection />
      <ClosingCTA />
    </main>
  );
}
