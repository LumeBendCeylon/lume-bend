"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { experienceTimeline } from "@/lib/data";

export default function ExperienceTimeline() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Travel Experience, Step by Step"
          description="A straightforward path from first message to the moment you land back home."
          center
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-forest/15 lg:block" />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {experienceTimeline.map((step, i) => (
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
                <h3 className="mt-4 font-display text-lg text-forest-dark">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
