// Small accent: a sparkle. Marigold.
// Brand rules: one ink outline thickness, flat fills, deep-shade shading, no gradients.

type Props = { className?: string };

export function Sparkle({ className }: Props) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M60 10 C64 42 72 52 104 58 C72 64 64 74 60 106 C56 74 48 64 16 58 C48 52 56 42 60 10 Z"
        fill="#FFB921"
        stroke="#101010"
        strokeWidth="4"
      />
      <path d="M60 30 C61 44 64 50 70 54" stroke="#FFE4A6" strokeWidth="4" />
      <path
        d="M100 14 C101 22 103 24 110 25 C103 26 101 28 100 36 C99 28 97 26 90 25 C97 24 99 22 100 14 Z"
        fill="#FFB921"
        stroke="#101010"
        strokeWidth="4"
      />
    </svg>
  );
}
