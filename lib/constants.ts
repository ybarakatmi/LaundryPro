export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.laundryproypsilanti.com";

/** Wash & fold per-pound rates (single source of truth for site copy). */
export const WASH_FOLD_PRICING = {
  /** Price row on service cards */
  cardLine: "$1.50/lb next day · $2/lb same day",
  /** Full sentence for FAQs, pages, and structured data answers */
  sentence:
    "Wash & fold is $1.50 per pound for next-day service and $2 per pound for same-day service.",
  /** Compact phrase for meta tags */
  metaFragment: "wash & fold $1.50/lb next day, $2/lb same day",
  /** About page stat — value + label */
  statsValue: "$1.50 · $2",
  statsLabel: "Wash & fold per lb (next / same day)",
} as const;

/** Washers & dryers: emphasize multiple sizes / capacities across the site */
export const EQUIPMENT_SIZE_RANGE = {
  /** Hero / short subheads */
  heroHint:
    "Multiple washer and dryer sizes—from a quick small load to commercial-capacity machines for king-size comforters and big jobs.",
  /** Home “Self-Service Laundry” service card */
  selfServiceCard:
    "Brand-new Dexter washers and dryers in a full range of sizes: compact machines for small loads, large drums for family laundry, extra-large units for bulky bedding, and commercial-capacity equipment when you need maximum drum space.",
  /** Home “Comforter & Bulky Items” card */
  bulkyCard:
    "King-size comforters, blankets, and bulky items fit best in our largest commercial-capacity washers—we have smaller machines too when you only need a light load.",
  /** Why Choose Us checklist line */
  whyChooseBullet:
    "Multiple machine sizes — small loads, family bundles, king-size comforters, and commercial-capacity washers & dryers",
  /** Self-Service “Why Choose” first card */
  selfServiceWhyChooseMachines:
    "Our Dexter washers and dryers come in multiple sizes so you always pick the right drum—quick small loads, deep cleans for heavy laundry, and giant commercial-capacity machines for bedding, blankets, and big batches.",
  /** FAQs / JSON-LD — full machine-size answer */
  faqMachineSizes:
    "Yes. We have Dexter washers and dryers in several sizes. Use smaller machines for quick personal loads, larger washers and dryers for weekly family laundry, and our biggest commercial-capacity equipment for king-size comforters, heavy blankets, sleeping bags, and large or business volumes. Our staff can point you to the best fit for what you're washing.",
  /** Site-wide meta description snippet */
  metaBrief: "Multi-size Dexter washers & dryers",
} as const;

export const BUSINESS = {
  name: "Laundry Pro",
  tagline: "Clean. Fast. Friendly.",
  addressLine1: "1510 Washtenaw Ave, Suite D",
  city: "Ypsilanti",
  state: "MI",
  postalCode: "48197",
  fullAddress: "1510 Washtenaw Ave, Suite D, Ypsilanti, MI 48197",
  phoneDisplay: "(734) 883-6714",
  phoneTel: "+17348836714",
  hours: "6:00 AM – 2:00 AM, 7 Days a Week",
  hoursShort: "Open 6 AM – 2 AM | 7 Days",
  email: "info@laundryproypsilanti.com",
  instagram: "https://www.instagram.com/laundryproypsilanti",
  facebook: "https://www.facebook.com/profile.php?id=61577338933794",
  yelp: "https://www.yelp.com/biz/laundry-pro-ypsilanti",
  toarminas: "https://www.toarminasypsilanti.com/",
} as const;

export const externalLinkProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};
