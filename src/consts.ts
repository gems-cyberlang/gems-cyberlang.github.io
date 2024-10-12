// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "CYB3RL4NG";
export const SITE_DESCRIPTION = "Website for Team CYB3RL4NG";

export const CONTACT_NAME = "Team Liaison";
export const CONTACT_EMAIL = "someone@example.com";

export const PAGES = [
  { link: "/about", name: "About", leetName: "AB0UT" },
  { link: "/timeline", name: "Timeline", leetName: "T1M3L1N3" },
  { link: "/blog", name: "Blog", leetName: "B10G" },
] as const;

export const SOCIAL_MEDIA_ICONS = [
  {
    faClass: "fab fa-github",
    link: "https://github.com/gems-cyberlang",
    title: "CYB3RL4NG's GitHub organization",
  },
  {
    faClass: "fab fa-instagram",
    link: "https://instagram.com/cyb3rl4ng",
    title: "CYB3RL4NG's Instagram",
  },
  {
    faClass: "fa-solid fa-rss",
    link: "/feed.xml",
    title: "RSS feed",
  },
];
