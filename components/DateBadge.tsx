export default function DateBadge({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900/70">
      <span className="text-xs text-neutral-400">Date:</span>
      <span className="text-sm font-medium">{date}</span>
    </div>
  );
}
