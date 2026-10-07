import type { MetadataRoute } from "next";
import { destinations, tours } from "@/lib/data";

const siteUrl = "https://www.lumebendceylon.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
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
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${siteUrl}/destinations/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const tourRoutes = tours
    .filter((t) => t.itinerary && t.itinerary.length > 0)
    .map((t) => ({
      url: `${siteUrl}/tours/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...destinationRoutes, ...tourRoutes];
}
