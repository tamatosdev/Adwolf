import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { WorkGrid } from "@/components/WorkGrid";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Work | Adwolf",
  description: "Selected film, animation, design and software projects from Adwolf studio.",
};

const projects = [
  {
    href: "/work/mod-girl-ai-tvc/", title: "A TV ad with zero shoot days", client: "Mod Girl",
    tag: "AI video", tagClass: "ai", dataCat: "ai", dataC: "ai", spanClass: "s7", slot: "Add a still or clip", alt: "Mod Girl",
  },
  {
    href: "/work/cgi-product-film/", title: "Your strongest CGI project", client: "Add client",
    tag: "3D and CGI", tagClass: "d3", dataCat: "d3", dataC: "d3", spanClass: "s5 drop", slot: "Add a still or clip", alt: "Add client",
  },
  {
    href: "/work/insignia-properties/", title: "Luxury real estate, rebuilt for Meta", client: "Insignia Properties",
    tag: "2D and motion", tagClass: "d2", dataCat: "d2", dataC: "d2", spanClass: "s5", slot: "Add a still or clip", alt: "Insignia Properties",
  },
  {
    href: "/work/retail-odoo-erp/", title: "One back office for a growing retailer", client: "US retailer",
    tag: "Software", tagClass: "code", dataCat: "code", dataC: "code", spanClass: "s7 drop", slot: "Add a still or clip", alt: "US retailer",
  },
];

export default function WorkPage() {
  return (
    <main id="main">
      <PageHero>
        <h1 className="huge cond">Work</h1>
        <p className="lede">Films, ads, animation and systems. The rest we&apos;ll show you on a call.</p>
      </PageHero>

      <section className="sec tight">
        <div className="wrap">
          <WorkGrid projects={projects} />
        </div>
      </section>

      <CTASection />
    </main>
  );
}