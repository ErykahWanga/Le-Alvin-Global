import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Mail, n as Phone } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as company, l as products, m as lealvin_company_profile_default } from "./router-CP75hrCL.mjs";
import { t as PageHero } from "./PageHero-CpgJaEBI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D0thOVfz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var beans_texture_jpg_asset_default = {
	version: 1,
	asset_id: "eb092598-ded7-420a-bf70-b0bc853b4643",
	project_id: "d6ae7088-8614-4b63-8221-8a749449f2b9",
	url: "/__l5e/assets-v1/eb092598-ded7-420a-bf70-b0bc853b4643/beans-texture.jpg",
	r2_key: "a/v1/d6ae7088-8614-4b63-8221-8a749449f2b9/eb092598-ded7-420a-bf70-b0bc853b4643/beans-texture.jpg",
	original_filename: "beans-texture.jpg",
	size: 1146263,
	content_type: "image/jpeg",
	created_at: "2026-08-12T14:35:37Z"
};
var grades = [
	"AA",
	"AB",
	"PB",
	"C",
	"TT",
	"T",
	"UG",
	"MH",
	"ML",
	"Robusta",
	"Custom"
];
var origins = [
	"Kenya",
	"Uganda",
	"Ethiopia",
	"Tanzania",
	"Burundi",
	"Multi-origin"
];
var packagingOptions = [
	"60kg jute",
	"70kg jute",
	"GrainPro lined",
	"1kg valve pouch",
	"250g / 500g retail",
	"Private label",
	"Bulk container"
];
var fieldClass = "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";
var labelClass = "eyebrow text-muted-foreground";
function QuoteForm() {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-6 sm:grid-cols-2",
		onSubmit: (event) => {
			event.preventDefault();
			const form = event.currentTarget;
			setSubmitting(true);
			window.setTimeout(() => {
				setSubmitting(false);
				form.reset();
				toast.success("Enquiry received", { description: "Our trade desk will respond with pricing and availability shortly." });
			}, 600);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labelClass,
					children: "Full name *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: "name",
					className: fieldClass,
					placeholder: "Jane Doe"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labelClass,
					children: "Company *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: "company",
					className: fieldClass,
					placeholder: "Company Ltd"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labelClass,
					children: "Country *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: "country",
					className: fieldClass,
					placeholder: "United Kingdom"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labelClass,
					children: "Email *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					type: "email",
					name: "email",
					className: fieldClass,
					placeholder: "you@company.com"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labelClass,
					children: "Phone"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "phone",
					className: fieldClass,
					placeholder: "+44 …"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labelClass,
					children: "Product of interest"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					name: "product",
					className: fieldClass,
					defaultValue: products[0]?.name,
					children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: product.name }, product.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labelClass,
					children: "Coffee origin"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					name: "origin",
					className: fieldClass,
					children: origins.map((origin) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: origin }, origin))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labelClass,
					children: "Grade"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					name: "grade",
					className: fieldClass,
					children: grades.map((grade) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: grade }, grade))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labelClass,
					children: "Quantity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "quantity",
					className: fieldClass,
					placeholder: "e.g. 2 x 20ft container"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labelClass,
					children: "Packaging requirement"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					name: "packaging",
					className: fieldClass,
					children: packagingOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: option }, option))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-2 sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: labelClass,
					children: "Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					name: "message",
					rows: 5,
					className: fieldClass,
					placeholder: "Tell us about your programme, target cup profile, shipment window and port of destination."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: submitting,
					className: "w-full rounded-sm bg-primary px-6 py-4 text-[0.7rem] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto",
					children: submitting ? "Sending…" : "Submit enquiry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					children: "Enquiries are reviewed by our trade desk. For urgent sourcing, call the numbers listed below."
				})]
			})
		]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Request a quote from our trade desk.",
		intro: "Share your requirement and we will come back with availability, samples and pricing delivered to your port of destination.",
		image: beans_texture_jpg_asset_default.url,
		imageAlt: "Close-up of roasted coffee beans"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.4fr_1fr] lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-clay",
					children: "Business enquiry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 font-display text-3xl leading-[1.1] sm:text-4xl",
					children: "Tell us what you need."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-sm border border-border bg-card p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "eyebrow text-muted-foreground",
						children: "Direct contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-4 text-sm",
						children: [
							company.phones.map((phone) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${phone.replace(/\s/g, "")}`,
									className: "hover:text-clay",
									children: phone
								})]
							}, phone)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Office ", company.office] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${company.email}`,
									className: "hover:text-clay",
									children: company.email
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border-t border-border pt-6 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: company.legalName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-muted-foreground",
								children: [
									company.ceoTitle,
									": ",
									company.ceo
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-muted-foreground",
								children: ["Nairobi, Kenya · ", company.website]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: lealvin_company_profile_default,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-8 inline-block border-b border-accent pb-1 text-[0.7rem] font-semibold tracking-[0.18em] text-clay uppercase",
						children: "Download company profile"
					})
				]
			})]
		})
	})] });
}
//#endregion
export { Contact as component };
