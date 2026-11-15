"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

export default function StarRatingInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const t = useTranslations("ReviewsPage.stars");
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(n)}
          aria-label={t("label", { n })}
          className="p-0.5"
        >
          <Star
            className={`h-6 w-6 transition-colors ${
              (hover || value) >= n ? "fill-gold text-gold" : "text-ink/20"
            }`}
          />
        </button>
      ))}
    </div>
  );
}