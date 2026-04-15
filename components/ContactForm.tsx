"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

const inquiryOptions = [
  "General Question",
  "Service Quote",
  "Commercial/B2B Inquiry",
  "Feedback",
  "Other",
] as const;

type Errors = Partial<
  Record<"fullName" | "email" | "message" | "inquiryType", string>
>;

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] =
    useState<(typeof inquiryOptions)[number]>("General Question");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const next: Errors = {};
    if (!fullName.trim()) next.fullName = "Please enter your full name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (!inquiryType) next.inquiryType = "Select an inquiry type.";
    if (!message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    if (!validate()) return;
    const payload = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      inquiryType,
      message: message.trim(),
    };
    console.log("Contact form submission", payload);
    setSuccess(true);
    setFullName("");
    setEmail("");
    setPhone("");
    setInquiryType("General Question");
    setMessage("");
  };

  return (
    <Section id="contact" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Have a Question? Get in Touch
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          We respond quickly — whether you need pricing, commercial service, or
          directions from EMU.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-2">
        <form
          onSubmit={onSubmit}
          className="space-y-5 rounded-2xl border border-slate-200 bg-[#f0f7ff]/40 p-6 shadow-sm sm:p-8"
          noValidate
        >
          {success ? (
            <p
              role="status"
              className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900 ring-1 ring-emerald-100"
            >
              Message sent! We&apos;ll get back to you soon.
            </p>
          ) : null}

          <div>
            <label htmlFor="contact-name" className="block text-sm font-semibold">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              id="contact-name"
              name="fullName"
              type="text"
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName ? (
              <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-semibold">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
              aria-invalid={!!errors.email}
            />
            {errors.email ? (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-sm font-semibold">
              Phone Number{" "}
              <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
            />
          </div>

          <div>
            <label
              htmlFor="contact-inquiry"
              className="block text-sm font-semibold"
            >
              Inquiry Type <span className="text-red-600">*</span>
            </label>
            <select
              id="contact-inquiry"
              name="inquiryType"
              value={inquiryType}
              onChange={(e) =>
                setInquiryType(e.target.value as (typeof inquiryOptions)[number])
              }
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
            >
              {inquiryOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.inquiryType ? (
              <p className="mt-1 text-sm text-red-600">{errors.inquiryType}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-semibold">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
              aria-invalid={!!errors.message}
            />
            {errors.message ? (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            ) : null}
          </div>

          <Button type="submit">Send Message</Button>
        </form>

        <aside
          className="relative space-y-6 overflow-hidden rounded-2xl border border-slate-200 p-6 text-white shadow-lg sm:p-8"
          aria-label="Contact information"
        >
          <Image
            src="/storefront-night.jpeg"
            alt="Laundry Pro storefront at night"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/75" aria-hidden />
          <h3 className="relative text-xl font-bold">Visit or call</h3>
          <dl className="relative space-y-4 text-sm leading-relaxed">
            <div>
              <dt className="font-semibold text-slate-300">Phone</dt>
              <dd>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="text-white underline-offset-2 hover:underline"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-300">Address</dt>
              <dd>
                {BUSINESS.fullAddress}
                <br />
                <span className="text-slate-300">
                  Next to Toarmina&apos;s Pizza · Near EMU
                </span>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-300">Hours</dt>
              <dd>{BUSINESS.hours}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-300">Email</dt>
              <dd>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-white underline-offset-2 hover:underline"
                >
                  {BUSINESS.email}
                </a>
              </dd>
            </div>
          </dl>
          <a
            href="#location"
            className="relative inline-flex text-sm font-semibold text-amber-200 underline-offset-2 hover:underline"
          >
            Open map & directions
          </a>
        </aside>
      </div>
    </Section>
  );
}
