import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for enquiries and tours booked through Golden Palm Ceylon.",
  alternates: { canonical: "/terms-conditions" },
};

const SECTIONS = [
  {
    title: "1. Enquiries and Proposals",
    body: "Submitting an enquiry through this website does not constitute a confirmed booking. A confirmed booking exists only once a written proposal has been accepted and any required deposit received, in accordance with separate booking terms provided at that stage.",
  },
  {
    title: "2. Pricing",
    body: "Prices displayed on this website are indicative starting prices per person and are subject to change based on travel dates, group size, accommodation selection and season.",
  },
  {
    title: "3. Itinerary Changes",
    body: "Itineraries may be adjusted due to weather, safety conditions, or circumstances beyond our control. We will make reasonable efforts to notify you of material changes in advance.",
  },
  {
    title: "4. Cancellations",
    body: "Cancellation terms will be provided in writing at the time of booking confirmation and vary by tour, season and supplier policies.",
  },
  {
    title: "5. Traveller Responsibilities",
    body: "Travellers are responsible for ensuring valid passports, visas, travel insurance and any required vaccinations for entry into Sri Lanka.",
  },
  {
    title: "6. Limitation of Liability",
    body: "Golden Palm Ceylon acts as an intermediary between travellers and third-party suppliers (hotels, transport providers, guides) and is not liable for acts or omissions of those independent suppliers.",
  },
  {
    title: "7. Governing Law",
    body: "These terms are governed by the laws of Sri Lanka.",
  },
];

export default function TermsConditionsPage() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-4xl text-forest-dark">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-ink/60">Last updated: July 2026</p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl text-forest-dark">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
