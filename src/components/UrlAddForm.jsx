import React, { useState } from 'react';
import { Link as LinkIcon, DollarSign, PlusCircle } from 'lucide-react';

export default function UrlAddForm({ onAdd }) {
  const [url, setUrl] = useState('');
  const [targetPrice, setTargetPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    onAdd?.({ url, targetPrice: targetPrice ? Number(targetPrice) : null });
    setUrl('');
    setTargetPrice('');
  };

  return (
    <section id="add" className="py-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Add a product to track</h2>
          <p className="text-slate-600 text-sm mt-1">Paste a product URL and optionally set a target price.</p>

          <form onSubmit={handleSubmit} className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><LinkIcon size={18} /></span>
                <input
                  type="url"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://store.com/product"
                  className="w-full pl-9 pr-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><DollarSign size={18} /></span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                  placeholder="Target price (optional)"
                  className="w-full pl-9 pr-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
            >
              <PlusCircle size={18} />
              Add
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
