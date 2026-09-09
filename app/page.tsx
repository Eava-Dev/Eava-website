import Header from "./components/website/Header";
import Reveal from "./components/website/Reveal";
import Hero from "./components/website/Hero";
import Approach from "./components/website/Approach";
import Conversation from "./components/website/Conversation";
import Growth from "./components/website/Growth";
import Process from "./components/website/Process";
import Plans from "./components/website/Plans";
import Questions from "./components/website/Questions";
import Closing from "./components/website/Closing";
export default function Home() {
  return <div className="website-v2">
    <Header />
    <Reveal>
      <main id="main">
        <Hero />
        <Approach />
        <Conversation />
        <Growth />
        <Process />
        <Plans />
        <Questions />
        <Closing />
      </main>
    </Reveal>
  </div>;
}
