import Image from "next/image";
import { Section } from "@/components/ui/section";

const features = [
  {
    title: "High-Performance Machines",
    description:
      "Wash and dry your clothes in record time with our modern, energy-efficient Dexter machines. They're powerful enough for heavy items yet gentle on your everyday fabrics.",
    image: "/washers-row.webp",
  },
  {
    title: "Clean & Comfortable Space",
    description:
      "Our facility is always bright and kept spotless. You'll find plenty of folding tables, seating, and room to move — everything you need for a smooth laundry experience.",
    image: "/interior-wide.webp",
  },
  {
    title: "Quick & Easy Payments",
    description:
      "No need to fumble for change — our machines support multiple cashless payment options, so you can start your wash with just a few taps.",
    image: "/washer.webp",
  },
  {
    title: "Friendly & Helpful Atmosphere",
    description:
      "Even though it's self-service, you're never on your own. Our team is always nearby to answer questions or help with any machine.",
    image: "/washers-front.webp",
  },
  {
    title: "Always Open When You Need It",
    description:
      "With extended hours seven days a week, Laundry Pro makes it easy to fit laundry into your schedule — morning, afternoon, or late evening.",
    image: "/storefront-night.jpeg",
  },
] as const;

export function SelfServiceWhyChoose() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Why Choose Laundry Pro for Self-Service?
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          At Laundry Pro, we&apos;ve redefined what self-service laundry should
          feel like — fast, efficient, and surprisingly comfortable. With
          advanced equipment and a spotless, welcoming space, laundry day has
          never been easier.
        </p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-2xl shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            style={{ minHeight: 240 }}
          >
            <Image
              src={f.image}
              alt=""
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/80 via-[#3b5cad]/70 to-[#c94040]/50" />
            <div className="relative flex h-full min-h-[240px] flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
