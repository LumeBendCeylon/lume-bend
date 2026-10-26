import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";

export default async function FAQSection() {
  const t = await getTranslations("Home.faq");

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          center
        />
        <div className="mt-14">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
}