import Brand from "./Brand";
import ArrowIcon from "./ArrowIcon";
export default function Header() {
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <header>
      <a href="/#" className="logo" aria-label="EAVA home">
        <Brand />
      </a>
      <nav aria-label="Main navigation">
        <a href="/#experience">{"Voice Agent"}</a>
        <a href="/#growth">{"Growth Agent"}</a>
        <a href="/#plans">{"Plans"}</a>
      </nav>
      <a className="portal-link" href="https://portal.eavaai.com" target="_blank" rel="noopener noreferrer">Portal Login <ArrowIcon /></a>
      <a className="button small" href="/onboarding">{"See What EAVA Can Do "}
        <span><ArrowIcon /></span>
      </a>
    </header>
  </>);
}
