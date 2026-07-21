import type { Metadata } from "next";
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
  openGraph: {
    title,
    description,
    url: profile.siteUrl,
    siteName: `${profile.name} Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/icon.svg",
  },
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
