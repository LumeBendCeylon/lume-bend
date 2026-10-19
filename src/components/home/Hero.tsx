"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("Home.hero");

  return (
    <section className="relative w-full overflow-hidden bg-forest-dark pt-24 lg:h-screen lg:min-h-[640px] lg:pt-0">
      {/* Photo: phone/tab = full-width 3:2 (whole photo visible), laptop = full-screen cover */}
      <div className="relative aspect-[3/2] w-full lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src="/documents/images/tour/main2.png"
          alt={t("imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Phone/tab: only the very bottom edge fades into the dark green */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-dark via-forest-dark/60 to-transparent lg:hidden" />

        {/* Laptop: gradients over the full-screen photo */}
        <div className="absolute inset-0 hidden bg-gradient-to-b from-forest-dark/40 via-transparent to-forest-dark/80 lg:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-forest-dark/50 via-transparent to-transparent lg:block" />
      </div>

      {/* Content: phone/tab = slightly overlapping the photo's bottom edge, laptop = bottom-left text, bottom-right buttons */}
      <div className="relative z-10 mx-auto -mt-10 flex max-w-7xl flex-col gap-8 px-6 pb-10 lg:mt-0 lg:h-full lg:flex-row lg:items-end lg:justify-between lg:px-5 lg:pb-10">
        {/* LEFT: text */}
        <div className="max-w-2xl text-left">
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
        </div>

        {/* RIGHT: buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row"
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
    </section>
  );
}