// Help centre drawing: speech bubbles. Lime and white.
// Brand rules: one ink outline thickness, flat fills, deep-shade shading, no gradients.

type Props = { className?: string };

export function SpeechBubble({ className }: Props) {
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
      <ellipse cx="58" cy="110" rx="26" ry="4" fill="#101010" />
      <path
        d="M64 14 L100 14 C108 14 112 18 112 26 L112 44 C112 52 108 56 100 56 L98 56 L102 66 L88 56 L64 56 C56 56 52 52 52 44 L52 26 C52 18 56 14 64 14 Z"
        fill="#FFFFFF"
        stroke="#101010"
        strokeWidth="4"
      />
      <path
        d="M20 36 L72 36 C82 36 86 41 86 50 L86 76 C86 85 82 90 72 90 L44 90 L24 102 L28 90 L20 90 C11 90 8 85 8 76 L8 50 C8 41 11 36 20 36 Z"
        fill="#C9EC5A"
      />
      <path
        d="M8 78 L86 78 L86 76 C86 85 82 90 72 90 L44 90 L24 102 L28 90 L20 90 C11 90 8 85 8 76 Z"
        fill="#7FA61A"
      />
      <path
        d="M20 36 L72 36 C82 36 86 41 86 50 L86 76 C86 85 82 90 72 90 L44 90 L24 102 L28 90 L20 90 C11 90 8 85 8 76 L8 50 C8 41 11 36 20 36 Z"
        stroke="#101010"
        strokeWidth="4"
      />
      <circle cx="30" cy="58" r="5" fill="#101010" />
      <circle cx="47" cy="58" r="5" fill="#101010" />
      <circle cx="64" cy="58" r="5" fill="#101010" />
      <path d="M16 46 L22 42" stroke="#ECF8C6" strokeWidth="4" />
    </svg>
  );
}
