"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button-link";

/* ── SVG Icons matching Skylar's design ── */

function DropOffIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      fill="currentColor"
    >
      <path d="M345.993 161.056A89.993 89.993 0 1 0 256 251.048a90.1 90.1 0 0 0 89.993-89.992zm-147.985 0A57.993 57.993 0 1 1 256 219.048a58.058 58.058 0 0 1-57.992-57.992zm48.125 259.492a16 16 0 0 0 19.888 0c72.743-57.709 151.035-163.528 151.035-259.492C417.056 72.25 344.807 0 256 0S94.944 72.25 94.944 161.056c0 45.143 17.274 95.941 49.952 146.9 26.773 41.753 63.672 82.79 101.237 112.592zM256 32a129.2 129.2 0 0 1 129.056 129.056c0 77.633-63.338 170.275-128.985 226.245C192.1 332.882 126.944 242.1 126.944 161.056A129.2 129.2 0 0 1 256 32zm233.364 395.446c0 18.306-12.986 44.223-74.852 63.735C371.942 504.606 315.648 512 256 512s-115.942-7.394-158.512-20.819c-61.866-19.512-74.852-45.429-74.852-63.735 0-31.511 37.865-57.111 106.619-72.081a16 16 0 1 1 6.808 31.268c-59.321 12.916-81.427 31.888-81.427 40.813 0 5.764 10.968 20.124 52.477 33.216C146.652 473.132 199.528 480 256 480s109.348-6.868 148.887-19.338c41.509-13.092 52.477-27.452 52.477-33.216 0-8.925-22.106-27.9-81.428-40.816a16 16 0 0 1 6.808-31.268c68.756 14.97 106.62 40.571 106.62 72.084z" />
    </svg>
  );
}

function WashDryIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 511.05 511.05"
      className={className}
      fill="currentColor"
    >
      <path d="m448.422 0h-385.793c-14.598 0-26.475 11.876-26.475 26.474v458.102c0 14.598 11.876 26.474 26.475 26.474h385.793c14.598 0 26.475-11.876 26.475-26.474v-458.102c-.001-14.598-11.877-26.474-26.475-26.474zm-385.793 15h385.793c6.327 0 11.475 5.147 11.475 11.474v66.287h-408.743v-66.287c0-6.327 5.148-11.474 11.475-11.474zm385.793 481.05h-385.793c-6.327 0-11.475-5.147-11.475-11.474v-3.526h322.441c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-322.441v-358.29h408.742v358.29h-54.339c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h54.339v3.526c0 6.327-5.147 11.474-11.474 11.474z" />
      <path d="m255.525 128.948c-86.864 0-157.532 70.668-157.532 157.532s70.668 157.532 157.532 157.532 157.532-70.668 157.532-157.532-70.668-157.532-157.532-157.532zm0 300.064c-78.593 0-142.532-63.939-142.532-142.532s63.939-142.532 142.532-142.532 142.532 63.939 142.532 142.532-63.939 142.532-142.532 142.532z" />
      <path d="m242.339 82.145c14.582 0 26.445-11.863 26.445-26.445s-11.863-26.446-26.445-26.446-26.446 11.864-26.446 26.446 11.864 26.445 26.446 26.445zm0-37.891c6.311 0 11.445 5.135 11.445 11.446s-5.134 11.445-11.445 11.445-11.446-5.134-11.446-11.445 5.135-11.446 11.446-11.446z" />
      <path d="m311.009 82.145c14.582 0 26.445-11.863 26.445-26.445s-11.863-26.446-26.445-26.446-26.446 11.864-26.446 26.446 11.864 26.445 26.446 26.445zm0-37.891c6.311 0 11.445 5.135 11.445 11.446s-5.134 11.445-11.445 11.445-11.445-5.134-11.445-11.445 5.134-11.446 11.445-11.446z" />
      <path d="m379.678 82.145c14.582 0 26.446-11.863 26.446-26.445s-11.864-26.446-26.446-26.446-26.445 11.864-26.445 26.446 11.863 26.445 26.445 26.445zm0-37.891c6.311 0 11.446 5.135 11.446 11.446s-5.135 11.445-11.446 11.445-11.445-5.134-11.445-11.445 5.134-11.446 11.445-11.446z" />
    </svg>
  );
}

function FoldedIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      fill="currentColor"
    >
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

function PickUpIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      fill="currentColor"
    >
      <path d="M374.646,323.332l25.29248-202.33984A8.00149,8.00149,0,0,0,392,112h-8V96a40.04584,40.04584,0,0,0-40-40H168a40.04584,40.04584,0,0,0-40,40v16h-8a8.00149,8.00149,0,0,0-7.93848,8.99219L114.31641,139.03a19.4579,19.4579,0,0,0-3.28711,2.62622L68.68652,184H16v16H72a8.00235,8.00235,0,0,0,5.65723-2.34277l44.68652-44.68653A3.31318,3.31318,0,0,1,128,155.31348a30.09135,30.09135,0,0,1-.89746,7.292l-6.86328,27.4541A8,8,0,0,0,128,200h56a8.00917,8.00917,0,0,1,8,8v8H136v16h56v16H136v16h51.69482A32.012,32.012,0,0,1,160,280H16v16H133.9375l10.124,80.99219A8.00065,8.00065,0,0,0,152,384H256v24a48.05375,48.05375,0,0,0,48,48H496V440H304a32.012,32.012,0,0,1-27.69482-16H328V408H272V392h56V376H272v-8a8.00917,8.00917,0,0,1,8-8h56a8,8,0,0,0,7.76074-9.94043l-6.86328-27.4541a30.09135,30.09135,0,0,1-.89746-7.292,3.31318,3.31318,0,0,1,5.65625-2.34278l44.68652,44.68653A8.00235,8.00235,0,0,0,392,360H496V344H395.31348ZM368,96v16H356.47876A23.99228,23.99228,0,0,0,332.4834,88H287.19507a39.8378,39.8378,0,0,0-7.217-16H344A24.0275,24.0275,0,0,1,368,96Z" />
    </svg>
  );
}

/* ── Step data with Skylar's exact copy ── */

const steps: { title: string; description: string; icon: (props: { className?: string }) => ReactNode }[] = [
  {
    title: "Drop Off Your Laundry",
    description:
      "Bring your clothes to Laundry Pro and let our friendly team take care of the rest. We'll label, sort, and track your order to make sure everything stays organized from start to finish.",
    icon: DropOffIcon,
  },
  {
    title: "We Wash & Dry",
    description:
      "Your laundry is cleaned using high-efficiency Dexter washers in the size that fits your load—from everyday baskets to bulky bedding—with eco-friendly detergents and the right temperature and cycle for each fabric type. Our advanced equipment ensures a deep, hygienic clean every time.",
    icon: WashDryIcon,
  },
  {
    title: "Neatly Folded",
    description:
      "Once washed and dried, your garments are folded or hung with precision — keeping them crisp, neat, and ready for use as soon as you get them back.",
    icon: FoldedIcon,
  },
  {
    title: "Pick Up & Go",
    description:
      "You'll receive your laundry clean, soft, and neatly packaged, ready for pickup at your convenience. It's that simple — drop it off, and we'll handle the rest.",
    icon: PickUpIcon,
  },
];

/* ── Animated step with intersection observer ── */

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

export function WashFoldHowItWorks() {
  return (
    <Section className="bg-white">
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
        <ButtonLink href="/#schedule">Schedule Your Drop-Off</ButtonLink>
      </div>
    </Section>
  );
}
