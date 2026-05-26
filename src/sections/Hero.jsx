import React from 'react'
import NeopopButton from '../components/NeopopButton'
import ScrollReveal from '../components/ScrollReveal'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden grid-lines-bg">
      {/* Background radial glows for premium atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] radial-glow -translate-x-1/2 -translate-y-1/2 opacity-80 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[45vw] h-[45vw] radial-glow-pink -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-[30vw] h-[30vw] radial-glow-blue pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Heading and description */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="inline-block text-neopop-green uppercase tracking-[0.25em] text-xs font-bold mb-4 border border-neopop-green/20 bg-neopop-green/5 px-3 py-1">
              members-only club
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
              rewards for paying your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neopop-green via-neopop-blue to-neopop-pink">
                credit card bills
              </span> on time.
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="mt-6 text-base md:text-lg text-gray-400 max-w-xl font-light leading-relaxed">
              join the club of India's most creditworthy individuals. get assured cashback and earn CRED coins every time you pay your credit card bills.
            </p>
          </ScrollReveal>

          {/* Action buttons */}
          <ScrollReveal direction="up" delay={0.4} className="mt-8 flex flex-wrap gap-4">
            <NeopopButton 
              color="green" 
              shadowColor="white" 
              onClick={() => {
                const element = document.getElementById('features')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              claim rewards
            </NeopopButton>
            <NeopopButton 
              variant="outline" 
              shadowColor="green"
              onClick={() => {
                const element = document.getElementById('trust')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              explore club
            </NeopopButton>
          </ScrollReveal>

          {/* Quick Metrics */}
          <ScrollReveal direction="up" delay={0.5} className="mt-12 grid grid-cols-3 gap-6 md:gap-12 border-t border-white/10 pt-8 w-full max-w-lg">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white font-sans">9.9M+</p>
              <p className="text-xxs md:text-xs uppercase tracking-widest text-gray-500 mt-1">active members</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white font-sans">₹15k+</p>
              <p className="text-xxs md:text-xs uppercase tracking-widest text-gray-500 mt-1">avg. saved/yr</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white font-sans">99.9%</p>
              <p className="text-xxs md:text-xs uppercase tracking-widest text-gray-500 mt-1">secure rate</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Floating 3D Graphic */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
          <ScrollReveal direction="left" delay={0.3} className="relative w-full max-w-sm md:max-w-md">
            {/* Ambient behind-card glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neopop-green/20 to-neopop-pink/20 blur-[60px] rounded-full transform -rotate-12 pointer-events-none scale-75 animate-pulse-slow"></div>

            {/* Floating visual wrapper */}
            <div className="animate-float relative transform rotate-[-6deg] hover:rotate-[0deg] transition-transform duration-500 ease-out cursor-pointer group">
              {/* Outer decorative card shadow frame */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neopop-green to-neopop-blue rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

              {/* The premium generated image */}
              <img
                src="/cred_card.png"
                alt="CRED Metallic Card Visual"
                className="w-full h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
              />

              {/* Float indicators */}
              <div className="absolute -top-6 -right-6 glass-panel py-2 px-3 border border-white/20 rounded shadow-xl text-xxs font-bold uppercase tracking-widest text-neopop-green animate-pulse-slow">
                100% metal card
              </div>
              <div className="absolute -bottom-6 -left-6 glass-panel py-2 px-3 border border-white/20 rounded shadow-xl text-xxs font-bold uppercase tracking-widest text-white/80">
                exclusive club
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Hero
