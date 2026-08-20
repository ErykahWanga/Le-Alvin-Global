import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as audiences } from "./router-CP75hrCL.mjs";
import { t as PageHero } from "./PageHero-CpgJaEBI.mjs";
import { t as logistics_default } from "./logistics-BvYexlOb.mjs";
import { t as GlobalReach } from "./GlobalReach-DJzg3NN-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/global-reach-DlzGoW5t.js
var import_jsx_runtime = require_jsx_runtime();
function GlobalReachPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Global Reach",
			title: "Exporters and importers of coffee, internationally.",
			intro: "We export Kenyan original Arabica around the world and import Arabica from Burundi, Uganda, Tanzania and Ethiopia, exporting according to customer requirements.",
			image: logistics_default,
			imageAlt: "International container port"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalReach, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-clay",
						children: "Who we work with"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl",
						children: "One supplier, several markets."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: audiences.map((audience) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-sm border border-border bg-card p-6 text-sm",
							children: audience
						}, audience))
					})
				]
			})
		})
	] });
}
//#endregion
export { GlobalReachPage as component };
