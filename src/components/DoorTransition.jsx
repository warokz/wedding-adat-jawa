import { useEffect, useState } from 'react'

function BatikCarving() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 600" preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, opacity: 0.22 }}>
      <line x1="100" y1="20" x2="100" y2="580" stroke="#C9A84C" strokeWidth="0.8" />
      {[80, 200, 320, 440, 560].map((y, i) => (
        <g key={i} transform={`translate(100, ${y})`}>
          {[0,45,90,135,180,225,270,315].map((a, j) => (
            <g key={j} transform={`rotate(${a})`}>
              <ellipse cx="0" cy="-18" rx="4" ry="10" fill="#C9A84C" opacity="0.3" />
            </g>
          ))}
          <circle cx="0" cy="0" r="7" fill="#C9A84C" opacity="0.45" />
          <circle cx="0" cy="0" r="3.5" fill="#E8C97A" opacity="0.6" />
        </g>
      ))}
      {[140, 260, 380, 500].map((y, i) => (
        <rect key={i} x="93" y={y - 7} width="14" height="14"
          fill="#C9A84C" opacity="0.25" transform={`rotate(45 100 ${y})`} />
      ))}
      {[100, 200, 300, 400, 500].map((y, i) => (
        <g key={i}>
          <path d={`M100 ${y} Q70 ${y-20} 50 ${y}`} stroke="#C9A84C" strokeWidth="0.6" fill="none" opacity="0.2" />
          <path d={`M100 ${y} Q130 ${y-20} 150 ${y}`} stroke="#C9A84C" strokeWidth="0.6" fill="none" opacity="0.2" />
        </g>
      ))}
      {[30, 570].map((y, i) => (
        <g key={i} transform={`translate(100, ${y})`}>
          <line x1="-60" y1="0" x2="60" y2="0" stroke="#C9A84C" strokeWidth="0.8" opacity="0.4" />
          {[-40,-20,0,20,40].map((x, j) => (
            <circle key={j} cx={x} cy="0" r="2" fill="#C9A84C" opacity="0.3" />
          ))}
        </g>
      ))}
    </svg>
  )
}

function DoorHandle({ side }) {
  return (
    <div style={{
      position: 'absolute', top: '50%', transform: 'translateY(-50%)',
      [side === 'left' ? 'right' : 'left']: 18,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
    }}>
      <div style={{
        width: 16, height: 16, borderRadius: '50%',
        border: '2px solid #C9A84C',
        background: 'radial-gradient(circle, #E8C97A, #8B6914)',
        boxShadow: '0 0 8px rgba(201,168,76,0.6)',
      }} />
      <div style={{
        width: 8, height: 36,
        background: 'linear-gradient(to bottom, #8B6914, #E8C97A 40%, #C9A84C 60%, #8B6914)',
        borderRadius: 4,
        boxShadow: '0 0 6px rgba(201,168,76,0.4)',
      }} />
    </div>
  )
}

function GoldParticles({ active }) {
  if (!active) return null
  const particles = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: 25 + Math.random() * 50,
    delay: Math.random() * 1.2,
    dur: 1.4 + Math.random() * 1.2,
    size: 2 + Math.random() * 4,
    dx: (Math.random() - 0.5) * 100,
  }))
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 5 }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          bottom: '48%', left: `${p.x}%`,
          width: p.size, height: p.size,
          borderRadius: '50%',
          background: p.id % 3 === 0 ? '#E8C97A' : '#C9A84C',
          '--dx': `${p.dx}px`,
          animation: `particleDrift ${p.dur}s ease-out ${p.delay}s forwards`,
          opacity: 0,
        }} />
      ))}
    </div>
  )
}

export default function DoorTransition({ onComplete }) {
  const [phase, setPhase] = useState('closed')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('opening'), 300)
    // Selesai total: 0.3 + 2.8 + 0.4 buffer = 3.5s
    const t2 = setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 3600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onComplete])

  if (phase === 'done') return null

  return (
    <div className="door-scene">
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, transparent 65%)',
        animation: phase === 'opening' ? 'doorGlow 3.5s ease-out forwards' : 'none',
      }} />

      {/* Gold particles burst when opening */}
      <GoldParticles active={phase === 'opening' || phase === 'names'} />

      {/* LEFT DOOR */}
      <div className="door-panel left" style={{
        animation: phase !== 'closed'
          ? 'doorOpenLeft 2.8s cubic-bezier(0.65, 0, 0.15, 1) forwards'
          : 'none',
      }}>
        <div className="door-face">
          <div className="batik-overlay" style={{ opacity: 0.3 }} />
          <BatikCarving />
          <div className="door-inner-border" />
          <div className="door-inner-border-2" />
          <DoorHandle side="left" />
          <div className="door-edge" />
          {[15,30,45,60,75].map(pct => (
            <div key={pct} style={{
              position: 'absolute', top: 0, bottom: 0, left: `${pct}%`, width: 1,
              background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.06), transparent)',
            }} />
          ))}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 80 }}>
            <svg width="100%" height="80" viewBox="0 0 200 80" preserveAspectRatio="none">
              <path d="M0 80 Q100 0 200 80" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.3" />
              <path d="M20 80 Q100 15 180 80" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.2" />
            </svg>
          </div>
        </div>
      </div>

      {/* RIGHT DOOR */}
      <div className="door-panel right" style={{
        animation: phase !== 'closed'
          ? 'doorOpenRight 2.8s cubic-bezier(0.65, 0, 0.15, 1) forwards'
          : 'none',
      }}>
        <div className="door-face">
          <div className="batik-overlay" style={{ opacity: 0.3 }} />
          <BatikCarving />
          <div className="door-inner-border" />
          <div className="door-inner-border-2" />
          <DoorHandle side="right" />
          <div className="door-edge" />
          {[15,30,45,60,75].map(pct => (
            <div key={pct} style={{
              position: 'absolute', top: 0, bottom: 0, left: `${pct}%`, width: 1,
              background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.06), transparent)',
            }} />
          ))}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 80 }}>
            <svg width="100%" height="80" viewBox="0 0 200 80" preserveAspectRatio="none">
              <path d="M0 80 Q100 0 200 80" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.3" />
              <path d="M20 80 Q100 15 180 80" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tidak ada teks — langsung reveal konten setelah pintu terbuka */}
    </div>
  )
}
