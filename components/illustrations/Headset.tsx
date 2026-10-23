// Hero drawing: a support headset (leadership). Marigold and coral, never cobalt, because it sits on cobalt.
// Brand rules: one ink outline thickness, flat fills, deep-shade shading, no gradients.

type Props = { className?: string };

export function Headset({ className }: Props) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 320 300"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <clipPath id="hs-cup-l">
          <rect x="36" y="132" width="52" height="88" rx="24" />
        </clipPath>
        <clipPath id="hs-cup-r">
          <rect x="232" y="128" width="52" height="88" rx="24" />
        </clipPath>
        <clipPath id="hs-band">
          <path d="M58 154 C56 96 100 50 161 49 C222 48 265 94 263 150 L244 151 C245 105 209 68 161 69 C113 70 77 108 78 154 Z" />
        </clipPath>
      </defs>

      {/* floor shadow */}
      <ellipse cx="160" cy="284" rx="74" ry="9" fill="#101010" />

      {/* energy lines */}
      <g stroke="#FFFEF2" strokeWidth="6">
        <path d="M262 36 L276 20" />
        <path d="M283 58 L302 50" />
        <path d="M250 22 L252 6" />
        <path d="M44 214 L26 222" />
        <path d="M48 238 L34 252" />
      </g>

      {/* sparkles */}
      <path
        d="M42 62 C44 74 48 78 60 80 C48 82 44 86 42 98 C40 86 36 82 24 80 C36 78 40 74 42 62 Z"
        fill="#FFB921"
        stroke="#101010"
        strokeWidth="5"
      />
      <path
        d="M292 96 C293 104 296 107 304 108 C296 109 293 112 292 120 C291 112 288 109 280 108 C288 107 291 104 292 96 Z"
        fill="#FFFEF2"
        stroke="#101010"
        strokeWidth="5"
      />

      {/* headband */}
      <path
        d="M58 154 C56 96 100 50 161 49 C222 48 265 94 263 150 L244 151 C245 105 209 68 161 69 C113 70 77 108 78 154 Z"
        fill="#FFB921"
      />
      <g clipPath="url(#hs-band)">
        <path
          d="M60 150 C62 104 104 66 161 66 C218 66 258 104 262 150 L262 170 L60 170 Z"
          fill="#C98400"
        />
        <path
          d="M78 154 C77 108 113 70 161 69 C209 68 245 105 244 151"
          fill="#FFB921"
          stroke="none"
        />
      </g>
      <path
        d="M58 154 C56 96 100 50 161 49 C222 48 265 94 263 150 L244 151 C245 105 209 68 161 69 C113 70 77 108 78 154 Z"
        stroke="#101010"
        strokeWidth="5"
      />
      {/* headband highlight */}
      <path d="M70 124 C73 106 82 92 94 81" stroke="#FFE4A6" strokeWidth="5" />

      {/* mic boom */}
      <path
        d="M60 208 C64 252 100 262 136 254"
        stroke="#101010"
        strokeWidth="17"
      />
      <path
        d="M60 208 C64 252 100 262 136 254"
        stroke="#FFB921"
        strokeWidth="7"
      />

      {/* left ear cup */}
      <rect x="36" y="132" width="52" height="88" rx="24" fill="#FF6B5B" />
      <g clipPath="url(#hs-cup-l)">
        <rect x="30" y="186" width="64" height="40" fill="#C93A2B" />
      </g>
      <rect
        x="36"
        y="132"
        width="52"
        height="88"
        rx="24"
        stroke="#101010"
        strokeWidth="5"
      />
      <path d="M50 150 L50 166" stroke="#FFCDC6" strokeWidth="6" />
      <rect
        x="84"
        y="142"
        width="20"
        height="68"
        rx="9"
        fill="#FFFEF2"
        stroke="#101010"
        strokeWidth="5"
      />

      {/* right ear cup */}
      <rect x="232" y="128" width="52" height="88" rx="24" fill="#FF6B5B" />
      <g clipPath="url(#hs-cup-r)">
        <rect x="226" y="182" width="64" height="40" fill="#C93A2B" />
      </g>
      <rect
        x="232"
        y="128"
        width="52"
        height="88"
        rx="24"
        stroke="#101010"
        strokeWidth="5"
      />
      <path d="M268 146 L268 162" stroke="#FFCDC6" strokeWidth="6" />
      <rect
        x="216"
        y="138"
        width="20"
        height="68"
        rx="9"
        fill="#FFFEF2"
        stroke="#101010"
        strokeWidth="5"
      />

      {/* mic tip */}
      <rect
        x="128"
        y="240"
        width="40"
        height="26"
        rx="13"
        fill="#FF6B5B"
        stroke="#101010"
        strokeWidth="5"
      />
      <path d="M140 249 L152 249" stroke="#FFCDC6" strokeWidth="5" />
    </svg>
  );
}
