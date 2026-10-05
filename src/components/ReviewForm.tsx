"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ImagePlus, X } from "lucide-react";
import { submitReview } from "@/lib/firebase";
import StarRatingInput from "@/components/StarRatingInput";

const MAX_PHOTOS = 5;

function compressImageToBase64(file: File, maxDimension = 900, quality = 0.7): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read the photo."));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Could not load the photo."));
      img.onload = () => {
        let { width, height } = img;
        if (width > height && width > maxDimension) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else if (height > maxDimension) {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas not supported."));
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export default function ReviewForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [photoError, setPhotoError] = useState("");

  async function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    e.target.value = ""; // allow re-selecting the same file later
    if (files.length === 0) return;
    setPhotoError("");

    const room = MAX_PHOTOS - photos.length;
    if (room <= 0) {
      setPhotoError(`You can add up to ${MAX_PHOTOS} photos.`);
      return;
    }
    const toProcess = files.slice(0, room);
    if (files.length > room) {
      setPhotoError(`Only added ${room} — max ${MAX_PHOTOS} photos per review.`);
    }

    try {
      const compressed = await Promise.all(
        toProcess.map((f) => {
          if (!f.type.startsWith("image/")) throw new Error("One of the files isn't an image.");
          return compressImageToBase64(f);
        })
      );
      setPhotos((prev) => [...prev, ...compressed]);
    } catch {
      setPhotoError("Couldn't process one of those photos — try again.");
    }
  }

  function removePhoto(index: number) {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const form = new FormData(e.currentTarget);
    try {
      await submitReview({
        name: String(form.get("name") || ""),
        country: String(form.get("country") || ""),
        rating,
        tourTitle: String(form.get("tourTitle") || ""),
        comment: String(form.get("comment") || ""),
        imageUrls: photos,
      });
      setStatus("success");
      onSubmitted?.();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl bg-mist p-10 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-forest" />
        <h3 className="mt-4 font-display text-xl text-forest-dark">Thank You!</h3>
        <p className="mt-2 max-w-sm text-sm text-ink/70">
          Your review has been submitted and will appear shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-forest/10 bg-white p-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink/80">Your Name</label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="country" className="mb-1.5 block text-sm font-medium text-ink/80">Country</label>
          <input
            id="country"
            name="country"
            className="w-full rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="tourTitle" className="mb-1.5 block text-sm font-medium text-ink/80">Which tour did you take?</label>
        <input
          id="tourTitle"
          name="tourTitle"
          placeholder="e.g. The Golden Palm Grand Escape"
          className="w-full rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink/80">Your Rating</label>
        <StarRatingInput value={rating} onChange={setRating} />
      </div>

      <div>
        <label htmlFor="comment" className="mb-1.5 block text-sm font-medium text-ink/80">Your Review</label>
        <textarea
          id="comment"
          name="comment"
          required
          rows={4}
          placeholder="Tell other travellers about your experience..."
          className="w-full rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink/80">
          Add Photos (optional, up to {MAX_PHOTOS})
        </label>
        <div className="flex flex-wrap gap-3">
          {photos.map((src, i) => (
            <div key={i} className="relative">
              <img src={src} alt={`Selected ${i + 1}`} className="h-24 w-24 rounded-lg object-cover" />
              <button
                type="button"
                onClick={() => removePhoto(i)}
                className="absolute -right-2 -top-2 rounded-full bg-forest-dark p-1 text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
          {photos.length < MAX_PHOTOS && (
            <label className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-forest/20 text-ink/50 transition-colors hover:border-gold hover:text-gold-dark">
              <ImagePlus className="h-5 w-5" />
              <span className="text-[11px]">Add photo</span>
              <input type="file" accept="image/*" multiple onChange={handlePhotoChange} className="hidden" />
            </label>
          )}
        </div>
        {photoError && <p className="mt-1.5 text-xs text-red-600">{photoError}</p>}
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex items-center justify-center gap-2 rounded-full bg-forest px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-light disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        Submit Review
      </button>
    </form>
  );
}