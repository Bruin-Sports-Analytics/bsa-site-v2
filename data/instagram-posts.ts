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
  },
  {
    src: "/assets/instagram/post-04.png",
    permalink: "https://www.instagram.com/p/DWiEYuQE3eC/",
    date: "2026-03-30"
  },
  {
    src: "/assets/instagram/post-05.png",
    permalink: "https://www.instagram.com/p/DHASeT1RDUy/",
    date: "2025-03-12"
  },
  {
    src: "/assets/instagram/post-06.png",
    permalink: "https://www.instagram.com/p/DF6gUsQvtfW/",
    date: "2025-02-10"
  },
  {
    src: "/assets/instagram/post-07.png",
    permalink: "https://www.instagram.com/p/DFn1UTiSGXu/",
    date: "2025-02-03"
  },
  {
    src: "/assets/instagram/post-08.png",
    permalink: "https://www.instagram.com/p/DEgHSbZyCw2/",
    date: "2025-01-06"
  },
  {
    src: "/assets/instagram/post-09.png",
    permalink: "https://www.instagram.com/p/DEeWwMPxUUB/",
    date: "2025-01-06"
  }
];
