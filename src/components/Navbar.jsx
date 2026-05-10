import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'

const navItems = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Mempelai', href: '#couple' },
  { label: 'Acara', href: '#event' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'RSVP', href: '#rsvp' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Tidak tampil di mobile/tablet
  if (isMobile) return null

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled ? 'rgba(26,9,0,0.96)' : 'transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.4)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.18)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div style={{
        maxWidth: 960, margin: '0 auto',
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <Heart size={14} fill="#C9A84C" color="#C9A84C" />
          <span style={{ fontFamily: 'Playfair Display, serif', color: '#E8C97A', fontSize: '1.05rem', letterSpacing: '0.1em' }}>
            A &amp; S
          </span>
        </a>

        <div style={{ display: 'flex', gap: 36 }}>
          {navItems.map(item => (
            <a key={item.label} href={item.href}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 13, letterSpacing: '0.22em',
                color: '#F5E6C8', textDecoration: 'none',
                transition: 'color 0.2s',
                textTransform: 'uppercase',
              }}
              onMouseEnter={e => e.target.style.color = '#C9A84C'}
              onMouseLeave={e => e.target.style.color = '#F5E6C8'}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
