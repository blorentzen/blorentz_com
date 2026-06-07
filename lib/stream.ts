import "server-only";

/**
 * Cloudflare Stream signed playback for the audit portal.
 *
 * Real recordings are ingested with requireSignedURLs = true, so playback needs
 * a signed token. We mint a short-lived token per portal render and embed that
 * in place of the bare video UID — a leaked iframe URL stops working when the
 * token expires, and the recording is never publicly playable.
 *
 * (Optimization for later: generate a Stream signing key once and sign tokens
 * locally to avoid the per-render API call. Fine as an API call at v1 volume.)
 *
 * Server-only — never import into a client component.
 */
const subdomain = process.env.CLOUDFLARE_STREAM_CUSTOMER_SUBDOMAIN;
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const apiToken = process.env.CLOUDFLARE_STREAM_API_TOKEN;

const TOKEN_TTL_SECONDS = 4 * 60 * 60; // 4 hours — comfortably covers a viewing session

export async function streamSignedIframeSrc(videoId: string): Promise<string> {
  if (!subdomain) {
    throw new Error("CLOUDFLARE_STREAM_CUSTOMER_SUBDOMAIN is not configured.");
  }
  if (!accountId || !apiToken) {
    throw new Error("Cloudflare Stream API credentials are not configured.");
  }

  const exp = Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS;
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/${videoId}/token`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ exp }),
    }
  );

  const data = await res.json();
  if (!data.success || !data.result?.token) {
    throw new Error(
      `Stream token mint failed: ${JSON.stringify(data.errors ?? data)}`
    );
  }

  const token = data.result.token;
  const base = `https://${subdomain}.cloudflarestream.com/${token}`;
  const poster = encodeURIComponent(
    `${base}/thumbnails/thumbnail.jpg?time=&height=600`
  );
  return `${base}/iframe?poster=${poster}`;
}

/**
 * Delete a Stream video (used at the 12-month sunset). Treats a 404 as success
 * (already gone). Throws on any other failure so the caller can retry later.
 */
export async function deleteStreamVideo(videoId: string): Promise<void> {
  if (!accountId || !apiToken) {
    throw new Error("Cloudflare Stream API credentials are not configured.");
  }
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/${videoId}`,
    { method: "DELETE", headers: { Authorization: `Bearer ${apiToken}` } }
  );
  if (!res.ok && res.status !== 404) {
    const data = await res.json().catch(() => null);
    throw new Error(
      `Stream delete failed (${res.status}): ${JSON.stringify(data?.errors ?? data)}`
    );
  }
}
