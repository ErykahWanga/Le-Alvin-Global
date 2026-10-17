/**
 * Beanie's brain. Every answer is assembled from `@/data/site`, so the chatbot
 * can never drift out of sync with the website: edit the data once and both
 * the pages and the chat update.
 *
 * No API key or server needed. To upgrade to an LLM later, replace `getReply`
 * with a call to a server function and keep the same `BotReply` shape.
 */
import {
  audiences,
  awards,
  catalog,
  company,
  departmentEmails,
  faqs,
  grades,
  journey,
  licences,
  markets,
  packSizes,
  products,
  quality,
  roastLevels,
  services,
  sustainability,
  warehouse,
  whatsapp,
  whatsappLink,
} from "@/data/site";

export type ChatRoute =
  | "/"
  | "/about"
  | "/catalog"
  | "/coffee"
  | "/contact"
  | "/farm"
  | "/global-reach"
  | "/sustainability"
  | "/what-we-do";

export type ChatAction = {
  label: string;
  kind: "route" | "whatsapp";
  to?: ChatRoute;
  href?: string;
};

export type BotReply = {
  text: string;
  actions?: ChatAction[];
  suggestions?: string[];
};

const route = (label: string, to: ChatRoute): ChatAction => ({ label, kind: "route", to });
const wa = (label: string, message?: string): ChatAction => ({
  label,
  kind: "whatsapp",
  href: whatsappLink(message),
});

const bullets = (lines: readonly string[]) => lines.map((line) => `• ${line}`).join("\n");
const emailFor = (label: string) =>
  departmentEmails.find((dept) => dept.label === label)?.email ?? company.email;

export const starterSuggestions = [
  "What coffees do you export?",
  "Coffee grades",
  "Packaging & minimum orders",
  "How do I get a quote?",
  "Talk to the team on WhatsApp",
] as const;

export const greeting: BotReply = {
  text: `Hello, and welcome to ${company.brand}! ☕ I'm Beanie, your coffee concierge.\n\nAsk me about our Kenyan & East African coffees, grades, packaging, shipping or samples — or I can connect you straight to the team on WhatsApp.`,
  suggestions: [...starterSuggestions],
};

const fallback = (question: string): BotReply => ({
  text: "I haven't brewed an answer to that one yet. Our trade desk can help with anything specific — message them on WhatsApp (I'll pre-fill your question) or send a quote request.",
  actions: [
    wa(
      "Ask the team on WhatsApp",
      `Hello LeAlvin Global, I was chatting with Beanie on your website. My question: "${question}"`,
    ),
    route("Request a quote", "/contact"),
  ],
  suggestions: [...starterSuggestions],
});

/* ------------------------------------------------------------------ */
/* Matching                                                            */
/* ------------------------------------------------------------------ */

const normalise = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** Short terms (aa, pb, ug…) must match whole words; longer ones match word prefixes. */
const matches = (text: string, term: string) =>
  new RegExp(term.length <= 3 ? `\\b${term}\\b` : `\\b${term}`).test(text);

type Intent = {
  id: string;
  keywords: string[];
  /** Added to the score whenever at least one keyword matches. */
  boost?: number;
  maxWords?: number;
  reply: (question: string) => BotReply;
};

const catalogReply = (sku: string): BotReply => {
  const item = catalog.find((entry) => entry.sku === sku);
  if (!item) return fallback(sku);
  return {
    text: `${item.name}\n\n${bullets([
      `Origin: ${item.origin}`,
      `Altitude: ${item.altitude}`,
      `Process: ${item.process}`,
      `Cup: ${item.cup}`,
      `Grades: ${item.grades.join(", ")}`,
      `Availability: ${item.availability}`,
    ])}`,
    actions: [route("See full catalog", "/catalog"), route("Request a quote", "/contact")],
    suggestions: ["Packaging & minimum orders", "How do I get a sample?", "How do I get a quote?"],
  };
};

const catalogIntents: Intent[] = [
  { sku: "LA-KE-AA", keywords: ["kenya aa", "kenyan aa", "aa washed"] },
  { sku: "LA-KE-AB", keywords: ["kenya ab", "kenyan ab", "ab washed"] },
  { sku: "LA-KE-PB", keywords: ["peaberry", "kenya pb"] },
  { sku: "LA-KE-MBUNI", keywords: ["mbuni", "natural kenya"] },
  { sku: "LA-UG-ARB", keywords: ["uganda arabica", "ugandan arabica"] },
  { sku: "LA-UG-ROB", keywords: ["robusta"] },
  {
    sku: "LA-EA-MULTI",
    keywords: ["multi origin", "burundi", "tanzania", "ethiopia", "east african"],
  },
  { sku: "LA-RO-HOUSE", keywords: ["house blend"] },
].map(({ sku, keywords }) => ({
  id: `catalog-${sku}`,
  keywords,
  boost: 2,
  reply: () => catalogReply(sku),
}));

