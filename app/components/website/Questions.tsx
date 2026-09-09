export default function Questions() {
  return (<section className="faq section">
    <div>
      <p className="eyebrow">{"A FEW GOOD QUESTIONS"}</p>
      <h2>{"Clarity before"}
        <br />{"the first call."}</h2>
    </div>
    <div className="questions">
      <details>
        <summary>{"Can I keep my existing phone number?"}
          <span>{"+"}</span>
        </summary>
        <p>{"Yes. You forward your existing line to a dedicated EAVA number. Your customers keep dialing the same number they always have."}</p>
      </details>
      <details>
        <summary>{"Can EAVA work alongside my receptionist?"}
          <span>{"+"}</span>
        </summary>
        <p>{"Yes. EAVA can handle after-hours and overflow calls while your team focuses on customers in person."}</p>
      </details>
      <details>
        <summary>{"What if EAVA doesn’t know the answer?"}
          <span>{"+"}</span>
        </summary>
        <p>{"EAVA captures the question and notifies your team with the transcript so the right person can follow up."}</p>
      </details>
      <details>
        <summary>{"What does getting started look like?"}
          <span>{"+"}</span>
        </summary>
        <p>{"Start with a demo. We learn about your business and which offering fits: Voice Agent for customer calls, Growth Agent for AI strategy and implementation, or both."}</p>
      </details>
    </div>
  </section>);
}
