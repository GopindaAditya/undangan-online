// Semua teks & data yang tadinya hardcoded di HTML dipusatkan di sini,
// supaya gampang diubah tanpa menyentuh komponen.
import photoCover from '../assets/ANG_2431.webp'
import photoHeader from '../assets/ANG_2599.webp'
import profileBligus from '../assets/profilebligus.jpg'
import profileCintya from '../assets/profilecintya.jpg'

export const couple = {
  groomShort: 'Suryagraha',
  brideShort: 'Cinthya Ariska',
  date: 'Senin Umanis, 12 Oktober 2026',
  hijriOrBaliDate: 'Senin, 12 Oktober 2026',
  photo:  photoCover
}

export const groom = {
  fullName: 'Ida Bagus Putu Suryagraha Utama S.Kes',
  role: 'Mempelai Pria • Purusha',
  order: 'Putra Pertama',
  parents: ['Ida Bagus Ketut Surya Putra, S.E., M.Si.', 'Ni Gusti Made Tirta Dwiadnyani'],
  location: 'Jalan Patih Jelantik, Banjar Taman, Desa Batuagung, Kec Jembrana, Kab Jembrana, Bali',
  photo:profileBligus,    
}

export const bride = {
  fullName: 'Ni Putu Cinthya Ariska, S.Ak',
  role: 'Mempelai Wanita • Pradhana',
  order: 'Putri Pertama',
  parents: ['Alm. I Ketut Suarjana', 'Ni Luh Ariani'],
  location: 'Lingkungan Bilukpoh, Kel Tegalcangkring, Kec Mendoyo, Kab Jembrana, Bali',
  photo:profileCintya,
}

export const event = {
  time: '14:00 WITA – Selesai',
  timezone: 'Waktu Indonesia Bagian Tengah (WITA)',
  place: 'Kediaman Mempelai Pria',
  address: 'Jalan Patih Jelantik, Banjar Taman, Desa Batuagung, Kec Jembrana, Kab Jembrana, Bali',
  mapsUrl: 'https://maps.app.goo.gl/v18bmNYZoGh9WREV7?g_st=iw',
  // Ganti dengan tanggal & jam pasti acara (format ISO, dipakai untuk countdown)
  isoDateTime: '2026-10-12T14:00:00+08:00',
  bannerImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBD4OBSuOErXDWbx9OsXRBmuXLg9ChJAR5-nVApO4mcI3mBn63339Ak6Snn6shykxrXxleyS5kaVYFbh-2pVTVyicuhidC2ZA1xzuhZd-mWjE_s5H6oF5WXXOrM4efL11bbwVeqR35SSC-F7cZHinFd5pJ9mGPb6y1XvgiGpL639J0A58Pju2wOiILrE0m-mXUI7YvKbwyJKa-ey898Q-IrjZpLegm-lf2msxgdbLn7abADyBU7yMo',
}

export const heroImage = photoHeader

const payasImages = import.meta.glob('../assets/*.{webp}', { 
  eager: true, 
  import: 'default' 
});

const modernImages = import.meta.glob('../assets/modern/*.{webp}', { 
  eager: true, 
  import: 'default' 
});

export const galleryData = {  
  'Payas Agung': Object.values(payasImages),
  'Modern Editorial': Object.values(modernImages)
};

// URL Web App dari Google Apps Script (lihat panduan deploy GAS).
// Ganti dengan URL /exec hasil deploy kamu sendiri.
export const GAS_ENDPOINT =
  import.meta.env.VITE_GAS_ENDPOINT || 'https://script.google.com/macros/s/AKfycbw7JKzT5DSYz_NPbLp8fPajraIHXWF2sUkLUnTu5pMiktpk5RJSCLm2iijkL9V7WUzATw/exec'
