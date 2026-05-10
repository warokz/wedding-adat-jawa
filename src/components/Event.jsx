import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, MapPin, Navigation, Flower2 } from 'lucide-react'
import { useState } from 'react'

function EventCard({ title, subtitle, date, time, venue, address, delay, mapUrl, Icon }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [hover, setHover] = useState(false)

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      style={{
        background: 'rgba(253,246,227,0.97)',
        border: '1px solid rgba(201,168,76,0.45)',
        boxShadow: '0 4px 30px rgba(201,168,76,0.08)',
        padding: 36, textAlign: 'center', position: 'relative',
      }}>
      {/* Corner accents */}
      {[{ top: -6, left: -6 }, { top: -6, right: -6 }, { bottom: -6, left: -6 }, { bottom: -6, right: -6 }].map((pos, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', ...pos }}>
          <path d={['M0 18 L0 0 L18 0','M0 0 L18 0 L18 18','M0 0 L0 18 L18 18','M0 18 L18 18 L18 0'][i]}
            stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.65" />
        </svg>
      ))}

      <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid #C9A84C', background: 'linear-gradient(135deg, #2D1B00, #4A2C0A)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
        <Icon size={20} color="#C9A84C" />
      </div>

      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 10, letterSpacing: '0.4em', color: '#C9A84C', marginBottom: 4 }}>ACARA</p>
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#4A2C0A', marginBottom: 2 }}>{title}</h3>
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#4A2C0A', opacity: 0.55, marginBottom: 20 }}>{subtitle}</p>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', marginBottom: 20 }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'left' }}>
        {[
          { Icon: Calendar, label: 'TANGGAL', value: date },
          { Icon: Clock, label: 'WAKTU', value: time },
          { Icon: MapPin, label: 'TEMPAT', value: venue, sub: address },
        ].map(({ Icon: I, label, value, sub }) => (
          <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
              <I size={12} color="#C9A84C" />
            </div>
            <div>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 10, letterSpacing: '0.3em', color: '#4A2C0A', opacity: 0.55 }}>{label}</p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#4A2C0A', fontWeight: 600 }}>{value}</p>
              {sub && <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem', color: '#4A2C0A', opacity: 0.6 }}>{sub}</p>}
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', margin: '20px 0' }} />

      <a href={mapUrl} target="_blank" rel="noopener noreferrer"
        onMouseEnter={e => { e.currentTarget.style.background = '#4A2C0A'; e.currentTarget.style.color = '#E8C97A' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8B6914' }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 28px', border: '1px solid #C9A84C', color: '#8B6914', fontFamily: 'Cormorant Garamond, serif', fontSize: 12, letterSpacing: '0.3em', textDecoration: 'none', transition: 'all 0.3s' }}>
        <Navigation size={13} /> LIHAT LOKASI
      </a>
    </motion.div>
  )
}

export default function Event() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section style={{ background: 'linear-gradient(180deg, #0f0700 0%, #2D1B00 20%, #3d2200 50%, #2D1B00 80%, #0f0700 100%)', position: 'relative', overflow: 'hidden' }}>
      <div className="batik-overlay" style={{ opacity: 0.18 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 52 }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.5em', color: '#C9A84C', marginBottom: 10 }}>RANGKAIAN ACARA</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3rem)', color: '#E8C97A', marginBottom: 16 }}>Hari Istimewa</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, maxWidth: 200, margin: '0 auto 16px' }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <div style={{ width: 8, height: 8, background: '#C9A84C', transform: 'rotate(45deg)' }} />
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: '#F5E6C8', opacity: 0.6 }}>
            Kamis Pahing, 14 Agustus 2026 · Prambanan, Yogyakarta
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }} className="event-grid">
          <EventCard title="Akad Nikah" subtitle="Ijab Qabul" date="Kamis Pahing, 14 Agustus 2026" time="08.00 – 10.00 WIB" venue="Masjid Agung Kauman" address="Jl. Kauman No.1, Yogyakarta" delay={0.2} mapUrl="https://maps.google.com/?q=Masjid+Agung+Kauman+Yogyakarta" Icon={Flower2} />
          <EventCard title="Resepsi Pernikahan" subtitle="Tasyakuran & Pesta" date="Kamis Pahing, 14 Agustus 2026" time="10.00 – 14.00 WIB" venue="Pendopo Prambanan Heritage" address="Jl. Raya Solo-Yogya Km.16, Prambanan" delay={0.4} mapUrl="https://maps.google.com/?q=Prambanan+Temple" Icon={Calendar} />
        </div>

        {/* Dress code */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginTop: 28, padding: '32px 24px', border: '1px solid rgba(201,168,76,0.35)', background: 'rgba(253,246,227,0.04)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.4em', color: '#C9A84C', marginBottom: 8 }}>DRESS CODE</p>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#E8C97A', marginBottom: 24 }}>Pakaian Adat Jawa</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            {[['#8B6914','Coklat Emas'],['#2D5016','Hijau Jawa'],['#1a0d00','Hitam Elegan'],['#C9A84C','Emas Keemasan']].map(([color, label]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: color, border: '2px solid #C9A84C', boxShadow: `0 0 10px ${color}50` }} />
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 12, color: '#F5E6C8' }}>{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`@media(max-width:640px){.event-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}
