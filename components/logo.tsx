// Компонент логотипа "ACCENTS" с ударением над первой буквой.
//
// Как это работает:
// - Слово "ACCENTS" — обычный текст.
// - Маленькая цветная палочка (span с классом accent-mark) рисуется
//   поверх буквы "A" с помощью absolute-позиционирования.
// - Размеры палочки заданы в em — то есть относительно размера шрифта
//   родителя. Поэтому если снаружи стоит text-xl или text-[15vw],
//   палочка сама подстроится под размер и не "уедет".
//
// Пропс className — сюда снаружи передаются классы размера, шрифта,
// цвета и т.д. (например, "text-xl font-bold uppercase").
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span
        aria-hidden="true"
        className="accent-mark absolute bg-current"
      />
      ACCENTS
    </span>
  )
}
