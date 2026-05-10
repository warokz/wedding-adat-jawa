import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

function OrnamentLine() {
  return (
    <svg viewBox="0 0 320 40" style={{ width: '100%', maxWidth: 320, display: 'block', margin: '0 auto' }}>
      <defs>
        <linearGradient id="og" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="25%" stopColor="#C9A84C" />
          <stop offset="50%" stopColor="#E8C97A" />
          <stop offset="75%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <line x1="0" y1="20" x2="320" y2="20" stroke="url(#og)" strokeWidth="1" />
      <polygon points="160,12 168,20 160,28 152,20" fill="#C9A84C" opacity="0.9" />
      <polygon points="160,15 165,20 160,25 155,20" fill="#E8C97A" opacity="0.7" />
      {[90,115,205,230].map((x,i) => (
        <polygon key={i} points={`${x},16 ${x+5},20 ${x},24 ${x-5},20`} fill="#C9A84C" opacity="0.55" />
      ))}
      {[45,65,255,275].map((x,i) => (
        <circle key={i} cx={x} cy="20" r="2" fill="#C9A84C" opacity="0.4" />
      ))}
    </svg>
  )
}

function CornerSvg({ style }) {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" style={style}>
      <path d="M4 66 L4 4 L66 4" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.55" />
      <path d="M4 4 Q20 4 20 20" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.35" />
      <circle cx="4" cy="4" r="3" fill="#C9A84C" opacity="0.7" />
      <circle cx="35" cy="4" r="1.5" fill="#C9A84C" opacity="0.35" />
      <circle cx="4" cy="35" r="1.5" fill="#C9A84C" opacity="0.35" />
    </svg>
  )
}

// 3D Parallax tilt on mouse move
function use3DTilt(strength = 12) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      setTilt({ x: -dy * strength, y: dx * strength })
    }
    const onLeave = () => setTilt({ x: 0, y: 0 })
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [strength])

  return { ref, tilt }
}

export default function Opening({ onOpen }) {
  const [hover, setHover] = useState(false)
  const { ref, tilt } = use3DTilt(6)

  return (
    <motion.div
      ref={ref}
      style={{
        position: 'fixed', inset: 0, zIndex: 50, overflow: 'hidden',
        perspective: 1000,
      }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.4 }}
    >
      {/* 3D tilt container */}
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        style={{
          position: 'absolute', inset: '-5%',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Background image */}
        <img
          src="/couple.jpg"
          alt="Mempelai"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', 
            objectPosition: 'center center',
            display: 'block',
          }}
        />

        {/* Layered overlays */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(8,3,0,0.88) 0%, rgba(8,3,0,0.22) 30%, rgba(8,3,0,0.18) 55%, rgba(8,3,0,0.92) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(8,3,0,0.5) 100%)',
        }} />

        {/* Batik texture */}
        <div className="batik-overlay" style={{ opacity: 0.1 }} />

        {/* Floating 3D depth layer - gold particles */}
        <motion.div
          style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}
          animate={{ rotateX: tilt.x * 0.5, rotateY: tilt.y * 0.5 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          {[...Array(16)].map((_, i) => (
            <motion.div key={i}
              style={{
                position: 'absolute',
                width: 3 + (i % 3), height: 3 + (i % 3),
                borderRadius: '50%',
                background: i % 2 === 0 ? '#C9A84C' : '#E8C97A',
                left: `${5 + i * 6}%`,
                top: `${15 + (i % 5) * 14}%`,
                transform: `translateZ(${20 + i * 5}px)`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.35 }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Border frames (not tilted) */}
      <div style={{ position: 'absolute', inset: 10, border: '1px solid rgba(201,168,76,0.22)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 18, border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />

      {/* Corner ornaments */}
      <CornerSvg style={{ position: 'absolute', top: 6, left: 6 }} />
      <CornerSvg style={{ position: 'absolute', top: 6, right: 6, transform: 'scaleX(-1)' }} />
      <CornerSvg style={{ position: 'absolute', bottom: 6, left: 6, transform: 'scaleY(-1)' }} />
      <CornerSvg style={{ position: 'absolute', bottom: 6, right: 6, transform: 'scale(-1)' }} />

      {/* TOP CONTENT */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '28px 24px 0' }}>
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
            color: '#E8C97A', fontStyle: 'italic',
            textShadow: '0 0 20px rgba(201,168,76,0.4)',
            marginBottom: 8,
          }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <OrnamentLine />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.5em', color: '#C9A84C', marginTop: 6 }}
          >
            UNDANGAN PERNIKAHAN
          </motion.p>
        </motion.div>
      </div>

      {/* BOTTOM CONTENT */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '0 24px 28px',
      }}>
        <motion.div
          style={{ textAlign: 'center', width: '100%', maxWidth: 480 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Names */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 12 }}
          >
            <h1 className="gold-shimmer-text" style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(3rem, 12vw, 5.5rem)',
              lineHeight: 1,
              filter: 'drop-shadow(0 4px 16px rgba(201,168,76,0.4))',
            }}>
              Arjuna
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, margin: '6px 0' }}>
              <div style={{ height: 1, width: 'clamp(40px,8vw,70px)', background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
              <motion.svg
                width="18" height="18" viewBox="0 0 24 24" fill="#C9A84C"
                animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
                style={{ filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.7))' }}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </motion.svg>
              <div style={{ height: 1, width: 'clamp(40px,8vw,70px)', background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
            </div>

            <h1 className="gold-shimmer-text" style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(3rem, 12vw, 5.5rem)',
              lineHeight: 1,
              filter: 'drop-shadow(0 4px 16px rgba(201,168,76,0.4))',
            }}>
              Srikandi
            </h1>
          </motion.div>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            style={{ margin: '0 0 10px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 4 }}>
              <Sparkles size={12} color="#C9A84C" />
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: '#FDF6E3', fontStyle: 'italic' }}>
                Kamis Pahing, 14 Agustus 2026
              </span>
              <Sparkles size={12} color="#C9A84C" />
            </div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 10, letterSpacing: '0.45em', color: '#C9A84C' }}>
              PRAMBANAN · YOGYAKARTA
            </p>
          </motion.div>

          {/* Ornament */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            style={{ margin: '10px 0 18px' }}
          >
            <OrnamentLine />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <motion.button
              onClick={onOpen}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '14px 40px',
                border: '1px solid #C9A84C',
                background: hover
                  ? 'rgba(201,168,76,0.2)'
                  : 'rgba(26,9,0,0.5)',
                backdropFilter: 'blur(10px)',
                color: '#E8C97A',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 13, letterSpacing: '0.4em',
                cursor: 'pointer',
                textTransform: 'uppercase',
                transition: 'all 0.3s',
                boxShadow: hover
                  ? '0 0 24px rgba(201,168,76,0.35), inset 0 0 20px rgba(201,168,76,0.1)'
                  : '0 0 12px rgba(201,168,76,0.15)',
              }}
            >
              <Heart size={14} fill="#C9A84C" color="#C9A84C" />
              Buka Undangan
              <Heart size={14} fill="#C9A84C" color="#C9A84C" />
            </motion.button>
          </motion.div>


        </motion.div>
      </div>
    </motion.div>
  )
}
