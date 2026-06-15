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
      <div className="bg-phsSky">
        <CtaBanner />
        <Process />
        <About />
      </div>

      <AreasWeServe />
      <Faq />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  )
}
