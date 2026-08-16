import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download, FileText } from "lucide-react";

import profileAsset from "@/assets/lealvin-company-profile.pdf";
import greenCoffee from "@/assets/green-coffee.jpg";
import { PageHero } from "@/components/site/PageHero";
import { catalog, company, packSizes, roastLevels, type CatalogItem } from "@/data/site";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "B2B Coffee Catalog — Roasts, Grades & Pack Sizes | LeAlvin Global" },
      {
        name: "description",
        content:
          "Browse the LeAlvin Global wholesale coffee catalog: Kenyan and East African lots by roast level, grade and pack size, with downloadable specification sheets.",
      },
      { property: "og:title", content: "B2B Coffee Catalog — LeAlvin Global" },
      {
        property: "og:description",
        content:
          "Filter Kenyan Arabica, Ugandan Robusta and multi-origin lots by roast, grade and packaging, then download spec sheets for your buying team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Catalog,
});

const ALL = "all";

function specSheet(item: CatalogItem) {
  const roastLabels = item.roasts
    .map((id) => roastLevels.find((r) => r.id === id)?.label ?? id)
    .join(", ");
  const packLabels = item.packs
    .map((id) => packSizes.find((p) => p.id === id)?.label ?? id)
    .join(", ");

  return [
    `${company.brand} — PRODUCT SPECIFICATION SHEET`,
    `${company.legalName} · ${company.website} · ${company.email}`,
    `Tel: ${company.phones.join(" / ")}`,
    "",
    `SKU:              ${item.sku}`,
    `Product:          ${item.name}`,
    `Origin:           ${item.origin}`,
    `Altitude:         ${item.altitude}`,
    `Process:          ${item.process}`,
    `Grades:           ${item.grades.join(", ")}`,
    `Roast options:    ${roastLabels}`,
    `Pack sizes:       ${packLabels}`,
    `Screen size:      ${item.screen}`,
    `Moisture:         ${item.moisture}`,
    `Cup profile:      ${item.cup}`,
    `Availability:     ${item.availability}`,
    `Quality:          ${item.certification}`,
    "",
    "All lots are milled, graded and cup-cleared by certified liquorers before shipment.",
    "Pre-shipment samples supplied on request. Prices quoted FOB Mombasa or CIF to your",
    "port of destination. Private label and custom packaging available.",
    "",
    `Issued: ${new Date().toISOString().slice(0, 10)}`,
  ].join("\n");
}

