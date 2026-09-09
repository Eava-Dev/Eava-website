import ArrowIcon from "./ArrowIcon";
export default function Closing() {
  return (<section className="closing">
    <p className="eyebrow">{"YOUR NEXT CHAPTER STARTS WITH A CALL."}</p>
    <h2>{"Be there."}
      <br />
      <em>{"Even when you’re not."}</em>
    </h2>
    <a className="button" href="/onboarding">{"Meet EAVA "}
      <span><ArrowIcon /></span>
    </a>
    <p>{"Built around you. Ready for what’s next."}</p>
    <span className="closing-mark" aria-hidden="true"><ArrowIcon /></span>
  </section>);
}
