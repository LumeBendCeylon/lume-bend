import type { Tour } from "@/lib/data";
import de from "@/i18n/tours-de.json";

// Add fr / ru / zh here when their tours-<locale>.json files exist.
const overlays: Record<string, Record<string, any>> = { de };

const FIELDS = [
  "title", "duration", "highlights", "blurb", "heroTitle", "intro", "overview",
  "bestFor", "groupSize", "physicalLevel", "hotelRecommendation",
  "transportation", "meals", "included", "excluded", "optionalExperiences",
  "tourFaqs",
] as const;

export function translateTour(tour: Tour, locale: string): Tour {
  const o = overlays[locale]?.[tour.slug];
  if (!o) return tour;
  const out: any = { ...tour };
  for (const f of FIELDS) {
    if (o[f] !== undefined && o[f] !== null) out[f] = o[f];
  }
  if (tour.itinerary && Array.isArray(o.itinerary)) {
    out.itinerary = tour.itinerary.map((d, i) => {
      const od = o.itinerary[i];
      return od
        ? { ...d, title: od.title ?? d.title, points: od.points ?? d.points, overnight: od.overnight ?? d.overnight }
        : d;
    });
  }
  return out as Tour;
}