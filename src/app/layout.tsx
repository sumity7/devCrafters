import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevCrafter | Website, E-commerce & WooCommerce Development",
  description:
    "DevCrafter builds fast websites, WooCommerce and Shopify stores, and custom web apps. Websites from ₹4,000. Delivery in 2–3 days. Call or WhatsApp +91 78703 41191.",
  keywords: [
    "website development",
    "e-commerce website",
    "WooCommerce",
    "Shopify",
    "web design",
    "full stack developer",
    "website in 3 days",
    "DevCrafter",
  ],
  openGraph: {
    title: "DevCrafter | Websites and online stores, crafted to grow your business",
    description: "Websites from ₹4,000. WooCommerce, Shopify, business websites and web apps.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1733",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
