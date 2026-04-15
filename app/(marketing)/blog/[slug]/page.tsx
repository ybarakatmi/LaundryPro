import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogCard } from "@/components/BlogCard";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  type BlogBlock,
} from "@/lib/blogPosts";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import {
  articleJsonLd,
  breadcrumbListJsonLd,
} from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | Laundry Pro Ypsilanti`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function renderBlock(block: BlogBlock, index: number) {
  if (block.type === "h2") {
    return (
      <h2
        key={index}
        className="mt-10 text-2xl font-bold tracking-tight text-slate-900"
      >
        {block.text}
      </h2>
    );
  }
  if (block.type === "h3") {
    return (
      <h3
        key={index}
        className="mt-8 text-xl font-semibold text-slate-900"
      >
        {block.text}
      </h3>
    );
  }
  return (
    <p
      key={index}
      className="mt-4 text-base leading-relaxed text-slate-700"
    >
      {block.text}
    </p>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const breadcrumbs = breadcrumbListJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);
  const articleLd = articleJsonLd({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    datePublished: post.date,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <article className="bg-white pb-20 pt-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="hover:text-[#1e3a8a] hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#1e3a8a] hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-slate-700">{post.title}</li>
            </ol>
          </nav>
          <header className="mt-8">
            <time
              dateTime={post.date}
              className="text-sm font-semibold text-[#1e3a8a]"
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              {post.title}
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              {post.readingTimeMinutes} min read
            </p>
          </header>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 48rem, 100vw"
              priority
            />
          </div>
          <div className="mt-10 max-w-none">
            {post.blocks.map((b, i) => renderBlock(b, i))}
          </div>
          <div className="mt-12 rounded-2xl bg-[#1e3a8a] p-8 text-center text-white shadow-lg">
            <p className="text-lg font-semibold">
              Visit Laundry Pro today at 1510 Washtenaw Ave, Ypsilanti.
            </p>
            <p className="mt-2 text-sm text-blue-100">
              {BUSINESS.hours} · Next to Toarmina&apos;s Pizza
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/#schedule" variant="secondary">
                Schedule a service
              </ButtonLink>
              <ButtonLink
                href="tel:+17348836714"
                className="border-white text-white hover:bg-white/10"
                variant="outline"
              >
                Call (734) 883-6714
              </ButtonLink>
            </div>
          </div>
        </div>
        {related.length ? (
          <div className="mx-auto mt-16 max-w-6xl border-t border-slate-200 px-4 pt-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Related posts
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        ) : null}
      </article>
    </>
  );
}
