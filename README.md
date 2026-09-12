# Undangan Dewa Krisna & Rusmina Dewi — React + Vite + Framer Motion

Konversi dari undangan HTML/CSS/JS statis ke React + Vite, animasi pakai
Framer Motion, RSVP & buku tamu tersimpan ke Google Sheet lewat Google
Apps Script, deploy ke Cloudflare Pages.

Lihat jawaban chat untuk panduan langkah demi langkah lengkap, atau baca
`gas/Code.gs` untuk backend RSVP.

## Menjalankan secara lokal

```bash
npm install
cp .env.example .env   # isi VITE_GAS_ENDPOINT dengan URL Apps Script kamu
npm run dev
```

## Build & deploy manual ke Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy dist
```

## Struktur folder

```
src/
  components/   -> semua bagian undangan (Cover, Header, RSVP, dst)
  data/         -> content.js — semua teks/foto terpusat di sini
  hooks/        -> useGuestName (baca ?to=Nama dari URL)
  lib/          -> rsvpApi.js — komunikasi ke Google Apps Script
gas/
  Code.gs       -> backend Web App Google Apps Script
```
