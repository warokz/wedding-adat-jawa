export default function BatikOrnament({ className = '', size = 120 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="60" cy="60" r="55" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
      <circle cx="60" cy="60" r="48" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />

      {/* Lotus petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 60 60)`}>
          <ellipse cx="60" cy="22" rx="6" ry="14" fill="#C9A84C" opacity="0.25" />
          <ellipse cx="60" cy="22" rx="3" ry="10" fill="#C9A84C" opacity="0.4" />
        </g>
      ))}

      {/* Inner decorative ring */}
      <circle cx="60" cy="60" r="28" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.5" strokeDasharray="4 3" />

      {/* Center flower */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 60 60)`}>
          <ellipse cx="60" cy="42" rx="4" ry="8" fill="#C9A84C" opacity="0.5" />
        </g>
      ))}

      {/* Center dot */}
      <circle cx="60" cy="60" r="6" fill="#C9A84C" opacity="0.6" />
      <circle cx="60" cy="60" r="3" fill="#E8C97A" opacity="0.8" />

      {/* Corner diamonds */}
      {[
        [60, 8], [112, 60], [60, 112], [8, 60]
      ].map(([cx, cy], i) => (
        <rect key={i} x={cx - 4} y={cy - 4} width="8" height="8" fill="#C9A84C" opacity="0.5" transform={`rotate(45 ${cx} ${cy})`} />
      ))}
    </svg>
  )
}
