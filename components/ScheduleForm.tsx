"use client";

import { FormEvent, useMemo, useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import { getPreferredTimeSlots } from "@/lib/timeSlots";

type Errors = Partial<
  Record<
    | "fullName"
    | "phone"
    | "email"
    | "serviceType"
    | "preferredDate"
    | "preferredTime"
    | "address",
    string
  >
>;

const serviceOptions = ["Pick-Up", "Drop-Off", "Delivery"] as const;

export function ScheduleForm() {
  const timeSlots = useMemo(() => getPreferredTimeSlots(), []);
  const [minDate] = useState(
    () => new Date().toISOString().split("T")[0] ?? "",
  );
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] =
    useState<(typeof serviceOptions)[number]>("Pick-Up");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [address, setAddress] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  const showAddress =
    serviceType === "Pick-Up" || serviceType === "Delivery";

  const validate = (): boolean => {
    const next: Errors = {};
    if (!fullName.trim()) next.fullName = "Please enter your full name.";
    if (!phone.trim()) next.phone = "Please enter your phone number.";
    else if (!/^[\d\s().+-]{10,}$/.test(phone.replace(/\s/g, "")))
      next.phone = "Enter a valid phone number.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (!serviceType) next.serviceType = "Select a service type.";
    if (!preferredDate) next.preferredDate = "Choose a preferred date.";
    if (!preferredTime) next.preferredTime = "Choose a preferred time.";
    if (showAddress && !address.trim())
      next.address = "Address is required for this service.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    if (!validate()) return;
    const payload = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      serviceType,
      preferredDate,
      preferredTime,
      address: showAddress ? address.trim() : "",
      instructions: instructions.trim(),
    };
    console.log("Schedule form submission", payload);
    setSuccess(true);
    setFullName("");
    setPhone("");
    setEmail("");
    setServiceType("Pick-Up");
    setPreferredDate("");
    setPreferredTime("");
    setAddress("");
    setInstructions("");
  };

  return (
    <Section id="schedule" className="bg-[#f0f7ff]">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Schedule Your Pick-Up, Drop-Off, or Delivery
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Book online and we&apos;ll handle the rest.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="mx-auto mt-10 max-w-2xl space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        noValidate
        aria-describedby={success ? "schedule-success" : undefined}
      >
        {success ? (
          <p
            id="schedule-success"
            role="status"
            className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900 ring-1 ring-emerald-100"
          >
            Thanks! Your request is logged — we&apos;ll follow up shortly to
            confirm details.
          </p>
        ) : null}

        <div>
          <label htmlFor="schedule-name" className="block text-sm font-semibold">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="schedule-name"
            name="fullName"
            type="text"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "schedule-name-err" : undefined}
          />
          {errors.fullName ? (
            <p id="schedule-name-err" className="mt-1 text-sm text-red-600">
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="schedule-phone"
              className="block text-sm font-semibold"
            >
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              id="schedule-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "schedule-phone-err" : undefined}
            />
            {errors.phone ? (
              <p id="schedule-phone-err" className="mt-1 text-sm text-red-600">
                {errors.phone}
              </p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="schedule-email"
              className="block text-sm font-semibold"
            >
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              id="schedule-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "schedule-email-err" : undefined}
            />
            {errors.email ? (
              <p id="schedule-email-err" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="schedule-service"
              className="block text-sm font-semibold"
            >
              Service Type <span className="text-red-600">*</span>
            </label>
            <select
              id="schedule-service"
              name="serviceType"
              value={serviceType}
              onChange={(e) =>
                setServiceType(e.target.value as (typeof serviceOptions)[number])
              }
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
              aria-invalid={!!errors.serviceType}
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.serviceType ? (
              <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="schedule-date"
              className="block text-sm font-semibold"
            >
              Preferred Date <span className="text-red-600">*</span>
            </label>
            <input
              id="schedule-date"
              name="preferredDate"
              type="date"
              min={minDate || undefined}
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
              aria-invalid={!!errors.preferredDate}
            />
            {errors.preferredDate ? (
              <p className="mt-1 text-sm text-red-600">
                {errors.preferredDate}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="schedule-time"
            className="block text-sm font-semibold"
          >
            Preferred Time <span className="text-red-600">*</span>
          </label>
          <select
            id="schedule-time"
            name="preferredTime"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
            aria-invalid={!!errors.preferredTime}
          >
            <option value="">Select a time</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.preferredTime ? (
            <p className="mt-1 text-sm text-red-600">{errors.preferredTime}</p>
          ) : null}
        </div>

        {showAddress ? (
          <div>
            <label
              htmlFor="schedule-address"
              className="block text-sm font-semibold"
            >
              Address <span className="text-red-600">*</span>
            </label>
            <input
              id="schedule-address"
              name="address"
              type="text"
              autoComplete="street-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
              aria-invalid={!!errors.address}
            />
            {errors.address ? (
              <p className="mt-1 text-sm text-red-600">{errors.address}</p>
            ) : null}
          </div>
        ) : null}

        <div>
          <label
            htmlFor="schedule-notes"
            className="block text-sm font-semibold"
          >
            Special Instructions{" "}
            <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <textarea
            id="schedule-notes"
            name="instructions"
            rows={4}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30"
          />
        </div>

        <Button type="submit" className="w-full sm:w-auto">
          Book My Service
        </Button>

        <p className="text-sm text-slate-600">
          Prefer to call? Reach us at{" "}
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="font-semibold text-[#1e3a8a] underline-offset-2 hover:underline"
          >
            {BUSINESS.phoneDisplay}
          </a>
          .
        </p>
      </form>
    </Section>
  );
}
