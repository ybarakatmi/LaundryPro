import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { WashFoldWhyChoose } from "@/components/WashFoldWhyChoose";
import { WashFoldHowItWorks } from "@/components/WashFoldHowItWorks";
import { GoogleReviews } from "@/components/GoogleReviews";
import { SITE_URL, WASH_FOLD_PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wash & Fold Service | Laundry Pro Ypsilanti",
  description: `Professional wash & fold in Ypsilanti. ${WASH_FOLD_PRICING.sentence} Drop off and we'll wash, dry, and neatly fold everything.`,
  alternates: { canonical: `${SITE_URL}/wash-and-fold` },
};

export default function WashAndFoldPage() {
  return (
    <>
      {/* Hero — split layout like Skylar */}
      <section className="bg-white pb-16 pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Circular image */}
          <div className="flex justify-center">
            <div className="relative h-[340px] w-[340px] overflow-hidden rounded-full border-4 border-[#1e3a8a]/20 shadow-xl sm:h-[400px] sm:w-[400px]">
              <Image
                src="/wash-fold-hero.jpg"
                alt="Professional laundry attendant holding neatly folded towels"
                fill
                priority
                className="object-cover"
                sizes="400px"
              />
            </div>
          </div>
          {/* Text */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Welcome to Laundry Pro
              <br />
              <span className="text-[#1e3a8a]">Wash & Fold Service</span>
            </h1>
            <p className="mt-6 leading-relaxed text-slate-600">
              Don&apos;t want to do it yourself? Let us take it from here.
              At Laundry Pro, our Wash & Fold service in Ypsilanti is
              designed for maximum convenience.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Simply drop off your clothes, and our team will{" "}
              <strong>wash, dry, and neatly fold</strong> everything for you.
              We use brand-new Dexter equipment and match the{" "}
              <strong>right washer and dryer size</strong> to your load—from
              compact drums to commercial-capacity machines for bulky items. Our
              team uses <strong>high-efficiency Dexter machines</strong>,{" "}
              <strong>comfortable facilities</strong>,{" "}
              <strong>free Wi-Fi</strong>, and flexible scheduling to make your
              life easier.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Whether it&apos;s your weekly load, a busy schedule, or just the
              desire to skip folding — we guarantee your clothes come back{" "}
              <strong>fresh, clean, and perfectly folded</strong> every time.
            </p>
            <p className="mt-4 font-medium leading-relaxed text-slate-700">
              Visit Laundry Pro today and experience how simple laundry can be —{" "}
              <strong>{WASH_FOLD_PRICING.cardLine}</strong>. Drop off your
              laundry and enjoy the rest of your day.
            </p>
            <div className="mt-8">
              <ButtonLink href="/#schedule" ariaLabel="Schedule wash and fold drop-off">
                Schedule Drop-Off
              </ButtonLink>
            </div>
          </div>
        </div>
        {/* Secondary image row */}
        <div className="mx-auto mt-16 flex max-w-md justify-center">
          <div className="relative h-[200px] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/folded-towels.webp"
              alt="Neatly folded clean towels and linens"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 400px, 100vw"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Why Choose — image-backed cards like Skylar */}
      <WashFoldWhyChoose />

      {/* How It Works — with animations */}
      <WashFoldHowItWorks />

      {/* Reviews */}
      <GoogleReviews />
    </>
  );
}
