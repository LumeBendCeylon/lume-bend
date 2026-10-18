import { languageAlternates } from "@/i18n/metadata";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Luxury Private Tours in Sri Lanka",
  description:
    "Bespoke, privately guided luxury journeys across Sri Lanka's cultural triangle, hill country, wildlife and coast — designed entirely around you.",
  alternates: { canonical: "./", languages: languageAlternates("") },
};

export default function HomePage() {
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
