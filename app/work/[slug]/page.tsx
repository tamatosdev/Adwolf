import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { BackLink } from "@/components/work/BackLink";
import { Gallery } from "@/components/work/Gallery";
import { getProject, nextProject, labelFor, accentFor, projects } from "@/data/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  return {
    title: `${project.client} – ${project.tagline} | Adwolf`,
    description: project.description,
    metadataBase: base ? new URL(base) : undefined,
    openGraph: {
      title: `${project.client} – ${project.tagline}`,
      description: project.description,
      images: [{ url: project.cover.src }],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = nextProject(slug);

  return (
    <main id="main">
      <header className="detail-hero">
        <div className="wrap">
          <BackLink />
          <nav className="badges" aria-label="Project categories">
            {project.categories.map((c) => (
              <Link key={c} className={`tag ${accentFor({ categories: [c] })}`} href={`/work/?category=${c}`}>
                {labelFor(c)}
              </Link>
            ))}
          </nav>
          <h1>{project.client}</h1>
          <p className="tl">{project.tagline}</p>
          <p className="desc">{project.description}</p>
        </div>
      </header>

      <section className="sec tight">
        <div className="wrap">
          <Gallery project={project} />
        </div>
      </section>

      {next && (
        <Link href={`/work/${next.slug}/`} className="next-case">
          <div className="wrap">
            <span>Next project</span>
            <h2 className="big">{next.client}</h2>
          </div>
        </Link>
      )}

      <CTASection />
    </main>
  );
}