"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Section } from "@/components/ui/section";

const reviews = [
  {
    name: "A Alroaini",
    rating: 5,
    timeAgo: "5 months ago",
    text: "Honestly this laundromat is really nice. The place is clean and the machines are all brand new, which makes everything so easy. My clothes came out perfect and the vibe inside feels safe and comfortable. The staff is cool and actually helps you if you need anything. I like that it's open late too. This is for sure my spot from now on.",
  },
  {
    name: "Yousef Selawy",
    rating: 5,
    timeAgo: "1 month ago",
    text: "I love this place got brand new machines super clean. They also offer dry and fold service. Great price.",
  },
  {
    name: "Julia González",
    rating: 5,
    timeAgo: "8 months ago",
    text: "Small but has everything you need, 3 different sizes of washing machines, the smallest is $3.75, which is the cheapest I've found. New payment through an app. Open from 6 am to 2 am.",
  },
  {
    name: "Ra Fa",
    rating: 5,
    timeAgo: "9 months ago",
    text: "Absolutely impressed with this laundromat! From the moment I walked in, I was blown away by how clean and well-kept the place is. Everything looks spotless and fresh, which made the whole experience so enjoyable.",
  },
  {
    name: "Jamal Farha",
    rating: 5,
    timeAgo: "1 month ago",
    text: "Love this laundromat. Everything is brand new and they have everything you need (change machine, vending machine, atm).",
  },
  {
    name: "Fazia Farha",
    rating: 5,
    timeAgo: "9 months ago",
    text: "I stopped by the new Laundry Pro next to Toarmina's Pizza and was pleasantly surprised! The space is modern, spotless, and equipped with brand-new, high-speed machines. It's open until 2AM — perfect for night owls.",
  },
  {
    name: "Samantha Quinn",
    rating: 5,
    timeAgo: "3 months ago",
    text: "The place is new, clean, and has plenty of machines. I appreciate the option of using an app or quarters to pay. Spoke with the owners and they were lovely.",
  },
  {
    name: "Microbial Protection Services",
    rating: 5,
    timeAgo: "5 months ago",
    text: "Love this place it's got brand new machines and it's got that Dexter app pay. You can control all washers and dryers from your phone.",
  },
  {
    name: "Kayla",
    rating: 5,
    timeAgo: "8 months ago",
    text: "The laundromat is very clean and the mobile app is very convenient. It's a nice way to keep track of when your laundry will be done and ready. I will definitely be back to do bigger loads of laundry!",
  },
  {
    name: "Tony Far",
    rating: 5,
    timeAgo: "9 months ago",
    text: "Just tried out the new laundromat next to Toarmina's Pizza in Ypsi — super clean, brand new machines, and really easy to use. Love that they're open late. Definitely my new go-to laundry spot.",
  },
  {
    name: "Sean Cowen",
    rating: 5,
    timeAgo: "4 months ago",
    text: "Clean place - great machines - perfect folding tables!! Great pizza right next door!!! Grateful to have found this place.",
  },
  {
    name: "Tony Farha",
    rating: 5,
    timeAgo: "8 months ago",
    text: "We're right next door at Toarminas Pizza and we seriously love having Laundry Pro next to us! Super easy, always clean, and perfect for washing our uniforms and kitchen towels. Big help for our team — we use it all the time!",
  },
  {
    name: "Reem Farha",
    rating: 5,
    timeAgo: "9 months ago",
    text: "Drop off service is amazing! I dropped my laundry off and they folded it and was ready on time!",
  },
  {
    name: "Yousef Khayat",
    rating: 5,
    timeAgo: "9 months ago",
    text: "Drop-off service is a game changer! They always do it right and on time.",
  },
  {
    name: "Samantha Brannon",
    rating: 5,
    timeAgo: "1 week ago",
    text: "This place was very clean very nice the staff over at the pizza place next door — he was so helpful, so kind, offered to help if I needed help with anything.",
  },
  {
    name: "John Russell Jr",
    rating: 5,
    timeAgo: "3 months ago",
    text: "Excellent!!!",
  },
  {
    name: "Asma Salman",
    rating: 5,
    timeAgo: "9 months ago",
    text: "Great place to do laundry — clean, easy, and comfortable.",
  },
] as const;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function InitialAvatar({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e3a8a] text-sm font-bold text-white">
      {initial}
    </div>
  );
}

export function GoogleReviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const delta = (card?.offsetWidth ?? 360) + 16;
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  return (
    <Section id="reviews" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#1e3a8a]">
          Google Reviews
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          What Our Customers Are Saying
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Real reviews from real customers — see why Ypsilanti chooses Laundry
          Pro.
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-lg font-bold text-slate-900">4.8 / 5</span>
        <span className="text-sm text-slate-500">({reviews.length}+ reviews)</span>
      </div>

      <div className="relative mt-10">
        <button
          type="button"
          className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-2 shadow-md hover:bg-slate-50 lg:flex"
          aria-label="Scroll reviews left"
          onClick={() => scrollByCard(-1)}
        >
          <ChevronLeft className="h-5 w-5 text-slate-700" />
        </button>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          tabIndex={0}
          aria-label="Customer reviews carousel"
        >
          {reviews.map((r) => (
            <article
              key={r.name}
              data-card
              className="min-w-[min(100%,340px)] max-w-sm snap-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <InitialAvatar name={r.name} />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.timeAgo}</p>
                </div>
              </div>
              <div className="mt-3">
                <StarRating count={r.rating} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {r.text}
              </p>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-2 shadow-md hover:bg-slate-50 lg:flex"
          aria-label="Scroll reviews right"
          onClick={() => scrollByCard(1)}
        >
          <ChevronRight className="h-5 w-5 text-slate-700" />
        </button>
      </div>
    </Section>
  );
}
