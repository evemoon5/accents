// Простой тест-проверка: логотип рендерится с ударением над первой
// буквой (буква "Á"), а не превращается обратно в обычную "A" и
// не остаётся пустым.
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Logo } from "@/components/logo"

describe("Logo", () => {
  it("отображает ÁCCENTS с ударением над первой буквой", () => {
    render(<Logo />)
    expect(screen.getByText("ÁCCENTS")).toBeInTheDocument()
  })

  it("применяет переданные снаружи классы (например, размер шрифта)", () => {
    render(<Logo className="text-2xl" />)
    expect(screen.getByText("ÁCCENTS")).toHaveClass("text-2xl")
  })
})
