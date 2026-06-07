import { headers } from "next/headers";

/** Resolve the current request origin (scheme + host) for building redirect URLs. */
export async function getOrigin(): Promise<string> {
  const h = await headers();
  const host =
    h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto =
    h.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  return `${proto}://${host}`;
}

/**
 * Constrain a post-auth redirect target to an audit portal path, preventing
 * open-redirect abuse. Falls back to the login page.
 */
export function safeAuditNext(next: string | null | undefined): string {
  if (next && next.startsWith("/audits/") && !next.startsWith("/audits/login")) {
    return next;
  }
  return "/audits/login";
}
