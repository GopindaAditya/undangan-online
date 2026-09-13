import { motion } from 'framer-motion'
import { couple, heroImage } from '../data/content'

export default function Header() {
  return (
    <motion.header
      className="relative w-full h-[50vh] min-h-[400px] flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <img className="absolute inset-0 w-full h-full object-cover" src={heroImage} alt="Header Pawiwahan" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-surface" />

      <div className="relative z-10 mt-auto pb-space-xl text-center">
        <motion.span
          className="font-label-gold text-label-gold text-[#FFD700] tracking-[0.3em] uppercase drop-shadow-md block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Pawiwahan
        </motion.span>
        <motion.h1
          className="font-display-hero text-display-hero-mobile mt-2 text-[#FFD700] tracking-wide leading-none drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {couple.groomShort}
          <br />
          <span className="text-secondary italic text-[28px] font-light">&amp;</span>
          <br />
          {couple.brideShort}
        </motion.h1>
      </div>
    </motion.header>
  )
}
