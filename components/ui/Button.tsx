import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  /** Where the button goes. Leave out to show the "Coming soon" disabled state. */
  href?: string | null;
  /** Open in a new tab (for links to other sites). */
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-button border-card px-5 py-3 text-base font-bold leading-tight text-ink text-center";

export function Button({
  children,
  href,
  external,
  className = "",
}: ButtonProps) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`${base} cursor-not-allowed bg-marigold-light ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={`${base} focus-ring bg-marigold transition-colors hover:bg-marigold-deep ${className}`}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      {children}
    </a>
  );
}
