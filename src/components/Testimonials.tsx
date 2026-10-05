import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ReviewsList from "@/components/ReviewsList";

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Traveller Stories" title="What Our Guests Say" />
          <Link
            href="/reviews"
            className="flex items-center gap-1 text-sm font-medium text-forest-dark hover:text-gold-dark"
          >
            Read all reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14">
          <ReviewsList max={4} />
        </div>
      </div>
    </section>
  );
}
