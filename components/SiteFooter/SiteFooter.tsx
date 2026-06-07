"use client";

import { Footer, Icon, icons } from "@empac/cascadeds";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.connectSection}>
        <p className={styles.connectHeading}>Let&apos;s connect</p>
        <div className={styles.connectLinks}>
          <a
            href="https://github.com/blorentzen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.connectLink}
            aria-label="GitHub"
          >
            <Icon icon={icons.BrandGithub} size="20" />
          </a>
          <a
            href="https://linkedin.com/in/blorentzen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.connectLink}
            aria-label="LinkedIn"
          >
            <Icon icon={icons.BrandLinkedin} size="20" />
          </a>
          <a
            href="https://cal.com/blorentz/chat-with-me"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.connectLink}
            aria-label="Schedule a chat"
          >
            <Icon icon={icons.Calendar} size="20" />
          </a>
          <a
            href="mailto:Britton@empac.co"
            className={styles.connectLink}
            aria-label="Send an email"
          >
            <Icon icon={icons.Mail} size="20" />
          </a>
        </div>
      </div>
      <Footer
        variant="simple"
        className={styles.footer}
        copyright={`\u00A9 ${currentYear} Britton Lorentzen \u00B7 Britton@empac.co`}
        bottomLinks={[
          { href: "/work", label: "Portfolio" },
          { href: "/blog", label: "Blog" },
          { href: "/about", label: "About" },
          { href: "/colophon", label: "Colophon" },
          { href: "/legal/terms", label: "Terms" },
          { href: "/legal/privacy", label: "Privacy" },
        ]}
      />
    </footer>
  );
}
