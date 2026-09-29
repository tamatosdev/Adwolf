"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, accentFor, labelFor } from "@/data/work";

const featuredSlugs = ["costa", "ihop", "himalaya", "a47"];

const slides = featuredSlugs
  .map((s) => projects.find((p) => p.slug === s))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export function WorkSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: number) {
    const track = trackRef.current;
    if (!track) return;
    const step = (track.querySelector(".slide") as HTMLElement | null)?.offsetWidth ?? 400;
    track.scrollBy({ left: dir * (step + 24), behavior: "smooth" });
  }

  return (
    <section className="sec tight" aria-labelledby="work-h" data-slider="">
      <div className="wrap sec-head">
        <h2 className="huge cond" id="work-h">Work</h2>
        <div className="slider-ctrl">
          <button className="icon-btn" type="button" aria-label="Previous project" onClick={() => scrollBy(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button className="icon-btn" type="button" aria-label="Next project" onClick={() => scrollBy(1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
          </button>
          <Link className="pill ghost" href="/work/">All work</Link>
        </div>
      </div>
      <div className="slider" ref={trackRef} tabIndex={0} aria-label="Selected projects">
        {slides.map((p) => (
          <Link className="slide" key={p.slug} href={`/work/${p.slug}/`}>
            <div className="media grid-bg" data-c={accentFor(p)}>
              <Image
                src={p.cover.src}
                alt={`${p.client} – ${p.tagline}`}
                fill
                sizes="(max-width:900px) 100vw, 44vw"
              />
            </div>
            <div className="cap">
              <h3 className="cond">{p.tagline}</h3>
              <span className="meta">
                <b>{p.client}</b>
                <span className={`tag ${accentFor(p)}`}>{labelFor(p.categories[0])}</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}