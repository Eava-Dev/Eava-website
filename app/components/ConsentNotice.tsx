"use client";
import ArrowIcon from "./website/ArrowIcon";
export default function ConsentNotice({ onContinue }: {
  onContinue: () => void;
}) {
  return <div className="consent-notice">
    <p>Our scheduling tool may set cookies or process data. Continuing means you’re okay with that — see our <a href="/privacy">Privacy Policy</a> for details.</p>
    <button type="button" className="button" onClick={onContinue}>Continue <span aria-hidden="true"><ArrowIcon /></span>
    </button>
  </div>;
}
