"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!dropdownOpen) return;

    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdownOpen]);

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
          <div className={styles.contactWrapper} ref={dropdownRef}>
            <button
              className={styles.contactLink}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Contact
              <Icon icon={icons.Chat} size="16" />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  className={styles.contactDropdown}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                >
                  <a
                    href="https://cal.com/blorentz/chat-with-me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.dropdownItem}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <Icon icon={icons.Calendar} size="16" />
                    Book a time
                  </a>
                  <a
                    href="mailto:britton@empac.co"
                    className={styles.dropdownItem}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <Icon icon={icons.Mail} size="16" />
                    Send an email
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
            <a
              href="https://cal.com/blorentz/chat-with-me"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileContactCta}
              onClick={closeMobile}
            >
              <Icon icon={icons.Calendar} size="18" />
              Book a time
            </a>
            <a
              href="mailto:britton@empac.co"
              className={styles.mobileContactEmail}
              onClick={closeMobile}
            >
              <Icon icon={icons.Mail} size="18" />
              Send an email
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
