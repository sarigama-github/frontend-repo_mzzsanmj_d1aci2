import React from 'react';
import { ShoppingCart, Bell, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 grid place-items-center text-white">
            <ShoppingCart size={18} />
          </div>
          <span className="text-lg">WishTrack</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#add" className="hover:text-slate-900 transition-colors">Add</a>
          <a href="#history" className="hover:text-slate-900 transition-colors">History</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <Bell size={18} />
            <span className="hidden sm:inline">Alerts</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
            <LogIn size={18} />
            <span className="hidden sm:inline">Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
}
