import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Golden Palm Ceylon collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you submit an enquiry, we collect the details you provide — including your name, email address, WhatsApp number, country, travel dates, group size and message content.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information you provide to respond to enquiries, prepare tailored travel proposals, and, where you've opted in, send occasional updates about our tours.",
  },
  {
    title: "3. Data Storage",
    body: "Enquiry details are securely stored using Firebase Firestore, a Google Cloud service. We retain enquiry data only for as long as necessary to respond to your request and maintain records.",
  },
  {
    title: "4. Sharing of Information",
    body: "We do not sell or rent your personal information. Details may be shared with trusted partners — such as hotels or transport providers — strictly to fulfil a confirmed booking.",
  },
  {
    title: "5. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting hello@goldenpalmceylon.com.",
  },
  {
    title: "6. Cookies",
    body: "Our website may use essential cookies to support basic functionality. We do not currently use third-party advertising cookies.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this policy from time to time. The latest version will always be posted on this page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-4xl text-forest-dark">Privacy Policy</h1>
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
