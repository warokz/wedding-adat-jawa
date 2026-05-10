import { useEffect, useState } from 'react'

export default function FloatingPetals() {
  const [petals, setPetals] = useState([])
  const [goldParticles, setGoldParticles] = useState([])

  useEffect(() => {
    // Generate petals
    setPetals(Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${8 + Math.random() * 10}s`,
      size: 10 + Math.random() * 14,
      color: ['#C9A84C','#E8C97A','#8B6914','#D4A853'][Math.floor(Math.random() * 4)],
      type: Math.random() > 0.5 ? 'petal' : 'diamond',
    })))

    // Generate gold sparkle particles
    setGoldParticles(Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 3,
    })))
  }, [])

  return (
    <>
      {/* Floating petals */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 5, overflow: 'hidden' }}>
        {petals.map(p => (
          <div key={p.id} style={{
            position: 'absolute', top: 0, left: p.left,
            animation: `floatPetal ${p.duration} ${p.delay} infinite linear`,
            filter: 'drop-shadow(0 0 4px rgba(201,168,76,0.4))',
          }}>
            {p.type === 'petal' ? (
              <svg width={p.size} height={p.size} viewBox="0 0 20 20">
                <ellipse cx="10" cy="10" rx="4" ry="9" fill={p.color} opacity="0.6" transform="rotate(45 10 10)" />
              </svg>
            ) : (
              <div style={{ 
                width: p.size, 
                height: p.size, 
                background: `radial-gradient(circle, ${p.color}, transparent)`,
                opacity: 0.5, 
                transform: 'rotate(45deg)',
                boxShadow: `0 0 6px ${p.color}`,
              }} />
            )}
          </div>
        ))}
      </div>

      {/* Gold sparkle particles */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 6, overflow: 'hidden' }}>
        {goldParticles.map(g => (
          <div key={g.id} style={{
            position: 'absolute',
            left: `${g.left}%`,
            top: `${g.top}%`,
            width: g.size,
            height: g.size,
            background: 'radial-gradient(circle, #F0D080, #C9A84C)',
            borderRadius: '50%',
            animation: `sparkle ${g.duration}s ease-in-out ${g.delay}s infinite`,
            boxShadow: '0 0 8px rgba(201,168,76,0.8)',
          }} />
        ))}
      </div>

      {/* Ambient light rays */}
      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        pointerEvents: 'none', 
        zIndex: 4,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        animation: 'breathe 10s ease-in-out infinite',
      }} />
    </>
  )
}
