"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { submitInquiry } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import { tours } from "@/lib/data";

const TOUR_TYPES = [...new Set(tours.map((t) => t.category))];
const STEPS = ["Intro", "About You", "Preference", "Summary"] as const;

type FormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  tourType: string;
  arrivalDate: string;
  departureDate: string;
  travelers: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  country: "",
  tourType: "",
  arrivalDate: "",
  departureDate: "",
  travelers: "2",
  message: "",
};

export default function PlanWizard() {
  const router = useRouter();
  const { user } = useAuth();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>({
    ...initialState,
    fullName: user?.displayName ?? "",
    email: user?.email ?? "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function next() {
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleFinalSubmit() {
    setStatus("submitting");
    setErrorMsg("");
    try {
      await submitInquiry(
        {
          fullName: data.fullName,
          email: data.email,
          whatsapp: data.whatsapp,
          country: data.country,
          arrivalDate: data.arrivalDate,
          departureDate: data.departureDate,
          travelers: data.travelers,
          tourType: data.tourType,
          message: data.message,
        },
        user?.uid ?? null
      );
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const aboutYouValid = data.fullName.trim() !== "" && data.email.trim() !== "";

  if (status === "success") {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center rounded-2xl border border-forest/10 bg-white p-12 text-center">
        <CheckCircle2 className="h-14 w-14 text-forest" />
        <h2 className="mt-5 font-display text-2xl text-forest-dark">Your Plan Request Is In!</h2>
        <p className="mt-2 text-sm text-ink/70">
          Thank you, {data.fullName || "traveller"} — a specialist will follow up with a tailored
          proposal, usually within one business day.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-6 rounded-full bg-forest px-8 py-3 text-sm font-medium text-white hover:bg-forest-light"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Step indicator */}
      <div className="mb-10 flex items-center justify-between">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium ${
                  i < step
                    ? "bg-forest text-white"
                    : i === step
                    ? "bg-gold text-forest-dark"
                    : "bg-mist text-ink/40"
                }`}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span className={`mt-1.5 text-xs ${i === step ? "text-forest-dark font-medium" : "text-ink/40"}`}>
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`mx-2 h-px flex-1 ${i < step ? "bg-forest" : "bg-forest/10"}`} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-forest/10 bg-white p-8"
        >
          {step === 0 && (
            <div className="text-center">
              <h2 className="font-display text-2xl text-forest-dark">Let's Get Started</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                This will only take a couple of minutes. We'll ask a little about you, then your
                travel preferences, and finally show you a summary to confirm before sending.
              </p>
              <button
                onClick={next}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3 text-sm font-medium text-white hover:bg-forest-light"
              >
                Let's Begin <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="font-display text-2xl text-forest-dark">About You</h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full Name" value={data.fullName} onChange={(v) => update("fullName", v)} required />
                <Field label="Email" type="email" value={data.email} onChange={(v) => update("email", v)} required />
                <Field label="WhatsApp Number" type="tel" value={data.whatsapp} onChange={(v) => update("whatsapp", v)} />
                <Field label="Country" value={data.country} onChange={(v) => update("country", v)} />
              </div>
              <StepNav onBack={back} onNext={next} nextDisabled={!aboutYouValid} />
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="font-display text-2xl text-forest-dark">Your Preferences</h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink/80">Tour Type</label>
                  <select
                    value={data.tourType}
                    onChange={(e) => update("tourType", e.target.value)}
                    className="w-full rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
                  >
                    <option value="">Select a tour type</option>
                    {TOUR_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <Field label="Number of Travelers" type="number" value={data.travelers} onChange={(v) => update("travelers", v)} min={1} />
                <Field label="Arrival Date" type="date" value={data.arrivalDate} onChange={(v) => update("arrivalDate", v)} />
                <Field label="Departure Date" type="date" value={data.departureDate} onChange={(v) => update("departureDate", v)} />
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-medium text-ink/80">
                  Tell us about the trip you're imagining
                </label>
                <textarea
                  value={data.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={4}
                  placeholder="Interests, pace, special occasions, must-see places..."
                  className="w-full rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
                />
              </div>
              <StepNav onBack={back} onNext={next} />
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="font-display text-2xl text-forest-dark">Review Your Request</h2>
              <dl className="mt-6 divide-y divide-forest/10 text-sm">
                <SummaryRow label="Name" value={data.fullName} />
                <SummaryRow label="Email" value={data.email} />
                <SummaryRow label="WhatsApp" value={data.whatsapp} />
                <SummaryRow label="Country" value={data.country} />
                <SummaryRow label="Tour Type" value={data.tourType} />
                <SummaryRow label="Travelers" value={data.travelers} />
                <SummaryRow label="Arrival" value={data.arrivalDate} />
                <SummaryRow label="Departure" value={data.departureDate} />
                <SummaryRow label="Message" value={data.message} />
              </dl>

              <AnimatePresence>
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    {errorMsg}
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={back}
                  className="flex items-center gap-1 text-sm font-medium text-ink/60 hover:text-forest-dark"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <button
                  onClick={handleFinalSubmit}
                  disabled={status === "submitting"}
                  className="flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-medium text-forest-dark hover:bg-gold-light disabled:opacity-70"
                >
                  {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
                  Send My Request
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function StepNav({
  onBack,
  onNext,
  nextDisabled = false,
}: {
  onBack: () => void;
  onNext: () => void;
  nextDisabled?: boolean;
}) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <button onClick={onBack} className="flex items-center gap-1 text-sm font-medium text-ink/60 hover:text-forest-dark">
        <ArrowLeft className="h-4 w-4" /> Back
      </button>
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className="flex items-center gap-2 rounded-full bg-forest px-8 py-3 text-sm font-medium text-white hover:bg-forest-light disabled:opacity-50"
      >
        Next <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  min,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  min?: number;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink/80">
        {label}
        {required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
      />
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex justify-between gap-4 py-2.5">
      <dt className="text-ink/50">{label}</dt>
      <dd className="text-right font-medium text-forest-dark">{value}</dd>
    </div>
  );
}
