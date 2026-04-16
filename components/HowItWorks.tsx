import { Section } from "@/components/ui/section";

const steps = [
  {
    step: "1",
    title: "Load Your Clothes",
    description:
      "Choose your machine size — we have high-capacity washers for big loads and standard machines for smaller ones.",
  },
  {
    step: "2",
    title: "Pay Your Way",
    description:
      "Use coins, card, or the DexterPay app. Download the Dexter app and get free washes with your rewards. No quarters? No problem — we have a change machine on-site.",
  },
  {
    step: "3",
    title: "Relax While You Wait",
    description:
      "Enjoy free WiFi, watch TV, or grab a slice next door at Toarmina's Pizza while your clothes get clean.",
  },
  {
    step: "4",
    title: "Fold & Go",
    description:
      "Use our spacious folding tables to finish up. Your laundry is done — fresh, clean, and ready to go.",
  },
] as const;

export function HowItWorks({ className = "" }: { className?: string }) {
  return (
    <Section id="how-it-works" className={`bg-white ${className}`.trim()}>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#1e3a8a]">
          Simple Process
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          How It Works
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Doing laundry at Laundry Pro is quick and easy — here&apos;s how.
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.step} className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1e3a8a] text-xl font-bold text-white">
              {s.step}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
