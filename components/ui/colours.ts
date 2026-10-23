// One colour family per card: the chip, tag and shadow all come from the same entry.
// Class names are written out in full so Tailwind can find them.

export type BrandColour = "cobalt" | "coral" | "lime" | "marigold";

export const colourClasses: Record<
  BrandColour,
  { shadow: string; light: string }
> = {
  cobalt: { shadow: "shadow-cobalt", light: "bg-cobalt-light" },
  coral: { shadow: "shadow-coral", light: "bg-coral-light" },
  lime: { shadow: "shadow-lime", light: "bg-lime-light" },
  marigold: { shadow: "shadow-marigold", light: "bg-marigold-light" },
};
