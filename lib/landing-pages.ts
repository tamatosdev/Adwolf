export interface LPData {
  tag: string;
  tagClass: string;
  headline: string;
  lede: string;
  points: string[];
  formName: string;
  formSource: string;
  work: {
    tileHref?: string;
    tileClass: string;
    tileDataC: string;
    tileSlot: string;
    tileTitle: string;
    tileClient: string;
    tileTag?: string;
    tileTagClass?: string;
    tileSrc?: string;
  };
  features: { title: string; desc: string }[];
  steps: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  ctaHeadline: string;
}

export const proofIntro = "Our team has made work for";
export const proofLogos = ["Red Bull", "Honda", "Careem", "Gloria Jean's", "IBA"];
export const quoteSlot = "Add a poster frame";
export const quoteAlt = "Client name";
export const quoteName = "Client name";
export const quoteTitle = "Title, Company";
export const quoteLine = "Add a one-line pull quote from the video.";
export const ctaSub = "A 20-minute call and a fixed quote. That\u2019s the whole process to start.";

export const landingPages: Record<string, LPData> = {
  "ai-video-ads": {
    tag: "AI video",
    tagClass: "ai",
    headline: "Video ads without the shoot.",
    lede: "Scripted, directed and edited like a real production, generated with AI. Change a line, a product or a location without booking another shoot day.",
    points: [
      "Scene-by-scene production with consistent characters",
      "Voiceover in the languages your market speaks",
      "Cut-downs for TV, Reels, TikTok and YouTube from one production",
      "Your real product and packaging, checked frame by frame",
    ],
    formName: "lp-ai-video-ads",
    formSource: "AI video ads",
    work: {
      tileHref: "/work/mod-girl-ai-tvc/",
      tileClass: "s7",
      tileDataC: "ai",
      tileSlot: "Add a still or clip",
      tileTitle: "A TV ad with zero shoot days",
      tileClient: "Mod Girl",
      tileTag: "AI video",
      tileTagClass: "ai",
    },
    features: [
      { title: "Script and storyboard", desc: "We write the spot around one idea and plan every shot before anything is generated." },
      { title: "Characters that hold up", desc: "Character sheets keep faces, wardrobe and styling consistent from the first scene to the last." },
      { title: "Product accuracy", desc: "AI tends to invent packaging. We check every frame with your product in it and regenerate until it matches." },
      { title: "Every format you need", desc: "One production, cut for TV, feeds, stories and pre-roll, with captions and end cards." },
    ],
    steps: [
      { title: "Brief and script", desc: "A 20-minute call, then a script and storyboard for you to approve." },
      { title: "Key frames first", desc: "You see the look of the main scenes before full production starts." },
      { title: "Production and delivery", desc: "The full spot, voiceover, music and cut-downs, with agreed revision rounds." },
    ],
    faq: [
      { q: "Will it look like AI?", a: "Not if it\u2019s directed properly. We avoid the tells: warped hands, drifting faces and invented text. If a shot won\u2019t hold up, we change the shot." },
      { q: "Can you use our real product?", a: "Yes. We work from your product photos and packaging files so the pack on screen matches the one on the shelf." },
      { q: "Do we need to label it as AI?", a: "Some platforms and markets expect AI-generated ads to be labelled. We\u2019ll flag what applies where you\u2019re running it, but your legal team should give final sign-off." },
      { q: "How long does it take?", a: "It depends on length and the number of versions. You get a timeline with the quote after the scoping call." },
    ],
    ctaHeadline: "Video ads without the shoot.",
  },
  "cgi-product-films": {
    tag: "3D and CGI",
    tagClass: "d3",
    headline: "Product films you can\u2019t shoot.",
    lede: "Photoreal CGI of your product, from launch films to the out-of-home spots where a product takes over a building. Built from CAD files or photos, even before the product exists.",
    points: [
      "Photoreal renders built from CAD or reference photos",
      "Shots a camera can\u2019t get: cutaways, macro, impossible physics",
      "One 3D model, endless angles, colourways and cut-downs",
      "CGI out-of-home concepts made for social",
    ],
    formName: "lp-cgi-product-films",
    formSource: "CGI product films",
    work: {
      tileHref: "/work/cgi-product-film/",
      tileClass: "s7",
      tileDataC: "d3",
      tileSlot: "Add a still or clip",
      tileTitle: "Your strongest CGI project",
      tileClient: "Add client",
      tileTag: "3D and CGI",
      tileTagClass: "d3",
    },
    features: [
      { title: "Model and look development", desc: "We build your product in 3D and match materials, finish and colour to the real thing." },
      { title: "Direction and animation", desc: "Camera moves, lighting and motion planned like a live-action film." },
      { title: "Out-of-home concepts", desc: "Product reveals on real buildings and streets, made for social feeds." },
      { title: "An asset you keep", desc: "The finished model can be reused for ads, product images and future launches." },
    ],
    steps: [
      { title: "Brief and references", desc: "Send CAD files, photos or a sample. We confirm the look and the shot list." },
      { title: "Style frames", desc: "Approve lighting, materials and key shots as stills before animation starts." },
      { title: "Animation and delivery", desc: "The final film, cut-downs and stills in every format you need." },
    ],
    faq: [
      { q: "What do you need from us?", a: "CAD files are ideal. Detailed photos, a physical sample and your packaging files work too." },
      { q: "Will it look real?", a: "That\u2019s the goal. Materials and lighting are matched to the real product, and you approve style frames before we animate." },
      { q: "Can we reuse the 3D model?", a: "Yes. It\u2019s yours, and it makes future ads, product images and variants much faster." },
      { q: "How long does it take?", a: "Model complexity drives the timeline. You get a schedule with the quote." },
    ],
    ctaHeadline: "Product films you can\u2019t shoot.",
  },
  "websites-and-apps": {
    tag: "Software",
    tagClass: "code",
    headline: "Websites that pull their weight.",
    lede: "Marketing sites, online stores and web apps, designed and built by one team. Fast to load, easy to update and made to convert.",
    points: [
      "Design and development under one roof",
      "Shopify, WooCommerce or custom builds",
      "A clickable prototype before development starts",
      "Speed, SEO basics and analytics set up from day one",
    ],
    formName: "lp-websites-and-apps",
    formSource: "Websites and apps",
    work: {
      tileClass: "s7",
      tileDataC: "code",
      tileSlot: "Add a relevant project",
      tileTitle: "Add a project for this service",
      tileClient: "Client",
    },
    features: [
      { title: "Structure that sells", desc: "Pages planned around what your buyer needs to decide, not your org chart." },
      { title: "Design that fits the brand", desc: "Custom design, not a theme with your logo on it." },
      { title: "Built properly", desc: "Fast, accessible and easy for your team to update." },
      { title: "Measured", desc: "Analytics, pixels and conversion tracking set up before launch." },
    ],
    steps: [
      { title: "Scope and structure", desc: "We agree the pages, features and timeline, with a fixed quote." },
      { title: "Prototype", desc: "Click through the site before development starts." },
      { title: "Build and launch", desc: "Development, testing, launch and handover to your team." },
    ],
    faq: [
      { q: "Which platform should we use?", a: "Shopify for most online stores, a lightweight CMS for marketing sites, and custom code when you need features off-the-shelf tools can\u2019t handle. We recommend one after scoping." },
      { q: "Can you redesign our existing site?", a: "Yes. We keep what works, fix what doesn\u2019t and move your content across." },
      { q: "Who owns the site?", a: "You do. Code, design files and accounts are handed over at launch." },
      { q: "Do you offer support after launch?", a: "Yes, as a monthly plan or on request." },
    ],
    ctaHeadline: "Websites that pull their weight.",
  },
  "odoo-erp": {
    tag: "Software",
    tagClass: "code",
    headline: "One system instead of five.",
    lede: "Odoo ERP set up for how your business actually runs. Sales, inventory, point of sale, purchasing and accounting in one place.",
    points: [
      "Replace spreadsheets and disconnected tools",
      "Stock and sales that match across every location",
      "Moved over in stages, so the business keeps running",
      "Training for your team and support after launch",
    ],
    formName: "lp-odoo-erp",
    formSource: "Odoo ERP",
    work: {
      tileHref: "/work/retail-odoo-erp/",
      tileClass: "s7",
      tileDataC: "code",
      tileSlot: "Add a still or clip",
      tileTitle: "One back office for a growing retailer",
      tileClient: "US retailer",
      tileTag: "Software",
      tileTagClass: "code",
    },
    features: [
      { title: "Scoping that starts with your process", desc: "We map how orders, stock and money move today before configuring anything." },
      { title: "Setup and customisation", desc: "Modules configured for your workflows, with custom work only where it earns its place." },
      { title: "Data migration", desc: "Products, customers, suppliers and opening balances moved across and checked." },
      { title: "Integrations", desc: "Connected to your online store, payment gateway and the tools you keep." },
    ],
    steps: [
      { title: "Scoping", desc: "Walk us through your operation. You get a plan, a timeline and a fixed quote." },
      { title: "Build and migrate", desc: "Configure, test with your real data and train your team." },
      { title: "Go live and support", desc: "Launch in stages, then support while the team settles in." },
    ],
    faq: [
      { q: "Community or Enterprise edition?", a: "It depends on the modules you need and your budget. We recommend one after scoping and explain the trade-offs." },
      { q: "Can Odoo replace QuickBooks?", a: "For many retailers and distributors, yes. Accounting, inventory and sales can all run in one system." },
      { q: "How long does a rollout take?", a: "It depends on locations, products and how clean your current data is. You get a timeline with the quote." },
      { q: "What happens after launch?", a: "We support the team while it settles in, and can keep improving the system as the business grows." },
    ],
    ctaHeadline: "One system instead of five.",
  },
  "2d-animation": {
    tag: "2D and motion",
    tagClass: "d2",
    headline: "Explainers people watch to the end.",
    lede: "2D animation and motion design that makes a product, a service or a process easy to understand in under 90 seconds.",
    points: [
      "Script, storyboard, illustration and animation in one team",
      "A style built around your brand, not a template",
      "Versions for your site, sales decks and social",
      "Voiceover and captions included",
    ],
    formName: "lp-2d-animation",
    formSource: "2D animation",
    work: {
      tileClass: "s7",
      tileDataC: "d2",
      tileSlot: "Add a relevant project",
      tileTitle: "Add a project for this service",
      tileClient: "Client",
    },
    features: [
      { title: "A script that does the selling", desc: "We cut it down to what your buyer needs to hear, in the order they need to hear it." },
      { title: "Illustration in your style", desc: "Characters, icons and scenes designed for your brand." },
      { title: "Motion that explains", desc: "Movement used to show how things work, not just to decorate." },
      { title: "Built for reuse", desc: "Loops, cut-downs and stills for landing pages, decks and ads." },
    ],
    steps: [
      { title: "Script", desc: "We write it and you approve it before anything is drawn." },
      { title: "Storyboard and style frames", desc: "See every scene and the visual style up front." },
      { title: "Animation and sound", desc: "Animation, voiceover, music and final delivery." },
    ],
    faq: [
      { q: "How long should an explainer be?", a: "Usually 60 to 90 seconds for a homepage, shorter for ads. We\u2019ll recommend a length based on where it\u2019s going." },
      { q: "Can you match our brand guidelines?", a: "Yes. Send your guidelines and we\u2019ll design the style around them." },
      { q: "Do you handle the voiceover?", a: "Yes. We cast and record voiceover as part of the project, in the language you need." },
      { q: "Can we make changes later?", a: "Yes. You get the project files at handover." },
    ],
    ctaHeadline: "Explainers people watch to the end.",
  },
};

export const lpSlugs = Object.keys(landingPages);
