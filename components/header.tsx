"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag, ArrowUpRight } from "lucide-react"
import { Logo } from "@/components/logo"

const navItems = [
  { label: "Каталог", href: "#catalog" },
  { label: "Лукбук", href: "#lookbook" },
  { label: "О нас", href: "#about" },
  { label: "Процесс", href: "#process" },
  { label: "Контакт", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount] = useState(0)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-6 md:px-12">
          {/* Logo */}
          <Link href="/" className="group">
            <Logo className="text-xl font-bold tracking-[0.3em] text-white" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm tracking-widest uppercase text-white hover:opacity-60 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <Link href="#cart" className="relative text-white">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 h-4 w-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white"
              aria-label="Открыть меню"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[100] bg-primary"
          >
            <div className="h-full flex flex-col p-6 md:p-12">
              {/* Close button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground"
                  aria-label="Закрыть меню"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>

              {/* Menu items */}
              <nav className="flex-1 flex flex-col justify-center gap-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-4 text-5xl md:text-7xl font-bold text-primary-foreground hover:text-primary-foreground/60 transition-colors"
                    >
                      <span className="text-sm font-normal opacity-50">0{i + 1}</span>
                      {item.label}
                      <ArrowUpRight className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col md:flex-row justify-between gap-6 text-primary-foreground/60 text-sm"
              >
                <div>
                  <p>Москва</p>
                  <p>accents@gmail.com</p>
                </div>
                <div className="flex gap-6">
                  <Link href="#" className="hover:text-primary-foreground transition-colors">Instagram</Link>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">Telegram</Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
