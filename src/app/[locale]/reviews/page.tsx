import type { Metadata } from "next";
import ReviewsPageContent from "@/components/ReviewsPageContent";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Read what our guests say about travelling with Golden Palm Ceylon, and share your own trip review.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return <ReviewsPageContent />;
}
