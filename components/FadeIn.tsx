'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'none'
}

export default function FadeIn({ children, delay = 0, className = '', direction = 'up' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 16 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
