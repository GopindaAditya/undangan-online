import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import { galleryData } from '../data/content'

const categories = Object.keys(galleryData)

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [isExpanded, setIsExpanded] = useState(false)

  const currentPhotos = galleryData[activeCategory] || []
  const initialPhotosCount = 6
  
  const displayedPhotos = isExpanded 
    ? currentPhotos 
    : currentPhotos.slice(0, initialPhotosCount)

  return (
    <section className="w-full px-space-md py-space-lg flex flex-col items-center overflow-hidden">
      {/* Header Section */}
      <Reveal className="text-center max-w-sm mb-space-md">
        <div className="flex items-center justify-center gap-space-xs text-white mb-space-2xs">
          <span className="material-symbols-outlined text-[16px]">photo_camera</span>
          <span className="font-label-gold text-label-gold uppercase tracking-[0.2em]">Dokumentasi Cinta</span>
        </div>
        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-white font-medium tracking-wide">
          Galeri Momen Bahagia
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
          Setiap jepretan melukiskan kisah sakral dan kehangatan rasa dalam perjalanan cinta kami.
        </p>
      </Reveal>

      {/* Tabs Kategori */}
      <Reveal className="flex flex-wrap items-center justify-center gap-space-xs mb-space-md w-full max-w-sm">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat)
              setIsExpanded(false)
            }}
            className={`px-space-md py-1.5 rounded-full font-label-gold text-[11px] tracking-wider uppercase transition-colors ${
              activeCategory === cat ? 'bg-primary text-on-primary shadow-md' : 'bg-surface-elevated text-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </Reveal>

      {/* Grid Galeri */}
      <div className="w-full max-w-sm grid grid-cols-2 gap-space-xs">
        <AnimatePresence mode="popLayout">
          {displayedPhotos.map((src, i) => (
            <motion.div
              key={`${activeCategory}-${src}-${i}`} // Key sangat penting agar React & Framer Motion tidak bingung
              layout // Transisi mulus saat grid berubah/tambah foto
              
              // ANIMASI MUNCUL DARI BAWAH
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }} // Memicu animasi saat foto 50px mendekati layar bawah
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              
              className={`w-full rounded-lg overflow-hidden relative shadow-md ${
                // CSS skeleton loader: warna latar belakang solid + efek denyut sebelum foto muncul
                'bg-surface-charcoal animate-pulse'
              } ${
                // Pola ukuran foto (Masonry buatan)
                i % 3 === 0 ? 'col-span-2 h-56' : 'col-span-1 h-40'
              }`}
            >
              <img 
                // Begitu gambar beres ter-load, CSS bawaan akan menutupi efek animate-pulse
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 hover:scale-110" 
                src={src} 
                alt={`${activeCategory} Momen ${i + 1}`} 
                loading="lazy"      // OPTIMASI 1: Lazy loading
                decoding="async"    // OPTIMASI 2: Decoding tidak memblokir browser
                onLoad={(e) => {
                  // Hapus efek animate-pulse jika gambar sudah sukses termuat
                  e.target.parentElement.classList.remove('animate-pulse');
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Tombol Tampilkan Semua */}
      {currentPhotos.length > initialPhotosCount && (
        <Reveal className="mt-space-md">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-2 rounded-full border border-primary text-white font-label-gold text-[12px] uppercase tracking-widest hover:bg-primary/10 transition-colors flex items-center gap-2"
          >
            {isExpanded ? (
              <>
                <span>Lebih Sedikit</span>
                <span className="material-symbols-outlined text-[16px]">expand_less</span>
              </>
            ) : (
              <>
                <span>Lihat Semua Foto ({currentPhotos.length})</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </>
            )}
          </motion.button>
        </Reveal>
      )}
    </section>
  )
}