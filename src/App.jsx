import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import Introduction from './components/Introduction'
import Services from './components/Services'
import AboutUs from './components/AboutUs'

import VideoSection from './components/VideoSection'
import Testimonials from './components/Testimonials'
import FAQs from './components/FAQs'
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
        <WhyChooseUs />
        <HowItWorks />
        <PopularTreatments />
        <Introduction />
        <Services />
        <AboutUs />
      
        <VideoSection />
        <Testimonials />
        <FAQs />
        <Clients />
    
      </main>
      <Footer />
    </div>
  )
}

export default App
