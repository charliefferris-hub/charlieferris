import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { numbers } from "@/content/profile";
import { site } from "@/content/site";

export function Numbers() {
  return (
    <Section tone="cream">
      <h2 className="headline text-4xl sm:text-5xl">{site.numbers.heading}</h2>
      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {numbers.map((item) => (
          <li key={item.value} className="flex">
            <Card colour={item.colour} className="w-full">
              <p className="headline text-4xl">{item.value}</p>
              <p className="text-lg text-body">{item.label}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
