import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "ビブレビ！",
  DESCRIPTION: "やっぱり本がすき。書評とまなびのブログ。",
  EMAIL: "your-email@example.com", // 自分のメールアドレスへ
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 0, // プロジェクトが不要なら0に
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "ビブレビ！は、書評を中心に知的な好奇心を満たすコンテンツを発信しています。",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "読んだ本の感想や、言語学・歴史などの学びを記録しています。",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "過去の活動記録です。",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/biblevi",
  },
];