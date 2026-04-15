import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BUSINESS } from "@/lib/constants";

/** Embed centered on business address (no API key). */
const mapEmbedSrc =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("1510 Washtenaw Ave Suite D Ypsilanti MI 48197") +
  "&z=16&output=embed&hl=en";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(BUSINESS.fullAddress);

export function GoogleMap() {
  return (
    <Section id="location" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Find Us
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Located at 1510 Washtenaw Ave — right next to Toarmina&apos;s Pizza,
          near the EMU campus.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
        <iframe
          title="Google Map showing Laundry Pro at 1510 Washtenaw Ave Suite D Ypsilanti Michigan"
          src={mapEmbedSrc}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>

      <div className="mx-auto mt-10 max-w-xl text-center text-slate-800">
        <p className="text-lg font-bold text-slate-900">{BUSINESS.name}</p>
        <p className="mt-2 leading-relaxed">
          1510 Washtenaw Ave, Suite D
          <br />
          Ypsilanti, MI 48197
          <br />
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="font-semibold text-[#1e3a8a] underline-offset-2 hover:underline"
          >
            {BUSINESS.phoneDisplay}
          </a>
        </p>
        <div className="mt-6 flex justify-center">
          <ButtonLink
            href={directionsUrl}
            external
            ariaLabel="Get directions to Laundry Pro in Google Maps"
          >
            Get Directions
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
