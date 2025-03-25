import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const MOBILE_MENU_HEIGHT = '100vh'
const HEADER_HEIGHT = '64px' // Adjust this value based on your header height 

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Treatments', href: '#popular-treatments' },
  { name: 'Hospitals', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuHeight, setMenuHeight] = useState(MOBILE_MENU_HEIGHT)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 64
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className="fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300"
      style={{
        backgroundColor: scrolled || window.innerWidth < 1024 ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: scrolled || window.innerWidth < 1024 ? 'blur(5px)' : 'none',
        boxShadow: scrolled || window.innerWidth < 1024 ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
      }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-primary">Travo Health+</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="text-sm font-semibold leading-6 text-blue hover:text-primary">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a 
            href="#" 
            className="
              relative
              rounded-full
              bg-gradient-to-r from-primary to-[#0891b2]
              px-6 py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              ease-in-out
              hover:scale-105
              hover:shadow-[0_0_20px_rgba(8,145,178,0.4)]
              active:scale-95
              before:absolute
              before:inset-0
              before:rounded-full
              before:bg-gradient-to-r
              before:from-[#0891b2]
              before:to-primary
              before:opacity-0
              before:transition-opacity
              before:duration-300
              hover:before:opacity-100
              before:-z-10
            "
          >
            <span className="relative z-10">Get a Free Consultation</span>
          </a>
        </div>
      </nav>
      <div className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileMenuOpen(false)} />
        <div 
          className="fixed left-0 w-full h-screen overflow-y-auto transform transition-all duration-300 ease-in-out bg-cover bg-center bg-white/80 backdrop-blur-md"
          style={{
            backgroundImage: 'url(/images/Home/hero.webp)',
            height: MOBILE_MENU_HEIGHT,
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-primary">Travo Health+</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white hover:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root h-[calc(100vh-64px)] overflow-y-auto">
            <div className="-my-6 divide-y divide-gray-500/10 flex flex-col items-center">
              <div className="space-y-0 py-6 w-full text-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block rounded-lg px-3 py-4 text-lg font-semibold leading-7 text-black hover:bg-white/10 transition-colors duration-200 w-full"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 w-full text-center">
                <a
                  href="#"
                  className="
                    relative
                    mx-auto
                    block
                    w-64
                    rounded-full
                    bg-gradient-to-r
                    from-primary
                    to-[#0891b2]
                    px-6
                    py-3
                    text-lg
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    ease-in-out
                    hover:scale-105
                    hover:shadow-[0_0_20px_rgba(8,145,178,0.4)]
                    active:scale-95
                  "
                >
                  Get a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
