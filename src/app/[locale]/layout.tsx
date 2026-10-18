import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { AuthProvider } from "@/context/AuthContext";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { OG_LOCALES } from "@/i18n/metadata";

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

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Lume Bend Ceylon | Luxury Private Tours in Sri Lanka",
      template: "%s | Lume Bend Ceylon",
    },
    description:
      "Lume Bend Ceylon designs bespoke, privately guided luxury tours across Sri Lanka — cultural triangle, hill country, wildlife and coast, tailored to you.",
    keywords: [
      "Sri Lanka luxury tours",
      "Sri Lanka private tour operator",
      "Ceylon travel agency",
      "luxury travel Sri Lanka",
      "Sri Lanka honeymoon tours",
    ],
    authors: [{ name: "Lume Bend Ceylon" }],
    openGraph: {
      type: "website",
      siteName: "Lume Bend Ceylon",
      title: "Lume Bend Ceylon | Luxury Private Tours in Sri Lanka",
      description:
        "Bespoke, privately guided luxury journeys across Sri Lanka — designed around you.",
      locale: OG_LOCALES[locale] ?? "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Lume Bend Ceylon | Luxury Private Tours in Sri Lanka",
      description:
        "Bespoke, privately guided luxury journeys across Sri Lanka — designed around you.",
    },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${poppins.variable}`}
    >
      <body className="antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Lume Bend Ceylon",
            url: siteUrl,
            description:
              "Bespoke, privately guided luxury tours across Sri Lanka.",
            areaServed: "Sri Lanka",
            telephone: "+94773446017",
            email: "lumebendceylon@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Matale",
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
        <NextIntlClientProvider>
          <AuthProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
            <WhatsAppButton />
          </AuthProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}