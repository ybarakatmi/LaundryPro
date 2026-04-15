import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blogPosts";

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-[16/10] w-full overflow-hidden"
        aria-label={`Read ${post.title}`}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover transition duration-300 hover:scale-105"
          sizes="(min-width: 1024px) 40vw, 100vw"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <time
          dateTime={post.date}
          className="text-xs font-semibold uppercase tracking-wide text-[#1e3a8a]"
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h2 className="mt-2 text-lg font-bold text-slate-900">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-[#1e3a8a] hover:underline"
          >
            {post.title}
          </Link>
        </h2>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex text-sm font-semibold text-[#1e3a8a] hover:underline"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
