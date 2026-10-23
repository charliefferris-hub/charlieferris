import type { BrandColour } from "@/components/ui/colours";

// The apps shown in "Things I've built".
// To add an app, add one entry to this list. Nothing else needs to change.

export type AppTag = "fun" | "cs";
export type AppIllustration = "Plane" | "SpeechBubble" | "Sparkle";

export type App = {
  name: string;
  tag: AppTag;
  blurb: string;
  /** Live link, or null while the app is not live yet (shows "Coming soon"). */
  url: string | null;
  button: string;
  colour: BrandColour;
  illustration: AppIllustration;
};

export const tagLabels: Record<AppTag, string> = {
  fun: "Just for fun",
  cs: "For customers",
};

export const apps: App[] = [
  {
    name: "Flights Overhead",
    tag: "fun",
    blurb: "Tells me which plane is flying over my flat right now.",
    url: "https://flights-overhead-brown.vercel.app/",
    button: "Take off",
    colour: "coral",
    illustration: "Plane",
  },
  {
    name: "Help centre",
    tag: "cs",
    blurb:
      "Answers the common questions before they turn into calls and emails.",
    url: null,
    button: "Coming soon",
    colour: "lime",
    illustration: "SpeechBubble",
  },
];
