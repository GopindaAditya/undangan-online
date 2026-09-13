// Semua teks & data yang tadinya hardcoded di HTML dipusatkan di sini,
// supaya gampang diubah tanpa menyentuh komponen.
import photoCover from '../assets/ANG_2431.webp'
import photoHeader from '../assets/ANG_2599.webp'

export const couple = {
  groomShort: 'Suryagraha',
  brideShort: 'Cinthya Ariska',
  date: 'Senin Umanis, 12 Oktober 2026',
  hijriOrBaliDate: 'Senin, 12 Oktober 2026',
  photo:  photoCover
}

export const groom = {
  fullName: 'Ida Bagus Surya Graha Utama',
  role: 'Mempelai Pria • Purusha',
  order: 'Putra Pertama',
  parents: ['bapak bligus', 'Ibu bligus'],
  location: 'Baler bale agung',
  photo:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAtL_wrJNEMikRpTebr5tCu38A2zAiUlUOTdA6XtZo98V3z5JhXlFrfARwaure1ZEW4JicpUTv7YlhC3-WPNKy4RGgq76Q0WnjAAowuEoh8EC-pGMT1dd2vKs8KiGYEw1AHlOmy4tMZwkyAWKjbzig9I7nSHCHLNg6JoNFVBf6igRJppPMlj6hCGe-2sTPjqu_PieDFNkYAw081x7AbfK_RSrrQC0B5ErFoKr7-Sra0504b5zw4Vdc',
}

export const bride = {
  fullName: 'Ni Putu Cinthya Ariska, S.Ak',
  role: 'Mempelai Wanita • Pradhana',
  order: 'Putri Pertama',
  parents: ['Alm. I Ketut Suarjana', 'Ni Luh Ariani'],
  location: 'Lingkungan Bilukpoh, Kel Tegalcangkring, Kec Mendoyo, Kab Jembrana, Bali',
  photo:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCAcyazEFUSo0Me-l0s4RrTndbv_pmBZuE8LUg9wzl8Af6Tf9yufz4eJtjEmFVOPHF8JPBDMIFk_TvFB18E_t9boHu5qxCOpbdMIvDTVGtVd7PstOhH0HPNyryL3Zrhu6PMp-_f-UZvbjGc6SN4GjOJfXE-G6qpExRKcIt7J45ujNvi1QVbFnF8CLcz_Om_qa7z7FrmgIewSZ_9npaMkeXTNr2mdJ-kHp9nvC6sMfah_BZ1QNAEUNM',
}

export const event = {
  time: '14:00 WITA – Selesai',
  timezone: 'Waktu Indonesia Bagian Tengah (WITA)',
  place: 'Kediaman Mempelai Pria',
  address: 'Baler Bale Agung',
  mapsUrl: 'https://maps.google.com',
  // Ganti dengan tanggal & jam pasti acara (format ISO, dipakai untuk countdown)
  isoDateTime: '2026-11-12T14:00:00+08:00',
  bannerImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBD4OBSuOErXDWbx9OsXRBmuXLg9ChJAR5-nVApO4mcI3mBn63339Ak6Snn6shykxrXxleyS5kaVYFbh-2pVTVyicuhidC2ZA1xzuhZd-mWjE_s5H6oF5WXXOrM4efL11bbwVeqR35SSC-F7cZHinFd5pJ9mGPb6y1XvgiGpL639J0A58Pju2wOiILrE0m-mXUI7YvKbwyJKa-ey898Q-IrjZpLegm-lf2msxgdbLn7abADyBU7yMo',
}

export const heroImage = photoHeader

const payasImages = import.meta.glob('../assets/*.{jpg,JPG,jpeg,png,webp}', { 
  eager: true, 
  import: 'default' 
});

const modernImages = import.meta.glob('../assets/modern/*.{jpg,JPG,jpeg,png,webp}', { 
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
