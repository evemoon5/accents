// Конфиг Vitest — инструмента, который запускает тесты.
//
// environment: "jsdom" — тесты выполняются в имитации браузера
// (без него нельзя было бы рендерить React-компоненты, ведь
// обычный Node.js не умеет работать с DOM).
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "node:path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Тот же алиас "@/", что настроен в tsconfig.json,
      // чтобы в тестах импорты вида "@/components/logo" работали.
      "@": path.resolve(import.meta.dirname, "."),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
})
