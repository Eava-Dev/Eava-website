import StaticHeroHeader from "./components/StaticHeroHeader";
import FeaturesSection from "./components/FeaturesSection";
import MarketingSection from "./components/MarketingSection";
import PackagesSection from "./components/PackagesSection";
import MissedCallCostSection from "./components/MissedCallCostSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <main style={{ background: "#0A0B0D" }}>
      <h1 className="sr-only">
        Eava &mdash; AI Voice Agent That Answers, Captures, and Grows Your
        Business
      </h1>
      <StaticHeroHeader />
      <MarketingSection />
      <HowItWorksSection />
      <FeaturesSection />
      <MissedCallCostSection />
      <PackagesSection />
      <ClosingCTA />
    </main>
  );
}
