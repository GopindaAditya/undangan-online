import { motion } from 'framer-motion'

// Pengganti AOS: animasi muncul sekali saat elemen masuk viewport.
// direction: 'up' | 'left' | 'right' | 'zoom' | 'none'
const variants = {
  up: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
  zoom: { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } },
  none: { hidden: { opacity: 0 }, show: { opacity: 1 } },
}

export default function Reveal({ as: Tag = 'div', direction = 'up', delay = 0, className, children, ...rest }) {
  const MotionTag = motion[Tag] || motion.div
  return (
    <MotionTag
      className={className}
      variants={variants[direction] ?? variants.up}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
