"use client";

import Cal from "@calcom/embed-react";

const CAL_LINK = "eavaai/30min";

export default function CalEmbed() {
  return (
    <Cal
      calLink={CAL_LINK}
      style={{ width: "100%", height: "700px", overflow: "scroll" }}
      config={{ theme: "dark" }}
    />
  );
}
