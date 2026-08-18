import { MemberCard } from "@/components/MemberCard";
import type { Member } from "@/data/site";

export type PeopleSection = {
  title: string;
  people: Member[];
};

type Props = {
  sections: PeopleSection[];
};

export function PeopleSections({ sections }: Props) {
  return (
    <>
      {sections.map((section, sectionIndex) => (
        <div key={section.title} style={sectionIndex > 0 ? { marginTop: "48px" } : undefined}>
          <span
            className="eyebrow"
            data-scroll-reveal
            style={{ display: "block", marginBottom: "16px", fontSize: "16px", textAlign: "center" }}
          >
            {section.title}
          </span>
          <div className="board-grid">
            {section.people.map((member, memberIndex) => (
              <MemberCard
                member={member}
                key={member.slug}
                priority={sectionIndex === 0 && memberIndex < 3}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
