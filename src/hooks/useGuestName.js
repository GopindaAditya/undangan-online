import { useMemo } from 'react'

// Dipakai supaya link undangan bisa dipersonalisasi per tamu, misal:
// https://undangan.pages.dev/?to=Made%20Sudarsana
export function useGuestName(defaultName = 'Tamu Undangan') {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    const raw = params.get('to')
    if (!raw) return defaultName
    return decodeURIComponent(raw.replace(/\+/g, ' '))
  }, [defaultName])
}
