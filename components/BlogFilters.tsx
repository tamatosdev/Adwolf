"use client";

const filters = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI video", tagClass: "ai" },
  { key: "d3", label: "3D and CGI", tagClass: "d3" },
  { key: "d2", label: "2D and motion", tagClass: "d2" },
  { key: "code", label: "Software", tagClass: "code" },
] as const;

export function BlogFilters() {
  function onFilter(key: string) {
    document.querySelectorAll<HTMLElement>('[data-filter-group="#postList"] .chip').forEach((x) => {
      x.setAttribute("aria-pressed", String(x.getAttribute("data-filter") === key));
    });
    const target = document.querySelector("#postList");
    target?.querySelectorAll<HTMLElement>("[data-cat]").forEach((item) => {
      const cats = item.getAttribute("data-cat") ?? "";
      item.hidden = !(key === "all" || cats.split(" ").includes(key));
    });
  }

  return (
    <div className="filters" data-filter-group="#postList" aria-label="Filter posts">
      {filters.map((f) => (
        <button
          key={f.key}
          className="chip"
          type="button"
          data-filter={f.key}
          aria-pressed={f.key === "all"}
          onClick={() => onFilter(f.key)}
        >
          {"tagClass" in f && <span className={`tag ${f.tagClass}`} />}
          {f.label}
        </button>
      ))}
    </div>
  );
}