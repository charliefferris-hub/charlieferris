import { Sparkle } from "@/components/illustrations/Sparkle";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-cobalt text-cream">
      <div className="mx-auto w-full max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <div
          id="contact"
          className="flex scroll-mt-8 flex-col items-start gap-8"
        >
          <div className="flex items-start gap-4">
            <h2 className="headline max-w-3xl text-4xl text-cream sm:text-6xl">
              {site.contact.heading}
            </h2>
            <Sparkle className="mt-1 hidden size-14 shrink-0 sm:block" />
          </div>
          <Button href={profile.linkedin} external>
            {site.contact.button}
          </Button>
        </div>
        <p className="mt-16 border-t-2 border-cobalt-light pt-6 text-sm text-cobalt-light">
          {site.footer.smallPrint}
        </p>
      </div>
    </footer>
  );
}
