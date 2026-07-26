import ScrollHero from "./components/ScrollHero";
import FeaturesSection from "./components/FeaturesSection";
import MarketingSection from "./components/MarketingSection";
import HearEavaSection from "./components/HearEavaSection";
import SpecsSection from "./components/SpecsSection";
import PackagesSection from "./components/PackagesSection";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <main style={{ background: "#0A0B0D" }}>
      <ScrollHero />
      <FeaturesSection />
      <MarketingSection />
      <HearEavaSection />
      <SpecsSection />
      <PackagesSection />
      <ClosingCTA />
    </main>
  );
}
