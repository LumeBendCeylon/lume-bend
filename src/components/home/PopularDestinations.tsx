import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/lib/data";

export default function PopularDestinations() {
  const popular = destinations.slice(0, 6);
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Where to Go"
            title="Popular Destinations"
            description="From ancient rock fortresses to whale-watching coastlines — the places our travellers return home talking about."
          />
          <Link
            href="/destinations"
            className="flex items-center gap-1 text-sm font-medium text-forest-dark hover:text-gold-dark"
          >
            View all destinations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((d, i) => (
            <DestinationCard key={d.slug} destination={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
