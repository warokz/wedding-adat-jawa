import { motion } from 'framer-motion'
import { Heart, AtSign } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

function PersonCard({ name, fullName, parents, role, ig, delay, fromLeft, photoUrl }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
    >
      {/* Photo frame */}
      <div style={{ position: 'relative', marginBottom: 20 }}>
        {/* Outer decorative rings */}
        <motion.div 
          style={{ 
            position: 'absolute', 
            inset: -10, 
            borderRadius: '50%', 
            border: '1px solid rgba(201,168,76,0.35)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div 
          style={{ 
            position: 'absolute', 
            inset: -18, 
            borderRadius: '50%', 
            border: '1px solid rgba(201,168,76,0.2)',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Glow effect */}
        <motion.div
          style={{
            position: 'absolute',
            inset: -25,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.2), transparent)',
            filter: 'blur(15px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Photo container */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{
            width: 180,
            height: 180,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid #C9A84C',
            boxShadow: '0 8px 32px rgba(201,168,76,0.3), inset 0 0 20px rgba(201,168,76,0.1)',
            position: 'relative',
          }}
        >
          {/* Photo */}
          <img
            src={photoUrl}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
          
          {/* Overlay gradient for elegance */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, transparent 40%, rgba(8,3,0,0.15) 100%)',
            pointerEvents: 'none',
          }} />
        </motion.div>

        {/* Diamond accents at cardinal points */}
        {[
          { top: -6, left: '50%', transform: 'translateX(-50%) rotate(45deg)' },
          { right: -6, top: '50%', transform: 'translateY(-50%) rotate(45deg)' },
          { bottom: -6, left: '50%', transform: 'translateX(-50%) rotate(45deg)' },
          { left: -6, top: '50%', transform: 'translateY(-50%) rotate(45deg)' },
        ].map((s, i) => (
          <motion.div 
            key={i} 
            style={{ 
              position: 'absolute', 
              width: 10, 
              height: 10, 
              background: 'linear-gradient(135deg, #E8C97A, #C9A84C)',
              boxShadow: '0 0 8px rgba(201,168,76,0.6)',
              ...s 
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 10, letterSpacing: '0.4em', color: '#C9A84C', marginBottom: 6 }}>{role}</p>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#4A2C0A', marginBottom: 2 }}>{name}</h2>
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#4A2C0A', fontStyle: 'italic', opacity: 0.75, marginBottom: 6 }}>{fullName}</p>

      {ig && (
        <motion.a 
          href={`https://instagram.com/${ig}`} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 5, 
            color: '#C9A84C', 
            fontSize: 12, 
            fontFamily: 'Cormorant Garamond, serif', 
            textDecoration: 'none', 
            marginBottom: 14,
            padding: '4px 12px',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: 20,
            transition: 'all 0.3s',
          }}
        >
          <AtSign size={12} />@{ig}
        </motion.a>
      )}

      <div style={{ width: 40, height: 1, background: '#C9A84C', opacity: 0.5, margin: '0 auto 14px' }} />
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem', color: '#4A2C0A', lineHeight: 1.6 }}>
        Putra/Putri dari<br />
        <strong>{parents}</strong>
      </p>
    </motion.div>
  )
}

export default function Couple() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section style={{ background: '#FDF6E3', position: 'relative', overflow: 'hidden' }}>
      <div className="batik-overlay" style={{ opacity: 0.35 }} />
      {/* Side accent lines */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.5em', color: '#C9A84C', marginBottom: 10 }}>MEMPELAI</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3rem)', color: '#4A2C0A', marginBottom: 16 }}>Dua Hati Bersatu</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, maxWidth: 200, margin: '0 auto' }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <div style={{ width: 8, height: 8, background: '#C9A84C', transform: 'rotate(45deg)' }} />
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          alignItems: 'center',
        }} className="couple-grid">
          <PersonCard 
            name="Arjuna" 
            fullName="Raden Arjuna Wibisono" 
            parents="Bapak Haryanto & Ibu Sulistyowati" 
            role="MEMPELAI PRIA" 
            ig="arjuna.wibisono" 
            delay={0.2} 
            fromLeft 
            photoUrl="/cowojawa.jpg"
          />

          {/* Center */}
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, transparent, #C9A84C)' }} />
            <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <Heart size={52} fill="#C9A84C" color="#C9A84C" style={{ filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.5))' }} />
            </motion.div>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: '#C9A84C', fontStyle: 'italic', lineHeight: 1 }}>&amp;</p>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 10, letterSpacing: '0.3em', color: '#4A2C0A' }}>BERSATU DALAM</p>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#C9A84C' }}>Ikatan Suci</p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, color: '#4A2C0A', opacity: 0.6, fontStyle: 'italic' }}>14 Agustus 2026</p>
            </div>
            <div style={{ width: 1, height: 60, background: 'linear-gradient(to top, transparent, #C9A84C)' }} />
          </motion.div>

          <PersonCard 
            name="Srikandi" 
            fullName="Dewi Srikandi Rahayu" 
            parents="Bapak Bambang Susilo & Ibu Endang Pertiwi" 
            role="MEMPELAI WANITA" 
            ig="srikandi.rahayu" 
            delay={0.4} 
            photoUrl="/cewe jawa.jpg"
          />
        </div>

        {/* Quote */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          style={{ marginTop: 56, textAlign: 'center', maxWidth: 480, margin: '56px auto 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <Heart size={13} fill="#C9A84C" color="#C9A84C" />
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: '#4A2C0A', lineHeight: 1.7, opacity: 0.8 }}>
            Bertemu di Prambanan, jatuh cinta di bawah sinar bulan purnama, dan kini bersatu selamanya dalam ikatan pernikahan yang suci.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .couple-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
