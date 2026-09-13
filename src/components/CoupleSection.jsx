import { motion } from 'framer-motion'
import Reveal from './Reveal'
import PersonCard from './PersonCard'
import { groom, bride } from '../data/content'

export default function CoupleSection() {
  return (
    <section className="w-full px-space-md py-space-lg flex flex-col items-center">
      <Reveal className="text-center max-w-sm mb-space-xl">
        <div className="flex items-center justify-center gap-space-xs text-[#FFD700] mb-space-2xs">
          <span className="material-symbols-outlined text-[16px]">local_florist</span>
          <span className="font-label-gold text-label-gold uppercase tracking-[0.2em]">Pewaris Tradisi</span>
          <span className="material-symbols-outlined text-[16px]">local_florist</span>
        </div>
        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-[#FFD700] font-medium tracking-wide">
          Mempelai Pawiwahan
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
          Dengan asung kertha wara nugraha Ida Sang Hyang Widhi Wasa dan restu tulus dari kedua belah pihak
          keluarga besar kami.
        </p>
      </Reveal>

      <PersonCard person={groom} direction="right" />

      <Reveal direction="zoom" className="my-space-md flex flex-col items-center gap-space-2xs text-[#FFD700]">
        <motion.div
          className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shadow-lg shadow-black/80"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="material-symbols-outlined text-[22px] text-[#FFD700]" style={{ fontVariationSettings: "'FILL' 1" }}>
            favorite
          </span>
        </motion.div>
        <span className="font-title-mantra text-title-mantra text-secondary italic">Menunggal Ring Hyang Asmara</span>
      </Reveal>

      <PersonCard person={bride} direction="left" />
    </section>
  )
}
