import { motion, AnimatePresence } from 'framer-motion'
import { couple, groom, bride } from '../data/content'

export default function Cover({ guestName, isOpen, onOpen }) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.section
          className="fixed inset-0 z-[100] w-full min-h-screen overflow-y-auto px-space-md py-space-xl flex flex-col items-center text-center bg-surface"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 mb-space-md flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center shadow-xl shadow-black/60">
              <motion.svg
                className="w-9 h-9 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                <circle cx="50" cy="50" r="44" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1" />
                <path
                  d="M50 20 L50 80 M20 50 L80 50 M50 20 L68 20 M50 80 L32 80 M20 50 L20 32 M80 50 L80 68"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="50" fill="currentColor" r="4" />
                <circle cx="50" cy="20" fill="currentColor" r="2" />
                <circle cx="50" cy="80" fill="currentColor" r="2" />
                <circle cx="20" cy="50" fill="currentColor" r="2" />
                <circle cx="80" cy="50" fill="currentColor" r="2" />
              </motion.svg>
            </div>
            <div className="mt-space-sm flex items-center gap-space-xs text-primary">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-primary" />
              <span className="font-label-gold text-label-gold uppercase tracking-[0.25em]">Om Swastyastu</span>
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-primary" />
            </div>
          </div>

          <p className="font-headline-sm text-headline-sm text-secondary tracking-widest uppercase mb-space-2xs">
            Pawiwahan Sacred Union
          </p>
          <p className="font-label-caption text-label-caption italic text-on-surface-variant mb-space-lg tracking-wider">
            &ldquo;We found the love in divine harmony&rdquo;
          </p>

          <div className="my-space-md">
            <h2 className="font-display-hero-mobile text-display-hero-mobile text-primary tracking-wide leading-tight">
              {couple.groomShort}
            </h2>
            <div className="flex items-center justify-center my-space-xs gap-space-sm">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
              <span className="font-headline-sm text-headline-sm text-secondary italic font-light">&amp;</span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent via-primary to-transparent" />
            </div>
            <h2 className="font-display-hero-mobile text-display-hero-mobile text-primary tracking-wide leading-tight">
              {couple.brideShort}
            </h2>
          </div>

          <div className="w-full max-w-sm shrink-0 mt-space-md mb-space-lg rounded-xl overflow-hidden bg-surface-charcoal p-space-xs shadow-xl shadow-black/80">
            <div className="relative w-full h-80 rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover brightness-90" src={groom.photo} alt="Sampul undangan" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-charcoal via-transparent to-transparent" />
              <div className="absolute bottom-3 inset-x-3 text-center">
                <span className="inline-block px-space-sm py-1 rounded-full bg-surface-charcoal/90 backdrop-blur-md text-primary font-label-gold text-[10px] tracking-widest uppercase">
                  {couple.date}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm bg-surface-elevated rounded-xl p-space-lg shadow-2xl shadow-black/70 flex flex-col items-center">
            <span className="font-label-caption text-label-caption uppercase tracking-[0.2em] text-on-surface-variant">
              Kepada Yth. Bapak / Ibu / Saudara / i:
            </span>
            <div className="my-space-sm px-space-md py-space-xs rounded-full bg-surface-charcoal text-primary font-headline-sm text-headline-sm font-semibold tracking-wide">
              {guestName}
            </div>
            <p className="font-label-caption text-label-caption text-text-muted max-w-xs text-center leading-relaxed">
              Mohon maaf apabila ada kesalahan penulisan nama maupun gelar pada lembar digital ini.
            </p>

            <motion.button
              onClick={onOpen}
              whileTap={{ scale: 0.95 }}
              className="mt-space-md w-full py-space-sm px-space-md rounded-lg bg-gradient-to-r from-primary via-primary-fixed to-primary-container text-on-primary font-label-gold text-label-gold uppercase tracking-[0.16em] flex items-center justify-center gap-space-xs shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-[18px]">drafts</span>
              <span>Buka Undangan</span>
            </motion.button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
