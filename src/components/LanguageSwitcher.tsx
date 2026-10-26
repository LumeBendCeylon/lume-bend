"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const NAMES: Record<string, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  ru: "Русский",
  zh: "中文",
};

const SHORT: Record<string, string> = {
  en: "EN",
  de: "DE",
  fr: "FR",
  ru: "RU",
  zh: "中文",
};

export default function LanguageSwitcher({
  solid = true,
  dark = false,
  compact = false,
}: {
  solid?: boolean;
  dark?: boolean;
  compact?: boolean;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const colors = dark
    ? "border-white/40 text-white"
    : solid
      ? "border-forest/20 text-forest-dark"
      : "border-white/40 text-white";

  return (
    <select
      aria-label="Language"
      value={locale}
      onChange={(e) =>
        router.replace(pathname, {
          locale: e.target.value as (typeof routing.locales)[number],
        })
      }
      className={`cursor-pointer rounded-full border bg-transparent font-medium focus:outline-none [&>option]:text-ink ${
        compact ? "px-2 py-1.5 text-xs" : "px-3 py-2 text-sm"
      } ${colors}`}
    >
      {routing.locales.map((l) => (
        <option key={l} value={l}>
          {compact ? SHORT[l] ?? l : NAMES[l] ?? l}
        </option>
      ))}
    </select>
  );
}