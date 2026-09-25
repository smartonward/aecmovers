import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asamexpress.com"),
  title: "Assam Express — Cargo Movers | Assam to Pune Direct Logistics",
  description:
    "Specialized direct cargo and logistics linehaul between Assam (Guwahati) and Pune (Maharashtra) by Assam Express Cargo Movers. Launching PAN-India soon.",
  keywords: [
    "Assam to Pune Cargo",
    "Pune to Assam Cargo Movers",
    "Guwahati to Pune Transport",
    "Assam Express",
    "Assam Express Cargo Movers",
    "Direct Linehaul Logistics",
    "Full Truck Load Assam Pune",
    "Part Load Cargo Pune Assam",
  ],
  authors: [{ name: "Assam Express Cargo Movers" }],
  openGraph: {
    title: "Assam Express Cargo Movers | Assam ⇄ Pune Express Route",
    description:
      "Direct, dependable cargo movement connecting Assam and Pune. Launching PAN-India nationwide soon.",
    url: "https://asamexpress.com",
    siteName: "Assam Express Cargo Movers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Assam Express Cargo Movers | Assam ⇄ Pune Express Route",
    description: "Direct, dependable cargo movement connecting Assam and Pune. Launching PAN-India soon.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A192F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/assam-express-logo-new.png" />
      </head>
      <body>
        {children}
        <QuoteModal />
        <WhatsAppButton />
      </body>
    </html>
  );
}
