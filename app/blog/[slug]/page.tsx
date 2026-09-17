import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

type PostStub = {
  title: string;
  tag: string;
  tagClass: string;
  readTime: string;
  lede: string;
};

const stubs: Record<string, PostStub> = {
  "ai-video-ads-vs-traditional-shoot": {
    title: "AI video ads vs a traditional shoot: what actually changes",
    tag: "AI video",
    tagClass: "ai",
    readTime: "6 min read",
    lede: "This post is being written.",
  },
  "when-cgi-beats-a-product-shoot": {
    title: "When CGI beats a product shoot, and when it doesn\u2019t",
    tag: "3D and CGI",
    tagClass: "d3",
    readTime: "5 min read",
    lede: "This post is being written.",
  },
  "signs-you-have-outgrown-spreadsheets": {
    title: "Seven signs your business has outgrown spreadsheets",
    tag: "Software",
    tagClass: "code",
    readTime: "6 min read",
    lede: "This post is being written.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(stubs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = stubs[slug];
  if (!post) return {};
  return {
    title: `${post.title} | Adwolf Blog`,
    description: post.lede,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = stubs[slug];
  if (!post) notFound();

  return (
    <main id="main">
      <PageHero>
        <div className="row-meta" style={{ marginBottom: 18 }}>
          <span className={`tag ${post.tagClass}`}>{post.tag}</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="huge cond">{post.title}</h1>
        <p className="lede">Coming soon. {post.lede}</p>
      </PageHero>

      <section className="sec tight">
        <div className="wrap two-col">
          <h2 className="big cond">Coming soon</h2>
          <div>
            <p>
              We&apos;re writing this article now. It will cover {post.tag.toLowerCase()}{" "}
              in the same practical, checklist-style format as the rest of the blog.
            </p>
            <p className="notice">
              <span className="todo">Add the full article here when it&apos;s ready.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <Link className="pill ghost" href="/blog/">
            Back to blog
          </Link>
        </div>
      </section>

      <CTASection />
    </main>
  );
}