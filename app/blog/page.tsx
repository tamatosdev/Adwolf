import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BlogList } from "@/components/BlogList";
import { BlogFilters } from "@/components/BlogFilters";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog | Adwolf",
  description: "Practical writing on AI video ads, CGI, animation, websites and ERP from the Adwolf studio.",
};

const posts = [
  {
    href: "/blog/ai-video-ads-vs-traditional-shoot/", dataCat: "ai", dataC: "ai",
    tag: "AI video", tagClass: "ai",
    title: "AI video ads vs a traditional shoot: what actually changes",
    desc: "Where AI-produced video ads beat a traditional shoot, where they don't, and how to brief one so it doesn't look like AI.",
    metaTop: "2 September 2026, 6 min read",
  },
  {
    href: "/blog/when-cgi-beats-a-product-shoot/", dataCat: "d3", dataC: "d3",
    tag: "3D and CGI", tagClass: "d3", readTime: "5 min read",
    title: "When CGI beats a product shoot, and when it doesn\u2019t",
    desc: "A practical guide to choosing CGI or a live-action product shoot: what each does best, what CGI needs from you, and how hybrids work.",
  },
  {
    href: "/blog/signs-you-have-outgrown-spreadsheets/", dataCat: "code", dataC: "code",
    tag: "Software", tagClass: "code", readTime: "6 min read",
    title: "Seven signs your business has outgrown spreadsheets",
    desc: "The warning signs that spreadsheets and disconnected tools are costing you, and what moving to an ERP like Odoo actually involves.",
  },
];

export default function BlogPage() {
  return (
    <main id="main">
      <PageHero>
        <h1 className="huge cond">Blog</h1>
        <div className="sec-head" style={{ margin: "28px 0 0" }}>
          <p className="lede" style={{ color: "var(--muted)" }}>
            Straight answers on AI video, CGI, animation and business software, from the team that makes them.
          </p>
          <BlogFilters />
        </div>
      </PageHero>

      <section className="sec tight">
        <BlogList featured={posts[0]} cards={posts.slice(1)} />
      </section>

      <CTASection />
    </main>
  );
}