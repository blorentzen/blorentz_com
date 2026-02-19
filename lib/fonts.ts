import localFont from "next/font/local";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";

export const generalSans = localFont({
  src: "../public/fonts/general-sans/GeneralSans-Variable.woff2",
  variable: "--font-family-display",
  display: "swap",
  weight: "400 700",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-family-technical",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-family-mono",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-family-body",
  display: "swap",
});
