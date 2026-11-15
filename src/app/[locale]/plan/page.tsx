import { setRequestLocale, getTranslations } from "next-intl/server";
import { languageAlternates } from "@/i18n/metadata";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Compass, MessageSquareText, Sparkles } from "lucide-react";
import Motif from "@/components/Motif";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Plan.landing" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: "./", languages: languageAlternates("/plan") },
  };
}

export default async function PlanLandingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Plan.landing");

  const items = [
    { icon: MessageSquareText, text: t("step1") },
    { icon: Sparkles, text: t("step2") },
    { icon: Compass, text: t("step3") },
  ];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-forest-dark px-6 pt-28 text-center">
      <Motif motif="rock" className="absolute -bottom-10 left-1/2 h-[46vh] w-[130vw] -translate-x-1/2 text-gold/10" strokeWidth={0.6} />

      <div className="relative mx-auto max-w-2xl">
        <p className="eyebrow text-gold-light">{t("eyebrow")}</p>
        <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">{t("title")}</h1>
        <p className="mx-auto mt-5 max-w-xl text-white/70">{t("intro")}</p>

        <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          {items.map((s) => (
            <div key={s.text} className="rounded-2xl border border-white/10 p-5 text-white/75">
              <s.icon className="h-6 w-6 text-gold" />
              <p className="mt-3 text-sm">{s.text}</p>
            </div>
          ))}
        </div>

        <Link
          href="/plan/start"
          className="mt-10 inline-block rounded-full bg-gold px-10 py-4 text-sm font-medium tracking-wide text-forest-dark transition-transform hover:scale-105 hover:bg-gold-light"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}