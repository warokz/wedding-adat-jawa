import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, Volume2, VolumeX } from 'lucide-react'

export default function MusicPlayer({ autoPlay = false }) {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [showVol, setShowVol] = useState(false)
  const audioRef = useRef(null)

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio('/gmalena.mpeg')
    audioRef.current.loop = true
    audioRef.current.volume = volume

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  // Auto-play when door opens
  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.play().then(() => {
        setPlaying(true)
      }).catch(err => {
        console.log('Auto-play blocked:', err)
      })
    }
  }, [autoPlay])

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const toggle = async () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setPlaying(true)
      } catch (err) {
        console.log('Play error:', err)
      }
    }
  }

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>

      {/* Volume slider */}
      <AnimatePresence>
        {showVol && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            style={{
              background: 'rgba(26,9,0,0.95)',
              border: '1px solid rgba(201,168,76,0.4)',
              padding: '12px 16px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              backdropFilter: 'blur(8px)',
            }}
          >
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 10, letterSpacing: '0.3em', color: '#C9A84C' }}>VOLUME</p>
            <input
              type="range" min="0" max="1" step="0.05"
              value={volume}
              onChange={e => setVolume(parseFloat(e.target.value))}
              style={{ width: 80, accentColor: '#C9A84C', cursor: 'pointer' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Now playing label */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            style={{
              background: 'rgba(26,9,0,0.92)',
              border: '1px solid rgba(201,168,76,0.35)',
              padding: '6px 14px',
              display: 'flex', alignItems: 'center', gap: 8,
              backdropFilter: 'blur(8px)',
            }}
          >
            <Music size={11} color="#C9A84C" />
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, color: '#C9A84C', whiteSpace: 'nowrap' }}>
              Gamelan Jawa
            </p>
            {/* Equalizer bars */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 14 }}>
              {[1, 2, 3, 4].map(i => (
                <motion.div key={i}
                  style={{ width: 3, background: '#C9A84C', borderRadius: 1 }}
                  animate={{ height: ['3px', `${6 + i * 3}px`, '3px'] }}
                  transition={{ duration: 0.5 + i * 0.1, repeat: Infinity, delay: i * 0.12 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <div style={{ display: 'flex', gap: 8 }}>
        {/* Volume toggle */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setShowVol(p => !p)}
          style={{
            width: 36, height: 36, borderRadius: '50%',
            border: '1px solid rgba(201,168,76,0.5)',
            background: 'rgba(26,9,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', backdropFilter: 'blur(8px)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        </motion.button>

        {/* Play/pause */}
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={playing ? 'glow-border' : ''}
          style={{
            position: 'relative',
            width: 46, height: 46, borderRadius: '50%',
            border: '2px solid #C9A84C',
            background: playing
              ? 'radial-gradient(circle, rgba(201,168,76,0.25), rgba(26,9,0,0.9))'
              : 'rgba(26,9,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', backdropFilter: 'blur(8px)',
          }}
        >
          {playing ? <Volume2 size={18} color="#C9A84C" /> : <VolumeX size={18} color="#C9A84C" />}

          {/* Ripple rings when playing */}
          {playing && [1, 2].map(i => (
            <motion.div key={i}
              style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                border: '1px solid #C9A84C',
              }}
              animate={{ scale: [1, 2 + i * 0.4], opacity: [0.5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.6 }}
            />
          ))}
        </motion.button>
      </div>
    </div>
  )
}
