"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { WolfCanvas } from "./WolfCanvas";

const modeWords: Record<string, string> = {
  ai: "Generated.",
  code: "Coded.",
  d2: "Drawn.",
  d3: "Rendered.",
};

const modeDurs: Record<string, string> = {
  ai: "5200ms",
  code: "4600ms",
  d2: "4600ms",
  d3: "6200ms",
};

const modeLabels = [
  { key: "ai", label: "AI" },
  { key: "code", label: "Code" },
  { key: "d2", label: "2D" },
  { key: "d3", label: "3D" },
];

export function HeroSection() {
  const [mode, setMode] = useState("ai");
  const wolfSetMode = useRef<((m: string) => void) | null>(null);

  const handleModeChange = useCallback((m: string) => {
    setMode(m);
  }, []);

  const handleModeClick = useCallback((m: string) => {
    wolfSetMode.current?.(m);
    setMode(m);
  }, []);

  return (
    <section className="hero-sec run" id="top" data-mode={mode} aria-pressed="true" style={{ "--dur": "5200ms" } as React.CSSProperties}>
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero">
        <div className="hero-copy">
          <h1 className="sr-only">Adwolf: AI video, animation, CGI and software studio</h1>
          <p className="hero-word cond" id="modeWord" aria-hidden="true">
            {modeWords[mode]}
          </p>
          <p className="lede">
            AI video, 2D and 3D animation, CGI and software. One team, whatever the medium.
          </p>
          <div className="modes" role="group" aria-label="Show the wolf in a different medium">
            {modeLabels.map((m) => (
              <button
                key={m.key}
                className={`mode${mode === m.key ? " run" : ""}`}
                type="button"
                data-mode={m.key}
                aria-pressed={mode === m.key}
                style={{ "--dur": modeDurs[m.key] } as React.CSSProperties}
                onClick={() => handleModeClick(m.key)}
              >
                {m.label}
              </button>
            ))}
          </div>
          <div className="hero-actions">
            <a className="pill" href="#reel">
              Watch the reel
            </a>
            <Link className="pill ghost" href="/contact/">
              Start a project
            </Link>
          </div>
        </div>
        <div className="stage" aria-hidden="true">
          <WolfCanvas mode={mode} onModeChange={handleModeChange} setModeRef={wolfSetMode} />
          <span className="mode-meta" id="modeMeta" />
        </div>
      </div>
    </section>
  );
}
