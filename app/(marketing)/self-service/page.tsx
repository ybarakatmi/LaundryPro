import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button-link";
import { SelfServiceWhyChoose } from "@/components/SelfServiceWhyChoose";
import { SelfServiceHowItWorks } from "@/components/SelfServiceHowItWorks";
import { GoogleReviews } from "@/components/GoogleReviews";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Self-Service Laundry | Laundry Pro Ypsilanti",
  description: `Self-service laundry in Ypsilanti with multiple sizes of Dexter washers and dryers—from small loads to commercial capacity. Free WiFi, open 6 AM – 2 AM daily.`,
  alternates: { canonical: `${SITE_URL}/self-service` },
};

export default function SelfServicePage() {
  return (
    <>
      {/* Hero — split layout with overlapping images like Skylar */}
      <section className="relative overflow-hidden bg-slate-900 pt-20 pb-24">
        {/* Dark overlay background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-800/80" />
        {/* Triangle divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="block h-16 w-full"
          >
            <path d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" fill="white" />
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Images — overlapping like Skylar */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/self-service-hero.jpg"
                  alt="Woman loading laundry at a modern laundromat"
                  width={600}
                  height={400}
                  priority
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              {/* Overlapping smaller image */}
              <div className="absolute -bottom-8 -right-8 w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:w-56">
                <Image
                  src="/self-service-girl.webp"
                  alt="Customer using self-service laundry machines"
                  width={300}
                  height={200}
                  className="h-auto w-full object-cover"
                  sizes="250px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* Text */}
          <div className="pt-4 lg:pt-0">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Welcome to Laundry Pro&apos;s
              <br />
              <span className="text-blue-400">Self-Service Laundry</span>
            </h1>
            <p className="mt-6 leading-relaxed text-slate-300">
              At <strong className="text-white">Laundry Pro</strong>, we make
              self-service laundry simple, fast, and worry-free. Our{" "}
              <strong className="text-white">
                brand-new Dexter washers and dryers come in multiple sizes
              </strong>
              —compact machines for a quick small load, large drums for family
              laundry, extra-large units for bulky bedding, and
              commercial-capacity equipment when you need maximum drum space for
              king-size comforters or big batches.
            </p>
            <p className="mt-4 leading-relaxed text-slate-300">
              Enjoy a{" "}
              <strong className="text-white">
                clean, spacious, and comfortable environment
              </strong>{" "}
              with plenty of folding space, seating, and free WiFi while you
              wait. Whether it&apos;s a few pieces, a full family hamper, or a
              king-size comforter, there&apos;s a washer and dryer sized right
              for the job.
            </p>
            <p className="mt-4 leading-relaxed text-slate-300">
              Discover why Laundry Pro is Ypsilanti&apos;s go-to spot for{" "}
              <strong className="text-white">
                easy, reliable, and affordable self-service laundry
              </strong>{" "}
              — modern equipment, spotless facilities, and a team that truly
              cares about your experience.
            </p>
            <div className="mt-8">
              <ButtonLink
                href="#how-it-works-self"
                variant="outline"
                ariaLabel="See how self-service works"
              >
                HOW IT WORKS?
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose — image-backed cards */}
      <SelfServiceWhyChoose />

      {/* How It Works — with SVG icons & animations */}
      <SelfServiceHowItWorks />

      {/* Reviews */}
      <GoogleReviews />
    </>
  );
}
