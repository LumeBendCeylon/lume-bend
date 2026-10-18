import type { MetadataRoute } from "next";
import { destinations, tours } from "@/lib/data";
import { routing } from "@/i18n/routing";

const siteUrl = "https://www.lumebendceylon.com";

// One sitemap entry per page, with every language version listed as an alternate.
function entry(
  path: string,
  priority: number
): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = `${siteUrl}/${locale}${path}`;
  }
  languages["x-default"] = `${siteUrl}/${routing.defaultLocale}${path}`;

  return {
    url: `${siteUrl}/${routing.defaultLocale}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/tours",
    "/destinations",
    "/services",
    "/gallery",
    "/reviews",
    "/sustainability",
    "/plan",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
  ];

  const staticRoutes = staticPaths.map((path) =>
    entry(path, path === "" ? 1 : 0.7)
  );

  const destinationRoutes = destinations.map((d) =>
    entry(`/destinations/${d.slug}`, 0.6)
  );

  const tourRoutes = tours
    .filter((t) => t.itinerary && t.itinerary.length > 0)
    .map((t) => entry(`/tours/${t.slug}`, 0.7));

  return [...staticRoutes, ...destinationRoutes, ...tourRoutes];
}