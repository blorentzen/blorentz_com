import type { Metadata } from "next";
import { generalSans, spaceGrotesk, jetbrainsMono, inter } from "@/lib/fonts";
import { ThemeScript } from "@/components/ThemeScript";
import { LayoutShell } from "@/components/LayoutShell";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://blorentz.com"),
  title: {
    default: "Britton Lorentzen",
    template: "%s — Britton Lorentzen",
  },
  description:
    "Strategic design and front-end engineering leader with Fortune 500 experience, boutique consultancy experience, and a large amount of website and app ideas in the works.",
  icons: {
    icon: "https://cdn.empac.co/portfolio/images/empac-logo-browser.jpg",
    shortcut: "https://cdn.empac.co/portfolio/images/empac-logo-browser.jpg",
    apple: "https://cdn.empac.co/portfolio/images/empac-logo-browser.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Britton Lorentzen",
    title: "Britton Lorentzen",
    description:
      "Strategic design and front-end engineering leader with Fortune 500 experience, boutique consultancy experience, and a large amount of website and app ideas in the works.",
    images: [
      {
        url: "https://cdn.empac.co/portfolio/images/blorentz-og.jpg",
        width: 1200,
        height: 630,
        alt: "Britton Lorentzen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Britton Lorentzen",
    description:
      "Strategic design and front-end engineering leader with Fortune 500 experience, boutique consultancy experience, and a large amount of website and app ideas in the works.",
    images: ["https://cdn.empac.co/portfolio/images/blorentz-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          defer
          data-domain="blorentz.com"
          src="https://plausible.io/js/script.js"
        />
        <GoogleAnalytics gaId="G-Y1WB7RGG4M" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Britton Lorentzen's Blog"
          href="/blog/rss.xml"
        />
      </head>
      <body
        className={`${generalSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}
      >
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
