import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#1e3a8a] text-white hover:bg-[#1e40af] shadow-sm border border-transparent",
  secondary:
    "bg-white text-[#1e3a8a] border border-[#1e3a8a]/25 hover:bg-[#f0f7ff]",
  outline:
    "bg-transparent text-white border-2 border-white hover:bg-white/10",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a8a]";

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ariaLabel,
  external,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  external?: boolean;
}) {
  const cls = [base, variants[variant], className].filter(Boolean).join(" ");
  if (external) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
