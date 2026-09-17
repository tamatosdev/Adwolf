import Link from "next/link";

const posts = [
  {
    href: "/blog/ai-video-ads-vs-traditional-shoot/",
    dataC: "ai",
    dataCat: "ai",
    slot: "Add a cover image",
    tag: "AI video",
    tagClass: "ai",
    readTime: "6 min read",
    title: "AI video ads vs a traditional shoot: what actually changes",
    desc: "Where AI-produced video ads beat a traditional shoot, where they don\u2019t, and how to brief one so it doesn\u2019t look like AI.",
  },
  {
    href: "/blog/when-cgi-beats-a-product-shoot/",
    dataC: "d3",
    dataCat: "d3",
    slot: "Add a cover image",
    tag: "3D and CGI",
    tagClass: "d3",
    readTime: "5 min read",
    title: "When CGI beats a product shoot, and when it doesn\u2019t",
    desc: "A practical guide to choosing CGI or a live-action product shoot: what each does best, what CGI needs from you, and how hybrids work.",
  },
  {
    href: "/blog/signs-you-have-outgrown-spreadsheets/",
    dataC: "code",
    dataCat: "code",
    slot: "Add a cover image",
    tag: "Software",
    tagClass: "code",
    readTime: "6 min read",
    title: "Seven signs your business has outgrown spreadsheets",
    desc: "The warning signs that spreadsheets and disconnected tools are costing you, and what moving to an ERP like Odoo actually involves.",
  },
];

export function BlogPreviewSection() {
  return (
    <section className="sec tight" aria-labelledby="blog-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="big cond" id="blog-h">From the blog</h2>
          <Link className="pill ghost" href="/blog/">All posts</Link>
        </div>
        <div className="posts">
          {posts.map((p) => (
            <Link className="post-card" key={p.href} href={p.href} data-cat={p.dataCat}>
              <div className="media grid-bg" data-c={p.dataC}>
                <span className="slot">{p.slot}</span>
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
    </section>
  );
}
