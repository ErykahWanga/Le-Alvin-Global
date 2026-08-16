export const company = {
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
  office: "0783 180 770",
};

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Coffee", to: "/coffee" },
  { label: "Our Farm", to: "/farm" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Global Reach", to: "/global-reach" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Contact", to: "/contact" },
] as const;

export const products = [
  {
    slug: "kenyan-arabica",
    name: "Kenyan Arabica",
    origin: "Kenya — sourced at auction & Maggie Estate",
    grades: ["AA", "AB", "PB", "C", "TT", "T", "MH", "ML"],
    processing: "Fully washed",
    availability: "Main crop & fly crop, subject to auction cycles",
    packaging: "60kg / 70kg jute with GrainPro liner, or to specification",
    note: "Bright, structured Kenyan profile with blackcurrant and citrus character.",
  },
  {
    slug: "ugandan-arabica",
    name: "Ugandan Arabica",
    origin: "Uganda — imported for onward export",
    grades: ["AA", "AB", "PB", "UG"],
    processing: "Washed & natural",
    availability: "Year-round, contract dependent",
    packaging: "60kg jute or customer specification",
    note: "Rounded, sweet cup — an excellent blend component alongside Kenyan lots.",
  },
  {
    slug: "ugandan-robusta",
    name: "Ugandan Robusta",
    origin: "Uganda",
    grades: ["Screen 18", "Screen 15", "Robusta FAQ"],
    processing: "Natural / dry processed",
    availability: "Year-round, volume contracts welcome",
    packaging: "60kg jute, bulk container or customer specification",
    note: "Full-bodied and high yielding — built for espresso bases and volume blends.",
  },
  {
    slug: "east-african-origins",
    name: "East African Origins",
    origin: "Burundi, Tanzania, Ethiopia",
    grades: ["AA", "AB", "PB", "Grade 1", "Grade 2"],
    processing: "Washed & natural",
    availability: "Seasonal, sourced against customer requirement",
    packaging: "As per contract",
    note: "Imported Arabica lots that let us build multi-origin programmes from one supplier.",
  },
  {
    slug: "green-coffee",
    name: "Green Coffee Beans",
    origin: "Kenya & East Africa",
    grades: ["AA", "AB", "PB", "C", "TT", "T", "UG", "MH", "ML", "Robusta"],
    processing: "Milled, graded and cup-cleared before shipment",
    availability: "Continuous — bulking to container quantities",
    packaging: "Jute, GrainPro, bulk bag or private label",
    note: "Our core export line for importers, traders and roasting operations.",
  },
  {
    slug: "roasted-coffee",
    name: "Freshly Roasted Coffee",
    origin: "Roasted in Kenya to your profile",
    grades: ["Single origin", "House blend", "Custom blend"],
    processing: "Roast-to-order, whole bean or ground",
    availability: "Weekly roast schedule",
    packaging: "250g / 500g / 1kg valve pouch, private label available",
    note: "For cafés, hospitality, offices and fresh home cup deliveries.",
  },
];

export const grades = [
  { code: "AA", note: "Largest screen size, premium Kenyan lots" },
  { code: "AB", note: "Workhorse Kenyan grade, consistent volume" },
  { code: "PB", note: "Peaberry — single rounded bean, concentrated cup" },
  { code: "C", note: "Smaller screen, blend-friendly" },
  { code: "TT", note: "Lighter bean separated from AA/AB" },
  { code: "T", note: "Fines and small fragments" },
  { code: "UG", note: "Ungraded lots to specification" },
  { code: "MH", note: "Mbuni heavy — natural processed" },
  { code: "ML", note: "Mbuni light — natural processed" },
  { code: "Robusta", note: "Ugandan Robusta, screen graded" },
];

export const services = [
  {
    title: "Bulking",
    body: "Combining and preparing coffee quantities to meet commercial and container requirements.",
  },
  {
    title: "Blending",
    body: "Creating blends to your specification, balanced and repeated lot after lot.",
  },
  {
    title: "Roasting",
    body: "Freshly roasted coffee produced to your profile, whole bean or ground.",
  },
  {
    title: "Packing",
    body: "Preparing coffee for delivery and commercial distribution in the format you need.",
  },
  {
    title: "General Supply",
    body: "Supplying coffee according to customer requirements, from sample to repeat contract.",
  },
  {
    title: "Fresh Home Cup Deliveries",
    body: "Regular roasted coffee deliveries for homes, offices and hospitality clients.",
  },
];

