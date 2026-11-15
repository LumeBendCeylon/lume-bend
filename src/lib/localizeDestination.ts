import type { Destination } from "@/lib/data";
import de from "../../messages/destinations/de.json";
import fr from "../../messages/destinations/fr.json";
import ru from "../../messages/destinations/ru.json";
import zh from "../../messages/destinations/zh.json";

type Tr = {
  name?: string;
  region?: string;
  description?: string;
  highlightCards?: string[];
  articleSections?: { title?: string; description?: string }[];
  thingsToDo?: { title?: string; description?: string }[];
};

const dictionaries: Record<string, Record<string, Tr>> = {
  de: de as unknown as Record<string, Tr>,
  fr: fr as unknown as Record<string, Tr>,
  ru: ru as unknown as Record<string, Tr>,
  zh: zh as unknown as Record<string, Tr>,
};

export function localizeDestination(d: Destination, locale: string): Destination {
  const tr = dictionaries[locale]?.[d.slug];
  if (!tr) return d; // en, or not translated yet -> English fallback

  return {
    ...d,
    name: tr.name || d.name,
    region: tr.region || d.region,
    description: tr.description || d.description,
    highlightCards: d.highlightCards?.map((c, i) => ({
      ...c,
      title: tr.highlightCards?.[i] || c.title,
    })),
    articleSections: d.articleSections?.map((s, i) => ({
      ...s,
      title: tr.articleSections?.[i]?.title || s.title,
      description: tr.articleSections?.[i]?.description || s.description,
    })),
    thingsToDo: d.thingsToDo?.map((s, i) => ({
      ...s,
      title: tr.thingsToDo?.[i]?.title || s.title,
      description: tr.thingsToDo?.[i]?.description || s.description,
    })),
  };
}