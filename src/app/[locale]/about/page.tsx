import { getTranslations, setRequestLocale } from "next-intl/server";
import { languageAlternates } from "@/i18n/metadata";
import type { Metadata } from "next";
import { Compass, Heart, Leaf, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Motif from "@/components/Motif";
import CTASection from "@/components/CTASection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical: "./",
      languages: languageAlternates("/about"),
    },
  };
}

const VALUES = [
  { id: "craftsmanship", icon: Compass },
  { id: "hospitality", icon: Heart },
  { id: "responsibility", icon: Leaf },
  { id: "trust", icon: ShieldCheck },
] as const;

const TEAM = [
  {
    id: "tharusha",
    name: "Tharusha Dayal",
    image: "/documents/images/tour/tharusha.png",
  },
  {
    id: "nadeesha",
    name: "Nadeesha Jayathilaka",
    image: "/documents/images/tour/nadeesha.png",
  },
] as const;

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("About");
  const storyParagraphs = t.raw("story.paragraphs") as string[];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[46vh] items-center justify-center overflow-hidden bg-forest-dark pt-28">
        <Motif
          motif="leaf"
          className="absolute -right-10 -top-10 h-64 w-64 text-gold/10"
          strokeWidth={0.6}
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-gold-light">{t("hero.eyebrow")}</p>

          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            {t("hero.title")}
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionHeading
              eyebrow={t("story.eyebrow")}
              title={t("story.title")}
            />

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/75">
              {storyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div>
            <SectionHeading
              eyebrow={t("purpose.eyebrow")}
              title={t("purpose.title")}
            />

            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border border-forest/10 bg-mist p-6">
                <h3 className="font-display text-lg text-forest-dark">
                  {t("purpose.mission.title")}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {t("purpose.mission.text")}
                </p>
              </div>

              <div className="rounded-2xl border border-forest/10 bg-mist p-6">
                <h3 className="font-display text-lg text-forest-dark">
                  {t("purpose.vision.title")}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {t("purpose.vision.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={t("values.eyebrow")}
            title={t("values.title")}
            center
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ id, icon: Icon }) => (
              <div
                key={id}
                className="rounded-2xl bg-white p-7 text-center shadow-sm"
              >
                <Icon className="mx-auto h-8 w-8 text-gold" />

                <h3 className="mt-4 font-display text-lg text-forest-dark">
                  {t(`values.items.${id}.title`)}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {t(`values.items.${id}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={t("why.eyebrow")}
            title={t("why.title")}
            description={t("why.description")}
          />
        </div>
      </section>

      {/* Team */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={t("team.eyebrow")}
            title={t("team.title")}
            center
          />

          <div className="mt-14 flex flex-col items-center justify-center gap-12 sm:flex-row sm:gap-20">
            {TEAM.map((member) => (
              <div key={member.id} className="w-64 text-center">
                {/* Profile Photo */}
                <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-2 border-gold/40 bg-white shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                {/* Name */}
                <h3 className="mt-5 font-display text-lg text-forest-dark">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-sm text-ink/60">
                  {t(`team.roles.${member.id}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}