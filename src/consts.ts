import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "ビブレビ！",
  DESCRIPTION: "やっぱり本がすき。書評とまなびのブログ。",
  // ✅ AdSense審査用に実在する連絡先メールアドレスに変更してください
  EMAIL: "utibori1@gmail.com", 
  // ✅ ホームページにある程度記事が並んでいた方が「活動中」に見えるので5〜10を推奨
  NUM_POSTS_ON_HOMEPAGE: 5,
  // ✅ 書評メインならプロジェクトは一旦0（非表示）でOKです
  NUM_PROJECTS_ON_HOMEPAGE: 0, 
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "ビブレビ！は、biblio(本) + review(書評)をテーマに、知的好奇心を満たす決定版の1冊を紹介するブログです。",
};

export const BLOG: Metadata = {
  TITLE: "書評ブログ", // 英語より日本語の方が審査員（人間）に伝わりやすいです
  DESCRIPTION: "言語学、歴史、ビジネスなど、幅広いジャンルの書評と学びを記録しています。",
};

export const PROJECTS: Metadata = {
  TITLE: "活動記録",
  DESCRIPTION: "過去のプロジェクトや活動のアーカイブです。",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (Twitter)",
    HREF: "https://x.com/biblevi", // URLを最新のx.comにしておくとより良いです
  },
];