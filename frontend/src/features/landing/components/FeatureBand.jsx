import Icon from '../../../components/icons/Icon'
import AppLink from '../../../components/ui/AppLink'
import { FEATURES } from '../data/landing.data'

export default function FeatureBand() {
  return (
    <section className="feature-band" aria-label="Fitur utama">
      <div className="wrap feature-grid">
        {FEATURES.map((f) => (
          <article className="feature-card" key={f.title}>
            <div className={`round-icon ${f.tone}`}><Icon name={f.icon} /></div>
            <div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
            <AppLink className="icon-btn arrow-mini" href={f.href} aria-label={`Buka ${f.title}`}>
              <Icon name="arrow" />
            </AppLink>
          </article>
        ))}
      </div>
    </section>
  )
}
