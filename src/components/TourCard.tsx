"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import Motif from "@/components/Motif";
import type { Tour } from "@/lib/data";

export default function TourCard({ tour, index = 0 }: { tour: Tour; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="relative flex h-100 items-center justify-center overflow-hidden bg-gradient-to-br from-forest to-forest-dark">
        {tour.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={tour.imageUrl}
            alt={tour.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <Motif
            motif={tour.motif}
            className="h-24 w-24 text-gold/80 transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium tracking-wide text-forest-dark">
          {tour.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-forest-dark">{tour.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-ink/60">
          <Clock className="h-3.5 w-3.5" /> {tour.duration}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">{tour.blurb}</p>

        <ul className="mt-4 space-y-1.5">
          {tour.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-ink/70">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-forest/10 pt-4">
          <span className="text-sm font-semibold text-forest-dark">{tour.price}</span>
          <div className="flex items-center gap-4">
            {tour.itinerary && (
              <Link
                href={`/tours/${tour.slug}`}
                className="text-sm font-medium text-forest-dark transition-colors hover:text-gold-dark"
              >
                Full Itinerary
              </Link>
            )}
            <Link
              href={`/contact?tour=${encodeURIComponent(tour.title)}`}
              className="flex items-center gap-1 text-sm font-medium text-gold-dark transition-colors hover:text-forest-dark"
            >
              Book Inquiry <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
