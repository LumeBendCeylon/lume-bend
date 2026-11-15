import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import * as data from "@/lib/data";

type Item = Record<string, unknown>;

// Which exports of "@/lib/data" are searched, and where their pages live.
const SOURCES = [
  { key: "tours", base: "/tours" },
  { key: "destinations", base: "/destinations" },
  { key: "services", base: "/services" },
] as const;

const str = (v: unknown) => (typeof v === "string" ? v : "");

// Only text fields are searched (image paths, ids etc. are skipped)
function haystack(item: Item) {
  return Object.entries(item)
    .filter(([k, v]) => typeof v === "string" && !/image|img|url|motif|slug|^id$/i.test(k))
    .map(([, v]) => v as string)
    .join(" ")
    .toLowerCase();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SearchPage" });
  return { title: t("metaTitle") };
}

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("SearchPage");
  const { q = "" } = await searchParams;
  const query = q.trim();
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const all = data as unknown as Record<string, unknown>;

  const groups = SOURCES.map((src) => {
    const list = Array.isArray(all[src.key]) ? (all[src.key] as Item[]) : [];
    const results = words.length
      ? list.filter((item) => {
          const h = haystack(item);
          return words.every((w) => h.includes(w));
        })
      : [];
    return { ...src, label: t(src.key), results };
  });

  const total = groups.reduce((n, g) => n + g.results.length, 0);

  return (
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-36 lg:px-10 lg:pt-32">
      <p className="eyebrow text-gold-dark">{t("eyebrow")}</p>
      <h1 className="mt-2 font-display text-3xl text-forest-dark sm:text-4xl">
        {query ? t("resultsFor", { q: query }) : t("titleEmpty")}
      </h1>

      {!query && <p className="mt-4 text-ink/70">{t("hint")}</p>}

      {query && total === 0 && (
        <div className="mt-8 rounded-2xl border border-forest/10 bg-mist p-8">
          <p className="text-ink/80">
            {t.rich("noResults", {
              q: query,
              tours: (chunks) => (
                <Link href="/tours" className="text-gold-dark underline">
                  {chunks}
                </Link>
              ),
              destinations: (chunks) => (
                <Link href="/destinations" className="text-gold-dark underline">
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>
      )}

      {groups
        .filter((g) => g.results.length > 0)
        .map((g) => (
          <section key={g.key} className="mt-12">
            <h2 className="font-display text-2xl text-forest-dark">
              {g.label} <span className="text-base text-ink/50">({g.results.length})</span>
            </h2>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.results.map((item, i) => {
                const title = str(item.title) || str(item.name) || t("untitled");
                const desc =
                  str(item.description) ||
                  str(item.excerpt) ||
                  str(item.summary) ||
                  str(item.tagline) ||
                  str(item.blurb);
                const img = str(item.imageUrl) || str(item.image) || str(item.heroImage);
                const slug = str(item.slug) || str(item.id);
                const href = slug && g.key !== "services" ? `${g.base}/${slug}` : g.base;

                return (
                  <Link
                    key={`${g.key}-${slug || i}`}
                    href={href}
                    className="group overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
                  >
                    {img && (
                      <div className="aspect-[4/3] overflow-hidden bg-forest-dark">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img}
                          alt={title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-display text-xl text-forest-dark group-hover:text-gold-dark">
                        {title}
                      </h3>
                      {desc && (
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/70">{desc}</p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
    </main>
  );
}