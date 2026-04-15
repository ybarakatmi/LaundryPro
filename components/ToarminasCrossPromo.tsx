import Image from "next/image";
import { Pizza } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BUSINESS } from "@/lib/constants";

export function ToarminasCrossPromo() {
  return (
    <Section
      id="toarminas"
      className="border-y border-[#f5d565] bg-gradient-to-br from-[#fff7e6] via-[#fff1cc] to-[#ffe8a3]"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-900 ring-1 ring-amber-200">
            <Pizza className="h-4 w-4" aria-hidden />
            Same plaza · Washtenaw Ave
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-amber-950 sm:text-4xl">
            Do Your Laundry. Grab a Slice.
          </h2>
          <p className="mt-3 text-lg font-semibold text-amber-900">
            We&apos;re right next to Toarmina&apos;s Pizza — home of the
            World&apos;s Biggest Pizza.
          </p>
          <p className="mt-4 text-base leading-relaxed text-amber-950/90">
            Waiting on a wash cycle? Slide next door for hot pizza, wings, and
            subs. It&apos;s the easiest dinner plan in Ypsilanti — especially
            for EMU students and families who want one stop instead of three.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={BUSINESS.toarminas}
              external
              className="bg-amber-600 text-white hover:bg-amber-700 focus-visible:outline-amber-800"
              ariaLabel="View Toarmina's Pizza menu in Ypsilanti"
            >
              View Toarmina&apos;s Menu
            </ButtonLink>
            <ButtonLink
              href="#services"
              variant="secondary"
              className="border-amber-300 bg-white text-amber-950 hover:bg-amber-50"
            >
              Back to Laundry Services
            </ButtonLink>
          </div>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-white/70 p-6 shadow-inner backdrop-blur">
          <Image
            src="/toarminas-logo.png"
            alt="Toarmina's Pizza logo"
            width={80}
            height={80}
            className="mb-4 opacity-70"
          />
          <p className="text-sm font-semibold text-amber-950">
            Same owner. Same commitment to quality.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-amber-950/85">
            Laundry Pro keeps your clothes fresh while Toarmina&apos;s keeps you
            fueled. Tag-team your evening: load the washers, enjoy dinner, and
            finish with the lowest dryer rates in town.
          </p>
        </div>
      </div>
    </Section>
  );
}
