import Icon from '../icons/Icon'
import './CategoryBadge.css'

const CATEGORIES = {
  organic: { label: 'Organik', icon: 'leaf' },
  inorganic: { label: 'Anorganik', icon: 'recycle' },
  b3: { label: 'B3', icon: 'alert' },
}

export default function CategoryBadge({ category }) {
  const { label, icon } = CATEGORIES[category]
  return (
    <span className={`category-badge ${category}`}>
      <Icon name={icon} size="sm" /> {label}
    </span>
  )
}
