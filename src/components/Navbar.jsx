import React, { useState, useEffect } from 'react'
import NeopopButton from './NeopopButton'
import { Menu, X, Shield, CreditCard, Sparkles, Trophy } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Listen to scroll to adjust background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'credit control', href: '#features', icon: CreditCard },
    { name: 'rewards club', href: '#rewards', icon: Trophy },
    { name: 'security shield', href: '#security', icon: Shield },
    { name: 'testimonials', href: '#testimonials', icon: Sparkles }
  ]

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent border-b border-transparent py-6'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl md:text-3xl font-extrabold tracking-[0.2em] text-white select-none">
            CRED
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-neopop-green animate-pulse-slow"></span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <NeopopButton
            color="white"
            shadowColor="green"
            className="py-2 px-4 text-xs font-bold"
            onClick={() => {
              const element = document.getElementById('features')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            pay card bill
          </NeopopButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-neopop-green p-1 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-black/95 z-40 md:hidden flex flex-col p-8 border-t border-white/5">
          <div className="flex flex-col gap-8 mt-8">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  <Icon className="text-neopop-green" size={20} />
                  <span className="uppercase tracking-widest text-sm">{link.name}</span>
                </a>
              )
            })}
          </div>

          <div className="mt-auto mb-12">
            <NeopopButton
              color="green"
              shadowColor="white"
              className="w-full text-center"
              onClick={() => {
                setIsOpen(false)
                const element = document.getElementById('features')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              pay now
            </NeopopButton>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
