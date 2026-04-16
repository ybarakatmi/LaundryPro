import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  BUSINESS,
  EQUIPMENT_SIZE_RANGE,
  SITE_URL,
  WASH_FOLD_PRICING,
} from "@/lib/constants";
import { faqPageJsonLd, localBusinessJsonLd } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Laundry Pro Ypsilanti | Wash & Fold, Pick-Up & Delivery | Open Late",
    template: "%s | Laundry Pro Ypsilanti",
  },
  description: `Ypsilanti's newest, cleanest laundromat. ${EQUIPMENT_SIZE_RANGE.metaBrief} (small loads to commercial-capacity), ${WASH_FOLD_PRICING.metaFragment}, pick-up and delivery, 25¢ dryers. Open 6 AM–2 AM daily. Next to Toarmina's Pizza at 1510 Washtenaw Ave.`,
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name, url: SITE_URL }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title:
      "Laundry Pro Ypsilanti | Wash & Fold, Pick-Up & Delivery | Open Late",
    description: `Ypsilanti's newest, cleanest laundromat. ${EQUIPMENT_SIZE_RANGE.metaBrief} (small loads to commercial-capacity), ${WASH_FOLD_PRICING.metaFragment}, pick-up and delivery, 25¢ dryers. Open 6 AM–2 AM daily. Next to Toarmina's Pizza at 1510 Washtenaw Ave.`,
    images: [
      {
        url: "/images/storefront.png",
        width: 1200,
        height: 630,
        alt: "The storefront of Laundry Pro laundromat on Washtenaw Avenue in Ypsilanti Michigan next to Toarmina's Pizza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Laundry Pro Ypsilanti | Wash & Fold, Pick-Up & Delivery | Open Late",
    description: `Ypsilanti's newest, cleanest laundromat. ${EQUIPMENT_SIZE_RANGE.metaBrief} (small loads to commercial-capacity), ${WASH_FOLD_PRICING.metaFragment}, pick-up and delivery, 25¢ dryers. Open 6 AM–2 AM daily.`,
    images: ["/images/storefront.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "business",
  other: {
    "geo.region": "US-MI",
    "geo.placename": "Ypsilanti",
  },
};

const localLd = localBusinessJsonLd();
const faqLd = faqPageJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white font-sans text-slate-900 antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        {children}
      </body>
    </html>
  );
}
