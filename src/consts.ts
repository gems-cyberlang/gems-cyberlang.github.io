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

interface SocialMediaLink {
  /**
   * FontAwesome classes to use for the icon
   */
  faClass: string;
  link: string;
  hoverText: string;
  /**
   * Text to use when displaying in the footer. This is different from the
   * hovertext because the hovertext can be more descriptive.
   */
  footerText: string;
}

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    faClass: "fab fa-github",
    link: "https://github.com/gems-cyberlang",
    hoverText: "GitHub organization",
    footerText: "GitHub",
  },
  {
    faClass: "fab fa-instagram",
    link: "https://instagram.com/cyb3rl4ng",
    hoverText: "Instagram",
    footerText: "Instagram",
  },
  {
    faClass: "fa-solid fa-rss",
    link: "/feed.xml",
    hoverText: "RSS feed for our blog",
    footerText: "RSS feed",
  },
];
