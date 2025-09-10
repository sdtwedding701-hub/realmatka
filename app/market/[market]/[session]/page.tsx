"use client";

type Props = {
  params: {
    market: string;
    session: string;
  };
};

export default function SessionPage({ params }: Props) {
  const { market, session } = params;

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Market: {market}</h1>
      <h2 className="text-xl mt-2">Session: {session}</h2>
      <p className="mt-4 text-white/70">
        यहां {market} के लिए {session} से जुड़ी जानकारी और charts दिखेंगे।
      </p>
    </div>
  );
}
