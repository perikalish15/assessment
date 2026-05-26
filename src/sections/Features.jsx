import React, { useState, useRef, useEffect } from 'react'
import confetti from 'canvas-confetti'
import NeopopButton from '../components/NeopopButton'
import NeopopCard from '../components/NeopopCard'
import ScrollReveal from '../components/ScrollReveal'
import { 
  CreditCard, Trophy, Compass, Landmark, ShieldCheck, 
  Coins, Sparkles, CheckCircle2, RotateCcw, QrCode
} from 'lucide-react'

const Features = () => {
  // Global states for simulator interactivity
  const [coins, setCoins] = useState(50000)
  const [billAmount, setBillAmount] = useState('4500')
  const [isPaying, setIsPaying] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [scratchUnlocked, setScratchUnlocked] = useState(false)
  
  // Credit Score Simulator states
  const [creditScore, setCreditScore] = useState(720)
  const [isRefreshingScore, setIsRefreshingScore] = useState(false)
  const [scoreHistory, setScoreHistory] = useState([715, 718, 720])

  // UPI Simulator states
  const [upiAmount, setUpiAmount] = useState('150')
  const [upiStatus, setUpiStatus] = useState('idle') // idle, scanning, success

  // Cashback Simulator states
  const [cashbackWon, setCashbackWon] = useState(0)
  const [isClaimingCashback, setIsClaimingCashback] = useState(false)

  // Scratch card canvas ref
  const canvasRef = useRef(null)
  const [scratchedPercent, setScratchedPercent] = useState(0)
  const [scratchRewardClaimed, setScratchRewardClaimed] = useState(false)

  // Handle Bill Payment Simulation
  const handleBillPay = (e) => {
    e.preventDefault()
    if (!billAmount || isNaN(billAmount) || parseFloat(billAmount) <= 0) return

    setIsPaying(true)
    setTimeout(() => {
      setIsPaying(false)
      setPaymentSuccess(true)
      setCoins(prev => prev + 15000) // Reward coins
      setScratchUnlocked(true) // Unlock scratch card
      
      // Fire confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      })
    }, 1800)
  }

  const resetBillPay = () => {
    setPaymentSuccess(false)
    setBillAmount('4500')
  }

  // Handle Credit Score refreshing animation
  const refreshCreditScore = () => {
    if (isRefreshingScore) return
    setIsRefreshingScore(true)
    
    let current = 300
    const target = Math.floor(Math.random() * (850 - 720 + 1)) + 720 // Random premium score between 720 and 850
    
    const interval = setInterval(() => {
      current += 15
      if (current >= target) {
        setCreditScore(target)
        setIsRefreshingScore(false)
        setScoreHistory(prev => [...prev, target].slice(-4))
        clearInterval(interval)
      } else {
        setCreditScore(current)
      }
    }, 30)
  }

  // Handle UPI Simulation
  const handleUpiPay = () => {
    if (upiStatus !== 'idle') return
    setUpiStatus('scanning')
    setTimeout(() => {
      setUpiStatus('success')
      setCoins(prev => prev + 2500)
      confetti({
        particleCount: 50,
        spread: 40,
        colors: ['#00E5A3', '#0F52FF']
      })
      setTimeout(() => {
        setUpiStatus('idle')
      }, 3000)
    }, 2000)
  }

  // Handle Cashback claim
  const handleClaimCashback = () => {
    if (coins < 10000 || isClaimingCashback) return
    setCoins(prev => prev - 10000)
    setIsClaimingCashback(true)
    
    setTimeout(() => {
      const reward = Math.floor(Math.random() * 450) + 50
      setCashbackWon(prev => prev + reward)
      setIsClaimingCashback(false)
      
      confetti({
        particleCount: 80,
        spread: 60,
        colors: ['#FFE600', '#FF007F']
      })
    }, 1500)
  }

  // Canvas Scratch Card Implementation
  useEffect(() => {
    if (!scratchUnlocked || scratchRewardClaimed) return
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    const width = canvas.width = 300
    const height = canvas.height = 180

    // Draw grey NeoPOP cover
    ctx.fillStyle = '#1e1e1e'
    ctx.fillRect(0, 0, width, height)
    
    // Draw neon pattern on card cover
    ctx.strokeStyle = 'rgba(0, 229, 163, 0.2)'
    ctx.lineWidth = 2
    for (let i = 0; i < width; i += 20) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i + 40, height)
      ctx.stroke()
    }
    
    // Add text label
    ctx.font = '800 13px Space Grotesk'
    ctx.fillStyle = '#ffffff'
    ctx.textAlign = 'center'
    ctx.fillText('SCRATCH TO WIN', width / 2, height / 2 - 10)
    
    ctx.font = '500 10px Outfit'
    ctx.fillStyle = '#00E5A3'
    ctx.fillText('DRAG MOUSE OR SWIPE HERE', width / 2, height / 2 + 15)

    let isDrawing = false

    const scratch = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      ctx.globalCompositeOperation = 'destination-out'
      ctx.beginPath()
      ctx.arc(x, y, 22, 0, Math.PI * 2)
      ctx.fill()
      
      // Recalculate scratch percentage
      const imgData = ctx.getImageData(0, 0, width, height)
      let cleared = 0
      for (let i = 3; i < imgData.data.length; i += 4) {
        if (imgData.data[i] === 0) cleared++
      }
      const pct = (cleared / (width * height)) * 100
      setScratchedPercent(pct)
      
      if (pct > 45) {
        // Auto-complete scratch
        ctx.clearRect(0, 0, width, height)
        setScratchRewardClaimed(true)
        setCoins(prev => prev + 20000)
        confetti({
          particleCount: 100,
          spread: 60,
          colors: ['#00E5A3', '#FF007F']
        })
      }
    }

    const handleMouseDown = (e) => { isDrawing = true; scratch(e.clientX, e.clientY) }
    const handleMouseMove = (e) => { if (isDrawing) scratch(e.clientX, e.clientY) }
    const handleMouseUp = () => { isDrawing = false }

    const handleTouchStart = (e) => { isDrawing = true; scratch(e.touches[0].clientX, e.touches[0].clientY) }
    const handleTouchMove = (e) => { if (isDrawing) { e.preventDefault(); scratch(e.touches[0].clientX, e.touches[0].clientY) } }

    canvas.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    canvas.addEventListener('touchstart', handleTouchStart)
    canvas.addEventListener('touchmove', handleTouchMove)
    canvas.addEventListener('touchend', handleMouseUp)

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchend', handleMouseUp)
    }
  }, [scratchUnlocked, scratchRewardClaimed])

  // Helper for Credit Score Gauge SVG Calculations
  const radius = 55
  const circumference = 2 * Math.PI * radius
  const maxScore = 850
  const scorePercent = ((creditScore - 300) / (maxScore - 300)) * 100
  // Gauge shows only 3/4 circle (from -225 deg to 45 deg)
  const strokeDashoffset = circumference - (scorePercent / 100) * circumference

  return (
    <section id="features" className="py-24 bg-black relative border-t border-white/5">
      <div className="absolute left-10 top-1/2 w-[25vw] h-[25vw] radial-glow-pink pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-neopop-green border border-neopop-green/20 bg-neopop-green/5 px-3 py-1">
              cred hub
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-6 tracking-tight">
              experience credit control <br />
              <span className="text-gray-400">in real-time.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="mt-4 text-gray-400 font-light text-sm md:text-base">
              test the core utilities of the CRED platform below. make simulated payments, track credits, and win actual simulator rewards.
            </p>
          </ScrollReveal>
        </div>

        {/* The Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CARD 1: Coins Bank Ledger */}
          <ScrollReveal direction="up" delay={0.1}>
            <NeopopCard borderGlow="green" className="h-[380px] flex flex-col justify-between" hoverScale={true}>
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-neopop-green uppercase tracking-widest">ledger v1.0</span>
                  <Coins className="text-neopop-green animate-bounce" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mt-4 text-left">CRED Coins Balance</h3>
                <p className="text-xs text-gray-400 mt-1 text-left">earn coins by paying bills or scanning QR codes.</p>
                
                <div className="mt-8 bg-black/60 p-4 border border-white/5 rounded text-left">
                  <p className="text-xxs text-gray-500 uppercase tracking-widest">available balance</p>
                  <p className="text-4xl font-extrabold text-white mt-1 tracking-tight">
                    {coins.toLocaleString()} <span className="text-xs text-neopop-green font-normal">coins</span>
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <NeopopButton
                  color="green"
                  shadowColor="black"
                  className="w-full text-center"
                  onClick={() => {
                    setCoins(prev => prev + 2500)
                    confetti({ particleCount: 30, spread: 30 })
                  }}
                >
                  claim free coins (+2,500)
                </NeopopButton>
              </div>
            </NeopopCard>
          </ScrollReveal>

          {/* CARD 2: Credit Card Bill Payments */}
          <ScrollReveal direction="up" delay={0.2}>
            <NeopopCard borderGlow="blue" className="h-[380px] flex flex-col justify-between" hoverScale={true}>
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-neopop-blue uppercase tracking-widest">bill control</span>
                  <CreditCard className="text-neopop-blue" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mt-4 text-left">Credit Card Bills</h3>
                <p className="text-xs text-gray-400 mt-1 text-left">pay your bill instantly and earn rewards.</p>

                {paymentSuccess ? (
                  <div className="mt-6 bg-neopop-green/10 border border-neopop-green/20 p-4 rounded text-left flex flex-col items-center justify-center text-center">
                    <CheckCircle2 className="text-neopop-green mb-2" size={32} />
                    <p className="text-sm font-bold text-white">Bill Payment Successful!</p>
                    <p className="text-xs text-gray-400 mt-1">₹{billAmount} settled. Earned +15,000 Coins!</p>
                    <button 
                      onClick={resetBillPay}
                      className="mt-3 text-xs text-neopop-green hover:underline flex items-center gap-1 font-semibold uppercase tracking-wider"
                    >
                      <RotateCcw size={12} /> pay another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBillPay} className="mt-6 flex flex-col gap-3">
                    <div className="bg-black/60 p-3 border border-white/5 rounded text-left">
                      <label className="text-xxs text-gray-500 uppercase tracking-widest">enter bill amount</label>
                      <div className="flex items-center mt-1">
                        <span className="text-gray-400 mr-1 text-lg font-bold">₹</span>
                        <input
                          type="number"
                          value={billAmount}
                          onChange={(e) => setBillAmount(e.target.value)}
                          className="bg-transparent text-white font-extrabold text-xl focus:outline-none w-full"
                          placeholder="0.00"
                          required
                          disabled={isPaying}
                        />
                      </div>
                    </div>
                    <NeopopButton
                      color="blue"
                      shadowColor="black"
                      type="submit"
                      disabled={isPaying}
                      className="w-full text-center mt-2"
                    >
                      {isPaying ? 'processing settlement...' : `pay bill now (₹${billAmount})`}
                    </NeopopButton>
                  </form>
                )}
              </div>

              <div className="text-xxs text-gray-500 text-left border-t border-white/5 pt-3">
                *instant settlement backed by RBI protection guidelines
              </div>
            </NeopopCard>
          </ScrollReveal>

          {/* CARD 3: Credit Score Tracker */}
          <ScrollReveal direction="up" delay={0.3}>
            <NeopopCard borderGlow="pink" className="h-[380px] flex flex-col justify-between" hoverScale={true}>
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-neopop-pink uppercase tracking-widest">CRIF score</span>
                  <Landmark className="text-neopop-pink" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mt-4 text-left">Credit Score Gauge</h3>
                <p className="text-xs text-gray-400 mt-1 text-left">check your real-time score dynamically.</p>

                <div className="mt-6 flex items-center justify-around">
                  {/* Radial Score Gauge SVG */}
                  <div className="relative flex items-center justify-center">
                    <svg className="w-28 h-28 transform -rotate-90">
                      {/* Track Circle */}
                      <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        className="stroke-white/5 fill-none"
                        strokeWidth="8"
                      />
                      {/* Animated Gauge Arc */}
                      <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        className="stroke-neopop-pink fill-none transition-all duration-700 ease-out"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-white">{creditScore}</span>
                      <span className="text-xxs text-neopop-green uppercase tracking-widest font-semibold">
                        {creditScore >= 800 ? 'excellent' : creditScore >= 750 ? 'good' : 'fair'}
                      </span>
                    </div>
                  </div>

                  {/* History Ledger */}
                  <div className="text-left">
                    <p className="text-xxs text-gray-500 uppercase tracking-widest">score history</p>
                    <div className="flex flex-col gap-1 mt-2">
                      {scoreHistory.map((s, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-mono text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-neopop-pink"></span>
                          <span>Score check {idx + 1}: {s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <NeopopButton
                  color="pink"
                  shadowColor="black"
                  className="w-full text-center"
                  onClick={refreshCreditScore}
                  disabled={isRefreshingScore}
                >
                  {isRefreshingScore ? 'querying agencies...' : 'refresh credit score'}
                </NeopopButton>
              </div>
            </NeopopCard>
          </ScrollReveal>

          {/* CARD 4: UPI Scanner Mockup */}
          <ScrollReveal direction="up" delay={0.4}>
            <NeopopCard borderGlow="yellow" className="h-[380px] flex flex-col justify-between" hoverScale={true}>
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-neopop-yellow uppercase tracking-widest">upi secure</span>
                  <QrCode className="text-neopop-yellow" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mt-4 text-left">UPI Scan & Pay</h3>
                <p className="text-xs text-gray-400 mt-1 text-left">simulated instant scan payments.</p>

                {upiStatus === 'scanning' ? (
                  <div className="mt-8 flex flex-col items-center justify-center h-32 bg-black/60 rounded border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-neopop-yellow/10 to-transparent animate-pulse-slow"></div>
                    <QrCode className="text-neopop-yellow animate-pulse" size={48} />
                    <p className="text-xs text-gray-300 mt-3 font-semibold animate-pulse">scanning QR terminal...</p>
                  </div>
                ) : upiStatus === 'success' ? (
                  <div className="mt-8 flex flex-col items-center justify-center h-32 bg-neopop-yellow/5 rounded border border-neopop-yellow/20 text-center">
                    <CheckCircle2 className="text-neopop-yellow mb-2" size={32} />
                    <p className="text-sm font-bold text-white">UPI Payment Sent!</p>
                    <p className="text-xs text-gray-400 mt-1">₹{upiAmount} settled. Earned +2,500 Coins!</p>
                  </div>
                ) : (
                  <div className="mt-6 flex flex-col gap-3">
                    <div className="bg-black/60 p-3 border border-white/5 rounded text-left">
                      <label className="text-xxs text-gray-500 uppercase tracking-widest">quick pay amount</label>
                      <div className="flex items-center mt-1">
                        <span className="text-gray-400 mr-1 text-lg font-bold">₹</span>
                        <input
                          type="number"
                          value={upiAmount}
                          onChange={(e) => setUpiAmount(e.target.value)}
                          className="bg-transparent text-white font-extrabold text-xl focus:outline-none w-full"
                          placeholder="0"
                          disabled={upiStatus !== 'idle'}
                        />
                      </div>
                    </div>
                    <NeopopButton
                      color="yellow"
                      shadowColor="black"
                      className="w-full text-center"
                      onClick={handleUpiPay}
                    >
                      scan QR & pay (₹{upiAmount})
                    </NeopopButton>
                  </div>
                )}
              </div>

              <div className="text-xxs text-gray-500 text-left border-t border-white/5 pt-3">
                *zero routing failure guarantees on UPI network
              </div>
            </NeopopCard>
          </ScrollReveal>

          {/* CARD 5: Scratch Card Rewards */}
          <ScrollReveal id="rewards" direction="up" delay={0.5}>
            <NeopopCard borderGlow="green" className="h-[380px] flex flex-col justify-between overflow-hidden" hoverScale={true}>
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-neopop-green uppercase tracking-widest">rewards club</span>
                  <Trophy className="text-neopop-green" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mt-4 text-left">Scratch Card Reward</h3>
                <p className="text-xs text-gray-400 mt-1 text-left">scratch the screen to claim your coin bonus.</p>

                <div className="mt-6 flex justify-center relative scratch-container bg-black border border-white/10 rounded-xl items-center">
                  
                  {/* Underlying Reward Message */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <Sparkles className="text-neopop-green animate-bounce mb-1" size={28} />
                    <p className="text-xs uppercase tracking-widest text-gray-400">jackpot reward unlocked</p>
                    <p className="text-xl font-black text-white mt-1">20,000 CRED COINS</p>
                    <p className="text-xxs text-neopop-green mt-1 font-semibold uppercase">credited instantly to ledger</p>
                  </div>

                  {/* Scratched Complete message overlay */}
                  {scratchRewardClaimed && (
                    <div className="absolute inset-0 bg-black/90 z-20 flex flex-col items-center justify-center p-4 text-center">
                      <CheckCircle2 className="text-neopop-green mb-1" size={28} />
                      <p className="text-xs font-bold text-white">REWARD CLAIMED</p>
                      <p className="text-xxs text-gray-400 mt-1">+20,000 Coins added to balance</p>
                    </div>
                  )}

                  {/* Silver Canvas Cover overlay */}
                  {scratchUnlocked && !scratchRewardClaimed ? (
                    <canvas
                      ref={canvasRef}
                      className="scratch-canvas w-[300px] h-[180px] rounded-xl"
                    />
                  ) : !scratchUnlocked ? (
                    <div className="absolute inset-0 bg-black/90 z-20 flex flex-col items-center justify-center p-4 text-center">
                      <ShieldCheck className="text-gray-500 mb-2" size={32} />
                      <p className="text-xs font-bold text-white uppercase tracking-wider">Locked Reward</p>
                      <p className="text-xxs text-gray-400 mt-2 max-w-[200px]">
                        Please pay a Credit Card Bill in Card 2 to unlock this premium reward card.
                      </p>
                    </div>
                  ) : null}

                </div>
              </div>

              <div className="text-xxs text-gray-500 text-left border-t border-white/5 pt-3">
                *scratch cards expire 30 days after card settlement
              </div>
            </NeopopCard>
          </ScrollReveal>

          {/* CARD 6: Cashback Claims Wheel */}
          <ScrollReveal direction="up" delay={0.6}>
            <NeopopCard borderGlow="pink" className="h-[380px] flex flex-col justify-between" hoverScale={true}>
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-neopop-pink uppercase tracking-widest">cashback</span>
                  <Compass className="text-neopop-pink" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mt-4 text-left">Cashback Converter</h3>
                <p className="text-xs text-gray-400 mt-1 text-left">burn 10,000 coins to claim instant cashback.</p>

                <div className="mt-8 bg-black/60 p-4 border border-white/5 rounded text-left">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xxs text-gray-500 uppercase tracking-widest">total cashback won</p>
                      <p className="text-3xl font-extrabold text-white mt-1 tracking-tight">
                        ₹{cashbackWon} <span className="text-xs text-neopop-pink font-normal">settled</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xxs text-gray-500 uppercase tracking-widest">cost per burn</p>
                      <p className="text-xs font-mono text-neopop-pink mt-1">10,000 coins</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <NeopopButton
                  color="pink"
                  shadowColor="black"
                  className="w-full text-center"
                  onClick={handleClaimCashback}
                  disabled={coins < 10000 || isClaimingCashback}
                >
                  {isClaimingCashback ? 'settling money...' : 'burn 10,000 coins for cash'}
                </NeopopButton>
              </div>
            </NeopopCard>
          </ScrollReveal>

        </div>

      </div>
    </section>
  )
}

export default Features
