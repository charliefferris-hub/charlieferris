import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="bg-cobalt text-cream">
      <div className="mx-auto flex w-full max-w-content items-center justify-between gap-4 px-5 pt-6 sm:px-8 sm:pt-8">
        <a
          href="#top"
          className="headline focus-ring rounded-button text-2xl text-cream sm:text-3xl"
        >
          {profile.name}
        </a>
        <Button href="#contact">{site.header.button}</Button>
      </div>
    </header>
  );
}
