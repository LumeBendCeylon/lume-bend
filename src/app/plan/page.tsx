import type { Metadata } from "next";
import Link from "next/link";
import { Compass, MessageSquareText, Sparkles } from "lucide-react";
import Motif from "@/components/Motif";

export const metadata: Metadata = {
  title: "Plan Your Journey",
  description: "Start planning your tailor-made Sri Lanka journey with Golden Palm Ceylon.",
  alternates: { canonical: "/plan" },
};

export default function PlanLandingPage() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-forest-dark px-6 pt-28 text-center">
      <Motif motif="rock" className="absolute -bottom-10 left-1/2 h-[46vh] w-[130vw] -translate-x-1/2 text-gold/10" strokeWidth={0.6} />

      <div className="relative mx-auto max-w-2xl">
        <p className="eyebrow text-gold-light">Let's Begin</p>
        <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">
          Let's Plan Your Sri Lanka Journey
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-white/70">
          A few quick questions about you and your travel preferences — then our team will design
          a tailored itinerary and send you a proposal, usually within one business day.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          {[
            { icon: MessageSquareText, text: "Tell us a little about yourself" },
            { icon: Sparkles, text: "Share your travel preferences" },
            { icon: Compass, text: "Review and send your request" },
          ].map((s) => (
            <div key={s.text} className="rounded-2xl border border-white/10 p-5 text-white/75">
              <s.icon className="h-6 w-6 text-gold" />
              <p className="mt-3 text-sm">{s.text}</p>
            </div>
          ))}
        </div>

        <Link
          href="/plan/start"
          className="mt-10 inline-block rounded-full bg-gold px-10 py-4 text-sm font-medium tracking-wide text-forest-dark transition-transform hover:scale-105 hover:bg-gold-light"
        >
          Let's Start Planning
        </Link>
      </div>
    </section>
  );
}
