import { useState, useRef } from 'react' 
import { motion, AnimatePresence } from 'framer-motion'
import Cover from './components/Cover'
import Header from './components/Header'
import Wedawarna from './components/Wedawarna'
import CoupleSection from './components/CoupleSection'
import CountdownSection from './components/CountdownSection'
import EventSection from './components/EventSection'
import GallerySection from './components/GallerySection'
import ClosingSection from './components/ClosingSection'
import RsvpSection from './components/RsvpSection'
import Divider from './components/Divider'
import Footer from './components/Footer'
import { useGuestName } from './hooks/useGuestName'

import backsoundAudio from './assets/wedding-song.mp3' 

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  
  // 2. STATE & REF UNTUK AUDIO
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  
  const guestName = useGuestName()

  function handleOpen() {
    setIsOpen(true)
    window.scrollTo({ top: 0, behavior: 'auto' })
    
    // 3. MAIN KAN MUSIK SAAT UNDANGAN DIBUKA
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  // 4. FUNGSI UNTUK MENGONTROL TOMBOL PLAY/PAUSE
  function toggleMusic() {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      {/* 5. ELEMEN AUDIO TERSEMBUNYI (Tambahkan loop agar lagu mengulang) */}
      <audio ref={audioRef} src={backsoundAudio} loop />

      <Cover guestName={guestName} isOpen={isOpen} onOpen={handleOpen} />

      <AnimatePresence>
        {isOpen && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col w-full text-on-surface bg-surface min-h-screen py-space-xl overflow-x-hidden relative"
          >
            <Header />
            <Wedawarna />
            <Divider />
            <CoupleSection />
            <Divider />
            <CountdownSection />
            <Divider />
            <EventSection />
            <Divider />
            <GallerySection />
            <Divider />
            <ClosingSection />
            <Divider />
            <RsvpSection />
            <Divider />
            <Footer />

            {/* 6. TOMBOL FLOATING MUSIC KONTROL DI POJOK KANAN BAWAH */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMusic}
              className="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-surface-charcoal border border-primary/30 rounded-full flex items-center justify-center text-primary shadow-xl shadow-black/80 backdrop-blur-md"
            >
              {/* Animasi berputar otomatis saat lagu menyala (isPlaying === true) */}
              <motion.span 
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="material-symbols-outlined text-[20px]"
              >
                {isPlaying ? 'music_note' : 'music_off'}
              </motion.span>
            </motion.button>
            
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}