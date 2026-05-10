import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Send, CheckCircle, MessageSquare, User, Heart } from 'lucide-react'

const initWishes = [
  { name: 'Budi Santoso', message: 'Selamat menempuh hidup baru, semoga menjadi keluarga sakinah mawaddah warahmah. Barakallah 🌸' },
  { name: 'Siti Rahayu', message: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair. Aamiin 💛" },
  { name: 'Dimas Pratama', message: 'Selamat ya Juna! Akhirnya jadian juga sama Srikandi haha. Semoga langgeng sampai kakek nenek 🙏' },
  { name: 'Anisa Putri', message: 'Wah cantik banget pasangannya! Semoga selalu bahagia dan dilancarkan rezekinya ya kak 💕' },
]

const inputBase = {
  width: '100%', background: 'rgba(253,246,227,0.05)',
  border: '1px solid rgba(201,168,76,0.4)', color: '#FDF6E3',
  fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem',
  padding: '12px 16px', outline: 'none', boxSizing: 'border-box',
}

export default function RSVP() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [wishes, setWishes] = useState(initWishes)

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) return
    setWishes(p => [{ name: form.name, message: form.message }, ...p])
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setForm({ name: '', message: '' }) }, 3000)
  }

  return (
    <section style={{ background: 'linear-gradient(180deg, #0f0700 0%, #2D1B00 20%, #3d2200 50%, #2D1B00 80%, #0f0700 100%)', position: 'relative', overflow: 'hidden' }}>
      <div className="batik-overlay" style={{ opacity: 0.18 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto', padding: '80px 24px' }}>
        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
            <MessageSquare size={17} color="#C9A84C" />
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.5em', color: '#C9A84C' }}>UCAPAN & DOA</p>
            <MessageSquare size={17} color="#C9A84C" />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3rem)', color: '#E8C97A', marginBottom: 16 }}>Kirim Ucapan</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, maxWidth: 200, margin: '0 auto 16px' }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <Heart size={12} fill="#C9A84C" color="#C9A84C" />
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: '#F5E6C8', opacity: 0.65 }}>
            Kehadiran dan doa restu Anda adalah kebahagiaan terbesar bagi kami
          </p>
        </motion.div>

        {/* Form */}
        <motion.form onSubmit={submit} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ border: '1px solid rgba(201,168,76,0.3)', padding: 28, marginBottom: 36, display: 'flex', flexDirection: 'column', gap: 18 }}>

          <div>
            <label style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 10, letterSpacing: '0.4em', color: '#C9A84C', display: 'block', marginBottom: 8 }}>NAMA LENGKAP</label>
            <div style={{ position: 'relative' }}>
              <User size={13} color="#C9A84C" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }} />
              <input type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                placeholder="Masukkan nama Anda" required
                style={{ ...inputBase, paddingLeft: 36 }} />
            </div>
          </div>

          <div>
            <label style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 10, letterSpacing: '0.4em', color: '#C9A84C', display: 'block', marginBottom: 8 }}>UCAPAN & DOA</label>
            <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              placeholder="Tuliskan ucapan dan doa terbaik Anda..." rows={4} required
              style={{ ...inputBase, resize: 'none' }} />
          </div>

          <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              padding: '14px', border: '1px solid #C9A84C', cursor: 'pointer',
              fontFamily: 'Cormorant Garamond, serif', fontSize: 13, letterSpacing: '0.3em',
              background: submitted ? '#C9A84C' : 'transparent',
              color: submitted ? '#2D1B00' : '#E8C97A',
              transition: 'all 0.3s',
            }}>
            {submitted ? <><CheckCircle size={16} /> TERIMA KASIH! 🙏</> : <><Send size={16} /> KIRIM UCAPAN</>}
          </motion.button>
        </motion.form>

        {/* Wishes */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 10, letterSpacing: '0.4em', color: '#C9A84C' }}>UCAPAN TAMU</p>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxHeight: 380, overflowY: 'auto', paddingRight: 4 }}>
            {wishes.map((w, i) => {
              return (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  style={{ border: '1px solid rgba(201,168,76,0.2)', padding: '16px 18px', background: 'rgba(253,246,227,0.03)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid #C9A84C', background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.9rem', color: '#C9A84C' }}>{w.name[0]}</span>
                    </div>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#E8C97A' }}>{w.name}</p>
                  </div>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#F5E6C8', opacity: 0.8, lineHeight: 1.6, paddingLeft: 38 }}>{w.message}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
