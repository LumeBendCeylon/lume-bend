"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Gem, UserCheck, Clock3 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const REASONS = [
  {
    icon: Gem,
    title: "Genuinely Bespoke",
    description: "No fixed packages. Every itinerary is built from a blank page around your interests.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted On the Ground",
    description: "A locally based team with long-standing relationships across every region we visit.",
  },
  {
    icon: UserCheck,
    title: "One Point of Contact",
    description: "A dedicated specialist manages your journey from first enquiry to your flight home.",
  },
  {
    icon: Clock3,
    title: "24/7 In-Country Support",
    description: "Real assistance during your trip, not just before it, day or night.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-forest py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Lume Bend Ceylon"
          title="Reasons For Choosing Us"
          description="We design a small number of journeys exceptionally well, rather than many journeys adequately."
          light
        />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-forest-dark text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-forest-dark">
                <r.icon className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-display text-lg text-gold-light">{r.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/65">
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}