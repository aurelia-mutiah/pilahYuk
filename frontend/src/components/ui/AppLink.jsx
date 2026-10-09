import useToast from '../../hooks/useToast'
import { PROTECTED_ROUTES, ROUTE_LABELS } from '../../constants/routes'

// Link internal. Selama halaman lain belum ada, rute "/..." hanya menampilkan toast.
// Saat react-router-dom dipasang, ganti isi komponen ini dengan <Link to={href}>.
export default function AppLink({ href, onClick, children, ...rest }) {
  const toast = useToast()
  const isRoute = href.startsWith('/')

  const handleClick = (e) => {
    if (isRoute) {
      e.preventDefault()
      const label = ROUTE_LABELS[href] ?? href
      toast(
        PROTECTED_ROUTES.includes(href)
          ? `Halaman "${label}" butuh login — di aplikasi nyata kamu diarahkan ke /login.`
          : `Halaman "${label}" (${href}) belum dibuat.`,
      )
    }
    onClick?.(e)
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
