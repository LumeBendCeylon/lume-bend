import type { Metadata } from "next";
import Motif from "@/components/Motif";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Airport transfers, private chauffeurs, professional guides, hotel booking assistance and fully customised tours across Sri Lanka.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden bg-forest-dark pt-28">
        <Motif motif="sun" className="absolute -right-6 -top-6 h-48 w-48 text-gold/10" strokeWidth={0.6} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-light">How We Help</p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">Services</h1>
          <p className="mt-4 text-white/70">
            Everything between your arrival and departure, arranged in advance.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Full Service"
            title="Built Around Your Itinerary"
            description="Every service below can be booked individually or bundled into a complete tailored journey."
          />
          <div className="mt-14">
            <ServicesGrid services={services} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
