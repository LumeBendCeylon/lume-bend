import { languageAlternates } from "@/i18n/metadata";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/components/home/Hero";
import FeaturedTours from "@/components/home/FeaturedTours";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesOverview from "@/components/home/ServicesOverview";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import Testimonials from "@/components/Testimonials";
import FindUsOnline from "@/components/home/FindUsOnline";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/CTASection";
import VacationCollage from "@/components/home/VacationCollage";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: { canonical: "./", languages: languageAlternates("") },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <PopularDestinations />
      <WhyChooseUs />
      <VacationCollage />
      <FeaturedTours />
      <ServicesOverview />
      <ExperienceTimeline />
      <Testimonials />
      <FindUsOnline />
      <FAQSection />
      <CTASection />
    </>
  );
}