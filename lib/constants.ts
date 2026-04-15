export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.laundryproypsilanti.com";

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
