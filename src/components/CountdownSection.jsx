import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { event } from '../data/content'

function getTimeLeft() {
  const target = new Date(event.isoDateTime).getTime()
  const now = Date.now()
  const diff = Math.max(0, target - now)

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function TimeBox({ value, label }) {
  return (
    <div className="bg-surface-charcoal rounded-lg p-space-xs flex flex-col items-center shadow-inner overflow-hidden">
      <motion.span
        key={value}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="font-headline-sm text-headline-sm text-white font-bold"
      >
        {String(value).padStart(2, '0')}
      </motion.span>
      <span className="font-label-caption text-[10px] text-text-muted uppercase tracking-wider mt-1">{label}</span>
    </div>
  )
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="w-full px-space-md py-space-lg flex flex-col items-center">
      <Reveal direction="zoom" className="w-full max-w-sm bg-surface-container rounded-xl p-space-lg shadow-xl shadow-black/60 text-center">
        <div className="inline-flex items-center gap-1 text-white font-label-gold text-label-gold uppercase tracking-[0.2em] mb-space-xs">
          <span className="material-symbols-outlined text-[16px]">all_inclusive</span>
          <span>Janji Suci Pawiwahan</span>
        </div>
        <p className="font-title-mantra text-title-mantra text-secondary italic leading-relaxed my-space-sm">
          &ldquo;Pernikahan yang hebat bukanlah ketika &lsquo;pasangan sempurna&rsquo; bersatu. Tapi disaat pasangan
          yang tidak sempurna belajar untuk menikmati perbedaan mereka.&rdquo;
        </p>

        <div className="grid grid-cols-4 gap-space-xs my-space-md">
          <TimeBox value={timeLeft.days} label="Hari" />
          <TimeBox value={timeLeft.hours} label="Jam" />
          <TimeBox value={timeLeft.minutes} label="Menit" />
          <TimeBox value={timeLeft.seconds} label="Detik" />
        </div>
        <p className="font-label-caption text-label-caption text-on-surface-variant tracking-wide">
          Menghitung hari menuju ikatan suci Dharma Agama &amp; Dharma Negara.
        </p>
      </Reveal>
    </section>
  )
}
