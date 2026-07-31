import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { profile } from "@/lib/data";

const title = `${profile.name} | ${profile.role}`;
const description =
  profile.shortBio ||
  `${profile.name} is a ${profile.role} building polished, reliable web experiences.`;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(profile.siteUrl),
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript",
    "Cybersecurity",
    "Linux",
    "Windows",
    "AI-assisted development",
    "Market analysis",
  ],
  alternates: {
    canonical: profile.siteUrl,
  },
  openGraph: {
    title,
    description,
    url: profile.siteUrl,
    siteName: `${profile.name} Portfolio`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101820",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
