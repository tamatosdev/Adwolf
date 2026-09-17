export function FeatureGrid({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="feat">
      {items.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
