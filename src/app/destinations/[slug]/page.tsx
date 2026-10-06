import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Motif from "@/components/Motif";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
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
    title: destination.name,
    description: destination.description,
    alternates: { canonical: `/destinations/${destination.slug}` },
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) notFound();

 const cards = destination.highlightCards?.length
    ? destination.highlightCards
    : destination.highlights.slice(0, 3).map((h) => ({ title: h, imageUrl: undefined as string | undefined }));

  // Up to 5 article sections, sourced from thingsToDo; falls back to
  // activities/highlights (paired with the description) if not set.
  const articles = destination.articleSections || [];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: destination.name,
          description: destination.description,
          touristType: "Leisure travellers",
        }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-forest-dark pt-28">
        {destination.imageUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={destination.imageUrl}
              alt={destination.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/50 to-forest-dark/20" />
          </>
        ) : (
          <Motif
            motif={destination.motif}
            className="absolute right-[-4rem] top-1/2 h-72 w-72 -translate-y-1/2 text-gold/15"
            strokeWidth={0.6}
          />
        )}
        <div className="relative mx-auto w-full max-w-5xl px-6 pb-16 lg:px-10">
          <Link href="/destinations" className="mb-6 flex w-fit items-center gap-1 text-sm text-white/70 hover:text-gold-light">
            <ArrowLeft className="h-4 w-4" /> Back to Destinations
          </Link>
          <p className="eyebrow text-gold-light">It's time to visit</p>
          <h1 className="mt-2 font-display text-5xl text-white sm:text-7xl">{destination.name}</h1>
          <p className="mt-5 max-w-xl text-white/75">{destination.description}</p>
          <Link
            href={`/destinations/${destination.slug}/things-to-do`}
            className="mt-7 inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white transition-colors hover:border-gold hover:text-gold-light"
          >
            Explore Things to Do In {destination.name}
          </Link>
        </div>
      </section>

      {/* 3-card highlights — no links, photo + title only */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <h2 className="font-display text-3xl text-forest-dark">Highlights of {destination.name}</h2>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {cards.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                {item.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.imageUrl} alt={item.title} className="h-48 w-full rounded-xl object-cover" />
                ) : (
                  <div className="flex h-48 w-full items-center justify-center rounded-xl bg-gradient-to-br from-forest to-forest-dark">
                    <Motif motif={destination.motif} className="h-12 w-12 text-gold/70" />
                  </div>
                )}
                <h3 className="mt-5 font-display text-lg uppercase tracking-wide text-forest-dark">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article sections — alternating photo/text, no links */}
      {articles.map((item, i) => {
        const reversed = i % 2 === 1;
        const dark = i % 2 === 1;
        return (
          <section key={i} className={dark ? "bg-forest-dark py-20" : "bg-white py-20"}>
            <div
              className={`mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {item.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.imageUrl} alt={item.title} className="h-[480px] w-full rounded-2xl object-cover" />
              ) : (
                <div className="flex h-96 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-forest-dark">
                  <Motif motif={destination.motif} className="h-20 w-20 text-gold/70" />
                </div>
              )}

              <div>
                <h2 className={`font-display text-3xl ${dark ? "text-white" : "text-forest-dark"}`}>
                  {item.title}
                </h2>
                {item.description && (
                  <p className={`mt-5 whitespace-pre-line text-sm leading-relaxed ${dark ? "text-white/70" : "text-ink/70"}`}>
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}