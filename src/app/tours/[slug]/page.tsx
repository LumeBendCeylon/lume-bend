import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CalendarDays,
  Users,
  Activity,
  MapPin,
  Check,
  X,
  Sparkles,
  Hotel,
  Car,
  UtensilsCrossed,
  MessageCircle,
  BadgeCheck,
} from "lucide-react";
import Motif from "@/components/Motif";
import RouteMap from "@/components/RouteMap";
import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import TourQuoteForm from "@/components/TourQuoteForm";
import { tours, type Tour } from "@/lib/data";
import { getCustomTourBySlug, type CustomTour } from "@/lib/firebase";

const detailedTours = tours.filter((t) => t.itinerary && t.itinerary.length > 0);

// Admin-added tours are stored in Firestore and aren't known at build
// time, so this page also checks there when a slug isn't in the static
// list. Revalidate periodically so admin edits show up without a rebuild.
export const revalidate = 60;

function customTourToTour(c: CustomTour): Tour {
  return {
    slug: c.slug,
    title: c.title,
    category: c.category as Tour["category"],
    duration: c.duration,
    highlights: c.highlights,
    price: c.price,
    blurb: c.blurb,
    motif: (c.motif as Tour["motif"]) || "sun",
    imageUrl: c.imageUrl,
    heroTitle: c.heroTitle,
    intro: c.intro,
    overview: c.overview,
    bestFor: c.bestFor,
    groupSize: c.groupSize,
    physicalLevel: c.physicalLevel,
    destinationsCovered: c.destinationsCovered,
    itinerary: c.itinerary,
    hotelRecommendation: c.hotelRecommendation,
    transportation: c.transportation,
    meals: c.meals,
    included: c.included,
    excluded: c.excluded,
    optionalExperiences: c.optionalExperiences,
    tourFaqs: c.tourFaqs,
  };
}

async function findTour(slug: string): Promise<Tour | null> {
  // Firestore is checked first: if an admin has edited a built-in tour
  // (same slug, re-saved via the admin panel), that edited version should
  // win over the version baked into this file at build time.
  const custom = await getCustomTourBySlug(slug);
  if (custom && custom.itinerary && custom.itinerary.length > 0) {
    return customTourToTour(custom);
  }
  const staticMatch = detailedTours.find((t) => t.slug === slug);
  if (staticMatch) return staticMatch;
  return null;
}

