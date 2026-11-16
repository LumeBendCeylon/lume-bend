"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARDS = [
  { key: "adventure", img: "/documents/images/tour/IMG_2041.jpg", href: "/tours" },
  { key: "culture", img: "/documents/images/tour/IMG_2042.jpg", href: "/destinations" },
  { key: "relaxation", img: "/documents/images/tour/IMG_2043.jpg", href: "/plan" },
  { key: "beach", img: "/documents/images/tour/IMG_2044.jpg", href: "/tours" },
  { key: "nature", img: "/documents/images/tour/IMG_2045.jpg", href: "/destinations" },
  { key: "romance", img: "/documents/images/tour/IMG_2046.jpg", href: "/plan" },
  { key: "wildlife", img: "/documents/images/tour/IMG_2047.jpg", href: "/tours" },
  { key: "food", img: "/documents/images/tour/IMG_2048.jpg", href: "/tours" },
  { key: "heritage", img: "/documents/images/tour/IMG_2049.jpg", href: "/destinations" },
] as const;

export default function ExperienceCards() {
  const t = useTranslations("experiences");
  const scrollRef = useRef<HTMLDivElement>(null);

  const slide = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <section className="bg-[#C9D2CB] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl uppercase tracking-wide text-forest-dark sm:text-4xl">
            {t("title")}
          </h2>
          <div className="hidden gap-3 lg:flex">
            <button
              type="button"
              onClick={() => slide(-1)}
              aria-label="Previous"
              className="rounded-full border border-forest-dark/30 p-3 text-forest-dark transition-colors hover:bg-forest-dark hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => slide(1)}
              aria-label="Next"
              className="rounded-full border border-forest-dark/30 p-3 text-forest-dark transition-colors hover:bg-forest-dark hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CARDS.map(({ key, img, href }) => (
            <div
              key={key}
              className="w-[70%] shrink-0 snap-start sm:w-[42%] lg:w-[calc((100%-4.5rem)/4)]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={img}
                  alt={t(`${key}.title`)}
                  fill
                  sizes="(min-width: 1024px) 25vw, 70vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-center font-display text-lg uppercase tracking-[0.2em] text-forest-dark">
                {t(`${key}.title`)}
              </h3>
              <div className="mt-3 flex justify-center">
                <Link
                  href={href}
                  className="border border-forest-dark/50 px-6 py-2 text-[11px] font-medium uppercase tracking-[0.25em] text-forest-dark transition-colors hover:bg-forest-dark hover:text-white"
                >
                  {t(`${key}.cta`)}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}