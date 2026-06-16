import TopBar from './components/TopBar.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MarqueeBanner from './components/MarqueeBanner.jsx'
import Services from './components/Services.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import BeforeAfter from './components/BeforeAfter.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Process from './components/Process.jsx'
import About from './components/About.jsx'
import BandStrands from './components/BandStrands.jsx'
import AreasWeServe from './components/AreasWeServe.jsx'
import Faq from './components/Faq.jsx'
import Blog from './components/Blog.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Hero />
      <MarqueeBanner />
      <Services />
      <WhyChoose />
      <BeforeAfter />

      {/* Shared band: CtaBanner + Process + About */}
      <div className="relative bg-phsSky">
        {/* Animated strands background — fixed in the middle of the viewport while
            scrolling through the band, and only shown while the band is centered. */}
        <BandStrands
          colors={['#f97316', '#000000', '#3b82f6']}
          count={3}
          speed={0.5}
          amplitude={1}
          waviness={1}
          thickness={0.6}
          glow={2.6}
          taper={3}
          spread={1}
          hueShift={0}
          intensity={0.6}
          saturation={1.95}
          opacity={0.6}
          scale={2.6}
          glass={false}
        />

        <div className="relative z-10">
          <CtaBanner />
          <Process />
          <About />
        </div>
      </div>

      <AreasWeServe />
      <Faq />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  )
}
