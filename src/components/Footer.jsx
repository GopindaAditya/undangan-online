import Reveal from './Reveal'

export default function Footer() {
  return (
    <Reveal as="footer" direction="none" className="w-full px-space-md pt-space-md pb-space-2xl flex flex-col items-center text-center">
      {/* <div className="flex items-center justify-center gap-space-sm mb-space-lg">
        <a
          className="px-space-md py-space-xs rounded-full bg-surface-elevated text-secondary font-label-gold text-[11px] uppercase tracking-widest flex items-center gap-1.5 shadow-md active:scale-95 transition-transform"
          href="https://www.instagram.com/undangan_online_bali/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="material-symbols-outlined text-[16px] text-white">photo_camera</span>
          <span>Instagram</span>
        </a>
        <a
          className="px-space-md py-space-xs rounded-full bg-surface-elevated text-secondary font-label-gold text-[11px] uppercase tracking-widest flex items-center gap-1.5 shadow-md active:scale-95 transition-transform"
          href="https://api.whatsapp.com/send?phone=6281995034478"
          target="_blank"
          rel="noreferrer"
        >
          <span className="material-symbols-outlined text-[16px] text-white">chat</span>
          <span>WhatsApp</span>
        </a>
      </div> */}

      <div className="w-full max-w-sm mb-space-md">
        <p className="font-title-mantra text-title-mantra text-white italic leading-relaxed">
          &ldquo;Om I Hyang Widhi Wasa, Awig Kertia Wara Nugraha ring Sang Hyang Semara Ratih&rdquo;
        </p>
        <p className="font-headline-sm text-headline-sm text-secondary tracking-widest uppercase mt-2">
          Om Shanti Shanti Shanti Om
        </p>
      </div>
      <div className="w-16 h-[1px] bg-outline-variant my-space-sm" />
      <p className="font-label-caption text-label-caption text-text-muted uppercase tracking-[0.2em] text-[10px]">
        Pawiwahan Suryagraha &amp; Cinthya Ariska • Jembrana, Bali
      </p>
      <p className="font-label-caption text-[9px] text-text-muted/60 mt-1">
        Undangan Gona © 2026 • All rights reserved
      </p>
    </Reveal>
  )
}
