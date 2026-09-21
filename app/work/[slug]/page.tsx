import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Fragment } from "react";
import { CTASection } from "@/components/CTASection";
import { QuoteButton } from "@/components/QuoteButton";
import {
  workProjects,
  type WorkCsBody,
  type WorkInline,
} from "@/lib/work-projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = workProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.metaTitle} | Adwolf`,
    description: project.description,
  };
}

function renderInline(segs: WorkInline[]) {
  return segs.map((s, i) =>
    s.kind === "todo" ? (
      <span className="todo" key={i}>
        {s.text}
      </span>
    ) : (
      <Fragment key={i}>{s.text}</Fragment>
    )
  );
}

function renderCsBody(body: WorkCsBody) {
  if (body.kind === "prose") {
    return (
      <div className="prose">
        {body.paragraphs.map((p, i) => (
          <p key={i}>{renderInline(p)}</p>
        ))}
      </div>
    );
  }
  if (body.kind === "result") {
    return (
      <div>
        <p className="result cond">{renderInline(body.segs)}</p>
      </div>
    );
  }
  return (
    <div className="quotes" style={{ gridTemplateColumns: "minmax(0,420px)" }}>
      <QuoteButton
        c={body.c}
        alt={body.alt}
        slot={body.slot}
        whoB={body.whoB}
        whoSpan={body.whoSpan}
        line={body.line}
        video={body.video}
        vertical={body.vertical}
      />
    </div>
  );
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = workProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main id="main">
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <p className="crumbs">
            <Link href="/work/">Work</Link>
            {" / " + project.crumb}
          </p>
          <span className={`tag ${project.tagClass}`}>{project.tag}</span>
          <h1 className="big cond" style={{ marginTop: 16, maxWidth: "16ch" }}>
            {project.title}
          </h1>
          <p className="lede">{project.lede}</p>
          <dl className="facts">
            {project.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <div
            className="media grid-bg"
            data-c={project.heroC}
            data-src=""
            data-alt={project.heroAlt}
            style={{ aspectRatio: "16/9", margin: "clamp(40px,5vw,72px) 0" }}
          >
            <span className="slot">Add the hero video or still for this project</span>
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          {project.sections.map((section, i) => {
            if (section.kind === "frames") {
              return (
                <div
                  className="quotes"
                  key={i}
                  style={{
                    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                    marginBottom: "clamp(40px,5vw,72px)",
                  }}
                >
                  {section.slots.map((slot, j) => (
                    <div
                      className="media grid-bg"
                      data-c={section.c}
                      data-src=""
                      data-alt=""
                      style={{ aspectRatio: "4/3" }}
                      key={j}
                    >
                      <span className="slot">{slot}</span>
                    </div>
                  ))}
                </div>
              );
            }
            if (section.kind === "next") {
              return (
                <Link className="next-case" key={i} href={`/work/${section.slug}/`}>
                  <span>Next project</span>
                  <p className="big cond" style={{ marginTop: 10 }}>
                    {section.title}
                  </p>
                </Link>
              );
            }
            return (
              <div className="cs-block" key={i}>
                <h2 className="cond">{section.heading}</h2>
                {renderCsBody(section.body)}
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </main>
  );
}