const intents: Intent[] = [
  {
    id: "greeting",
    keywords: [
      "hi",
      "hello",
      "hey",
      "habari",
      "jambo",
      "good morning",
      "good afternoon",
      "good evening",
    ],
    maxWords: 4,
    reply: () => ({
      text: "Hello! ☕ Lovely to meet you. What would you like to know about LeAlvin coffee?",
      suggestions: [...starterSuggestions],
    }),
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "asante", "cheers", "bye", "goodbye"],
    maxWords: 6,
    reply: () => ({
      text: `You're most welcome! ${company.slogan} ☕\nI'm here whenever you fancy another cup of conversation.`,
      suggestions: ["How do I get a quote?", "Talk to the team on WhatsApp"],
    }),
  },
  {
    id: "human",
    keywords: [
      "whatsapp",
      "human",
      "person",
      "agent",
      "speak",
      "talk",
      "call",
      "representative",
      "team",
      "someone",
    ],
    boost: 1,
    reply: (question) => ({
      text: `Of course — the team replies fastest on WhatsApp: ${whatsapp.display}. Tap below and your message is already written for you.`,
      actions: [
        wa(
          "Open WhatsApp",
          `Hello LeAlvin Global, I was chatting with Beanie on your website and would like to speak with the team. (${question})`,
        ),
        route("Send a quote request", "/contact"),
      ],
      suggestions: ["Contact details", "How do I get a quote?"],
    }),
  },
  {
    id: "quote",
    keywords: [
      "quote",
      "quotation",
      "price",
      "pricing",
      "cost",
      "how much",
      "order",
      "buy",
      "purchase",
      "fob",
      "cif",
      "rates",
    ],
    boost: 2,
    reply: () => ({
      text: "Pricing depends on origin, grade, quantity, packaging and your port of destination, so our trade desk quotes each requirement individually.\n\nShare those details in the quote form (or on WhatsApp) and you'll receive availability, samples and pricing delivered to your port.",
      actions: [route("Request a quote", "/contact"), wa("Quote on WhatsApp")],
      suggestions: ["How do I get a sample?", "Packaging & minimum orders", "Coffee grades"],
    }),
  },
  {
    id: "samples",
    keywords: ["sample", "samples", "cupping", "cup score", "taste before"],
    boost: 2,
    reply: () => {
      const cupping = quality.find((q) => q.title === "Sample Cupping");
      return {
        text: `${cupping?.body ?? "Pre-shipment samples so you approve the cup before it ships."}\n\nEvery lot is cupped in our in-house taste lab by certified liquorers. To request samples, use the quote form or email our Samples Office: ${emailFor("Samples Office")}.`,
        actions: [route("Request samples", "/contact"), wa("Samples on WhatsApp")],
        suggestions: ["How do you ensure quality?", "How do I get a quote?"],
      };
    },
  },
  {
    id: "products",
    keywords: [
      "coffees",
      "coffee do you",
      "products",
      "product",
      "range",
      "sell",
      "supply",
      "what do you have",
      "available",
      "origins",
    ],
    reply: () => ({
      text: `Our core ranges:\n\n${bullets(products.map((p) => `${p.name} — ${p.note}`))}`,
      actions: [route("Browse our coffee", "/coffee"), route("Full catalog", "/catalog")],
      suggestions: ["Coffee grades", "Roast levels", "Packaging & minimum orders"],
    }),
  },
  {
    id: "kenya",
    keywords: ["kenya", "kenyan", "arabica", "auction"],
    reply: () => {
      const kenyan = products.find((p) => p.slug === "kenyan-arabica");
      return {
        text: `${kenyan?.name ?? "Kenyan Arabica"}: ${kenyan?.note ?? ""}\n\n${bullets([
          `Origin: ${kenyan?.origin ?? "Kenya"}`,
          `Grades: ${kenyan?.grades.join(", ") ?? ""}`,
          `Processing: ${kenyan?.processing ?? ""}`,
          `Availability: ${kenyan?.availability ?? ""}`,
        ])}`,
        actions: [route("Our coffee", "/coffee"), route("Request a quote", "/contact")],
        suggestions: ["Tell me about Kenya AA", "Peaberry", "Coffee grades"],
      };
    },
  },
  {
    id: "grades",
    keywords: ["grade", "grades", "screen", "aa", "ab", "pb", "tt", "mh", "ml", "ungraded"],
    reply: () => ({
      text: `Grades we supply:\n\n${bullets(grades.map((g) => `${g.code} — ${g.note}`))}`,
      actions: [route("See the catalog", "/catalog")],
      suggestions: ["Roast levels", "Packaging & minimum orders", "How do I get a quote?"],
    }),
  },
  {
    id: "roast",
    keywords: [
      "roast",
      "roasted",
      "roasting",
      "dark",
      "medium",
      "light",
      "green coffee",
      "unroasted",
    ],
    reply: () => ({
      text: `Roast levels:\n\n${bullets(roastLevels.map((r) => `${r.label} — ${r.note}`))}\n\nRoasted coffee is made to order to your profile, whole bean or ground.`,
      actions: [route("Build a request", "/catalog")],
      suggestions: ["Packaging & minimum orders", "Coffee grades"],
    }),
  },
  {
    id: "packaging",
    keywords: [
      "packaging",
      "package",
      "pack",
      "packs",
      "bag",
      "jute",
      "grainpro",
      "moq",
      "minimum",
      "pouch",
      "private label",
      "label",
      "custom packaging",
    ],
    boost: 1,
    reply: () => ({
      text: `Pack sizes and minimums:\n\n${bullets(packSizes.map((p) => `${p.label} — ${p.note} (MOQ: ${p.moq})`))}\n\n${faqs.find((f) => f.question.includes("private-label"))?.answer ?? ""}`,
      actions: [route("Request a quote", "/contact")],
      suggestions: ["Roast levels", "How do I get a quote?"],
    }),
  },
  {
    id: "services",
    keywords: [
      "service",
      "services",
      "bulking",
      "blending",
      "blend",
      "what do you do",
      "home delivery",
      "deliveries",
      "cafe",
      "hospitality",
    ],
    reply: () => ({
      text: `What we do:\n\n${bullets(services.map((s) => `${s.title} — ${s.body}`))}\n\nWe serve ${audiences.slice(0, 4).join(", ").toLowerCase()} and more.`,
      actions: [route("What we do", "/what-we-do")],
      suggestions: ["Packaging & minimum orders", "How do I get a quote?"],
    }),
  },
  {
    id: "licence",
    keywords: [
      "licence",
      "license",
      "licensed",
      "registered",
      "legit",
      "legal",
      "kebs",
      "afa",
      "coffee board",
      "trust",
      "genuine",
    ],
    reply: () => ({
      text: `Yes — we're fully licensed:\n\n${bullets(licences.map((l) => `${l.title} — ${l.body}`))}`,
      actions: [route("About us", "/about")],
      suggestions: ["Awards", "How do you ensure quality?"],
    }),
  },
  {
    id: "quality",
    keywords: [
      "quality",
      "lab",
      "liquorer",
      "assurance",
      "cup clear",
      "inspect",
      "warehouse",
      "storage",
    ],
    reply: () => ({
      text: `Quality, cherry to container:\n\n${bullets(quality.map((q) => `${q.title} — ${q.body}`))}\n\nWarehouse: ${warehouse
        .map((w) => w.title.toLowerCase())
        .join(", ")}.`,
      actions: [route("What we do", "/what-we-do")],
      suggestions: ["How do I get a sample?", "Licences"],
    }),
  },
  {
    id: "shipping",
    keywords: [
      "ship",
      "shipping",
      "freight",
      "logistics",
      "deliver",
      "delivery",
      "port",
      "container",
      "countries",
      "markets",
      "where do you export",
      "export to",
      "global",
      "worldwide",
      "dubai",
      "uae",
      "uk",
      "europe",
    ],
    reply: () => {
      const logistics = journey.find((j) => j.title === "Logistics");
      const delivery = journey.find((j) => j.title === "Global Delivery");
      return {
        text: `${logistics?.body ?? ""} ${delivery?.body ?? ""}\n\nOur trade network:\n${bullets(markets.map((m) => `${m.name} — ${m.role}`))}`,
        actions: [route("Global reach", "/global-reach"), route("Request a quote", "/contact")],
        suggestions: ["Packaging & minimum orders", "How do I get a quote?"],
      };
    },
  },
  {
    id: "farm",
    keywords: ["farm", "estate", "maggie", "grow", "harvest", "process", "journey", "from farm"],
    reply: () => ({
      text: `From farm to cup:\n\n${bullets(journey.map((j) => `${j.step} ${j.title} — ${j.body}`))}`,
      actions: [route("Our farm", "/farm"), route("Our journey", "/what-we-do")],
      suggestions: ["Sustainability", "How do you ensure quality?"],
    }),
  },
  {
    id: "sustainability",
    keywords: ["sustainab", "farmers", "youth", "community", "impact", "ethical", "empower"],
    reply: () => ({
      text: `Coffee with purpose:\n\n${bullets(sustainability.map((s) => `${s.title} — ${s.body}`))}`,
      actions: [route("Sustainability", "/sustainability")],
      suggestions: ["Awards", "Our farm"],
    }),
  },
  {
    id: "awards",
    keywords: ["award", "awards", "recognition", "winner", "prize"],
    reply: () => ({
      text: `Recognition we're proud of:\n\n${bullets(awards.map((a) => `${a.title} (${a.year}) — ${a.issuer}`))}`,
      actions: [route("About us", "/about")],
      suggestions: ["Licences", "How do you ensure quality?"],
    }),
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "phone",
      "number",
      "address",
      "location",
      "where are you",
      "office",
      "visit",
      "find you",
      "reach",
    ],
    boost: 1,
    reply: () => ({
      text: `${company.legalName}\n\n${bullets([
        ...company.phones.map((p) => `${p.number} (${p.label})`),
        `Office: ${company.office}`,
        `Email: ${company.email}`,
        `${company.address.building}, ${company.address.poBox}, ${company.address.city}`,
      ])}`,
      actions: [wa("Message on WhatsApp"), route("Contact page", "/contact")],
      suggestions: ["How do I get a quote?", "How do I get a sample?"],
    }),
  },
  {
    id: "about",
    keywords: [
      "about",
      "who are you",
      "company",
      "ceo",
      "margaret",
      "managing director",
      "owner",
      "founder",
      "le alvin",
      "lealvin",
    ],
    reply: () => ({
      text: `${company.legalName}, trading as ${company.tradingName}, is a licensed Kenyan coffee dealer sourcing, processing, packaging and exporting East African coffee worldwide.\n\n${company.tagline}\n${company.ceoTitle}: ${company.ceo}.`,
      actions: [route("About us", "/about")],
      suggestions: ["Licences", "Awards", "What coffees do you export?"],
    }),
  },
];

