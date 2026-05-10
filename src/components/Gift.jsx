import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Copy, Check, CreditCard, GiftIcon } from 'lucide-react'

function BankCard({ bank, account, name, delay }) {
  const [copied, setCopied] = useState(false)
  const copy = () => { navigator.clipboard.writeText(account); setCopied(true); setTimeout(() => setCopied(false), 2000) }

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}
      style={{ border: '1px solid rgba(201,168,76,0.45)', padding: 24, background: 'rgba(253,246,227,0.97)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <CreditCard size={18} color="#C9A84C" />
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 12, letterSpacing: '0.3em', color: '#C9A84C' }}>{bank}</p>
      </div>
      <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#4A2C0A', marginBottom: 4 }}>{account}</p>
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem', color: '#4A2C0A', opacity: 0.7, marginBottom: 16 }}>a.n. {name}</p>
      <button onClick={copy}
        style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 20px', border: '1px solid #C9A84C', background: 'transparent', color: '#8B6914', fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.3em', cursor: 'pointer', transition: 'all 0.3s' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#4A2C0A'; e.currentTarget.style.color = '#E8C97A' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8B6914' }}>
        {copied ? <Check size={13} /> : <Copy size={13} />}
        {copied ? 'TERSALIN!' : 'SALIN NOMOR'}
      </button>
    </motion.div>
  )
}

export default function Gift() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section style={{ background: 'linear-gradient(180deg, #0f0700 0%, #2D1B00 20%, #3d2200 50%, #2D1B00 80%, #0f0700 100%)', position: 'relative', overflow: 'hidden' }}>
      <div className="batik-overlay" style={{ opacity: 0.18 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto', padding: '80px 24px' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
            <GiftIcon size={17} color="#C9A84C" />
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.5em', color: '#C9A84C' }}>HADIAH</p>
            <GiftIcon size={17} color="#C9A84C" />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3rem)', color: '#E8C97A', marginBottom: 16 }}>Kirim Hadiah</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, maxWidth: 200, margin: '0 auto 20px' }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <div style={{ width: 8, height: 8, background: '#C9A84C', transform: 'rotate(45deg)' }} />
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: '#F5E6C8', opacity: 0.7, maxWidth: 400, margin: '0 auto' }}>
            Doa restu Anda adalah hadiah terbaik bagi kami. Namun jika ingin memberikan tanda kasih, dapat melalui:
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 20 }} className="gift-grid">
          <BankCard bank="BCA" account="1234567890" name="Raden Arjuna Wibisono" delay={0.2} />
          <BankCard bank="Mandiri" account="0987654321" name="Dewi Srikandi Rahayu" delay={0.4} />
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}
          style={{ border: '1px solid rgba(201,168,76,0.35)', padding: '24px', textAlign: 'center', background: 'rgba(253,246,227,0.04)' }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 10, letterSpacing: '0.4em', color: '#C9A84C', marginBottom: 8 }}>ALAMAT PENGIRIMAN</p>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#F5E6C8' }}>Jl. Prambanan No. 88, Sleman, Yogyakarta 55572</p>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem', color: '#F5E6C8', opacity: 0.55, marginTop: 4 }}>a.n. Keluarga Besar Wibisono</p>
        </motion.div>
      </div>

      <style>{`@media(max-width:480px){.gift-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}
