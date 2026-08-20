import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as company, n as audiences } from "./router-CP75hrCL.mjs";
import { t as maggie_estate_default } from "./maggie-estate-B8bZnajS.mjs";
import { t as PageHero } from "./PageHero-CpgJaEBI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BhI7e9DR.js
var import_jsx_runtime = require_jsx_runtime();
var facts = [
	{
		label: "Legal entity",
		value: company.legalName
	},
	{
		label: "Trading identity",
		value: company.tradingName
	},
	{
		label: company.ceoTitle,
		value: company.ceo
	},
	{
		label: "Licence",
		value: "Registered coffee dealer, Kenya"
	},
	{
		label: "Head office",
		value: "Nairobi, Kenya"
	},
	{
		label: "Website",
		value: company.website
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About Us",
			title: "A Kenyan coffee house built for international trade.",
			intro: "Le Alvin Enterprises Limited is registered under Kenya's Companies Act and licensed through the coffee regulatory framework to operate as a coffee dealer — sourcing through local auctions and handling exports and imports.",
			image: maggie_estate_default,
			imageAlt: "Coffee trees at Maggie Estate"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.2fr_1fr] lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-clay",
						children: "Who we are"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl leading-[1.1] sm:text-4xl",
						children: "Not a coffee shop. A coffee trading, processing and export business."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground lg:text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We operate across the full length of the coffee chain: buying through the Kenyan coffee auction, growing and processing our own coffee at Maggie Estate, importing Arabica from Burundi, Uganda, Tanzania and Ethiopia, and exporting Kenyan original Arabica to customers around the world." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Inside the business we keep our own quality function — a professional taste lab where certified liquorers sample and cup coffee so that each shipment meets the customer's expectations and complies with coffee board rules and regulations." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Beyond trade, we work with farmers: training, promoting speciality coffee production, improving availability, reviving coffee and encouraging youth to enter the industry." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl text-foreground",
								children: company.slogan
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-sm border border-border bg-card p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "eyebrow text-muted-foreground",
						children: "Company facts"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-6 divide-y divide-border",
						children: facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs tracking-wide text-muted-foreground",
								children: fact.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm text-foreground",
								children: fact.value
							})]
						}, fact.label))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-espresso py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Who we supply"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl",
						children: "Built for buyers who need consistency at volume."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-12 grid gap-px overflow-hidden rounded-sm border border-espresso-foreground/10 bg-espresso-foreground/10 sm:grid-cols-2 lg:grid-cols-4",
						children: audiences.map((audience) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "bg-espresso p-6 text-sm text-espresso-foreground",
							children: audience
						}, audience))
					})
				]
			})
		})
	] });
}
//#endregion
export { About as component };
