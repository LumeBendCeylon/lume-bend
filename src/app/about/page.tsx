import type { Metadata } from "next";
import { Compass, Heart, Leaf, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Motif from "@/components/Motif";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | LUME BEND",
  description:
    "LUME BEND is a private luxury travel company in Sri Lanka, creating bespoke journeys for discerning international travellers.",
  alternates: {
    canonical: "/about",
  },
};

const VALUES = [
  {
    icon: Compass,
    title: "Craftsmanship",
    text: "Every itinerary is drawn up individually — never copied from a template.",
  },
  {
    icon: Heart,
    title: "Hospitality",
    text: "Sri Lankan warmth is central to the experience, not an afterthought.",
  },
  {
    icon: Leaf,
    title: "Responsibility",
    text: "We work with communities and conservation partners across every region.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    text: "Transparent pricing and a single dedicated contact from start to finish.",
  },
];

const TEAM = [
  {
    name: "Tharusha Dayal",
    role: "Founder & Travel Director",
    image: "/documents/images/tour/tharusha.png",
  },
  {
    name: "Nadeesha Jayathilaka",
    role: "Co-Founder & Creative Director",
    image: "/documents/images/tour/nadeesha.png",
  },
];

export default function AboutPage() {
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
          <p className="eyebrow text-gold-light">About LUME BEND</p>

          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            Built By People Who Call This Island Home
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="A Different Way to Discover Sri Lanka"
            />

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/75">
              <p>
                LUME BEND was created with a simple belief — that discovering
                Sri Lanka should feel personal, effortless and genuinely
                memorable.
              </p>

              <p>
                We believe a great journey is about more than visiting famous
                places. It is about the way a destination makes you feel — a
                quiet morning in the hills, an unforgettable meal, a meaningful
                cultural encounter, or a beautiful moment that was never part
                of the original plan.
              </p>

              <p>
                That is why we create journeys around each traveller. We take
                the time to understand how you want to travel, then carefully
                bring together the right places to stay, routes to take, people
                to meet and experiences to enjoy.
              </p>

              <p>
                Working with trusted local partners, private chauffeurs,
                knowledgeable guides and carefully selected properties, we take
                care of the details behind the journey so you can simply enjoy
                the experience.
              </p>

              <p>
                Whether you are discovering Sri Lanka for the first time or
                returning to see it differently, our purpose remains the same —
                to make every journey feel considered, seamless and uniquely
                yours.
              </p>

              <p>
                Because Sri Lanka is not simply a destination to visit. It is a
                story waiting to be experienced.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div>
            <SectionHeading
              eyebrow="Our Purpose"
              title="Mission & Vision"
            />

            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border border-forest/10 bg-mist p-6">
                <h3 className="font-display text-lg text-forest-dark">
                  Mission
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  To curate exceptional private journeys through Sri Lanka,
                  bringing together authentic experiences, refined comfort and
                  effortless service — all thoughtfully tailored to each
                  traveller.
                </p>
              </div>

              <div className="rounded-2xl border border-forest/10 bg-mist p-6">
                <h3 className="font-display text-lg text-forest-dark">
                  Vision
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  To be recognised for creating beautifully crafted journeys
                  that reveal the finest of Sri Lanka through authentic
                  experiences, thoughtful service and effortless luxury.
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
            eyebrow="What We Stand For"
            title="Our Values"
            center
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => {
              const Icon = v.icon;

              return (
                <div
                  key={v.title}
                  className="rounded-2xl bg-white p-7 text-center shadow-sm"
                >
                  <Icon className="mx-auto h-8 w-8 text-gold" />

                  <h3 className="mt-4 font-display text-lg text-forest-dark">
                    {v.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A Small Team, Deliberately"
            description="We take on a limited number of journeys at a time so that every one of them receives full attention."
          />
        </div>
      </section>

      {/* Team */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="The People"
            title="Meet Our Team"
            center
          />

          <div className="mt-14 flex flex-col items-center justify-center gap-12 sm:flex-row sm:gap-20">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="w-64 text-center"
              >
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
                  {member.role}
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