import { ShoppingCart, Bell, User } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-sm">
            <ShoppingCart className="text-white" size={20} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            WishTrackr
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#add" className="hover:text-gray-900 transition-colors">Add Product</a>
          <a href="#history" className="hover:text-gray-900 transition-colors">Price History</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100">
            <Bell size={20} />
            <span className="sr-only">Notifications</span>
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-rose-500"></span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3.5 py-2 text-sm font-medium hover:bg-gray-800">
            <User size={18} />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
