import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Motif from "@/components/Motif";
import GalleryMasonry from "@/components/GalleryMasonry";
import CTASection from "@/components/CTASection";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `/${l}/gallery`;
  }
  languages["x-default"] = `/${routing.defaultLocale}/gallery`;

  return {
    title: "Gallery",
    description:
      "A visual tour of the destinations Lume Bend Ceylon curates across Sri Lanka.",
    alternates: {
      canonical: `/${locale}/gallery`,
      languages,
    },
  };
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <section className="relative flex min-h-[36vh] items-center justify-center overflow-hidden bg-forest-dark pt-28">
        <Motif motif="temple" className="absolute -left-8 bottom-0 h-48 w-56 text-gold/10" strokeWidth={0.6} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-light">A Glimpse</p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">Gallery</h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <GalleryMasonry />
        </div>
      </section>

      <CTASection />
    </>
  );
}