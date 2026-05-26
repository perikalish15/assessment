import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'credit card bill pay', href: '#features' },
        { name: 'upi settlements', href: '#features' },
        { name: 'rewards store', href: '#rewards' },
        { name: 'credit score check', href: '#features' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'about us', href: '#' },
        { name: 'careers', href: '#' },
        { name: 'press release', href: '#' },
        { name: 'brand store', href: '#' }
      ]
    },
    {
      title: 'Security & Policy',
      links: [
        { name: 'privacy policy', href: '#' },
        { name: 'terms & conditions', href: '#' },
        { name: 'security protocol', href: '#security' },
        { name: 'rbi compliance', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'credit card guide', href: '#' },
        { name: 'merchant partner', href: '#' },
        { name: 'customer support', href: '#' },
        { name: 'finance helper', href: '#' }
      ]
    }
  ]

  const socials = [
    { 
      name: 'Twitter', 
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: 'https://twitter.com', 
      color: 'hover:text-neopop-blue hover:border-neopop-blue/50 hover:shadow-[0_0_10px_rgba(15,82,255,0.2)]' 
    },
    { 
      name: 'LinkedIn', 
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ), 
      href: 'https://linkedin.com', 
      color: 'hover:text-neopop-blue hover:border-neopop-blue/50 hover:shadow-[0_0_10px_rgba(15,82,255,0.2)]' 
    },
    { 
      name: 'Github', 
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ), 
      href: 'https://github.com', 
      color: 'hover:text-white hover:border-white/50 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]' 
    },
    { 
      name: 'Instagram', 
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ), 
      href: 'https://instagram.com', 
      color: 'hover:text-neopop-pink hover:border-neopop-pink/50 hover:shadow-[0_0_10px_rgba(255,0,127,0.2)]' 
    }
  ]

  return (
    <footer className="bg-black text-gray-500 py-16 px-6 md:px-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8 pb-12 border-b border-white/5">
          
          {/* Logo & Slogan Column */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start text-left mb-6 lg:mb-0">
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-3xl font-black tracking-[0.2em] text-white">
                CRED
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-neopop-green"></span>
            </a>
            <p className="mt-4 text-xs font-light text-gray-500 leading-relaxed">
              rewards for paying your credit card bills on time. join the club of India's most creditworthy.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="text-left">
              <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs font-light text-gray-400 hover:text-white transition-all duration-200 hover:underline hover:underline-offset-4"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <div className="text-left text-xxs font-light leading-relaxed max-w-xl">
            <p>© {new Date().getFullYear()} CRED Clone. Developed for demonstration purposes.</p>
            <p className="mt-1 text-gray-600">
              *CRED is a registered trademark of Dreamplug Technologies Pvt. Ltd. This website clone serves as a frontend portfolio demonstration replicating visual NeoPOP design layouts.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socials.map((social) => {
              const IconComp = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2.5 rounded-full border border-white/10 text-gray-400
                    transition-all duration-300 ease-out
                    ${social.color}
                  `}
                  aria-label={social.name}
                >
                  <IconComp size={16} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-12 text-center text-[10px] text-gray-600 flex items-center justify-center gap-1">
          <span>crafted with</span>
          <Heart size={10} className="text-neopop-pink fill-neopop-pink animate-pulse" />
          <span>using React, Tailwind CSS, & Framer Motion</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
