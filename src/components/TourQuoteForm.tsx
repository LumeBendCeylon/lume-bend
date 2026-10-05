"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitInquiry } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export default function TourQuoteForm({ tourTitle }: { tourTitle: string }) {
  const { user } = useAuth();
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
          whatsapp: String(form.get("contactNumber") || ""),
          country: "",
          arrivalDate: String(form.get("startDate") || ""),
          departureDate: "",
          travelers: String(Number(form.get("adults") || 0) + Number(form.get("children") || 0)) || "",
          tourType: tourTitle,
          message: String(form.get("message") || ""),
          pickupLocation: String(form.get("pickupLocation") || ""),
          nationality: String(form.get("nationality") || ""),
          adults: String(form.get("adults") || ""),
          children: String(form.get("children") || ""),
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
        className="flex flex-col items-center justify-center rounded-2xl bg-white/10 p-12 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-gold" />
        <h3 className="mt-5 font-display text-2xl text-white">Request Sent</h3>
        <p className="mt-2 max-w-sm text-sm text-white/70">
          Thank you — our team will send you the best quote within 48 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <QField label="Your Name" name="fullName" required defaultValue={user?.displayName ?? ""} />
        <QField label="Tour Start Date" name="startDate" type="date" />
        <QField label="Pickup Location" name="pickupLocation" placeholder="e.g. Airport, Colombo hotel..." />
        <QField label="Your Email Address" name="email" type="email" required defaultValue={user?.email ?? ""} />
        <QField label="Contact Number" name="contactNumber" type="tel" />
        <QField label="Nationality" name="nationality" />
        <QField label="Adults" name="adults" type="number" min={1} required defaultValue="2" />
        <QField label="Children" name="children" type="number" min={0} defaultValue="0" />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-white/80" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us more about what you're looking for..."
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
        />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-200"
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-forest-dark transition-colors hover:bg-gold-light disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        Send My Request
      </button>
    </form>
  );
}

function QField({
  label,
  name,
  type = "text",
  required = false,
  min,
  defaultValue,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
  defaultValue?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-white/80" htmlFor={name}>
        {label}
        {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        min={min}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
