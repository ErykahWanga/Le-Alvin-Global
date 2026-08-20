import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as maggie_estate_default } from "./maggie-estate-B8bZnajS.mjs";
import { t as PageHero } from "./PageHero-CpgJaEBI.mjs";
import { t as JourneySection } from "./JourneySection-CIuwK3wF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/farm-BmFzhFwV.js
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		title: "Grown",
		body: "Coffee cultivated on our own land, managed for cup quality rather than volume alone."
	},
	{
		title: "Harvested",
		body: "Ripe cherry selectively picked and moved quickly to processing."
	},
	{
		title: "Processed",
		body: "Pulped, fermented, washed and dried under our own supervision."
	},
	{
		title: "Marketed",
		body: "Our own produce marketed directly to buyers, with full traceability."
	}
];
function Farm() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our Farm",
			title: "Maggie Estate — where our coffee story starts.",
			intro: "We do not only buy coffee from others. At Maggie Estate we grow it, harvest it, process it and market our own produce.",
			image: maggie_estate_default,
			imageAlt: "Maggie Estate coffee farm"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: maggie_estate_default,
					alt: "Rows of coffee trees at Maggie Estate",
					loading: "lazy",
					width: 1280,
					height: 960,
					className: "aspect-4/5 w-full rounded-sm object-cover shadow-elevated"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-clay",
						children: "From our estate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl leading-[1.1] sm:text-4xl",
						children: "Owning the origin changes what we can promise."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base",
						children: "Because we farm as well as trade, we understand a lot before it is ever offered to a buyer: how it was picked, how it was processed, how it dried and how it cups. That knowledge carries into everything we source at auction and import from the region."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 divide-y divide-border border-y border-border",
						children: pillars.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg",
								children: pillar.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: pillar.body
							})]
						}, pillar.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-10 inline-block rounded-sm bg-primary px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90",
						children: "Request estate samples"
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneySection, {})
	] });
}
//#endregion
export { Farm as component };
