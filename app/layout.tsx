import type { Metadata } from "next";
import { generalSans, spaceGrotesk, jetbrainsMono, inter } from "@/lib/fonts";
import { ThemeScript } from "@/components/ThemeScript";
import { LayoutShell } from "@/components/LayoutShell";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Britton Lorentzen",
    template: "%s — Britton Lorentzen",
  },
  description:
    "Strategic front-end engineering leader. Fortune 500 experience, boutique consultancy execution.",
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
      </head>
      <body
        className={`${generalSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}
      >
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
