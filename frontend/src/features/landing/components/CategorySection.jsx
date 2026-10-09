import Icon from '../../../components/icons/Icon'
import IllustrationSlot from '../../../components/ui/IllustrationSlot'
import SectionIntro from './SectionIntro'
import { CATEGORIES } from '../data/landing.data'

export default function CategorySection() {
  return (
    <section className="category-zone" id="kategori" aria-labelledby="cat-title">
      <div className="wrap categories">
        <SectionIntro pill="Kenali Jenis-Jenis Sampah" titleId="cat-title" title="Kategori Sampah">
          Sampah terbagi menjadi 3 kategori utama. Yuk kenali ciri-ciri dan contohnya agar tidak salah dalam memilah!
        </SectionIntro>

        {CATEGORIES.map((c) => (
          <article className={`category-card ${c.variant}`} key={c.variant}>
            <div className={`round-icon ${c.tone}`}><Icon name={c.icon} /></div>
            <IllustrationSlot name={c.illustration} label={c.illustrationLabel} />
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <div className="tag-row">
              {c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
