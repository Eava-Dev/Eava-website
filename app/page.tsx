import ScrollHero from "./components/ScrollHero";
import FeaturesSection from "./components/FeaturesSection";
import MarketingSection from "./components/MarketingSection";
import SpecsSection from "./components/SpecsSection";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <main style={{ background: "#0A0B0D" }}>
      <ScrollHero />
      <FeaturesSection />
      <MarketingSection />
      <SpecsSection />
      <ClosingCTA />
    </main>
  );
}
