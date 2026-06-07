import type { Metadata } from "next";
import { getLegalDoc } from "@/lib/legal";
import { LegalDocument } from "../LegalDocument";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use governing the blorentz.com website and consulting services, including the Website and Marketing Audit.",
};

export default async function TermsPage() {
  const doc = await getLegalDoc("terms");
  return <LegalDocument doc={doc} />;
}
