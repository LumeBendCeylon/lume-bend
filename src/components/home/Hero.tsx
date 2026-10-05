 "use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Motif from "@/components/Motif";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden bg-forest-dark">

      {/* =========================================================
          HERO BACKGROUND IMAGE
          Change only this image path if needed
      ========================================================== */}
      <div className="absolute inset-0">

        {/* Main Hero Image */}
        <img
          src="/documents/images/tour/main2.png"
          alt="Sri Lanka luxury travel landscape"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Very light overlay - keeps image bright */}
        <div className="absolute inset-0 bg-forest-dark/5" />

        {/* Soft cinematic gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/25 via-transparent to-forest-dark/30" />

        {/* Very subtle gold texture */}
        <div
          className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,#D4AF37_1px,transparent_1px)] [background-size:26px_26px]"
        />

        

        {/* Very soft bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest-dark/55 to-transparent" />

      </div>


      {/* =========================================================
          HERO CONTENT
      ========================================================== */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        {/* Sinhala Welcome */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.05,
          }}
        className="font-display text-2xl text-gold-light/181"
        >
          ආයුබෝවන්!
        </motion.p>


        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
          }}
          className="eyebrow text-base font-bold text-gold-light/50"
        >
          Private Luxury Travel · Sri Lanka
        </motion.p>


        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="mt-6 font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          The Island,{" "}
          <span className="text-gold">
            Uninterrupted
          </span>
        </motion.h1>


        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="mx-auto mt-6 max-w-xl text-base text-white/85 sm:text-lg"
        >
          Bespoke journeys through Sri Lanka’s ancient cities, misty tea hills, untamed wilderness and sun-kissed shores — crafted entirely around you
        </motion.p>


        {/* =========================================================
            BUTTONS
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.45,
          }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >

          {/* Book Your Journey */}
          <Link
            href="/plan"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-forest-dark shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gold-light"
          >
            Book Your Journey
          </Link>


          {/* Explore Tours */}
          <Link
            href="/tours"
            className="rounded-full border border-white/50 bg-black/10 px-8 py-3.5 text-sm font-medium tracking-wide text-white backdrop-blur-[2px] transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
          >
            Explore Tours
          </Link>

        </motion.div>

      </div>


      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: {
            delay: 1,
            duration: 0.6,
          },
          y: {
            repeat: Infinity,
            duration: 1.8,
          },
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80"
      >
        <ChevronDown className="h-7 w-7" />
      </motion.div>

    </section>
  );
}