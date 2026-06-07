import type { Metadata } from "next";
import { getLegalDoc } from "@/lib/legal";
import { LegalDocument } from "../LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How blorentz.com collects, uses, retains, and shares information across the website and consulting services, including the Website and Marketing Audit.",
};

export default async function PrivacyPage() {
  const doc = await getLegalDoc("privacy");
  return <LegalDocument doc={doc} />;
}
