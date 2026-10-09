import './ui.css'

// Placeholder ilustrasi. Isi `src` (mis. dari assets/illustrations) saat gambar siap.
export default function IllustrationSlot({ name, label, src }) {
  return (
    <div className="illus-slot" data-illustration={name} role="img" aria-label={label}>
      {src ? <img src={src} alt="" /> : <span>{name}</span>}
    </div>
  )
}
