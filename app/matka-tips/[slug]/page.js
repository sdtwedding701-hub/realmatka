// app/matka-diary/[slug]/page.js
export default function PostPage({ params }) {
  const { slug } = params;

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-2xl font-bold text-orange-400 mb-4">🔥 {slug.replace("-", " ")}</h1>
      <p className="text-gray-400 text-sm mb-6">Published on: {new Date().toLocaleDateString("hi-IN")}</p>

      <div className="prose prose-invert">
        <p>आज हम सीखेंगे कि Satta Matka को समझदारी से कैसे खेला जाए...</p>
        <p>👉 आज की ट्रिक: Final Number Chart का उपयोग...</p>
      </div>
    </div>
  );
}
