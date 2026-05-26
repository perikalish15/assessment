import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Trust from './sections/Trust'
import Features from './sections/Features'
import Ratings from './sections/Ratings'
import Security from './sections/Security'
import Footer from './sections/Footer'
import './App.css'

function App() {
  return (
    <div className="bg-black text-white min-h-screen relative font-sans selection:bg-neopop-green selection:text-black">
      {/* Dynamic ambient background glow that shifts slightly */}
      <div className="absolute top-0 left-0 w-full h-full bg-black z-0 pointer-events-none"></div>
      
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Philosophy & Trust Section */}
      <Trust />

      {/* Core Interactive Simulators Section */}
      <Features />

      {/* Testimonials and Store Ratings Section */}
      <Ratings />

      {/* RBI compliance, compliance scanner Section */}
      <Security />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default App
