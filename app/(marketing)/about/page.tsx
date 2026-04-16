import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button-link";
import { SITE_URL, BUSINESS, WASH_FOLD_PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Laundry Pro | Our Story | Ypsilanti MI",
  description:
    "Laundry Pro is a family-owned laundromat in Ypsilanti, Michigan. Brand-new multi-size Dexter washers and dryers, wash & fold service, and a commitment to the EMU community. Learn our story.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const stats = [
  { value: "20+", label: "Brand-New Machines" },
  { value: "6 AM–2 AM", label: "Open Daily" },
   { value: WASH_FOLD_PRICING.statsValue, label: WASH_FOLD_PRICING.statsLabel },
  { value: "4.8", label: "Google Rating" },
];

const timeline = [
  {
    year: "2025",
    title: "Laundry Pro Opens Its Doors",
    description:
      "After months of planning and construction, Laundry Pro opened at 1510 Washtenaw Ave in Ypsilanti — right next to Toarmina's Pizza. Equipped with brand-new Dexter commercial washers and dryers in a full range of sizes—from quick small loads to commercial-capacity equipment for bedding and big batches—the facility was built from the ground up to serve the EMU campus and surrounding community.",
  },
  {
    year: "2025",
    title: "DexterPay Mobile Payment Launches",
    description:
      "We became one of the first laundromats in Washtenaw County to offer full mobile payment through the DexterPay app. Download the Dexter app Pay and get free washes with your rewards—no coins needed. Customers can pay, monitor cycles, and get notified when their laundry is done.",
  },
  {
    year: "2025",
    title: "Wash & Fold Service Introduced",
    description:
      "Responding to demand from busy students and families, we launched our professional wash & fold service with simple per-pound pricing: $1.50/lb for next-day turnaround and $2/lb for same-day service. Drop-off, pick-up, and delivery options followed shortly after.",
  },
  {
    year: "2026",
    title: "Community Recognition & Growth",
    description:
      "Laundry Pro earned a 4.8-star Google rating and became a trusted name in Ypsilanti. With consistent 5-star reviews and growing demand, we're laying the groundwork for our next chapter.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 pt-20 pb-24">
        <Image
          src="/storefront.webp"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-900/90" />
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="block h-16 w-full">
            <path d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" fill="white" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            Our Story
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built for Ypsilanti.
            <br />
            Owned by the Community.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Laundry Pro isn&apos;t a franchise. It&apos;s a family-owned
            business built with one goal: give Ypsilanti a laundromat it can
            actually be proud of.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <Section className="bg-white">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-[#1e3a8a] sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Story */}
      <Section className="bg-[#f0f7ff]">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The Laundry Pro Story
            </h2>
            <p className="mt-6 leading-relaxed text-slate-700">
              Laundry Pro was founded with a simple belief: laundry doesn&apos;t
              have to be a chore you dread. We saw an opportunity in Ypsilanti —
              a college town with thousands of students, families, and working
              professionals — and built a facility designed around their real
              needs.
            </p>
            <p className="mt-4 leading-relaxed text-slate-700">
              Every detail was intentional. Brand-new{" "}
              <strong>Dexter commercial washers and dryers</strong> in multiple
              sizes—so you can run a small personal load, a full family week, or
              a king-size comforter in the right drum, with{" "}
              <strong>commercial-capacity equipment</strong> for the biggest
              jobs. Download the Dexter app Pay and get free washes with your
              rewards, then enjoy <strong>DexterPay mobile payment</strong> so no
              one needs to carry quarters. <strong>Free WiFi</strong> and a clean, well-lit
              space so you can actually enjoy the time you spend here. And a
              location right next to <strong>Toarmina&apos;s Pizza</strong> —
              because why not grab dinner while your clothes are spinning?
            </p>
            <p className="mt-4 leading-relaxed text-slate-700">
              We&apos;re not trying to be the biggest. We&apos;re trying to be
              the best — for this community, at this address, every single day.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/storefront.webp"
                alt="Laundry Pro storefront on Washtenaw Avenue in Ypsilanti"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/washers-row.webp"
                alt="Dexter commercial washers at Laundry Pro"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1e3a8a]">
            Our Mission
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Clean. Fast. Friendly.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Our mission is to provide Ypsilanti and the Eastern Michigan
            University community with a laundry experience that&apos;s modern,
            affordable, and genuinely pleasant. We believe a laundromat should be
            a place you trust — with transparent pricing, spotless facilities,
            and a team that treats every customer like a neighbor.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            We invest in the best equipment, maintain the highest standards of
            cleanliness, and stay open late because we know life doesn&apos;t run
            on a 9-to-5 schedule. That&apos;s the Laundry Pro promise.
          </p>
        </div>
      </Section>

      {/* Gallery */}
      <Section className="bg-[#f0f7ff]">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { src: "/dryers-row.webp", alt: "Dexter stack dryers at Laundry Pro" },
              { src: "/interior-wide.webp", alt: "Laundry Pro interior" },
              { src: "/washers-row.webp", alt: "Commercial washers at Laundry Pro" },
              { src: "/washers-front.webp", alt: "Front-loading washers at Laundry Pro" },
            ].map((img) => (
              <div key={img.src} className="overflow-hidden rounded-2xl shadow-md">
                <Image src={img.src} alt={img.alt} width={400} height={267} className="h-52 w-full object-cover" sizes="(min-width: 1024px) 25vw, 50vw" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <Image
            src="/logo.jpg"
            alt="Laundry Pro logo"
            width={200}
            height={60}
            className="mx-auto mb-8 h-14 w-auto rounded"
          />
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our History & Timeline
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative border-l-2 border-[#1e3a8a]/20 pl-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative mb-12 last:mb-0">
                {/* Dot */}
                <div className="absolute -left-[2.55rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#1e3a8a] bg-white">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#1e3a8a]" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#1e3a8a]">
                  {item.year}
                </p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-slate-900">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Come See the Difference
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            {BUSINESS.fullAddress} — open {BUSINESS.hours.toLowerCase()}.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/#location"
              className="bg-white text-[#1e3a8a] hover:bg-slate-100 border-transparent"
            >
              Get Directions
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
