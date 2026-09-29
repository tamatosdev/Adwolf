"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { WorkProject } from "@/data/work";

export function Gallery({ project }: { project: WorkProject }) {
  const alt = `${project.client} – ${project.tagline}`;
  const show = project.images.length > 1;
  const all = [project.cover, ...project.images.slice(1)];
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + all.length) % all.length);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % all.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, all.length]);

  const current = all[idx];

  return (
    <>
      <figure className="pw-stage">
        <Image
          src={project.images[0].src}
          alt={alt}
          width={project.images[0].w}
          height={project.images[0].h}
          sizes="100vw"
          priority
          className={show ? "can-zoom" : undefined}
          onClick={
            show
              ? () => {
                  setIdx(0);
                  setOpen(true);
                }
              : undefined
          }
        />
      </figure>

      {show && (
        <div className="pw-gal">
          {project.images.slice(1).map((img, i) => (
            <figure
              key={img.src}
              onClick={() => {
                setIdx(i + 1);
                setOpen(true);
              }}
            >
              <Image
                src={img.src}
                alt={alt}
                width={img.w}
                height={img.h}
                sizes="(max-width:900px) 100vw, 50vw"
              />
            </figure>
          ))}
        </div>
      )}

      <div
        className={`lbx${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={project.client}
      >
        <button
          className="lbx-btn lbx-close"
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {show && (
          <>
            <span className="lbx-count">
              {idx + 1} / {all.length}
            </span>
            <button
              className="lbx-btn lbx-prev"
              type="button"
              aria-label="Previous image"
              onClick={() => setIdx((i) => (i - 1 + all.length) % all.length)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className="lbx-btn lbx-next"
              type="button"
              aria-label="Next image"
              onClick={() => setIdx((i) => (i + 1) % all.length)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </>
        )}
        <div className="lbx-fig">
          <Image src={current.src} alt={alt} width={current.w} height={current.h} sizes="100vw" />
          <span className="lbx-cap">{alt}</span>
        </div>
      </div>
    </>
  );
}