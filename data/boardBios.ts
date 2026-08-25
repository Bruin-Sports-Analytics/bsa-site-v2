export type BoardBio = {
  hometown: string;
  joinDate: string;
  favoriteTeams: string[];
  interests: string[];
  bioText?: string;
};

export const boardBios: Record<string, BoardBio> = {
  "moulik-chatterjee": {
    hometown: "Chicago, IL",
    joinDate: "Winter 2025",
    favoriteTeams: ["Chicago Bears", "Chicago Bulls", "Chicago Cubs", "Chicago Blackhawks"],
    interests: ["Music Production", "LLM Evals", "NYT & Board Games", "2K", "Golf", "Beli"],
    bioText: "Leads BSA's strategic direction, campus partnerships, and organization-wide development across all sports divisions and technical initiatives."
  },
  "sampath-kalagarla": {
    hometown: "Pleasanton, CA",
    joinDate: "Fall 2024",
    favoriteTeams: ["Golden State Warriors", "San Francisco 49ers", "UCLA Bruins"],
    interests: ["Full-Stack Web Dev", "Basketball Analytics", "Data Infrastructure", "Pickleball"],
    bioText: "Leads BSA website development, analytics infrastructure, and digital platforms. Oversees software architecture and user experience."
  },
  "ben-troutman": {
    hometown: "Los Angeles, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["Los Angeles Dodgers", "Los Angeles Lakers", "UCLA Bruins"],
    interests: ["Internal Operations", "Statistical Modeling", "Sports Economics", "Spikeball"],
    bioText: "Leads internal operations, project workflows, workshops, and member onboarding across the organization."
  },
  "vardaan-sinha": {
    hometown: "Fremont, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["San Francisco 49ers", "Golden State Warriors", "Liverpool FC"],
    interests: ["External Partnerships", "Football Analytics", "Sponsorship Strategy", "Golf"],
    bioText: "Directs external relations, corporate sponsorships, and industry collaborations with sports franchises and tech partners."
  },
  "anthony-mui": {
    hometown: "Arcadia, CA",
    joinDate: "Fall 2025",
    favoriteTeams: ["Los Angeles Dodgers", "Los Angeles Angels", "UCLA Baseball"],
    interests: ["Sabermetrics", "Pitch Tracking & Biomechanics", "Machine Learning", "Table Tennis"],
    bioText: "Co-leads the Baseball division, directing Statcast research, pitch design models, and collegiate player evaluations."
  },
  "colin-granger": {
    hometown: "San Diego, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["San Diego Padres", "Los Angeles Chargers", "UCLA Bruins"],
    interests: ["Baseball Analytics", "Defensive Shift Modeling", "Sports Betting Markets", "Surfing"],
    bioText: "Co-leads the Baseball division, overseeing project pipelines, player development tools, and division workshops."
  },
  "eshaan-dhavala": {
    hometown: "Cupertino, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["San Francisco 49ers", "Golden State Warriors", "Arsenal FC"],
    interests: ["NFL NextGen Stats", "Computer Vision in Sports", "Coverages & Schemes", "Hiking"],
    bioText: "Co-chairs the Football division, leading tracking-data models, win-probability engines, and NFL draft research."
  },
  "abhi-kumar": {
    hometown: "Irvine, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["Los Angeles Rams", "Los Angeles Lakers", "Tottenham Hotspur"],
    interests: ["Pass-Rush Analytics", "Expected Points Added (EPA)", "Data Visualization", "Formula 1"],
    bioText: "Co-chairs the Football division, managing research teams, game strategy analytics, and technical publications."
  },
  "lucas-pichardo": {
    hometown: "San Antonio, TX",
    joinDate: "Fall 2023",
    favoriteTeams: ["San Antonio Spurs", "Dallas Cowboys", "Real Madrid"],
    interests: ["Shot Quality Modeling", "Lineup Synergy Analysis", "Spatial Tracking", "Weightlifting"],
    bioText: "Co-chairs the Basketball division, directing tracking-data pipelines, lineup optimization, and collegiate scouting reports."
  },
  "raja-kavasseri": {
    hometown: "Chicago, IL",
    joinDate: "Fall 2023",
    favoriteTeams: ["Chicago Bulls", "Chicago Bears", "Chicago White Sox"],
    interests: ["Basketball Analytics", "Clutch Rating Models", "Bayesian Statistics", "Basketball Coaching"],
    bioText: "Co-chairs the Basketball division, leading research methodology, player valuation metrics, and technical workshops."
  },
  "pavan-gudavalli": {
    hometown: "Dallas, TX",
    joinDate: "Fall 2023",
    favoriteTeams: ["Dallas Mavericks", "Dallas Cowboys", "UCLA Tennis"],
    interests: ["Tennis Tagging & Strategy", "Shot Trajectory Modeling", "Game Theory", "Tennis"],
    bioText: "Chairs the Tennis analytics division, overseeing scouting models, rally dynamics, and collegiate tournament strategy."
  },
  "beck-zimmerman": {
    hometown: "Manhattan Beach, CA",
    joinDate: "Fall 2024",
    favoriteTeams: ["Los Angeles Dodgers", "Los Angeles Kings", "UCLA Volleyball"],
    interests: ["Volleyball Analytics", "Rotational Defense Models", "Serve Quality Metrics", "Beach Volleyball"],
    bioText: "Chairs the Volleyball division, directing serve-receive analytics, kill efficiency metrics, and match scouting."
  },
  "anika-soitkar": {
    hometown: "San Diego, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["San Diego Wave FC", "Golden State Warriors", "UCLA Bruins"],
    interests: ["Data Journalism", "Storytelling with Data", "Interactive Visualizations", "Creative Writing"],
    bioText: "Co-leads the Data Journalism division, editing longform articles, managing editorial pipelines, and guiding visual graphics."
  },
  "alan-ruiz": {
    hometown: "Los Angeles, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["Los Angeles Lakers", "Los Angeles Dodgers", "LA Galaxy"],
    interests: ["Sports Journalism", "Graphic Design", "Editorial Strategy", "Photography"],
    bioText: "Co-leads the Data Journalism division, overseeing publication schedules, content editing, and multimedia storytelling."
  },
  "mateo-shelton": {
    hometown: "Seattle, WA",
    joinDate: "Fall 2023",
    favoriteTeams: ["Seattle Seahawks", "Seattle Mariners", "Seattle Sounders FC"],
    interests: ["Recruitment & Talent Development", "Community Building", "Sports Analytics", "Skiing"],
    bioText: "Directs BSA recruitment cycles, info sessions, applicant review, and new member onboarding across all teams."
  },
  "madeleine-curran": {
    hometown: "Newport Beach, CA",
    joinDate: "Fall 2024",
    favoriteTeams: ["Los Angeles Dodgers", "Los Angeles Rams", "UCLA Bruins"],
    interests: ["Financial Modeling", "Budget Allocation", "Club Sponsorships", "Running"],
    bioText: "Directs organization finances, semester budgeting, grant acquisitions, and financial planning for club operations."
  },
  "evana-sharma": {
    hometown: "Sunnyvale, CA",
    joinDate: "Fall 2024",
    favoriteTeams: ["Golden State Warriors", "San Francisco 49ers", "UCLA Bruins"],
    interests: ["Digital Marketing", "Social Media Strategy", "Graphic Design", "Content Creation"],
    bioText: "Co-leads marketing and branding, managing BSA's social channels, event promotion, and creative media."
  },
  "annika-gupta": {
    hometown: "Austin, TX",
    joinDate: "Fall 2024",
    favoriteTeams: ["Austin FC", "San Antonio Spurs", "UCLA Bruins"],
    interests: ["Brand Strategy", "Event Marketing", "Creative Campaigns", "Graphic Design"],
    bioText: "Co-leads marketing and outreach, directing campaign visuals, merchandise design, and digital engagement."
  },
  "kevin-baer": {
    hometown: "Los Angeles, CA",
    joinDate: "Fall 2022",
    favoriteTeams: ["Los Angeles Dodgers", "Los Angeles Lakers", "Los Angeles Rams"],
    interests: ["Sports Analytics Advising", "Machine Learning in Sports", "Alumni Mentorship", "Golf"],
    bioText: "Senior advisor to executive leadership, providing guidance on organization governance, project scope, and alumni relations."
  },
  "harsh-govindji": {
    hometown: "Orange County, CA",
    joinDate: "Fall 2022",
    favoriteTeams: ["Los Angeles Lakers", "Los Angeles Angels", "UCLA Bruins"],
    interests: ["Strategic Advising", "Quantitative Analysis", "Career Development", "Tennis"],
    bioText: "Senior advisor to executive leadership, offering strategic counsel on partnership development and technical research."
  }
};

/** Helper to retrieve bio info for any member by slug */
export function getBoardBio(slug: string): BoardBio {
  return (
    boardBios[slug] ?? {
      hometown: "Los Angeles, CA",
      joinDate: "Fall 2024",
      favoriteTeams: ["Los Angeles Dodgers", "UCLA Bruins"],
      interests: ["Sports Analytics", "Statistical Modeling", "Data Science"],
      bioText: "Active leader and contributor in Bruin Sports Analytics."
    }
  );
}
