"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, User as UserIcon, ChevronDown, Search } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Motif from "@/components/Motif";
import type { Tour } from "@/lib/data";

const LINKS = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/destinations", key: "destinations" },
  { href: "/services", key: "services" },
  { href: "/gallery", key: "gallery" },
  { href: "/reviews", key: "reviews" },
  { href: "/sustainability", key: "sustainability" },
  { href: "/contact", key: "contact" },
] as const;

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
  const [searchOpen, setSearchOpen] = useState(false);
  const [deskSearchOpen, setDeskSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [toursMenuOpen, setToursMenuOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const router = useRouter();
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
    setSearchOpen(false);
    setDeskSearchOpen(false);
    setToursMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || open || deskSearchOpen;

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    setSearchOpen(false);
    setDeskSearchOpen(false);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      {/* ===================== PHONE / TAB (below 2xl) ===================== */}
      <div className="2xl:hidden">
        {/* Row 1: logo + language + book button (responsive) */}
        <div className="flex items-center justify-between gap-2 bg-forest-dark px-3 py-3 sm:px-4">
          <Link href="/" className="flex min-w-0 shrink items-baseline gap-1 whitespace-nowrap">
            <span className="font-display text-[15px] tracking-wide text-white sm:text-lg">LUME BEND</span>
            <span className="font-display text-[15px] tracking-wide text-gold sm:text-lg">Ceylon</span>
          </Link>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher dark compact />
            <Link
              href="/plan"
              className="max-w-[8.5rem] truncate whitespace-nowrap rounded-full border border-gold px-2.5 py-1.5 text-[11px] font-medium tracking-normal text-gold transition-colors hover:bg-gold hover:text-forest-dark sm:max-w-none sm:px-3.5 sm:text-xs sm:tracking-wide"
            >
              {t("book")}
            </Link>
          </div>
        </div>

        {/* Row 2: hamburger (left half) + search (right half) */}
        <div className="grid grid-cols-2">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => {
              setOpen((v) => !v);
              setSearchOpen(false);
            }}
            className="flex h-11 items-center justify-center bg-forest text-white"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <button
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => {
              setSearchOpen((v) => !v);
              setOpen(false);
            }}
            className="flex h-11 items-center justify-center bg-gold text-forest-dark"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Row 3: search box (opens when the search half is tapped) */}
        <AnimatePresence>
          {searchOpen && (
            <motion.form
              onSubmit={submitSearch}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden bg-forest-dark"
            >
              <div className="flex gap-2 px-4 py-3">
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  placeholder={t("searchPlaceholder")}
                  className="w-full rounded-full bg-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-forest-dark"
                >
                  {t("search")}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* ===================== LAPTOP / DESKTOP (2xl and up) ===================== */}
      <nav className="mx-auto hidden max-w-[115rem] items-center gap-3 px-4 py-4 2xl:flex 2xl:gap-5 2xl:px-6">
        <Link href="/" className="flex shrink-0 items-baseline gap-1 whitespace-nowrap">
          <span
            className={`font-display text-2xl tracking-wide transition-colors ${
              solid ? "text-forest" : "text-white"
            }`}
          >
            LUME BEND
          </span>
          <span className="font-display text-2xl tracking-wide text-gold">Ceylon</span>
        </Link>

        <ul className="flex items-center gap-3 2xl:gap-5 min-[1700px]:gap-8">
          {/* Tours mega-menu trigger */}
          <li
            className="relative"
            onMouseEnter={() => setToursMenuOpen(true)}
            onMouseLeave={() => setToursMenuOpen(false)}
          >
            <Link
              href="/tours"
              className={`inline-flex items-center gap-1 whitespace-nowrap text-sm min-[1700px]:text-base font-medium tracking-normal transition-colors hover:text-gold ${
                solid ? "text-ink" : "text-white"
              } ${pathname.startsWith("/tours") ? "text-gold" : ""}`}
            >
              {t("tours")}
              <ChevronDown
                className={`h-3.5 w-3.5 shrink-0 transition-transform ${toursMenuOpen ? "rotate-180" : ""}`}
              />
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
                              <img
                                src={c.imageUrl}
                                alt={c.category}
                                className="h-full w-full rounded-full object-cover"
                              />
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
                      {t("viewAll")}
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
                className={`inline-flex items-center gap-1 whitespace-nowrap text-sm min-[1700px]:text-base font-medium tracking-normal transition-colors hover:text-gold ${
                  solid ? "text-ink" : "text-white"
                } ${pathname === link.href ? "text-gold" : ""}`}
              >
                {t(link.key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-3">
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

          {/* Search (laptop): icon opens a bar below the navbar */}
          <button
            type="button"
            aria-label="Search"
            aria-expanded={deskSearchOpen}
            onClick={() => setDeskSearchOpen((v) => !v)}
            className={`rounded-full border p-2.5 transition-colors ${
              solid
                ? "border-forest/20 text-forest-dark hover:border-gold hover:text-gold-dark"
                : "border-white/40 text-white hover:border-gold hover:text-gold-light"
            }`}
          >
            {deskSearchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
          </button>

          <LanguageSwitcher solid={solid} compact />

          <Link
            href="/plan"
            className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm min-[1700px]:text-base font-medium tracking-normal transition-colors 2xl:px-5 ${
              solid
                ? "border-forest bg-forest text-white hover:bg-forest-light"
                : "border-white/70 text-white hover:bg-white hover:text-forest"
            }`}
          >
            {t("book")}
          </Link>
        </div>
      </nav>

      {/* ===================== DESKTOP SEARCH BAR (expands downward) ===================== */}
      <AnimatePresence>
        {deskSearchOpen && (
          <motion.form
            onSubmit={submitSearch}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="hidden overflow-hidden border-t border-forest/10 bg-white 2xl:block"
          >
            <div className="mx-auto flex max-w-3xl gap-3 px-6 py-4">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Escape" && setDeskSearchOpen(false)}
                autoFocus
                placeholder={t("searchPlaceholder")}
                className="w-full rounded-full border border-forest/20 bg-white px-5 py-3 text-sm text-ink placeholder:text-ink/50 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-forest px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-light"
              >
                {t("search")}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* ===================== PHONE MENU DROPDOWN ===================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden bg-white 2xl:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6">
              <li>
                <button
                  onClick={() => setMobileToursOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-3 text-base font-medium text-ink"
                >
                  {t("tours")}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileToursOpen ? "rotate-180" : ""}`}
                  />
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
                        {t("viewAll")} →
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
                    {t(link.key)}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href={user ? "/account" : "/login"}
                  className="block py-3 text-base font-medium text-ink"
                >
                  {user ? t("myAccount") : t("signIn")}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}