import type { Metadata } from "next";
import { Geist, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/_context/CartContext";
import { TopBanner } from "@/_components/layout/TopBanner";
import { Navbar } from "@/_components/layout/Navbar";
import { Footer } from "@/_components/layout/Footer";
import { CartDrawer } from "@/_components/layout/CartDrawer";
import { WhatsAppFloating } from "@/_components/layout/WhatsAppFloating";
import { BackToTop } from "@/_components/layout/BackToTop";
import { MobileBottomNav } from "@/_components/layout/MobileBottomNav";
import { RouteBreadcrumbs } from "@/_components/layout/RouteBreadcrumbs";
import { LocalBusinessJsonLd } from "@/_components/seo/JsonLd";
import { Suspense } from "react";
import {
  defaultDescription,
  defaultTitle,
  siteUrl,
  socialImage,
} from "@/_components/seo/metadata";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  keywords: [
    "Muhit Telecom",
    "Mobile repair shop Hili",
    "Hakimpur mobile shop",
    "Gadget shop Dinajpur",
    "TWS Earbuds Bangladesh",
    "TP-Link router BD",
    "Smartphone screen replacement BD",
    "Cash on delivery tech gadgets",
  ],
  authors: [{ name: "Masum Hossain" }],
  creator: "Masum Hossain",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Muhit Telecom",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${hindSiliguri.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground">
        <CartProvider>
          <TopBanner />
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={null}>
              <RouteBreadcrumbs />
            </Suspense>
            {children}
          </main>
          <Footer />
          <div
            aria-hidden="true"
            className="shrink-0 md:hidden"
            style={{ height: "calc(4rem + env(safe-area-inset-bottom))" }}
          />
          <CartDrawer />
          <WhatsAppFloating />
          <BackToTop />
          <MobileBottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
