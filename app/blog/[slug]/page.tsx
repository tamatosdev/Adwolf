import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Fragment } from "react";
import { CTASection } from "@/components/CTASection";
import { AsideCard } from "@/components/AsideCard";
import { KeepReading } from "@/components/KeepReading";
import { blogPosts, type BlogBlock } from "@/lib/blog-posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Adwolf`,
    description: post.description,
  };
}

function renderBlock(block: BlogBlock, key: string) {
  if (block.type === "h3") return <h3 key={key}>{block.text}</h3>;
  if (block.type === "p") return <p key={key}>{block.text}</p>;
  if (block.type === "lead")
    return (
      <p key={key}>
        <strong>{block.lead}</strong>
        {block.text}
      </p>
    );
  const Tag = block.type;
  return (
    <Tag key={key}>
      {block.items.map((item, i) => (
        <li key={i}>
          {item.lead !== "" ? <strong>{item.lead}</strong> : null}
          {item.text}
        </li>
      ))}
    </Tag>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main id="main">
      <article>
        <header className="article-head">
          <div className="wrap">
            <div style={{ maxWidth: 1000 }}>
              <p className="crumbs">
                <Link href="/blog/">Blog</Link>
                {" / " + post.crumb}
              </p>
              <span className={`tag ${post.tagClass}`}>{post.tag}</span>
              <h1 className="cond">{post.title}</h1>
              <div className="article-meta">
                <time dateTime={post.dateISO}>{post.dateLabel}</time>
                <span>{post.readTime}</span>
                <span>By the Adwolf studio</span>
              </div>
            </div>
          </div>
        </header>
        <div className="wrap">
          <div
            className="media grid-bg"
            data-c={post.tagClass}
            data-src=""
            data-alt={post.alt}
            style={{ aspectRatio: "21/9", marginBottom: "clamp(40px,5vw,72px)" }}
          >
            <span className="slot">Add a cover image (21:9)</span>
          </div>
          <div className="article-grid">
            <div className="prose">
              <p>{post.intro}</p>
              <nav className="toc" aria-label="In this post">
                <b>In this post</b>
                <ol>
                  {post.toc.map((t) => (
                    <li key={t.anchor}>
                      <a href={`#${t.anchor}`}>{t.label}</a>
                    </li>
                  ))}
                </ol>
              </nav>
              {post.sections.map((section) => (
                <Fragment key={section.id}>
                  <h2 id={section.id}>{section.heading}</h2>
                  {section.blocks.map((block, i) => renderBlock(block, `${section.id}-${i}`))}
                </Fragment>
              ))}
            </div>
            <AsideCard
              heading={post.aside.heading}
              text={post.aside.text}
              href={post.aside.href}
              cta={post.aside.cta}
            />
          </div>
        </div>
      </article>
      <KeepReading posts={post.related} />
      <CTASection />
    </main>
  );
}