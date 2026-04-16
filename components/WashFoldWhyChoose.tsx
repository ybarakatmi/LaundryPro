import Image from "next/image";
import { Section } from "@/components/ui/section";

const benefits = [
  {
    title: "Expert Handling",
    description:
      "Our trained attendants sort, wash, and fold your clothes with care — treating every item like their own.",
    image: "/washers-front.webp",
  },
  {
    title: "Quick & Flexible Turnaround",
    description:
      "Same-day and next-day options, with the right washer and dryer size picked for your load—from a small bag to bulky bedding. Drop off in the morning, pick up by evening — on your schedule.",
    image: "/dryers-row.webp",
  },
  {
    title: "Consistent Quality",
    description:
      "Professional attention to detail every time. Your clothes come back fresh, clean, and perfectly folded.",
    image: "/folded-towels.webp",
  },
  {
    title: "Comfort & Convenience",
    description:
      "Easy drop-off on Washtenaw Ave. Grab pizza at Toarmina's next door while we handle your laundry.",
    image: "/interior-wide.webp",
  },
  {
    title: "Service You Can Trust",
    description:
      "Family-owned, community-focused. We've earned Ypsilanti's trust one load at a time.",
    image: "/storefront.webp",
  },
] as const;

export function WashFoldWhyChoose() {
  return (
    <Section className="bg-[#f0f7ff]">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Why Choose Laundry Pro&apos;s Wash & Fold Service?
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          At Laundry Pro, we make laundry care simple, efficient, and dependable
          — so you can spend less time washing and more time living.
        </p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="group relative overflow-hidden rounded-2xl shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            style={{ minHeight: 240 }}
          >
            <Image
              src={b.image}
              alt=""
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              loading="lazy"
            />
            {/* Blue/red gradient overlay like Skylar */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/80 via-[#3b5cad]/70 to-[#c94040]/50" />
            <div className="relative flex h-full min-h-[240px] flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                {b.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
