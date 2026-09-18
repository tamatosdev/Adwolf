export function AsideCard({
  heading,
  text,
  href,
  cta,
}: {
  heading: string;
  text: string;
  href: string;
  cta: string;
}) {
  return (
    <aside className="aside-card">
      <h3>{heading}</h3>
      <p>{text}</p>
      <a className="pill dark" href={href}>
        {cta}
      </a>
    </aside>
  );
}