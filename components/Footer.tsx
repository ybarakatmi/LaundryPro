import Image from "next/image";
import Link from "next/link";
import { BUSINESS, externalLinkProps } from "@/lib/constants";

const sectionLinks = [
  { href: "/self-service", label: "Self Service" },
  { href: "/wash-and-fold", label: "Wash & Fold" },
  { href: "/faqs", label: "FAQs" },
  { href: "/#contact", label: "Contact" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#location", label: "Location" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      {/* Bubbles decoration like Skylar */}
      <div className="relative -mb-1 overflow-hidden bg-[#3b82f6]">
        <Image
          src="/bubbles-footer.webp"
          alt=""
          width={1200}
          height={200}
          className="mx-auto h-auto w-full max-w-5xl object-contain"
          aria-hidden="true"
          loading="lazy"
        />
      </div>
      {/* Logo centered above footer content */}
      <div className="bg-[#3b82f6] pb-6 pt-2 text-center">
        <Image
          src="/logo.jpg"
          alt="Laundry Pro Ypsilanti logo"
          width={200}
          height={60}
          className="mx-auto h-14 w-auto rounded"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/logo.jpg"
              alt="Laundry Pro Ypsilanti logo"
              width={160}
              height={48}
              className="h-10 w-auto rounded"
            />
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {BUSINESS.fullAddress}
            </p>
            <p className="mt-2 text-sm text-slate-300">
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="font-semibold text-white hover:underline"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </p>
            <p className="mt-2 text-sm text-slate-300">{BUSINESS.hours}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {sectionLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-200 hover:text-white hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400">
              Connect
            </h3>
            <div className="mt-4 flex gap-4">
              <a
                href={BUSINESS.instagram}
                {...externalLinkProps}
                className="inline-flex h-11 min-w-[2.75rem] items-center justify-center rounded-full border border-slate-700 px-3 text-xs font-bold tracking-wide text-slate-100 hover:border-white hover:text-white"
                aria-label="Laundry Pro on Instagram"
              >
                IG
              </a>
              <a
                href={BUSINESS.facebook}
                {...externalLinkProps}
                className="inline-flex h-11 min-w-[2.75rem] items-center justify-center rounded-full border border-slate-700 px-3 text-xs font-bold tracking-wide text-slate-100 hover:border-white hover:text-white"
                aria-label="Laundry Pro on Facebook"
              >
                FB
              </a>
              <a
                href={BUSINESS.yelp}
                {...externalLinkProps}
                className="inline-flex h-11 min-w-[2.75rem] items-center justify-center rounded-full border border-slate-700 px-3 text-xs font-bold tracking-wide text-slate-100 hover:border-white hover:text-white"
                aria-label="Laundry Pro on Yelp"
              >
                Yelp
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-400">{BUSINESS.tagline}</p>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © 2026 Laundry Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
