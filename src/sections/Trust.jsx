import React from 'react'
import ScrollReveal from '../components/ScrollReveal'
import NeopopCard from '../components/NeopopCard'
import { ShieldAlert, Sparkles, Fingerprint, EyeOff } from 'lucide-react'

const Trust = () => {
  const pillars = [
    {
      icon: Fingerprint,
      title: 'Members-Only Club',
      desc: 'CRED is a community of India’s most creditworthy individuals. Admission requires a credit score check, maintaining high standards of integrity.',
      color: 'green'
    },
    {
      icon: EyeOff,
      title: 'Zero Hidden Fees',
      desc: 'We tell you exactly what you pay for. No hidden charges, no surprising penalties, just absolute financial clarity.',
      color: 'blue'
    },
    {
      icon: ShieldAlert,
      title: 'Ultimate Trust',
      desc: 'Your data is secured with industrial-grade encryption. We never rent or sell your details, preserving your absolute privacy.',
      color: 'pink'
    },
    {
      icon: Sparkles,
      title: 'Curated Experiences',
      desc: 'Unlock exclusive access to premium lifestyle rewards, luxury brand tie-ups, and special finance features curated only for our club members.',
      color: 'yellow'
    }
  ]

  return (
    <section id="trust" className="relative py-24 bg-black border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-[30vw] h-[30vw] radial-glow opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Bold typography & introduction */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neopop-pink border border-neopop-pink/20 bg-neopop-pink/5 px-3 py-1">
                our philosophy
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-6 leading-tight">
                exclusivity is not a privilege, <br />
                <span className="text-gray-400">it is a choice.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="mt-6 text-gray-400 font-light leading-relaxed text-sm md:text-base">
                CRED rewards those who choose to act responsibly. By paying credit card bills on time, you prove your commitment to financial safety, earning you exclusive entry into a premium members-only club.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="mt-8 p-6 glass-panel border-l-4 border-l-neopop-green rounded-r-xl">
                <p className="italic text-gray-300 text-sm">
                  "responsibility shouldn't go unnoticed. We believe that good financial habits deserve a premium lifestyle."
                </p>
                <p className="text-xs text-neopop-green font-semibold uppercase tracking-wider mt-3">
                  — The CRED Promise
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Block: Core Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const IconComp = pillar.icon
              return (
                <ScrollReveal 
                  key={pillar.title} 
                  direction={index % 2 === 0 ? 'up' : 'down'} 
                  delay={index * 0.1}
                >
                  <NeopopCard 
                    borderGlow={pillar.color} 
                    className="h-full flex flex-col items-start text-left"
                  >
                    <div className={`p-3 rounded mb-6 border ${
                      pillar.color === 'green' ? 'bg-neopop-green/10 border-neopop-green/20 text-neopop-green' :
                      pillar.color === 'blue' ? 'bg-neopop-blue/10 border-neopop-blue/20 text-neopop-blue' :
                      pillar.color === 'pink' ? 'bg-neopop-pink/10 border-neopop-pink/20 text-neopop-pink' :
                      'bg-neopop-yellow/10 border-neopop-yellow/20 text-neopop-yellow'
                    }`}>
                      <IconComp size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">{pillar.desc}</p>
                  </NeopopCard>
                </ScrollReveal>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Trust
