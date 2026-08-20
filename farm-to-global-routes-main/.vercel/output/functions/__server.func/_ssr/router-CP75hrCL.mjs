import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as Mail, i as MapPin, n as Phone, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CP75hrCL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-CCLCTJSM.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var lealvin_company_profile_default = "/assets/lealvin-company-profile-DMEOQ9vn.pdf";
var company = {
	brand: "LeAlvin Global",
	legalName: "Le Alvin Enterprises Limited",
	tradingName: "Le-Alvin Coffee",
	tagline: "African Origin. Global Reach. Exceptional Coffee.",
	slogan: "Coffee Is Us. Quality Is Us.",
	ceo: "Margaret Njeri",
	ceoTitle: "CEO / Managing Director",
	email: "info@lealvins.com",
	website: "www.lealvins.com",
	phones: ["+254 722 152 087", "+254 722 646 290"],
	office: "0783 180 770"
};
var navigation = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About Us",
		to: "/about"
	},
	{
		label: "Our Coffee",
		to: "/coffee"
	},
	{
		label: "Our Farm",
		to: "/farm"
	},
	{
		label: "What We Do",
		to: "/what-we-do"
	},
	{
		label: "Global Reach",
		to: "/global-reach"
	},
	{
		label: "Sustainability",
		to: "/sustainability"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var products = [
	{
		slug: "kenyan-arabica",
		name: "Kenyan Arabica",
		origin: "Kenya — sourced at auction & Maggie Estate",
		grades: [
			"AA",
			"AB",
			"PB",
			"C",
			"TT",
			"T",
			"MH",
			"ML"
		],
		processing: "Fully washed",
		availability: "Main crop & fly crop, subject to auction cycles",
		packaging: "60kg / 70kg jute with GrainPro liner, or to specification",
		note: "Bright, structured Kenyan profile with blackcurrant and citrus character."
	},
	{
		slug: "ugandan-arabica",
		name: "Ugandan Arabica",
		origin: "Uganda — imported for onward export",
		grades: [
			"AA",
			"AB",
			"PB",
			"UG"
		],
		processing: "Washed & natural",
		availability: "Year-round, contract dependent",
		packaging: "60kg jute or customer specification",
		note: "Rounded, sweet cup — an excellent blend component alongside Kenyan lots."
	},
	{
		slug: "ugandan-robusta",
		name: "Ugandan Robusta",
		origin: "Uganda",
		grades: [
			"Screen 18",
			"Screen 15",
			"Robusta FAQ"
		],
		processing: "Natural / dry processed",
		availability: "Year-round, volume contracts welcome",
		packaging: "60kg jute, bulk container or customer specification",
		note: "Full-bodied and high yielding — built for espresso bases and volume blends."
	},
	{
		slug: "east-african-origins",
		name: "East African Origins",
		origin: "Burundi, Tanzania, Ethiopia",
		grades: [
			"AA",
			"AB",
			"PB",
			"Grade 1",
			"Grade 2"
		],
		processing: "Washed & natural",
		availability: "Seasonal, sourced against customer requirement",
		packaging: "As per contract",
		note: "Imported Arabica lots that let us build multi-origin programmes from one supplier."
	},
	{
		slug: "green-coffee",
		name: "Green Coffee Beans",
		origin: "Kenya & East Africa",
		grades: [
			"AA",
			"AB",
			"PB",
			"C",
			"TT",
			"T",
			"UG",
			"MH",
			"ML",
			"Robusta"
		],
		processing: "Milled, graded and cup-cleared before shipment",
		availability: "Continuous — bulking to container quantities",
		packaging: "Jute, GrainPro, bulk bag or private label",
		note: "Our core export line for importers, traders and roasting operations."
	},
	{
		slug: "roasted-coffee",
		name: "Freshly Roasted Coffee",
		origin: "Roasted in Kenya to your profile",
		grades: [
			"Single origin",
			"House blend",
			"Custom blend"
		],
		processing: "Roast-to-order, whole bean or ground",
		availability: "Weekly roast schedule",
		packaging: "250g / 500g / 1kg valve pouch, private label available",
		note: "For cafés, hospitality, offices and fresh home cup deliveries."
	}
];
var grades = [
	{
		code: "AA",
		note: "Largest screen size, premium Kenyan lots"
	},
	{
		code: "AB",
		note: "Workhorse Kenyan grade, consistent volume"
	},
	{
		code: "PB",
		note: "Peaberry — single rounded bean, concentrated cup"
	},
	{
		code: "C",
		note: "Smaller screen, blend-friendly"
	},
	{
		code: "TT",
		note: "Lighter bean separated from AA/AB"
	},
	{
		code: "T",
		note: "Fines and small fragments"
	},
	{
		code: "UG",
		note: "Ungraded lots to specification"
	},
	{
		code: "MH",
		note: "Mbuni heavy — natural processed"
	},
	{
		code: "ML",
		note: "Mbuni light — natural processed"
	},
	{
		code: "Robusta",
		note: "Ugandan Robusta, screen graded"
	}
];
var services = [
	{
		title: "Bulking",
		body: "Combining and preparing coffee quantities to meet commercial and container requirements."
	},
	{
		title: "Blending",
		body: "Creating blends to your specification, balanced and repeated lot after lot."
	},
	{
		title: "Roasting",
		body: "Freshly roasted coffee produced to your profile, whole bean or ground."
	},
	{
		title: "Packing",
		body: "Preparing coffee for delivery and commercial distribution in the format you need."
	},
	{
		title: "General Supply",
		body: "Supplying coffee according to customer requirements, from sample to repeat contract."
	},
	{
		title: "Fresh Home Cup Deliveries",
		body: "Regular roasted coffee deliveries for homes, offices and hospitality clients."
	}
];
var journey = [
	{
		step: "01",
		title: "Grow",
		body: "Coffee cultivated at Maggie Estate and sourced from farmers across Kenya's growing regions."
	},
	{
		step: "02",
		title: "Harvest",
		body: "Selective picking of ripe cherry, delivered fast to the wet mill to protect the cup."
	},
	{
		step: "03",
		title: "Process",
		body: "Pulping, fermentation, washing and drying, then milling and grading into export lots."
	},
	{
		step: "04",
		title: "Cup & Quality Check",
		body: "Certified liquorers sample and cup every lot in our in-house taste lab before it is cleared."
	},
	{
		step: "05",
		title: "Roast, Blend & Pack",
		body: "Bulking, blending, roasting and packing — including private label and custom packaging."
	},
	{
		step: "06",
		title: "Logistics",
		body: "Documentation and freight coordinated with our logistics partners for on-time sailing."
	},
	{
		step: "07",
		title: "Global Delivery",
		body: "Delivered to your port of destination, on schedule and to contract specification."
	}
];
var quality = [
	{
		title: "In-House Taste Lab",
		body: "A professional cupping laboratory inside our own operation."
	},
	{
		title: "Certified Liquorers",
		body: "Qualified tasters score every sample against your brief."
	},
	{
		title: "Sample Cupping",
		body: "Pre-shipment samples so you approve the cup before it ships."
	},
	{
		title: "Quality Assurance",
		body: "Attention to detail from cherry to container, lot by lot."
	},
	{
		title: "Regulatory Compliance",
		body: "Licensed dealer operating to coffee regulatory rules."
	}
];
var markets = [
	{
		name: "Kenya",
		role: "Origin, sourcing, milling & export",
		x: 60.5,
		y: 62
	},
	{
		name: "Uganda",
		role: "Arabica & Robusta sourcing",
		x: 57.5,
		y: 58.5
	},
	{
		name: "Ethiopia",
		role: "Arabica sourcing",
		x: 62.5,
		y: 52
	},
	{
		name: "UAE",
		role: "Regional trade & distribution",
		x: 63.5,
		y: 44
	},
	{
		name: "United Kingdom",
		role: "European market access",
		x: 47.5,
		y: 24
	}
];
var audiences = [
	"International coffee buyers",
	"Green coffee importers",
	"Roasting companies",
	"Cafés & hospitality groups",
	"Distributors & wholesalers",
	"Private label businesses",
	"Specialty coffee buyers"
];
var sustainability = [
	{
		title: "Empowering Farmers",
		body: "Training and supporting farmers to improve speciality coffee production and returns."
	},
	{
		title: "Reviving Coffee",
		body: "Backing initiatives focused on revitalising coffee production and availability."
	},
	{
		title: "Empowering Youth",
		body: "Creating opportunities and encouraging young people to build careers in coffee."
	}
];
var roastLevels = [
	{
		id: "green",
		label: "Green (Unroasted)",
		note: "Milled, graded and cup-cleared for importers and roasters."
	},
	{
		id: "light",
		label: "Light Roast",
		note: "City roast — protects Kenyan acidity, blackcurrant and citrus."
	},
	{
		id: "medium",
		label: "Medium Roast",
		note: "Full City — balanced sweetness, caramel and cocoa body."
	},
	{
		id: "dark",
		label: "Dark Roast",
		note: "Vienna / French — bold, low acidity, espresso-forward."
	}
];
var packSizes = [
	{
		id: "60kg",
		label: "60kg jute",
		note: "Standard export bag, GrainPro liner available",
		moq: "1 x 20ft container"
	},
	{
		id: "30kg",
		label: "30kg carton",
		note: "Sample-to-mid volume roasted or green",
		moq: "500 kg"
	},
	{
		id: "1kg",
		label: "1kg valve pouch",
		note: "Roasted whole bean or ground",
		moq: "200 units"
	},
	{
		id: "500g",
		label: "500g valve pouch",
		note: "Retail & private label",
		moq: "300 units"
	},
	{
		id: "250g",
		label: "250g valve pouch",
		note: "Retail, café & gifting",
		moq: "500 units"
	}
];
var catalog = [
	{
		sku: "LA-KE-AA",
		name: "Kenya AA Washed",
		origin: "Nyeri, Kirinyaga & Maggie Estate, Kenya",
		altitude: "1,700 – 1,900 m",
		process: "Fully washed, sun dried on raised beds",
		grades: [
			"AA",
			"AB",
			"PB"
		],
		roasts: [
			"green",
			"light",
			"medium"
		],
		packs: [
			"60kg",
			"30kg",
			"1kg",
			"500g",
			"250g"
		],
		cup: "Blackcurrant, grapefruit, brown sugar — 86+ score",
		moisture: "10.5 – 11.5%",
		screen: "Screen 17/18",
		availability: "Main crop Oct–Feb, fly crop May–Jul",
		certification: "Licensed dealer lots, cup-cleared by certified liquorers"
	},
	{
		sku: "LA-KE-AB",
		name: "Kenya AB Washed",
		origin: "Kenyan auction lots, multi-region",
		altitude: "1,500 – 1,800 m",
		process: "Fully washed",
		grades: [
			"AB",
			"C",
			"TT"
		],
		roasts: [
			"green",
			"light",
			"medium",
			"dark"
		],
		packs: [
			"60kg",
			"30kg",
			"1kg",
			"500g"
		],
		cup: "Plum, citrus, cocoa — structured and consistent",
		moisture: "10.5 – 11.5%",
		screen: "Screen 15/16",
		availability: "Year-round, auction cycle dependent",
		certification: "Cup-cleared, pre-shipment sample approval"
	},
	{
		sku: "LA-KE-PB",
		name: "Kenya Peaberry",
		origin: "Kenya — selected estate & cooperative lots",
		altitude: "1,600 – 1,900 m",
		process: "Fully washed",
		grades: ["PB"],
		roasts: [
			"green",
			"light",
			"medium"
		],
		packs: [
			"60kg",
			"30kg",
			"1kg",
			"250g"
		],
		cup: "Concentrated, syrupy, red berry and bergamot",
		moisture: "10.5 – 11.5%",
		screen: "Peaberry separation",
		availability: "Limited, allocated per contract",
		certification: "Single-lot traceable"
	},
	{
		sku: "LA-KE-MBUNI",
		name: "Kenya Mbuni Natural",
		origin: "Kenya — MH / ML naturals",
		altitude: "1,400 – 1,800 m",
		process: "Natural / dry processed",
		grades: [
			"MH",
			"ML",
			"UG"
		],
		roasts: [
			"green",
			"medium",
			"dark"
		],
		packs: ["60kg", "30kg"],
		cup: "Sweet, fruit-forward, heavy body — blend and volume base",
		moisture: "11 – 12%",
		screen: "Mixed screen",
		availability: "Seasonal, volume contracts",
		certification: "Graded and cleared before shipment"
	},
	{
		sku: "LA-UG-ARB",
		name: "Uganda Arabica",
		origin: "Mt. Elgon & Rwenzori, Uganda",
		altitude: "1,500 – 2,100 m",
		process: "Washed & natural",
		grades: [
			"AA",
			"AB",
			"PB",
			"UG"
		],
		roasts: [
			"green",
			"medium",
			"dark"
		],
		packs: [
			"60kg",
			"30kg",
			"1kg"
		],
		cup: "Rounded, sweet, milk-chocolate — strong blend component",
		moisture: "10.5 – 12%",
		screen: "Screen 15+",
		availability: "Year-round, contract dependent",
		certification: "Imported for onward export, documented origin"
	},
	{
		sku: "LA-UG-ROB",
		name: "Uganda Robusta Screen 18",
		origin: "Central & Western Uganda",
		altitude: "1,100 – 1,500 m",
		process: "Natural / dry processed",
		grades: [
			"Screen 18",
			"Screen 15",
			"Robusta FAQ"
		],
		roasts: ["green", "dark"],
		packs: ["60kg", "30kg"],
		cup: "Full-bodied, nutty, high yield — espresso base",
		moisture: "12 – 13%",
		screen: "Screen 18 / 15",
		availability: "Year-round, container volumes",
		certification: "FAQ and screen-graded to contract"
	},
	{
		sku: "LA-EA-MULTI",
		name: "East African Multi-Origin",
		origin: "Burundi, Tanzania & Ethiopia",
		altitude: "1,400 – 2,000 m",
		process: "Washed & natural",
		grades: [
			"AA",
			"AB",
			"PB",
			"Grade 1",
			"Grade 2"
		],
		roasts: [
			"green",
			"light",
			"medium"
		],
		packs: [
			"60kg",
			"30kg",
			"1kg",
			"500g"
		],
		cup: "Floral to stone fruit depending on origin and season",
		moisture: "10.5 – 11.5%",
		screen: "Per origin standard",
		availability: "Seasonal, sourced against requirement",
		certification: "Origin documentation per shipment"
	},
	{
		sku: "LA-RO-HOUSE",
		name: "LeAlvin House Blend (Roasted)",
		origin: "Kenya + East African blend, roasted in Kenya",
		altitude: "Blend of 1,400 – 1,900 m lots",
		process: "Roast-to-order, whole bean or ground",
		grades: [
			"House blend",
			"Custom blend",
			"Single origin"
		],
		roasts: [
			"light",
			"medium",
			"dark"
		],
		packs: [
			"1kg",
			"500g",
			"250g"
		],
		cup: "Chocolate, toasted almond, dried fruit finish",
		moisture: "Roasted, < 5%",
		screen: "Blend specification",
		availability: "Weekly roast schedule",
		certification: "Private label & custom packaging available"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "surface-espresso",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-4 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl tracking-[0.18em]",
								children: "LEALVIN"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow mt-1 text-gold",
								children: "Global"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md font-display text-2xl text-balance-tight",
							children: company.slogan
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-md text-sm leading-relaxed text-espresso-muted",
							children: [
								company.legalName,
								", trading as ",
								company.tradingName,
								" — a licensed Kenyan coffee dealer sourcing, processing, packaging and exporting East African coffee worldwide."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: lealvin_company_profile_default,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-6 inline-block border-b border-gold pb-1 text-[0.7rem] font-semibold tracking-[0.18em] text-gold uppercase",
							children: "Download company profile"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "eyebrow text-gold",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3",
					children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-sm text-espresso-muted transition-colors hover:text-gold",
						children: item.label
					}) }, item.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "eyebrow text-gold",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-4 text-sm text-espresso-muted",
					children: [
						company.phones.map((phone) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${phone.replace(/\s/g, "")}`,
								className: "hover:text-gold",
								children: phone
							})]
						}, phone)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Office ", company.office] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${company.email}`,
								className: "hover:text-gold",
								children: company.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nairobi, Kenya" })]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-espresso-foreground/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-espresso-muted sm:flex-row sm:items-center sm:justify-between lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.legalName,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					company.ceoTitle,
					": ",
					company.ceo,
					" · ",
					company.website
				] })]
			})
		})]
	});
}
var lealvin_mark_default = "/assets/lealvin-mark-DDUnwyWa.png";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-colors duration-500", scrolled || open ? "surface-espresso border-b border-espresso-foreground/10 backdrop-blur" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative flex size-11 items-center justify-center overflow-hidden rounded-full border border-gold/40 bg-espresso shadow-elevated transition-transform duration-500 group-hover:scale-105",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: lealvin_mark_default,
							alt: "Le Alvin Coffee emblem",
							width: 156,
							height: 130,
							className: "size-full scale-[1.35] object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl tracking-[0.18em] text-espresso-foreground",
							children: "LEALVIN"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow mt-1 text-gold",
							children: "Global"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 xl:flex",
					children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-[0.8rem] font-medium tracking-wide text-espresso-foreground/70 transition-colors hover:text-gold",
						activeProps: { className: "text-gold" },
						activeOptions: { exact: item.to === "/" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "hidden rounded-sm bg-gold px-5 py-3 text-[0.7rem] font-semibold tracking-[0.18em] text-gold-foreground uppercase transition-opacity hover:opacity-90 sm:inline-block",
						children: "Request a Quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						className: "flex size-11 items-center justify-center rounded-sm border border-espresso-foreground/20 text-espresso-foreground xl:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "surface-espresso border-t border-espresso-foreground/10 xl:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto grid max-w-7xl gap-1 px-5 py-6 lg:px-10",
				children: [navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "border-b border-espresso-foreground/10 py-3 font-display text-2xl text-espresso-foreground",
					activeProps: { className: "text-gold" },
					activeOptions: { exact: item.to === "/" },
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-4 rounded-sm bg-gold px-5 py-4 text-center text-[0.7rem] font-semibold tracking-[0.18em] text-gold-foreground uppercase",
					children: "Request a Quote"
				})]
			})
		}) : null]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-[0.7rem] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-sm border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "LeAlvin Global — East African Coffee Export & Trade" },
			{
				name: "description",
				content: "LeAlvin Global sources, processes, roasts, packs and exports Kenyan and East African coffee to buyers worldwide."
			},
			{
				name: "author",
				content: "Le Alvin Enterprises Limited"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=DM+Sans:wght@400;500;700&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-lapqEF0I.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "LeAlvin Global — African Origin. Global Reach. Exceptional Coffee." },
		{
			name: "description",
			content: "Licensed Kenyan coffee dealer sourcing, processing, roasting, packing and exporting Kenyan and East African coffee to international buyers."
		},
		{
			property: "og:title",
			content: "LeAlvin Global — East African Coffee Export & Trade"
		},
		{
			property: "og:description",
			content: "From Maggie Estate and the Kenyan auction to your port of destination — green and roasted coffee, cup-cleared by certified liquorers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-BhI7e9DR.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About LeAlvin Global — Licensed Kenyan Coffee Dealer & Exporter" },
		{
			name: "description",
			content: "Le Alvin Enterprises Limited, trading as Le-Alvin Coffee: a licensed Kenyan coffee dealer sourcing at auction, growing at Maggie Estate and exporting worldwide."
		},
		{
			property: "og:title",
			content: "About LeAlvin Global"
		},
		{
			property: "og:description",
			content: "Who we are: a registered Kenyan coffee dealer, exporter and importer built around quality and international trade."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./catalog-CuTjYls7.mjs");
var Route$6 = createFileRoute("/catalog")({
	head: () => ({ meta: [
		{ title: "B2B Coffee Catalog — Roasts, Grades & Pack Sizes | LeAlvin Global" },
		{
			name: "description",
			content: "Browse the LeAlvin Global wholesale coffee catalog: Kenyan and East African lots by roast level, grade and pack size, with downloadable specification sheets."
		},
		{
			property: "og:title",
			content: "B2B Coffee Catalog — LeAlvin Global"
		},
		{
			property: "og:description",
			content: "Filter Kenyan Arabica, Ugandan Robusta and multi-origin lots by roast, grade and packaging, then download spec sheets for your buying team."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./coffee-VdI5bzJB.mjs");
var Route$5 = createFileRoute("/coffee")({
	head: () => ({ meta: [
		{ title: "Our Coffee — Kenyan Arabica, Ugandan Robusta & Green Coffee Grades" },
		{
			name: "description",
			content: "Kenyan Arabica AA, AB, PB, C, TT, T, UG, MH, ML and Ugandan Robusta — green and freshly roasted coffee supplied to international buyers."
		},
		{
			property: "og:title",
			content: "Our Coffee — LeAlvin Global"
		},
		{
			property: "og:description",
			content: "Explore origins, grades, processing and packaging options, then request a quotation for your programme."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-D0thOVfz.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Request a Quote — Contact LeAlvin Global Coffee Trade Desk" },
		{
			name: "description",
			content: "Tell us your origin, grade, quantity and packaging requirement and our trade desk will respond with samples, availability and pricing to your port."
		},
		{
			property: "og:title",
			content: "Request a Quote — LeAlvin Global"
		},
		{
			property: "og:description",
			content: "Contact our coffee trade desk in Nairobi for green and roasted coffee enquiries."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./farm-BmFzhFwV.mjs");
var Route$3 = createFileRoute("/farm")({
	head: () => ({ meta: [
		{ title: "Maggie Estate — Our Own Coffee Farm in Kenya | LeAlvin Global" },
		{
			name: "description",
			content: "At Maggie Estate we grow, harvest, process and market our own Kenyan coffee — the origin story behind every LeAlvin Global shipment."
		},
		{
			property: "og:title",
			content: "Maggie Estate — LeAlvin Global"
		},
		{
			property: "og:description",
			content: "Grown, harvested, processed and marketed by us: the farm at the centre of our coffee story."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./global-reach-DlzGoW5t.mjs");
var Route$2 = createFileRoute("/global-reach")({
	head: () => ({ meta: [
		{ title: "Global Reach — Exporting Kenyan Coffee Worldwide | LeAlvin Global" },
		{
			name: "description",
			content: "Exporters and importers of coffee internationally: Kenyan Arabica exports, East African sourcing and operations spanning Kenya, Uganda, Ethiopia, the UAE and the UK."
		},
		{
			property: "og:title",
			content: "Global Reach — LeAlvin Global"
		},
		{
			property: "og:description",
			content: "From East Africa to the world — international coffee export and import."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./sustainability-CIS4jt9I.mjs");
var Route$1 = createFileRoute("/sustainability")({
	head: () => ({ meta: [
		{ title: "Sustainability & Community — Farmer and Youth Empowerment" },
		{
			name: "description",
			content: "Training farmers, promoting speciality coffee production, reviving coffee availability and empowering youth in the Kenyan coffee industry."
		},
		{
			property: "og:title",
			content: "Sustainability & Community — LeAlvin Global"
		},
		{
			property: "og:description",
			content: "Growing communities, sustaining coffee: farmers, youth and speciality production."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./what-we-do-Bzu6mqiz.mjs");
var Route = createFileRoute("/what-we-do")({
	head: () => ({ meta: [
		{ title: "What We Do — Bulking, Blending, Roasting, Packing & Export" },
		{
			name: "description",
			content: "Bulking, blending, roasting, packing, general supply and fresh home cup deliveries — plus private label packaging and international logistics coordination."
		},
		{
			property: "og:title",
			content: "What We Do — LeAlvin Global"
		},
		{
			property: "og:description",
			content: "Coffee services from bulking and blending to roasting, packing, private label and delivery to your port of destination."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$9
	}),
	CatalogRoute: Route$6.update({
		id: "/catalog",
		path: "/catalog",
		getParentRoute: () => Route$9
	}),
	CoffeeRoute: Route$5.update({
		id: "/coffee",
		path: "/coffee",
		getParentRoute: () => Route$9
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$9
	}),
	FarmRoute: Route$3.update({
		id: "/farm",
		path: "/farm",
		getParentRoute: () => Route$9
	}),
	GlobalReachRoute: Route$2.update({
		id: "/global-reach",
		path: "/global-reach",
		getParentRoute: () => Route$9
	}),
	SustainabilityRoute: Route$1.update({
		id: "/sustainability",
		path: "/sustainability",
		getParentRoute: () => Route$9
	}),
	WhatWeDoRoute: Route.update({
		id: "/what-we-do",
		path: "/what-we-do",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { grades as a, packSizes as c, roastLevels as d, services as f, company as i, products as l, lealvin_company_profile_default as m, audiences as n, journey as o, sustainability as p, catalog as r, markets as s, router_exports as t, quality as u };
