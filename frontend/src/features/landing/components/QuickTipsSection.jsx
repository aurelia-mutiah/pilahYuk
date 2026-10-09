import IllustrationSlot from '../../../components/ui/IllustrationSlot'
import SectionIntro from './SectionIntro'
import { QUICK_TIPS } from '../data/landing.data'

export default function QuickTipsSection() {
  return (
    <section className="section" aria-labelledby="quick-title">
      <div className="wrap quick-grid">
        <SectionIntro
          pill="Langkah Nyata untuk Lingkungan Lebih Baik"
          titleId="quick-title"
          title="Rekomendasi Pembuangan & Edukasi Cepat"
        >
          Setelah mengetahui jenis sampah, ikuti panduan berikut agar dampaknya lebih maksimal.
        </SectionIntro>

        {QUICK_TIPS.map((t) => (
          <article className="quick-card" key={t.title}>
            <IllustrationSlot name={t.illustration} label={t.illustrationLabel} />
            <div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
