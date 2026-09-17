// Конфиг линтера (ESLint) — инструмента, который проверяет код
// на явные ошибки и плохие практики (неиспользуемые переменные,
// нарушение правил React и т.д.), не запуская сам код.
//
// nextConfig — готовый набор правил от команды Next.js,
// ничего вручную настраивать не нужно.
import nextConfig from "eslint-config-next"

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [".next/**", ".open-next/**", "node_modules/**", "coverage/**", "components/ui/**", "hooks/use-mobile.ts", "cloudflare-env.d.ts"],
  },
]

export default eslintConfig
