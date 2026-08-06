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
      {sections.map((section, index) => (
        <div key={section.title} style={index > 0 ? { marginTop: "48px" } : undefined}>
          <h3
            data-scroll-reveal
            style={{ display: "block", marginBottom: "16px", fontSize: "16px", textAlign: "center", fontFamily: "var(--font-sora), system-ui, sans-serif", fontWeight: 700 }}
          >
            {section.title}
          </h3>
          <div className="board-grid">
            {section.people.map((member) => <MemberCard member={member} key={member.slug} />)}
          </div>
        </div>
      ))}
    </>
  );
}
