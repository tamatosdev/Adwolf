export function StatsBar({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div key={s.label}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
