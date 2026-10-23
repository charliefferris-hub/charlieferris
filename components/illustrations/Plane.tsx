// Flight tracker drawing: a plane taking off. Coral and cream.
// Brand rules: one ink outline thickness, flat fills, deep-shade shading, no gradients.

type Props = { className?: string };

export function Plane({ className }: Props) {
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
      <ellipse cx="62" cy="108" rx="26" ry="4" fill="#101010" />
      <g stroke="#101010" strokeWidth="4">
        <path d="M8 74 L24 70" />
        <path d="M6 88 L26 82" />
        <path d="M16 100 L30 94" />
      </g>
      <g transform="rotate(-18 62 60)">
        <path
          d="M58 48 L48 24 L62 24 L76 48 Z"
          fill="#C93A2B"
          stroke="#101010"
          strokeWidth="4"
        />
        <path
          d="M26 52 L18 32 L30 32 L42 52 Z"
          fill="#FF6B5B"
          stroke="#101010"
          strokeWidth="4"
        />
        <path
          d="M24 50 L94 50 C106 50 112 56 112 60 C112 64 106 70 94 70 L30 70 C24 70 20 66 20 60 C20 54 22 50 24 50 Z"
          fill="#FFFEF2"
          stroke="#101010"
          strokeWidth="4"
        />
        <path
          d="M100 52 C107 53 112 57 112 60 C112 63 107 67 100 68 Z"
          fill="#FF6B5B"
          stroke="#101010"
          strokeWidth="4"
        />
        <circle cx="56" cy="58" r="2.6" fill="#101010" />
        <circle cx="66" cy="58" r="2.6" fill="#101010" />
        <circle cx="76" cy="58" r="2.6" fill="#101010" />
        <path
          d="M56 64 L44 96 L60 96 L80 64 Z"
          fill="#FF6B5B"
          stroke="#101010"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
}
