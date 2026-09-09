"use client";
import { useCallback, useEffect, useState } from "react";
const CONSENT_KEY = "eava_third_party_consent";
export function useThirdPartyConsent() {
  const [hasConsented, setHasConsented] = useState(false);
  useEffect(() => {
    try {
      setHasConsented(window.localStorage.getItem(CONSENT_KEY) === "granted");
    }
    catch { /* Storage can be unavailable; default to no consent. */ }
  }, []);
  const grantConsent = useCallback(() => {
    try {
      window.localStorage.setItem(CONSENT_KEY, "granted");
    }
    catch { /* Honor consent for this visit even when persistence is unavailable. */ }
    setHasConsented(true);
  }, []);
  return { hasConsented, grantConsent };
}
