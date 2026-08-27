"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

const stats = [
  { value: "500+", label: "Украшений создано" },
  { value: "3", label: "Года опыта" },
  { value: "100%", label: "Ручная работа" },
]

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-primary text-primary-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left column - Text */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase"
              >
                04 / О нас
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mt-4 mb-8"
              >
                Мы —&nbsp;<Logo />
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6 text-lg text-primary-foreground/80"
              >
                <p>
                  Небольшая мастерская в Москве, где каждое украшение 
                  создаётся вручную. Мы верим, что красота — в деталях, 
                  а смысл — в процессе.
                </p>
                <p>
                  Наши материалы — это бисер со всего мира, натуральные камни 
                  и качественный металл. Наша философия — создавать вещи, 
                  которые хочется носить каждый день.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12"
              >
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-4 text-primary-foreground border-b border-primary-foreground/30 pb-2 hover:border-primary-foreground transition-colors"
                >
                  <span className="text-sm uppercase tracking-[0.2em]">Связаться с нами</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </motion.div>
            </div>

            {/* Right column - Stats */}
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-1 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="border-l-2 border-primary-foreground/20 pl-8"
                  >
                    <span className="text-6xl md:text-7xl lg:text-8xl font-bold">
                      {stat.value}
                    </span>
                    <p className="text-primary-foreground/60 text-sm uppercase tracking-widest mt-2">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
