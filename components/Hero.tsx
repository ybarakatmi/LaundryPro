import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { BUSINESS, EQUIPMENT_SIZE_RANGE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[85vh] items-center scroll-mt-24 overflow-hidden bg-slate-900"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/storefront.webp"
        alt="Storefront of Laundry Pro laundromat in Ypsilanti Michigan"
        fill
        priority
        className="object-cover opacity-90"
        style={{ objectPosition: "center 30%" }}
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40"
        aria-hidden
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
        <p className="inline-flex w-fit items-center rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
          {BUSINESS.hoursShort}
        </p>
        <div className="max-w-3xl space-y-6">
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Ypsilanti&apos;s Newest, Cleanest Laundromat
          </h1>
          <p className="text-lg text-slate-100 sm:text-xl">
            <span className="font-semibold text-white">
              Brand-new Dexter washers &amp; dryers.
            </span>{" "}
            {EQUIPMENT_SIZE_RANGE.heroHint} Open until 2 AM. Right next to
            Toarmina&apos;s Pizza.
          </p>
          <p className="text-sm font-medium text-slate-200">
            {BUSINESS.tagline} · Near Eastern Michigan University (EMU) campus
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink
            href="#schedule"
            variant="secondary"
            className="w-full min-w-[200px] sm:w-auto"
            ariaLabel="Scroll to schedule a pick-up section"
          >
            Schedule a Pick-Up
          </ButtonLink>
          <ButtonLink
            href="#services"
            variant="outline"
            className="w-full min-w-[200px] sm:w-auto"
            ariaLabel="Scroll to our services section"
          >
            View Our Services
          </ButtonLink>
          <Link
            href="/blog"
            className="text-center text-sm font-semibold text-white underline-offset-4 hover:underline sm:ml-2"
          >
            Laundry tips on our blog
          </Link>
        </div>
      </div>
    </section>
  );
}
