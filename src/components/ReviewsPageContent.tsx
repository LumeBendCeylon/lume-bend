"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Motif from "@/components/Motif";
import SectionHeading from "@/components/SectionHeading";
import ReviewsList from "@/components/ReviewsList";
import ReviewForm from "@/components/ReviewForm";

export default function ReviewsPageContent() {
  const t = useTranslations("ReviewsPage.content");
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <>
      <section className="relative flex min-h-[36vh] items-center justify-center overflow-hidden bg-forest-dark pt-28">
        <Motif motif="sun" className="absolute -right-8 -top-8 h-56 w-56 text-gold/10" strokeWidth={0.6} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-light">{t("eyebrow")}</p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">{t("title")}</h1>
          <p className="mt-4 text-white/70">{t("subtitle")}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <SectionHeading eyebrow={t("recentEyebrow")} title={t("recentTitle")} />
          <div className="mt-10" key={refreshKey}>
            <ReviewsList />
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <SectionHeading eyebrow={t("writeEyebrow")} title={t("writeTitle")} center />
          <div className="mt-10">
            <ReviewForm onSubmitted={() => setRefreshKey((k) => k + 1)} />
          </div>
        </div>
      </section>
    </>
  );
}