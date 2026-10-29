import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import JsonLd from "./components/JsonLd";
import {
  buildSchemaGraph,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "./lib/schema";
import { SITE_URL } from "./lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Argan Oil Wholesale | Bulk & Private Label | Morocco",
  description: "Buy certified organic Moroccan argan oil wholesale. Cold-pressed bulk oil & private label from Agadir. ECOCERT, USDA Organic, COA. Worldwide export.",
  icons: {
    icon: [
      { url: "/assets/img/logo.png" },
      { url: "/icon.png" },
    ],
    apple: [
      { url: "/assets/img/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "argan oil wholesale",
    "bulk argan oil",
    "private label argan oil",
    "Moroccan argan oil wholesale",
    "argan oil supplier Morocco",
    "buy argan oil wholesale",
    "organic argan oil wholesale",
    "cold pressed argan oil bulk",
    "unrefined argan oil",
    "cosmetic grade argan oil",
    "food grade argan oil wholesale",
    "culinary argan oil bulk",
    "white label argan oil",
    "argan oil factory Morocco",
    "argan oil exporter Agadir",
    "Berber cooperative argan oil",
    "ECOCERT argan oil",
    "USDA organic argan oil",
    "argan oil COA MSDS",
    "FOB Agadir argan oil",
    "wholesale argan oil",
    "pure organic argan oil",
    "bulk argan oil supplier",
    "argan oil for skincare",
    "argan oil for hair",
    "argan oil wholesale price"
  ],
  openGraph: {
    title: "Argan Oil Wholesale | Bulk & Private Label | Morocco",
    description: "Certified organic Moroccan argan oil wholesale. Cold-pressed bulk and private label from Agadir. ECOCERT, USDA Organic, COA, worldwide shipping.",
    type: "website",
    locale: "en_US",
    siteName: "Wholesale Argan Oil",
    url: "https://www.wholesalearganoil.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Argan Oil Wholesale | Bulk & Private Label from Morocco",
    description: "100% pure cold-pressed Moroccan argan oil wholesale. ECOCERT, USDA Organic, bulk drums, private label, factory-direct from Agadir.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = buildSchemaGraph([
    organizationSchema(),
    websiteSchema(),
    localBusinessSchema(),
  ]);

  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <JsonLd data={globalSchema} />
        {children}
      </body>
    </html>
  );
}
