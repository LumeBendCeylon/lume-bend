import type { Metadata } from "next";
import Motif from "@/components/Motif";
import GalleryMasonry from "@/components/GalleryMasonry";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual tour of the destinations Golden Palm Ceylon curates across Sri Lanka.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative flex min-h-[36vh] items-center justify-center overflow-hidden bg-forest-dark pt-28">
        <Motif motif="temple" className="absolute -left-8 bottom-0 h-48 w-56 text-gold/10" strokeWidth={0.6} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-light">A Glimpse</p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">Gallery</h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <GalleryMasonry />
        </div>
      </section>

      <CTASection />
    </>
  );
}
