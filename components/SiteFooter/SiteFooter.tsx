"use client";

import { Footer, Icon, icons } from "@empac/cascadeds";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Footer
      variant="simple"
      className={styles.footer}
      socialLinks={[
        {
          href: "https://github.com/blorentzen",
          label: "GitHub",
          icon: <Icon icon={icons.BrandGithub} size="20" />,
        },
        {
          href: "https://linkedin.com/in/blorentzen",
          label: "LinkedIn",
          icon: <Icon icon={icons.BrandLinkedin} size="20" />,
        },
      ]}
      copyright={`\u00A9 ${currentYear} Britton Lorentzen \u00B7 Britton@empac.co`}
      bottomLinks={[
        { href: "/work", label: "Work" },
        { href: "/about", label: "About" },
        { href: "/colophon", label: "Colophon" },
      ]}
    />
  );
}
