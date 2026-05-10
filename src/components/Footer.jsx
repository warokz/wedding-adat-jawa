import { motion } from 'framer-motion'
import { Heart, AtSign, Music } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #0f0700 0%, #1A0D00 100%)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div className="batik-overlay" style={{ opacity: 0.12 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 520, margin: '0 auto', padding: '64px 24px' }}>
        {/* Lotus mini */}
        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <svg width="56" height="56" viewBox="0 0 56 56">
            {[0,45,90,135,180,225,270,315].map((a,i) => (
              <g key={i} transform={`rotate(${a} 28 28)`}>
                <ellipse cx="28" cy="9" rx="3" ry="8" fill="#C9A84C" opacity="0.28" />
              </g>
            ))}
            <circle cx="28" cy="28" r="5" fill="#C9A84C" opacity="0.5" />
            <circle cx="28" cy="28" r="2.5" fill="#E8C97A" opacity="0.7" />
          </svg>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.5em', color: '#C9A84C', marginBottom: 14 }}>TERIMA KASIH</p>

          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,5vw,2.5rem)',
            background: 'linear-gradient(135deg, #C9A84C, #F0D080, #C9A84C)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            marginBottom: 6,
          }}>Arjuna &amp; Srikandi</h2>

          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.85rem', color: '#C9A84C', opacity: 0.55, marginBottom: 20 }}>
            14 Juni 2025 · Prambanan, Yogyakarta
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, maxWidth: 160, margin: '0 auto 20px' }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <Heart size={13} fill="#C9A84C" color="#C9A84C" />
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>

          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#F5E6C8', opacity: 0.65, lineHeight: 1.7, marginBottom: 28 }}>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.
          </p>

          {/* Social */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
            {[['arjuna.wibisono'],['srikandi.rahayu']].map(([ig]) => (
              <a key={ig} href={`https://instagram.com/${ig}`} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#C9A84C', fontFamily: 'Cormorant Garamond, serif', fontSize: 12, letterSpacing: '0.2em', textDecoration: 'none' }}>
                <AtSign size={13} />@{ig}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: 0.35 }}>
            <Music size={11} color="#C9A84C" />
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.2em', color: '#C9A84C' }}>Dibuat dengan cinta untuk hari istimewa kami</p>
            <Heart size={11} fill="#C9A84C" color="#C9A84C" />
          </div>

          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 10, letterSpacing: '0.4em', color: '#C9A84C', opacity: 0.18, marginTop: 16 }}>
            © 2025 ARJUNA & SRIKANDI
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
