import type { ReactNode } from "react";

type SectionProps = {
  tone?: "cobalt" | "cream";
  id?: string;
  as?: "section" | "header" | "footer" | "div";
  children: ReactNode;
  className?: string;
};

const tones = {
  cobalt: "bg-cobalt text-cream",
  cream: "bg-cream text-ink",
};

export function Section({
  tone = "cream",
  id,
  as: Tag = "section",
  children,
  className = "",
}: SectionProps) {
  return (
    <Tag id={id} className={tones[tone]}>
      <div
        className={`mx-auto w-full max-w-content px-5 py-16 sm:px-8 sm:py-24 ${className}`}
      >
        {children}
      </div>
    </Tag>
  );
}
