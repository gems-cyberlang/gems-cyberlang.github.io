# Team CYB3RL4NG's Website

We use [Hugo](https://gohugo.io/) to generate the website. Use `hugo server` to try out locally.

Project structure:

- If you want to change the actual text content of the website, go to [`content`](/content)
  - Homepage: [`content/_index.md`](/content/_index.md)
  - About page: [`content/about.md`](/content/about.md)
  - Timeline: [`content/timeline.md`](/content/timeline.md)
  - Blogs: [`content/blog`](/content/blog/)
- Styling ([Sass](https://sass-lang.com/)) is in [`assets/sass`](/assets/sass)
- HTML templates are in [`layouts`](/layouts/)
- [`data/settings.yaml`](/data/settings.yaml) has settings for
  - Page links in navbar
  - Social media links/icons in navbar
  - Contact info
- Images go in [`static/img`](/static/img/)
