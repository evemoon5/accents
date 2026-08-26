"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Send } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [email, setEmail] = useState("")

  return (
    <section id="contact" className="relative py-32 md:py-48">
      <div className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left column */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary text-sm tracking-[0.3em] uppercase"
              >
                05 / Контакт
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mt-4 mb-8"
              >
                Давайте
                <br />
                <span className="text-primary">создадим</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg max-w-md mb-12"
              >
                Хотите уникальное украшение на заказ? Или просто хотите сказать 
                привет? Мы всегда рады новым знакомствам.
              </motion.p>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-16"
              >
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  Подпишитесь на новинки
                </p>
                <form className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email"
                    className="flex-1 bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <button 
                    type="submit"
                    className="bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-8"
              >
                {["Instagram", "Telegram", "YouTube"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="group flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                  >
                    {social}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Right column - Contact info */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-12"
              >
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                    Email
                  </p>
                  <a 
                    href="mailto:accents@gmail.com"
                    className="text-2xl md:text-3xl font-medium hover:text-primary transition-colors"
                  >
                    accents@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                    Telegram
                  </p>
                  <a 
                    href="#"
                    className="text-2xl md:text-3xl font-medium hover:text-primary transition-colors"
                  >
                    @accents
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                    Локация
                  </p>
                  <p className="text-2xl md:text-3xl font-medium">
                    Москва, Россия
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
