"use client";

import { useRef } from "react";
import Link from "next/link";

const slides = [
  { href: "/work/mod-girl-ai-tvc/", dataC: "ai", slot: "Add a still or clip", alt: "Mod Girl", title: "A TV ad with zero shoot days", client: "Mod Girl", tag: "AI video", tagClass: "ai" },
  { href: "/work/cgi-product-film/", dataC: "d3", slot: "Add a still or clip", alt: "Add client", title: "Your strongest CGI project", client: "Add client", tag: "3D and CGI", tagClass: "d3" },
  { href: "/work/insignia-properties/", dataC: "d2", slot: "Add a still or clip", alt: "Insignia Properties", title: "Luxury real estate, rebuilt for Meta", client: "Insignia Properties", tag: "2D and motion", tagClass: "d2" },
  { href: "/work/retail-odoo-erp/", dataC: "code", slot: "Add a still or clip", alt: "US retailer", title: "One back office for a growing retailer", client: "US retailer", tag: "Software", tagClass: "code" },
];

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
        {slides.map((s) => (
          <Link className="slide" key={s.href} href={s.href}>
            <div className="media grid-bg" data-c={s.dataC}>
              <span className="slot">{s.slot}</span>
            </div>
            <div className="cap">
              <h3 className="cond">{s.title}</h3>
              <span className="meta">
                <b>{s.client}</b>
                <span className={`tag ${s.tagClass}`}>{s.tag}</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
