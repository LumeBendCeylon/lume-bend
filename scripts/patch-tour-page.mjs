import fs from "fs";

const p = "src/app/[locale]/tours/[slug]/page.tsx";
let text = fs.readFileSync(p, "utf8");
const eol = text.includes("\r\n") ? "\r\n" : "\n";
text = text.replace(/\r\n/g, "\n");

// [from, to, expectedCount]
const pairs = [
  ['import { setRequestLocale } from "next-intl/server";', 'import { setRequestLocale, getTranslations } from "next-intl/server";\nimport { translateTour } from "@/lib/tour-i18n";', 1],
  ['async function findTour(slug: string): Promise<Tour | null> {', 'async function findTour(slug: string, locale = "en"): Promise<Tour | null> {', 1],
  ['if (staticMatch) return staticMatch;', 'if (staticMatch) return translateTour(staticMatch, locale);', 1],
  ['await findTour(slug)', 'await findTour(slug, locale)', 2],
  ['params: Promise<{ slug: string }>;', 'params: Promise<{ locale: string; slug: string }>;', 1],
  ['const { slug } = await params;', 'const { locale, slug } = await params;', 1],
  ['if (!tour) notFound();', 'if (!tour) notFound();\n  const t = await getTranslations("TourDetail");\n  const tcat = await getTranslations("TourCard");\n  const cats = tcat.raw("categories") as Record<string, string>;\n  const categoryLabel = (c: string) => cats[c] ?? c;', 1],
  ['text-white/60">Duration</span>', 'text-white/60">{t("duration")}</span>', 1],
  ['text-forest-dark/70">Tour Type</span>', 'text-forest-dark/70">{t("tourType")}</span>', 1],
  ['{tour.category}', '{categoryLabel(tour.category)}', 2],
  ['>Home</Link>', '>{t("home")}</Link>', 1],
  ['>Tours</Link>', '>{t("tours")}</Link>', 1],
  ['>Overview</h2>', '>{t("overview")}</h2>', 1],
  ['label="Duration" value={tour.duration}', 'label={t("duration")} value={tour.duration}', 1],
  ['label="Best For" value={tour.bestFor || "All travellers"}', 'label={t("bestFor")} value={tour.bestFor || t("allTravellers")}', 1],
  ['label="Physical Level" value={tour.physicalLevel || "Moderate"}', 'label={t("physicalLevel")} value={tour.physicalLevel || t("moderate")}', 1],
  ['label="Group Size" value={tour.groupSize || "Customisable"}', 'label={t("groupSize")} value={tour.groupSize || t("customisable")}', 1],
  ['>Detail Itinerary</h2>', '>{t("detailItinerary")}</h2>', 1],
  ['Day {String(day.day).padStart(2, "0")}', '{t("dayLabel", { n: String(day.day).padStart(2, "0") })}', 1],
  ['Overnight: {day.overnight}', '{t("overnight")}: {day.overnight}', 1],
  ['Tour Route Map', '{t("routeMap")}', 1],
  ['TourIncludes', '{t("tourIncludes")}', 1],
  ['Tour Excludes', '{t("tourExcludes")}', 1],
  ['title="Hotel Recommendation"', 'title={t("hotelRecommendation")}', 1],
  ['title="Transportation"', 'title={t("transportation")}', 1],
  ['title="Meals"', 'title={t("meals")}', 1],
  ['>Optional Experiences</h2>', '>{t("optionalExperiences")}</h2>', 1],
  ['>Frequently Asked Questions</h2>', '>{t("faq")}</h2>', 1],
  ['All Year Round', '{t("allYearRound")}', 1],
  ['>Starting From</p>', '>{t("startingFrom")}</p>', 1],
  ['Per personon double sharing basis', '{t("perPersonDouble")}', 1],
  ['>Interested?</span>', '>{t("interested")}</span>', 1],
  ['Click here to sendan inquiry', '{t("clickInquiry")}', 1],
  ['>Tour Highlights</h3>', '>{t("tourHighlights")}</h3>', 1],
  ['Start Planning Your Sri Lanka Tour', '{t("startPlanning")}', 1],
];

for (const [from, to, expected] of pairs) {
  const count = text.split(from).length - 1;
  if (count !== expected) console.log(`CHECK (found ${count}, expected ${expected}):`, from);
  text = text.split(from).join(to);
}

const re = /Please give as much information[\s\S]*?within 48 hours\./;
if (re.test(text)) text = text.replace(re, '{t("planIntro")}');
else console.log("CHECK: planIntro paragraph not found");

fs.writeFileSync(p, text.replace(/\n/g, eol), "utf8");
console.log("patched");