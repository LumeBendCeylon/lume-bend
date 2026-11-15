
import type { Tour } from "@/lib/data";
import de from "@/i18n/tours-de.json";
import fr from "@/i18n/tours-fr.json";
import ru from "@/i18n/tours-ru.json";
import zh from "@/i18n/tours-zh.json";

const overlays: Record<string, Record<string, any>> = {
  de,
  fr,
  ru,
  zh,
};

const FIELDS = [
  "title",
  "duration",
  "highlights",
  "price",
  "blurb",
  "heroTitle",
  "intro",
  "overview",
  "bestFor",
  "groupSize",
  "physicalLevel",
  "destinationsCovered",
  "hotelRecommendation",
  "transportation",
  "meals",
  "included",
  "excluded",
  "optionalExperiences",
  "tourFaqs",
] as const;

export function translateTour(tour: Tour, locale: string): Tour {
  const o = overlays[locale]?.[tour.slug];

  if (!o) return tour;

  const out: any = { ...tour };

  for (const f of FIELDS) {
    if (o[f] !== undefined && o[f] !== null) {
      out[f] = o[f];
    }
  }

  if (tour.itinerary && Array.isArray(o.itinerary)) {
    out.itinerary = tour.itinerary.map((day, i) => {
      const translatedDay = o.itinerary[i];

      return translatedDay
        ? {
            ...day,
            title: translatedDay.title ?? day.title,
            points: translatedDay.points ?? day.points,
            overnight: translatedDay.overnight ?? day.overnight,
          }
        : day;
    });
  }

  return out as Tour;
}
