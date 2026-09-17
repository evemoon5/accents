"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Plus, Heart } from "lucide-react"
import Image from "next/image"

type Product = {
  id: number
  name: string
  description: string | null
  price: number
  category: string
  image: string | null
}

const filters = ["Все", "Колье", "Браслеты", "Обвесы"]

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState("Все")

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json() as Promise<Product[]>)
      .then((data) => setProducts(data))
      .catch((err) => console.error("Не удалось загрузить товары:", err))
      .finally(() => setLoading(false))
  }, [])

  const filteredProducts = activeFilter === "Все"
    ? products
    : products.filter((product) => product.category === activeFilter)

  return (
    <section id="catalog" className="relative py-32 md:py-48 bg-card">
      {/* Section header */}
      <div className="px-6 md:px-12 mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm tracking-[0.3em] uppercase"
            >
              02 / Каталог
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
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-muted-foreground max-w-sm text-lg mt-4"
            >
              Ни одно украшение не повторяется дважды — выбирайте то, что есть сейчас.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm uppercase tracking-widest border transition-all ${
                  filter === activeFilter
                    ? 'border-primary bg-primary text-primary-foreground' 
                    : 'border-border hover:border-primary hover:text-primary'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Products grid */}
      <div className="px-6 md:px-12">
        {loading && (
          <p className="text-muted-foreground text-center py-12">Загружаем изделия…</p>
        )}
        {!loading && filteredProducts.length === 0 && (
          <p className="text-muted-foreground text-center py-12">Пока здесь пусто — изделия скоро появятся.</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {filteredProducts.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
            >
              {/* Image container */}
              <div className="relative aspect-[3/4] bg-secondary mb-6 overflow-hidden">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Actions overlay */}
                <motion.div 
                  initial={false}
                  animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                  className="absolute inset-0 bg-background/60 flex items-center justify-center gap-4"
                >
                  <button 
                    className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    aria-label="Добавить в корзину"
                  >
                    <Plus className="h-6 w-6" />
                  </button>
                  <button 
                    className="flex items-center justify-center w-14 h-14 border border-foreground text-foreground hover:border-primary hover:text-primary transition-colors"
                    aria-label="Добавить в избранное"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </motion.div>
              </div>
              
              {/* Product info */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-medium mt-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-sm text-muted-foreground mt-1 max-w-xs">
                      {product.description}
                    </p>
                  )}
                </div>
                <span className="text-lg tabular-nums shrink-0 ml-4">
                  {product.price.toLocaleString('ru-RU')} ₽
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* View all button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-6 md:px-12 mt-16 md:mt-24 text-center"
      >
        <button className="inline-flex items-center gap-4 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm uppercase tracking-widest">
          Смотреть все изделия
          <Plus className="h-4 w-4" />
        </button>
      </motion.div>
    </section>
  )
}
