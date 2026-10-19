import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import { services } from "@/lib/data";

export default async function ServicesOverview() {
  const t = await getTranslations("Home.services");

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          center
        />
        <div className="mt-14">
          <ServicesGrid services={services} />
        </div>
      </div>
    </section>
  );
}