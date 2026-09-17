"use client";

import { useRef, useEffect } from "react";

// Direct .mp4 or .webm link to the showreel on the home page
const REEL_URL = "";

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

export function ReelSection() {
  const secRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = secRef.current;
    const frame = frameRef.current;
    if (!sec || !frame) return;

    const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (REEL_URL) {
      const empty = sec.querySelector(".reel-empty");
      if (empty) empty.remove();
      frame.classList.remove("grid-bg");
      const v = document.createElement("video");
      Object.assign(v, { src: REEL_URL, muted: true, loop: true, playsInline: true, autoplay: true });
      v.setAttribute("aria-label", "Adwolf showreel");
      frame.appendChild(v);
      const b = document.createElement("button");
      b.className = "pill reel-sound";
      b.type = "button";
      b.textContent = "Sound on";
      b.addEventListener("click", () => {
        v.muted = !v.muted;
        b.textContent = v.muted ? "Sound on" : "Sound off";
      });
      frame.appendChild(b);
    }

    if (REDUCE) return;

    const onScroll = () => {
      const r = sec.getBoundingClientRect();
      const total = sec.offsetHeight - innerHeight;
      const p = clamp(-r.top / (total * 0.7), 0, 1);
      const e = 1 - Math.pow(1 - p, 3);
      frame.style.transform = `scale(${(0.56 + 0.44 * e).toFixed(4)})`;
      frame.style.borderRadius = `${24 * (1 - e)}px`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="reel" id="reel" aria-label="Showreel" ref={secRef}>
      <div className="reel-sticky">
        <div className="reel-frame grid-bg" ref={frameRef}>
          <div className="reel-empty">
            <div>
              <strong className="cond">SHOWREEL</strong>
              <span>Set REEL_URL in the component to play your reel here.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}