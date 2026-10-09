import { ROUTES } from '../../../constants/routes'

export const FEATURES = [
  { icon: 'bolt', tone: '', title: 'Deteksi instan dari foto', desc: 'Teknologi AI mengenali jenis sampah dalam hitungan detik.', href: ROUTES.HOME },
  { icon: 'guide', tone: 'orange', title: 'Panduan buang yang benar', desc: 'Dapatkan instruksi jelas dan mudah diikuti sesuai jenis sampah.', href: ROUTES.PANDUAN },
  { icon: 'book', tone: 'dark', title: 'Edukasi 3 kategori sampah', desc: 'Kenali perbedaan organik, anorganik dan B3 dengan contoh nyata.', href: ROUTES.EDUKASI },
]

export const STEPS = [
  { icon: 'camera', title: 'Ambil Foto', desc: 'Foto sampah yang ingin kamu ketahui jenisnya.', illustration: 'phone', illustrationLabel: 'Ilustrasi: ponsel memotret sampah' },
  { icon: 'sparkle', title: 'AI Mengklasifikasi', desc: 'PilahYuk menganalisis foto dengan teknologi AI.', illustration: 'bottle', illustrationLabel: 'Ilustrasi: botol plastik dianalisis' },
  { icon: 'recycle', title: 'Buang dengan Benar', desc: 'Dapatkan panduan cara membuang sesuai kategori.', illustration: 'bin', illustrationLabel: 'Ilustrasi: tempat sampah' },
]

export const CATEGORIES = [
  { variant: 'organic', icon: 'leaf', tone: 'dark', title: 'Organik', desc: 'Sampah dari bahan alami yang dapat terurai secara alami.', tags: ['Sisa makanan', 'Daun'], illustration: 'organic', illustrationLabel: 'Ilustrasi: sisa buah dan makanan' },
  { variant: 'inorganic', icon: 'recycle', tone: 'yellow', title: 'Anorganik', desc: 'Sampah yang sulit terurai dan dapat didaur ulang.', tags: ['Botol plastik', 'Kaleng'], illustration: 'recycle', illustrationLabel: 'Ilustrasi: botol, kaleng, dan kertas' },
  { variant: 'hazard', icon: 'alert', tone: 'orange', title: 'B3 (Bahan Berbahaya dan Beracun)', desc: 'Sampah berbahaya yang dapat mencemari lingkungan dan membahayakan kesehatan.', tags: ['Baterai', 'Lampu'], illustration: 'hazard', illustrationLabel: 'Ilustrasi: baterai dan lampu' },
]

export const QUICK_TIPS = [
  { title: 'Bersihkan Sampah Daur Ulang', desc: 'Cuci hingga bersih agar kualitas daur ulang tetap baik.', illustration: 'clean', illustrationLabel: 'Ilustrasi: membersihkan botol' },
  { title: 'Manfaatkan Sampah Organik', desc: 'Sampah organik dapat dijadikan kompos.', illustration: 'compost', illustrationLabel: 'Ilustrasi: kompos' },
  { title: 'Pisahkan Sampah B3', desc: 'Serahkan limbah berbahaya ke fasilitas pengelolaan resmi.', illustration: 'hazard', illustrationLabel: 'Ilustrasi: baterai' },
]

export const DISPOSAL_GUIDE = [
  'Bilas hingga bersih',
  'Kempiskan jika memungkinkan',
  'Masukkan ke tempat sampah anorganik',
]
