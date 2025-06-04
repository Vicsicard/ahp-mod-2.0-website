import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SolutionPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Search Changed Everything.
          </h1>
          <p className="text-lg md:text-xl mb-8">
            LLMs don't show links — they summarize. If your site isn't understood by AI, you're invisible.
          </p>
          <a
            href="/score"
            className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
          >
            Check Your AI Visibility Score
          </a>
        </div>
      </section>

      {/* Old vs New Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            SEO Then vs. Now
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Old Way */}
            <div className="border border-gray-300 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">The Old Way</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Write keyword-targeted content</li>
                <li>Rank on Google's blue links</li>
                <li>Hope users click through</li>
              </ul>
            </div>

            {/* New Way */}
            <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">The New Way</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>AI bots crawl and embed your site</li>
                <li>LLMs summarize answers from memory</li>
                <li>No citation = no visibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
