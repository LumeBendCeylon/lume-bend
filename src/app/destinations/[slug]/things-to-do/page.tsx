import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Motif from "@/components/Motif";
import CTASection from "@/components/CTASection";
import { destinations } from "@/lib/data";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) return {};
  return {
    title: `Things to Do in ${destination.name}`,
    description: `Top things to do and experiences in ${destination.name}, Sri Lanka.`,
    alternates: { canonical: `/destinations/${destination.slug}/things-to-do` },
  };
}

export default async function ThingsToDoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) notFound();

const items = destination.thingsToDo?.length
  ? destination.thingsToDo
  : destination.activities.map((a) => ({
      title: a,
      description: "",
      imageUrl: "",
    }));

  return (
    <>
      <section className="relative flex min-h-[36vh] items-center justify-center overflow-hidden bg-forest-dark pt-28">
        <Motif motif={destination.motif} className="absolute -right-8 -top-8 h-56 w-56 text-gold/10" strokeWidth={0.6} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-light">{destination.region}</p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">Things to Do in {destination.name}</h1>
          <Link
            href={`/destinations/${destination.slug}`}
            className="mt-6 inline-flex items-center gap-1 text-sm text-white/70 hover:text-gold-light"
          >
            <ArrowLeft className="h-4 w-4" /> Back to {destination.name}
          </Link>
        </div>
      </section>

      <section className="bg-forest-dark pb-24">
        <div className="mx-auto max-w-6xl space-y-24 px-6 pt-16 lg:px-10">
          {items.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={i}
                className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                  reversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text side */}
                <div className="relative flex-1">
                  <span className="font-display text-[7rem] leading-none text-white/5 sm:text-[9rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative -mt-12 sm:-mt-16">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-gold" />
                      <p className="eyebrow text-gold-light">Experience {i + 1}</p>
                    </div>
                    <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">{item.title}</h2>
                    {item.description && (
                      <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">{item.description}</p>
                    )}
                    <Link
                      href={`/contact?tour=${encodeURIComponent(destination.name)}`}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold-light hover:text-gold"
                    >
                      
                    </Link>
                  </div>
                </div>

                {/* Photo side */}
                <div className="flex-1">
                  {item.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-80 w-full rounded-2xl object-cover sm:h-96"
                    />
                  ) : (
                    <div className="flex h-80 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-forest-dark sm:h-96">
                      <Motif motif={destination.motif} className="h-16 w-16 text-gold/50" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}