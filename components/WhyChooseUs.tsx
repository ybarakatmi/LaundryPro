import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button-link";
import { EQUIPMENT_SIZE_RANGE } from "@/lib/constants";

const points = [
  EQUIPMENT_SIZE_RANGE.whyChooseBullet,
  "Cleanest laundromat in Ypsilanti",
  "Open until 2 AM — perfect for students and night owls",
  "Free WiFi throughout the facility",
  "Right next to Toarmina's Pizza — grab a slice while you wait",
  "Lowest dryer rates in town (25¢ per cycle)",
  "Serving the EMU campus and Ypsilanti community",
] as const;

export function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-[#f0f7ff]">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:order-1">
          <Image
            src="/dryers-row.webp"
            alt="Rows of Dexter stack dryers and multiple machine sizes at Laundry Pro laundromat in Ypsilanti Michigan"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            loading="lazy"
          />
        </div>
        <div className="lg:order-2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Ypsilanti Chooses Laundry Pro
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We built Laundry Pro for real life in Washtenaw County — late hours,
            honest pricing, and a facility you actually want to spend time in.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((text) => (
              <li key={text} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 h-6 w-6 shrink-0 text-[#1e3a8a]"
                  aria-hidden
                />
                <span className="text-slate-800">{text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="#contact">Ask Us Anything</ButtonLink>
            <ButtonLink href="#location" variant="secondary">
              Get Directions
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
