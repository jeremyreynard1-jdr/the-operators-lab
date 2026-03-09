import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://the-operators-lab.vercel.app"),
  title: "The Operator's Lab - Jeremy Reynard",
  description:
    "Strategic operator building AI-powered tools. Projects, philosophy, and the toolkit behind the work.",
  openGraph: {
    title: "The Operator's Lab - Jeremy Reynard",
    description:
      "Strategic operator building AI-powered tools. Projects, philosophy, and the toolkit behind the work.",
    url: "https://the-operators-lab.vercel.app",
    siteName: "The Operator's Lab",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "The Operator's Lab - Jeremy Reynard",
    description:
      "Strategic operator building AI-powered tools. Projects, philosophy, and the toolkit behind the work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        {children}
      </body>
    </html>
  );
}
