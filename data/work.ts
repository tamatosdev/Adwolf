import { workImages, type WorkImage } from "./work-images";

export const categories = [
  { slug: "research", label: "Research" },
  { slug: "design", label: "Design" },
  { slug: "strategy", label: "Strategy" },
  { slug: "digital", label: "Digital" },
  { slug: "ui-ux", label: "UI/UX" },
  { slug: "web-development", label: "Web Development" },
  { slug: "seo", label: "SEO" },
  { slug: "social-media", label: "Social Media" },
  { slug: "ai-content-creation", label: "AI Content Creation" },
] as const;

export type Category = (typeof categories)[number]["slug"];

type ProjectBase = {
  slug: string;
  client: string;
  tagline: string;
  categories: Category[];
  description: string;
};

export type WorkProject = ProjectBase & { cover: WorkImage; images: WorkImage[] };

const raw: ProjectBase[] = [
  {
    slug: "costa",
    client: "Costa Coffee",
    tagline: "Savor the Moment",
    categories: ["social-media"],
    description:
      "We created visually appealing social media campaigns that spotlight Costa's premium blends, capturing the essence of a perfect break. The visuals emphasize the aroma, quality, and craftsmanship behind each cup, driving engagement and promoting Costa as a premium experience.",
  },
  {
    slug: "ihop",
    client: "IHOP",
    tagline: "Bringing Joy",
    categories: ["social-media"],
    description:
      "We crafted social media visuals that highlight the indulgence of IHOP's signature pancakes, featuring ingredients and flavors that excite taste buds. Our visuals resonate with breakfast lovers, driving engagement and highlighting IHOP's warm, inviting experience.",
  },
  {
    slug: "himalaya",
    client: "Himalaya",
    tagline: "Wellness in every home. Happiness in every heart.",
    categories: ["social-media"],
    description:
      "Fusing artistry with skincare, we crafted social media visuals that spotlight Himalaya Herbals' natural ingredients. With a keen eye for aesthetics, our artworks resonate with audiences, driving engagement and highlighting the brand's essence.",
  },
  {
    slug: "dealicious-mealz",
    client: "Dealicious Mealz",
    tagline: "Crunch That Speaks Flavor",
    categories: ["social-media"],
    description:
      "We crafted mouth-watering visuals that capture the irresistible crunch and bold flavour of their Spicy Chicken Crunchies. With a focus on texture, warmth, and indulgence, these visuals brought the product's sensory appeal to life, making every viewer crave that first, satisfying bite.",
  },
  {
    slug: "suncore-solar",
    client: "Suncore Solar",
    tagline: "Harnessing the Horizon",
    categories: ["social-media"],
    description:
      "Bringing Suncore's commitment to solar innovation into sharp focus, our campaign highlights the brand's mission to make clean energy accessible, efficient, and future-ready. With vibrant visuals and a clear promise of sustainability, we position Suncore as a solar trailblazer lighting the way forward in South Asia and beyond.",
  },
  {
    slug: "mary-browns-chicken",
    client: "Mary Brown's Chicken",
    tagline: "Crafting the Perfect Bite Experience",
    categories: ["social-media"],
    description:
      "We crafted a vibrant, appetite-driven menu for Mary Brown's Chicken that brings their signature crisp and comfort to life. Combining bold visuals, clean hierarchy, and irresistible food photography, this menu makes every customer crave their next bite.",
  },
  {
    slug: "aztec-chocolate",
    client: "Aztec Chocolate",
    tagline: "A Secret Worth Knowing",
    categories: ["social-media"],
    description:
      "Visuals that brought to life the well-kept secret of the Mayans, revitalized the brand to reveal a story untold. The campaign to create brand connect took a life of its own in the 'More than just chocolate' series, making it an essential part of the brand's identity.",
  },
  {
    slug: "mcon",
    client: "MCON",
    tagline: "Your Blueprint to a Better Tomorrow",
    categories: ["social-media"],
    description:
      "Join us on a journey of innovation and transformation as we redefine the art of construction with MCON. The campaign is a celebration of craftsmanship and the power of architectural dreams.",
  },
  {
    slug: "fad",
    client: "FAD",
    tagline: "Quintessential Panache",
    categories: ["social-media"],
    description:
      "An embodiment of luxury, their digital representation is nothing short of a visual treat. We captured the true quintessence of the brand with a renewed layout exuberating deluxe and panache.",
  },
  {
    slug: "chatterbox-cafe",
    client: "Chatterbox Cafe",
    tagline: "Conversations That Last",
    categories: ["social-media"],
    description:
      "A welcoming and upbeat café, Chatterbox exudes warmth, love, food & chatter. We reformed their visual vocabulary to represent the feeling of comfort & familiarity associated with Chatterbox café, a place to have conversations that last.",
  },
  {
    slug: "marcels",
    client: "Marcel's",
    tagline: "French Utopia",
    categories: ["social-media"],
    description:
      "The bold & vivacious communication opens a gateway to the delectable taste of France, transporting you to a utopia of happiness.",
  },
  {
    slug: "pie-in-the-sky",
    client: "Pie in the Sky",
    tagline: "Baking Happiness",
    categories: ["social-media"],
    description:
      "With over 300 varieties of sweets, nimco, cakes, desserts & savories, Pie in the Sky has been baking happiness for over 2 decades. With a pinch of creativity and a dash of innovation, we rejuvenated the brand with a slice of life approach to capture the true essence of sweetness it adds to our lives.",
  },
  {
    slug: "pidoko-kids",
    client: "Pidoko Kids",
    tagline: "Bringing Magic To Life",
    categories: ["social-media"],
    description:
      "We created an online shopping experience that would rival the excitement of a child browsing through a toyshop. From magnifying the visuals of the toys to accentuate their vibrancy, to crafting a user-friendly platform that's easy for both kids and parents to navigate, every aspect was carefully crafted to deliver an enthralling experience.",
  },
  {
    slug: "the-melt",
    client: "The Melt",
    tagline: "The Melt Down",
    categories: ["social-media"],
    description:
      "We crafted a marketing campaign that truly captures the excitement of a love affair with fast food. Our objective was to create a visual experience that would tantalize the senses and perfectly embody the lively, upbeat vibe of the brand.",
  },
  {
    slug: "a47",
    client: "A47",
    tagline: "Built for the Chaos of Meme Culture",
    categories: ["web-development", "ui-ux"],
    description:
      "A47 needed a platform that felt as chaotic and fast-moving as meme coin culture itself. We designed and developed a bold digital experience packed with vibrant visuals, playful interactions, and a community-first vibe that brings the energy of crypto straight to the screen.",
  },
  {
    slug: "cablemaster",
    client: "CableMaster",
    tagline: "Where Smart Design Meets Seamless Experience.",
    categories: ["web-development", "ui-ux"],
    description:
      "CableMaster needed clarity without compromise. We partnered with them to craft a sleek, intuitive UI/UX that makes every interaction feel effortless, blending modern visuals with real-world usability, built for impact from the very first click.",
  },
  {
    slug: "crq-technology",
    client: "CRQ Technology",
    tagline: "What Does Precision Look Like Online?",
    categories: ["web-development", "ui-ux"],
    description:
      "CRQ Technology needed a digital presence that matched the precision and reliability of their industry. We crafted a clean, structured UI/UX experience that delivers clarity, credibility, and a future-ready identity for the U.S. industrial market.",
  },
  {
    slug: "divine-dates",
    client: "Divine Dates",
    tagline: "How Do You Modernize Tradition Without Losing Its Soul?",
    categories: ["web-development", "ui-ux"],
    description:
      "The product was never the problem, the experience needed to catch up. We crafted a complete UI/UX journey that transformed a timeless brand into a modern digital presence through refined visuals, smooth interactions, and a premium feel that honors its roots.",
  },
  {
    slug: "gulabo",
    client: "Gulabo",
    tagline: "Style Isn't Just Worn. It's Experienced.",
    categories: ["web-development", "ui-ux"],
    description:
      "We didn't just build a website, we built a mood. We crafted a bold, expressive digital presence through custom web design and creative direction that translates the brand's personality into something visually alive on every scroll.",
  },
  {
    slug: "innovative-pvt-ltd",
    client: "Innovative Pvt Ltd",
    tagline: "Complex Solutions Deserve Simple Experiences.",
    categories: ["web-development", "ui-ux"],
    description:
      "Innovative Pvt Ltd operates in the world of powerful banking and currency solutions but the digital experience had to feel effortless. We designed and developed a full website from scratch, turning technical complexity into a clean, human-friendly journey that anyone can navigate with confidence.",
  },
  {
    slug: "prestige",
    client: "Prestige",
    tagline: "Creativity Deserves a Stage That Feels Just as Cinematic.",
    categories: ["web-development", "ui-ux"],
    description:
      "Prestige needed more than a digital presence; it needed presence with emotion. We designed and developed an immersive UI/UX experience that captures their creative legacy through cinematic flow and artistic depth that speaks before a word is read.",
  },
];

export const projects: WorkProject[] = raw.map((p) => ({
  ...p,
  cover: workImages[p.slug].cover,
  images: workImages[p.slug].images,
}));

const ACCENT: Record<Category, string> = {
  "social-media": "ai",
  "ai-content-creation": "ai",
  "web-development": "code",
  "ui-ux": "d3",
  research: "d2",
  design: "d2",
  strategy: "d2",
  digital: "d2",
  seo: "d2",
};

export function accentFor(p: Pick<WorkProject, "categories">): string {
  return ACCENT[p.categories[0]];
}

export function labelFor(category: Category): string {
  return categories.find((c) => c.slug === category)!.label;
}

export function getProject(slug: string): WorkProject | undefined {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(slug: string): WorkProject | undefined {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  return projects[(idx + 1) % projects.length];
}