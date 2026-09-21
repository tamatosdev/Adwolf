export type WorkInline = { kind: "text" | "todo"; text: string };

export type WorkFact = { label: string; value: string };

export type WorkSection =
  | { kind: "cs"; heading: string; body: WorkCsBody }
  | { kind: "frames"; c: string; slots: string[] }
  | { kind: "next"; slug: string; title: string };

export type WorkCsBody =
  | { kind: "prose"; paragraphs: WorkInline[][] }
  | { kind: "result"; segs: WorkInline[] }
  | { kind: "quote"; c: string; alt: string; slot: string; whoB: string; whoSpan: string; line: string; video: string; vertical: boolean };

export type WorkProject = {
  slug: string;
  crumb: string;
  tag: string;
  tagClass: string;
  title: string;
  metaTitle: string;
  description: string;
  lede: string;
  heroAlt: string;
  heroC: string;
  facts: WorkFact[];
  sections: WorkSection[];
};

export const workProjects: WorkProject[] = [
  {
    slug: "mod-girl-ai-tvc",
    crumb: "Mod Girl",
    tag: "AI film",
    tagClass: "ai",
    title: "A TV ad with zero shoot days",
    metaTitle: "A TV ad with zero shoot days | Mod Girl",
    description: "A 30-second broadcast spot for a bleach cream, produced scene by scene with AI and a bilingual voiceover.",
    lede: "A 30-second broadcast spot for a bleach cream, produced scene by scene with AI and a bilingual voiceover.",
    heroAlt: "A TV ad with zero shoot days",
    heroC: "ai",
    facts: [
      { label: "Client", value: "Mod Girl" },
      { label: "Industry", value: "Beauty and personal care" },
      { label: "What we did", value: "Scripting, AI video, voiceover" },
      { label: "Market", value: "Pakistan" },
    ],
    sections: [
    { kind: "cs", heading: "The brief", body: { kind: "prose", paragraphs: [[{ kind: "text", text: "Mod Girl needed a 30-second TV commercial for its bleach cream. " }, { kind: "todo", text: "Add in your words why a traditional shoot wasn’t the route: budget, timeline, or both." }]] } },
    { kind: "cs", heading: "What we did", body: { kind: "prose", paragraphs: [[{ kind: "text", text: "We wrote the spot scene by scene and built character sheets so the same faces, wardrobe and styling held up across every shot. Each scene was produced with Google Veo, then edited, graded and finished with an Urdu and Hinglish voiceover." }], [{ kind: "text", text: "The hardest part was the product. AI video likes to invent packaging, so every frame with the pack in it was checked against the real one and regenerated until the label matched." }]] } },
    { kind: "frames", c: "ai", slots: ["Add a process frame: storyboard, wireframe or style frame","Add a final frame"] },
    { kind: "cs", heading: "The result", body: { kind: "result", segs: [{ kind: "todo", text: "Add: delivery time, cost against a quoted shoot, and where it aired" }] } },
    { kind: "cs", heading: "From the client", body: { kind: "quote", c: "ai", alt: "Client name", slot: "Add a poster frame", whoB: "Client name", whoSpan: "Title, Company", line: "Add a one-line pull quote from the video.", video: "", vertical: false } },
    { kind: "next", slug: "cgi-product-film", title: "Your strongest CGI project" },
    ],
  },

  {
    slug: "cgi-product-film",
    crumb: "Add client",
    tag: "CGI",
    tagClass: "d3",
    title: "Your strongest CGI project",
    metaTitle: "Your strongest CGI project | Add client",
    description: "Template page. Duplicate this folder for each CGI project and replace the copy and media.",
    lede: "Template page. Duplicate this folder for each CGI project and replace the copy and media.",
    heroAlt: "Your strongest CGI project",
    heroC: "d3",
    facts: [
      { label: "Client", value: "Add client" },
      { label: "Industry", value: "Add industry" },
      { label: "What we did", value: "3D modelling, animation, rendering" },
      { label: "Market", value: "Add market" },
    ],
    sections: [
    { kind: "cs", heading: "The brief", body: { kind: "prose", paragraphs: [[{ kind: "todo", text: "What did the client need, and why was CGI the right call?" }]] } },
    { kind: "cs", heading: "What we did", body: { kind: "prose", paragraphs: [[{ kind: "todo", text: "Model, look development, animation, lighting, compositing. Say what was hard and how the team solved it." }]] } },
    { kind: "frames", c: "d3", slots: ["Add a process frame: storyboard, wireframe or style frame","Add a final frame"] },
    { kind: "cs", heading: "The result", body: { kind: "result", segs: [{ kind: "todo", text: "Add the result: views, sales lift, awards, or what the client did next" }] } },
    { kind: "cs", heading: "From the client", body: { kind: "quote", c: "d3", alt: "Client name", slot: "Add a poster frame", whoB: "Client name", whoSpan: "Title, Company", line: "Add a one-line pull quote from the video.", video: "", vertical: false } },
    { kind: "next", slug: "insignia-properties", title: "Luxury real estate, rebuilt for Meta" },
    ],
  },

  {
    slug: "insignia-properties",
    crumb: "Insignia Properties",
    tag: "Campaign creative",
    tagClass: "d2",
    title: "Luxury real estate, rebuilt for Meta",
    metaTitle: "Luxury real estate, rebuilt for Meta | Insignia Properties",
    description: "New ad creative and campaign setup for a luxury brokerage, built around lead quality instead of lead volume.",
    lede: "New ad creative and campaign setup for a luxury brokerage, built around lead quality instead of lead volume.",
    heroAlt: "Luxury real estate, rebuilt for Meta",
    heroC: "d2",
    facts: [
      { label: "Client", value: "Insignia Properties" },
      { label: "Industry", value: "Luxury real estate" },
      { label: "What we did", value: "Ad creative, paid media" },
      { label: "Market", value: "Karachi, Pakistan" },
    ],
    sections: [
    { kind: "cs", heading: "The brief", body: { kind: "prose", paragraphs: [[{ kind: "text", text: "Insignia Properties sells high-end real estate in Karachi. Their ads brought in enquiries, but too many came from people who were never going to buy at that level. " }, { kind: "todo", text: "Confirm this framing with the Insignia team." }]] } },
    { kind: "cs", heading: "What we did", body: { kind: "prose", paragraphs: [[{ kind: "text", text: "We rebuilt the creative around who actually buys luxury property, and set up campaigns and lead forms that filter for intent instead of chasing cheap leads." }]] } },
    { kind: "frames", c: "d2", slots: ["Add a process frame: storyboard, wireframe or style frame","Add a final frame"] },
    { kind: "cs", heading: "The result", body: { kind: "result", segs: [{ kind: "todo", text: "Add: qualified lead rate or cost per qualified lead, before and after" }] } },
    { kind: "cs", heading: "From the client", body: { kind: "quote", c: "d2", alt: "Client name", slot: "Add a poster frame", whoB: "Client name", whoSpan: "Title, Company", line: "Add a one-line pull quote from the video.", video: "", vertical: false } },
    { kind: "next", slug: "retail-odoo-erp", title: "One back office for a growing retailer" },
    ],
  },

  {
    slug: "retail-odoo-erp",
    crumb: "US retailer",
    tag: "Build",
    tagClass: "code",
    title: "One back office for a growing retailer",
    metaTitle: "One back office for a growing retailer | US retailer",
    description: "Point of sale and inventory moved from disconnected tools into a single Odoo system.",
    lede: "Point of sale and inventory moved from disconnected tools into a single Odoo system.",
    heroAlt: "One back office for a growing retailer",
    heroC: "code",
    facts: [
      { label: "Client", value: "US retailer" },
      { label: "Industry", value: "Retail" },
      { label: "What we did", value: "Odoo ERP, POS, inventory" },
      { label: "Market", value: "United States" },
    ],
    sections: [
    { kind: "cs", heading: "The brief", body: { kind: "prose", paragraphs: [[{ kind: "text", text: "A US retailer was running point of sale and inventory tracking in separate systems that didn’t talk to each other, so stock and sales never lined up." }]] } },
    { kind: "cs", heading: "What we did", body: { kind: "prose", paragraphs: [[{ kind: "text", text: "We implemented Odoo as one system for point of sale and inventory, so every number comes from the same place. " }, { kind: "todo", text: "Confirm scope: data migration, training, integrations." }]] } },
    { kind: "frames", c: "code", slots: ["Add a process frame: storyboard, wireframe or style frame","Add a final frame"] },
    { kind: "cs", heading: "The result", body: { kind: "result", segs: [{ kind: "todo", text: "Add: hours saved per week, stock errors reduced, or time to month-end" }] } },
    { kind: "cs", heading: "From the client", body: { kind: "quote", c: "code", alt: "Client name", slot: "Add a poster frame", whoB: "Client name", whoSpan: "Title, Company", line: "Add a one-line pull quote from the video.", video: "", vertical: false } },
    { kind: "next", slug: "mod-girl-ai-tvc", title: "A TV ad with zero shoot days" },
    ],
  }
];
