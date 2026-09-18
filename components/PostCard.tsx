import Link from "next/link";

type PostCardProps = {
  href: string;
  dataCat: string;
  dataC: string;
  tag: string;
  tagClass: string;
  readTime: string;
  title: string;
  desc: string;
  alt?: string;
};

export function PostCard(props: PostCardProps) {
  const { href, dataCat, dataC, tag, tagClass, readTime, title, desc, alt } = props;
  return (
    <Link className="post-card" href={href} data-cat={dataCat}>
      <div className="media grid-bg" data-c={dataC} data-src="" data-alt={alt ?? title}>
        <span className="slot">Add a cover image</span>
      </div>
      <div className="row-meta">
        <span className={`tag ${tagClass}`}>{tag}</span>
        <span>{readTime}</span>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </Link>
  );
}