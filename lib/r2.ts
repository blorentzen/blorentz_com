import "server-only";
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

/**
 * Cloudflare R2 (S3-compatible) access for the AI Build Audit portal.
 *
 * All audit artifacts live in the dedicated PRIVATE `blorentz-audits` bucket
 * (R2_AUDITS_BUCKET), keyed by slug:
 *   audits/<slug>/recording.mp4
 *   audits/<slug>/audit-report.pdf
 *   audits/<slug>/audit-archive.zip
 *
 * This bucket has no public custom domain — the only way in is a signed S3
 * request. Server-only — never import into a client component.
 */

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const bucket = process.env.R2_AUDITS_BUCKET;

let cached: S3Client | null = null;

function client(): S3Client {
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  if (!accountId || !bucket || !accessKeyId || !secretAccessKey) {
    throw new Error("R2 environment variables are not fully configured.");
  }
  if (!cached) {
    cached = new S3Client({
      region: "auto",
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: { accessKeyId, secretAccessKey },
    });
  }
  return cached;
}

/** Build the canonical R2 object key for an audit artifact. */
export function auditObjectKey(slug: string, file: string): string {
  return `audits/${slug}/${file}`;
}

/** Short-lived presigned GET URL — used for archive/report downloads. */
export async function r2SignedDownloadUrl(
  key: string,
  expiresInSeconds = 60
): Promise<string> {
  return getSignedUrl(
    client(),
    new GetObjectCommand({ Bucket: bucket, Key: key }),
    { expiresIn: expiresInSeconds }
  );
}

/**
 * Presigned PUT URL — used to upload a recording/archive to R2. Also used as the
 * source URL handed to Cloudflare Stream's "Copy from URL" ingestion (a signed
 * GET of the uploaded object).
 */
export async function r2SignedUploadUrl(
  key: string,
  contentType: string,
  expiresInSeconds = 600
): Promise<string> {
  return getSignedUrl(
    client(),
    new PutObjectCommand({ Bucket: bucket, Key: key, ContentType: contentType }),
    { expiresIn: expiresInSeconds }
  );
}
