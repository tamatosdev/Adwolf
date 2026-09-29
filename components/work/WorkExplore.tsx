"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { categories, projects, accentFor, labelFor, type Category } from "@/data/work";

export function WorkExplore() {
  const sp = useSearchParams();
  const active = (sp.get("category") as Category | null) ?? "all";
  const visible =
    active === "all" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <>
      <nav className="wk-tabs" aria-label="Filter projects by category">
        <Link
          className="chip"
          aria-current={active === "all" ? "page" : undefined}
          href="/work/"
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            className="chip"
            aria-current={active === c.slug ? "page" : undefined}
            href={`/work/?category=${c.slug}`}
          >
            {c.label}
          </Link>
        ))}
      </nav>

      <div className="pw-grid">
        {visible.length === 0 ? (
          <p className="pw-empty">Case studies coming soon.</p>
        ) : (
          visible.map((p, i) => (
            <Link
              key={p.slug}
              className="pw-card"
              href={active === "all" ? `/work/${p.slug}/` : `/work/${p.slug}/?from=${active}`}
            >
              <div
                className={`media pw-media${p.categories.includes("web-development") ? " tp" : ""}`}
                data-c={accentFor(p)}
              >
                <Image
                  src={p.cover.src}
                  alt={`${p.client} – ${p.tagline}`}
                  fill
                  sizes="(max-width:560px) 100vw, (max-width:900px) 50vw, 33vw"
                  priority={i < 3}
                />
              </div>
              <div className="cap2">
                <h3 className="cond">{p.tagline}</h3>
                <span className="meta2">
                  <b>{p.client}</b>
                  <span className={`tag ${accentFor(p)}`}>{labelFor(p.categories[0])}</span>
                </span>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
}