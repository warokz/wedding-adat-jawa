import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Opening from './components/Opening'
import DoorTransition from './components/DoorTransition'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Couple from './components/Couple'
import Countdown from './components/Countdown'
import Event from './components/Event'
import Gallery from './components/Gallery'
import Gift from './components/Gift'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import FloatingPetals from './components/FloatingPetals'
import MusicPlayer from './components/MusicPlayer'

// 3 states: 'opening' | 'door' | 'main'
export default function App() {
  const [phase, setPhase] = useState('opening')

  return (
    <div style={{ position: 'relative' }}>
      <AnimatePresence mode="wait">
        {phase === 'opening' && (
          <Opening key="opening" onOpen={() => setPhase('door')} />
        )}

        {phase === 'door' && (
          <DoorTransition key="door" onComplete={() => setPhase('main')} />
        )}
      </AnimatePresence>

      {phase === 'main' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <FloatingPetals />
          <Navbar />
          <MusicPlayer autoPlay={true} />

          <main>
            <section id="hero"><Hero /></section>
            <section id="couple"><Couple /></section>
            <Countdown />
            <section id="event"><Event /></section>
            <section id="gallery"><Gallery /></section>
            <Gift />
            <section id="rsvp"><RSVP /></section>
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  )
}
