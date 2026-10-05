"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { getAllInquiries, type Inquiry } from "@/lib/firebase";

export default function AdminEnquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllInquiries()
      .then(setInquiries)
      .catch((err) => setError(err instanceof Error ? err.message : "Could not load enquiries."))
      .finally(() => setFetching(false));
  }, []);

  return (
    <div>
      <p className="text-sm text-ink/60">{inquiries.length} total enquiries</p>

      {fetching && (
        <div className="mt-8 flex items-center gap-2 text-sm text-ink/60">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading...
        </div>
      )}

      {error && <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

      {!fetching && !error && (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-forest/10 bg-white">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="border-b border-forest/10 bg-forest/5 text-xs uppercase tracking-wide text-ink/60">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">WhatsApp</th>
                <th className="px-4 py-3">Country</th>
                <th className="px-4 py-3">Dates</th>
                <th className="px-4 py-3">Travellers</th>
                <th className="px-4 py-3">Tour Type</th>
                <th className="px-4 py-3">Submitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-forest/10">
              {inquiries.map((inq) => (
                <tr key={inq.id} className="align-top">
                  <td className="px-4 py-3 font-medium text-forest-dark">{inq.fullName}</td>
                  <td className="px-4 py-3 text-ink/70">{inq.email}</td>
                  <td className="px-4 py-3 text-ink/70">{inq.whatsapp}</td>
                  <td className="px-4 py-3 text-ink/70">{inq.country}</td>
                  <td className="px-4 py-3 text-ink/70">
                    {inq.arrivalDate} → {inq.departureDate}
                  </td>
                  <td className="px-4 py-3 text-ink/70">{inq.travelers}</td>
                  <td className="px-4 py-3 text-ink/70">{inq.tourType}</td>
                  <td className="px-4 py-3 text-ink/50">
                    {inq.createdAt ? inq.createdAt.toLocaleDateString() : "—"}
                  </td>
                </tr>
              ))}
              {inquiries.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-ink/50">
                    No enquiries yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
