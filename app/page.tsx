import ScrollHero from "./components/ScrollHero";
import FeaturesSection from "./components/FeaturesSection";
import MarketingSection from "./components/MarketingSection";
import HearEavaSection from "./components/HearEavaSection";
import PackagesSection from "./components/PackagesSection";
import MissedCallCostSection from "./components/MissedCallCostSection";
import GuaranteeSection from "./components/GuaranteeSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <main style={{ background: "#0A0B0D" }}>
      <ScrollHero />
      <MarketingSection />
      <HowItWorksSection />
      <HearEavaSection />
      <FeaturesSection />
      <PackagesSection />
      <MissedCallCostSection />
      <GuaranteeSection />
      <ClosingCTA />
    </main>
  );
}
