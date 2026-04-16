"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BUSINESS } from "@/lib/constants";

const testimonials = [
  {
    quote:
      "Spotless machines in all sizes — I use a small washer for gym clothes and the big ones for bedding. Staff is friendly and dryers actually dry on the first cycle.",
    name: "Jordan M.",
    source: "Google",
    accent: "border-emerald-200 bg-emerald-50 text-emerald-900",
  },
  {
    quote:
      "I'm at EMU and this is the only late-night spot I trust. Plenty of machine sizes so I'm not stuck waiting, WiFi is solid for homework, and prices beat everywhere else I've tried in Ypsi.",
    name: "Alicia R.",
    source: "Yelp",
    accent: "border-red-200 bg-red-50 text-red-900",
  },
  {
    quote:
      "Wash and fold saved me during finals week. Folded better than I ever do at home, and pickup was easy to schedule.",
    name: "Devon K.",
    source: "Facebook",
    accent: "border-blue-200 bg-blue-50 text-blue-900",
  },
  {
    quote:
      "We bring king-size comforters here monthly — the commercial-size washers actually fit them and everything comes out fluffy. The 25¢ dryer deal adds up for our family of four.",
    name: "The Nguyen Family",
    source: "Google",
    accent: "border-emerald-200 bg-emerald-50 text-emerald-900",
  },
  {
    quote:
      "Pro tip: start laundry, grab pizza next door, come back for dry time. Best combo night in Ypsilanti.",
    name: "Chris P.",
    source: "Yelp",
    accent: "border-red-200 bg-red-50 text-red-900",
  },
] as const;

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const delta = (card?.offsetWidth ?? 320) + 16;
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  return (
    <Section id="testimonials" className="bg-white">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Real feedback from students, families, and neighbors who wash with
            us on Washtenaw Avenue.
          </p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a8a]"
            aria-label="Scroll testimonials left"
            onClick={() => scrollByCard(-1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a8a]"
            aria-label="Scroll testimonials right"
            onClick={() => scrollByCard(1)}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        tabIndex={0}
        aria-label="Customer testimonials carousel"
      >
        {testimonials.map((t) => (
          <article
            key={t.name}
            data-card
            className="min-w-[min(100%,320px)] max-w-sm snap-start rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm"
          >
            <div className="flex items-center gap-1 text-amber-500" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-800">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-900">{t.name}</p>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-bold ${t.accent}`}
              >
                {t.source}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <ButtonLink
          href={BUSINESS.yelp}
          external
          ariaLabel="Leave Laundry Pro a review on Yelp"
        >
          Leave Us a Review
        </ButtonLink>
        <a href="#contact" className="text-sm font-semibold text-[#1e3a8a]">
          Questions? Contact us
        </a>
      </div>
    </Section>
  );
}
