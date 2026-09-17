export function MediaSlot({ text = "Add a still or clip" }: { text?: string }) {
  return <span className="slot">{text}</span>;
}
