import Link from "next/link";
import { PostCard } from "./PostCard";

export type BlogPost = {
  href: string;
  dataCat: string;
  dataC: string;
  tag: string;
  tagClass: string;
  title: string;
  desc: string;
  metaTop?: string;
  readTime?: string;
};

export function BlogList({ featured, cards }: { featured: BlogPost; cards: BlogPost[] }) {
  return (
    <div className="wrap" id="postList">
      <Link className="post-feature" href={featured.href} data-cat={featured.dataCat}>
        <div className="media grid-bg" data-c={featured.dataC} data-src="" data-alt={featured.title}>
          <span className="slot">Add a cover image</span>
        </div>
        <div>
          <span className={`tag ${featured.tagClass}`}>{featured.tag}</span>
          <h2 className="cond">{featured.title}</h2>
          <p>{featured.desc}</p>
          <p className="muted" style={{ marginTop: 16 }}>{featured.metaTop}</p>
        </div>
      </Link>
      <div className="posts">
        {cards.map((p) => (
          <PostCard
            key={p.href}
            href={p.href}
            dataCat={p.dataCat}
            dataC={p.dataC}
            tag={p.tag}
            tagClass={p.tagClass}
            readTime={p.readTime ?? ""}
            title={p.title}
            desc={p.desc}
          />
        ))}
      </div>
    </div>
  );
}