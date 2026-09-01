"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDownRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background with grain */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Soft leaf-shadow motif, as if light falls through a plant — adapted from a real shadow reference */}
      <motion.svg
        className="leaf-shadow absolute top-[-8%] right-[2%] w-[560px] h-[760px] pointer-events-none"
        viewBox="0 0 400 560"
        animate={{ rotate: [0, 1.5, 0], x: [0, 10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <g>
          <path d="M320 540 C 290 470, 260 420, 220 370 C 180 320, 140 290, 100 240 C 70 200, 55 160, 45 110"
                stroke="#3d3a2f" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M220 370 C 250 350, 275 340, 310 320"
                stroke="#3d3a2f" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M160 320 C 130 310, 105 315, 75 300"
                stroke="#3d3a2f" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M100 240 C 125 225, 150 218, 180 200"
                stroke="#3d3a2f" strokeWidth="3.5" fill="none" strokeLinecap="round" />

          <ellipse cx="45" cy="110" rx="24" ry="38" fill="#3d3a2f" transform="rotate(-25 45 110)" />
          <ellipse cx="85" cy="150" rx="18" ry="30" fill="#3d3a2f" transform="rotate(10 85 150)" />
          <ellipse cx="180" cy="200" rx="20" ry="32" fill="#3d3a2f" transform="rotate(-30 180 200)" />
          <ellipse cx="140" cy="230" rx="16" ry="26" fill="#3d3a2f" transform="rotate(20 140 230)" />
          <ellipse cx="75" cy="300" rx="19" ry="30" fill="#3d3a2f" transform="rotate(-45 75 300)" />
          <ellipse cx="160" cy="320" rx="17" ry="27" fill="#3d3a2f" transform="rotate(15 160 320)" />
          <ellipse cx="310" cy="320" rx="22" ry="34" fill="#3d3a2f" transform="rotate(35 310 320)" />
          <ellipse cx="260" cy="350" rx="17" ry="27" fill="#3d3a2f" transform="rotate(-10 260 350)" />
          <ellipse cx="220" cy="370" rx="20" ry="32" fill="#3d3a2f" transform="rotate(50 220 370)" />
          <ellipse cx="280" cy="420" rx="19" ry="30" fill="#3d3a2f" transform="rotate(-20 280 420)" />
          <ellipse cx="220" cy="440" rx="16" ry="26" fill="#3d3a2f" transform="rotate(30 220 440)" />
          <ellipse cx="320" cy="480" rx="21" ry="33" fill="#3d3a2f" transform="rotate(-40 320 480)" />
        </g>
      </motion.svg>

      {/* Main content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 pt-32"
      >
        {/* Large headline */}
        <div className="max-w-[95vw]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            Украшения ручной работы
          </motion.p>
          
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.85] tracking-tight uppercase">
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
              className="block"
            >
              Носи
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
              className="block text-primary"
            >
              Смыслы
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-muted-foreground max-w-md text-lg"
          >
            В основе каждого украшения — крупный натуральный камень: нефрит, 
            агат, кварц, перламутр. Мы знаем, из чего собираем красоту, 
            и с удовольствием расскажем вам об этом.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <Link
            href="#catalog"
            className="group inline-flex items-center gap-4 text-primary hover:text-primary/80 transition-colors"
          >
            <span className="text-sm uppercase tracking-[0.2em]">Смотреть каталог</span>
            <span className="flex items-center justify-center w-12 h-12 border border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <ArrowDownRight className="h-5 w-5" />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom marquee */}
      <div className="relative z-10 border-t border-border py-4 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-sm uppercase tracking-[0.3em] text-muted-foreground mx-8">
              Натуральные камни — Металл — Декоративные бусины — Ручная работа — Проверенные материалы — 
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-24 right-6 md:right-12 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground hidden md:block" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Скролл
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  )
}
