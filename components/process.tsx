"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const steps = [
  {
    num: "01",
    title: "Идея",
    description: "Каждое украшение начинается с вдохновения — цвета, формы, эмоции. Мы находим красоту в неожиданных местах."
  },
  {
    num: "02", 
    title: "Материалы",
    description: "Тщательный отбор: чешский бисер, натуральные камни, качественный металл. Каждый элемент имеет значение."
  },
  {
    num: "03",
    title: "Создание",
    description: "Часы кропотливой работы, внимание к каждой детали. Руки мастера превращают материалы в искусство."
  },
  {
    num: "04",
    title: "Ваше",
    description: "Украшение находит своего человека. История продолжается — теперь уже вашими руками."
  }
]

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="process" ref={containerRef} className="relative py-32 md:py-48">
      {/* Section header */}
      <div className="px-6 md:px-12 mb-24 md:mb-32">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-sm tracking-[0.3em] uppercase"
        >
          03 / Процесс
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase mt-4"
        >
          Как рождается
          <br />
          <span className="text-primary">украшение</span>
        </motion.h2>
      </div>

      {/* Process steps */}
      <div className="px-6 md:px-12">
        <div className="relative max-w-4xl mx-auto">
          {/* Animated line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border">
            <motion.div 
              className="w-full bg-primary origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-24 md:space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number marker */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-background border border-primary flex items-center justify-center">
                  <span className="text-primary text-sm font-bold">{step.num}</span>
                </div>

                {/* Content */}
                <div className={`flex-1 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24'}`}>
                  <h3 className="text-3xl md:text-4xl font-bold uppercase mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