export const journey = [
  {
    step: "01",
    title: "Grow",
    body: "Coffee cultivated at Maggie Estate and sourced from farmers across Kenya's growing regions.",
  },
  {
    step: "02",
    title: "Harvest",
    body: "Selective picking of ripe cherry, delivered fast to the wet mill to protect the cup.",
  },
  {
    step: "03",
    title: "Process",
    body: "Pulping, fermentation, washing and drying, then milling and grading into export lots.",
  },
  {
    step: "04",
    title: "Cup & Quality Check",
    body: "Certified liquorers sample and cup every lot in our in-house taste lab before it is cleared.",
  },
  {
    step: "05",
    title: "Roast, Blend & Pack",
    body: "Bulking, blending, roasting and packing — including private label and custom packaging.",
  },
  {
    step: "06",
    title: "Logistics",
    body: "Documentation and freight coordinated with our logistics partners for on-time sailing.",
  },
  {
    step: "07",
    title: "Global Delivery",
    body: "Delivered to your port of destination, on schedule and to contract specification.",
  },
];

export const quality = [
  { title: "In-House Taste Lab", body: "A professional cupping laboratory inside our own operation." },
  { title: "Certified Liquorers", body: "Qualified tasters score every sample against your brief." },
  { title: "Sample Cupping", body: "Pre-shipment samples so you approve the cup before it ships." },
  { title: "Quality Assurance", body: "Attention to detail from cherry to container, lot by lot." },
  { title: "Regulatory Compliance", body: "Licensed dealer operating to coffee regulatory rules." },
];

export const markets = [
  { name: "Kenya", role: "Origin, sourcing, milling & export", x: 60.5, y: 62 },
  { name: "Uganda", role: "Arabica & Robusta sourcing", x: 57.5, y: 58.5 },
  { name: "Ethiopia", role: "Arabica sourcing", x: 62.5, y: 52 },
  { name: "UAE", role: "Regional trade & distribution", x: 63.5, y: 44 },
  { name: "United Kingdom", role: "European market access", x: 47.5, y: 24 },
];

export const audiences = [
  "International coffee buyers",
  "Green coffee importers",
  "Roasting companies",
  "Cafés & hospitality groups",
  "Distributors & wholesalers",
  "Private label businesses",
  "Specialty coffee buyers",
];

export const sustainability = [
  {
    title: "Empowering Farmers",
    body: "Training and supporting farmers to improve speciality coffee production and returns.",
  },
  {
    title: "Reviving Coffee",
    body: "Backing initiatives focused on revitalising coffee production and availability.",
  },
  {
    title: "Empowering Youth",
    body: "Creating opportunities and encouraging young people to build careers in coffee.",
  },
];

export const roastLevels = [
  { id: "green", label: "Green (Unroasted)", note: "Milled, graded and cup-cleared for importers and roasters." },
  { id: "light", label: "Light Roast", note: "City roast — protects Kenyan acidity, blackcurrant and citrus." },
  { id: "medium", label: "Medium Roast", note: "Full City — balanced sweetness, caramel and cocoa body." },
  { id: "dark", label: "Dark Roast", note: "Vienna / French — bold, low acidity, espresso-forward." },
] as const;

export const packSizes = [
  { id: "60kg", label: "60kg jute", note: "Standard export bag, GrainPro liner available", moq: "1 x 20ft container" },
  { id: "30kg", label: "30kg carton", note: "Sample-to-mid volume roasted or green", moq: "500 kg" },
  { id: "1kg", label: "1kg valve pouch", note: "Roasted whole bean or ground", moq: "200 units" },
  { id: "500g", label: "500g valve pouch", note: "Retail & private label", moq: "300 units" },
  { id: "250g", label: "250g valve pouch", note: "Retail, café & gifting", moq: "500 units" },
] as const;

export type CatalogItem = {
  sku: string;
  name: string;
  origin: string;
  altitude: string;
  process: string;
  grades: string[];
  roasts: string[];
  packs: string[];
  cup: string;
  moisture: string;
  screen: string;
  availability: string;
  certification: string;
};

