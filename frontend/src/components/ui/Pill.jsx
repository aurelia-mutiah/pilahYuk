import Icon from '../icons/Icon'
import './ui.css'

export default function Pill({ children, leaf = false }) {
  return (
    <span className="pill">
      <Icon name="diamond" size="sm" className={leaf ? 'leaf-dot' : ''} /> {children}
    </span>
  )
}
