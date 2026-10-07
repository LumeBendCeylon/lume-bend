import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { AuthProvider } from "@/context/AuthContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://www.lumebendceylon.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "lume bend ceylon | Luxury Private Tours in Sri Lanka",
    template: "%s | lume bend ceylon",
  },
  description:
    "lume bend ceylon designs bespoke, privately guided luxury tours across Sri Lanka — cultural triangle, hill country, wildlife and coast, tailored to you.",
  keywords: [
    "Sri Lanka luxury tours",
    "Sri Lanka private tour operator",
    "Ceylon travel agency",
    "luxury travel Sri Lanka",
    "Sri Lanka honeymoon tours",
  ],
  authors: [{ name: "lume bend ceylon" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "lume bend ceylon",
    title: "lume bend ceylon | Luxury Private Tours in Sri Lanka",
    description:
      "Bespoke, privately guided luxury journeys across Sri Lanka — designed around you.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "lume bend ceylon | Luxury Private Tours in Sri Lanka",
    description:
      "Bespoke, privately guided luxury journeys across Sri Lanka — designed around you.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "lume bend ceylon",
            url: siteUrl,
            description:
              "Bespoke, privately guided luxury tours across Sri Lanka.",
            areaServed: "Sri Lanka",
            telephone: "+94771234567",
            email: "hello@lumebendceylon.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Colombo",
              addressCountry: "LK",
            },
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-forest focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <AuthProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
        </AuthProvider>
      </body>
    </html>
  );
}
