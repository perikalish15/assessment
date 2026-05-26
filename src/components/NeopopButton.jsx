import React from 'react'

/**
 * NeoPOP-styled 3D Button Component
 * 
 * Props:
 * - variant: 'primary' (solid color), 'secondary' (dark grey), 'outline' (transparent border)
 * - color: 'green' | 'blue' | 'pink' | 'yellow' | 'white' | 'black'
 * - shadowColor: 'green' | 'blue' | 'pink' | 'yellow' | 'white' | 'black'
 * - onClick: function
 * - className: string
 * - disabled: boolean
 * - type: 'button' | 'submit'
 */
const NeopopButton = ({
  children,
  variant = 'primary',
  color = 'green',
  shadowColor = 'black',
  onClick,
  className = '',
  disabled = false,
  type = 'button'
}) => {
  // Map colors to tailwind classes
  const colorMap = {
    green: 'bg-neopop-green text-black border-black',
    blue: 'bg-neopop-blue text-white border-black',
    pink: 'bg-neopop-pink text-white border-black',
    yellow: 'bg-neopop-yellow text-black border-black',
    white: 'bg-white text-black border-black',
    black: 'bg-black text-white border-white/20',
    transparent: 'bg-transparent text-white border-white/30'
  }

  const shadowMap = {
    green: 'neopop-shadow-green',
    blue: 'neopop-shadow-blue',
    pink: 'neopop-shadow-pink',
    yellow: 'neopop-shadow-yellow',
    white: 'neopop-shadow-white',
    black: 'neopop-shadow-black'
  }

  // Active translation details to compensate for shadow offset
  const activeTranslate = {
    green: 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-[1px_1px_0px_#00E5A3]',
    blue: 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-[1px_1px_0px_#0F52FF]',
    pink: 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-[1px_1px_0px_#FF007F]',
    yellow: 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-[1px_1px_0px_#FFE600]',
    white: 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-[1px_1px_0px_#ffffff]',
    black: 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-[1px_1px_0px_#000000]'
  }

  const bgClasses = variant === 'outline' 
    ? 'bg-transparent text-white border-2 border-white/80 hover:bg-white/10'
    : (colorMap[color] || colorMap.green)

  const shadowClass = shadowMap[shadowColor] || shadowMap.black
  const activeClass = activeTranslate[shadowColor] || activeTranslate.black

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative inline-flex items-center justify-center
        px-6 py-3 font-semibold uppercase tracking-wider text-xs md:text-sm
        border-2 transition-all duration-100 ease-out select-none
        ${bgClasses}
        ${shadowClass}
        ${activeClass}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        {children}
      </span>
    </button>
  )
}

export default NeopopButton
