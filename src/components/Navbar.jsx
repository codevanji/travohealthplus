import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const MOBILE_MENU_HEIGHT = '100vh'
const HEADER_HEIGHT = '64px' // Adjust this value based on your header height 

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuHeight, setMenuHeight] = useState(MOBILE_MENU_HEIGHT)

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
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed w-full z-50 transition-all duration-300" 
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(5px)' : 'none',
        boxShadow: scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
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
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-blue hover:text-primary">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black hover:text-white">
            Consultation
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
            backgroundPosition: 'center',
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
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-4 text-lg font-semibold leading-7 text-black hover:bg-white/10 transition-colors duration-200 w-full"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 w-full text-center">
                <a
                  href="#"
                  className="mx-auto block rounded-lg px-6 py-3 text-lg font-semibold leading-7 text-white bg-black hover:bg-gray-800 text-center transition-colors duration-200 w-48"
                >
                  Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
