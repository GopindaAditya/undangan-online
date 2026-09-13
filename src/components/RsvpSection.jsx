import { useState } from 'react'
import Reveal from './Reveal'
import RsvpForm from './RsvpForm'
import WishesStream from './WishesStream'

export default function RsvpSection() {
  const [refreshKey, setRefreshKey] = useState(0)

  return (
    <section className="w-full px-space-md py-space-lg flex flex-col items-center" id="rsvp-form">
      <Reveal className="text-center max-w-sm mb-space-md">
        <div className="flex items-center justify-center gap-space-xs text-[#FFD700] mb-space-2xs">
          <span className="material-symbols-outlined text-[16px]">edit_note</span>
          <span className="font-label-gold text-label-gold uppercase tracking-[0.2em]">Buku Tamu Digital</span>
        </div>
        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-[#FFD700] font-medium tracking-wide">
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
    </section>
  )
}
