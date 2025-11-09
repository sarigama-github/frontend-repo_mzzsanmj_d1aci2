import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UrlAddForm from './components/UrlAddForm'
import PriceHistoryCard from './components/PriceHistoryCard'

function App() {
  const [items, setItems] = useState([
    { date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), price: 129.99 },
    { date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), price: 119.99 },
    { date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), price: 114.49 },
    { date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), price: 118.0 },
    { date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), price: 112.9 },
    { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), price: 109.5 },
    { date: new Date(), price: 105.0 },
  ]);

  const handleAdd = ({ url, targetPrice }) => {
    // For now, just simulate adding and a slight price change
    const last = items[items.length - 1]?.price ?? 100;
    const next = Number((last - Math.random() * 3).toFixed(2));
    setItems(prev => [...prev, { date: new Date(), price: next }]);
    console.log('Added URL:', url, 'Target:', targetPrice);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <main>
        <UrlAddForm onAdd={handleAdd} />
        <PriceHistoryCard items={items} />
      </main>
      <footer className="py-8 text-center text-sm text-gray-500">Built for price watchers • Mobile-first • Real-time vibes</footer>
    </div>
  )
}

export default App
