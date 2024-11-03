// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "CYB3RL4NG";
export const SITE_DESCRIPTION = "Website for Team CYB3RL4NG";

export const CONTACT_NAME = "Terra Oh";
export const CONTACT_EMAIL = "toh12@terpmail.umd.edu";

export const PAGES = [
  { link: "/about", name: "About", leetName: "ABOUT" },
  { link: "/methods", name: "Methods", leetName: "METHODS" },
  { link: "/timeline", name: "Timeline", leetName: "TIMELINE" },
  { link: "/blog", name: "Blog", leetName: "BLOG" },
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

export const RSS_LINK = "/feed.xml";

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
    link: RSS_LINK,
    hoverText: "RSS feed for our blog",
    footerText: "RSS feed",
  },
];

export const Files = {
  /**
   * The Spring 2023 paper (the one we defended)
   */
  Proposal: "/files/Proposal.pdf",
};
