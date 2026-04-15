import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BUSINESS } from "@/lib/constants";

const igPosts = ["DWPoxvIDkj9"] as const;

const fbPluginSrc =
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61577338933794&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true";

export function SocialFeeds() {
  return (
    <Section id="social" className="bg-[#f0f7ff]">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Follow Us on Social Media
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Behind-the-scenes updates, busy-hour tips, and community shoutouts from
          Laundry Pro.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {igPosts.map((shortcode) => (
              <div
                key={shortcode}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <iframe
                  title={`Instagram post ${shortcode}`}
                  src={`https://www.instagram.com/p/${shortcode}/embed/`}
                  width="100%"
                  height="480"
                  style={{ border: "none", maxWidth: "100%" }}
                  scrolling="no"
                  loading="lazy"
                  allowTransparency
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <ButtonLink
              href={BUSINESS.instagram}
              external
              ariaLabel="Follow Laundry Pro on Instagram"
            >
              Follow @laundryproypsilanti
            </ButtonLink>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-[500px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <iframe
              title="Laundry Pro Facebook page"
              src={fbPluginSrc}
              width="500"
              height="600"
              style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
              scrolling="no"
              frameBorder={0}
              allowFullScreen
              loading="lazy"
              className="h-[600px] w-full"
            />
            <div className="border-t border-slate-100 p-4 text-center text-sm text-slate-600">
              <p>
                If the Facebook feed does not load (common in local dev), visit
                our page directly for updates.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <ButtonLink
              href={BUSINESS.facebook}
              external
              variant="secondary"
              ariaLabel="Like Laundry Pro on Facebook"
            >
              Like Us on Facebook
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
