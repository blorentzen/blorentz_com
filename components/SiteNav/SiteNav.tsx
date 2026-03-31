"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle, Icon, icons } from "@empac/cascadeds";
import styles from "./SiteNav.module.css";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMobile();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen, closeMobile]);

  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image
            src="https://cdn.empac.co/portfolio/images/blorentz-blk-logo.png"
            alt="Britton Lorentzen"
            width={210}
            height={36}
            className={styles.logoImage}
            priority
          />
        </Link>

        <div className={styles.desktopLinks}>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    className={styles.activeUnderline}
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <Icon
              icon={mobileOpen ? icons.Close : icons.Menu}
              size="24"
            />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileOverlay} onClick={closeMobile}>
          <div
            className={styles.mobileMenu}
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${
                  pathname.startsWith(link.href) ? styles.active : ""
                }`}
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
