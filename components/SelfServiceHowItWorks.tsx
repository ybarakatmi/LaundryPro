"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button-link";

/* ── SVG Icons from Skylar's Self-Service page ── */

function LoadUpIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1707 1707" className={className} fill="currentColor">
      <path d="m1145 481c0 31-46 31-46 0v-308c0-10-9-18-19-18h-1015c-10 0-18 8-18 18v1360c0 11 8 19 18 19h1015c10 0 19-8 19-19v-306c0-30 46-30 46 0v306c0 36-29 66-65 66h-1015c-36 0-65-30-65-66v-1360c0-36 29-65 65-65h1015c36 0 65 29 65 65z" />
      <path d="m23 434c-30 0-30-47 0-47h1099c31 0 31 47 0 47z" />
      <path d="m949 855c-11-28 33-44 44-15 105 290-109 600-420 600-247 0-448-200-448-447 0-329 344-544 639-404 60 28 113 70 154 121 20 23-16 53-35 29-151-183-426-197-594-29-251 251-72 684 284 684 280 0 470-280 376-539z" />
      <path d="m857 993c0-253-307-380-486-201-178 179-51 486 202 486 157 0 284-128 284-285zm-50-234c208 208 60 565-234 565s-443-357-235-565c130-129 339-129 469 0z" />
    </svg>
  );
}

function ChooseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} fill="currentColor">
      <path d="m19 31c-.213 0-.409-.136-.477-.35-.029-.065-.203-.212-.323-.283-1.49-.873-3.174-4.733-3.361-5.17l-1.581-6.102c-.056-.216.038-.443.23-.556.975-.573 1.726-.522 2.188-.378.647.203 1.179.717 1.535 1.487l.789 1.648v-9.296c0-1.103.897-2 2-2s2 .897 2 2v5.269c.294-.171.636-.269 1-.269.727 0 1.363.389 1.714.97.348-.293.797-.47 1.286-.47.871 0 1.614.56 1.888 1.338.318-.213.701-.338 1.112-.338 1.103 0 2 .897 2 2v8c0 1.378-1.121 2.5-2.5 2.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.827 0 1.5-.673 1.5-1.5v-8c0-.551-.448-1-1-1s-1 .449-1 1c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-.551-.448-1-1-1s-1 .449-1 1c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-.5c0-.551-.448-1-1-1s-1 .449-1 1c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-7c0-.551-.448-1-1-1s-1 .449-1 1v11.5c0 .233-.162.436-.39.488-.23.054-.46-.062-.562-.272l-1.742-3.643c-.166-.359-.46-.812-.929-.958-.306-.095-.658-.057-1.052.116l1.457 5.645c.448 1.033 1.899 4.03 2.924 4.63.146.086.629.399.77.845.083.263-.063.544-.326.627-.049.015-.1.022-.15.022z" />
      <path d="m19.5 8.5c-.128 0-.256-.049-.354-.146l-2.5-2.5c-.195-.195-.195-.512 0-.707s.512-.195.707 0l2.147 2.146 5.646-5.646c.195-.195.512-.195.707 0s.195.512 0 .707l-6 6c-.097.097-.225.146-.353.146z" />
      <path d="m10.5 12h-8c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5h8c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5zm-8-10c-.275 0-.5.224-.5.5v8c0 .276.225.5.5.5h8c.275 0 .5-.224.5-.5v-8c0-.276-.225-.5-.5-.5z" />
      <path d="m10.5 25h-8c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5h8c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5zm-8-10c-.275 0-.5.224-.5.5v8c0 .276.225.5.5.5h8c.275 0 .5-.224.5-.5v-8c0-.276-.225-.5-.5-.5z" />
    </svg>
  );
}

function DetergentStartIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.05 511.05" className={className} fill="currentColor">
      <path d="m448.422 0h-385.793c-14.598 0-26.475 11.876-26.475 26.474v458.102c0 14.598 11.876 26.474 26.475 26.474h385.793c14.598 0 26.475-11.876 26.475-26.474v-458.102c-.001-14.598-11.877-26.474-26.475-26.474zm-385.793 15h385.793c6.327 0 11.475 5.147 11.475 11.474v66.287h-408.743v-66.287c0-6.327 5.148-11.474 11.475-11.474zm385.793 481.05h-385.793c-6.327 0-11.475-5.147-11.475-11.474v-3.526h322.441c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-322.441v-358.29h408.742v358.29h-54.339c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h54.339v3.526c0 6.327-5.147 11.474-11.474 11.474z" />
      <path d="m255.525 128.948c-86.864 0-157.532 70.668-157.532 157.532s70.668 157.532 157.532 157.532 157.532-70.668 157.532-157.532-70.668-157.532-157.532-157.532zm0 300.064c-78.593 0-142.532-63.939-142.532-142.532s63.939-142.532 142.532-142.532 142.532 63.939 142.532 142.532-63.939 142.532-142.532 142.532z" />
      <path d="m242.339 82.145c14.582 0 26.445-11.863 26.445-26.445s-11.863-26.446-26.445-26.446-26.446 11.864-26.446 26.446 11.864 26.445 26.446 26.445zm0-37.891c6.311 0 11.445 5.135 11.445 11.446s-5.134 11.445-11.445 11.445-11.446-5.134-11.446-11.445 5.135-11.446 11.446-11.446z" />
      <path d="m311.009 82.145c14.582 0 26.445-11.863 26.445-26.445s-11.863-26.446-26.445-26.446-26.446 11.864-26.446 26.446 11.864 26.445 26.446 26.445zm0-37.891c6.311 0 11.445 5.135 11.445 11.446s-5.134 11.445-11.445 11.445-11.445-5.134-11.445-11.445 5.134-11.446 11.445-11.446z" />
      <path d="m379.678 82.145c14.582 0 26.446-11.863 26.446-26.445s-11.864-26.446-26.446-26.446-26.445 11.864-26.445 26.446 11.863 26.445 26.445 26.445zm0-37.891c6.311 0 11.446 5.135 11.446 11.446s-5.135 11.445-11.446 11.445-11.445-5.134-11.445-11.445 5.134-11.446 11.445-11.446z" />
    </svg>
  );
}

function FoldPackIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} fill="currentColor">
      <path d="m412 200.157a28 28 0 1 0-28-28 28.031 28.031 0 0 0 28 28zm0-40a12 12 0 1 1-12 12 12.013 12.013 0 0 1 12-12z" />
      <path d="m480 32.157h16v16h-16z" />
      <path d="m88 384.157h16v16h-16z" />
      <path d="m144 304.157h16v16h-16z" />
      <path d="m80 112.157h16v16h-16z" />
      <path d="m68.161 231.176 23.8 13.019 13.02 23.805a8 8 0 0 0 14.038 0l13.018-23.8 23.8-13.019a8 8 0 0 0 0-14.037l-23.8-13.018-13.018-23.8a8 8 0 0 0-14.038 0l-13.018 23.8-23.8 13.018a8 8 0 0 0 0 14.037zm33.539-14.142a8 8 0 0 0 3.181-3.18l7.119-13.024 7.123 13.024a8 8 0 0 0 3.181 3.18l13.024 7.123-13.028 7.124a8.006 8.006 0 0 0-3.18 3.18l-7.12 13.024-7.123-13.024a8.006 8.006 0 0 0-3.18-3.18l-13.024-7.124z" />
      <path d="m407.019 244.318a8 8 0 0 0-14.038 0l-13.018 23.8-23.8 13.018a8 8 0 0 0 0 14.037l23.8 13.019 13.018 23.808a8 8 0 0 0 14.038 0l13.018-23.8 23.8-13.019a8 8 0 0 0 0-14.037l-23.8-13.018zm3.284 50.963a8.006 8.006 0 0 0-3.18 3.18l-7.123 13.024-7.123-13.024a8.006 8.006 0 0 0-3.18-3.18l-13.024-7.124 13.024-7.123a8 8 0 0 0 3.181-3.18l7.122-13.024 7.123 13.024a8 8 0 0 0 3.181 3.18l13.024 7.123z" />
    </svg>
  );
}

/* ── Steps data ── */

const steps: { title: string; description: string; icon: (props: { className?: string }) => ReactNode }[] = [
  {
    title: "Load Up & Get Started",
    description:
      "Bring in your laundry and choose from our variety of high-capacity washers — perfect for everything from a quick load to large bedding. Our machines are clearly labeled and easy to use.",
    icon: LoadUpIcon,
  },
  {
    title: "Choose Your Settings",
    description:
      "Select the cycle that best fits your fabrics and preferences. Whether it's a gentle rinse for delicates or a deep clean for heavier items, our washers give you total control.",
    icon: ChooseIcon,
  },
  {
    title: "Add Your Detergent & Press Start",
    description:
      "Add your preferred detergent and start your wash in seconds using our simple, modern payment system. No waiting — just clean clothes fast.",
    icon: DetergentStartIcon,
  },
  {
    title: "Fold, Pack, and Go",
    description:
      "Use our spacious folding stations to neatly organize your clean laundry before heading out. Fresh, fast, and finished — all on your schedule.",
    icon: FoldPackIcon,
  },
];

/* ── Animated step ── */

function AnimatedStep({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 200}ms`,
      }}
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#1e3a8a]/10 text-[#1e3a8a]">
        <step.icon className="h-8 w-8" />
      </div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
        {step.title}
      </h3>
      <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-slate-600">
        {step.description}
      </p>
    </div>
  );
}

/* ── Main component ── */

export function SelfServiceHowItWorks() {
  return (
    <Section id="how-it-works-self" className="bg-[#f0f7ff]">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-900 sm:text-3xl">
          How It Works?
        </h2>
      </div>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <AnimatedStep key={step.title} step={step} index={i} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <ButtonLink href="/#location">Visit Laundry Pro Today</ButtonLink>
      </div>
    </Section>
  );
}
