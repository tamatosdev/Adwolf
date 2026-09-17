"use client";

import { useState } from "react";

const disciplines = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI video", tagClass: "ai" },
  { key: "d3", label: "3D and CGI", tagClass: "d3" },
  { key: "d2", label: "2D and motion", tagClass: "d2" },
  { key: "code", label: "Software", tagClass: "code" },
] as const;

export function FilterBar({ onFilter }: { onFilter: (filter: string) => void }) {
  const [active, setActive] = useState("all");

  return (
    <div className="filters" aria-label="Filter items">
      {disciplines.map((d) => (
        <button
          key={d.key}
          className="chip"
          type="button"
          data-filter={d.key}
          aria-pressed={active === d.key}
          onClick={() => {
            setActive(d.key);
            onFilter(d.key);
          }}
        >
          {"tagClass" in d && <span className={`tag ${d.tagClass}`} />}
          {d.label}
        </button>
      ))}
    </div>
  );
}
