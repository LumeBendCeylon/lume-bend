"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ShieldCheck, Gem, UserCheck, Clock3 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const REASONS = [
  { id: "bespoke", icon: Gem },
  { id: "trusted", icon: ShieldCheck },
  { id: "contact", icon: UserCheck },
  { id: "support", icon: Clock3 },
] as const;

export default function WhyChooseUs() {
  const t = useTranslations("Home.why");

  return (
    <section className="bg-forest py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          light
        />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-forest-dark text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-forest-dark">
                <r.icon className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-display text-lg text-gold-light">
                {t(`reasons.${r.id}.title`)}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/65">
                {t(`reasons.${r.id}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}