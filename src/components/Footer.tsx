"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");
  const year = new Date().getFullYear();

  const quickLinks: [string, string][] = [
    [nav("home"), "/"],
    [nav("about"), "/about"],
    [nav("tours"), "/tours"],
    [nav("destinations"), "/destinations"],
    [nav("gallery"), "/gallery"],
    [nav("contact"), "/contact"],
  ];

  const serviceLabels = [
    t("svc1"),
    t("svc2"),
    t("svc3"),
    t("svc4"),
    t("svc5"),
    t("svc6"),
  ];

  return (
    <footer className="relative overflow-hidden bg-forest-dark text-white">
      {/* Background image */}
      <Image
        src="/documents/images/tour/footer.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      {/* Dark overlay so text stays readable */}
      <div className=" absolute inset-0 bg-gradient-to-t from-forest-dark/10 via-forest-dark/20 to-forest-dark/5" />
      {/* All footer content sits above the image */}
      <div className="relative z-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <Link href="/" className="font-display text-2xl">
              Lume Bend <span className="text-gold">Ceylon</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {t("tagline")}
            </p>
            <div className="mt-6 flex gap-4">
              {[
                { Icon: FaFacebookF, label: "Facebook" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaYoutube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="rounded-full border border-white/20 p-2 text-white/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href="#"
                aria-label="TikTok"
                className="rounded-full border border-white/20 p-2 text-white/80 transition-colors hover:border-gold hover:text-gold"
              >
                <FaTiktok className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-gold-light">{t("quickLinks")}</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-gold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold-light">{t("servicesTitle")}</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {serviceLabels.map((label) => (
                <li key={label}>
                  <Link href="/services" className="transition-colors hover:text-gold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold-light">{t("stayInspired")}</h3>
            <p className="mt-5 text-sm text-white/75">{t("newsletter")}</p>
            <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder={t("emailPlaceholder")}
                className="w-full rounded-l-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r-full bg-gold px-5 py-2.5 text-sm font-medium text-forest-dark transition-colors hover:bg-gold-light"
              >
                {t("join")}
              </button>
            </form>

            <ul className="mt-6 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" /> +94 77 344 6017
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" /> lumebendceylon@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" /> matale, Sri Lanka
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/60 sm:flex-row lg:px-10">
            <p>
              © {year} Lume Bend Ceylon. {t("rights")}
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-gold">
                {t("privacy")}
              </Link>
              <Link href="/terms-conditions" className="hover:text-gold">
                {t("terms")}
              </Link>
              <Link href="/photo-credits" className="hover:text-gold">
                {t("photoCredits")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}