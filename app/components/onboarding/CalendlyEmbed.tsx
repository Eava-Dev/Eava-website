"use client";

import { useEffect } from "react";

const CALENDLY_URL =
  "https://calendly.com/taylor-eavaai/30min?background_color=0a0b0d&text_color=e5e5e5&primary_color=22d3ee";

export default function CalendlyEmbed() {
  useEffect(() => {
    if (document.getElementById("calendly-widget-script")) return;

    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: "280px", height: "700px", width: "100%" }}
    />
  );
}
