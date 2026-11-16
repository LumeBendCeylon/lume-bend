"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  { src: "/documents/images/tour/hero.jpg" },
  { src: "/documents/images/tour/hero-2.jpg" },
  { src: "/documents/images/tour/hero-3.jpg" },
  { src: "/documents/images/tour/hero-4.jpg" },
];

export default function Hero() {
  const t = useTranslations("Home.hero");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
    return () => clearTimeout(id);
  }, [current]);

  const go = (dir: 1 | -1) =>
    setCurrent((c) => (c + dir + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative w-full overflow-hidden bg-forest-dark pt-24 lg:h-[100svh] lg:min-h-[640px] lg:pt-0">
      {/* Photo: phone/tab = full-width 3:2, laptop = full-screen cover */}
      <div className="relative aspect-[3/2] w-full lg:absolute lg:inset-0 lg:aspect-auto">
        {SLIDES.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={t("imageAlt")}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover object-top transition-opacity duration-1000 lg:object-center ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Phone/tab: bottom edge fades into dark green */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-dark via-forest-dark/60 to-transparent lg:hidden" />

        {/* Laptop: gradients over the photo */}
        <div className="absolute inset-0 hidden bg-gradient-to-b from-forest-dark/40 via-transparent to-forest-dark/80 lg:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-forest-dark/60 via-transparent to-transparent lg:block" />
      </div>

      {/* Phone/tab only: mini cards, arrows, progress bar (under the photo) */}
      <div className="relative z-10 -mt-14 px-6 pb-6 lg:hidden">
        <div className="flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SLIDES.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label="Show photo"
              className={`relative h-32 w-24 shrink-0 overflow-hidden rounded-lg transition-opacity ${
                i === current ? "ring-2 ring-gold" : "opacity-70"
              }`}
            >
              <Image src={s.src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="rounded-full border border-white/60 p-2 text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="rounded-full border border-white/60 p-2 text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="h-[2px] flex-1 bg-white/30">
            <motion.div
              key={current}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-gold"
            />
          </div>
        </div>
      </div>

      {/* Text + buttons (left side) */}
      <div className="relative z-10 mx-auto mt-2 flex max-w-7xl flex-col px-6 pb-10 lg:mt-0 lg:h-full lg:items-start lg:justify-end lg:px-10 lg:pb-10">
        <div className="max-w-xl text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2.8xl text-gold-light sm:text-4xl lg:text-5xl"
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 font-display text-xl text-gold sm:text-2xl"
          >
            {t("tagline")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-md text-sm text-white/85 sm:text-base"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/plan"
              className="border border-white/80 bg-white/10 px-8 py-3.5 text-center text-xs font-medium uppercase tracking-[0.25em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-forest-dark"
            >
              {t("bookCta")}
            </Link>
            <Link
              href="/tours"
              className="border border-white/50 px-8 py-3.5 text-center text-xs font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-white hover:text-forest-dark"
            >
              {t("toursCta")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Laptop only: next-slide cards (cut at right edge), arrows, progress bar */}
      <div className="absolute bottom-10 right-0 z-20 hidden w-[640px] flex-col gap-6 lg:flex">
        <div className="flex gap-5 overflow-hidden">
          {[1, 2, 3].map((o) => {
            const idx = (current + o) % SLIDES.length;
            const s = SLIDES[idx];
            return (
              <button
                key={s.src}
                type="button"
                onClick={() => setCurrent(idx)}
                aria-label="Show photo"
                className="group relative h-72 w-60 shrink-0 overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-1"
              >
                <Image src={s.src} alt="" fill sizes="240px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4 pr-10">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="rounded-full border border-white/60 p-2 text-white transition-colors hover:bg-white hover:text-forest-dark"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="rounded-full border border-white/60 p-2 text-white transition-colors hover:bg-white hover:text-forest-dark"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="h-[2px] flex-1 bg-white/30">
            <motion.div
              key={current}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-gold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}