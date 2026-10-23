import type { BrandColour } from "@/components/ui/colours";

// Words for the hero, numbers and contact. Edit copy here, not in the components.
// Wrap one phrase per paragraph in **double stars** to make it bold.

export const profile = {
  name: "Charlie Ferris",
  eyebrow: "Customer experience leader, London",
  headline: { lead: "I make service feel", key: "human." },
  intro:
    "I've spent 20 years leading customer teams. I build **teams people want to work in**, and services customers trust.",
  linkedin: "https://www.linkedin.com/in/charlie-ferris/",
};

export type CareerNumber = {
  value: string;
  label: string;
  colour: BrandColour;
};

export const numbers: CareerNumber[] = [
  { value: "20 years", label: "in customer experience", colour: "cobalt" },
  { value: "400 people", label: "led at Utility Warehouse", colour: "coral" },
  {
    value: "45 people",
    label: "led at Housekeep, for 6 years",
    colour: "lime",
  },
  {
    value: "CIPD",
    label: "qualified in learning and development",
    colour: "marigold",
  },
];
