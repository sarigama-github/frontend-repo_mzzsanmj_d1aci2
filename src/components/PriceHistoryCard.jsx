import React from 'react';

function formatCurrency(value) {
  return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(value);
}

export default function PriceHistoryCard({ title = 'Price History', data = [] }) {
  const width = 640;
  const height = 280;
  const margin = { top: 16, right: 16, bottom: 32, left: 48 };
  const innerW = width - margin.left - margin.right;
  const innerH = height - margin.top - margin.bottom;

  const points = data
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((d) => ({ x: new Date(d.date).getTime(), y: d.price }));

  const xMin = points.length ? points[0].x : 0;
  const xMax = points.length ? points[points.length - 1].x : 1;
  const yMin = points.length ? Math.min(...points.map((p) => p.y)) : 0;
  const yMax = points.length ? Math.max(...points.map((p) => p.y)) : 1;

  const padY = (yMax - yMin) * 0.1 || 1;
  const y0 = yMin - padY;
  const y1 = yMax + padY;

  const xScale = (x) => ((x - xMin) / (xMax - xMin || 1)) * innerW + margin.left;
  const yScale = (y) => innerH - ((y - y0) / (y1 - y0 || 1)) * innerH + margin.top;

  const pathD = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${xScale(p.x)} ${yScale(p.y)}`)
    .join(' ');

  const areaD = points.length
    ? `M ${xScale(points[0].x)} ${yScale(points[0].y)} ` +
      points.slice(1).map((p) => `L ${xScale(p.x)} ${yScale(p.y)}`).join(' ') +
      ` L ${xScale(points[points.length - 1].x)} ${yScale(y0)} L ${xScale(points[0].x)} ${yScale(y0)} Z`
    : '';

  // x ticks (dates)
  const xTicks = points.length ? [points[0], points[Math.floor(points.length / 2)], points[points.length - 1]] : [];

  // y ticks (prices)
  const yTicks = 4;
  const yTickVals = Array.from({ length: yTicks + 1 }, (_, i) => y0 + (i * (y1 - y0)) / yTicks);

  return (
    <section id="history" className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          <div className="mt-4 overflow-x-auto">
            <svg width={width} height={height} className="min-w-full">
              {/* grid */}
              <g>
                {yTickVals.map((yv, i) => (
                  <line
                    key={i}
                    x1={margin.left}
                    x2={width - margin.right}
                    y1={yScale(yv)}
                    y2={yScale(yv)}
                    stroke="#e5e7eb"
                  />
                ))}
              </g>

              {/* axes */}
              <line x1={margin.left} x2={margin.left} y1={margin.top} y2={height - margin.bottom} stroke="#94a3b8" />
              <line x1={margin.left} x2={width - margin.right} y1={height - margin.bottom} y2={height - margin.bottom} stroke="#94a3b8" />

              {/* area */}
              {points.length > 0 && (
                <path d={areaD} fill="url(#areaGradient)" />
              )}
              <defs>
                <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* line */}
              {points.length > 0 && (
                <path d={pathD} fill="none" stroke="#6366f1" strokeWidth="2" />
              )}

              {/* points */}
              {points.map((p, i) => (
                <g key={i}>
                  <circle cx={xScale(p.x)} cy={yScale(p.y)} r={3} fill="#6366f1" />
                </g>
              ))}

              {/* y-axis labels */}
              {yTickVals.map((yv, i) => (
                <text key={i} x={margin.left - 8} y={yScale(yv)} textAnchor="end" dominantBaseline="middle" className="fill-slate-500 text-[10px]">
                  {formatCurrency(yv)}
                </text>
              ))}

              {/* x-axis labels */}
              {xTicks.map((t, i) => (
                <text key={i} x={xScale(t.x)} y={height - margin.bottom + 18} textAnchor="middle" className="fill-slate-500 text-[10px]">
                  {new Date(t.x).toLocaleDateString()}
                </text>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
