import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  landingPages,
  proofIntro,
  proofLogos,
  quoteSlot,
  quoteAlt,
  quoteName,
  quoteTitle,
  quoteLine,
  type LPData,
} from "@/lib/landing-pages";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { WorkCard } from "@/components/WorkCard";
import { LPCTASection } from "@/components/CTASection";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(landingPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = landingPages[slug];
  if (!data) return {};
  return {
    title: `${data.headline.replace(/\.$/, "")} | Adwolf`,
    description: data.lede,
  };
}

function RecentWork({ data }: { data: LPData }) {
  const w = data.work;
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="big cond">Recent work</h2>
        </div>
        <div className="work-grid">
          <WorkCard
            project={{
              href: w.tileHref,
              title: w.tileTitle,
              client: w.tileClient,
              tag: w.tileTag,
              tagClass: w.tileTagClass,
              dataCat: w.tileDataC,
              dataC: w.tileDataC,
              spanClass: w.tileClass,
              slot: w.tileSlot,
              alt: w.tileClient,
              src: w.tileSrc,
            }}
          />
          <div className="s5" style={{ gridColumn: "span 5" }}>
            <button className="quote" type="button" data-video="" data-vertical="false">
              <div className="media grid-bg" data-c={w.tileDataC} data-src="" data-alt={quoteAlt}>
                <span className="slot">{quoteSlot}</span>
                <span className="play">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7 5v14l12-7z" />
                  </svg>
                </span>
              </div>
              <span className="who">
                <b>{quoteName}</b>
                <span>{quoteTitle}</span>
              </span>
              <span className="line">{quoteLine}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const data = landingPages[slug];
  if (!data) notFound();

  return (
    <main id="main" style={{ "--c": `var(--${data.tagClass})` } as CSSProperties}>
      <section className="lp-hero">
        <div className="wrap lp-grid">
          <div>
            <span className={`tag ${data.tagClass}`}>{data.tag}</span>
            <h1 className="cond">{data.headline}</h1>
            <p className="lede">{data.lede}</p>
            <ul className="lp-points">
              {data.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
          <ContactForm formName={data.formName} source={data.formSource} />
        </div>
      </section>

      <div className="wrap">
        <div className="proof-bar">
          <span className="muted">{proofIntro}</span>
          {proofLogos.map((logo) => (
            <b key={logo}>{logo}</b>
          ))}
        </div>
      </div>

      <RecentWork data={data} />

      <section className="sec tight">
        <div className="wrap two-col">
          <h2 className="big cond">What you get</h2>
          <div className="feat">
            {data.features.map((f, i) => (
              <div key={i}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <h2 className="big cond" style={{ marginBottom: "clamp(28px,4vw,48px)" }}>
            How it works
          </h2>
          <ol className="steps">
            {data.steps.map((s, i) => (
              <li key={i}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap two-col">
          <h2 className="big cond">Questions</h2>
          <FAQ items={data.faq} />
        </div>
      </section>

      <LPCTASection headline={data.ctaHeadline} formHref="#form" />
    </main>
  );
}