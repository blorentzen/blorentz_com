"use client";

import { useContext, useRef } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const SiteNav = dynamic(
  () => import("@/components/SiteNav/SiteNav").then((mod) => mod.SiteNav),
  { ssr: false }
);

const SiteFooter = dynamic(
  () =>
    import("@/components/SiteFooter/SiteFooter").then((mod) => mod.SiteFooter),
  { ssr: false }
);

/**
 * Freezes the Next.js router context so AnimatePresence can hold the old page
 * in the DOM during its exit animation without React swapping the content.
 */
function FrozenRouter({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <SiteNav />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </>
  );
}
