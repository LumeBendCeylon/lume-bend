import type { Metadata } from "next";
import { Download, Leaf, PlaneLanding } from "lucide-react";
import Motif from "@/components/Motif";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Travel instructions for visiting Sri Lanka and Golden Palm Ceylon's sustainable tourism policies.",
  alternates: { canonical: "/sustainability" },
};

export default function SustainabilityPage() {
  return (
    <>
      <section className="relative flex min-h-[36vh] items-center justify-center overflow-hidden bg-forest-dark pt-28">
        <Motif motif="leaf" className="absolute -left-10 bottom-0 h-56 w-56 text-gold/10" strokeWidth={0.6} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-light">Travel Responsibly</p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">Sustainability</h1>
          <p className="mt-4 text-white/70">
            How we help you prepare for Sri Lanka, and how we travel responsibly while you're here.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div className="rounded-2xl border border-forest/10 p-8">
              <PlaneLanding className="h-8 w-8 text-gold" />
              <h2 className="mt-4 font-display text-xl text-forest-dark">
                Travel Instructions for Sri Lanka
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Practical guidance for your trip — visas, what to pack, health and safety notes,
                local customs and etiquette, and what to expect on arrival.
              </p>
              <a
                href="/documents/travel-instructions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-light"
              >
                <Download className="h-4 w-4" /> Download Travel Instructions (PDF)
              </a>
            </div>

            <div className="rounded-2xl border border-forest/10 p-8">
              <Leaf className="h-8 w-8 text-gold" />
              <h2 className="mt-4 font-display text-xl text-forest-dark">
                Our Sustainable Tourism Policies
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Our commitments around community partnership, wildlife protection, waste reduction
                and supporting local livelihoods across every itinerary we design.
              </p>
              <a
                href="/documents/sustainability-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-light"
              >
                <Download className="h-4 w-4" /> Download Sustainability Policy (PDF)
              </a>
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Our Commitment"
              title="Responsible Travel, By Design"
              description="Sustainability isn't a separate add-on for us — it shapes how every itinerary is built."
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { title: "Community Partnership", text: "We work with locally owned guesthouses, guides and drivers across every region we visit." },
                { title: "Wildlife Protection", text: "Our safari partners follow responsible viewing distances and support park conservation efforts." },
                { title: "Reducing Our Footprint", text: "We favour reusable materials, minimise single-use plastics, and encourage guests to do the same." },
              ].map((v) => (
                <div key={v.title} className="rounded-2xl bg-mist p-6">
                  <h3 className="font-display text-lg text-forest-dark">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
