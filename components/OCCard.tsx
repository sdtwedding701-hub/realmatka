export default function OCCard({
  title, open = [], close = [], offDay = false
}: { title: string; open?: string[]; close?: string[]; offDay?: boolean }) {
  return (
    <div className="relative">
      {offDay && (
        <div className="absolute -top-3 left-0 right-0 flex items-center gap-2">
          <div className="h-0.5 bg-red-500 w-full" />
          <div className="text-xs text-red-400 font-semibold whitespace-nowrap">** OFF DAY **</div>
          <div className="h-0.5 bg-red-500 w-full" />
        </div>
      )}
      <div className="rounded-2xl bg-black border border-neutral-800 h-[168px] flex items-center justify-center text-center">
        <div>
          <div className="text-2xl font-semibold tracking-wide">{title}</div>
          <div className="mt-3 space-y-1">
            <div className="text-sm text-neutral-300">OPEN</div>
            <div className="text-xl font-bold">{open.join(" ") || "—"}</div>
            <div className="text-sm text-neutral-300 mt-3">CLOSE</div>
            <div className="text-xl font-bold">{close.join(" ") || "—"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
