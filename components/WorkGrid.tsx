"use client";

import { useState } from "react";
import { FilterBar } from "./FilterBar";
import { WorkCard, type WorkCardProject } from "./WorkCard";

export function WorkGrid({ projects }: { projects: WorkCardProject[] }) {
  const [filter, setFilter] = useState<string>("all");

  const visible = projects.filter((p) => filter === "all" || p.dataCat === filter);

  return (
    <>
      <FilterBar onFilter={setFilter} />
      <div className="work-grid" id="workGrid">
        {visible.map((p) => (
          <WorkCard key={p.href} project={p} />
        ))}
      </div>
    </>
  );
}