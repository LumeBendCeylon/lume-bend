import { setRequestLocale, getTranslations } from "next-intl/server";
import { languageAlternates } from "@/i18n/metadata";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaTripadvisor } from "react-icons/fa";
import Motif from "@/components/Motif";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: "./", languages: languageAlternates("/contact") },
  };
}

const OTHER_PLATFORMS = [
  { Icon: FaFacebookF, label: "Facebook", href: "#" },
  { Icon: FaInstagram, label: "Instagram", href: "#" },
  { Icon: FaYoutube, label: "YouTube", href: "#" },
  { Icon: FaTiktok, label: "TikTok", href: "#" },
  { Icon: FaTripadvisor, label: "TripAdvisor", href: "https://www.tripadvisor.com/" },
];

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");
  return (
    <>
      <section className="relative flex min-h-[36vh] items-center justify-center overflow-hidden bg-forest-dark pt-28">
        <Motif motif="sun" className="absolute -right-8 -top-8 h-56 w-56 text-gold/10" strokeWidth={0.6} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-light">{t("eyebrow")}</p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">{t("title")}</h1>
          <p className="mt-4 text-white/70">{t("subtitle")}</p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-5 lg:px-10">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl text-forest-dark">{t("reachTitle")}</h2>
            <ul className="mt-6 space-y-5 text-sm text-ink/75">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <p className="font-medium text-forest-dark">{t("phone")}</p>
                  <p>+94 77 344 6017</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <p className="font-medium text-forest-dark">{t("email")}</p>
                  <p>lumebendceylon@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <p className="font-medium text-forest-dark">{t("office")}</p>
                  <p>{t("officeValue")}</p>
                </div>
              </li>
            </ul>

            <a
              href="https://wa.me/94773446017"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              <FaWhatsapp className="h-5 w-5" /> {t("whatsapp")}
            </a>

            <div className="mt-10">
              <p className="text-sm font-medium text-forest-dark">{t("otherPlatforms")}</p>
              <div className="mt-3 flex gap-3">
                {OTHER_PLATFORMS.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-full border border-forest/15 p-2.5 text-forest-dark transition-colors hover:border-gold hover:text-gold-dark"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

                        <div className="mt-10 h-56 overflow-hidden rounded-2xl bg-mist">
              <iframe
                title="Lume Bend Ceylon office location"
                src="https://www.google.com/maps?q=Matale,+Sri+Lanka&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl text-forest-dark">{t("enquiryTitle")}</h2>
            <div className="mt-6">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}