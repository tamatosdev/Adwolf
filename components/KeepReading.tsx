import Link from "next/link";
import { PostCard } from "./PostCard";
import type { RelatedPost } from "@/lib/blog-posts";

export function KeepReading({ posts }: { posts: RelatedPost[] }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="big cond">Keep reading</h2>
          <Link className="pill ghost" href="/blog/">
            All posts
          </Link>
        </div>
        <div className="posts" style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))" }}>
          {posts.map((p) => (
            <PostCard
              key={p.slug}
              href={`/blog/${p.slug}/`}
              alt={p.alt}
              dataCat={p.dataCat}
              dataC={p.dataC}
              tag={p.tag}
              tagClass={p.tagClass}
              readTime={p.readTime}
              title={p.title}
              desc={p.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}