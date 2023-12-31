import "./globals.css";
import type { Metadata } from "next";
import CountryProvider from "@/providers/country.provider";

export const metadata: Metadata = {
  title: "Gia's Private Page",
  description: "Gia's Private Page",
  viewport: "width=device-width,initial-scale=1",
  robots: "index,follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="googlebot" content="index,follow" />
        <meta property="og:title" content="Gia's Private Page" />
        <meta property="og:description" content="Gia's Private Page" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Gia's Private Page" />
        <meta name="next-head-count" content="14" />
      </head>
      <CountryProvider>
        <body>{children}</body>
      </CountryProvider>
    </html>
  );
}
