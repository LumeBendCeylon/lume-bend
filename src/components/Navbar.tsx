"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, User as UserIcon, ChevronDown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Motif from "@/components/Motif";
import { tours, type Tour } from "@/lib/data";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/contact", label: "Contact" },
];

// All nine tour-type categories, shown as a 3x3 grid in the mega-menu.
const MEGA_MENU_CATEGORIES: { category: Tour["category"]; motif: Tour["motif"]; imageUrl?: string }[] = [
  { category: "Luxury Tours", motif: "rock", imageUrl: "/documents/images/tour/luxery.png" },
  { category: "General Tours", motif: "sun", imageUrl: "/documents/images/tour/general.png" },
  { category: "Family Tours", motif: "leaf", imageUrl: "/documents/images/tour/family.png" },
  { category: "Adventure Tours", motif: "leaf", imageUrl: "/documents/images/tour/adventure.png" },
  { category: "Wildlife Tours", motif: "leaf", imageUrl: "/documents/images/tour/wildlife.png" },
  { category: "Romantic & Honeymoon Tours", motif: "sun", imageUrl: "/documents/images/tour/couple.png" },
  { category: "Cultural Heritage Tours", motif: "temple", imageUrl: "/documents/images/tour/culture.png" },
  { category: "Ayurveda & Wellness Tours", motif: "leaf", imageUrl: "/documents/images/tour/wellness.png" },
  { category: "Ramayana Tours", motif: "temple", imageUrl: "/documents/images/tour/ramayana.png" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [toursMenuOpen, setToursMenuOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setToursMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-5 lg:gap-12 lg:px-10">
       <Link href="/" aria-label="Lume Bend Ceylon" className="flex items-center">
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <img
    src={solid ? "/logo-dark.svg" : "/logo2.svg"}
    alt="Lume Bend Ceylon"
    className="h-14 w-auto"
  />
</Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {/* Tours mega-menu trigger */}
          <li
            className="relative"
            onMouseEnter={() => setToursMenuOpen(true)}
            onMouseLeave={() => setToursMenuOpen(false)}
          >
            <Link
              href="/tours"
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                solid ? "text-ink" : "text-white"
              } ${pathname.startsWith("/tours") ? "text-gold" : ""}`}
            >
              Tours
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${toursMenuOpen ? "rotate-180" : ""}`} />
            </Link>

            <AnimatePresence>
              {toursMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4"
                >
                  <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-xl">
                    <div className="grid grid-cols-3 gap-4">
                      {MEGA_MENU_CATEGORIES.map((c) => (
                        <Link
                          key={c.category}
                          href={`/tours?category=${encodeURIComponent(c.category)}`}
                          className="group flex flex-col items-center gap-2 rounded-xl p-3 text-center transition-colors hover:bg-mist"
                        >
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-forest to-forest-dark transition-transform group-hover:scale-105">
                            {c.imageUrl ? (
  // eslint-disable-next-line @next/next/no-img-element
                             <img src={c.imageUrl} alt={c.category} className="h-full w-full rounded-full object-cover" />
) : (
  <Motif motif={c.motif} className="h-7 w-7 text-gold" />
)}
                          </span>
                          <span className="text-xs font-medium tracking-wide text-ink/80 group-hover:text-forest-dark">
                            {c.category}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/tours"
                      className="mt-5 flex items-center justify-center rounded-full border border-forest/20 py-2.5 text-sm font-medium text-forest-dark hover:border-gold hover:text-gold-dark"
                    >
                      View All Tours
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  solid ? "text-ink" : "text-white"
                } ${pathname === link.href ? "text-gold" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Link
            href={user ? "/account" : "/login"}
            aria-label={user ? "My Account" : "Sign In"}
            className={`rounded-full border p-2.5 transition-colors ${
              solid
                ? "border-forest/20 text-forest-dark hover:border-gold hover:text-gold-dark"
                : "border-white/40 text-white hover:border-gold hover:text-gold-light"
            }`}
          >
            <UserIcon className="h-4 w-4" />
          </Link>
          <Link
            href="/plan"
            className={`rounded-full border px-6 py-2.5 text-sm font-medium tracking-wide transition-colors ${
              solid
                ? "border-forest bg-forest text-white hover:bg-forest-light"
                : "border-white/70 text-white hover:bg-white hover:text-forest"
            }`}
          >
            Book Your Journey
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto lg:hidden"
        >
          {open ? (
            <X className="h-7 w-7 text-forest" />
          ) : (
            <Menu className={`h-7 w-7 ${solid ? "text-forest" : "text-white"}`} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6">
              <li>
                <button
                  onClick={() => setMobileToursOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-3 text-base font-medium text-ink"
                >
                  Tours
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileToursOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileToursOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-2 pb-3 pl-2">
                        {MEGA_MENU_CATEGORIES.map((c) => (
                          <Link
                            key={c.category}
                            href={`/tours?category=${encodeURIComponent(c.category)}`}
                            className="rounded-lg bg-mist px-3 py-2 text-xs font-medium text-ink/75"
                          >
                            {c.category}
                          </Link>
                        ))}
                      </div>
                      <Link href="/tours" className="block pb-3 pl-2 text-sm font-medium text-gold-dark">
                        View All Tours →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-3 text-base font-medium ${
                      pathname === link.href ? "text-gold" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href={user ? "/account" : "/login"}
                  className="block py-3 text-base font-medium text-ink"
                >
                  {user ? "My Account" : "Sign In"}
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/plan"
                  className="inline-block rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-white"
                >
                  Book Your Journey
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
