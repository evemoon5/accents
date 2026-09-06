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
      
      {/* Soft leaf-shadow motif, closely tracing a real shadow reference, rotated to sit on the diagonal */}
      <motion.svg
        className="leaf-shadow absolute top-[-6%] right-[3%] w-[480px] h-[820px] pointer-events-none"
        viewBox="0 0 400 700"
        animate={{ rotate: [0, 1.2, 0], x: [0, 8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <defs>
          <path id="leaf-lance" d="M0,-68 C22,-62 26,-15 24,20 C22,50 12,68 0,72 C-12,68 -22,50 -24,20 C-26,-15 -22,-62 0,-68 Z" />
          <path id="leaf-sliver" d="M0,-58 C10,-53 12,-12 11,18 C10,42 5,58 0,62 C-5,58 -10,42 -11,18 C-12,-12 -10,-53 0,-58 Z" />
        </defs>
        <g transform="rotate(38 200 350)">
          {/* main stem */}
          <path d="M200 660 C 198 560, 202 460, 198 360 C 196 300, 200 230, 205 150 C 208 110, 215 80, 225 50"
                stroke="#3d3a2f" strokeWidth="5" fill="none" strokeLinecap="round" />

          {/* top cluster: three overlapping leaves forming a rounded crown */}
          <use href="#leaf-lance" transform="translate(222 45) rotate(-8) scale(1.15)" />
          <use href="#leaf-lance" transform="translate(268 95) rotate(38) scale(1.0)" />
          <use href="#leaf-sliver" transform="translate(245 110) rotate(8) scale(0.7)" />
          <use href="#leaf-sliver" transform="translate(230 130) rotate(-15) scale(0.55)" />

          {/* upper-mid pair */}
          <use href="#leaf-lance" transform="translate(118 205) rotate(-45) scale(1.35)" />
          <use href="#leaf-lance" transform="translate(270 255) rotate(35) scale(1.2)" />

          {/* mid leaf, longer */}
          <use href="#leaf-lance" transform="translate(150 330) rotate(-30) scale(1.5)" />

          {/* lower thin slivers */}
          <use href="#leaf-sliver" transform="translate(95 415) rotate(-58) scale(1.1)" />
          <use href="#leaf-sliver" transform="translate(70 500) rotate(-65) scale(1.0)" />
          <use href="#leaf-lance" transform="translate(285 420) rotate(48) scale(1.05)" />

          {/* bottom heart-shaped overlapping pair */}
          <use href="#leaf-lance" transform="translate(180 545) rotate(20) scale(1.3)" />
          <use href="#leaf-lance" transform="translate(228 555) rotate(-18) scale(1.25)" />
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
            У каждого смысла — своя форма, как и у наших украшений. 
            В основе каждого — крупные натуральные камни и сборка 
            в единственном экземпляре.
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
              Натуральные камни — Единственный экземпляр — Проверенные материалы — Ручная работа — Качественная фурнитура — 
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
