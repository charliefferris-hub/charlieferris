import type { ReactNode } from "react";
import { colourClasses, type BrandColour } from "./colours";

type IconChipProps = {
  colour: BrandColour;
  children: ReactNode;
};

export function IconChip({ colour, children }: IconChipProps) {
  return (
    <div
      className={`flex size-16 shrink-0 items-center justify-center rounded-chip border-card p-2 ${colourClasses[colour].light}`}
    >
      {children}
    </div>
  );
}
