import Reveal from './Reveal'
import { event } from '../data/content'

export default function EventSection() {
  return (
    <section className="w-full px-space-md py-space-lg flex flex-col items-center">
      <Reveal className="text-center max-w-sm mb-space-lg">
        <span className="font-label-gold text-label-gold uppercase tracking-[0.2em] text-white">
          Rangkaian Acara
        </span>
        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-white font-medium tracking-wide mt-1">
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
            <div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-surface-charcoal text-white shadow-md">
              <span className="font-label-gold text-[10px] tracking-widest uppercase text-secondary">Senin</span>
              <span className="font-headline-md text-headline-md leading-none font-bold text-white">12</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-white leading-tight">Oktober 2026</span>
              <span className="font-label-caption text-label-caption text-secondary tracking-wider uppercase">
                Dewasa Ayu (Hari Baik)
              </span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[18px]">event</span>
          </div>
        </div>

        <div className="p-space-lg space-y-space-md">
          <div className="flex items-start gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-surface-elevated flex items-center justify-center text-white shrink-0">
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
            <div className="w-8 h-8 rounded-full bg-surface-elevated flex items-center justify-center text-white shrink-0">
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

          {/* REVISI BAGIAN MAPS INTERAKTIF */}
          <div className="relative w-full h-60 rounded-lg overflow-hidden mt-space-sm shadow-md border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3490.0332701010907!2d114.64189307501101!3d-8.353384891683405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjEnMTIuMiJTIDExNMKwMzgnNDAuMSJF!5e1!3m2!1sen!2sid!4v1789279949198!5m2!1sen!2sid" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-90" // Menyesuaikan warna maps agar elegan dengan tema gelap
            ></iframe>
          </div>

          <div className="flex flex-col gap-space-xs pt-space-xs">
            <a
              className="w-full py-space-sm px-space-md rounded-lg bg-surface-elevated text-white font-label-gold text-label-gold uppercase tracking-widest flex items-center justify-center gap-space-xs active:scale-95 transition-transform"
              href={event.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">near_me</span>
              <span>Buka di Aplikasi Maps</span>
            </a>
            <a
              className="w-full py-space-sm px-space-md rounded-lg bg-primary text-on-primary font-label-gold text-label-gold uppercase tracking-widest flex items-center justify-center gap-space-xs active:scale-95 transition-transform shadow-lg shadow-primary/20"
              href="#rsvp-form"
            >
              <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
              <span>Konfirmasi Kehadiran</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}