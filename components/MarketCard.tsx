import Link from "next/link";
import { ChevronRight, Sun, Sunset, Moon } from "lucide-react";
const sessionIcon = { morning: Sun, day: Sunset, night: Moon } as const;
export default function MarketCard({title,slug,sessions}:{title:string;slug:string;sessions:string[];}){
  return (<div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-indigo-500/60 via-fuchsia-500/50 to-blue-500/60">
    <div className="card p-5 h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Link href={`/market/${slug}`} className="text-sm underline inline-flex items-center gap-1">Overview <ChevronRight className="h-4 w-4"/></Link>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {sessions.map((s)=>{ const Icon=(sessionIcon as any)[s]??Sun; return (
          <Link key={s} href={`/market/${slug}/${s}`} className="block rounded-xl border border-neutral-700 hover:border-neutral-500 p-3 text-center text-sm bg-gradient-to-br from-neutral-900/70 to-neutral-900/30">
            <div className="flex items-center justify-center gap-2"><Icon className="h-4 w-4"/><span>{s[0].toUpperCase()+s.slice(1)}</span></div>
          </Link>
        )})}
      </div>
    </div>
  </div>);
}
