export function SectionHead({
  heading,
  id,
  description,
  children,
}: {
  heading: string;
  id?: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="sec-head">
      <h2 className="big cond" id={id}>
        {heading}
      </h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}
