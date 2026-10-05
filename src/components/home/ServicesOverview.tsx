import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import { services } from "@/lib/data";

export default function ServicesOverview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="How We Help"
          title="Our Services"
          description="Everything between your arrival and departure, arranged so you never have to think about logistics."
          center
        />
        <div className="mt-14">
          <ServicesGrid services={services} />
        </div>
      </div>
    </section>
  );
}
