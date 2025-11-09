function PriceHistoryCard({ items = [] }) {
  // Prepare data: normalize dates and prices for SVG plotting
  const data = items.map((i) => ({
    x: new Date(i.date).getTime(),
    y: Number(i.price),
  }));

  if (data.length === 0) {
    return null;
  }

  const padding = { top: 16, right: 16, bottom: 24, left: 36 };
  const width = 800;
  const height = 220;
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const minX = Math.min(...data.map((d) => d.x));
  const maxX = Math.max(...data.map((d) => d.x));
  const minY = Math.min(...data.map((d) => d.y));
  const maxY = Math.max(...data.map((d) => d.y));

  const xScale = (x) => {
    if (maxX === minX) return padding.left + innerW / 2;
    return padding.left + ((x - minX) / (maxX - minX)) * innerW;
  };
  const yScale = (y) => {
    if (maxY === minY) return padding.top + innerH / 2;
    // Invert so higher prices appear higher on the chart visually flipped with padding
    return padding.top + (1 - (y - minY) / (maxY - minY)) * innerH;
  };

  const linePath = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(d.x)} ${yScale(d.y)}`)
    .join(' ');

  const areaPath = `${
    data.length ? `M ${xScale(data[0].x)} ${yScale(data[0].y)}` : ''
  } ${data
    .map((d) => `L ${xScale(d.x)} ${yScale(d.y)}`)
    .join(' ')} L ${xScale(data[data.length - 1].x)} ${padding.top + innerH} L ${xScale(
    data[0].x
  )} ${padding.top + innerH} Z`;

  const yTicks = 4;
  const ticks = Array.from({ length: yTicks + 1 }, (_, i) => {
    const v = minY + (i * (maxY - minY)) / yTicks;
    return {
      value: Number(v.toFixed(2)),
      y: yScale(v),
    };
  });

  const formatDate = (ms) => {
    const d = new Date(ms);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  };

  return (
    <section id="history" className="py-10 sm:py-14 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900">Price History</h3>
            <span className="text-xs text-gray-500">Demo data</span>
          </div>
          <div className="w-full overflow-x-auto">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-56"
              role="img"
              aria-label="Price history chart"
            >
              {/* Y grid lines */}
              {ticks.map((t, i) => (
                <g key={i}>
                  <line
                    x1={padding.left}
                    x2={width - padding.right}
                    y1={t.y}
                    y2={t.y}
                    stroke="#eef2f7"
                  />
                  <text
                    x={padding.left - 8}
                    y={t.y}
                    textAnchor="end"
                    dominantBaseline="middle"
                    className="fill-slate-500 text-[10px]"
                  >
                    ${t.value}
                  </text>
                </g>
              ))}

              {/* Area under line */}
              <path d={areaPath} fill="rgba(79, 70, 229, 0.08)" />

              {/* Price line */}
              <path d={linePath} fill="none" stroke="#4f46e5" strokeWidth="2" />

              {/* Points */}
              {data.map((d, i) => (
                <circle key={i} cx={xScale(d.x)} cy={yScale(d.y)} r={2.5} fill="#4f46e5" />
              ))}

              {/* X labels */}
              {data.map((d, i) => (
                <text
                  key={i}
                  x={xScale(d.x)}
                  y={height - 6}
                  textAnchor="middle"
                  className="fill-slate-500 text-[10px]"
                >
                  {formatDate(d.x)}
                </text>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceHistoryCard;
