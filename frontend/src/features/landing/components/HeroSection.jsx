import Icon from '../../../components/icons/Icon'
import Button from '../../../components/ui/Button'
import AppLink from '../../../components/ui/AppLink'
import Pill from '../../../components/ui/Pill'
import ProgressBar from '../../../components/ui/ProgressBar'
import IllustrationSlot from '../../../components/ui/IllustrationSlot'
import CategoryBadge from '../../../components/CategoryBadge/CategoryBadge'
import { ROUTES } from '../../../constants/routes'
import { DISPOSAL_GUIDE } from '../data/landing.data'

export default function HeroSection() {
  return (
    <section className="landing-hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Pill>Untuk Lingkungan yang Lebih Bersih</Pill>
          <h1 id="hero-title">
            Foto Sampahmu,<br /><span className="accent">PilahYuk</span> bantu klasifikasikan otomatis.
          </h1>
          <p>Unggah foto sampah, dapatkan hasil klasifikasi berbasis AI beserta panduan cara memilah dan membuangnya dengan benar. Langkah kecil, dampak besar untuk lingkungan yang lebih bersih.</p>

          <div className="cta-row">
            <Button href={ROUTES.HOME}>
              <Icon name="camera" /> Mulai Deteksi <Icon name="arrow" />
            </Button>
            <Button variant="light" href="#cara-kerja">
              <Icon name="play" /> Pelajari Cara Pilah
            </Button>
          </div>

          <div className="trust">
            <span className="avatars" aria-hidden="true">
              {['A', 'R', 'S', 'D'].map((c) => <span className="avatar" key={c}>{c}</span>)}
            </span>
            <span>Mulai kebiasaan baik untuk bumi yang lebih bersih.</span>
          </div>
        </div>

        <div className="hero-art">
          {/* Kartu foto (miring -5°) */}
          <div className="photo-card">
            <IllustrationSlot name="bottle-hero" label="Ilustrasi: botol plastik yang akan dideteksi" />
            <div className="photo-corner" aria-hidden="true" />
            <AppLink className="camera-bubble" href={ROUTES.HOME} aria-label="Mulai deteksi dari foto">
              <Icon name="camera" />
            </AppLink>
            <div className="photo-caption">Unggah Foto Sampah<br />atau seret ke sini</div>
          </div>

          {/* Kartu hasil contoh (dekoratif, bukan hasil deteksi sungguhan) */}
          <div className="hero-results">
            <div className="floating-result">
              <div className="result-top">
                <IllustrationSlot name="bottle" label="Ilustrasi: botol plastik" />
                <div>
                  <span className="float-label">Hasil Deteksi</span>
                  <strong>Botol Plastik</strong>
                  <CategoryBadge category="inorganic" />
                  <div className="confidence">Tingkat keyakinan <b>96%</b></div>
                  <ProgressBar value={96} label="Tingkat keyakinan" tone="inorganic" />
                </div>
              </div>
            </div>

            <div className="floating-guide">
              <strong><Icon name="recycle" size="sm" /> Panduan Pembuangan</strong>
              <ul>
                {DISPOSAL_GUIDE.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
