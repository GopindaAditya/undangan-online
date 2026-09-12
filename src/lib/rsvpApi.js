import { GAS_ENDPOINT } from '../data/content'

// GAS Web App menerima POST berupa form-urlencoded (paling gampang dihindari
// preflight CORS) dan membalas JSON: { ok: true, data: [...] } atau { ok:false, error }

export async function submitRsvp({ name, attendance, guests, message }) {
  const body = new URLSearchParams({
    action: 'submit',
    name,
    attendance,
    guests: String(guests),
    message,
  })

  const res = await fetch(GAS_ENDPOINT, {
    method: 'POST',
    body,
  })

  if (!res.ok) {
    throw new Error('Gagal mengirim ucapan, coba lagi.')
  }
  return res.json()
}

export async function fetchWishes() {
  const url = new URL(GAS_ENDPOINT)
  url.searchParams.set('action', 'list')

  const res = await fetch(url.toString())
  if (!res.ok) {
    throw new Error('Gagal memuat ucapan.')
  }
  return res.json()
}
