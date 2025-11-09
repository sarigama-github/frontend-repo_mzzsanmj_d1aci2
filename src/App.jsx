import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import UrlAddForm from './components/UrlAddForm.jsx';
import PriceHistoryCard from './components/PriceHistoryCard.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

export default function App() {
  const [history, setHistory] = useState([
    { date: '2025-10-01', price: 89.99 },
    { date: '2025-10-05', price: 84.49 },
    { date: '2025-10-09', price: 95.0 },
    { date: '2025-10-15', price: 79.99 },
    { date: '2025-10-22', price: 82.49 },
  ]);

  const handleAdd = ({ url, targetPrice }) => {
    const last = history[history.length - 1];
    const delta = (Math.random() - 0.5) * 10;
    const nextPrice = Math.max(1, (last?.price ?? 80) + delta);
    const nextDate = new Date(last ? new Date(last.date).getTime() + 1000 * 60 * 60 * 24 * 3 : Date.now());

    setHistory((prev) => [
      ...prev,
      { date: nextDate.toISOString().slice(0, 10), price: Number(nextPrice.toFixed(2)) },
    ]);

    console.log('Added URL', { url, targetPrice });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <ErrorBoundary
          fallback={(
            <section className="relative min-h-[420px] md:min-h-[520px] grid place-items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-sky-100 to-emerald-100" />
              <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
                  Track prices. Save money. Love your wishlist.
                </h1>
                <p className="mt-4 text-slate-600 md:text-lg">
                  Add product links from your favorite stores and get notified when the price drops.
                </p>
              </div>
            </section>
          )}
        >
          <Hero />
        </ErrorBoundary>
        <UrlAddForm onAdd={handleAdd} />
        <div className="max-w-5xl mx-auto px-4 grid gap-6">
          <PriceHistoryCard title="Wishlist Item · Price" data={history} />
        </div>
      </main>
      <footer id="about" className="mt-12 py-8 text-center text-sm text-slate-500">
        Built with love for smart shoppers.
      </footer>
    </div>
  );
}
