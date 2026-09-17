export function TeamGrid({
  members,
}: {
  members: { name: string; role: string; dataC: string; alt: string }[];
}) {
  return (
    <div className="team">
      {members.map((m, index) => (
        <div key={`${m.name}-${index}`}>
          <div className="media grid-bg" data-c={m.dataC} data-src="" data-alt={m.alt}>
            <span className="slot">Add a portrait</span>
          </div>
          <b>{m.name}</b>
          <span>{m.role}</span>
        </div>
      ))}
    </div>
  );
}
