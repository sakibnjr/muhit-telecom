"use client";

import { useId, useState, type FormEvent } from "react";
import { getServiceContent } from "@/_data/serviceContent";
import { servicesData } from "@/_data/services";
import { Button } from "@/_ui/button";
import { Input } from "@/_ui/input";
import { Wrench, MessageSquare } from "lucide-react";
import { ServiceBookingNotice } from "@/_components/services/ServiceBookingNotice";

export function ServiceBookingForm({
  initialServiceSlug,
}: {
  initialServiceSlug?: string;
}) {
  const fieldId = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [serviceId, setServiceId] = useState(
    () =>
      servicesData.find((service) => service.slug === initialServiceSlug)?.id ??
      servicesData[0].id,
  );
  const [issueDescription, setIssueDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !phone || !model) return;

    const selectedService = servicesData.find((s) => s.id === serviceId);
    const msg = encodeURIComponent(
      `Hello! I would like a service consultation at Muhit Telecom:\n\nName: ${name}\nPhone: ${phone}\nDevice Model: ${model}\nService: ${selectedService ? (getServiceContent(selectedService.slug)?.title ?? selectedService.title) : serviceId}\nIssue Details: ${issueDescription || "Will discuss via chat"}\n\nPlease share the cost estimate and turnaround time.`,
    );

    setSubmitted(true);
    window.open(
      `https://wa.me/8801910755835?text=${msg}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  if (submitted) {
    return (
      <ServiceBookingNotice name={name} onReturn={() => setSubmitted(false)} />
    );
  }

  return (
    <form
      id="booking-form"
      onSubmit={handleSubmit}
      className="surface-panel space-y-5 p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-center gap-2 mb-2">
        <Wrench className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-bold text-foreground">
          Online Device Repair Consultation
        </h3>
      </div>
      <p className="mb-4 text-sm leading-7 text-muted-foreground">
        Request an inspection-based estimate. Send the prepared message in
        WhatsApp to share these details with the shop; no booking is confirmed
        automatically. Back up your data, and do not include passwords or
        verification codes. Ownership and permitted support are required for
        unlock or account recovery requests.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor={`${fieldId}-name`}
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Full Name *
          </label>
          <Input
            id={`${fieldId}-name`}
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Md. Rafiqul Islam"
            required
          />
        </div>
        <div>
          <label
            htmlFor={`${fieldId}-phone`}
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Phone Number *
          </label>
          <Input
            id={`${fieldId}-phone`}
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="01XXXXXXXXX"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor={`${fieldId}-model`}
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Device Brand & Model *
          </label>
          <Input
            id={`${fieldId}-model`}
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="e.g. iPhone 13 Pro / Redmi Note 10"
            required
          />
        </div>
        <div>
          <label
            htmlFor={`${fieldId}-service`}
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Required Service *
          </label>
          <select
            id={`${fieldId}-service`}
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            className="min-h-11 w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary"
          >
            {servicesData.map((s) => (
              <option key={s.id} value={s.id}>
                {getServiceContent(s.slug)?.title ?? s.title} (Indicative from ৳
                {s.startingPrice})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor={`${fieldId}-issue`}
          className="mb-2 block text-sm font-semibold text-foreground"
        >
          Describe the Fault / Problem (Optional)
        </label>
        <textarea
          id={`${fieldId}-issue`}
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
          rows={3}
          placeholder="e.g. Total black screen after drop, touch not responding, battery drains in 2 hours..."
          className="min-h-28 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        <MessageSquare className="w-4 h-4 mr-2" />
        <span>Prepare Request in WhatsApp</span>
      </Button>
    </form>
  );
}
