"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/SectionHeading";
import { experienceTimeline } from "@/lib/data";

type StepText = { title: string; description: string };

export default function ExperienceTimeline() {
  const t = useTranslations("Home.timeline");
  // Translated step texts keyed by step number; falls back to the English text in data.ts
  const items = t.raw("items") as Record<string, StepText>;

  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          center
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-forest/15 lg:block" />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {experienceTimeline.map((step, i) => {
              const text = items[String(step.step)];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative text-center lg:text-left"
                >
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest font-display text-lg text-gold lg:mx-0">
                    {step.step}
                  </div>
                  <h3 className="mt-4 font-display text-lg text-forest-dark">
                    {text?.title ?? step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {text?.description ?? step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}