"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs as defaultFaqs } from "@/lib/data";

export default function FAQAccordion({
  overrideFaqs,
}: {
  overrideFaqs?: { q: string; a: string }[];
}) {
  const faqs = overrideFaqs ?? defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-forest/10 border-y border-forest/10">
      {faqs.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-lg text-forest-dark">{item.q}</span>
              <Plus
                className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                  open ? "rotate-45" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-sm leading-relaxed text-ink/70">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
