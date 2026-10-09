import './Icon.css'

const PATHS = {
  camera: (<><path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" /><circle cx="12" cy="13" r="3.5" /></>),
  play: (<><circle cx="12" cy="12" r="9" /><path d="M10 8.5l5 3.5-5 3.5z" /></>),
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  guide: (<><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4h6v3H9z" /><path d="M9 12h6M9 16h4" /></>),
  book: (<><path d="M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2z" /><path d="M12 6v14" /></>),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  search: (<><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></>),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  sparkle: (<><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></>),
  recycle: (<><path d="M21 12a9 9 0 0 0-15.5-6.2L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 15.5 6.2L21 16" /><path d="M21 21v-5h-5" /></>),
  leaf: (<><path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" /><path d="M5 19c3-5 6-8 10-10" /></>),
  alert: (<><path d="M12 3l10 18H2z" /><path d="M12 10v5M12 18v.5" /></>),
  diamond: <path d="M12 3l8 9-8 9-8-9z" fill="currentColor" stroke="none" />,
}

export default function Icon({ name, size, className = '' }) {
  const cls = ['ic', size === 'sm' && 'ic-sm', className].filter(Boolean).join(' ')
  return (
    <svg className={cls} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {PATHS[name]}
    </svg>
  )
}
