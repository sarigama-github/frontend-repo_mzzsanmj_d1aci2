import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/3V1m4iGQwzbe1mV8/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-900/5 mb-4 pointer-events-none">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            Track prices across Amazon, Flipkart, Walmart & AliExpress
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Build your ultimate wishlist. Get notified when prices drop.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Add product URLs, watch live price updates, and visualize historical trends. Mobile-first, real-time, and privacy-friendly.
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

export default Hero;