export const catalog: CatalogItem[] = [
  {
    sku: "LA-KE-AA",
    name: "Kenya AA Washed",
    origin: "Nyeri, Kirinyaga & Maggie Estate, Kenya",
    altitude: "1,700 – 1,900 m",
    process: "Fully washed, sun dried on raised beds",
    grades: ["AA", "AB", "PB"],
    roasts: ["green", "light", "medium"],
    packs: ["60kg", "30kg", "1kg", "500g", "250g"],
    cup: "Blackcurrant, grapefruit, brown sugar — 86+ score",
    moisture: "10.5 – 11.5%",
    screen: "Screen 17/18",
    availability: "Main crop Oct–Feb, fly crop May–Jul",
    certification: "Licensed dealer lots, cup-cleared by certified liquorers",
  },
  {
    sku: "LA-KE-AB",
    name: "Kenya AB Washed",
    origin: "Kenyan auction lots, multi-region",
    altitude: "1,500 – 1,800 m",
    process: "Fully washed",
    grades: ["AB", "C", "TT"],
    roasts: ["green", "light", "medium", "dark"],
    packs: ["60kg", "30kg", "1kg", "500g"],
    cup: "Plum, citrus, cocoa — structured and consistent",
    moisture: "10.5 – 11.5%",
    screen: "Screen 15/16",
    availability: "Year-round, auction cycle dependent",
    certification: "Cup-cleared, pre-shipment sample approval",
  },
  {
    sku: "LA-KE-PB",
    name: "Kenya Peaberry",
    origin: "Kenya — selected estate & cooperative lots",
    altitude: "1,600 – 1,900 m",
    process: "Fully washed",
    grades: ["PB"],
    roasts: ["green", "light", "medium"],
    packs: ["60kg", "30kg", "1kg", "250g"],
    cup: "Concentrated, syrupy, red berry and bergamot",
    moisture: "10.5 – 11.5%",
    screen: "Peaberry separation",
    availability: "Limited, allocated per contract",
    certification: "Single-lot traceable",
  },
  {
    sku: "LA-KE-MBUNI",
    name: "Kenya Mbuni Natural",
    origin: "Kenya — MH / ML naturals",
    altitude: "1,400 – 1,800 m",
    process: "Natural / dry processed",
    grades: ["MH", "ML", "UG"],
    roasts: ["green", "medium", "dark"],
    packs: ["60kg", "30kg"],
    cup: "Sweet, fruit-forward, heavy body — blend and volume base",
    moisture: "11 – 12%",
    screen: "Mixed screen",
    availability: "Seasonal, volume contracts",
    certification: "Graded and cleared before shipment",
  },
  {
    sku: "LA-UG-ARB",
    name: "Uganda Arabica",
    origin: "Mt. Elgon & Rwenzori, Uganda",
    altitude: "1,500 – 2,100 m",
    process: "Washed & natural",
    grades: ["AA", "AB", "PB", "UG"],
    roasts: ["green", "medium", "dark"],
    packs: ["60kg", "30kg", "1kg"],
    cup: "Rounded, sweet, milk-chocolate — strong blend component",
    moisture: "10.5 – 12%",
    screen: "Screen 15+",
    availability: "Year-round, contract dependent",
    certification: "Imported for onward export, documented origin",
  },
  {
    sku: "LA-UG-ROB",
    name: "Uganda Robusta Screen 18",
    origin: "Central & Western Uganda",
    altitude: "1,100 – 1,500 m",
    process: "Natural / dry processed",
    grades: ["Screen 18", "Screen 15", "Robusta FAQ"],
    roasts: ["green", "dark"],
    packs: ["60kg", "30kg"],
    cup: "Full-bodied, nutty, high yield — espresso base",
    moisture: "12 – 13%",
    screen: "Screen 18 / 15",
    availability: "Year-round, container volumes",
    certification: "FAQ and screen-graded to contract",
  },
  {
    sku: "LA-EA-MULTI",
    name: "East African Multi-Origin",
    origin: "Burundi, Tanzania & Ethiopia",
    altitude: "1,400 – 2,000 m",
    process: "Washed & natural",
    grades: ["AA", "AB", "PB", "Grade 1", "Grade 2"],
    roasts: ["green", "light", "medium"],
    packs: ["60kg", "30kg", "1kg", "500g"],
    cup: "Floral to stone fruit depending on origin and season",
    moisture: "10.5 – 11.5%",
    screen: "Per origin standard",
    availability: "Seasonal, sourced against requirement",
    certification: "Origin documentation per shipment",
  },
  {
    sku: "LA-RO-HOUSE",
    name: "LeAlvin House Blend (Roasted)",
    origin: "Kenya + East African blend, roasted in Kenya",
    altitude: "Blend of 1,400 – 1,900 m lots",
    process: "Roast-to-order, whole bean or ground",
    grades: ["House blend", "Custom blend", "Single origin"],
    roasts: ["light", "medium", "dark"],
    packs: ["1kg", "500g", "250g"],
    cup: "Chocolate, toasted almond, dried fruit finish",
    moisture: "Roasted, < 5%",
    screen: "Blend specification",
    availability: "Weekly roast schedule",
    certification: "Private label & custom packaging available",
  },
];
