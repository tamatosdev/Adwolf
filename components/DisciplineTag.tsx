import type { ReactNode } from "react";

type Discipline = "ai" | "code" | "d2" | "d3";

const labels: Record<Discipline, string> = {
  ai: "AI video",
  code: "Software",
  d2: "2D and motion",
  d3: "3D and CGI",
};

export function DisciplineTag({ discipline, children }: { discipline: Discipline; children?: ReactNode }) {
  return <span className={`tag ${discipline}`}>{children ?? labels[discipline]}</span>;
}
