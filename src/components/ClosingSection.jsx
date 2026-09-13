import Reveal from './Reveal'
import { couple } from '../data/content'

export default function ClosingSection() {
  return (
    <section className="w-full px-space-md py-space-lg flex flex-col items-center text-center">
      <Reveal className="w-full max-w-sm bg-surface-elevated rounded-xl p-space-lg shadow-xl shadow-black/60 relative">
        <div className="w-12 h-12 rounded-full bg-surface-charcoal mx-auto flex items-center justify-center text-white mb-space-sm shadow-md">
          <span className="material-symbols-outlined text-[24px]">favorite</span>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface leading-relaxed italic">
          &ldquo;Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir
          untuk memberikan doa restu kepada kami. Atas kehadiran dan doa restunya kami ucapkan terima kasih yang
          setulus-tulusnya.&rdquo;
        </p>
        <div className="w-12 h-[1px] bg-outline-variant mx-auto my-space-md" />
        <p className="font-label-caption text-label-caption text-secondary uppercase tracking-[0.2em] mb-1">
          Kami yang berbahagia,
        </p>
        <h4 className="font-headline-sm text-headline-sm text-white font-semibold">
          {couple.groomShort} &amp; {couple.brideShort}
        </h4>
        <p className="font-label-caption text-[11px] text-text-muted mt-1">
          Beserta Keluarga Besar Samplangan &amp; Mengwi
        </p>
      </Reveal>
    </section>
  )
}
