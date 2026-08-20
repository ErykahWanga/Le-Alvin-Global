import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as markets } from "./router-CP75hrCL.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GlobalReach-DJzg3NN-.js
var import_jsx_runtime = require_jsx_runtime();
var kenya = markets[0];
function GlobalReach() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "surface-espresso relative overflow-hidden py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Global Reach"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl leading-[1.05] sm:text-5xl",
							children: "From East Africa to the World."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-espresso-muted",
							children: "We export Kenyan Arabica internationally and import Arabica from Burundi, Uganda, Tanzania and Ethiopia — supplying buyers according to their own requirements, with operations and partners spanning Kenya, Uganda, Ethiopia, the UAE and the UK."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mt-16 overflow-hidden rounded-sm border border-espresso-foreground/10 bg-espresso",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[16/9] w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldDots, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 100 56",
								className: "absolute inset-0 size-full",
								preserveAspectRatio: "none",
								"aria-hidden": true,
								children: markets.slice(1).map((market, index) => {
									const x1 = kenya.x;
									const y1 = kenya.y * .56;
									const x2 = market.x;
									const y2 = market.y * .56;
									const cx = (x1 + x2) / 2;
									const cy = Math.min(y1, y2) - 6;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
										d: `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`,
										fill: "none",
										stroke: "var(--gold)",
										strokeWidth: .25,
										strokeLinecap: "round",
										initial: {
											pathLength: 0,
											opacity: 0
										},
										whileInView: {
											pathLength: 1,
											opacity: .8
										},
										viewport: { once: true },
										transition: {
											duration: 1.4,
											delay: .2 + index * .25,
											ease: "easeInOut"
										}
									}, market.name);
								})
							}),
							markets.map((market, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								className: "absolute -translate-x-1/2 -translate-y-1/2",
								style: {
									left: `${market.x}%`,
									top: `${market.y}%`
								},
								initial: {
									opacity: 0,
									scale: .6
								},
								whileInView: {
									opacity: 1,
									scale: 1
								},
								viewport: { once: true },
								transition: {
									duration: .4,
									delay: .3 + index * .15
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex size-2.5 items-center justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute size-6 animate-ping rounded-full bg-gold/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-gold" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-4 left-1/2 -translate-x-1/2 text-center text-[0.6rem] tracking-[0.16em] whitespace-nowrap text-espresso-foreground uppercase",
									children: market.name
								})]
							}, market.name))
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px overflow-hidden rounded-sm border border-espresso-foreground/10 bg-espresso-foreground/10 sm:grid-cols-2 lg:grid-cols-5",
					children: markets.map((market) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-espresso p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg text-espresso-foreground",
							children: market.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-espresso-muted",
							children: market.role
						})]
					}, market.name))
				})
			]
		})
	});
}
/** Abstract dotted landmass field — a decorative stand-in for a world map. */
function WorldDots() {
	const dots = [];
	for (let row = 0; row < 26; row += 1) for (let col = 0; col < 46; col += 1) {
		const x = col / 45 * 100;
		const y = row / 25 * 100;
		if (x > 8 && x < 30 && y > 18 && y < 78 && Math.sin(x * .6) + Math.cos(y * .4) > -1.2 || x > 40 && x < 66 && y > 14 && y < 82 && Math.cos(x * .5) + Math.sin(y * .3) > -1.4 || x > 62 && x < 94 && y > 16 && y < 74 && Math.sin(x * .4) + Math.cos(y * .5) > -1.3) dots.push({
			x,
			y,
			o: .16 + row * col % 5 * .03
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0",
		"aria-hidden": true,
		children: dots.map((dot, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute size-[3px] rounded-full bg-espresso-foreground",
			style: {
				left: `${dot.x}%`,
				top: `${dot.y}%`,
				opacity: dot.o
			}
		}, index))
	});
}
//#endregion
export { GlobalReach as t };
