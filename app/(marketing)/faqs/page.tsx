import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { GoogleReviews } from "@/components/GoogleReviews";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQs | Laundry Pro Ypsilanti",
  description:
    "Frequently asked questions about Laundry Pro in Ypsilanti — pricing, hours, payment methods, services, and more.",
  alternates: { canonical: `${SITE_URL}/faqs` },
};

export default function FAQsPage() {
  return (
    <>
      <div className="bg-[#f0f7ff] pb-4 pt-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1e3a8a]">
            Got Questions?
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about Laundry Pro — from pricing and
            hours to machine sizes and payment options.
          </p>
        </div>
      </div>

      <Section className="bg-[#f0f7ff]">
        <FAQAccordion />
      </Section>

      <GoogleReviews />
    </>
  );
}
