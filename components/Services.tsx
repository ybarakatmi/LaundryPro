import Image from "next/image";
import {
  Bike,
  PackageOpen,
  Shirt,
  Truck,
  WashingMachine,
  Wind,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button-link";
import { EQUIPMENT_SIZE_RANGE, WASH_FOLD_PRICING } from "@/lib/constants";

const services = [
  {
    icon: WashingMachine,
    title: "Self-Service Laundry",
    description: EQUIPMENT_SIZE_RANGE.selfServiceCard,
    price: "Dryers from 25¢/cycle · multiple dryer sizes",
  },
  {
    icon: Shirt,
    title: "Wash & Fold",
    description:
      "Drop off your laundry and we'll wash, dry, and fold it. Next-day or same-day turnaround — see rates below.",
    price: WASH_FOLD_PRICING.cardLine,
  },
  {
    icon: Truck,
    title: "Pick-Up Service",
    description:
      "We'll come to you. Schedule a pick-up and we handle the rest.",
    price: "Book online or call",
  },
  {
    icon: PackageOpen,
    title: "Drop-Off Service",
    description:
      "Bring it in, we take care of it. Fast turnaround, neatly folded.",
    price: "Same-day options",
  },
  {
    icon: Bike,
    title: "Delivery Service",
    description:
      "Clean laundry delivered right to your door. Perfect for busy students and families.",
    price: "Schedule your route",
  },
  {
    icon: Wind,
    title: "Comforter & Bulky Items",
    description: EQUIPMENT_SIZE_RANGE.bulkyCard,
    price: "$5 off comforter special",
  },
] as const;

export function Services() {
  return (
    <Section id="services" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Self-service, full-service, and everything in between — all under one
          roof on Washtenaw Avenue in Ypsilanti.{" "}
          <span className="font-medium text-slate-700">
            {EQUIPMENT_SIZE_RANGE.heroHint}
          </span>
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="flex flex-col rounded-2xl border border-slate-200 bg-[#f0f7ff]/40 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a8a] text-white">
              <s.icon className="h-6 w-6" aria-hidden />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
              {s.description}
            </p>
            <p className="mt-4 text-sm font-bold text-[#1e3a8a]">{s.price}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { src: "/dryers-row.webp", alt: "Row of Dexter stack dryers at Laundry Pro Ypsilanti" },
          { src: "/washers-row.webp", alt: "Dexter commercial washers at Laundry Pro" },
          { src: "/interior-wide.webp", alt: "Interior of Laundry Pro laundromat in Ypsilanti" },
          { src: "/washers-front.webp", alt: "Front-loading Dexter washers at Laundry Pro" },
        ].map((img) => (
          <div key={img.src} className="overflow-hidden rounded-xl">
            <Image src={img.src} alt={img.alt} width={400} height={267} className="h-48 w-full object-cover transition hover:scale-105" sizes="(min-width: 1024px) 25vw, 50vw" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <ButtonLink href="#schedule" ariaLabel="Scroll to schedule your service">
          Book Wash & Fold or Delivery
        </ButtonLink>
      </div>
    </Section>
  );
}
