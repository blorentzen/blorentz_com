declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> }
    ) => void;
  }
}

/**
 * Fire a named Plausible goal. Safe to call anywhere on the client — no-ops if
 * the Plausible script hasn't loaded (e.g. ad blockers, SSR).
 */
export function trackEvent(event: string, props?: Record<string, string>) {
  if (typeof window !== "undefined" && typeof window.plausible === "function") {
    window.plausible(event, props ? { props } : undefined);
  }
}
