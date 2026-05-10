import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

function LotusOrnament({ size = 110, opacity = 1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ opacity }}>
      <circle cx="60" cy="60" r="54" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.4" />
      <circle cx="60" cy="60" r="46" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.2" strokeDasharray="3 4" />
      {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => (
        <g key={a} transform={`rotate(${a} 60 60)`}>
          <ellipse cx="60" cy="18" rx="5" ry="13" fill="#C9A84C" opacity="0.2" />
          <ellipse cx="60" cy="20" rx="2.5" ry="9" fill="#E8C97A" opacity="0.3" />
        </g>
      ))}
      {[0,45,90,135,180,225,270,315].map(a => (
        <g key={a} transform={`rotate(${a} 60 60)`}>
          <ellipse cx="60" cy="30" rx="3.5" ry="8" fill="#C9A84C" opacity="0.45" />
        </g>
      ))}
      <circle cx="60" cy="60" r="10" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5" />
      <circle cx="60" cy="60" r="6" fill="#C9A84C" opacity="0.55" />
      <circle cx="60" cy="60" r="3" fill="#E8C97A" opacity="0.8" />
      {[[60,6],[114,60],[60,114],[6,60]].map(([cx,cy],i) => (
        <rect key={i} x={cx-4} y={cy-4} width="8" height="8" fill="#C9A84C" opacity="0.5" transform={`rotate(45 ${cx} ${cy})`} />
      ))}
    </svg>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true },
})

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(180deg, #0a0400 0%, #1a0900 15%, #2D1B00 40%, #3d2200 60%, #2D1B00 80%, #0a0400 100%)',
      position: 'relative', overflow: 'hidden',
      padding: 'clamp(80px, 12vw, 120px) 24px clamp(60px, 8vw, 80px)',
    }}>
      <div className="batik-overlay" style={{ opacity: 0.22 }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)',
      }} />

      {/* Corner lotus */}
      {[
        { top: -20, left: -20 },
        { top: -20, right: -20, transform: 'scaleX(-1)' },
        { bottom: -20, left: -20, transform: 'scaleY(-1)' },
        { bottom: -20, right: -20, transform: 'scale(-1)' },
      ].map((s, i) => (
        <div key={i} style={{ position: 'absolute', ...s }}>
          <LotusOrnament size={180} opacity={0.15} />
        </div>
      ))}

      {/* Double border */}
      <div style={{ position: 'absolute', inset: 14, border: '1px solid rgba(201,168,76,0.12)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 24, border: '1px solid rgba(201,168,76,0.06)', pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 620, width: '100%' }}>

        {/* Bismillah */}
        <motion.div {...fadeUp(0)}>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)',
            color: '#C9A84C', fontStyle: 'italic', marginBottom: 6,
            textShadow: '0 0 20px rgba(201,168,76,0.3)',
          }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.35em', color: '#F5E6C8', opacity: 0.5, marginBottom: 32 }}>
            Bismillahirrahmanirrahim
          </p>
        </motion.div>

        {/* Rotating lotus */}
        <motion.div {...fadeUp(0.1)} style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            <LotusOrnament size={100} />
          </motion.div>
        </motion.div>

        <motion.p {...fadeUp(0.2)} style={{
          fontFamily: 'Cormorant Garamond, serif', fontSize: 11,
          letterSpacing: '0.55em', color: '#C9A84C', marginBottom: 24,
        }}>
          UNDANGAN PERNIKAHAN
        </motion.p>

        {/* Names */}
        <motion.div {...fadeUp(0.3)}>
          <h1 className="gold-shimmer-text" style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3.8rem, 13vw, 6.5rem)',
            lineHeight: 1, marginBottom: 4,
          }}>
            Arjuna
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, margin: '10px 0' }}>
            <div style={{ height: 1, width: 'clamp(50px, 10vw, 90px)', background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <motion.div animate={{ scale: [1, 1.22, 1] }} transition={{ duration: 2.2, repeat: Infinity }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#C9A84C" style={{ filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.6))' }}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </motion.div>
            <div style={{ height: 1, width: 'clamp(50px, 10vw, 90px)', background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>

          <h1 className="gold-shimmer-text" style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3.8rem, 13vw, 6.5rem)',
            lineHeight: 1,
          }}>
            Srikandi
          </h1>
        </motion.div>

        {/* Date & location */}
        <motion.div {...fadeUp(0.45)} style={{ marginTop: 28, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 6 }}>
            <Sparkles size={13} color="#C9A84C" />
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem, 2.8vw, 1.25rem)', color: '#FDF6E3', fontStyle: 'italic' }}>
              Kamis Pahing, 14 Agustus 2026
            </span>
            <Sparkles size={13} color="#C9A84C" />
          </div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.45em', color: '#C9A84C' }}>
            PRAMBANAN · YOGYAKARTA
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div {...fadeUp(0.45)} style={{
          marginTop: 32, padding: '18px 28px',
          borderLeft: '2px solid rgba(201,168,76,0.35)',
          borderRight: '2px solid rgba(201,168,76,0.35)',
          maxWidth: 460, margin: '32px auto 0',
          position: 'relative',
        }}>
          {/* Quote corner dots */}
          {[{top:-3,left:-3},{top:-3,right:-3},{bottom:-3,left:-3},{bottom:-3,right:-3}].map((s,i) => (
            <div key={i} style={{ position:'absolute', width:6, height:6, background:'#C9A84C', transform:'rotate(45deg)', ...s }} />
          ))}
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#F5E6C8', lineHeight: 1.75, opacity: 0.82 }}>
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya."
          </p>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 12, color: '#C9A84C', marginTop: 10 }}>— QS. Ar-Rum: 21</p>
        </motion.div>
      </div>


    </section>
  )
}
