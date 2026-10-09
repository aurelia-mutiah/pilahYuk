import Icon from '../../../components/icons/Icon'
import IllustrationSlot from '../../../components/ui/IllustrationSlot'
import SectionIntro from './SectionIntro'
import { STEPS } from '../data/landing.data'

export default function HowItWorksSection() {
  return (
    <section className="section" id="cara-kerja" aria-labelledby="how-title">
      <div className="wrap two-section">
        <SectionIntro
          pill="Mudah, Cepat, dan Akurat"
          titleId="how-title"
          title={<>Cara Kerja <span className="accent">PilahYuk</span></>}
        >
          Cukup tiga langkah sederhana untuk mengetahui jenis sampah dan cara membuangnya dengan benar.
        </SectionIntro>

        <ol className="steps">
          {STEPS.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="num" aria-hidden="true">{i + 1}</span>
              <div>
                <div className="round-icon"><Icon name={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <IllustrationSlot name={s.illustration} label={s.illustrationLabel} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
