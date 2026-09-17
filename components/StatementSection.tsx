"use client";

import { useEffect, useRef, useState } from "react";

const words = ["A", "crew.", "A", "set.", "Six", "weeks.", "Or", "us."];

export function StatementSection() {
  const [visibleCount, setVisibleCount] = useState(words.length);
  const elRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (REDUCE) return;

    const onScroll = () => {
      const r = elRef.current?.getBoundingClientRect();
      if (!r) return;
      const p = Math.min(1, Math.max(0, (innerHeight * 0.9 - r.top) / (r.height + innerHeight * 0.35)));
      setVisibleCount(Math.round(p * words.length));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="sec statement" aria-label="Statement">
      <div className="wrap">
        <p className="cond" ref={elRef}>
          {words.map((w, i) => (
            <span key={i} className={`w${i < visibleCount ? " on" : ""}${i === words.length - 1 ? " last" : ""}`}>
              {w}{i < words.length - 1 && " "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
