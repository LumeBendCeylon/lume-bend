import { Star } from "lucide-react";

export default function StarRatingDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`h-4 w-4 ${rating >= n ? "fill-gold text-gold" : "text-ink/15"}`}
        />
      ))}
    </div>
  );
}
