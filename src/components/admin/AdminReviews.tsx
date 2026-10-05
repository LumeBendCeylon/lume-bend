"use client";

import { useEffect, useState } from "react";
import { Loader2, Trash2 } from "lucide-react";
import { getReviews, deleteReview, type Review } from "@/lib/firebase";
import StarRatingDisplay from "@/components/StarRatingDisplay";

export default function AdminReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function load() {
    setFetching(true);
    getReviews(100)
      .then(setReviews)
      .catch((err) => setError(err instanceof Error ? err.message : "Could not load reviews."))
      .finally(() => setFetching(false));
  }

  useEffect(load, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this review? This can't be undone.")) return;
    setDeletingId(id);
    try {
      await deleteReview(id);
      setReviews((r) => r.filter((rev) => rev.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Could not delete review.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div>
      <p className="text-sm text-ink/60">{reviews.length} total reviews</p>

      {fetching && (
        <div className="mt-8 flex items-center gap-2 text-sm text-ink/60">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading...
        </div>
      )}

      {error && <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

      {!fetching && !error && (
        <div className="mt-6 space-y-4">
          {reviews.map((r) => (
            <div key={r.id} className="flex items-start justify-between gap-4 rounded-2xl border border-forest/10 bg-white p-5">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-forest-dark">{r.name || "Anonymous"}</span>
                  {r.country && <span className="text-xs text-ink/50">— {r.country}</span>}
                  <StarRatingDisplay rating={r.rating} />
                </div>
                {r.tourTitle && <p className="mt-1 text-xs text-gold-dark">{r.tourTitle}</p>}
                <p className="mt-2 text-sm text-ink/75">{r.comment}</p>
                <p className="mt-2 text-xs text-ink/40">
                  {r.createdAt ? r.createdAt.toLocaleDateString() : ""}
                </p>
              </div>
              <button
                onClick={() => handleDelete(r.id)}
                disabled={deletingId === r.id}
                aria-label="Delete review"
                className="shrink-0 rounded-full border border-red-200 p-2 text-red-500 transition-colors hover:bg-red-50 disabled:opacity-50"
              >
                {deletingId === r.id ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4" />
                )}
              </button>
            </div>
          ))}
          {reviews.length === 0 && (
            <p className="py-10 text-center text-sm text-ink/50">No reviews yet.</p>
          )}
        </div>
      )}
    </div>
  );
}
