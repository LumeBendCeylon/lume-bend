"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Motif from "@/components/Motif";
import type { Destination } from "@/lib/data";

export default function DestinationCard({
  destination,
  index = 0,
}: {
  destination: Destination;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
    >
      <Link
        href={`/destinations/${destination.slug}`}
        className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-forest to-forest-dark p-6 text-white shadow-sm transition-shadow hover:shadow-xl"
      >
        {destination.imageUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={destination.imageUrl}
              alt={destination.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/40 to-transparent" />
          </>
        ) : (
          <Motif
            motif={destination.motif}
            className="absolute right-4 top-4 h-20 w-20 text-gold/25 transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <p className="relative eyebrow text-gold-light">{destination.region}</p>
        <h3 className="relative mt-2 font-display text-2xl">{destination.name}</h3>
        <p className="relative mt-2 line-clamp-2 text-sm text-white/70">{destination.description}</p>
        <span className="relative mt-4 flex items-center gap-1 text-sm font-medium text-gold-light">
          Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}