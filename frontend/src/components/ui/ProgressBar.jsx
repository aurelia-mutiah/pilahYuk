import './ui.css'

export default function ProgressBar({ value, label, tone = 'organic' }) {
  return (
    <div
      className={`progress ${tone}-progress`}
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <span style={{ width: `${value}%` }} />
    </div>
  )
}
