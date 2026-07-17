export type InstagramPost = {
  src: string;
  permalink: string;
  date: string;
};

export const instagramPosts: InstagramPost[] = [
  // Add up to 9 entries. Images go in public/assets/instagram/.
  // Example:
  // { src: "/assets/instagram/post-01.png", permalink: "https://www.instagram.com/p/...", date: "2026-06-15" },
  {
    src: "/assets/instagram/post-01.png",
    permalink: "https://www.instagram.com/p/DO_hGjMj7lL/",
    date: "2025-09-24"
  },
  {
    src: "/assets/instagram/post-02.png",
    permalink: "https://www.instagram.com/p/DKa4m5zxTVH/",
    date: "2025-06-02"
  },
  {
    src: "/assets/instagram/post-03.png",
    permalink: "https://www.instagram.com/p/DH4j58pSKrG/",
    date: "2025-03-31"
  }
];
