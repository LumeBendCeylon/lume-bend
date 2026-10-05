import Link from "next/link";
import Motif from "@/components/Motif";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-forest py-20">
      <Motif motif="wave" className="absolute -bottom-10 left-0 h-40 w-full text-gold/10" strokeWidth={0.6} />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Ready to Design Your Sri Lanka?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Tell us your dates and interests — a specialist will reply with a tailored itinerary,
          usually within one business day.
        </p>
        <Link
          href="/plan"
          className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-forest-dark transition-transform hover:scale-105 hover:bg-gold-light"
        >
          Start Your Enquiry
        </Link>
      </div>
    </section>
  );
}
