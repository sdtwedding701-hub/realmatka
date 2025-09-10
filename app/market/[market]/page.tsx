import { MARKETS, isMarket } from "@/lib/markets";
import Link from "next/link";
import type { Metadata } from "next";
type Props = { params: { market: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = params.market;
  const title = isMarket(key) ? `${MARKETS[key].name} Market — Overview` : "Market";
  return { title, description: `${title} | Sessions and archive.` };
}
export default function MarketOverview({ params }: Props) {
  const key = params.market;
  if (!isMarket(key)) return <div className="container-max">Unknown market.</div>;
  const market = MARKETS[key];
  return (<main className="container-max">
    <div className="card p-6">
      <h1 className="text-2xl font-bold">{market.name} — Overview</h1>
      <p className="text-neutral-400 mt-1">सेशंस, आज का चार्ट, और आर्काइव लिंक नीचे देखें।</p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {market.hasSessions.map((s) => (<Link key={s} href={`/market/${key}/${s}`} className="btn text-center justify-center">
          {s[0].toUpperCase()+s.slice(1)} — Today
        </Link>))}
      </div>
      <div className="mt-6"><Link href={`/market/${key}/archive`} className="underline">Go to {market.name} Archive (Coming Soon)</Link></div>
    </div>
  </main>);
}
