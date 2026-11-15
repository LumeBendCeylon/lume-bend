"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { LogOut, Loader2, Inbox } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { getInquiriesByEmail, signOutUser, type Inquiry } from "@/lib/firebase";

export default function AccountPage() {
  const t = useTranslations("AuthPages.account");
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
      .catch((err) => {
        console.error(err);
        setError(t("errorLoad"));
      })
      .finally(() => setFetching(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <p className="eyebrow">{t("eyebrow")}</p>
            <h1 className="mt-2 font-display text-3xl text-forest-dark">
              {t("welcome", { name: user.displayName || user.email || "" })}
            </h1>
          </div>
          <div className="flex gap-3">
            {isAdmin && (
              <Link
                href="/admin"
                className="rounded-full border border-forest px-5 py-2.5 text-sm font-medium text-forest-dark hover:bg-forest hover:text-white"
              >
                {t("adminDashboard")}
              </Link>
            )}
            <button
              onClick={async () => {
                await signOutUser();
                router.push("/");
              }}
              className="flex items-center gap-2 rounded-full border border-forest/20 px-5 py-2.5 text-sm font-medium text-ink/70 hover:border-red-400 hover:text-red-600"
            >
              <LogOut className="h-4 w-4" /> {t("signOut")}
            </button>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-forest/10 bg-white p-6">
          <h2 className="font-display text-xl text-forest-dark">{t("myEnquiries")}</h2>

          {fetching && (
            <div className="mt-6 flex items-center gap-2 text-sm text-ink/60">
              <Loader2 className="h-4 w-4 animate-spin" /> {t("loading")}
            </div>
          )}

          {error && <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

          {!fetching && !error && inquiries.length === 0 && (
            <div className="mt-8 flex flex-col items-center py-10 text-center">
              <Inbox className="h-10 w-10 text-forest/30" />
              <p className="mt-3 text-sm text-ink/60">{t("empty")}</p>
              <Link
                href="/contact"
                className="mt-4 rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-forest-dark hover:bg-gold-light"
              >
                {t("startEnquiry")}
              </Link>
            </div>
          )}

          <div className="mt-6 space-y-4">
            {inquiries.map((inq) => (
              <div key={inq.id} className="rounded-xl border border-forest/10 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium text-forest-dark">{inq.tourType || t("generalEnquiry")}</span>
                  <span className="text-xs text-ink/50">
                    {inq.createdAt ? inq.createdAt.toLocaleDateString() : ""}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink/70">
                  {inq.arrivalDate} → {inq.departureDate} · {t("travellers", { count: Number(inq.travelers) || 0 })}
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