"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ShieldAlert, MessageSquare, Star, Images, MapPinned } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import AdminEnquiries from "@/components/admin/AdminEnquiries";
import AdminReviews from "@/components/admin/AdminReviews";
import AdminGallery from "@/components/admin/AdminGallery";
import AdminTours from "@/components/admin/AdminTours";

const TABS = [
  { key: "enquiries", label: "Enquiries", icon: MessageSquare },
  { key: "reviews", label: "Reviews", icon: Star },
  { key: "gallery", label: "Gallery", icon: Images },
  { key: "tours", label: "Tours", icon: MapPinned },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function AdminPage() {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();
  const [tab, setTab] = useState<TabKey>("enquiries");

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-28">
        <Loader2 className="h-6 w-6 animate-spin text-forest" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 px-6 pt-28 text-center">
        <ShieldAlert className="h-10 w-10 text-gold" />
        <h1 className="font-display text-2xl text-forest-dark">Admin Access Only</h1>
        <p className="max-w-sm text-sm text-ink/60">
          This account isn&apos;t on the admin list. Add your email to
          NEXT_PUBLIC_ADMIN_EMAILS in .env.local, and add your Firebase Auth UID
          to the &quot;admins&quot; Firestore collection, to get access.
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-mist px-6 pt-28 pb-20">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Admin</p>
        <h1 className="mt-2 font-display text-3xl text-forest-dark">Dashboard</h1>

        <div className="mt-8 flex flex-wrap gap-2 border-b border-forest/10 pb-1">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 rounded-t-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                tab === t.key
                  ? "bg-white text-forest-dark shadow-sm"
                  : "text-ink/50 hover:text-forest-dark"
              }`}
            >
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {tab === "enquiries" && <AdminEnquiries />}
          {tab === "reviews" && <AdminReviews />}
          {tab === "gallery" && <AdminGallery />}
          {tab === "tours" && <AdminTours />}
        </div>
      </div>
    </section>
  );
}
