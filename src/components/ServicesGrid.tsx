"use client";

import { motion } from "framer-motion";
import { Plane, Car, CarFront, UserCheck2, Hotel, TrainFront, Route, Camera } from "lucide-react";
import type { Service } from "@/lib/data";

const ICONS: Record<Service["icon"], typeof Plane> = {
  plane: Plane,
  car: Car,
  "car-front": CarFront,
  guide: UserCheck2,
  hotel: Hotel,
  train: TrainFront,
  route: Route,
  camera: Camera,
};

export default function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s, i) => {
        const Icon = ICONS[s.icon];
        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
            className="group rounded-2xl border border-forest/10 bg-white p-7 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/5 text-forest transition-colors group-hover:bg-gold group-hover:text-forest-dark">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg text-forest-dark">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
