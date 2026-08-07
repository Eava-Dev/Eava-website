"use client";

import { useCallback, useEffect, useState } from "react";

const CONSENT_KEY = "eava_third_party_consent";

export function useThirdPartyConsent() {
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    setHasConsented(window.localStorage.getItem(CONSENT_KEY) === "granted");
  }, []);

  const grantConsent = useCallback(() => {
    window.localStorage.setItem(CONSENT_KEY, "granted");
    setHasConsented(true);
  }, []);

  return { hasConsented, grantConsent };
}
