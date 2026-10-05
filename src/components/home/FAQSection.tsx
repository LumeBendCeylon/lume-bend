import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Good to Know"
          title="Frequently Asked Questions"
          center
        />
        <div className="mt-14">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
}
