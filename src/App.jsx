import { useState } from 'react'
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

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const guestName = useGuestName()

  function handleOpen() {
    setIsOpen(true)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return (
    <>
      <Cover guestName={guestName} isOpen={isOpen} onOpen={handleOpen} />

      <AnimatePresence>
        {isOpen && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col w-full text-on-surface bg-surface min-h-screen py-space-xl overflow-x-hidden"
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
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
