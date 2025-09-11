"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

/** Actual Search Component */
function SearchPageInner() {
  const params = useSearchParams();
  const query = params.get("q");

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 text-white">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        🔍 Search Results
      </h1>

      {query ? (
        <p className="text-lg">
          Showing results for:{" "}
          <span className="font-semibold text-orange-400">{query}</span>
        </p>
      ) : (
        <p className="text-lg text-gray-400">
          No search query provided. Please enter something.
        </p>
      )}

      {/* Example results section */}
      <div className="mt-6 space-y-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          Example Result 1 (replace with your data)
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          Example Result 2 (replace with your data)
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          Example Result 3 (replace with your data)
        </div>
      </div>
    </div>
  );
}

/** Page wrapped with Suspense */
export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-gray-400">Loading search…</div>}>
      <SearchPageInner />
    </Suspense>
  );
}
