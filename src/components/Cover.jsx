import { motion, AnimatePresence } from 'framer-motion'
import { couple } from '../data/content'

export default function Cover({ guestName, isOpen, onOpen }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.section
          // Perubahan kunci: h-[100dvh], overflow-hidden, dan flex justify-between
          className="fixed inset-0 z-[100] w-full h-[100dvh] overflow-hidden flex flex-col justify-between items-center bg-surface-charcoal"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%', scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          
          {/* 1. BACKGROUND FOTO & GRADIENT OVERLAY */}
          <div className="absolute inset-0 z-0">
            <motion.img 
              animate={{ scale: [1, 1.05, 1] }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              src={couple.photo} // Gunakan foto vertikal/portrait berdua
              alt="Background Cover" 
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient agar teks di atas & tombol di bawah tetap terbaca jelas */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface-charcoal/90 via-surface-charcoal/40 to-surface-charcoal/95" />
          </div>

          {/* 2. BAGIAN ATAS (Mandala & Nama) */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="show" 
            className="relative z-10 w-full flex flex-col items-center pt-8 sm:pt-12 px-6"
          >
            {/* Ornamen SVG */}
            <motion.div variants={itemVariants} className="mb-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-surface-charcoal/50 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#FFD700]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 100 100">
                   <circle cx="50" cy="50" r="44" strokeDasharray="3 3" strokeWidth="1.5" />
                   <circle cx="50" cy="50" r="36" strokeWidth="1" />
                   <path d="M50 20 L50 80 M20 50 L80 50 M50 20 L68 20 M50 80 L32 80 M20 50 L20 32 M80 50 L80 68" strokeLinecap="round" />
                   <circle cx="50" cy="50" fill="currentColor" r="4" />
                </svg>
              </div>
              <div className="mt-3 flex items-center gap-2 text-[#FFD700]">
                <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-primary" />
                <span className="font-label-gold text-label-gold text-[10px] uppercase tracking-[0.25em]">Om Swastyastu</span>
                <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-primary" />
              </div>
            </motion.div>

            {/* Judul & Nama */}
            <motion.p variants={itemVariants} className="font-headline-sm text-[12px] text-secondary tracking-widest uppercase mb-1">
              Pawiwahan Sacred Union
            </motion.p>
            <motion.div variants={itemVariants} className="mt-2 text-center">
              <h2 className="font-display-hero-mobile text-5xl text-[#FFD700] tracking-wide leading-none drop-shadow-lg">
                {couple.groomShort}
              </h2>
              <div className="flex items-center justify-center my-1 gap-3">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                <span className="font-headline-sm text-lg text-secondary italic font-light">&amp;</span>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent via-primary to-transparent" />
              </div>
              <h2 className="font-display-hero-mobile text-5xl text-[#FFD700] tracking-wide leading-none drop-shadow-lg">
                {couple.brideShort}
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-4">
              <span className="inline-block px-4 py-1 rounded-full bg-surface-charcoal/60 backdrop-blur-md border border-primary/30 text-[#FFD700] font-label-gold text-[10px] tracking-widest uppercase">
                {couple.date}
              </span>
            </motion.div>
          </motion.div>

          {/* 3. BAGIAN BAWAH (Kartu Tamu & Tombol) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative z-10 w-full max-w-sm px-6 pb-8 sm:pb-10 flex flex-col items-center"
          >
            <div className="w-full bg-surface-charcoal/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col items-center text-center">
              <span className="font-label-caption text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                Kepada Yth. Bapak/Ibu/Saudara/i:
              </span>
              
              <div className="my-3 px-4 py-1.5 rounded-full bg-white/5 border border-primary/20 text-[#FFD700] font-headline-sm text-lg font-semibold tracking-wide">
                {guestName}
              </div>
              
              <p className="font-label-caption text-[9px] text-text-muted max-w-xs leading-relaxed mb-4">
                Mohon maaf apabila ada kesalahan penulisan nama maupun gelar.
              </p>

              <motion.button
                onClick={onOpen}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                animate={{ boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 15px rgba(184,134,11,0.5)", "0px 0px 0px rgba(0,0,0,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary via-primary-fixed to-primary-container text-on-primary font-label-gold text-[12px] uppercase tracking-[0.16em] flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">drafts</span>
                <span className="font-bold">Buka Undangan</span>
              </motion.button>
            </div>
          </motion.div>

        </motion.section>
      )}
    </AnimatePresence>
  )
}