import { Headset } from "@/components/illustrations/Headset";
import { Button } from "@/components/ui/Button";
import { RichText } from "@/components/ui/RichText";
import { Section } from "@/components/ui/Section";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

export function Hero() {
  return (
    <Section tone="cobalt" className="pt-10! sm:pt-16!">
      <div className="grid items-center gap-10 md:grid-cols-[1.25fr_1fr] md:gap-12">
        <div className="flex flex-col items-start gap-6">
          <p className="text-base font-bold text-cobalt-light sm:text-lg">
            {profile.eyebrow}
          </p>
          <h1 className="headline text-5xl text-cream sm:text-6xl lg:text-7xl">
            {profile.headline.lead}{" "}
            <span className="text-cobalt-light">{profile.headline.key}</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-cream sm:text-xl">
            <RichText text={profile.intro} />
          </p>
          <Button href={profile.linkedin} external>
            {site.hero.button}
          </Button>
        </div>
        <div className="mx-auto w-full max-w-sm md:max-w-md">
          <Headset className="h-auto w-full" />
        </div>
      </div>
    </Section>
  );
}
