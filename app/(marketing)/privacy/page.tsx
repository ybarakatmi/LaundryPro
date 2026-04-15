import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Laundry Pro Ypsilanti",
  description:
    "How Laundry Pro collects and uses information submitted through our website forms, cookies, and your privacy rights.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white pb-20 pt-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Last updated: April 10, 2026
        </p>
        <div className="mt-10 space-y-6 text-slate-700">
          <section aria-labelledby="privacy-intro">
            <h2
              id="privacy-intro"
              className="text-xl font-semibold text-slate-900"
            >
              Who we are
            </h2>
            <p className="mt-3 leading-relaxed">
              This policy describes how{" "}
              <strong>{BUSINESS.name}</strong> (&quot;we,&quot; &quot;us&quot;)
              handles information when you use our website. Our physical
              location is {BUSINESS.fullAddress}.
            </p>
          </section>
          <section aria-labelledby="privacy-collection">
            <h2
              id="privacy-collection"
              className="text-xl font-semibold text-slate-900"
            >
              Information we collect
            </h2>
            <p className="mt-3 leading-relaxed">
              When you submit our scheduling or contact forms, we collect the
              fields you provide — such as name, phone number, email address,
              service preferences, address (when required for pick-up or
              delivery), and any notes you choose to include. We use this
              information only to respond to your request, coordinate services,
              and improve customer support.
            </p>
          </section>
          <section aria-labelledby="privacy-sale">
            <h2
              id="privacy-sale"
              className="text-xl font-semibold text-slate-900"
            >
              We do not sell your personal data
            </h2>
            <p className="mt-3 leading-relaxed">
              We do not sell, rent, or trade your personal information to third
              parties for marketing purposes.
            </p>
          </section>
          <section aria-labelledby="privacy-cookies">
            <h2
              id="privacy-cookies"
              className="text-xl font-semibold text-slate-900"
            >
              Cookies and similar technologies
            </h2>
            <p className="mt-3 leading-relaxed">
              Our site may use cookies or local storage for basic functionality,
              analytics, or embedded content (for example, maps or social
              plugins). You can control cookies through your browser settings.
              Disabling cookies may limit certain features.
            </p>
          </section>
          <section aria-labelledby="privacy-security">
            <h2
              id="privacy-security"
              className="text-xl font-semibold text-slate-900"
            >
              Security
            </h2>
            <p className="mt-3 leading-relaxed">
              We take reasonable measures to protect information submitted
              through our website. No online transmission is completely secure;
              please avoid sending sensitive payment details through unsecured
              forms unless we explicitly direct you to a secure channel.
            </p>
          </section>
          <section aria-labelledby="privacy-contact">
            <h2
              id="privacy-contact"
              className="text-xl font-semibold text-slate-900"
            >
              Contact us about privacy
            </h2>
            <p className="mt-3 leading-relaxed">
              Questions about this policy? Email{" "}
              <a
                className="font-semibold text-[#1e3a8a] underline-offset-2 hover:underline"
                href={`mailto:${BUSINESS.email}`}
              >
                {BUSINESS.email}
              </a>{" "}
              or write to us at {BUSINESS.fullAddress}. You may also call{" "}
              <a
                className="font-semibold text-[#1e3a8a] underline-offset-2 hover:underline"
                href={`tel:${BUSINESS.phoneTel}`}
              >
                {BUSINESS.phoneDisplay}
              </a>
              .
            </p>
          </section>
          <p className="pt-4">
            <Link
              href="/"
              className="font-semibold text-[#1e3a8a] hover:underline"
            >
              ← Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
