# Team CYB3RL4NG's Website

The weird classes named like text-start and pt-5 are provided by [Bootstrap](https://getbootstrap.com/docs/5.0/).

We use [Hugo](https://gohugo.io/) to generate the website. Use `hugo server` to try out locally.

Project structure:
- If you want to change the actual text content of the website, go to [`content`](/content)
  - Homepage: [`content/_index.md`](/content/_index.md)
  - About page: [`content/about.md`](/content/about.md)
  - Timeline: [`content/timeline.md`](/content/timeline.md)
  - Blogs: [`content/blog`](/content/blog/)
- Styling ([Sass](https://sass-lang.com/)) is in [`assets/sass`](/assets/sass)
  - Avoid touching [`assets/sass/bootstrap`](/assets/sass/bootstrap/) if possible,
    unless you need to update Bootstrap
    - We should use a Git submodule or something for that
- HTML templates are in [`layouts`](/layouts/)
- [`data/settings.yaml`](/data/settings.yaml) has settings for
  - Page links in navbar
  - Social media links/icons in navbar
  - Contact info
- Images go in [`static/img`](/static/img/)
