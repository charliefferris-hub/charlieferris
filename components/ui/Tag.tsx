import type { ReactNode } from "react";
import { colourClasses, type BrandColour } from "./colours";

type TagProps = {
  colour: BrandColour;
  children: ReactNode;
};

export function Tag({ colour, children }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border-card px-3 py-0.5 text-sm font-medium text-ink ${colourClasses[colour].light}`}
    >
      {children}
    </span>
  );
}
