import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import profile from "@/assets/lealvin-company-profile.pdf";
import { company, navigation } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="surface-espresso">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-[0.18em]">LEALVIN</span>
            <span className="eyebrow mt-1 text-gold">Global</span>
          </div>
          <p className="mt-6 max-w-md font-display text-2xl text-balance-tight">
            {company.slogan}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-espresso-muted">
            {company.legalName}, trading as {company.tradingName} — a licensed Kenyan coffee dealer
            sourcing, processing, packaging and exporting East African coffee worldwide.
          </p>
          <a
            href={profile}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block border-b border-gold pb-1 text-[0.7rem] font-semibold tracking-[0.18em] text-gold uppercase"
          >
            Download company profile
          </a>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Explore</h3>
          <ul className="mt-6 space-y-3">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-espresso-muted transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Contact</h3>
          <ul className="mt-6 space-y-4 text-sm text-espresso-muted">
            {company.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-gold" />
              <span>Office {company.office}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-gold" />
              <a href={`mailto:${company.email}`} className="hover:text-gold">
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0 text-gold" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-espresso-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-espresso-muted sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>
            {company.ceoTitle}: {company.ceo} · {company.website}
          </p>
        </div>
      </div>
    </footer>
  );
}
