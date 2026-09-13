import Reveal from './Reveal'
import { event } from '../data/content'

export default function EventSection() {
  return (
    <section className="w-full px-space-md py-space-lg flex flex-col items-center">
      <Reveal className="text-center max-w-sm mb-space-lg">
        <span className="font-label-gold text-label-gold uppercase tracking-[0.2em] text-[#FFD700]">
          Rangkaian Acara
        </span>
        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-[#FFD700] font-medium tracking-wide mt-1">
          Pawiwahan &amp; Resepsi
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa / Tuhan Yang Maha Esa, kami bermaksud mengundang
          Bapak/Ibu/Saudara/i pada Upacara Manusa Yadnya Pawiwahan putra dan putri kami:
        </p>
      </Reveal>

      <Reveal className="w-full max-w-sm bg-surface-charcoal rounded-xl overflow-hidden shadow-2xl shadow-black/80">
        <div className="bg-surface-elevated p-space-md flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-surface-charcoal text-[#FFD700] shadow-md">
              <span className="font-label-gold text-[10px] tracking-widest uppercase text-secondary">Senin</span>
              <span className="font-headline-md text-headline-md leading-none font-bold text-[#FFD700]">12</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-[#FFD700] leading-tight">Oktober 2026</span>
              <span className="font-label-caption text-label-caption text-secondary tracking-wider uppercase">
                Dewasa Ayu (Hari Baik)
              </span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-[#FFD700]">
            <span className="material-symbols-outlined text-[18px]">event</span>
          </div>
        </div>

        <div className="p-space-lg space-y-space-md">
          <div className="flex items-start gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-surface-elevated flex items-center justify-center text-[#FFD700] shrink-0">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
            </div>
            <div>
              <h5 className="font-label-gold text-label-gold uppercase tracking-wider text-secondary">
                Waktu Pelaksanaan
              </h5>
              <p className="font-body-lg text-body-lg text-on-surface font-medium mt-1">{event.time}</p>
              <span className="text-xs text-text-muted">{event.timezone}</span>
            </div>
          </div>

          <div className="flex items-start gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-surface-elevated flex items-center justify-center text-[#FFD700] shrink-0">
              <span className="material-symbols-outlined text-[18px]">temple_hindu</span>
            </div>
            <div>
              <h5 className="font-label-gold text-label-gold uppercase tracking-wider text-secondary">
                Tempat Acara
              </h5>
              <p className="font-body-lg text-body-lg text-on-surface font-medium mt-1">{event.place}</p>
              <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{event.address}</p>
            </div>
          </div>

          <div className="relative w-full h-44 rounded-lg overflow-hidden mt-space-sm shadow-md">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${event.bannerImage}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-charcoal/90 via-transparent to-transparent flex items-end p-space-sm">
              <span className="inline-flex items-center gap-1 text-[11px] text-[#FFD700] bg-surface-charcoal/80 px-space-xs py-0.5 rounded-full backdrop-blur-md">
                <span className="material-symbols-outlined text-[14px]">pin_drop</span>
                Baler bale agung
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-space-xs pt-space-xs">
            <a
              className="w-full py-space-sm px-space-md rounded-lg bg-surface-elevated text-[#FFD700] font-label-gold text-label-gold uppercase tracking-widest flex items-center justify-center gap-space-xs active:scale-95 transition-transform"
              href={event.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">near_me</span>
              <span>Petunjuk Arah (Google Maps)</span>
            </a>
            <a
              className="w-full py-space-sm px-space-md rounded-lg bg-primary text-on-primary font-label-gold text-label-gold uppercase tracking-widest flex items-center justify-center gap-space-xs active:scale-95 transition-transform shadow-lg shadow-primary/20"
              href="#rsvp-form"
            >
              <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
              <span>Konfirmasi Kehadiran</span>
            </a>
          </div>

          {/* <div className="p-space-sm rounded-lg bg-surface-elevated flex items-center gap-space-sm mt-space-sm">
            <div className="w-10 h-10 rounded bg-surface-charcoal flex items-center justify-center text-[#FFD700] shrink-0">
              <span className="material-symbols-outlined text-[22px]">qr_code_scanner</span>
            </div>
            <p className="font-label-caption text-label-caption text-text-muted leading-relaxed">
              Scan barcode saat memasuki tempat acara untuk registrasi buku tamu digital.
            </p>
          </div> */}
        </div>
      </Reveal>
    </section>
  )
}
