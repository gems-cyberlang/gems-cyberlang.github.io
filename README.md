# Team CYB3RL4NG's Website

We use [Astro](https://astro.build/) to generate the website.

## Project structure

- If you want to work on blog posts, go to [`src/content/blog`](/src/content/blog/)
- If you want to change the other text content of the website, go to [`src/pages`](/src/pages)
  - Homepage: [`index.mdx`](/src/pages/index.mdx)
  - Blog index page: [`src/pages/blog/index.astro`](/src/pages/blog/index.astro)
    - Individual blog pages: [`src/pages/blog/[...slug].astro`](/src/pages/blog/[...slug].astro)
- Layouts are in [`src/layouts`](/src/layouts/)
- `public` contains assets that visitors will get directly
  - Favicon goes in [`public/favicon.ico`](/public/favicon.ico)
  - Images go in [`public/img`](/public/img/)
  - Fonts go in [`public//fonts`](/public/fonts/)

## Project setup

I think you'll need to install Node.js and run `npm i` in this directory.

Use `npm run dev` to build and run the website locally.
