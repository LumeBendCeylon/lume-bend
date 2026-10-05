"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitInquiry } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import { tours } from "@/lib/data";

const TOUR_TYPES = [...new Set(tours.map((t) => t.category))];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const prefillTour = searchParams.get("tour") ?? "";

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);
    try {
      await submitInquiry(
        {
          fullName: String(form.get("fullName") || ""),
          email: String(form.get("email") || ""),
          whatsapp: String(form.get("whatsapp") || ""),
          country: String(form.get("country") || ""),
          arrivalDate: String(form.get("arrivalDate") || ""),
          departureDate: String(form.get("departureDate") || ""),
          travelers: String(form.get("travelers") || ""),
          tourType: String(form.get("tourType") || ""),
          message: String(form.get("message") || ""),
        },
        user?.uid ?? null
      );
      setStatus("success");
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
        className="flex flex-col items-center justify-center rounded-2xl border border-forest/10 bg-mist p-12 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-forest" />
        <h3 className="mt-5 font-display text-2xl text-forest-dark">Enquiry Sent</h3>
        <p className="mt-2 max-w-sm text-sm text-ink/70">
          Thank you — a travel specialist will be in touch within one business day with a
          tailored proposal.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" required defaultValue={user?.displayName ?? ""} />
        <Field label="Email" name="email" type="email" required defaultValue={user?.email ?? ""} />
        <Field label="WhatsApp Number" name="whatsapp" type="tel" required />
        <Field label="Country" name="country" required />
        <Field label="Arrival Date" name="arrivalDate" type="date" required />
        <Field label="Departure Date" name="departureDate" type="date" required />
        <Field label="Number of Travelers" name="travelers" type="number" min={1} required />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink/80" htmlFor="tourType">
            Tour Type
          </label>
          <select
            id="tourType"
            name="tourType"
            defaultValue={prefillTour}
            className="w-full rounded-lg border border-forest/20 bg-white px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
          >
            <option value="">Select a tour type</option>
            {prefillTour && !TOUR_TYPES.includes(prefillTour as (typeof TOUR_TYPES)[number]) && (
              <option value={prefillTour}>{prefillTour}</option>
            )}
            {TOUR_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink/80" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about the trip you're imagining..."
          className="w-full rounded-lg border border-forest/20 bg-white px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
        />
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
        className="flex w-full items-center justify-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-forest-light disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        Send Inquiry
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  min,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink/80" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        min={min}
        defaultValue={defaultValue}
        className="w-full rounded-lg border border-forest/20 bg-white px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
      />
    </div>
  );
}
