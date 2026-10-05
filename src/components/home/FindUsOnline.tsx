import { FaTripadvisor } from "react-icons/fa";
import { Star } from "lucide-react";

export default function FindUsOnline() {
  return (
    <section className="bg-mist py-16">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="eyebrow">Trusted By Travellers</p>
        <h2 className="mt-3 font-display text-2xl text-forest-dark sm:text-3xl">
          Find Us on TripAdvisor
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-ink/70">
          Read independent traveller reviews of Golden Palm Ceylon, or leave your own after your trip.
        </p>
        <a
          href="https://www.tripadvisor.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-3 rounded-full border border-forest/15 bg-white px-7 py-3.5 text-sm font-medium text-forest-dark shadow-sm transition-transform hover:scale-105 hover:border-gold"
        >
          <FaTripadvisor className="h-6 w-6 text-[#34e0a1]" />
          View Our TripAdvisor Profile
          <span className="flex items-center gap-0.5 text-gold">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} className="h-3.5 w-3.5 fill-gold" />
            ))}
          </span>
        </a>
      </div>
    </section>
  );
}
