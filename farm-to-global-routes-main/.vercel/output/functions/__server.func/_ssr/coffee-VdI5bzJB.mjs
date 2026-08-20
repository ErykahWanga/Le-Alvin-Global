import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as grades, l as products } from "./router-CP75hrCL.mjs";
import { t as PageHero } from "./PageHero-CpgJaEBI.mjs";
import { t as green_coffee_default } from "./green-coffee-Cv-M9oHD.mjs";
import { i as useScroll, n as useSpring, r as useTransform, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coffee-VdI5bzJB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SPRITES = ["/assets/bean-a-CPWw2_nM.png", "/assets/bean-b-BnM5kIXH.png"];
/** Deterministic pseudo-random so SSR and client render the same field. */
function rand(seed) {
	const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
	return x - Math.floor(x);
}
function makeLayer(count, seed, min, max) {
	return Array.from({ length: count }, (_, i) => {
		const s = seed * 100 + i * 7;
		return {
			src: SPRITES[i % SPRITES.length],
			left: rand(s + 1) * 100,
			top: rand(s + 2) * 100,
			size: min + rand(s + 3) * (max - min),
			delay: -rand(s + 4) * 40,
			duration: 26 + rand(s + 5) * 26,
			spin: 18 + rand(s + 6) * 24,
			reverse: rand(s + 7) > .5
		};
	});
}
var LAYERS = [
	{
		beans: makeLayer(22, 1, 14, 26),
		blur: 5,
		opacity: .34,
		parallax: 40,
		spinBoost: 90
	},
	{
		beans: makeLayer(16, 2, 30, 52),
		blur: 1.6,
		opacity: .5,
		parallax: 90,
		spinBoost: 160
	},
	{
		beans: makeLayer(9, 3, 58, 96),
		blur: 0,
		opacity: .62,
		parallax: 160,
		spinBoost: 240
	}
];
/**
* Cinematic, scroll-reactive cloud of roasted coffee beans.
* Three depth layers drift and tumble continuously; scroll adds parallax and spin.
*/
function BeanField() {
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll();
	const smooth = useSpring(scrollYProgress, {
		stiffness: 60,
		damping: 24,
		mass: .5
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-espresso" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-70",
				style: { background: "radial-gradient(60% 45% at 50% 12%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%), radial-gradient(70% 60% at 82% 88%, color-mix(in oklab, var(--clay) 18%, transparent), transparent 72%)" }
			}),
			LAYERS.map((layer, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeanLayer, {
				layer,
				progress: smooth,
				reduced: Boolean(reduced)
			}, index)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(120% 90% at 50% 40%, transparent 0%, color-mix(in oklab, var(--espresso) 72%, transparent) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { backgroundColor: "color-mix(in oklab, var(--espresso) 45%, transparent)" }
			})
		]
	});
}
function BeanLayer({ layer, progress, reduced }) {
	const y = useTransform(progress, [0, 1], [0, reduced ? 0 : -layer.parallax]);
	const rotate = useTransform(progress, [0, 1], [0, reduced ? 0 : layer.spinBoost]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "absolute inset-[-12%]",
		style: {
			y,
			filter: layer.blur ? `blur(${layer.blur}px)` : void 0
		},
		children: layer.beans.map((bean, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "absolute block",
			style: {
				left: `${bean.left.toFixed(3)}%`,
				top: `${bean.top.toFixed(3)}%`,
				width: `${bean.size.toFixed(2)}px`,
				height: `${bean.size.toFixed(2)}px`,
				opacity: layer.opacity,
				rotate
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: bean.src,
				alt: "",
				loading: "lazy",
				decoding: "async",
				width: 816,
				height: 816,
				className: "size-full object-contain will-change-transform",
				style: reduced ? void 0 : {
					animationName: "bean-drift, bean-tumble",
					animationDuration: `${bean.duration.toFixed(2)}s, ${bean.spin.toFixed(2)}s`,
					animationTimingFunction: "ease-in-out, linear",
					animationDelay: `${bean.delay.toFixed(2)}s, ${bean.delay.toFixed(2)}s`,
					animationIterationCount: "infinite, infinite",
					animationDirection: `normal, ${bean.reverse ? "reverse" : "normal"}`
				}
			})
		}, i))
	});
}
function Coffee() {
	const [open, setOpen] = (0, import_react.useState)(products[0]?.slug ?? null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Our Coffee",
		title: "Origins, grades and formats — select what fits your programme.",
		intro: "We deal in a full range of Kenyan grades alongside imported East African Arabica and Ugandan Robusta, supplied as green beans or freshly roasted coffee.",
		image: green_coffee_default,
		imageAlt: "Jute sacks of Kenyan green coffee beans"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-espresso relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeanField, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative py-24 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-espresso-foreground/15 border-y border-espresso-foreground/15",
						children: products.map((product) => {
							const isOpen = open === product.slug;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpen(isOpen ? null : product.slug),
								"aria-expanded": isOpen,
								className: "flex w-full items-baseline justify-between gap-6 py-8 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl sm:text-4xl",
									children: product.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-xs tracking-wide text-espresso-muted",
									children: product.origin
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow shrink-0 text-gold",
									children: isOpen ? "Close" : "Details"
								})]
							}), isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-8 pb-10 lg:grid-cols-[1.2fr_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-espresso-muted lg:text-base",
										children: product.note
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex flex-wrap gap-2",
										children: product.grades.map((grade) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-sm bg-espresso-foreground/10 px-3 py-1.5 text-[0.65rem] tracking-[0.16em] text-espresso-foreground uppercase",
											children: grade
										}, grade))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "mt-8 inline-block rounded-sm bg-gold px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-gold-foreground uppercase transition-opacity hover:opacity-90",
										children: "Request quotation"
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "divide-y divide-espresso-foreground/15 rounded-sm border border-espresso-foreground/15 bg-espresso/70 p-6 backdrop-blur-sm",
									children: [
										["Processing", product.processing],
										["Availability", product.availability],
										["Packaging", product.packaging]
									].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-3 first:pt-0 last:pb-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-xs tracking-wide text-espresso-muted",
											children: label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 text-sm",
											children: value
										})]
									}, label))
								})]
							}) : null] }, product.slug);
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative pb-24 lg:pb-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Grade reference"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl",
							children: "The grades we deal in."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-px overflow-hidden rounded-sm border border-espresso-foreground/15 bg-espresso-foreground/15 sm:grid-cols-2 lg:grid-cols-5",
							children: grades.map((grade) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-espresso/80 p-6 backdrop-blur-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl text-gold",
									children: grade.code
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-espresso-muted",
									children: grade.note
								})]
							}, grade.code))
						})
					]
				})
			})
		]
	})] });
}
//#endregion
export { Coffee as component };
