import { useState } from 'react';
import { Link as LinkIcon, ArrowRight } from 'lucide-react';

function UrlAddForm({ onAdd }) {
  const [url, setUrl] = useState('');
  const [targetPrice, setTargetPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    onAdd?.({ url, targetPrice: targetPrice ? Number(targetPrice) : null });
    setUrl('');
    setTargetPrice('');
  };

  return (
    <section id="add" className="py-10 sm:py-14 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <LinkIcon size={20} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">Add a product URL</h2>
              <p className="text-sm text-gray-600 mt-1">Paste a link from Amazon, Flipkart, Walmart, AliExpress, or others. We’ll fetch details and track prices automatically.</p>
              <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-3">
                <input
                  type="url"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/product"
                  className="col-span-3 sm:col-span-3 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                  placeholder="Target price ($)"
                  className="col-span-2 sm:col-span-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button type="submit" className="col-span-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-gray-800">
                  Add
                  <ArrowRight size={16} />
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">We respect robots.txt and throttle requests to avoid impacting stores. Only public data is fetched.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UrlAddForm;
