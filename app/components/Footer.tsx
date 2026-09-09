import Brand from "./website/Brand";
import ArrowIcon from "./website/ArrowIcon";
export default function Footer() {
  return <div className="website-v2">
    <footer>
      <a href="/" className="logo" aria-label="EAVA home">
        <Brand />
      </a>
      <span>VOICE AGENT. GROWTH AGENT.</span>
      <span>© 2026 EAVA AI</span>
      <a className="footer-link" href="mailto:hello@eavaai.com">hello@eavaai.com <ArrowIcon /></a>
      <a className="footer-link" href="/privacy">Privacy Policy</a>
    </footer>
  </div>;
}