export function generateStaticParams() {
  return detailedTours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = await findTour(slug);
  if (!tour) return {};
  return {
    title: tour.title,
    description: tour.blurb,
    alternates: { canonical: `/tours/${tour.slug}` },
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = await findTour(slug);
  if (!tour) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: tour.title,
          description: tour.blurb,
          touristType: tour.bestFor,
          offers: { "@type": "Offer", price: tour.price, priceCurrency: "USD" },
        }}
      />

      {/* Hero banner with a photo-style header + duration / tour type strip */}
      <section className="relative flex min-h-[46vh] flex-col justify-end overflow-hidden bg-forest-dark pt-28">
        {tour.imageUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={tour.imageUrl} alt={tour.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/70 to-forest-dark/20" />
          </>
        ) : (
          <Motif
            motif={tour.motif}
            className="absolute right-[-4rem] top-1/3 h-72 w-72 -translate-y-1/2 text-gold/15"
            strokeWidth={0.6}
          />
        )}
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-10 lg:px-10">
          <h1 className="max-w-2xl font-display text-3xl text-white sm:text-4xl lg:text-5xl">
            {tour.heroTitle || tour.title}
          </h1>
        </div>
        <div className="relative mx-auto flex w-full max-w-7xl flex-wrap gap-3 px-6 pb-6 lg:px-10">
          <span className="rounded-lg bg-forest px-5 py-3 text-sm text-white">
            <span className="block text-xs text-white/60">Duration</span>
            <span className="font-display text-base">{tour.duration}</span>
          </span>
          <span className="rounded-lg bg-gold px-5 py-3 text-sm text-forest-dark">
            <span className="block text-xs text-forest-dark/70">Tour Type</span>
            <span className="font-display text-base">{tour.category}</span>
          </span>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-forest/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-ink/60 lg:px-10">
          <Link href="/" className="hover:text-gold-dark">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/tours" className="hover:text-gold-dark">Tours</Link>
          <span className="mx-2">›</span>
          <Link href={`/tours?category=${encodeURIComponent(tour.category)}`} className="hover:text-gold-dark">
            {tour.category}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-ink/40">{tour.title}</span>
        </div>
      </div>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-3 lg:px-10">
          {/* Main content column */}
          <div className="lg:col-span-2">
            {/* 1. Overview, first */}
            <h2 className="font-display text-2xl text-forest-dark">Overview</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/75">{tour.intro || tour.blurb}</p>
            {tour.overview && (
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{tour.overview}</p>
            )}

            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-mist p-6 sm:grid-cols-4">
              <QuickFact icon={CalendarDays} label="Duration" value={tour.duration} />
              <QuickFact icon={Users} label="Best For" value={tour.bestFor || "All travellers"} />
              <QuickFact icon={Activity} label="Physical Level" value={tour.physicalLevel || "Moderate"} />
              <QuickFact icon={MapPin} label="Group Size" value={tour.groupSize || "Customisable"} />
            </div>

            {/* 2. Detail Itinerary — photo tile + short bullet points per day */}
            {tour.itinerary && (
              <div className="mt-12">
                <h2 className="font-display text-2xl text-forest-dark">Detail Itinerary</h2>
                <div className="mt-6 space-y-5">
                  {tour.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-forest/10 sm:grid-cols-5"
                    >
                      <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-forest to-forest-dark sm:col-span-2 sm:h-auto">
                       {day.imageUrl ? (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={day.imageUrl} alt={day.title} className="absolute inset-0 h-full w-full object-cover" />
) : (
  <Motif motif={tour.motif} className="h-14 w-14 text-gold/70" />
)}
                        <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-forest-dark">
                          Day {String(day.day).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="p-6 sm:col-span-3">
                        <h3 className="font-display text-lg text-forest-dark">{day.title}</h3>
                        <ul className="mt-3 space-y-1.5 text-sm text-ink/75">
                          <li>• <span className="font-medium text-forest-dark">Morning —</span> {day.morning}</li>
                          <li>• <span className="font-medium text-forest-dark">Afternoon —</span> {day.afternoon}</li>
                          <li>• <span className="font-medium text-forest-dark">Evening —</span> {day.evening}</li>
                        </ul>
                        <p className="mt-3 text-xs text-ink/50">Overnight: {day.overnight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Real route map */}
            {tour.destinationsCovered && (
              <div className="mt-14">
                <h2 className="flex items-center gap-2 font-display text-xl text-forest-dark">
                  <MapPin className="h-5 w-5 text-gold" /> Tour Route Map
                </h2>
                <p className="mt-2 text-sm text-ink/60">{tour.destinationsCovered}</p>
                <div className="mt-4">
                  <RouteMap destinationsCovered={tour.destinationsCovered} />
                </div>
              </div>
            )}

            {/* 4. Included / Excluded */}
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {tour.included && (
                <div>
                  <h2 className="flex items-center gap-2 font-display text-lg text-forest-dark">
                    <Check className="h-5 w-5 text-forest" /> Tour Includes
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {tour.included.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {tour.excluded && (
                <div>
                  <h2 className="flex items-center gap-2 font-display text-lg text-forest-dark">
                    <X className="h-5 w-5 text-red-400" /> Tour Excludes
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {tour.excluded.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink/75">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {tour.hotelRecommendation && (
                <InfoCard icon={Hotel} title="Hotel Recommendation" text={tour.hotelRecommendation} />
              )}
              {tour.transportation && <InfoCard icon={Car} title="Transportation" text={tour.transportation} />}
              {tour.meals && <InfoCard icon={UtensilsCrossed} title="Meals" text={tour.meals} />}
            </div>

            {tour.optionalExperiences && (
              <div className="mt-14">
                <h2 className="font-display text-lg text-forest-dark">Optional Experiences</h2>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {tour.optionalExperiences.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-ink/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tour.tourFaqs && (
              <div className="mt-14">
                <h2 className="font-display text-lg text-forest-dark">Frequently Asked Questions</h2>
                <div className="mt-6">
                  <FAQAccordion overrideFaqs={tour.tourFaqs} />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-2xl bg-forest-dark p-6 text-white">
              <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-medium text-forest-dark">
                <BadgeCheck className="h-3.5 w-3.5" /> All Year Round
              </span>
              <p className="text-xs uppercase tracking-wide text-white/50">Starting From</p>
              <p className="mt-1 font-display text-3xl text-gold">{tour.price.replace("From ", "")}</p>
              <p className="mt-1 text-xs text-white/60">Per person on double sharing basis</p>
            </div>

            <Link
              href="#plan-your-tour"
              className="flex items-center gap-3 rounded-2xl bg-gold p-5 text-forest-dark transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-6 w-6 shrink-0" />
              <span>
                <span className="block font-display text-base">Interested?</span>
                <span className="block text-sm">Click here to send an inquiry</span>
              </span>
            </Link>

            <div className="rounded-2xl bg-mist p-6">
              <h3 className="font-display text-lg text-forest-dark">Tour Highlights</h3>
              <ul className="mt-4 space-y-2.5">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-ink/75">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {h}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* 5. Plan Your Tour — always last */}
      <section id="plan-your-tour" className="bg-forest py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Start Planning Your Sri Lanka Tour</h2>
          <p className="mt-3 text-sm text-white/70">
            Please give as much information as you could so that we can get a good idea about your
            requirements. Our team will send you the best quote within 48 hours.
          </p>
          <div className="mt-10 text-left">
            <TourQuoteForm tourTitle={tour.title} />
          </div>
        </div>
      </section>
    </>
  );
}

function QuickFact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CalendarDays;
  label: string;
  value: string;
}) {
  return (
    <div>
      <Icon className="h-5 w-5 text-gold" />
      <p className="mt-2 text-xs uppercase tracking-wide text-ink/50">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-forest-dark">{value}</p>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Hotel;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-forest/10 p-6">
      <Icon className="h-6 w-6 text-gold" />
      <h3 className="mt-3 font-display text-lg text-forest-dark">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">{text}</p>
    </div>
  );
}
