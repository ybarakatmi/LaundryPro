import { EQUIPMENT_SIZE_RANGE, WASH_FOLD_PRICING } from "@/lib/constants";

const faqs = [
  {
    q: "How much does a load of laundry cost?",
    a: "Wash prices depend on the machine size you choose—we have multiple washer sizes from compact units for small loads up to commercial-capacity drums for big batches and bedding. Prices start at $3.75 for our smallest machines, with larger machines priced for bigger loads. Dryers start at just 25¢ per cycle — the lowest rates in Ypsilanti.",
  },
  {
    q: "What are your hours?",
    a: "We're open 6:00 AM to 2:00 AM, 7 days a week — including holidays.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept coins, credit/debit cards, and the DexterPay mobile app (download the Dexter app Pay and get free washes with your rewards). We also have a change machine on-site if you need quarters.",
  },
  {
    q: "Do you offer wash & fold service?",
    a: `Yes! ${WASH_FOLD_PRICING.sentence} Drop off your laundry and we'll wash, dry, and neatly fold everything for you.`,
  },
  {
    q: "Do you offer pick-up and delivery?",
    a: "Yes, we offer pick-up and delivery service. Schedule online or call us at (734) 883-6714 to arrange a time.",
  },
  {
    q: "What size washing machines do you have?",
    a: EQUIPMENT_SIZE_RANGE.faqMachineSizes,
  },
  {
    q: "Can I wash comforters and bulky items?",
    a: "Absolutely! Use our largest commercial-capacity washers for king-size comforters, heavy blankets, sleeping bags, and other bulky items—our smaller machines are ideal when you only need a light load.",
  },
  {
    q: "Do you have WiFi?",
    a: "Yes — free WiFi is available throughout the entire facility. Stream, browse, or get work done while you wait.",
  },
  {
    q: "Can I bring my own detergent?",
    a: "Of course! You're welcome to bring your own detergent, fabric softener, or other laundry products. We also sell detergent, dryer sheets, and bleach on-site.",
  },
  {
    q: "How long does a wash cycle take?",
    a: "Typical wash cycles run 25–40 minutes depending on the machine size and cycle selected. Dry cycles usually take 30–45 minutes.",
  },
  {
    q: "What is DexterPay?",
    a: "DexterPay is the Dexter app that lets you pay for and monitor your laundry from your phone. Download the Dexter app Pay and get free washes with your rewards. No coins needed — just scan, pay, and track your cycle in real time. Download it free on the App Store or Google Play.",
  },
  {
    q: "Is the facility safe at night?",
    a: "Yes. Our facility is well-lit, clean, and maintained. We prioritize a safe, comfortable environment for everyone.",
  },
  {
    q: "Where are you located?",
    a: "We're at 1510 Washtenaw Ave, Suite D, Ypsilanti, MI 48197 — right next to Toarmina's Pizza, near the EMU campus.",
  },
  {
    q: "Do you have folding tables?",
    a: "Yes! We have plenty of large, clean folding tables throughout the facility for your convenience.",
  },
  {
    q: "Are pets allowed?",
    a: "For the comfort and safety of all customers, pets are not permitted inside the facility (service animals excepted).",
  },
  {
    q: "Do you have a loyalty program?",
    a: "We're always looking for ways to reward our regulars. Ask our staff about current promotions and deals.",
  },
  {
    q: "What if a machine isn't working?",
    a: "If you encounter any issues with a machine, please let our staff know and we'll help you right away. You can also call us at (734) 883-6714.",
  },
  {
    q: "Can I do commercial or business laundry here?",
    a: "Yes! Several local businesses use our facility for uniforms, towels, and linens. Our commercial-capacity washers and dryers are built for bigger volumes—contact us for large or recurring commercial needs.",
  },
] as const;

function QuestionIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 682.667 682.667"
      className="h-8 w-8 shrink-0"
      fill="none"
      stroke="#1e3a8a"
      strokeWidth="30"
    >
      <g transform="matrix(1.333,0,0,-1.333,0,682.667)">
        <path d="m198.89,136.043c13.696-69.014,74.573-121.043,147.61-121.043,30.199,0,58.315,8.901,81.882,24.213l61.383-16.978-16.978,61.383c15.312,23.567,24.213,51.683,24.213,81.882,0,73.037-52.029,133.914-121.043,147.61" />
        <path d="m195.5,497c-99.687,0-180.5-80.813-180.5-180.5,0-35.738,10.389-69.049,28.307-97.081l-21.072-76.184,76.184,21.072c28.013-17.919,61.343-28.307,97.081-28.307,99.687,0,180.5,80.813,180.5,180.5C376,416.187,295.187,497,195.5,497Z" />
        <rect x="180.5" y="271" width="30" height="30" fill="#1e3a8a" stroke="none" />
        <path d="m150.5,362c0,24.853,20.147,45,45,45,24.853,0,45-20.147,45-45,0-13.15-5.643-24.981-14.637-33.208l-30.363-27.792v-30" />
      </g>
    </svg>
  );
}

export function FAQAccordion() {
  return (
    <div className="mx-auto max-w-5xl grid gap-5 sm:grid-cols-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="flex items-start gap-3">
            <QuestionIcon />
            <h3 className="text-sm font-bold leading-snug text-slate-900">
              {faq.q}
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {faq.a}
          </p>
        </div>
      ))}
    </div>
  );
}
