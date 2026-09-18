export type BlogBlock =
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "lead"; lead: string; text: string }
  | { type: "ul"; items: { lead: string; text: string }[] }
  | { type: "ol"; items: { lead: string; text: string }[] };

export type BlogSection = { id: string; heading: string; blocks: BlogBlock[] };

export type RelatedPost = {
  slug: string;
  dataCat: string;
  dataC: string;
  alt: string;
  tag: string;
  tagClass: string;
  readTime: string;
  title: string;
  desc: string;
};

export type BlogPost = {
  slug: string;
  crumb: string;
  tag: string;
  tagClass: string;
  dateISO: string;
  dateLabel: string;
  readTime: string;
  title: string;
  alt: string;
  description: string;
  intro: string;
  toc: { anchor: string; label: string }[];
  sections: BlogSection[];
  aside: { heading: string; text: string; href: string; cta: string };
  related: RelatedPost[];
};

export const blogPosts: BlogPost[] = [
  {
      slug: "ai-video-ads-vs-traditional-shoot",
      crumb: "AI video",
      tag: "AI video",
      tagClass: "ai",
      dateISO: "2026-09-02",
      dateLabel: "2 September 2026",
      readTime: "6 min read",
      title: "AI video ads vs a traditional shoot: what actually changes",
      alt: "AI video ads vs a traditional shoot: what actually changes",
      description: "Where AI-produced video ads beat a traditional shoot, where they don't, and how to brief one so it doesn't look like AI.",
      intro: "Most brands asking about AI video ads want to know one thing: can it replace a shoot? Sometimes it can. Sometimes it absolutely can’t. The difference comes down to what the ad needs to show, not how good the tools have become.",
    toc: [
    { anchor: "what-it-is", label: "What an AI-produced ad actually involves" },
    { anchor: "where-ai-wins", label: "Where AI production wins" },
    { anchor: "where-shoots-win", label: "Where a shoot still wins" },
    { anchor: "problems", label: "The problems nobody puts in the pitch" },
    { anchor: "brief", label: "How to brief an AI ad" },
    ],
    sections: [
      {
      id: "what-it-is",
      heading: "What an AI-produced ad actually involves",
      blocks: [
        { type: "p", text: "An AI ad isn’t one prompt and a download button. A spot that holds up on TV or in a paid feed still goes through the same stages as any production: an idea, a script, a storyboard, casting, a look, an edit, sound and a final grade. The difference is that the shots are generated instead of filmed." },
        { type: "p", text: "That means the craft moves. Instead of a location scout and a lighting crew, you need people who can direct a model shot by shot, keep a character’s face consistent across scenes and spot the small errors that make viewers feel something is off." },
      ],
    },
      {
      id: "where-ai-wins",
      heading: "Where AI production wins",
      blocks: [
        { type: "ul", items: [
        { lead: "Script changes are edits, not reshoots.", text: " If legal changes a claim or the client wants a different ending, you regenerate a scene. You don’t rebook a crew." },
        { lead: "Locations you can’t book.", text: " A rooftop in another city, a desert at golden hour or a set that would cost more than the media budget." },
        { lead: "Versions for testing.", text: " Different openings, different talent, different backgrounds for different markets, without multiplying shoot days." },
        { lead: "No dependency on weather, cast availability or permits.", text: " The schedule is the production team’s, not the sky’s." },
      ] },
      ],
    },
      {
      id: "where-shoots-win",
      heading: "Where a shoot still wins",
      blocks: [
        { type: "p", text: "Be wary of anyone who says AI replaces every shoot. It doesn’t, and pretending otherwise usually ends with an ad that looks cheap." },
        { type: "ul", items: [
        { lead: "Close product handling.", text: " If the ad depends on how a product feels, pours, folds or fits, real footage is still more convincing." },
        { lead: "Real people and real testimonials.", text: " Customers, founders and ambassadors should be filmed. Generating a “customer” is a trust problem, not a production shortcut." },
        { lead: "Celebrity and talent contracts.", text: " Likeness rights are complicated enough without generation in the mix." },
        { lead: "Tightly regulated claims.", text: " If every frame has to be defensible to a regulator, filmed evidence is simpler." },
      ] },
      ],
    },
      {
      id: "problems",
      heading: "The problems nobody puts in the pitch",
      blocks: [
        { type: "lead", lead: "Packaging drift.", text: " Video models like to invent labels, change logos between frames and make text unreadable. If your pack is on screen, every one of those frames needs checking and fixing. Budget time for it." },
        { type: "lead", lead: "Consistency.", text: " Keeping the same face, outfit and product across ten shots is the hardest part of the job. Character sheets and reference frames help, but it takes iteration." },
        { type: "lead", lead: "Hands, text and physics.", text: " These are still the usual tells. Good direction avoids shots that expose them." },
        { type: "lead", lead: "Labelling.", text: " Some platforms and markets expect AI-generated ads to be disclosed. Check the rules for every place the ad will run before you launch, and involve your legal team for final sign-off." },
      ],
    },
      {
      id: "brief",
      heading: "How to brief an AI ad",
      blocks: [
        { type: "ol", items: [
        { lead: "One idea.", text: " A 30-second spot can carry one message well. Pick it." },
        { lead: "Real product assets.", text: " High-resolution photos of the product and packaging from several angles, plus the print files if you have them." },
        { lead: "Tone references.", text: " Two or three ads you like and one you don’t, with a sentence on why." },
        { lead: "Where it will run.", text: " TV, Reels, YouTube pre-roll and stories all need different framing and lengths." },
        { lead: "What can’t change.", text: " Mandatory claims, legal lines, brand colours and anything the regulator cares about." },
      ] },
        { type: "p", text: "The honest answer to “AI or shoot?” is often both: film what needs to be real, generate what would be impractical or expensive to film, and edit them into one spot." },
      ],
    },
  ],
    aside: { heading: "Planning an AI ad?", text: "Send us the brief and we’ll tell you honestly whether AI or a shoot is the better route.", href: "/lp/ai-video-ads/", cta: "See how we do it" },
    related: [
    { slug: "when-cgi-beats-a-product-shoot", dataCat: "d3", dataC: "d3", alt: "When CGI beats a product shoot, and when it doesn’t", tag: "3D and CGI", tagClass: "d3", readTime: "5 min read", title: "When CGI beats a product shoot, and when it doesn’t", desc: "A practical guide to choosing CGI or a live-action product shoot: what each does best, what CGI needs from you, and how hybrids work." },
    { slug: "signs-you-have-outgrown-spreadsheets", dataCat: "code", dataC: "code", alt: "Seven signs your business has outgrown spreadsheets", tag: "Software", tagClass: "code", readTime: "6 min read", title: "Seven signs your business has outgrown spreadsheets", desc: "The warning signs that spreadsheets and disconnected tools are costing you, and what moving to an ERP like Odoo actually involves." },
    ],
  },

  {
      slug: "when-cgi-beats-a-product-shoot",
      crumb: "3D and CGI",
      tag: "3D and CGI",
      tagClass: "d3",
      dateISO: "2026-08-19",
      dateLabel: "19 August 2026",
      readTime: "5 min read",
      title: "When CGI beats a product shoot, and when it doesn’t",
      alt: "When CGI beats a product shoot, and when it doesn’t",
      description: "A practical guide to choosing CGI or a live-action product shoot: what each does best, what CGI needs from you, and how hybrids work.",
      intro: "CGI used to be the expensive option you chose only when a shoot was impossible. That’s no longer true for most product work. But it isn’t automatically better either. Here’s how to decide.",
    toc: [
    { anchor: "cgi-wins", label: "When CGI is the better choice" },
    { anchor: "shoot-wins", label: "When to shoot instead" },
    { anchor: "what-you-need", label: "What CGI needs from you" },
    { anchor: "hybrid", label: "The hybrid option" },
    ],
    sections: [
      {
      id: "cgi-wins",
      heading: "When CGI is the better choice",
      blocks: [
        { type: "h3", text: "The product isn’t finished yet" },
        { type: "p", text: "If you’re launching something that’s still in production, CGI lets you start marketing from the CAD files. The launch film can be ready before the first unit ships." },
        { type: "h3", text: "You have lots of variants" },
        { type: "p", text: "Ten colourways, three sizes, two packaging designs. Shooting each one multiplies the cost. In CGI, once the model is built, swapping a material or colour is a fraction of the work." },
        { type: "h3", text: "The shot is physically impossible" },
        { type: "p", text: "Cutaways that show what’s inside, macro moves across a surface, liquids behaving exactly the way you want, or a giant version of your product appearing on a real building. These are the shots that stop the scroll, and a camera can’t get them." },
        { type: "h3", text: "You’ll need the asset again" },
        { type: "p", text: "A 3D model keeps paying off. The same model can produce e-commerce images, social loops, ads for the next season and product configurators. A shoot gives you the footage you shot, and nothing else." },
      ],
    },
      {
      id: "shoot-wins",
      heading: "When to shoot instead",
      blocks: [
        { type: "ul", items: [
        { lead: "People are the point.", text: " If the story is about someone using, wearing or reacting to the product, film them." },
        { lead: "Food and drink that needs to feel appetising.", text: " CGI can do it, but real food on a good set is often faster and more convincing." },
        { lead: "Texture is the selling point.", text: " Fabrics, skin and natural materials can be rendered, but they take serious time to get right." },
        { lead: "It’s a one-off with a simple setup.", text: " A clean packshot of one product on one background is usually quicker to photograph." },
      ] },
      ],
    },
      {
      id: "what-you-need",
      heading: "What CGI needs from you",
      blocks: [
        { type: "p", text: "The quality of a CGI film depends heavily on what you send at the start." },
        { type: "ul", items: [
        { lead: "CAD or 3D files", text: " if they exist. They save the most time." },
        { lead: "Detailed photos", text: " from every angle, in good light, including close-ups of materials and finishes." },
        { lead: "A physical sample", text: " if possible, so the team can match how light hits the real surface." },
        { lead: "Packaging and label files", text: ", so the artwork is exact rather than traced." },
        { lead: "Brand colours as values", text: ", not just “our red”." },
      ] },
      ],
    },
      {
      id: "hybrid",
      heading: "The hybrid option",
      blocks: [
        { type: "p", text: "Plenty of the best product films mix both. The model and hands are filmed, and the product is replaced or enhanced in CGI. Or the environment is real and the impossible moment is rendered. If you’re unsure, brief the story first and let the production team tell you which shots should be real and which shouldn’t." },
      ],
    },
  ],
    aside: { heading: "Thinking about CGI?", text: "Send us your product and the shots you have in mind. We’ll tell you what CGI can do with it.", href: "/lp/cgi-product-films/", cta: "See how we do it" },
    related: [
    { slug: "ai-video-ads-vs-traditional-shoot", dataCat: "ai", dataC: "ai", alt: "AI video ads vs a traditional shoot: what actually changes", tag: "AI video", tagClass: "ai", readTime: "6 min read", title: "AI video ads vs a traditional shoot: what actually changes", desc: "Where AI-produced video ads beat a traditional shoot, where they don't, and how to brief one so it doesn't look like AI." },
    { slug: "signs-you-have-outgrown-spreadsheets", dataCat: "code", dataC: "code", alt: "Seven signs your business has outgrown spreadsheets", tag: "Software", tagClass: "code", readTime: "6 min read", title: "Seven signs your business has outgrown spreadsheets", desc: "The warning signs that spreadsheets and disconnected tools are costing you, and what moving to an ERP like Odoo actually involves." },
    ],
  },

  {
      slug: "signs-you-have-outgrown-spreadsheets",
      crumb: "Software",
      tag: "Software",
      tagClass: "code",
      dateISO: "2026-08-05",
      dateLabel: "5 August 2026",
      readTime: "6 min read",
      title: "Seven signs your business has outgrown spreadsheets",
      alt: "Seven signs your business has outgrown spreadsheets",
      description: "The warning signs that spreadsheets and disconnected tools are costing you, and what moving to an ERP like Odoo actually involves.",
      intro: "Spreadsheets are a great way to start a business and a bad way to run a growing one. The problem is that the switch point is rarely obvious. Nobody wakes up and decides the spreadsheet has failed. It just gets slower, more fragile and more expensive in ways that don’t show up on an invoice.",
    toc: [
    { anchor: "signs", label: "The seven signs" },
    { anchor: "what-erp-involves", label: "What moving to an ERP involves" },
    { anchor: "odoo", label: "Is Odoo the right fit?" },
    ],
    sections: [
      {
      id: "signs",
      heading: "The seven signs",
      blocks: [
        { type: "h3", text: "1. Your stock numbers don’t match" },
        { type: "p", text: "The POS says one thing, the warehouse sheet says another, and the online store is selling items you don’t have. Every mismatch is either a lost sale or a refund." },
        { type: "h3", text: "2. Someone’s job is copying data between tools" },
        { type: "p", text: "If a person spends part of every week moving orders from one system into another, you’re paying a salary to be the integration." },
        { type: "h3", text: "3. Month-end takes days" },
        { type: "p", text: "Closing the books shouldn’t be a project. When it involves exports, lookups and a lot of checking, the data isn’t connected." },
        { type: "h3", text: "4. Simple questions take hours to answer" },
        { type: "p", text: "What’s our margin on this product line? Which location is actually profitable? If answering needs someone to build a new sheet, you’re making decisions late." },
        { type: "h3", text: "5. Each location or channel has its own version of the truth" },
        { type: "p", text: "Store, website, marketplace and wholesale all tracked separately means nobody sees the whole business at once." },
        { type: "h3", text: "6. The spreadsheet has an owner nobody else dares touch" },
        { type: "p", text: "When one person understands the formulas, your operations depend on their holidays." },
        { type: "h3", text: "7. You’re paying for tools that overlap" },
        { type: "p", text: "Separate subscriptions for invoicing, inventory, POS and CRM, each holding part of the picture, often cost more together than one system that does all of it." },
      ],
    },
      {
      id: "what-erp-involves",
      heading: "What moving to an ERP involves",
      blocks: [
        { type: "p", text: "An ERP brings sales, inventory, purchasing, accounting and often POS and CRM into one system. The move itself is where projects succeed or fail." },
        { type: "ol", items: [
        { lead: "Mapping how the business really runs.", text: " Not the process on paper, the one people actually follow." },
        { lead: "Cleaning the data.", text: " Duplicate products, old customers and inconsistent codes need fixing before migration, not after." },
        { lead: "Moving in stages.", text: " Switching everything overnight is how businesses stop trading for a week. Phased rollouts keep the lights on." },
        { lead: "Training.", text: " A system nobody trusts gets bypassed with a new spreadsheet within a month." },
      ] },
      ],
    },
      {
      id: "odoo",
      heading: "Is Odoo the right fit?",
      blocks: [
        { type: "p", text: "Odoo is a modular ERP, so you start with the apps you need and add more later. It comes in a free Community edition and a paid Enterprise edition with more features and official support. It tends to suit retailers, distributors, service businesses and light manufacturers who have outgrown separate tools but don’t need a heavyweight enterprise system." },
        { type: "p", text: "It’s a weaker fit if your industry runs on specialist software that already does the job well, or if your processes are so unusual that almost everything would need custom development." },
        { type: "p", text: "If three or more of the signs above sound familiar, it’s worth a proper look." },
      ],
    },
  ],
    aside: { heading: "Running on spreadsheets?", text: "Walk us through how your business runs today. We’ll tell you whether an ERP makes sense yet.", href: "/lp/odoo-erp/", cta: "See how we do it" },
    related: [
    { slug: "ai-video-ads-vs-traditional-shoot", dataCat: "ai", dataC: "ai", alt: "AI video ads vs a traditional shoot: what actually changes", tag: "AI video", tagClass: "ai", readTime: "6 min read", title: "AI video ads vs a traditional shoot: what actually changes", desc: "Where AI-produced video ads beat a traditional shoot, where they don't, and how to brief one so it doesn't look like AI." },
    { slug: "when-cgi-beats-a-product-shoot", dataCat: "d3", dataC: "d3", alt: "When CGI beats a product shoot, and when it doesn’t", tag: "3D and CGI", tagClass: "d3", readTime: "5 min read", title: "When CGI beats a product shoot, and when it doesn’t", desc: "A practical guide to choosing CGI or a live-action product shoot: what each does best, what CGI needs from you, and how hybrids work." },
    ],
  }
];
