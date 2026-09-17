export function PageHero({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <section className="page-hero">
      <div className="wrap" style={style}>
        {children}
      </div>
    </section>
  );
}