function catalogCsv() {
  const header = [
    "SKU",
    "Product",
    "Origin",
    "Altitude",
    "Process",
    "Grades",
    "Roast options",
    "Pack sizes",
    "Screen",
    "Moisture",
    "Cup profile",
    "Availability",
  ];
  const rows = catalog.map((item) => [
    item.sku,
    item.name,
    item.origin,
    item.altitude,
    item.process,
    item.grades.join(" / "),
    item.roasts.join(" / "),
    item.packs.join(" / "),
    item.screen,
    item.moisture,
    item.cup,
    item.availability,
  ]);
  return [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");
}

function download(filename: string, content: string, type: string) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function Catalog() {
  const [roast, setRoast] = useState<string>(ALL);
  const [grade, setGrade] = useState<string>(ALL);
  const [pack, setPack] = useState<string>(ALL);

  const allGrades = useMemo(
    () => Array.from(new Set(catalog.flatMap((item) => item.grades))),
    [],
  );

  const results = catalog.filter(
    (item) =>
      (roast === ALL || item.roasts.includes(roast)) &&
      (grade === ALL || item.grades.includes(grade)) &&
      (pack === ALL || item.packs.includes(pack)),
  );

  const reset = () => {
    setRoast(ALL);
    setGrade(ALL);
    setPack(ALL);
  };

  return (
    <>
      <PageHero
        eyebrow="Wholesale Catalog"
        title="Build your programme by roast, grade and pack size."
        intro="Our full B2B line-up of Kenyan and East African lots — filter to your specification and download a spec sheet for each product before you request a quotation."
        image={greenCoffee}
        imageAlt="Jute sacks of Kenyan green coffee ready for export"
      />

      {/* Filters */}
      <section className="border-b border-border bg-sand py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-clay">Catalog filters</p>
              <h2 className="mt-4 font-display text-3xl leading-[1.1] sm:text-4xl">
                {results.length} of {catalog.length} products match.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => download("lealvin-global-catalog.csv", catalogCsv(), "text/csv")}
                className="inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-background uppercase transition-opacity hover:opacity-90"
              >
                <Download className="size-4" />
                Full catalog (CSV)
              </button>
              <a
                href={profileAsset}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-foreground/25 px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors hover:border-clay hover:text-clay"
              >
                <FileText className="size-4" />
                Company profile
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-8">
            <FilterRow
              label="Roast level"
              options={[
                { id: ALL, label: "All" },
                ...roastLevels.map((r) => ({ id: r.id, label: r.label })),
              ]}
              value={roast}
              onChange={setRoast}
            />
            <FilterRow
              label="Grade"
              options={[{ id: ALL, label: "All" }, ...allGrades.map((g) => ({ id: g, label: g }))]}
              value={grade}
              onChange={setGrade}
            />
            <FilterRow
              label="Pack size"
              options={[
                { id: ALL, label: "All" },
                ...packSizes.map((p) => ({ id: p.id, label: p.label })),
              ]}
              value={pack}
              onChange={setPack}
            />
          </div>
        </div>
      </section>

      {/* Catalog grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          {results.length === 0 ? (
            <div className="rounded-sm border border-border bg-card p-12 text-center">
              <p className="font-display text-2xl">No products match that combination.</p>
              <p className="mt-3 text-sm text-muted-foreground">
                We source against customer requirements — reset the filters or send us your brief.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-8 rounded-sm bg-clay px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-background uppercase"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {results.map((item) => (
                <article
                  key={item.sku}
                  className="flex flex-col rounded-sm border border-border bg-card p-8 transition-colors hover:border-accent"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow text-clay">{item.sku}</p>
                      <h3 className="mt-3 font-display text-2xl sm:text-3xl">{item.name}</h3>
                      <p className="mt-2 text-xs tracking-wide text-muted-foreground">
                        {item.origin}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{item.cup}</p>

                  <dl className="mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
                    {[
                      ["Process", item.process],
                      ["Altitude", item.altitude],
                      ["Screen", item.screen],
                      ["Moisture", item.moisture],
                      ["Availability", item.availability],
                      ["Quality", item.certification],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
                          {label}
                        </dt>
                        <dd className="mt-1 text-sm">{value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 space-y-4 border-t border-border pt-6">
                    <TagRow label="Grades" values={item.grades} />
                    <TagRow
                      label="Roasts"
                      values={item.roasts.map(
                        (id) => roastLevels.find((r) => r.id === id)?.label ?? id,
                      )}
                    />
                    <TagRow
                      label="Packs"
                      values={item.packs.map(
                        (id) => packSizes.find((p) => p.id === id)?.label ?? id,
                      )}
                    />
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        download(
                          `${item.sku.toLowerCase()}-spec-sheet.txt`,
                          specSheet(item),
                          "text/plain",
                        )
                      }
                      className="inline-flex items-center gap-2 rounded-sm bg-clay px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-background uppercase transition-opacity hover:opacity-90"
                    >
                      <Download className="size-4" />
                      Spec sheet
                    </button>
                    <Link
                      to="/contact"
                      className="inline-flex items-center rounded-sm border border-foreground/25 px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors hover:border-clay hover:text-clay"
                    >
                      Request quotation
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Packaging & MOQ reference */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="eyebrow text-clay">Packaging & minimums</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl">
            Pack formats, liners and indicative order minimums.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {packSizes.map((size) => (
              <div key={size.id} className="bg-card p-6">
                <p className="font-display text-xl">{size.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{size.note}</p>
                <p className="mt-4 text-[0.65rem] tracking-[0.16em] text-clay uppercase">
                  MOQ {size.moq}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {roastLevels.map((level) => (
              <div key={level.id} className="rounded-sm border border-border bg-card p-6">
                <p className="font-display text-xl">{level.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{level.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-[9rem_1fr] sm:items-start">
      <p className="text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase sm:pt-2.5">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              aria-pressed={active}
              className={`rounded-sm border px-4 py-2 text-xs tracking-wide transition-colors ${
                active
                  ? "border-clay bg-clay text-background"
                  : "border-border bg-card text-muted-foreground hover:border-clay hover:text-foreground"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TagRow({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </span>
      {values.map((value) => (
        <span
          key={value}
          className="rounded-sm bg-foreground/5 px-3 py-1.5 text-[0.65rem] tracking-[0.14em] uppercase"
        >
          {value}
        </span>
      ))}
    </div>
  );
}
