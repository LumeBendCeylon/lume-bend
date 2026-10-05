"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut, Loader2, Inbox } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { getInquiriesByEmail, signOutUser, type Inquiry } from "@/lib/firebase";

export default function AccountPage() {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  useEffect(() => {
    if (!user?.email) return;
    getInquiriesByEmail(user.email)
      .then(setInquiries)
      .catch((err) => setError(err instanceof Error ? err.message : "Could not load your enquiries."))
      .finally(() => setFetching(false));
  }, [user]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-28">
        <Loader2 className="h-6 w-6 animate-spin text-forest" />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-mist px-6 pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow">My Account</p>
            <h1 className="mt-2 font-display text-3xl text-forest-dark">
              Welcome, {user.displayName || user.email}
            </h1>
          </div>
          <div className="flex gap-3">
            {isAdmin && (
              <Link
                href="/admin"
                className="rounded-full border border-forest px-5 py-2.5 text-sm font-medium text-forest-dark hover:bg-forest hover:text-white"
              >
                Admin Dashboard
              </Link>
            )}
            <button
              onClick={async () => {
                await signOutUser();
                router.push("/");
              }}
              className="flex items-center gap-2 rounded-full border border-forest/20 px-5 py-2.5 text-sm font-medium text-ink/70 hover:border-red-400 hover:text-red-600"
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-forest/10 bg-white p-6">
          <h2 className="font-display text-xl text-forest-dark">My Enquiries</h2>

          {fetching && (
            <div className="mt-6 flex items-center gap-2 text-sm text-ink/60">
              <Loader2 className="h-4 w-4 animate-spin" /> Loading your enquiries...
            </div>
          )}

          {error && <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

          {!fetching && !error && inquiries.length === 0 && (
            <div className="mt-8 flex flex-col items-center py-10 text-center">
              <Inbox className="h-10 w-10 text-forest/30" />
              <p className="mt-3 text-sm text-ink/60">You haven&apos;t submitted an enquiry yet.</p>
              <Link
                href="/contact"
                className="mt-4 rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-forest-dark hover:bg-gold-light"
              >
                Start an Enquiry
              </Link>
            </div>
          )}

          <div className="mt-6 space-y-4">
            {inquiries.map((inq) => (
              <div key={inq.id} className="rounded-xl border border-forest/10 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium text-forest-dark">{inq.tourType || "General Enquiry"}</span>
                  <span className="text-xs text-ink/50">
                    {inq.createdAt ? inq.createdAt.toLocaleDateString() : ""}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink/70">
                  {inq.arrivalDate} → {inq.departureDate} · {inq.travelers} traveller(s)
                </p>
                {inq.message && <p className="mt-2 text-sm text-ink/60">{inq.message}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
