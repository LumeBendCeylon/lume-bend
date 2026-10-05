import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TourCard from "@/components/TourCard";
import { tours } from "@/lib/data";

export default function FeaturedTours() {
  const featured = tours.slice(0, 6);
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Curated Journeys"
            title="Featured Tours"
            description="A selection of our most requested itineraries — each one fully customisable to your dates and pace."
          />
          <Link
            href="/tours"
            className="flex items-center gap-1 text-sm font-medium text-forest-dark hover:text-gold-dark"
          >
            View all tours <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tour, i) => (
            <TourCard key={tour.slug} tour={tour} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
