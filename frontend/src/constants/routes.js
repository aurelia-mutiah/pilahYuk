export const ROUTES = {
  LANDING: '/',
  HOME: '/home',
  EDUKASI: '/edukasi',
  PANDUAN: '/panduan',
  TENTANG: '/tentang',
  LOGIN: '/login',
  REGISTER: '/register',
}

// Rute yang butuh login
export const PROTECTED_ROUTES = [ROUTES.HOME]

export const ROUTE_LABELS = {
  [ROUTES.HOME]: 'Deteksi',
  [ROUTES.EDUKASI]: 'Edukasi',
  [ROUTES.PANDUAN]: 'Panduan',
  [ROUTES.TENTANG]: 'Tentang',
  [ROUTES.LOGIN]: 'Masuk',
  [ROUTES.REGISTER]: 'Daftar',
}

export const NAV_ITEMS = [
  { href: '#top', label: 'Beranda', active: true },
  { href: ROUTES.HOME, label: ROUTE_LABELS[ROUTES.HOME] },
  { href: ROUTES.EDUKASI, label: ROUTE_LABELS[ROUTES.EDUKASI] },
  { href: ROUTES.PANDUAN, label: ROUTE_LABELS[ROUTES.PANDUAN] },
  { href: ROUTES.TENTANG, label: ROUTE_LABELS[ROUTES.TENTANG] },
]
