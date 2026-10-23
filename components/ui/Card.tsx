import type { ReactNode } from "react";
import { colourClasses, type BrandColour } from "./colours";
import { IconChip } from "./IconChip";

type CardProps = {
  /** Sets both the shadow and the icon chip, so one card never mixes pop colours. */
  colour: BrandColour;
  /** Optional drawing or icon, shown in a chip of the same colour. */
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Card({ colour, icon, children, className = "" }: CardProps) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-card border-card bg-white p-6 ${colourClasses[colour].shadow} ${className}`}
    >
      {icon ? <IconChip colour={colour}>{icon}</IconChip> : null}
      {children}
    </div>
  );
}
