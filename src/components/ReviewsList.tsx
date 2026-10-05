"use client";

import { useEffect, useState } from "react";
import { Quote, Loader2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { getReviews, type Review } from "@/lib/firebase";
import { testimonials } from "@/lib/data";
import StarRatingDisplay from "@/components/StarRatingDisplay";

const COMMENT_LIMIT = 160;

const fallbackReviews: Review[] = testimonials.map((t, i) => ({
  id: `fallback-${i}`,
  name: t.name,
  country: t.country,
  rating: 5,
  tourTitle: t.trip,
  comment: t.quote,
  createdAt: null,
}));

function ReviewComment({ comment }: { comment: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = comment.length > COMMENT_LIMIT;
  const shown = expanded || !isLong ? comment : comment.slice(0, COMMENT_LIMIT).trimEnd() + "…";

  return (
    <blockquote className="mt-4 break-words text-base leading-relaxed text-ink/80">
      &quot;{shown}&quot;
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="ml-1.5 text-sm font-medium text-gold-dark hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </blockquote>
  );
}

type LightboxState = { images: string[]; index: number };

export default function ReviewsList({ max }: { max?: number }) {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  useEffect(() => {
    getReviews(max ?? 20).then((live) => {
      setReviews(live.length > 0 ? live : fallbackReviews);
    });
  }, [max]);

  if (reviews === null) {
    return (
      <div className="flex justify-center py-10 text-ink/40">
        <Loader2 className="h-5 w-5 animate-spin" />
      </div>
    );
  }

  const shown = max ? reviews.slice(0, max) : reviews;

  function showNext() {
    setLightbox((lb) => (lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : lb));
  }
  function showPrev() {
    setLightbox((lb) => (lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : lb));
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {shown.map((r) => {
          const images = r.imageUrls && r.imageUrls.length > 0 ? r.imageUrls : [];
          return (
            <figure key={r.id} className="rounded-2xl border border-forest/10 bg-mist p-8">
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-gold" />
                <StarRatingDisplay rating={r.rating} />
              </div>

              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {images.slice(0, 3).map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setLightbox({ images, index: i })}
                      className="relative block aspect-square cursor-zoom-in overflow-hidden rounded-lg"
                    >
                      <img
                        src={src}
                        alt={`Photo ${i + 1} from ${r.name}`}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      {i === 2 && images.length > 3 && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-sm font-semibold text-white">
                          +{images.length - 3}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}

              <ReviewComment comment={r.comment} />

              <figcaption className="mt-6 flex items-center justify-between text-sm">
                <span className="font-semibold text-forest-dark">
                  {r.name} {r.country && <span className="font-normal text-ink/50">— {r.country}</span>}
                </span>
                {r.tourTitle && <span className="text-gold-dark">{r.tourTitle}</span>}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-6"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {lightbox.images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}

          <img
            src={lightbox.images[lightbox.index]}
            alt="Full size review photo"
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox.images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}

          {lightbox.images.length > 1 && (
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-xs text-white">
              {lightbox.index + 1} / {lightbox.images.length}
            </span>
          )}
        </div>
      )}
    </>
  );
}