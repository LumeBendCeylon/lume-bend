import type { Metadata } from "next";
import Motif from "@/components/Motif";
import DestinationCard from "@/components/DestinationCard";
import CTASection from "@/components/CTASection";
import { destinations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore Sri Lanka's most remarkable destinations, from Sigiriya and Kandy to Yala and Mirissa, with Golden Palm Ceylon.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <>
      <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden bg-forest-dark pt-28">
        <Motif motif="wave" className="absolute -bottom-6 left-0 h-40 w-full text-gold/10" strokeWidth={0.6} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-light">Where to Go</p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">Destinations</h1>
          <p className="mt-4 text-white/70">
            A Journey Through the Many Faces of Sri Lanka.

          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <DestinationCard key={d.slug} destination={d} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
