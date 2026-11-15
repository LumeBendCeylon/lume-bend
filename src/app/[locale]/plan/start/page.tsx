import { setRequestLocale, getTranslations } from "next-intl/server";
import { languageAlternates } from "@/i18n/metadata";
import type { Metadata } from "next";
import Motif from "@/components/Motif";
import PlanWizard from "@/components/PlanWizard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Plan.start" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: "./", languages: languageAlternates("/plan/start") },
  };
}

export default async function PlanStartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <section className="relative min-h-screen bg-mist px-6 pb-20 pt-32">
     <Motif motif="leaf" className="pointer-events-none absolute -right-10 top-24 hidden h-56 w-56 text-forest/5 sm:block" strokeWidth={0.6} />
      <PlanWizard />
    </section>
  );
}