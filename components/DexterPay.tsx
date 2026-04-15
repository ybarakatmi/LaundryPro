import Image from "next/image";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button-link";

export function DexterPay() {
  return (
    <Section id="dexterpay" className="bg-slate-900">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            Mobile Payment
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pay With Your Phone — No Coins Needed
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Make your laundry day easier with the security and freedom of
            DexterPay. With this mobile app, you can pay securely using mobile
            pay instead of coins. Plus, you can monitor the progress of every
            load so you know exactly when it&apos;s done.
          </p>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
              Pay securely from your phone — no quarters required
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
              Monitor your wash and dry cycles in real time
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
              Get notified when your laundry is ready
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
              Works with all our Dexter machines
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://apps.apple.com/us/app/dexterpay/id1456133366"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download DexterPay on the App Store"
            >
              <Image
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="h-[50px] w-auto"
                unoptimized
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.dexter.dexterpay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get DexterPay on Google Play"
            >
              <Image
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                width={170}
                height={50}
                className="h-[50px] w-auto"
                unoptimized
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/dexterpay-phones.webp"
            alt="DexterPay mobile app showing washer controls and payment options on two phones"
            width={400}
            height={480}
            className="h-auto w-full max-w-[400px] drop-shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
}
