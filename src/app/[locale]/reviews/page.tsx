import { setRequestLocale } from "next-intl/server";
import { languageAlternates } from "@/i18n/metadata";
import type { Metadata } from "next";
import ReviewsPageContent from "@/components/ReviewsPageContent";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Read what our guests say about travelling with Golden Palm Ceylon, and share your own trip review.",
  alternates: { canonical: "./", languages: languageAlternates("/reviews") },
};

export default async function ReviewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ReviewsPageContent />;
}
