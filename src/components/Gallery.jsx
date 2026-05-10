import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Camera, X, ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { useState } from 'react'

const photos = [
  { id: 1, url: '/prewed1.jpg', label: 'Prambanan Sunset', large: true },
  { id: 2, url: '/prewed2.jpg', label: 'Kebaya Hitam' },
  { id: 3, url: '/prewed3.jpg', label: 'Blangkon & Mahkota' },
  { id: 4, url: '/prewed4.jpg', label: 'Taman Candi' },
  { id: 5, url: '/prewed5.jpg', label: 'Janur Kuning' },
  { id: 6, url: '/prewed6.jpg', label: 'Bersama' },
  { id: 7, url: '/prewed7.jpg', label: 'Senja Prambanan' },
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, maxWidth: 200, margin: '0 auto 12px' }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <div style={{ width: 8, height: 8, background: '#C9A84C', transform: 'rotate(45deg)' }} />
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: '#4A2C0A', opacity: 0.6 }}>
            Kenangan indah perjalanan cinta kami
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto', gap: 14 }} className="gallery-grid">
          {photos.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, type: 'spring', bounce: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setLb(i)}
              style={{
                border: '2px solid rgba(201,168,76,0.4)',
                height: p.large ? 340 : 165,
                gridRow: p.large ? 'span 2' : 'span 1',
                cursor: 'pointer', 
                position: 'relative', 
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(201,168,76,0.15)',
                transition: 'all 0.3s ease',
              }}>
              
              {/* Photo */}
              <img 
                src={p.url} 
                alt={p.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Overlay gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(8,3,0,0.7) 0%, transparent 50%)',
                opacity: 0,
                transition: 'opacity 0.3s',
              }} className="photo-overlay" />

              {/* Label on hover */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '12px',
                transform: 'translateY(100%)',
                transition: 'transform 0.3s',
              }} className="photo-label">
                <p style={{ 
                  fontFamily: 'Cormorant Garamond, serif', 
                  fontSize: '0.9rem', 
                  color: '#FDF6E3',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                }}>
                  {p.label}
                </p>
              </div>

              {/* Corner accents */}
              {[
                { top: 6, left: 6 }, 
                { top: 6, right: 6 }, 
                { bottom: 6, left: 6 }, 
                { bottom: 6, right: 6 }
              ].map((pos, j) => (
                <div key={j} style={{ 
                  position: 'absolute', 
                  width: 16, 
                  height: 16, 
                  ...pos,
                  borderTop: j < 2 ? '2px solid rgba(201,168,76,0.7)' : undefined,
                  borderBottom: j >= 2 ? '2px solid rgba(201,168,76,0.7)' : undefined,
                  borderLeft: j % 2 === 0 ? '2px solid rgba(201,168,76,0.7)' : undefined,
                  borderRight: j % 2 === 1 ? '2px solid rgba(201,168,76,0.7)' : undefined,
                }} />
              ))}

              {/* Heart icon for large photo */}
              {p.large && (
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Heart size={20} fill="#C9A84C" color="#C9A84C" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ 
            textAlign: 'center', 
            fontFamily: 'Cormorant Garamond, serif', 
            fontStyle: 'italic', 
            fontSize: '0.85rem', 
            color: '#4A2C0A', 
            opacity: 0.5, 
            marginTop: 24 
          }}
        >
          Klik foto untuk melihat lebih besar
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lb !== null && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setLb(null)}
            style={{ 
              position: 'fixed', 
              inset: 0, 
              zIndex: 100, 
              background: 'rgba(10,5,0,0.96)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
            }}
          >
            {/* Close button */}
            <motion.button 
              onClick={() => setLb(null)} 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              style={{ 
                position: 'absolute', 
                top: 24, 
                right: 24, 
                background: 'rgba(201,168,76,0.2)', 
                border: '1px solid #C9A84C',
                borderRadius: '50%',
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer', 
                color: '#C9A84C',
                transition: 'all 0.3s',
              }}
            >
              <X size={24} />
            </motion.button>

            {/* Previous button */}
            <motion.button 
              onClick={e => { e.stopPropagation(); setLb(l => (l - 1 + photos.length) % photos.length) }} 
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              style={{ 
                position: 'absolute', 
                left: 24, 
                background: 'rgba(201,168,76,0.2)', 
                border: '1px solid #C9A84C',
                borderRadius: '50%',
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer', 
                color: '#C9A84C',
                transition: 'all 0.3s',
              }}
            >
              <ChevronLeft size={28} />
            </motion.button>

            {/* Photo container */}
            <motion.div 
              key={lb}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.3 }}
              style={{ 
                maxWidth: '90vw', 
                maxHeight: '85vh',
                position: 'relative',
                border: '3px solid #C9A84C',
                boxShadow: '0 0 40px rgba(201,168,76,0.4)',
              }} 
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={photos[lb].url}
                alt={photos[lb].label}
                style={{
                  maxWidth: '100%',
                  maxHeight: '85vh',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </motion.div>

            {/* Next button */}
            <motion.button 
              onClick={e => { e.stopPropagation(); setLb(l => (l + 1) % photos.length) }} 
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              style={{ 
                position: 'absolute', 
                right: 24, 
                background: 'rgba(201,168,76,0.2)', 
                border: '1px solid #C9A84C',
                borderRadius: '50%',
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer', 
                color: '#C9A84C',
                transition: 'all 0.3s',
              }}
            >
              <ChevronRight size={28} />
            </motion.button>

            {/* Label & counter */}
            <div style={{ 
              position: 'absolute', 
              bottom: 32, 
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
            }}>
              <p style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: '1.2rem', 
                letterSpacing: '0.2em', 
                color: '#E8C97A',
                marginBottom: 8,
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}>
                {photos[lb].label}
              </p>
              <p style={{ 
                fontFamily: 'Cormorant Garamond, serif', 
                fontSize: '0.9rem', 
                color: '#C9A84C',
                opacity: 0.7,
              }}>
                {lb + 1} / {photos.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:640px){
          .gallery-grid{grid-template-columns:repeat(2,1fr) !important;}
        }
        .gallery-grid > div:hover .photo-overlay {
          opacity: 1;
        }
        .gallery-grid > div:hover .photo-label {
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
