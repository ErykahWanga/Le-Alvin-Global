import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as services, u as quality } from "./router-CP75hrCL.mjs";
import { t as PageHero } from "./PageHero-CpgJaEBI.mjs";
import { t as logistics_default } from "./logistics-BvYexlOb.mjs";
import { t as taste_lab_default } from "./taste-lab-DDwZ67m2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/what-we-do-Bzu6mqiz.js
var import_jsx_runtime = require_jsx_runtime();
function WhatWeDo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "What We Do",
			title: "We source, prepare, quality-control, package and deliver.",
			intro: "Everything between the auction floor and your warehouse — handled by one licensed dealer, to one specification.",
			image: logistics_default,
			imageAlt: "Container port at dusk"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-clay",
						children: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl",
						children: "Coffee prepared the way your business needs it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
						children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl",
								children: service.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: service.body
							})]
						}, service.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sand py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-clay",
						children: "Private Label & Custom Packaging"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl leading-[1.1] sm:text-4xl",
						children: "Your brand. Our coffee and preparation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-relaxed text-muted-foreground lg:text-base",
						children: "Private labelling and packaging options are available to suit customer needs — from retail pouches carrying your own branding to export bags prepared to your marks and specification. Ideal for roasters, distributors and hospitality groups launching an own label programme."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3 text-sm text-muted-foreground",
						children: [
							"Own-brand retail pouches: 250g, 500g, 1kg",
							"Roast profile developed and matched to your brief",
							"Export bags to your marks and net weights",
							"Blends repeated lot after lot"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-accent" }), item]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-10 inline-block rounded-sm bg-primary px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90",
						children: "Discuss private label"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: taste_lab_default,
						alt: "Coffee cupping in the in-house taste lab",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "aspect-4/3 w-full rounded-sm object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-sm border border-border bg-card p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "eyebrow text-muted-foreground",
							children: "Quality assurance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 divide-y divide-border",
							children: quality.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: item.body
								})]
							}, item.title))
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-espresso py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Logistics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl leading-[1.1] sm:text-4xl",
						children: "Delivered to your port of destination."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-relaxed text-espresso-muted",
						children: "Our logistics team works with international freight partners, including Africa Global Logistics, to keep documentation, bookings and sailings aligned. The commitment is simple: timely deliveries, to the destination named in the contract."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-px overflow-hidden rounded-sm border border-espresso-foreground/10 bg-espresso-foreground/10 sm:grid-cols-3",
						children: [
							{
								title: "Documentation",
								body: "Export paperwork prepared and checked"
							},
							{
								title: "Freight",
								body: "Bookings coordinated with partners"
							},
							{
								title: "Delivery",
								body: "To your named port of destination"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-espresso p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-espresso-foreground",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-espresso-muted",
								children: item.body
							})]
						}, item.title))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logistics_default,
					alt: "Shipping containers being loaded at a port",
					loading: "lazy",
					width: 1280,
					height: 960,
					className: "aspect-4/3 w-full rounded-sm object-cover"
				})]
			})
		})
	] });
}
//#endregion
export { WhatWeDo as component };
