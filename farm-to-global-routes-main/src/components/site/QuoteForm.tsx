import { useState } from "react";
import { toast } from "sonner";

import { products } from "@/data/site";

const grades = ["AA", "AB", "PB", "C", "TT", "T", "UG", "MH", "ML", "Robusta", "Custom"];
const origins = ["Kenya", "Uganda", "Ethiopia", "Tanzania", "Burundi", "Multi-origin"];
const packagingOptions = [
  "60kg jute",
  "70kg jute",
  "GrainPro lined",
  "1kg valve pouch",
  "250g / 500g retail",
  "Private label",
  "Bulk container",
];

const fieldClass =
  "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";
const labelClass = "eyebrow text-muted-foreground";

export function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      className="grid gap-6 sm:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setSubmitting(true);
        window.setTimeout(() => {
          setSubmitting(false);
          form.reset();
          toast.success("Enquiry received", {
            description: "Our trade desk will respond with pricing and availability shortly.",
          });
        }, 600);
      }}
    >
      <label className="grid gap-2">
        <span className={labelClass}>Full name *</span>
        <input required name="name" className={fieldClass} placeholder="Jane Doe" />
      </label>
      <label className="grid gap-2">
        <span className={labelClass}>Company *</span>
        <input required name="company" className={fieldClass} placeholder="Company Ltd" />
      </label>
      <label className="grid gap-2">
        <span className={labelClass}>Country *</span>
        <input required name="country" className={fieldClass} placeholder="United Kingdom" />
      </label>
      <label className="grid gap-2">
        <span className={labelClass}>Email *</span>
        <input required type="email" name="email" className={fieldClass} placeholder="you@company.com" />
      </label>
      <label className="grid gap-2">
        <span className={labelClass}>Phone</span>
        <input name="phone" className={fieldClass} placeholder="+44 …" />
      </label>
      <label className="grid gap-2">
        <span className={labelClass}>Product of interest</span>
        <select name="product" className={fieldClass} defaultValue={products[0]?.name}>
          {products.map((product) => (
            <option key={product.slug}>{product.name}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2">
        <span className={labelClass}>Coffee origin</span>
        <select name="origin" className={fieldClass}>
          {origins.map((origin) => (
            <option key={origin}>{origin}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2">
        <span className={labelClass}>Grade</span>
        <select name="grade" className={fieldClass}>
          {grades.map((grade) => (
            <option key={grade}>{grade}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2">
        <span className={labelClass}>Quantity</span>
        <input name="quantity" className={fieldClass} placeholder="e.g. 2 x 20ft container" />
      </label>
      <label className="grid gap-2">
        <span className={labelClass}>Packaging requirement</span>
        <select name="packaging" className={fieldClass}>
          {packagingOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 sm:col-span-2">
        <span className={labelClass}>Message</span>
        <textarea
          name="message"
          rows={5}
          className={fieldClass}
          placeholder="Tell us about your programme, target cup profile, shipment window and port of destination."
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-sm bg-primary px-6 py-4 text-[0.7rem] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Sending…" : "Submit enquiry"}
        </button>
        <p className="mt-4 text-xs text-muted-foreground">
          Enquiries are reviewed by our trade desk. For urgent sourcing, call the numbers listed
          below.
        </p>
      </div>
    </form>
  );
}
