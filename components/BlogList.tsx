import Link from "next/link";

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
          <Link className="post-card" key={p.href} href={p.href} data-cat={p.dataCat}>
            <div className="media grid-bg" data-c={p.dataC} data-src="" data-alt={p.title}>
              <span className="slot">Add a cover image</span>
            </div>
            <div className="row-meta">
              <span className={`tag ${p.tagClass}`}>{p.tag}</span>
              <span>{p.readTime}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}