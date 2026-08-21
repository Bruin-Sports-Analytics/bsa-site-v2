import Image from "next/image";
import styles from "./LogoCategories.module.css";

type Outcome = { name: string; category: string; logo?: string | null; logoScale?: number };

const GROUPS: { label: string; categories: string[] }[] = [
  { label: "Sports", categories: ["Sports", "Sports Analytics"] },
  { label: "Technology", categories: ["Technology", "Aerospace", "AI", "Media", "Consumer Goods"] },
  { label: "Finance & Consulting", categories: ["Finance", "Investments", "Consulting"] },
  { label: "Schools", categories: ["Graduate Program", "University"] },
];

export function LogoCategories({ logos }: { logos: Outcome[] }) {
  const groups = GROUPS.map((group) => ({
    label: group.label,
    logos: logos.filter((outcome) => group.categories.includes(outcome.category)),
  })).filter((group) => group.logos.length > 0);

  return (
    <div className={styles.root}>
      {groups.map((group) => (
        <div className={styles.group} key={group.label}>
          <h3 className={styles.groupTitle}>{group.label}</h3>
          <div className={styles.wall}>
            {group.logos.map((outcome) => (
              <div className={styles.tile} title={`${outcome.name} — ${outcome.category}`} key={outcome.name}>
                {outcome.logo ? (
                  <span className={styles.imgWrap}>
                    <Image
                      src={outcome.logo}
                      alt={outcome.name}
                      fill
                      sizes="160px"
                      className={styles.img}
                      style={outcome.logoScale ? { transform: `scale(${outcome.logoScale})` } : undefined}
                    />
                  </span>
                ) : (
                  <span className={styles.text}>{outcome.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
