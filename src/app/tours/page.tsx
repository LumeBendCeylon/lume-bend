import type { Metadata } from "next";
import { Suspense } from "react";
import Motif from "@/components/Motif";
import ToursExplorer from "@/components/ToursExplorer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Browse Golden Palm Ceylon's luxury, adventure, wildlife, beach, hill country, cultural, day, family and honeymoon tours across Sri Lanka.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  return (
    <>
      <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden bg-forest-dark pt-28">
        <Motif motif="mountain" className="absolute -left-10 bottom-0 h-56 w-64 text-gold/10" strokeWidth={0.6} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-light">Our Journeys</p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">Tours</h1>
          <p className="mt-4 text-white/70">
            Nine tour styles, every one of them a starting point for your own itinerary.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Suspense fallback={null}>
            <ToursExplorer />
          </Suspense>
        </div>
      </section>

      <CTASection />
    </>
  );
}
