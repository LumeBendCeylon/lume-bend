import { routing } from "./routing";

// hreflang map for a page path, e.g. languageAlternates("/about") ->
// { en: "/en/about", de: "/de/about", ..., "x-default": "/en/about" }
export function languageAlternates(path = "") {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `/${l}${path}`;
  }
  languages["x-default"] = `/${routing.defaultLocale}${path}`;
  return languages;
}

export const OG_LOCALES: Record<string, string> = {
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
  ru: "ru_RU",
  zh: "zh_CN",
};