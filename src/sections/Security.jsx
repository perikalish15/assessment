import React, { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import NeopopCard from '../components/NeopopCard'
import NeopopButton from '../components/NeopopButton'
import { ShieldCheck, Eye, KeyRound, Radio, ScanLine, CircleCheckBig, ShieldAlert } from 'lucide-react'

const Security = () => {
  const [scanStatus, setScanStatus] = useState('idle') // idle, scanning, completed
  const [activeStep, setActiveStep] = useState(0)

  const scanSteps = [
    'verifying SSL pipeline encryption...',
    'inspecting API authorization tokens...',
    'auditing PCI-DSS compliance certificates...',
    'aligning RBI settlement regulations...',
    'testing biometric handshake pathways...'
  ]

  const runSecurityScan = () => {
    if (scanStatus === 'scanning') return
    setScanStatus('scanning')
    setActiveStep(0)

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep += 1
      if (currentStep >= scanSteps.length) {
        clearInterval(interval)
        setScanStatus('completed')
      } else {
        setActiveStep(currentStep)
      }
    }, 1000)
  }

  const resetScan = () => {
    setScanStatus('idle')
    setActiveStep(0)
  }

  return (
    <section id="security" className="relative py-24 bg-black border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] radial-glow opacity-30 pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Security Details */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neopop-green border border-neopop-green/20 bg-neopop-green/5 px-3 py-1">
                security & encryption
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-6 tracking-tight leading-tight">
                security first. <br />
                <span className="text-gray-400">app second.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="mt-6 text-gray-400 font-light leading-relaxed text-sm md:text-base">
                CRED guards your account with bank-grade security. We believe that securing your credit history, credentials, and transactions is our single highest priority.
              </p>
            </ScrollReveal>

            {/* List of security checks */}
            <div className="mt-8 flex flex-col gap-6">
              <ScrollReveal direction="up" delay={0.4} className="flex gap-4 items-start">
                <div className="p-2.5 rounded bg-white/5 border border-white/10 text-neopop-green mt-1">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Bank-Grade Encryption</h4>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 font-light">
                    All payment credentials, account inputs, and API tokens are secured with AES-256 bank-level encryption algorithms.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.5} className="flex gap-4 items-start">
                <div className="p-2.5 rounded bg-white/5 border border-white/10 text-neopop-green mt-1">
                  <KeyRound size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">PCI-DSS Compliant</h4>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 font-light">
                    CRED maintains Level 1 PCI-DSS compliance certification, enforcing rigorous storage rules for card data protection.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.6} className="flex gap-4 items-start">
                <div className="p-2.5 rounded bg-white/5 border border-white/10 text-neopop-green mt-1">
                  <Eye size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Complete Privacy Guarantee</h4>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 font-light">
                    We do not sell, rent, or distribute member transaction history or private details to third-party advertisers.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Interactive Security Scanner Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            <ScrollReveal direction="right" delay={0.3} className="w-full max-w-md">
              <NeopopCard borderGlow="green" className="w-full text-left relative overflow-hidden" hoverScale={false}>
                
                {/* Visual scanner overlay */}
                {scanStatus === 'scanning' && (
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-neopop-green shadow-[0_0_12px_#00E5A3] animate-bounce z-20"></div>
                )}

                <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                  <span className="text-xs font-bold text-neopop-green uppercase tracking-widest flex items-center gap-1.5">
                    <Radio className="animate-pulse" size={14} /> Shield Control V2
                  </span>
                  <span className={`text-[10px] uppercase px-2 py-0.5 font-bold rounded ${
                    scanStatus === 'idle' ? 'bg-white/5 text-gray-400' :
                    scanStatus === 'scanning' ? 'bg-neopop-blue/10 text-neopop-blue border border-neopop-blue/20' :
                    'bg-neopop-green/10 text-neopop-green border border-neopop-green/20'
                  }`}>
                    {scanStatus === 'idle' ? 'ready' : scanStatus === 'scanning' ? 'scanning' : 'secured'}
                  </span>
                </div>

                {scanStatus === 'idle' && (
                  <div className="py-8 flex flex-col items-center justify-center text-center">
                    <ScanLine className="text-gray-500 animate-pulse mb-4" size={48} />
                    <h3 className="text-lg font-bold text-white">Interactive Security Check</h3>
                    <p className="text-xs text-gray-400 mt-2 max-w-[280px]">
                      run the security scanner to verify compliance protocols, regulatory rules, and encryption handshakes.
                    </p>
                    <NeopopButton
                      color="green"
                      shadowColor="black"
                      onClick={runSecurityScan}
                      className="mt-6 w-full"
                    >
                      run verification check
                    </NeopopButton>
                  </div>
                )}

                {scanStatus === 'scanning' && (
                  <div className="py-4">
                    <div className="flex items-center gap-4 mb-6 bg-black/60 p-4 border border-white/5 rounded">
                      <div className="w-6 h-6 border-2 border-neopop-green border-t-transparent rounded-full animate-spin"></div>
                      <div>
                        <p className="text-xs font-bold text-white uppercase tracking-wider">scanning infrastructure</p>
                        <p className="text-[10px] text-neopop-green mt-0.5">{scanSteps[activeStep]}</p>
                      </div>
                    </div>

                    {/* Progress steps ledger */}
                    <div className="flex flex-col gap-3 font-mono text-[11px]">
                      {scanSteps.map((step, idx) => (
                        <div key={step} className={`flex items-center gap-2 ${
                          idx < activeStep ? 'text-neopop-green font-semibold' :
                          idx === activeStep ? 'text-white' : 'text-gray-600'
                        }`}>
                          {idx < activeStep ? (
                            <CircleCheckBig size={12} className="text-neopop-green" />
                          ) : (
                            <span className={`w-1.5 h-1.5 rounded-full ${idx === activeStep ? 'bg-neopop-green' : 'bg-gray-700'}`}></span>
                          )}
                          <span>Checkpoint {idx + 1}: {idx < activeStep ? 'VERIFIED' : idx === activeStep ? 'INSPECTING...' : 'PENDING'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {scanStatus === 'completed' && (
                  <div className="py-4 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-neopop-green/10 border-2 border-neopop-green flex items-center justify-center text-neopop-green shadow-[0_0_20px_rgba(0,229,163,0.2)] animate-pulse">
                      <ShieldCheck size={36} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mt-4 uppercase tracking-wider">integrity verified</h3>
                    <p className="text-xs text-neopop-green mt-1 font-semibold uppercase tracking-widest">
                      system status: 100% secured
                    </p>

                    <div className="mt-6 bg-black/60 border border-white/5 p-4 rounded text-left w-full text-[11px] font-mono text-gray-400">
                      <p>✓ AES-256: VALIDATED</p>
                      <p>✓ PCI-DSS STATUS: COMPLIANT</p>
                      <p>✓ RBI ROUTING SETTLEMENTS: MATCHED</p>
                      <p>✓ HOST INTEGRITY CHECKS: PASSED</p>
                    </div>

                    <NeopopButton
                      color="white"
                      shadowColor="black"
                      onClick={resetScan}
                      className="mt-6 w-full text-center"
                    >
                      reset verification
                    </NeopopButton>
                  </div>
                )}

              </NeopopCard>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Security
