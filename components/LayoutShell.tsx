"use client";

import dynamic from "next/dynamic";

const SiteNav = dynamic(
  () => import("@/components/SiteNav/SiteNav").then((mod) => mod.SiteNav),
  { ssr: false }
);

const SiteFooter = dynamic(
  () =>
    import("@/components/SiteFooter/SiteFooter").then((mod) => mod.SiteFooter),
  { ssr: false }
);

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
