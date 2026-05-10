import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const photos = [
  { id: 1, bg: 'linear-gradient(135deg,#3d1f00,#6b3a00)', label: 'Prambanan Sunset', large: true },
  { id: 2, bg: 'linear-gradient(135deg,#5a3200,#8b5e00)', label: 'Kebaya Hitam' },
  { id: 3, bg: 'linear-gradient(135deg,#4a2800,#7a4a00)', label: 'Blangkon & Mahkota' },
  { id: 4, bg: 'linear-gradient(135deg,#3d2800,#6b4a00)', label: 'Taman Candi' },
  { id: 5, bg: 'linear-gradient(135deg,#5a3800,#8b6000)', label: 'Janur Kuning' },
  { id: 6, bg: 'linear-gradient(135deg,#4a3000,#7a5200)', label: 'Bersama' },
  { id: 7, bg: 'linear-gradient(135deg,#3d2200,#6b3e00)', label: 'Senja Prambanan' },
]

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [lb, setLb] = useState(null)

  return (
    <section style={{ background: '#FDF6E3', position: 'relative', overflow: 'hidden' }}>
      <div className="batik-overlay" style={{ opacity: 0.35 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
            <Camera size={17} color="#C9A84C" />
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.5em', color: '#C9A84C' }}>GALERI FOTO</p>
            <Camera size={17} color="#C9A84C" />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3rem)', color: '#4A2C0A', marginBottom: 16 }}>Momen Berharga</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, maxWidth: 200, margin: '0 auto' }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <div style={{ width: 8, height: 8, background: '#C9A84C', transform: 'rotate(45deg)' }} />
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto', gap: 12 }} className="gallery-grid">
          {photos.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setLb(i)}
              style={{
                background: p.bg,
                border: '1px solid rgba(201,168,76,0.3)',
                height: p.large ? 320 : 155,
                gridRow: p.large ? 'span 2' : 'span 1',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', position: 'relative', overflow: 'hidden',
              }}>
              <Camera size={p.large ? 44 : 28} color="#C9A84C" style={{ opacity: 0.3 }} />
              {/* Corner accents */}
              {[{ top: 8, left: 8 }, { top: 8, right: 8 }, { bottom: 8, left: 8 }, { bottom: 8, right: 8 }].map((pos, j) => (
                <div key={j} style={{ position: 'absolute', width: 14, height: 14, ...pos,
                  borderTop: j < 2 ? '1px solid rgba(201,168,76,0.5)' : undefined,
                  borderBottom: j >= 2 ? '1px solid rgba(201,168,76,0.5)' : undefined,
                  borderLeft: j % 2 === 0 ? '1px solid rgba(201,168,76,0.5)' : undefined,
                  borderRight: j % 2 === 1 ? '1px solid rgba(201,168,76,0.5)' : undefined,
                }} />
              ))}
            </motion.div>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.85rem', color: '#4A2C0A', opacity: 0.45, marginTop: 16 }}>
          * Ganti dengan foto asli mempelai
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lb !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLb(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(10,5,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={() => setLb(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer', color: '#C9A84C' }}><X size={28} /></button>
            <button onClick={e => { e.stopPropagation(); setLb(l => (l - 1 + photos.length) % photos.length) }} style={{ position: 'absolute', left: 20, background: 'none', border: 'none', cursor: 'pointer', color: '#C9A84C' }}><ChevronLeft size={36} /></button>
            <div style={{ width: 320, height: 320, background: photos[lb].bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={e => e.stopPropagation()}>
              <Camera size={64} color="#C9A84C" style={{ opacity: 0.3 }} />
            </div>
            <button onClick={e => { e.stopPropagation(); setLb(l => (l + 1) % photos.length) }} style={{ position: 'absolute', right: 20, background: 'none', border: 'none', cursor: 'pointer', color: '#C9A84C' }}><ChevronRight size={36} /></button>
            <p style={{ position: 'absolute', bottom: 24, fontFamily: 'Cormorant Garamond, serif', fontSize: 13, letterSpacing: '0.3em', color: '#C9A84C' }}>{photos[lb].label}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@media(max-width:640px){.gallery-grid{grid-template-columns:repeat(2,1fr) !important;}}`}</style>
    </section>
  )
}
