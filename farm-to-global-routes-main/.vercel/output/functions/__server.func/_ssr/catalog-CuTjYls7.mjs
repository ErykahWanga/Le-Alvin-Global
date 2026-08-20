import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as FileText, s as Download } from "../_libs/lucide-react.mjs";
import { c as packSizes, d as roastLevels, i as company, m as lealvin_company_profile_default, r as catalog } from "./router-CP75hrCL.mjs";
import { t as PageHero } from "./PageHero-CpgJaEBI.mjs";
import { t as green_coffee_default } from "./green-coffee-Cv-M9oHD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-CuTjYls7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ALL = "all";
function specSheet(item) {
	const roastLabels = item.roasts.map((id) => roastLevels.find((r) => r.id === id)?.label ?? id).join(", ");
	const packLabels = item.packs.map((id) => packSizes.find((p) => p.id === id)?.label ?? id).join(", ");
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
		`Issued: ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`
	].join("\n");
}
function catalogCsv() {
	return [[
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
		"Availability"
	], ...catalog.map((item) => [
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
		item.availability
	])].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, "\"\"")}"`).join(",")).join("\n");
}
function download(filename, content, type) {
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
	const [roast, setRoast] = (0, import_react.useState)(ALL);
	const [grade, setGrade] = (0, import_react.useState)(ALL);
	const [pack, setPack] = (0, import_react.useState)(ALL);
	const allGrades = (0, import_react.useMemo)(() => Array.from(new Set(catalog.flatMap((item) => item.grades))), []);
	const results = catalog.filter((item) => (roast === ALL || item.roasts.includes(roast)) && (grade === ALL || item.grades.includes(grade)) && (pack === ALL || item.packs.includes(pack)));
	const reset = () => {
		setRoast(ALL);
		setGrade(ALL);
		setPack(ALL);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Wholesale Catalog",
			title: "Build your programme by roast, grade and pack size.",
			intro: "Our full B2B line-up of Kenyan and East African lots — filter to your specification and download a spec sheet for each product before you request a quotation.",
			image: green_coffee_default,
			imageAlt: "Jute sacks of Kenyan green coffee ready for export"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-sand py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-clay",
						children: "Catalog filters"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-3xl leading-[1.1] sm:text-4xl",
						children: [
							results.length,
							" of ",
							catalog.length,
							" products match."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => download("lealvin-global-catalog.csv", catalogCsv(), "text/csv"),
							className: "inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-background uppercase transition-opacity hover:opacity-90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Full catalog (CSV)"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: lealvin_company_profile_default,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-sm border border-foreground/25 px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors hover:border-clay hover:text-clay",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" }), "Company profile"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
							label: "Roast level",
							options: [{
								id: ALL,
								label: "All"
							}, ...roastLevels.map((r) => ({
								id: r.id,
								label: r.label
							}))],
							value: roast,
							onChange: setRoast
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
							label: "Grade",
							options: [{
								id: ALL,
								label: "All"
							}, ...allGrades.map((g) => ({
								id: g,
								label: g
							}))],
							value: grade,
							onChange: setGrade
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
							label: "Pack size",
							options: [{
								id: ALL,
								label: "All"
							}, ...packSizes.map((p) => ({
								id: p.id,
								label: p.label
							}))],
							value: pack,
							onChange: setPack
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-10",
				children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-sm border border-border bg-card p-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: "No products match that combination."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "We source against customer requirements — reset the filters or send us your brief."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: reset,
							className: "mt-8 rounded-sm bg-clay px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-background uppercase",
							children: "Reset filters"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 lg:grid-cols-2",
					children: results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col rounded-sm border border-border bg-card p-8 transition-colors hover:border-accent",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-start justify-between gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow text-clay",
										children: item.sku
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl sm:text-3xl",
										children: item.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs tracking-wide text-muted-foreground",
										children: item.origin
									})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm leading-relaxed text-muted-foreground",
								children: item.cup
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-2",
								children: [
									["Process", item.process],
									["Altitude", item.altitude],
									["Screen", item.screen],
									["Moisture", item.moisture],
									["Availability", item.availability],
									["Quality", item.certification]
								].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase",
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm",
									children: value
								})] }, label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-4 border-t border-border pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagRow, {
										label: "Grades",
										values: item.grades
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagRow, {
										label: "Roasts",
										values: item.roasts.map((id) => roastLevels.find((r) => r.id === id)?.label ?? id)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagRow, {
										label: "Packs",
										values: item.packs.map((id) => packSizes.find((p) => p.id === id)?.label ?? id)
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => download(`${item.sku.toLowerCase()}-spec-sheet.txt`, specSheet(item), "text/plain"),
									className: "inline-flex items-center gap-2 rounded-sm bg-clay px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-background uppercase transition-opacity hover:opacity-90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Spec sheet"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "inline-flex items-center rounded-sm border border-foreground/25 px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors hover:border-clay hover:text-clay",
									children: "Request quotation"
								})]
							})
						]
					}, item.sku))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sand py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-clay",
						children: "Packaging & minimums"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl",
						children: "Pack formats, liners and indicative order minimums."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-5",
						children: packSizes.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl",
									children: size.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-muted-foreground",
									children: size.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-[0.65rem] tracking-[0.16em] text-clay uppercase",
									children: ["MOQ ", size.moq]
								})
							]
						}, size.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
						children: roastLevels.map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-sm border border-border bg-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl",
								children: level.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: level.note
							})]
						}, level.id))
					})
				]
			})
		})
	] });
}
function FilterRow({ label, options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 sm:grid-cols-[9rem_1fr] sm:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase sm:pt-2.5",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: options.map((option) => {
				const active = option.id === value;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange(option.id),
					"aria-pressed": active,
					className: `rounded-sm border px-4 py-2 text-xs tracking-wide transition-colors ${active ? "border-clay bg-clay text-background" : "border-border bg-card text-muted-foreground hover:border-clay hover:text-foreground"}`,
					children: option.label
				}, option.id);
			})
		})]
	});
}
function TagRow({ label, values }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mr-1 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase",
			children: label
		}), values.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "rounded-sm bg-foreground/5 px-3 py-1.5 text-[0.65rem] tracking-[0.14em] uppercase",
			children: value
		}, value))]
	});
}
//#endregion
export { Catalog as component };
