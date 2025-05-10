import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrix || Portfolio",
  description: "Portfolio personnel d'Andrix, développeur fullstack",
  metadataBase: new URL("https://andrix.dev"), // ← à modifier si domaine différent
  openGraph: {
    title: "Andrix || Portfolio",
    description: "Explorez les projets, compétences et services d'Andrix.",
    url: "https://andrix.dev",
    siteName: "Andrix Portfolio",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
