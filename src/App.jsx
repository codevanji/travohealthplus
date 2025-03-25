import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import HowItWorks from './components/HowItWorks'
import VideoSection from './components/VideoSection'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'
import Clients from './components/Clients'
import Footer from './components/Footer'
import PopularTreatments from './components/PopularTreatments'
import ImagePreloader from './components/common/ImagePreloader'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ImagePreloader />
      <Navbar />
      <main>
        <Hero />
        <PopularTreatments />
        <Introduction />
        <Services />
        <AboutUs />
        <HowItWorks />
        <VideoSection />
        <WhyChooseUs/>
        <Testimonials />
        <Clients />
    
      </main>
      <Footer />
    </div>
  )
}

export default App
