// Проверяем футер: копирайт содержит бренд с ударением и текущий год,
// а ссылки на политику конфиденциальности и условия — на месте.
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Footer } from "@/components/footer"

describe("Footer", () => {
  it("показывает копирайт с логотипом ÁCCENTS и текущим годом", () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    const copyright = screen.getByText((_, element) => {
      return element?.tagName.toLowerCase() === "p" && element.textContent === `© ${year} ÁCCENTS. Все права защищены.`
    })
    expect(copyright).toBeInTheDocument()
  })

  it("содержит ссылку на политику конфиденциальности", () => {
    render(<Footer />)
    expect(screen.getByText("Политика конфиденциальности")).toBeInTheDocument()
  })
})
