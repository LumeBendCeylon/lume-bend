import { setRequestLocale, getTranslations } from "next-intl/server";
import { languageAlternates } from "@/i18n/metadata";
import type { Metadata } from "next";
import ReviewsPageContent from "@/components/ReviewsPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ReviewsPage.page" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: "./", languages: languageAlternates("/reviews") },
  };
}

export default async function ReviewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ReviewsPageContent />;
}