"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import { GoogleReviews } from "@/components/GoogleReviews";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    if (!name.trim() || !phone.trim() || !email.trim()) return;
    console.log("Contact submission", { name, phone, email, message });
    setSuccess(true);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      {/* Hero with background image */}
      <section className="relative overflow-hidden pt-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/storefront.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/90 via-[#1e3a8a]/80 to-[#1e3a8a]/90" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Contact Laundry Pro
            </h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-8">
              <h2 className="text-lg font-bold text-white">
                Email Laundry Pro Your Inquiries, Feedback, or General Questions
                Below:
              </h2>

              <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
                {success && (
                  <p className="rounded-lg bg-emerald-500/20 px-4 py-3 text-sm font-medium text-white ring-1 ring-emerald-400/30">
                    Message sent! We&apos;ll get back to you soon.
                  </p>
                )}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-white/90"
                  >
                    Name <span className="text-red-300">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 w-full rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/50 backdrop-blur focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-semibold text-white/90"
                  >
                    Phone <span className="text-red-300">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="mt-1 w-full rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/50 backdrop-blur focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-white/90"
                  >
                    Email <span className="text-red-300">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 w-full rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/50 backdrop-blur focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-white/90"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/50 backdrop-blur focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-[#1e3a8a] hover:bg-white/90 border-transparent font-bold"
                >
                  Submit
                </Button>
              </form>
            </div>

            {/* Right side — location info + logo */}
            <div className="flex flex-col items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="h-5 w-5 shrink-0" />
                <Link
                  href="/#location"
                  className="text-lg font-bold underline-offset-2 hover:underline"
                >
                  Click here for directions to Laundry Pro
                </Link>
              </div>

              <Link href="/">
                <Image
                  src="/logo.jpg"
                  alt="Laundry Pro Ypsilanti Logo"
                  width={300}
                  height={90}
                  className="h-auto w-64 rounded"
                />
              </Link>

              <div className="mt-4 space-y-3 text-white/90">
                <p className="text-sm">
                  <strong>Address:</strong> {BUSINESS.fullAddress}
                </p>
                <p className="text-sm">
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${BUSINESS.phoneTel}`}
                    className="font-semibold text-white hover:underline"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </p>
                <p className="text-sm">
                  <strong>Hours:</strong> {BUSINESS.hours}
                </p>
                <p className="text-sm">
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="font-semibold text-white hover:underline"
                  >
                    {BUSINESS.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <GoogleReviews />
    </>
  );
}
