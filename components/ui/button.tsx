import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#1e3a8a] text-white hover:bg-[#1e40af] shadow-sm border border-transparent",
  secondary:
    "bg-white text-[#1e3a8a] border border-[#1e3a8a]/25 hover:bg-[#f0f7ff]",
  outline:
    "bg-transparent text-white border-2 border-white hover:bg-white/10",
  ghost: "bg-transparent text-[#1e3a8a] hover:bg-[#f0f7ff] border border-transparent",
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={[
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a8a] disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
