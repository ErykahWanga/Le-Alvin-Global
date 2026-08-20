import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as journey } from "./router-CP75hrCL.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/JourneySection-CIuwK3wF.js
var import_jsx_runtime = require_jsx_runtime();
function JourneySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-clay",
					children: "Our Journey"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-2xl font-display text-4xl leading-[1.05] sm:text-5xl",
					children: "From farm to port, under one roof."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
					children: [journey.map((stage, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: {
							duration: .5,
							delay: index % 4 * .06
						},
						className: "group bg-card p-8 transition-colors hover:bg-sand",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl text-accent",
								children: stage.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-xl",
								children: stage.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: stage.body
							})
						]
					}, stage.step)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "hidden bg-card p-8 lg:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Coffee Is Us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-2xl",
							children: "Quality Is Us."
						})]
					})]
				})
			]
		})
	});
}
//#endregion
export { JourneySection as t };
