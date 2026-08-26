"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    id: 1,
    title: "Бисер",
    subtitle: "Seed beads",
    description: "Чешский и японский бисер в авторских плетениях",
    count: 24,
    image: "/images/beaded.jpg",
  },
  {
    id: 2,
    title: "Камни",
    subtitle: "Natural stones",
    description: "Натуральные минералы и полудрагоценные камни",
    count: 18,
    image: "/images/stones.jpg",
  },
  {
    id: 3,
    title: "Металл",
    subtitle: "Metal craft",
    description: "Латунь, серебро и медь в минималистичных формах",
    count: 12,
    image: "/images/metal.jpg",
  },
]

export function Categories() {
  return (
    <section id="catalog" className="relative py-32 md:py-48">
      {/* Section header - asymmetric */}
      <div className="px-6 md:px-12 mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm tracking-[0.3em] uppercase"
            >
              01 / Каталог
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase mt-4"
            >
              Категории
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-sm text-lg"
          >
            Три направления, объединённые одной философией — создавать красоту из простых материалов.
          </motion.p>
        </div>
      </div>

      {/* Categories grid - asymmetric bento */}
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {categories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`
                relative group overflow-hidden bg-card
                ${i === 0 ? 'md:col-span-7 aspect-[4/3] md:aspect-[16/10]' : ''}
                ${i === 1 ? 'md:col-span-5 aspect-[4/3] md:aspect-[4/5]' : ''}
                ${i === 2 ? 'md:col-span-12 aspect-[4/3] md:aspect-[21/9]' : ''}
              `}
            >
              <Link href={`#category-${category.id}`} className="block h-full">
                {/* Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  {/* Top */}
                  <div className="flex justify-between items-start">
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {category.subtitle}
                    </span>
                    <span className="flex items-center justify-center w-10 h-10 border border-foreground/20 opacity-0 group-hover:opacity-100 transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  
                  {/* Bottom */}
                  <div>
                    <span className="text-primary text-xs tracking-widest uppercase">
                      {category.count} изделий
                    </span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mt-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mt-3 max-w-md">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
