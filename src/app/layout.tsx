import type { Metadata } from "next";
import { Press_Start_2P, Silkscreen, DM_Sans } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  weight: "400",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tonya Golden — Conversion Optimization Trainer",
  description:
    "Tonya Golden is a Conversion Optimization / CRO expert who turns messy data into confident product decisions through experimentation, UX research, and analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pressStart2P.variable} ${silkscreen.variable} ${dmSans.variable}`}
    >
      <body className="font-body bg-cream text-ink">{children}</body>
    </html>
  );
}
