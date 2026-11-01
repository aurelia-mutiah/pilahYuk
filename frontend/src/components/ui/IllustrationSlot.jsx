import './ui.css'

const IMAGES = Object.fromEntries(
  Object.entries(import.meta.glob('../../assets/illustrations/*.png', { eager: true, import: 'default' }))
    .map(([path, url]) => [path.split('/').pop().replace('.png', ''), url]),
)

export default function IllustrationSlot({ name, label, src = IMAGES[name] }) {
  return (
    <div className={`illus-slot${src ? ' has-image' : ''}`} data-illustration={name} role="img" aria-label={label}>
      {src ? <img src={src} alt="" /> : <span>{name}</span>}
    </div>
  )
}
