# Undangan Online

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
npx wrangler pages deploy dist --project-name=undangan-dewa-rusmina
```

> **Penting:** jangan commit `wrangler.toml` ke repo kalau kamu deploy lewat
> Cloudflare Dashboard + Git integration. Cloudflare akan mendeteksi file
> itu dan mencoba menjalankan `wrangler deploy` (perintah Workers) alih-alih
> build otomatis Pages, yang akan gagal dengan error "It looks like you've
> run a Workers-specific command in a Pages project." Pakai wrangler.toml
> hanya kalau kamu deploy manual lewat CLI di komputer sendiri.

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
