"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, ArrowLeft } from "lucide-react";
import TourCard from "@/components/TourCard";
import Motif from "@/components/Motif";
import { tours, DEFAULT_CATEGORIES, type Tour } from "@/lib/data";
import { getCustomTours, getCategories, type CustomTour, type Category } from "@/lib/firebase";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function ToursExplorer() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";

  const [customTours, setCustomTours] = useState<CustomTour[]>([]);
  const [extraCategories, setExtraCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCustomTours().then(setCustomTours);
    getCategories().then(setExtraCategories);
  }, []);

  // The 9 built-in categories plus any admin-added ones. If an admin adds
  // a Firestore category doc with the SAME name as a built-in one, that's
  // treated as an override (e.g. just to set a photo) rather than a duplicate.
  const allCategoryDefs = useMemo(() => {
    const overridden = DEFAULT_CATEGORIES.map((def) => {
      const override = extraCategories.find((c) => c.name === def.name);
      return override
        ? { name: def.name, motif: (override.motif as Tour["motif"]) || def.motif, imageUrl: override.imageUrl }
        : def;
    });
    const brandNew = extraCategories
      .filter((c) => !DEFAULT_CATEGORIES.some((d) => d.name === c.name))
      .map((c) => ({ name: c.name, motif: c.motif as Tour["motif"], imageUrl: c.imageUrl }));
    return [...overridden, ...brandNew];
  }, [extraCategories]);

  const CATEGORIES = useMemo(() => ["All", ...allCategoryDefs.map((c) => c.name)], [allCategoryDefs]);
  const CATEGORY_MOTIF = useMemo(() => {
    const map: Record<string, Tour["motif"]> = {};
    for (const c of allCategoryDefs) map[c.name] = c.motif;
    return map;
  }, [allCategoryDefs]);

  const [category, setCategory] = useState<string>(
    CATEGORIES.includes(initialCategory) ? initialCategory : "All"
  );
  const [month, setMonth] = useState<string>("All");
  const [appliedCategory, setAppliedCategory] = useState(category);
  const [appliedMonth, setAppliedMonth] = useState(month);

  // Admin-added/edited tours (Firestore) converted to the same shape as
  // the built-in static tours. A Firestore tour whose slug matches a
  // built-in tour's slug REPLACES it (i.e. admin edits to a built-in
  // tour take priority); anything else is added as a new listing.
  const allTours: Tour[] = useMemo(() => {
    const converted: Tour[] = customTours.map((c) => ({
      slug: c.slug || `custom-${c.id}`,
      title: c.title,
      category: c.category,
      duration: c.duration,
      highlights: c.highlights,
      price: c.price,
      blurb: c.blurb,
      motif: (c.motif as Tour["motif"]) || CATEGORY_MOTIF[c.category] || "sun",
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
    }));
    const overriddenSlugs = new Set(converted.map((c) => c.slug));
    const staticRemaining = tours.filter((t) => !overriddenSlugs.has(t.slug));
    return [...staticRemaining, ...converted];
  }, [customTours, CATEGORY_MOTIF]);

  useEffect(() => {
    if (CATEGORIES.includes(initialCategory)) {
      setCategory(initialCategory);
      setAppliedCategory(initialCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, CATEGORIES.join("|")]);

  // Summary card per main category — count, starting price — shown when
  // no specific Tour Type is selected, instead of all sub-tours at once.
  const categorySummaries = useMemo(() => {
    return allCategoryDefs.map((def) => {
      const inCategory = allTours.filter((t) => t.category === def.name);
      const prices = inCategory.map((t) => parseInt(t.price.replace(/[^0-9]/g, ""), 10) || 0);
      const minPrice = prices.length ? Math.min(...prices) : 0;
      return {
        category: def.name,
        count: inCategory.length,
        minPrice,
        motif: def.motif,
        imageUrl: def.imageUrl,
        blurb: inCategory[0]?.blurb ?? "",
      };
    });
  }, [allTours, allCategoryDefs]);

  const subTours = useMemo(() => {
    if (appliedCategory === "All") return [];
    return [...allTours]
      .filter((t) => t.category === appliedCategory)
      .sort((a, b) => (parseInt(a.duration, 10) || 0) - (parseInt(b.duration, 10) || 0));
  }, [appliedCategory, allTours]);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-col gap-3 rounded-2xl bg-forest-dark p-4 sm:flex-row sm:items-center">
        <div className="flex-1">
          <label className="sr-only" htmlFor="tourType">Tour Type</label>
          <select
            id="tourType"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white focus:border-gold focus:outline-none [&>option]:text-ink"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c === "All" ? "All Tour Types" : c}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="sr-only" htmlFor="month">Month to Travel</label>
          <select
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white focus:border-gold focus:outline-none [&>option]:text-ink"
          >
            <option value="All">All Months to Travel</option>
            {MONTHS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => {
            setAppliedCategory(category);
            setAppliedMonth(month);
          }}
          className="flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-medium text-forest-dark transition-colors hover:bg-gold-light sm:w-auto"
        >
          <Search className="h-4 w-4" /> Search
        </button>
      </div>

      {appliedCategory === "All" ? (
        <>
          <p className="mt-4 text-sm text-ink/50">
            {categorySummaries.length} tour types — choose one to see its packages
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categorySummaries.map((c, i) => (
              <motion.button
                key={c.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                onClick={() => {
                  setCategory(c.category);
                  setAppliedCategory(c.category);
                }}
                className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-forest to-forest-dark p-6 text-left text-white shadow-sm transition-shadow hover:shadow-xl"
              >
                {c.imageUrl ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.imageUrl}
                      alt={c.category}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/60 to-transparent" />
                  </>
                ) : (
                  <Motif
                    motif={c.motif}
                    className="absolute right-4 top-4 h-20 w-20 text-gold/25 transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <p className="relative eyebrow text-gold-light">{c.count} packages</p>
                <h3 className="relative mt-2 font-display text-2xl">{c.category}</h3>
                <p className="relative mt-2 line-clamp-2 text-sm text-white/70">{c.blurb}</p>
                <span className="relative mt-4 flex items-center justify-between text-sm font-medium text-gold-light">
                  From ${c.minPrice.toLocaleString()} pp
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => {
                setCategory("All");
                setAppliedCategory("All");
              }}
              className="flex items-center gap-1 text-sm font-medium text-forest-dark hover:text-gold-dark"
            >
              <ArrowLeft className="h-4 w-4" /> All Tour Types
            </button>
            <p className="text-sm text-ink/50">
              {subTours.length} package{subTours.length === 1 ? "" : "s"} in {appliedCategory}
              {appliedMonth !== "All" ? ` · best in ${appliedMonth}` : ""}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {subTours.map((tour, i) => (
              <TourCard key={tour.slug} tour={tour} index={i} />
            ))}
            {subTours.length === 0 && (
              <p className="col-span-full py-12 text-center text-sm text-ink/50">
                No tours in this category yet — try another Tour Type.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
