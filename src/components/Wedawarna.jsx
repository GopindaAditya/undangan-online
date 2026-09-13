import Reveal from './Reveal'

export default function Wedawarna() {
  return (
    <section className="w-full px-space-md py-space-lg flex flex-col items-center" id="wedawarna">
      <Reveal className="w-full max-w-sm bg-surface-container rounded-xl p-space-lg shadow-xl shadow-black/50 text-center relative overflow-hidden">
        <div className="absolute -top-4 -right-4 opacity-5 pointer-events-none text-white">
          <span className="font-headline-lg text-[110px] leading-none">ॐ</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-charcoal mx-auto flex items-center justify-center mb-space-sm text-white">
          <span className="material-symbols-outlined text-[20px]">format_quote</span>
        </div>
        <blockquote className="font-title-mantra text-title-mantra text-on-surface italic leading-relaxed mb-space-md">
          &ldquo;Ya Tuhanku Yang Maha Pengasih, anugrahkanlah kepada pasangan ini senantiasa kebahagiaan, kesehatan,
          tetap bersatu dan tidak pernah terpisahkan, panjang umur dan tinggal di rumah yang penuh kegembiraan
          bersama seluruh keturunannya.&rdquo;
        </blockquote>
        <div className="inline-flex items-center gap-space-2xs px-space-md py-1 rounded-full bg-surface-elevated text-secondary font-label-gold text-[10px] tracking-widest uppercase">
          <span className="material-symbols-outlined text-[14px] text-white">auto_awesome</span>
          <span>Rg Veda X.85.42</span>
        </div>
      </Reveal>
    </section>
  )
}
