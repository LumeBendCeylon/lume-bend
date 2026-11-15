import { getTranslations, setRequestLocale } from "next-intl/server";
import { languageAlternates } from "@/i18n/metadata";
import type { Metadata } from "next";
import Motif from "@/components/Motif";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: "./", languages: languageAlternates("/services") },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ServicesPage");
  return (
    <>
      <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden bg-forest-dark pt-28">
        <Motif motif="sun" className="absolute -right-6 -top-6 h-48 w-48 text-gold/10" strokeWidth={0.6} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-light">{t("heroEyebrow")}</p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">{t("heroTitle")}</h1>
          <p className="mt-4 text-white/70">{t("heroText")}</p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={t("sectionEyebrow")}
            title={t("sectionTitle")}
            description={t("sectionDescription")}
          />
          <div className="mt-14">
            <ServicesGrid services={services} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}