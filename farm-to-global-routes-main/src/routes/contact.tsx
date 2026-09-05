import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";

import beansAsset from "@/assets/beans-texture.jpg.asset.json";
import profile from "@/assets/lealvin-company-profile.pdf";
import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";
import { company, departmentEmails } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Contact LeAlvin Global Coffee Trade Desk" },
      {
        name: "description",
        content:
          "Tell us your origin, grade, quantity and packaging requirement and our trade desk will respond with samples, availability and pricing to your port.",
      },
      { property: "og:title", content: "Request a Quote — LeAlvin Global" },
      {
        property: "og:description",
        content: "Contact our coffee trade desk in Nairobi for green and roasted coffee enquiries.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quote from our trade desk."
        intro="Share your requirement and we will come back with availability, samples and pricing delivered to your port of destination."
        image={beansAsset.url}
        imageAlt="Close-up of roasted coffee beans"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.4fr_1fr] lg:px-10">
          <div>
            <p className="eyebrow text-clay">Business enquiry</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] sm:text-4xl">
              Tell us what you need.
            </h2>
            <div className="gold-rule mt-8" />
            <div className="mt-10">
              <QuoteForm />
            </div>
          </div>

          <aside className="h-fit rounded-sm border border-border bg-card p-8">
            <h3 className="eyebrow text-muted-foreground">Direct contact</h3>
            <ul className="mt-6 space-y-4 text-sm">
              {company.phones.map((phone) => (
                <li key={phone.number} className="flex items-center gap-3">
                  <Phone className="size-4 text-accent" />
                  <a href={`tel:${phone.number.replace(/\s/g, "")}`} className="hover:text-clay">
                    {phone.number}
                  </a>
                  <span className="text-xs text-muted-foreground">{phone.label}</span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-accent" />
                <span>Office {company.office}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-accent" />
                <a href={`mailto:${company.email}`} className="hover:text-clay">
                  {company.email}
                </a>
              </li>
            </ul>

            <div className="mt-8 border-t border-border pt-6 text-sm">
              <p className="text-muted-foreground">{company.legalName}</p>
              <p className="mt-1 text-muted-foreground">
                {company.ceoTitle}: {company.ceo}
              </p>
              <p className="mt-1 text-muted-foreground">{company.address.building}</p>
              <p className="mt-1 text-muted-foreground">
                {company.address.poBox}, {company.address.city}
              </p>
              <p className="mt-1 text-muted-foreground">{company.website}</p>
            </div>

            <a
              href={profile}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block border-b border-accent pb-1 text-[0.7rem] font-semibold tracking-[0.18em] text-clay uppercase"
            >
              Download company profile
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="eyebrow text-clay">Department Directory</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl">
            Reach the right desk directly.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {departmentEmails.map((dept) => (
              <div key={dept.email} className="bg-card p-6">
                <p className="text-sm text-foreground">{dept.label}</p>
                <a
                  href={`mailto:${dept.email}`}
                  className="mt-2 inline-block text-xs text-muted-foreground hover:text-clay"
                >
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
