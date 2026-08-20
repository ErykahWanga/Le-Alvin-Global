import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { p as sustainability } from "./router-CP75hrCL.mjs";
import { t as PageHero } from "./PageHero-CpgJaEBI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sustainability-CIS4jt9I.js
var import_jsx_runtime = require_jsx_runtime();
var farmers_default = "/assets/farmers-DwOJDBIc.jpg";
function Sustainability() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Sustainability & Community",
			title: "Growing communities. Sustaining coffee.",
			intro: "Coffee only has a future where farming has one. We train farmers, promote speciality production, support coffee revival and create openings for young people.",
			image: farmers_default,
			imageAlt: "Farmer training session on a coffee farm"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-clay",
						children: "Our commitments"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl",
						children: "Growing more than coffee."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 lg:grid-cols-3",
						children: sustainability.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-sm border border-border bg-card p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground",
								children: item.body
							})]
						}, item.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-espresso py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: farmers_default,
					alt: "Agronomist training coffee farmers",
					loading: "lazy",
					width: 1280,
					height: 960,
					className: "aspect-4/3 w-full rounded-sm object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Farmer support"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl leading-[1.1] sm:text-4xl",
						children: "Better farming makes better coffee."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-relaxed text-espresso-muted",
						children: "We work directly with farmers on agronomy, harvesting discipline and post-harvest handling, so that more of the crop reaches speciality standard and more of the value returns to the people who grew it. Improving availability and quality at the same time is what keeps Kenyan coffee competitive."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 divide-y divide-espresso-foreground/10 border-y border-espresso-foreground/10",
						children: [
							"Training and extension support for growers",
							"Promotion of speciality coffee production",
							"Initiatives to revive and improve coffee availability",
							"Opportunities for youth entering the coffee industry"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "py-4 text-sm text-espresso-foreground",
							children: item
						}, item))
					})
				] })]
			})
		})
	] });
}
//#endregion
export { Sustainability as component };
