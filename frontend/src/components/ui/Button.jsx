import AppLink from './AppLink'
import './ui.css'

export default function Button({ variant = 'primary', size, className = '', ...props }) {
  const cls = ['btn', variant === 'light' && 'light', size === 'small' && 'small', className]
    .filter(Boolean)
    .join(' ')
  return <AppLink className={cls} {...props} />
}
