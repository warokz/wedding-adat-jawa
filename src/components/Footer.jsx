import { motion } from 'framer-motion'
import { Heart, AtSign, Code, Sparkles, Star } from 'lucide-react'
import { useState } from 'react'

// Floating gold particles
function GoldParticle({ delay, duration, x, y }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: 4,
        height: 4,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #E8C97A, #C9A84C)',
        boxShadow: '0 0 8px rgba(201,168,76,0.6)',
      }}
      animate={{
        y: [0, -80, 0],
        x: [0, Math.random() * 40 - 20, 0],
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

// Animated gradient orbs (video motion effect)
function AnimatedOrb({ size, top, left, delay, color1, color2 }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top,
        left,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color1}, ${color2})`,
        filter: 'blur(60px)',
        opacity: 0.15,
      }}
      animate={{
        scale: [1, 1.3, 1],
        x: [0, 30, 0],
        y: [0, -20, 0],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export default function Footer() {
  const [hoverDev, setHoverDev] = useState(false)

  return (
    <footer style={{ 
      background: 'linear-gradient(180deg, #0f0700 0%, #1A0D00 50%, #0a0400 100%)', 
      position: 'relative', 
      overflow: 'hidden', 
      textAlign: 'center' 
    }}>
      {/* Animated video motion orbs */}
      <AnimatedOrb size={300} top="-10%" left="-5%" delay={0} color1="rgba(201,168,76,0.3)" color2="transparent" />
      <AnimatedOrb size={250} top="30%" right="-8%" delay={2} color1="rgba(232,201,122,0.25)" color2="transparent" />
      <AnimatedOrb size={200} bottom="-5%" left="20%" delay={4} color1="rgba(201,168,76,0.2)" color2="transparent" />
      
      {/* Batik overlay */}
      <div className="batik-overlay" style={{ opacity: 0.12 }} />
      
      {/* Top border with shimmer */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: 2,
          background: 'linear-gradient(90deg, transparent, #C9A84C, #E8C97A, #C9A84C, transparent)',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating gold particles */}
      {[...Array(20)].map((_, i) => (
        <GoldParticle 
          key={i} 
          delay={i * 0.4} 
          duration={4 + Math.random() * 2}
          x={10 + i * 4}
          y={20 + (i % 3) * 25}
        />
      ))}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto', padding: '80px 24px 48px' }}>
        
        {/* Animated lotus with glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0, rotateZ: -180 }} 
          whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }} 
          transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 28, position: 'relative' }}
        >
          {/* Glow effect */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201,168,76,0.4), transparent)',
              filter: 'blur(20px)',
            }}
          />
          
          <motion.svg 
            width="64" 
            height="64" 
            viewBox="0 0 64 64"
            animate={{ rotateZ: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {[0,45,90,135,180,225,270,315].map((a,i) => (
              <g key={i} transform={`rotate(${a} 32 32)`}>
                <motion.ellipse 
                  cx="32" 
                  cy="10" 
                  rx="3.5" 
                  ry="9" 
                  fill="#C9A84C" 
                  opacity="0.35"
                  animate={{ opacity: [0.25, 0.45, 0.25] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                />
              </g>
            ))}
            <circle cx="32" cy="32" r="6" fill="#C9A84C" opacity="0.6" />
            <circle cx="32" cy="32" r="3" fill="#E8C97A" opacity="0.8" />
          </motion.svg>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Thank you label with sparkles */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
            <Sparkles size={12} color="#C9A84C" />
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.5em', color: '#C9A84C' }}>
              TERIMA KASIH
            </p>
            <Sparkles size={12} color="#C9A84C" />
          </div>

          {/* Names with shimmer effect */}
          <motion.h2 
            className="gold-shimmer-text"
            style={{
              fontFamily: 'Playfair Display, serif', 
              fontSize: 'clamp(2rem,6vw,3rem)',
              marginBottom: 8,
              filter: 'drop-shadow(0 4px 12px rgba(201,168,76,0.3))',
            }}
          >
            Arjuna &amp; Srikandi
          </motion.h2>

          <p style={{ 
            fontFamily: 'Cormorant Garamond, serif', 
            fontStyle: 'italic', 
            fontSize: '0.9rem', 
            color: '#C9A84C', 
            opacity: 0.6, 
            marginBottom: 24 
          }}>
            14 Agustus 2026 · Prambanan, Yogyakarta
          </p>

          {/* Divider with heart */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, maxWidth: 180, margin: '0 auto 28px' }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={14} fill="#C9A84C" color="#C9A84C" />
            </motion.div>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>

          {/* Message */}
          <p style={{ 
            fontFamily: 'Cormorant Garamond, serif', 
            fontStyle: 'italic', 
            fontSize: '0.95rem', 
            color: '#F5E6C8', 
            opacity: 0.7, 
            lineHeight: 1.8, 
            marginBottom: 36,
            maxWidth: 480,
            margin: '0 auto 36px',
          }}>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.
          </p>

          {/* Social links with hover effect */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28, marginBottom: 40, flexWrap: 'wrap' }}>
            {[['arjuna.wibisono'],['srikandi.rahayu']].map(([ig]) => (
              <motion.a 
                key={ig} 
                href={`https://instagram.com/${ig}`} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 7, 
                  color: '#C9A84C', 
                  fontFamily: 'Cormorant Garamond, serif', 
                  fontSize: 13, 
                  letterSpacing: '0.2em', 
                  textDecoration: 'none',
                  padding: '8px 16px',
                  border: '1px solid rgba(201,168,76,0.3)',
                  background: 'rgba(201,168,76,0.05)',
                  transition: 'all 0.3s',
                }}
              >
                <AtSign size={14} />
                @{ig}
              </motion.a>
            ))}
          </div>

          {/* Developer credit with luxury style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              marginTop: 48,
              paddingTop: 32,
              borderTop: '1px solid rgba(201,168,76,0.15)',
            }}
          >
            
            <p style={{ 
              fontFamily: 'Cormorant Garamond, serif', 
              fontStyle: 'italic',
              fontSize: 11, 
              color: '#C9A84C', 
              opacity: 0.4,
              marginTop: 16,
            }}>
              Specialized in creating memorable digital experiences
            </p>
          </motion.div>

          {/* Copyright */}
          <p style={{ 
            fontFamily: 'Cormorant Garamond, serif', 
            fontSize: 10, 
            letterSpacing: '0.4em', 
            color: '#C9A84C', 
            opacity: 0.2, 
            marginTop: 32 
          }}>
            © 2026 ADITYA & RIZKA
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
