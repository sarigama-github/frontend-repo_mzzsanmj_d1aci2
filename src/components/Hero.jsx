import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7gR8zqJb7dxoA6IQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/70 via-white/60 to-white"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Track prices. Save money. Love your wishlist.
        </h1>
        <p className="mt-4 text-slate-600 md:text-lg">
          Add product links from your favorite stores and get notified when the price drops.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#add" className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Start Tracking</a>
          <a href="#history" className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50">View History</a>
        </div>
      </div>
    </section>
  );
}
