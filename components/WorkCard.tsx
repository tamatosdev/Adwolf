import Link from "next/link";

export type WorkCardProject = {
  href?: string;
  title: string;
  client: string;
  tag?: string;
  tagClass?: string;
  dataCat: string;
  dataC: string;
  spanClass: string;
  slot: string;
  alt: string;
  src?: string;
};

export function WorkCard({ project }: { project: WorkCardProject }) {
  const inner = (
    <>
      <div
        className={`media grid-bg${project.src ? " filled" : ""}`}
        data-c={project.dataC}
        data-src={project.src ?? ""}
        data-alt={project.alt}
      >
        {project.src ? (
          <img src={project.src} alt={project.alt} />
        ) : (
          <span className="slot">{project.slot}</span>
        )}
      </div>
      <div className="cap">
        <h3 className="cond">{project.title}</h3>
        <span className="meta">
          <b>{project.client}</b>
          {project.tag && project.tagClass && (
            <span className={`tag ${project.tagClass}`}>{project.tag}</span>
          )}
        </span>
      </div>
    </>
  );

  const cls = `tile ${project.spanClass}`;

  if (project.href) {
    return (
      <Link href={project.href} className={cls} data-cat={project.dataCat}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={cls} data-cat={project.dataCat}>
      {inner}
    </div>
  );
}