import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blogPosts";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Laundry Tips & Local Guides | Laundry Pro Ypsilanti",
  description:
    "Practical laundry advice for Ypsilanti and EMU students — wash & fold savings, self-service tips, and the Laundry Pro + Toarmina's Pizza combo.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Laundry Pro Blog | Ypsilanti MI",
    description:
      "Guides and tips from Laundry Pro on Washtenaw Avenue — open late with brand-new machines.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <div className="bg-[#f0f7ff] pb-20 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Laundry Pro Blog
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Helpful articles for Ypsilanti neighbors and EMU students — from saving
          money on laundry to planning the perfect wash night next to
          Toarmina&apos;s Pizza.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
