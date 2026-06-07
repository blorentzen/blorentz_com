import "server-only";
import { supabaseAdmin } from "./supabase/admin";

export interface AuditSummaryFix {
  problem: string;
  fix: string;
}

export interface AuditSummaryStop {
  pattern: string;
  why_stop: string;
}

export type AuditStatus = "draft" | "delivered" | "sunset";

export interface Audit {
  id: string;
  slug: string;
  client_name: string;
  client_email: string;
  additional_emails: string[];
  audit_type: string;
  delivery_date: string | null;
  sunset_date: string | null;
  summary_top_fixes: AuditSummaryFix[];
  summary_top_stops: AuditSummaryStop[];
  recording_video_id: string | null;
  recording_r2_path: string | null;
  report_markdown: string | null;
  report_r2_path: string | null;
  report_doc_url: string | null;
  archive_r2_path: string | null;
  status: AuditStatus;
  created_at: string;
  updated_at: string;
}

export type AuditAccessAction = "view" | "download" | "auth_request";

/**
 * Fetch an audit for a viewer through the SECURITY DEFINER gate. Returns the
 * audit only if `email` is authorized for `slug` and the audit is delivered or
 * sunset (drafts are never returned). Returns null otherwise.
 */
export async function getAuditForViewer(
  slug: string,
  email: string
): Promise<Audit | null> {
  const { data, error } = await supabaseAdmin().rpc("get_audit_for_viewer", {
    p_slug: slug,
    p_email: email,
  });

  if (error) {
    console.error("get_audit_for_viewer error:", error);
    return null;
  }

  const rows = (data as Audit[] | null) ?? [];
  return rows.length > 0 ? rows[0] : null;
}

/** Delivered audits whose 12-month portal window has elapsed (for the sunset job). */
export async function getAuditsDueForSunset(): Promise<Audit[]> {
  const { data, error } = await supabaseAdmin().rpc("get_audits_due_for_sunset");
  if (error) {
    console.error("get_audits_due_for_sunset error:", error);
    return [];
  }
  return (data as Audit[] | null) ?? [];
}

/** Flip an audit to 'sunset' (clears the now-deleted Stream video reference). */
export async function markAuditSunset(auditId: string): Promise<void> {
  const { error } = await supabaseAdmin().rpc("mark_audit_sunset", {
    p_audit_id: auditId,
  });
  if (error) {
    console.error("mark_audit_sunset error:", error);
    throw error;
  }
}

/** Append a view / download / auth_request event. Best-effort; never throws. */
export async function logAuditAccess(
  auditId: string,
  email: string,
  action: AuditAccessAction,
  ip?: string | null
): Promise<void> {
  const { error } = await supabaseAdmin().rpc("log_audit_access", {
    p_audit_id: auditId,
    p_email: email,
    p_action: action,
    p_ip: ip ?? null,
  });
  if (error) {
    console.error("log_audit_access error:", error);
  }
}
