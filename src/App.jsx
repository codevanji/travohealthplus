import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <Testimonials />
        <Clients />
    
      </main>
      <Footer />
    </div>
  )
}

export default App
