import React from 'react'
import { motion } from 'framer-motion'

/**
 * ScrollReveal - Framer Motion component to animate elements into view on scroll.
 * 
 * Props:
 * - children: react node
 * - direction: 'up' | 'down' | 'left' | 'right' | 'none'
 * - delay: number (seconds)
 * - duration: number (seconds)
 * - className: string
 */
const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = ''
}) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 }
  }

  const initial = {
    opacity: 0,
    ...directions[direction]
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1.0] // Cubic Bezier (easeOutCubic)
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
