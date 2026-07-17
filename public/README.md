# Public Assets

Add your own static assets here:

- `resume.pdf` — your resume/CV, linked from the Hero, Header (mobile) and Footer ("Download Resume") via `siteConfig.resumeUrl` in `lib/constants.ts`.
- `images/projects/*` — your own project screenshots. Reference them in `lib/data.ts` (`projects[].image` / `projects[].gallery`) using a root-relative path, e.g. `/images/projects/my-project.png`.
- `images/avatars/*` — your own portrait/testimonial avatar images, if you'd rather self-host than use the Unsplash/Pravatar placeholders currently used in `Hero.tsx`, `About.tsx` and `Testimonials.tsx` (`lib/data.ts`).

Favicons and social preview images (Open Graph / Twitter cards) do **not** need static files — they're generated automatically at build time by `app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx` and `app/twitter-image.tsx`.
