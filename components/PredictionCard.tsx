export default function PredictionCard({title,lines=["***"],offDay=false}:{title:string;lines?:string[];offDay?:boolean;}){
  return (<div className="relative">
    {offDay && (<div className="absolute -top-3 left-0 right-0 flex items-center gap-2"><div className="h-0.5 bg-red-500 w-full"/><div className="text-xs text-red-400 font-semibold whitespace-nowrap">** OFF DAY **</div><div className="h-0.5 bg-red-500 w-full"/></div>)}
    <div className="mock-card flex items-center justify-center text-center"><div>
      <div className="text-2xl font-semibold tracking-wide">{title}</div>
      <div className="mt-3 space-y-1">{lines.map((l,i)=>(<div key={i} className="text-xl font-bold">{l}</div>))}</div>
    </div></div>
  </div>);
}
