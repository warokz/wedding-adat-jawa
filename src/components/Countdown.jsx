import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, Heart } from 'lucide-react'

function TimeBox({ value, label, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        <div style={{
          width: 80, height: 80,
          background: 'linear-gradient(135deg, #1a0d00, #2D1B00)',
          border: '1px solid rgba(201,168,76,0.6)',
          boxShadow: '0 0 18px rgba(201,168,76,0.12), inset 0 0 18px rgba(201,168,76,0.04)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>
          {['-top-1 -left-1', '-top-1 -right-1', '-bottom-1 -left-1', '-bottom-1 -right-1'].map((_, i) => {
            const positions = [{ top: -4, left: -4 }, { top: -4, right: -4 }, { bottom: -4, left: -4 }, { bottom: -4, right: -4 }]
            return <div key={i} style={{ position: 'absolute', width: 8, height: 8, background: '#C9A84C', transform: 'rotate(45deg)', opacity: 0.7, ...positions[i] }} />
          })}
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#E8C97A' }}>
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 10, letterSpacing: '0.3em', color: '#C9A84C', marginTop: 8 }}>{label}</p>
    </motion.div>
  )
}

export default function Countdown() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calc = () => {
      const diff = new Date('2026-08-14T08:00:00') - new Date()
      if (diff <= 0) {
        setT({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setT({ 
        days: Math.floor(diff/86400000), 
        hours: Math.floor(diff/3600000%24), 
        minutes: Math.floor(diff/60000%60), 
        seconds: Math.floor(diff/1000%60) 
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section style={{ background: '#FDF6E3', position: 'relative', overflow: 'hidden' }}>
      <div className="batik-overlay" style={{ opacity: 0.35 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 600, margin: '0 auto', padding: '72px 24px', textAlign: 'center' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
            <Clock size={17} color="#C9A84C" />
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.4em', color: '#C9A84C' }}>HITUNG MUNDUR</p>
            <Clock size={17} color="#C9A84C" />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem,4vw,2.4rem)', color: '#4A2C0A', marginBottom: 8 }}>Menuju Hari Bahagia</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 36 }}>
            <div style={{ height: 1, width: 60, background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <Heart size={12} fill="#C9A84C" color="#C9A84C" />
            <div style={{ height: 1, width: 60, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <TimeBox value={t.days} label="HARI" delay={0.1} />
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#C9A84C', opacity: 0.5, marginBottom: 20 }}>:</span>
            <TimeBox value={t.hours} label="JAM" delay={0.2} />
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#C9A84C', opacity: 0.5, marginBottom: 20 }}>:</span>
            <TimeBox value={t.minutes} label="MENIT" delay={0.3} />
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#C9A84C', opacity: 0.5, marginBottom: 20 }}>:</span>
            <TimeBox value={t.seconds} label="DETIK" delay={0.4} />
          </div>

          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: '#4A2C0A', opacity: 0.55, marginTop: 28 }}>
            Sabtu Wage, 28 November 2026 · Bekasi, Jawa Barat
          </p>
        </motion.div>
      </div>
    </section>
  )
}
