import { useEffect, useRef, useState } from 'react'
import Icon from '../icons/Icon'
import AppLink from '../ui/AppLink'
import Button from '../ui/Button'
import useScrolled from '../../hooks/useScrolled'
import { NAV_ITEMS, ROUTES } from '../../constants/routes'
import './SiteHeader.css'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const navRef = useRef(null)
  const menuBtnRef = useRef(null)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuBtnRef.current?.focus()
      }
    }
    const onClick = (e) => {
      if (!navRef.current?.contains(e.target) && !menuBtnRef.current?.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('click', onClick)
    }
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 721px)')
    const onChange = (e) => { if (e.matches) setOpen(false) }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} id="top">
      <div className="header-inner">
        <a href="#top" className="brand" aria-label="PilahYuk, ke awal halaman">
          <svg className="brand-leaf" viewBox="0 0 32 38" aria-hidden="true">
            <path d="M16 2C6 9 3 18 7 27c2 4 5 6 9 7z" fill="#b3cb61" />
            <path d="M16 2c10 7 13 16 9 25-2 4-5 6-9 7z" fill="#165031" />
            <path d="M16 12v26" stroke="#dcebad" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          PilahYuk
        </a>

        <nav className={`nav${open ? ' open' : ''}`} id="site-nav" aria-label="Navigasi utama" ref={navRef}>
          {NAV_ITEMS.map((item) => (
            <AppLink
              key={item.label}
              href={item.href}
              className={item.active ? 'active' : undefined}
              aria-current={item.active ? 'page' : undefined}
              onClick={close}
            >
              {item.label}
            </AppLink>
          ))}

          <div className="nav-auth">
            <Button variant="light" href={ROUTES.LOGIN} onClick={close}>Masuk</Button>
            <Button href={ROUTES.REGISTER} onClick={close}>Daftar</Button>
          </div>
        </nav>

        <div className="header-right">
          <AppLink className="icon-btn search-toggle" href={ROUTES.EDUKASI} aria-label="Cari panduan dan edukasi">
            <Icon name="search" />
          </AppLink>
          <Button variant="light" size="small" className="auth-desktop" href={ROUTES.LOGIN}>Masuk</Button>
          <Button size="small" className="auth-desktop" href={ROUTES.REGISTER}>Daftar</Button>
          <button
            className="icon-btn mobile-menu"
            type="button"
            ref={menuBtnRef}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
