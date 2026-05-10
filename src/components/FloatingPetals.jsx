import { useEffect, useState } from 'react'

export default function FloatingPetals() {
  const [petals, setPetals] = useState([])

  useEffect(() => {
    setPetals(Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${7 + Math.random() * 8}s`,
      size: 8 + Math.random() * 12,
      color: ['#C9A84C','#E8C97A','#8B6914','#D4A853'][Math.floor(Math.random() * 4)],
      type: Math.random() > 0.5 ? 'petal' : 'diamond',
    })))
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {petals.map(p => (
        <div key={p.id} style={{
          position: 'absolute', top: 0, left: p.left,
          animation: `floatPetal ${p.duration} ${p.delay} infinite linear`,
        }}>
          {p.type === 'petal' ? (
            <svg width={p.size} height={p.size} viewBox="0 0 20 20">
              <ellipse cx="10" cy="10" rx="4" ry="9" fill={p.color} opacity="0.55" transform="rotate(45 10 10)" />
            </svg>
          ) : (
            <div style={{ width: p.size, height: p.size, background: p.color, opacity: 0.35, transform: 'rotate(45deg)' }} />
          )}
        </div>
      ))}
    </div>
  )
}
