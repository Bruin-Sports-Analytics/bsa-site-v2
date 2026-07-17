import Image from "next/image";
import type { InstagramPost } from "@/lib/instagram";
import styles from "./InstagramCollage.module.css";

type Props = {
  posts: InstagramPost[];
};

// [top, left, rotate] for desktop (190px tiles, 520px container)
const DESKTOP_LAYOUT = [
  [10, 20, -6],
  [20, 210, 3],
  [20, 400, -3],
  [175, 50, 5],
  [185, 240, -5],
  [170, 420, 4],
  [340, 15, -4],
  [355, 220, 6],
  [345, 410, -2],
] as const;

// [top, left] for mobile (150px tiles, 380px container) — rotate values same as desktop
const MOBILE_LAYOUT = [
  [7, 16],
  [15, 166],
  [15, 316],
  [128, 39],
  [135, 189],
  [124, 331],
  [249, 12],
  [260, 174],
  [252, 323],
] as const;

function formatDate(timestamp: string) {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function InstagramCollage({ posts }: Props) {
  const tiles = posts.slice(0, 9);

  return (
    <div className={styles.collage} aria-label="Bruin Sports Analytics Instagram posts">
      {tiles.map((post, i) => {
        const [top, left, rotate] = DESKTOP_LAYOUT[i];
        const [mobileTop, mobileLeft] = MOBILE_LAYOUT[i];

        return (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tile}
            aria-label={`View Instagram post from ${formatDate(post.timestamp)}`}
            style={
              {
                "--t": `${top}px`,
                "--l": `${left}px`,
                "--mt": `${mobileTop}px`,
                "--ml": `${mobileLeft}px`,
                "--r": `${rotate}deg`,
              } as React.CSSProperties
            }
          >
            <div className={styles.imageWrapper}>
              <Image
                src={post.media_url}
                alt=""
                fill
                sizes="(max-width: 1100px) 150px, 190px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}
