import React, { useState, useEffect, useRef } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import NeopopCard from '../components/NeopopCard'
import { Star, ChevronLeft, ChevronRight, Apple, Play } from 'lucide-react'

// Simple Animated Counter Component
const Counter = ({ targetValue, duration = 2000, decimals = 1, delay = 100 }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  useEffect(() => {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const current = progress * targetValue
      setCount(current)
      if (progress < 1) {
        countRef.current = requestAnimationFrame(step)
      } else {
        setCount(targetValue)
      }
    }
    
    const timeout = setTimeout(() => {
      countRef.current = requestAnimationFrame(step)
    }, delay)

    return () => {
      cancelAnimationFrame(countRef.current)
      clearTimeout(timeout)
    }
  }, [targetValue, duration, delay])

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
    </span>
  )
}

const Ratings = () => {
  const [activeReview, setActiveReview] = useState(0)

  const reviews = [
    {
      name: 'Aditya K.',
      joined: 'member since 2021',
      rating: 5,
      quote: "the experience of paying bills on CRED is incredibly satisfying. it feels like playing a game rather than doing chores. the coin rewards and scratch cards make it feel super rewarding."
    },
    {
      name: 'Sophia R.',
      joined: 'member since 2023',
      rating: 5,
      quote: "the design aesthetics of the app are next-level. from the dark theme to the glassmorphic NeoPOP interfaces, it is a masterclass in UI design. I love check-in challenges and the credit score tracking is very convenient."
    },
    {
      name: 'Vikram S.',
      joined: 'member since 2020',
      rating: 5,
      quote: "instant credit card settlements have saved me from late fees multiple times. the UPI scan flows are extremely stable, and the RBI-compliant secure checkout gives me absolute confidence."
    }
  ]

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  // Auto-play review slider
  useEffect(() => {
    const timer = setInterval(() => {
      nextReview()
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="relative py-24 bg-black border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 w-[35vw] h-[35vw] radial-glow-blue opacity-25 pointer-events-none -translate-y-1/2"></div>
      <div className="absolute left-0 bottom-10 w-[20vw] h-[20vw] radial-glow opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core section layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Stores & App Ratings */}
          <div className="lg:col-span-5 text-left">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neopop-yellow border border-neopop-yellow/20 bg-neopop-yellow/5 px-3 py-1">
                ratings & reviews
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-6 tracking-tight leading-tight">
                9.9M+ members trust <br />
                <span className="text-gray-400">our integrity.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="mt-4 text-gray-400 font-light text-sm md:text-base leading-relaxed">
                we maintain top-rated credit status across both Google Play Store and the App Store. Join a club built on trust and elite financial standards.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {/* App Store Rating */}
              <NeopopCard borderGlow="none" className="bg-white/5 flex flex-col justify-between" hoverScale={false}>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-white text-black">
                    <Apple size={20} fill="black" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white uppercase tracking-wider">app store</p>
                    <p className="text-xxs text-gray-500">iOS Platform</p>
                  </div>
                </div>
                <div className="mt-8 text-left">
                  <p className="text-4xl font-extrabold text-white">
                    <Counter targetValue={4.8} decimals={1} />
                    <span className="text-lg text-gray-500 font-normal"> / 5</span>
                  </p>
                  <div className="flex gap-1 mt-2 text-neopop-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </NeopopCard>

              {/* Play Store Rating */}
              <NeopopCard borderGlow="none" className="bg-white/5 flex flex-col justify-between" hoverScale={false}>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-neopop-green text-black">
                    <Play size={20} fill="black" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white uppercase tracking-wider">play store</p>
                    <p className="text-xxs text-gray-500">Android Platform</p>
                  </div>
                </div>
                <div className="mt-8 text-left">
                  <p className="text-4xl font-extrabold text-white">
                    <Counter targetValue={4.7} decimals={1} />
                    <span className="text-lg text-gray-500 font-normal"> / 5</span>
                  </p>
                  <div className="flex gap-1 mt-2 text-neopop-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </NeopopCard>
            </ScrollReveal>
          </div>

          {/* Right Column: Dynamic Testimonial Carousel */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.2} className="relative">
              {/* Slider card */}
              <NeopopCard borderGlow="yellow" className="relative p-8 md:p-12 text-left" hoverScale={false}>
                {/* Large Decorative Quote Icon */}
                <div className="absolute top-4 right-8 text-white/5 text-9xl font-serif font-black select-none pointer-events-none">
                  “
                </div>

                <div className="flex gap-1 mb-6 text-neopop-yellow">
                  {[...Array(reviews[activeReview].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Animated transition of quote */}
                <div className="min-h-[120px] transition-all duration-500 ease-out">
                  <p className="text-lg md:text-xl text-white font-light leading-relaxed">
                    {reviews[activeReview].quote}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-extrabold text-white">{reviews[activeReview].name}</h4>
                    <p className="text-xs text-neopop-yellow uppercase tracking-widest mt-1 font-semibold">
                      {reviews[activeReview].joined}
                    </p>
                  </div>
                  
                  {/* Slide controls */}
                  <div className="flex gap-3">
                    <button
                      onClick={prevReview}
                      className="p-2 border-2 border-white/10 hover:border-neopop-yellow text-white hover:text-neopop-yellow transition-colors duration-200 cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={nextReview}
                      className="p-2 border-2 border-white/10 hover:border-neopop-yellow text-white hover:text-neopop-yellow transition-colors duration-200 cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </NeopopCard>

              {/* Indicator dots */}
              <div className="flex gap-2 justify-center mt-6">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveReview(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeReview ? 'w-6 bg-neopop-yellow' : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Ratings
