export function StepsList({ items, style }: { items: { title: string; desc: string }[]; style?: React.CSSProperties }) {
  return (
    <ol className="steps" style={style}>
      {items.map((item) => (
        <li key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </li>
      ))}
    </ol>
  );
}
