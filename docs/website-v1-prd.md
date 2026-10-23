# Charlie Ferris website V1 PRD

**Status:** Draft, 2026-10-23
**Owner:** Charlie Ferris
**Surface:** New repo `charlieferris` on GitHub, deployed to `charlieferris.vercel.app`. Files: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `components/**`, `content/**`, `public/**`, `docs/**`.

## Problem

Charlie is a senior CX leader with 20 years' experience. He has no personal site. His LinkedIn profile shows his history, but nothing shows that he can build things with AI agents, GitHub and Vercel.

Employers who look him up today see a CV. They should also see proof that he builds: a branded site, plus live apps he made.

We want to:
1. Publish a one-page site at `charlieferris.vercel.app` today, built to the V2 brand guidelines.
2. Show who Charlie is in under 10 seconds: headline, three or four career numbers.
3. Link to his apps (flight tracker now, help centre when it is live).
4. Give employers one next step: message Charlie on LinkedIn.
5. Set up an architecture that takes new apps and new pages without a rebuild.
6. Teach Charlie the GitHub to Vercel loop by doing it (Task #3).

Success metric: none set for V1. Vercel Web Analytics captures a visitor baseline from launch day, so V2 can set a target against real numbers.

## Constraints

- **Freedom:** free hand. This is the real site, not a throwaway prototype.
- **Touches:** a public website. Publishing is the only real-world action.
- **Data & safety:**
  - The site collects no personal data: no forms, no logins, no cookies.
  - Vercel Web Analytics counts visits without cookies.
  - Never publish Charlie's postcode, area, age or passport details.
  - Never push to `main` (which publishes the site) without Charlie's explicit OK in chat.
- **Hosting:** Vercel Hobby (free). Hobby is for personal, non-commercial use, which fits a personal profile site.
- **Heads-up note:** nobody needs to sign off.

## Decisions captured (from scoping conversation)

| Question | Decision |
|---|---|
| Framework | Next.js 16, App Router, TypeScript, via `create-next-app@latest` |
| Styling | Tailwind CSS v4. All brand tokens in one `@theme` block in `app/globals.css` |
| Fonts | Bricolage Grotesque (800) for headlines, DM Sans (400, 500, 700) for body, both via `next/font/google` |
| Rendering | Fully static. No database, no API routes, no server functions |
| Hosting | Vercel Hobby, free `charlieferris.vercel.app` domain |
| Source control | GitHub repo `charlieferris`. Push to `main` = live. Other branches = preview links |
| Who writes the code | Claude, in a cloud session with push access to the repo. Charlie creates the repo and connects Vercel himself, to learn the loop (implied, challenge if wrong) |
| Architecture layers | Tokens (`globals.css`) → components (`components/ui`) → sections (`components/sections`) → page. Content lives in `content/`, apart from layout |
| Pages in V1 | One page, with scrolling sections |
| Sections in V1 | Hero + career numbers, Apps (fun and CS), Contact |
| "How I built this site" band | Not in V1 |
| Call to action | "Message me on LinkedIn" → `https://www.linkedin.com/in/charlie-ferris/` |
| Open to work statement | No. Keep the site neutral |
| Photo | None. Hero uses a chunky headset illustration |
| Illustrations | Claude draws them as inline SVG React components, to the brand illustration rules |
| App links | Flight tracker: live at `https://flights-overhead-brown.vercel.app/`. Help centre: not live, card shows "Coming soon" |
| Analytics | Vercel Web Analytics on, via `@vercel/analytics` |
| Copy source | Charlie's career facts (LinkedIn could not be read automatically). Charlie reviews all copy before launch |
| Brand source of truth | `docs/brand-guidelines.md` in the repo, copied from the Project doc |

## Implementation milestones

Dependency graph: M1 → M2 (first deploy). M1 → M3 → M4. M5 and M6 can run alongside M3 and M4. M7 needs M4, M5 and M6. M8 needs M7. M9 is the launch gate.

### M1 - Repo and scaffold

Create the project and the folder structure.

- [x] Charlie creates an empty public GitHub repo named `charlieferris` (no README, no licence)
- [x] Claude gets push access to the repo
- [x] Scaffold with `npx create-next-app@latest` using TypeScript, App Router, Tailwind, ESLint, no `src/` folder
- [x] Create empty folders: `components/ui`, `components/sections`, `components/illustrations`, `content`, `docs`
- [x] Copy brand guidelines to `docs/brand-guidelines.md`
- [x] Copy this PRD to `docs/website-v1-prd.md`
- [x] Replace the starter `app/page.tsx` with a single line: "Charlie Ferris. Coming soon."
- [x] `npm run build` passes
- [x] Commit `chore: scaffold Next.js site` and push to `main` (Charlie approves the push)

### M2 - First deploy (learn the loop early)

Prove GitHub to Vercel works before building anything big. Needs M1.

- [x] Charlie opens Vercel → Add New → Project → imports `charlieferris` from GitHub
- [x] Project name `charlieferris`, framework preset Next.js, all defaults
- [x] Deploy succeeds and "Charlie Ferris. Coming soon." shows at `charlieferris.vercel.app`
- [x] If `charlieferris` is taken on vercel.app, Charlie picks a fallback and records it here: not needed, `charlieferris` was free
- [x] Charlie turns on Web Analytics in the Vercel project (Analytics tab → Enable)
- [x] All later work happens on branch `v1-build`. Each push gives a preview link Charlie can open on his phone

### M3 - Design tokens and fonts

Turn the brand guidelines into code. Needs M1.

- [x] In `app/globals.css`, an `@theme` block with these colour tokens:
  - `cobalt-light #BFD3FF`, `cobalt #1D3FCF`, `cobalt-deep #0F2580`
  - `marigold-light #FFE4A6`, `marigold #FFB921`, `marigold-deep #C98400`
  - `coral-light #FFCDC6`, `coral #FF6B5B`, `coral-deep #C93A2B`
  - `lime-light #ECF8C6`, `lime #C9EC5A`, `lime-deep #7FA61A`
  - `cream #FFFEF2`, `white #FFFFFF`, `ink #101010`, `body #3A3A3A`
- [x] Radius tokens: `card 16px`, `button 8px`, `chip 10px`
- [x] Shadow tokens: solid, `8px 8px 0 0` in each main colour (cobalt, marigold, coral, lime). No blur
- [x] Border tokens: 2px ink for cards and buttons, 3px ink for large blocks
- [x] Content width token: `1180px`
- [x] Remove Tailwind's default colour palette so off-brand colours cannot be used by accident
- [x] `app/layout.tsx` loads Bricolage Grotesque (weight 800) and DM Sans (400, 500, 700) with `next/font/google`, exposed as CSS variables
- [x] Headline style: Bricolage 800, letter-spacing `-0.02em`
- [x] Page background `cream`, body text `ink`, `<html lang="en-GB">`

### M4 - UI components

The building blocks. Each follows the brand rules so pages stay on-brand. Needs M3.

- [x] `Button`: marigold fill, ink text, 2px ink outline, 8px corners. Hover: marigold-deep. Renders as a link when given `href`. Visible focus ring
- [x] `Button` disabled state for "Coming soon": marigold-light fill, ink text, no hover, `aria-disabled`
- [x] `Card`: white fill, 2px ink outline, 16px corners, solid 8px shadow. Takes one `colour` prop (cobalt, coral, lime or marigold) that sets both shadow and chip, so one card never mixes pop colours
- [x] `IconChip`: 10px corners, light shade fill, 2px ink outline, holds one illustration or icon
- [x] `Tag`: small pill for "Just for fun" and "For customers", light shade of the card's colour, ink text
- [x] `Section`: centred wrapper at 1180px max width, generous vertical padding, `tone` prop (`cobalt`, `cream`)
- [ ] Every component works at 360px wide (phone)

### M5 - Content files

Words and links live here, apart from layout. Needs M1. Charlie reviews every line before M9.

- [x] `content/profile.ts` holds:
  - name: `Charlie Ferris`
  - eyebrow: `Customer experience leader, London`
  - headline: `I make service feel` + key word `human.`
  - intro: `I've spent 20 years leading customer teams. I build **teams people want to work in**, and services customers trust.`
  - linkedin: `https://www.linkedin.com/in/charlie-ferris/`
- [x] `content/profile.ts` numbers (one card each, colour in brackets):
  - `20 years` / `in customer experience` (cobalt)
  - `400 people` / `led at Utility Warehouse` (coral)
  - `45 people` / `led at Housekeep, for 6 years` (lime)
  - `CIPD` / `qualified in learning and development` (marigold)
- [x] `content/apps.ts` exports a typed list. Each app has: `name`, `tag` (`fun` or `cs`), `blurb`, `url` (or null), `button`, `colour`, `illustration`
- [x] Flight tracker entry: tag `fun`, blurb `Tells me which plane is flying over my flat right now.`, button `Take off`, colour coral, illustration Plane, url `https://flights-overhead-brown.vercel.app/`
- [x] Help centre entry: tag `cs`, blurb `Answers the common questions before they turn into calls and emails.`, url null (shows "Coming soon"), colour lime, illustration SpeechBubble
- [x] Adding a third app needs only a new entry in `apps.ts` (check by adding a dummy entry locally, then removing it)

### M6 - Illustrations

Chunky, flat SVG drawings to the brand rules. Needs M1.

- [x] `Headset.tsx` for the hero: marigold and coral fills, ink outlines, floats over a small flat ink oval shadow, plus sparkle lines. No cobalt main fill, because it sits on cobalt
- [x] `Plane.tsx`: coral and cream fills, motion lines
- [x] `SpeechBubble.tsx`: lime and white fills
- [x] `Sparkle.tsx`: small accent, marigold
- [x] Every drawing: one ink outline thickness, at most three colours plus ink and cream, flat deep-shade shading, no gradients
- [x] Every drawing has `aria-hidden="true"` (decoration only)
- [x] Charlie approves the headset drawing before M7 starts

### M7 - Sections and page

Assemble the one-page site. Needs M4, M5 and M6.

- [x] `Header`: on cobalt. Left: wordmark `Charlie Ferris` in Bricolage, cream. Right: Button `Say hello` linking to `#contact`
- [x] `Hero`: cobalt drench. Eyebrow, then H1 `I make service feel human.` in cream, with `human.` in cobalt-light. Intro paragraph in cream. Button `Message me on LinkedIn`. Headset illustration on the right (stacks below the text on phones)
- [x] `Numbers`: on cream, heading `20 years, in numbers`. Four white Cards in a row on desktop, two by two on tablet, one column on phone
- [x] `Apps`: on cream. Heading `Things I've built`, subhead `Small apps I made with AI agents, from idea to live.` One Card per entry in `apps.ts`, each with IconChip, Tag, name, blurb and Button
- [x] App buttons open in a new tab with `rel="noopener"`
- [x] `Contact` (id `contact`) inside the cobalt footer: H2 `Let's talk about your customers.` in cream, Button `Message me on LinkedIn`
- [x] Footer small print in cobalt-light: `Built with Next.js and AI agents. Hosted on Vercel. © 2026 Charlie Ferris`
- [x] `app/page.tsx` renders Header, Hero, Numbers, Apps, Footer in that order and holds no copy of its own
- [x] Bold one phrase per paragraph at most, per the voice rules
- [x] No emoji, stock photos, gradients or blurred shadows anywhere

### M8 - Metadata, favicon and analytics

The finishing touches for sharing and counting. Needs M7.

- [x] `metadata` in `app/layout.tsx`: title `Charlie Ferris – Customer experience leader`, description `20 years leading customer teams, from 400 people at Utility Warehouse to Housekeep. I make service feel human.`
- [x] Favicon `app/icon.svg`: cobalt square, 8px corners, `CF` in cream Bricolage
- [x] Add `@vercel/analytics` and render `<Analytics />` from `@vercel/analytics/next` in `app/layout.tsx`
- [x] `robots`: allow indexing

### M9 - Verification and launch

Run before merging `v1-build` into `main`.

- [x] `npm run build` passes with no errors
- [x] `npm run lint` passes
- [ ] Preview link loads on Charlie's phone and on a desktop browser
- [ ] Layout holds at 360px, 768px and 1280px wide, with no sideways scroll
- [ ] Every button and link works: Say hello scrolls to contact, both LinkedIn buttons open the profile, Take off opens the flight tracker, Coming soon does nothing
- [ ] Keyboard check: Tab reaches every button in order, with a visible focus ring
- [ ] Brand check against `docs/brand-guidelines.md`: cobalt top and footer, cream middle, white cards only, every button marigold with ink outline, one pop colour per card, no illustration on its own main colour
- [x] Contrast check: cobalt-light on cobalt and cream on cobalt both pass WCAG AA
- [x] Privacy check: no postcode, area, age or passport detail anywhere on the page
- [ ] Charlie reads every line of copy and approves it
- [ ] Charlie approves the merge in chat. Merge `v1-build` → `main`
- [ ] Live site at `charlieferris.vercel.app` shows the new page
- [ ] Vercel Analytics shows at least one visit after Charlie opens the live site
- [ ] Update the Project docs: brand guidelines unchanged, PRD ticked off, live URL recorded

## Out of scope / future additions

- "How I built this site" band - *deferred; add in V1.1 once the build is done and Charlie can describe it honestly*
- Help centre link - *deferred; swap `url: null` for the live URL when the app ships*
- Photo of Charlie - *deliberate; illustration only for V1*
- Open-to-work statement - *deliberate; site stays neutral*
- CV download - *deliberate; LinkedIn is the single call to action*
- Custom domain (e.g. charlieferris.co.uk) - *deferred; separate task when Charlie wants one*
- Separate Apps page, blog or case studies - *deferred; each is one new folder in `app/` when needed*
- Contact form - *deliberate; a form collects personal data and needs a privacy notice*
- Social share image (Open Graph picture) - *deferred to V1.1; text metadata only for V1*
- Dark mode - *deliberate; the brand is defined on cream and cobalt only*
- Click tracking on the LinkedIn button - *deferred; check whether Hobby supports custom events first*

## Open questions to resolve during implementation

- Fallback Vercel project name, if `charlieferris` is taken (M2)
- Exact intro wording: Charlie may want to rewrite "services customers trust" in his own words (M5)

## Pre-mortem flags

**Technical risks:**
- `charlieferris.vercel.app` may already be taken. The brand doc assumes it. Caught in M2, with a fallback line ready.
- Claude may lack push access to the new repo, which stalls M1. Caught in M1; fallback is Claude sends a zip and Charlie uploads files through GitHub's web page.
- Tailwind v4 is CSS-first. A build agent trained on v3 may create `tailwind.config.js` instead of using `@theme`. Caught in M3: tokens must live in `globals.css` only.
- Removing Tailwind's default palette may break a utility class the scaffold uses. Caught by `npm run build` in M9.
- Hand-drawn SVGs can take many rounds. The headset is the only drawing that blocks launch; the other three can ship simple and improve in V1.1. Caught by the approval check in M6.
- UK cookie rules: Vercel Analytics uses no cookies, so no banner is planned. If Charlie wants certainty, he can switch it off in one click. Noted for M8.

**Strategic risks:**
- No success metric, so V1 cannot prove it worked. Mitigation: analytics from day one gives a baseline (M2, M8).
- Employers may never find the site unless Charlie links to it. Mitigation: add the URL to LinkedIn, CV and email signature after M9 (outside this PRD).
- A "Coming soon" card can read as unfinished. If Charlie dislikes it in the preview, hide the help centre entry until it is live (M9 review).
- Copy drafted by Claude from facts may not sound like Charlie. Caught by the copy approval in M9.

## Research grounding

Checked 2026-10-23 with web search.

- Next.js 16 is the current major version; 16.2.x patches shipped through mid-2026 and 16 needs Node.js 20+ - source: https://nextjs.org/blog, https://abhs.in/blog/nextjs-current-version-march-2026-stable-release-whats-new
- Tailwind v4 keeps design tokens in a CSS `@theme` block and needs no `tailwind.config.js` - source: https://dev.to/whoffagents/tailwind-css-v4-what-actually-changed-and-how-to-migrate-without-breaking-everything-4f6h
- Vercel Hobby is free and limited to personal, non-commercial use - source: https://vercel.com/docs/plans/hobby
- `@vercel/analytics/next` exports the `Analytics` component for Next.js - source: https://vercel.com/docs/concepts/analytics/package
- Vercel Web Analytics does not use cookies - source: https://www.achromatic.dev/docs/starter-kits/pro-nextjs-prisma/observability/vercel
