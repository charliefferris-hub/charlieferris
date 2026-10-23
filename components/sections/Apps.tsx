import { Plane } from "@/components/illustrations/Plane";
import { Sparkle } from "@/components/illustrations/Sparkle";
import { SpeechBubble } from "@/components/illustrations/SpeechBubble";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { apps, tagLabels, type AppIllustration } from "@/content/apps";
import { site } from "@/content/site";

const illustrations: Record<AppIllustration, typeof Plane> = {
  Plane,
  SpeechBubble,
  Sparkle,
};

export function Apps() {
  return (
    <Section tone="cream" className="pt-0!">
      <h2 className="headline text-4xl sm:text-5xl">{site.apps.heading}</h2>
      <p className="mt-3 max-w-2xl text-lg text-body">{site.apps.subhead}</p>
      <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => {
          const Drawing = illustrations[app.illustration];
          return (
            <li key={app.name} className="flex">
              <Card
                colour={app.colour}
                icon={<Drawing className="h-full w-full" />}
                className="w-full"
              >
                <div>
                  <Tag colour={app.colour}>{tagLabels[app.tag]}</Tag>
                </div>
                <h3 className="headline text-3xl">{app.name}</h3>
                <p className="text-lg text-body">{app.blurb}</p>
                <div className="mt-auto pt-2">
                  <Button href={app.url} external>
                    {app.button}
                  </Button>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
