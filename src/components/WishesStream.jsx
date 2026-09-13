import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fetchWishes } from '../lib/rsvpApi'

function initialsOf(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('')
}

function timeAgo(iso) {
  const diffMs = Date.now() - new Date(iso).getTime()
  const mins = Math.floor(diffMs / 60000)
  if (mins < 1) return 'baru saja'
  if (mins < 60) return `${mins} menit lalu`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours} jam lalu`
  return `${Math.floor(hours / 24)} hari lalu`
}

export default function WishesStream({ refreshKey }) {
  const [wishes, setWishes] = useState([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    try {
      const result = await fetchWishes()
      if (result.ok) setWishes(result.data)
    } catch {
      // gagal memuat ucapan bukan error fatal, biarkan daftar kosong/lama
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load, refreshKey])

  return (
    <div className="w-full max-w-sm mt-space-lg">
      <div className="flex items-center justify-between px-space-xs mb-space-2xs">
        <div className="flex items-center gap-1.5 text-white">
          <span className="material-symbols-outlined text-[18px]">forum</span>
          <span className="font-label-gold text-label-gold uppercase tracking-wider">Untaian Doa</span>
        </div>
        <span className="font-label-caption text-label-caption text-text-muted">Terbaru</span>
      </div>

      <div className="flex flex-col gap-space-sm max-h-[400px] overflow-y-auto pr-2 pb-4 custom-scrollbar snap-y">
        {loading && (
          <p className="text-center text-xs text-text-muted py-space-md">Memuat ucapan...</p>
        )}
        {!loading && wishes.length === 0 && (
          <p className="text-center text-xs text-text-muted py-space-md">
            Jadilah yang pertama mengirimkan doa restu.
          </p>
        )}
        <AnimatePresence initial={false}>
          {wishes.map((w) => (
            <motion.div
              key={w.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-surface-elevated rounded-xl p-space-md shadow-md snap-start"
            >
              <div className="flex items-center justify-between mb-space-xs">
                <div className="flex items-center gap-space-xs">
                  <div className="w-8 h-8 rounded-full bg-surface-charcoal text-white flex items-center justify-center font-headline-sm text-[13px] font-bold">
                    {initialsOf(w.name)}
                  </div>
                  <div>
                    <h6 className="font-headline-sm text-[16px] text-white leading-none font-medium">{w.name}</h6>
                    <span className="font-label-caption text-[10px] text-text-muted">{timeAgo(w.timestamp)}</span>
                  </div>
                </div>
                <span
                  className={`px-2 py-0.5 rounded-full font-label-caption text-[9px] uppercase tracking-wider flex items-center gap-1 ${
                    w.attendance === 'hadir'
                      ? 'bg-surface-container text-white'
                      : 'bg-surface-container text-secondary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[10px]">
                    {w.attendance === 'hadir' ? 'check_circle' : 'cancel'}
                  </span>
                  {w.attendance === 'hadir' ? 'Hadir' : 'Tidak Hadir'}
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{w.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
