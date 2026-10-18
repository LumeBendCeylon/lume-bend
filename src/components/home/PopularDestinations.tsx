"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { destinations } from "@/lib/data";

export default function PopularDestinations() {
  const scroller = useRef<HTMLDivElement>(null);
  const popular = destinations.slice(0, 10);

  const scrollBy = (dir: 1 | -1) =>
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <section className="bg-[#d3e0d8] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Where to Go"
            title="The Wonders of Sri Lanka"
            description="From ancient rock fortresses to whale-watching coastlines, the places our travellers return home talking about."
          />
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous destinations"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/25 text-forest-dark transition-colors hover:border-gold hover:bg-gold hover:text-forest-dark"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next destinations"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-forest-dark transition-colors hover:bg-gold-light"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {popular.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group relative block aspect-[3/4] w-64 shrink-0 snap-start overflow-hidden rounded-2xl bg-forest sm:w-72"
            >
              {d.imageUrl && (
                <Image
                  src={d.imageUrl}
                  alt={d.name}
                  fill
                  sizes="(max-width: 640px) 80vw, 640px"
                  quality={90}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="eyebrow text-gold-light">{d.region}</p>
                <h3 className="mt-1 font-display text-xl text-white">{d.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-1 text-sm font-medium text-gold-dark hover:text-gold"
          >
            View all destinations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}