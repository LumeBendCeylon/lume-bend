import type { Metadata } from "next";
import Motif from "@/components/Motif";
import PlanWizard from "@/components/PlanWizard";

export const metadata: Metadata = {
  title: "Start Planning",
  description: "Answer a few questions about you and your travel preferences to start planning your Sri Lanka journey.",
  alternates: { canonical: "/plan/start" },
};

export default function PlanStartPage() {
  return (
    <section className="relative min-h-screen bg-mist px-6 pb-20 pt-32">
      <Motif motif="leaf" className="pointer-events-none absolute -right-10 top-24 h-56 w-56 text-forest/5" strokeWidth={0.6} />
      <PlanWizard />
    </section>
  );
}
