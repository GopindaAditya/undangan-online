import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import RsvpForm from './RsvpForm'
import WishesStream from './WishesStream'

export default function RsvpSection() {
  const [refreshKey, setRefreshKey] = useState(0)
  const [showEnvelope, setShowEnvelope] = useState(false) // State untuk buka/tutup amplop
  const [copied, setCopied] = useState(false) // State untuk notifikasi "Tersalin"

  // Fungsi untuk copy nomor rekening
  const handleCopy = (norek) => {
    navigator.clipboard.writeText(norek)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Kembali normal setelah 2 detik
  }

  return (
    <section className="w-full px-space-md py-space-lg flex flex-col items-center" id="rsvp-form">
            

      {/* --- SECTION RSVP & BUKU TAMU (Kode Asli Anda) --- */}
      <Reveal className="text-center max-w-sm mb-space-md">
        <div className="flex items-center justify-center gap-space-xs text-white mb-space-2xs">
          <span className="material-symbols-outlined text-[16px]">edit_note</span>
          <span className="font-label-gold text-label-gold uppercase tracking-[0.2em]">Buku Tamu Digital</span>
        </div>
        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-white font-medium tracking-wide">
          Konfirmasi &amp; Doa Restu
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
          Ucapkan doa dan sampaikan konfirmasi kehadiran Anda untuk hari sakral kami.
        </p>
      </Reveal>

      <Reveal className="w-full max-w-sm">
        <RsvpForm onSubmitted={() => setRefreshKey((k) => k + 1)} />
      </Reveal>

      <WishesStream refreshKey={refreshKey} />

      {/* Garis Pemisah (Divider) */}
      <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-space-xl" />

      {/* --- SECTION AMPLOP DIGITAL --- */}
      <Reveal className="text-center max-w-sm mb-space-xl w-full">
        <div className="flex items-center justify-center gap-space-xs text-white mb-space-2xs">
          <span className="material-symbols-outlined text-[16px]">volunteer_activism</span>
          <span className="font-label-gold text-label-gold uppercase tracking-[0.2em]">Tanda Kasih</span>
        </div>
        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-white font-medium tracking-wide">
          Wedding Gift
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs mb-space-md leading-relaxed">
          Kehadiran dan doa restu Anda adalah anugerah terindah bagi kami. Namun, bagi keluarga dan sahabat yang ingin mengirimkan tanda kasih, dapat melalui fitur di bawah ini.
        </p>

        {/* Tombol Buka Amplop */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowEnvelope(!showEnvelope)}
          className="mx-auto px-6 py-2 rounded-full bg-surface-charcoal border border-primary/30 text-white font-label-gold text-[12px] uppercase tracking-widest flex items-center gap-2 shadow-lg"
        >
          <span className="material-symbols-outlined text-[18px]">
            {showEnvelope ? 'close' : 'card_giftcard'}
          </span>
          <span>{showEnvelope ? 'Tutup Amplop' : 'Buka Amplop Digital'}</span>
        </motion.button>

        {/* Detail Rekening yang bisa di-toggle */}
        <AnimatePresence>
          {showEnvelope && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-surface-elevated border border-white/5 rounded-xl p-space-md flex flex-col items-center relative shadow-2xl">
                {/* Logo Bank / E-Wallet (Bisa ganti SVG/Image) */}
                <h4 className="font-bold text-lg text-white mb-1">BCA</h4>
                <p className="text-white font-mono text-xl tracking-widest mb-1">
                  2360 2937 53
                </p>
                <p className="font-label-caption text-[11px] text-text-muted uppercase tracking-wider mb-4">
                  A.n. Ida Bagus Putu Suryagraha Utama
                </p>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleCopy('1234567890')}
                  className={`px-4 py-1.5 rounded-md text-[11px] font-bold tracking-wider uppercase flex items-center gap-2 transition-colors ${
                    copied 
                      ? 'bg-green-600/20 text-green-400 border border-green-500/30' 
                      : 'bg-primary text-on-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span>{copied ? 'Berhasil Disalin' : 'Salin Nomor Rekening'}</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>      
    </section>
  )
}