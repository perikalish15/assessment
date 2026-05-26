import React from 'react'

/**
 * NeoPOP-styled Glass/Border Card Component
 * 
 * Props:
 * - borderGlow: 'green' | 'blue' | 'pink' | 'yellow' | 'none'
 * - className: string
 * - onClick: function
 * - hoverScale: boolean
 */
const NeopopCard = ({
  children,
  borderGlow = 'none',
  className = '',
  onClick,
  hoverScale = true
}) => {
  const glowBorderMap = {
    green: 'hover:border-neopop-green/60 hover:shadow-[0_0_20px_rgba(0,229,163,0.15)]',
    blue: 'hover:border-neopop-blue/60 hover:shadow-[0_0_20px_rgba(15,82,255,0.15)]',
    pink: 'hover:border-neopop-pink/60 hover:shadow-[0_0_20px_rgba(255,0,127,0.15)]',
    yellow: 'hover:border-neopop-yellow/60 hover:shadow-[0_0_20px_rgba(255,230,0,0.15)]',
    none: 'hover:border-white/20'
  }

  const borderClass = glowBorderMap[borderGlow] || glowBorderMap.none

  return (
    <div
      onClick={onClick}
      className={`
        glass-panel p-6 md:p-8
        transition-all duration-300 ease-out
        ${hoverScale ? 'hover:-translate-y-1' : ''}
        ${borderClass}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default NeopopCard
