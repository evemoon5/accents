"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Logo } from "@/components/logo"

const footerLinks = {
  shop: [
    { label: "Колье", href: "#catalog" },
    { label: "Браслеты", href: "#catalog" },
    { label: "Обвесы", href: "#catalog" },
    { label: "Лукбук", href: "#lookbook" },
  ],
  info: [
    { label: "О нас", href: "#about" },
    { label: "Доставка", href: "#" },
    { label: "Возврат", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Telegram", href: "#" },
    { label: "VK", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Main footer */}
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <Logo className="text-2xl font-bold tracking-[0.3em]" />
              </Link>
              <p className="text-muted-foreground text-sm max-w-xs">
                Украшения ручной работы из крупного натурального камня — для тех, кто ценит индивидуальность и знает цену настоящему.
              </p>
            </div>

            {/* Shop links */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                Магазин
              </h4>
              <ul className="space-y-4">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info links */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                Информация
              </h4>
              <ul className="space-y-4">
                {footerLinks.info.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                Соцсети
              </h4>
              <ul className="space-y-4">
                {footerLinks.social.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <Logo />. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Оферта
            </Link>
          </div>
        </div>
      </div>

      {/* Giant text */}
      <div className="overflow-hidden border-t border-border">
        <div className="px-6 md:px-12 py-8">
          <p className="text-[15vw] font-bold leading-none text-foreground opacity-[0.1] select-none text-center">
            <Logo />
          </p>
        </div>
      </div>
    </footer>
  )
}
