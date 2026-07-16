"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { MemberCard } from "@/components/MemberCard";
import { members } from "@/data/site";
import styles from "./MembersDirectory.module.css";

export function MembersDirectory() {
  const [query, setQuery] = useState("");
  const [team, setTeam] = useState("All");
  const teams = Array.from(new Set(members.filter((member) => member.isPublished && member.group === "member").map((member) => member.team)));

  const filtered = useMemo(() => {
    return members
      .filter((member) => member.isPublished && member.group === "member")
      .filter((member) => team === "All" || member.team === team)
      .filter((member) => [member.name, member.role, member.team, member.major, member.gradYear].join(" ").toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }, [query, team]);

  return (
    <section className="section">
      <div className="container">
        <div className={styles.controls}>
          <label>
            <Search size={18} aria-hidden />
            <span className="sr-only">Search members</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search members" />
          </label>
          <select value={team} onChange={(event) => setTeam(event.target.value)} aria-label="Filter by team">
            <option>All</option>
            {teams.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className="grid five">
          {filtered.map((member) => <MemberCard member={member} key={member.slug} />)}
        </div>
      </div>
    </section>
  );
}
