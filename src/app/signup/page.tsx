"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { signUp } from "@/lib/firebase";

export default function SignupPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = new FormData(e.currentTarget);
    const password = String(form.get("password"));
    const confirm = String(form.get("confirmPassword"));
    if (password !== confirm) {
      setStatus("error");
      setError("Passwords do not match.");
      return;
    }
    try {
      await signUp(String(form.get("name")), String(form.get("email")), password);
      router.push("/account");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not create your account. Please try again.");
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-mist px-6 pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-2xl border border-forest/10 bg-white p-8 shadow-sm"
      >
        <p className="eyebrow text-center">Join Golden Palm Ceylon</p>
        <h1 className="mt-2 text-center font-display text-3xl text-forest-dark">Create Account</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink/80">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink/80">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-ink/80">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              className="w-full rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium text-ink/80">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              minLength={6}
              className="w-full rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
            />
          </div>

          {status === "error" && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-forest px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-light disabled:opacity-70"
          >
            {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink/60">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-gold-dark hover:text-forest-dark">
            Sign in
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
