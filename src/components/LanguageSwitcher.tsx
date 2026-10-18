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

export default function LanguageSwitcher({ solid = true }: { solid?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <select
      aria-label="Language"
      value={locale}
      onChange={(e) =>
        router.replace(pathname, {
          locale: e.target.value as (typeof routing.locales)[number],
        })
      }
      className={`cursor-pointer rounded-full border bg-transparent px-3 py-2 text-sm font-medium focus:outline-none [&>option]:text-ink ${
        solid
          ? "border-forest/20 text-forest-dark"
          : "border-white/40 text-white"
      }`}
    >
      {routing.locales.map((l) => (
        <option key={l} value={l}>
          {NAMES[l] ?? l}
        </option>
      ))}
    </select>
  );
}