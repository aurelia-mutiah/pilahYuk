import SiteHeader from '../components/layout/SiteHeader'
import SiteFooter from '../components/layout/SiteFooter'
import HeroSection from '../features/landing/components/HeroSection'
import FeatureBand from '../features/landing/components/FeatureBand'
import HowItWorksSection from '../features/landing/components/HowItWorksSection'
import CategorySection from '../features/landing/components/CategorySection'
import QuickTipsSection from '../features/landing/components/QuickTipsSection'
import '../features/landing/landing.css'

export default function LandingPage() {
  return (
    <>
      <a className="skip-link" href="#konten-utama">Lewati ke konten utama</a>
      <SiteHeader />
      <main id="konten-utama">
        <HeroSection />
        <FeatureBand />
        <HowItWorksSection />
        <CategorySection />
        <QuickTipsSection />
      </main>
      <SiteFooter />
    </>
  )
}
