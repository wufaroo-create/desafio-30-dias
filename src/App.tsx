import { useScrollReveal } from './hooks/useScrollReveal'
import { ArrowRight } from './data/icons'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Included from './components/Included'
import WhyItWorks from './components/WhyItWorks'
import BeforeAfter from './components/BeforeAfter'
import WhoFor from './components/WhoFor'
import Bonuses from './components/Bonuses'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Guarantee from './components/Guarantee'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-100 bg-white/95 px-4 py-3 shadow-lift backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="leading-tight">
          <p className="text-xs text-neutral-400 line-through">R$297,00</p>
          <p className="font-display text-lg font-extrabold text-neutral-900">
            R$229,90{' '}
            <span className="text-xs font-medium text-neutral-400">vitalício</span>
          </p>
        </div>
        <a href="#preco" className="btn-primary !px-5 !py-3 !text-sm">
          Quero Começar
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Included />
        <WhyItWorks />
        <BeforeAfter />
        <WhoFor />
        <Bonuses />
        <Testimonials />
        <FAQ />
        <Guarantee />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      {/* Spacer so the sticky mobile bar doesn't cover the footer */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  )
}
