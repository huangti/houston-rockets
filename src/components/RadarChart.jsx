import React from 'react';

// Generates SVG Radar / Spiderweb chart for player skill dimensions
export function RadarChart({ data, compareData = null, size = 260, color = '#F59E0B', compareColor = '#38BDF8' }) {
  const center = size / 2;
  const radius = size * 0.38;
  const total = data.length;
  const angleStep = (Math.PI * 2) / total;

  // Calculate coordinates for a polygon vertex at given angle and value (0-100)
  const getCoordinates = (value, index) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Build grid rings (20, 40, 60, 80, 100)
  const levels = [0.25, 0.5, 0.75, 1.0];
  const gridPolygons = levels.map((lvl) => {
    return Array.from({ length: total })
      .map((_, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const x = center + radius * lvl * Math.cos(angle);
        const y = center + radius * lvl * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(' ');
  });

  // Main player polygon points
  const points = data
    .map((item, i) => {
      const { x, y } = getCoordinates(item.value, i);
      return `${x},${y}`;
    })
    .join(' ');

  // Compare player polygon points
  const comparePoints = compareData
    ? compareData
        .map((item, i) => {
          const { x, y } = getCoordinates(item.value, i);
          return `${x},${y}`;
        })
        .join(' ')
    : null;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg width={size} height={size} className="overflow-visible select-none drop-shadow-[0_0_12px_rgba(0,0,0,0.6)]">
        {/* Background circular glow */}
        <circle cx={center} cy={center} r={radius * 1.05} fill="rgba(15, 23, 42, 0.6)" stroke="rgba(255,255,255,0.06)" />

        {/* Web Grid Rings */}
        {gridPolygons.map((poly, idx) => (
          <polygon
            key={idx}
            points={poly}
            fill={idx === levels.length - 1 ? 'rgba(30, 41, 59, 0.4)' : 'transparent'}
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
            strokeDasharray={idx < levels.length - 1 ? '3 3' : 'none'}
          />
        ))}

        {/* Axis Spokes from center */}
        {Array.from({ length: total }).map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1"
            />
          );
        })}

        {/* Compare Polygon if active */}
        {comparePoints && (
          <>
            <polygon
              points={comparePoints}
              fill={`${compareColor}2A`}
              stroke={compareColor}
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            {compareData.map((item, i) => {
              const { x, y } = getCoordinates(item.value, i);
              return (
                <circle
                  key={`cmp-dot-${i}`}
                  cx={x}
                  cy={y}
                  r="3.5"
                  fill={compareColor}
                  className="filter drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]"
                />
              );
            })}
          </>
        )}

        {/* Main Player Polygon */}
        <polygon
          points={points}
          fill={`${color}33`}
          stroke={color}
          strokeWidth="2.5"
          className="transition-all duration-300"
        />

        {/* Vertex Dots & Values */}
        {data.map((item, i) => {
          const { x, y } = getCoordinates(item.value, i);
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r="4"
                fill="#ffffff"
                stroke={color}
                strokeWidth="2"
                className="filter drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
              />
            </g>
          );
        })}

        {/* Dimension Labels */}
        {data.map((item, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const labelDist = radius + 22;
          const lx = center + labelDist * Math.cos(angle);
          const ly = center + labelDist * Math.sin(angle);

          return (
            <text
              key={`label-${i}`}
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#E2E8F0"
              fontSize="11"
              fontWeight="600"
              className="tracking-wider select-none font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
            >
              {item.dimension}
              <tspan x={lx} dy="13" fill={color} fontSize="11" fontWeight="700">
                {item.value}
              </tspan>
            </text>
          );
        })}
      </svg>
    </div>
  );
}
