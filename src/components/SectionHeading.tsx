"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <p className="eyebrow">{eyebrow}</p>
      <div className={`gold-rule mt-3 ${center ? "mx-auto" : ""}`} />
      <h2
        className={`mt-4 font-display text-3xl sm:text-4xl ${light ? "text-white" : "text-forest-dark"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/75" : "text-ink/70"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
