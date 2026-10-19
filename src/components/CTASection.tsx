import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Motif from "@/components/Motif";

export default async function CTASection() {
  const t = await getTranslations("CTA");

  return (
    <section className="relative overflow-hidden bg-forest py-20">
      <Motif motif="wave" className="absolute -bottom-10 left-0 h-40 w-full text-gold/10" strokeWidth={0.6} />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          {t("text")}
        </p>
        <Link
          href="/plan"
          className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-forest-dark transition-transform hover:scale-105 hover:bg-gold-light"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}