import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { gallery } from '../data/content'

const categories = ['Payas Agung', 'Modern Editorial']

export default function GallerySection() {
  const [active, setActive] = useState(categories[0])

  return (
    <section className="w-full px-space-md py-space-lg flex flex-col items-center">
      <Reveal className="text-center max-w-sm mb-space-md">
        <div className="flex items-center justify-center gap-space-xs text-primary mb-space-2xs">
          <span className="material-symbols-outlined text-[16px]">photo_camera</span>
          <span className="font-label-gold text-label-gold uppercase tracking-[0.2em]">Dokumentasi Cinta</span>
        </div>
        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-medium tracking-wide">
          Galeri Momen Bahagia
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
          Setiap jepretan melukiskan kisah sakral dan kehangatan rasa dalam perjalanan cinta kami.
        </p>
      </Reveal>

      <Reveal className="flex items-center justify-center gap-space-xs mb-space-md w-full max-w-sm">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-space-md py-1.5 rounded-full font-label-gold text-[11px] tracking-wider uppercase transition-colors ${
              active === cat ? 'bg-primary text-on-primary shadow-md' : 'bg-surface-elevated text-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </Reveal>

      <Reveal className="w-full max-w-sm grid grid-cols-2 gap-space-xs">
        {gallery.map((src, i) => (
          <motion.div
            key={src + i}
            className={`w-full rounded-lg overflow-hidden bg-surface-charcoal shadow-md relative ${
              i === gallery.length - 1 ? 'col-span-2 h-52' : i < 2 ? 'h-64' : 'h-44'
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img className="w-full h-full object-cover" src={src} alt={`Momen ${i + 1}`} loading="lazy" />
            {i === gallery.length - 1 && (
              <div className="absolute bottom-2 right-2 px-space-xs py-1 rounded bg-surface-charcoal/80 backdrop-blur-md text-[10px] text-primary font-label-gold uppercase tracking-widest flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">collections</span>
                <span>{gallery.length} Foto Tersemat</span>
              </div>
            )}
          </motion.div>
        ))}
      </Reveal>
    </section>
  )
}