const stopWords = new Set([
  "do",
  "you",
  "your",
  "the",
  "a",
  "an",
  "is",
  "are",
  "can",
  "how",
  "what",
  "we",
  "our",
  "to",
  "of",
  "and",
  "for",
  "in",
  "on",
  "it",
  "i",
]);

const contentWords = (text: string) =>
  text.split(" ").filter((word) => word.length > 2 && !stopWords.has(word));

const faqResponse = (faq: (typeof faqs)[number]): BotReply => ({
  text: faq.answer,
  actions: [route("Request a quote", "/contact")],
  suggestions: ["Coffee grades", "How do I get a quote?"],
});

/** Near-exact match against the FAQ questions published on the site. */
const faqByQuestion = (text: string): BotReply | null => {
  const words = contentWords(text);
  let best: { score: number; faq: (typeof faqs)[number] } | null = null;
  for (const faq of faqs) {
    const question = normalise(faq.question);
    const score = words.filter((word) => question.includes(word)).length;
    if (score >= 3 && (!best || score > best.score)) best = { score, faq };
  }
  return best ? faqResponse(best.faq) : null;
};

/** Looser fallback: word overlap with question + answer when no intent fired. */
const faqByOverlap = (text: string): BotReply | null => {
  const words = contentWords(text);
  let best: { score: number; faq: (typeof faqs)[number] } | null = null;
  for (const faq of faqs) {
    const haystack = normalise(`${faq.question} ${faq.answer}`);
    const score = words.filter((word) => haystack.includes(word)).length;
    if (score >= 2 && (!best || score > best.score)) best = { score, faq };
  }
  return best ? faqResponse(best.faq) : null;
};

export function getReply(input: string): BotReply {
  const original = input.trim();
  const text = normalise(original);
  if (!text) return fallback(original);
  const wordCount = text.split(" ").length;

  const exactFaq = faqByQuestion(text);
  if (exactFaq) return exactFaq;

  let bestScore = 0;
  let best: Intent | null = null;

  for (const intent of [...intents, ...catalogIntents]) {
    if (intent.maxWords && wordCount > intent.maxWords) continue;
    let score = 0;
    for (const term of intent.keywords) {
      if (matches(text, term)) score += 1 + (term.split(" ").length - 1);
    }
    if (score > 0) score += intent.boost ?? 0;
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }

  if (best) return best.reply(original);
  return faqByOverlap(text) ?? fallback(original);
}
