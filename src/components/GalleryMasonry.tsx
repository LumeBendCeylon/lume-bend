"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, PlayCircle, Loader2 } from "lucide-react";
import Motif from "@/components/Motif";
import { destinations } from "@/lib/data";
import { getGalleryItems, type GalleryItem } from "@/lib/firebase";

const heights = ["h-64", "h-48", "h-56", "h-72", "h-48", "h-60", "h-52", "h-64", "h-48", "h-56", "h-60"];

export default function GalleryMasonry() {
  const [active, setActive] = useState<number | null>(null);
  const [photos, setPhotos] = useState<GalleryItem[] | null>(null);

  useEffect(() => {
    getGalleryItems().then(setPhotos);
  }, []);

  return (
    <>
      {photos === null ? (
        <div className="flex justify-center py-10 text-ink/40">
          <Loader2 className="h-5 w-5 animate-spin" />
        </div>
      ) : (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {/* Real admin-added photos, if any */}
          {photos.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(-(i + 1))}
              className={`group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-mist ${heights[i % heights.length]}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.imageUrl}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute bottom-3 left-3 text-sm font-medium tracking-wide text-white drop-shadow">
                {p.title}
              </span>
            </button>
          ))}

          {/* Destinations — gallery-specific photo if set, else the main destination photo, else illustrated placeholder */}
          {destinations.map((d, i) => (
            <button
              key={d.slug}
              onClick={() => setActive(i)}
              className={`group relative flex w-full items-center justify-center overflow-hidden rounded-xl ${
                d.galleryImageUrl || d.imageUrl ? "bg-mist" : "bg-gradient-to-br from-forest to-forest-dark"
              } ${heights[i % heights.length]}`}
            >
              {d.galleryImageUrl || d.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={d.galleryImageUrl || d.imageUrl}
                  alt={d.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <Motif
                  motif={d.motif}
                  className="h-16 w-16 text-gold/70 transition-transform duration-500 group-hover:scale-125"
                />
              )}
              <span className="absolute bottom-3 left-3 text-sm font-medium tracking-wide text-white drop-shadow">
                {d.name}
              </span>
            </button>
          ))}
        </div>
      )}

      <div className="mt-20">
        <h2 className="font-display text-2xl text-forest-dark">Video Gallery</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Island Overview", "Hill Country in Motion", "Southern Coast at Sunset"].map((title) => (
            <div
              key={title}
              className="group relative flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-forest-dark to-forest"
            >
              <PlayCircle className="h-12 w-12 text-gold/90 transition-transform group-hover:scale-110" />
              <span className="absolute bottom-3 left-3 text-sm font-medium text-white">{title}</span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 text-white/80 hover:text-gold"
              onClick={() => setActive(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="flex h-[60vh] w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-forest to-forest-dark"
              onClick={(e) => e.stopPropagation()}
            >
              {active < 0 && photos ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photos[-active - 1].imageUrl}
                    alt={photos[-active - 1].title}
                    className="h-full w-full object-cover"
                  />
                  <p className="mt-2 pb-4 font-display text-xl text-white">{photos[-active - 1].title}</p>
                </>
              ) : (
                active !== null &&
                active >= 0 && (
                  <>
                    {destinations[active].galleryImageUrl || destinations[active].imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={destinations[active].galleryImageUrl || destinations[active].imageUrl}
                        alt={destinations[active].name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Motif motif={destinations[active].motif} className="h-32 w-32 text-gold/80" />
                    )}
                    <p className="mt-6 font-display text-2xl text-white">{destinations[active].name}</p>
                  </>
                )
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}