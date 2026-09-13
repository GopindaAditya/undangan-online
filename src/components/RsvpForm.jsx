import { useState } from 'react'
import { motion } from 'framer-motion'
import { submitRsvp } from '../lib/rsvpApi'

const initialForm = { name: '', attendance: 'hadir', guests: '1', message: '' }

export default function RsvpForm({ onSubmitted }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || form.message.trim().length < 2) return

    setStatus('sending')
    setErrorMsg('')
    try {
      const result = await submitRsvp(form)
      if (!result.ok) throw new Error(result.error || 'Gagal mengirim.')
      setStatus('sent')
      setForm(initialForm)
      onSubmitted?.(result)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  return (
    <div className="w-full max-w-sm bg-surface-charcoal rounded-xl p-space-lg shadow-2xl shadow-black/80">
      <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-space-2xs">
          <label className="font-label-gold text-label-gold uppercase text-secondary tracking-wider">
            Nama Lengkap Tamu *
          </label>
          <input
            className="w-full px-space-md py-space-sm rounded-lg bg-surface-elevated text-on-surface placeholder:text-text-muted text-body-md outline-none focus:bg-surface-container transition-all"
            placeholder="Contoh: Made Sudarsana, S.E."
            required
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
          />
          <span className="font-label-caption text-[10px] text-text-muted">*Khusus untuk tamu undangan</span>
        </div>

        <div className="flex flex-col gap-space-2xs">
          <label className="font-label-gold text-label-gold uppercase text-secondary tracking-wider">
            Konfirmasi Kehadiran *
          </label>
          <div className="grid grid-cols-2 gap-space-xs">
            {[
              { value: 'hadir', label: 'Hadir', icon: 'check_circle' },
              { value: 'tidak_hadir', label: 'Tidak Hadir', icon: 'cancel' },
            ].map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center justify-center gap-space-xs py-space-sm px-space-xs rounded-lg cursor-pointer transition-all ${
                  form.attendance === opt.value ? 'bg-primary text-on-primary' : 'bg-surface-elevated text-on-surface'
                }`}
              >
                <input
                  className="hidden"
                  name="attendance"
                  type="radio"
                  value={opt.value}
                  checked={form.attendance === opt.value}
                  onChange={(e) => update('attendance', e.target.value)}
                />
                <span className="material-symbols-outlined text-[18px]">{opt.icon}</span>
                <span className="font-label-gold text-[11px] uppercase tracking-wider font-semibold">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-space-2xs">
          <label className="font-label-gold text-label-gold uppercase text-secondary tracking-wider">
            Jumlah Tamu
          </label>
          <div className="relative">
            <select
              className="w-full px-space-md py-space-sm rounded-lg bg-surface-elevated text-on-surface text-body-md outline-none focus:bg-surface-container transition-all appearance-none"
              value={form.guests}
              onChange={(e) => update('guests', e.target.value)}
            >
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
              <option value="3">3 Orang</option>
              <option value="4">4 Orang (Maksimal)</option>
            </select>
            <span className="material-symbols-outlined text-white text-[18px] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              expand_more
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-space-2xs">
          <label className="font-label-gold text-label-gold uppercase text-secondary tracking-wider">
            Pesan Ucapan &amp; Doa Restu *
          </label>
          <textarea
            className="w-full p-space-md rounded-lg bg-surface-elevated text-on-surface placeholder:text-text-muted text-body-md outline-none focus:bg-surface-container transition-all resize-none"
            placeholder="Tuliskan untaian doa restu untuk kedua mempelai..."
            required
            rows={3}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
          />
          <span className="font-label-caption text-[10px] text-text-muted">*Minimal 2 karakter</span>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          disabled={status === 'sending'}
          className="mt-space-xs w-full py-space-sm px-space-md rounded-lg bg-gradient-to-r from-primary via-primary-fixed to-primary-container text-on-primary font-label-gold text-label-gold uppercase tracking-[0.16em] flex items-center justify-center gap-space-xs shadow-xl shadow-primary/20 disabled:opacity-60"
          type="submit"
        >
          <span className="material-symbols-outlined text-[18px]">send</span>
          <span>{status === 'sending' ? 'Mengirim...' : 'Kirim Ucapan & Doa'}</span>
        </motion.button>

        {status === 'sent' && (
          <p className="text-center text-xs text-white">Matur suksma! Doa restu Anda telah tersimpan.</p>
        )}
        {status === 'error' && (
          <p className="text-center text-xs text-error">{errorMsg || 'Gagal mengirim, coba lagi.'}</p>
        )}
      </form>
    </div>
  )
}
