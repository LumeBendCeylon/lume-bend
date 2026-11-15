import { setRequestLocale, getTranslations } from "next-intl/server";
import { languageAlternates } from "@/i18n/metadata";
import type { Metadata } from "next";
import { Download, Leaf, PlaneLanding } from "lucide-react";
import Motif from "@/components/Motif";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SustainabilityPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: "./", languages: languageAlternates("/sustainability") },
  };
}

export default async function SustainabilityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("SustainabilityPage");

  const values = [
    { title: t("values.communityTitle"), text: t("values.communityText") },
    { title: t("values.wildlifeTitle"), text: t("values.wildlifeText") },
    { title: t("values.footprintTitle"), text: t("values.footprintText") },
  ];

  return (
    <>
      <section className="relative flex min-h-[36vh] items-center justify-center overflow-hidden bg-forest-dark pt-28">
        <Motif motif="leaf" className="absolute -left-10 bottom-0 h-56 w-56 text-gold/10" strokeWidth={0.6} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-light">{t("eyebrow")}</p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">{t("title")}</h1>
          <p className="mt-4 text-white/70">{t("subtitle")}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div className="rounded-2xl border border-forest/10 p-8">
              <PlaneLanding className="h-8 w-8 text-gold" />
              <h2 className="mt-4 font-display text-xl text-forest-dark">{t("travelTitle")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{t("travelText")}</p>
              <a
                href="/documents/travel-instructions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-light"
              >
                <Download className="h-4 w-4" /> {t("travelButton")}
              </a>
            </div>

            <div className="rounded-2xl border border-forest/10 p-8">
              <Leaf className="h-8 w-8 text-gold" />
              <h2 className="mt-4 font-display text-xl text-forest-dark">{t("policyTitle")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{t("policyText")}</p>
              <a
                href="/documents/sustainability-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-light"
              >
                <Download className="h-4 w-4" /> {t("policyButton")}
              </a>
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading
              eyebrow={t("commitmentEyebrow")}
              title={t("commitmentTitle")}
              description={t("commitmentDescription")}
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl bg-mist p-6">
                  <h3 className="font-display text-lg text-forest-dark">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}