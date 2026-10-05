"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { services } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Link href="/" className="font-display text-2xl">
            Lume Bend <span className="text-gold">Ceylon</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Bespoke, private-guided journeys across Sri Lanka — crafted for travellers who
            expect every detail to be considered.
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
          <h3 className="eyebrow text-gold-light">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Tours", "/tours"],
              ["Destinations", "/destinations"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold-light">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <Link href="/services" className="transition-colors hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold-light">Stay Inspired</h3>
          <p className="mt-5 text-sm text-white/75">
            Join our newsletter for seasonal itineraries and island travel notes.
          </p>
          <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-l-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-r-full bg-gold px-5 py-2.5 text-sm font-medium text-forest-dark transition-colors hover:bg-gold-light"
            >
              Join
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
          <p>© {year} Lume Bend Ceylon. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-gold">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
