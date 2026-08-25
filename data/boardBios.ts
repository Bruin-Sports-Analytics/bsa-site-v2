export type BoardBio = {
  hometown: string;
  joinDate: string;
  bsaGroups?: string[];
  favoriteTeams: string[];
  interests: string[];
  funFact?: string;
  bioText?: string;
};

export const boardBios: Record<string, BoardBio> = {
  "moulik-chatterjee": {
    hometown: "Chicago, IL",
    joinDate: "Winter 2025",
    bsaGroups: ["Basketball", "Data Journalism"],
    favoriteTeams: ["Chicago Bears", "Chicago Bulls", "Chicago Cubs", "Chicago Blackhawks"],
    interests: ["Music Production", "LLM Evals", "NYT & Board Games", "2K", "Golf", "Beli"],
    funFact: "Has 2 majors and 2 minors in Music Industry and Math"
  },
  "sampath-kalagarla": {
    hometown: "Andover, MA",
    joinDate: "Fall 2025",
    bsaGroups: ["Basketball"],
    favoriteTeams: ["Boston Celtics", "New England Patriots", "Boston Red Sox"],
    interests: ["Entrepreneurship", "Lifting", "2K", "Soccer"],
    funFact: "Has been to 20 US States (thanks East Coast)"
  },
  "ben-troutman": {
    hometown: "Orange County, CA",
    joinDate: "2024",
    bsaGroups: ["Baseball"],
    favoriteTeams: ["LA Angels", "LA Lakers"],
    interests: ["Indie/alternative rock", "Pickup basketball", "Hiking", "Cars"]
  },
  "vardaan-sinha": {
    hometown: "",
    joinDate: "",
    bsaGroups: [],
    favoriteTeams: [],
    interests: []
  },
  "anthony-mui": {
    hometown: "",
    joinDate: "",
    bsaGroups: [],
    favoriteTeams: [],
    interests: []
  },
  "colin-granger": {
    hometown: "Phoenix, AZ",
    joinDate: "Sophomore year",
    bsaGroups: ["Data Journalism", "Baseball"],
    favoriteTeams: ["Arizona Diamondbacks", "Phoenix Suns", "Arizona Cardinals", "UCLA Sports"],
    interests: ["Gym", "Running", "Star Wars", "MCU", "Pokemon"]
  },
  "eshaan-dhavala": {
    hometown: "",
    joinDate: "",
    bsaGroups: [],
    favoriteTeams: [],
    interests: []
  },
  "abhi-kumar": {
    hometown: "San Diego, CA",
    joinDate: "Fall 2025",
    bsaGroups: ["Football"],
    favoriteTeams: ["San Diego Padres", "Pittsburgh Steelers"],
    interests: ["Sports journalism", "Intramural sports", "Finance", "Sitcoms"]
  },
  "lucas-pichardo": {
    hometown: "Pasadena, CA",
    joinDate: "Fall 2024",
    bsaGroups: ["Data Journalism", "Basketball"],
    favoriteTeams: ["LA Lakers", "LA Dodgers", "LA Rams"],
    interests: ["Weightlifting", "Golf", "Wii Sports"]
  },
  "raja-kavasseri": {
    hometown: "Fremont, CA",
    joinDate: "Spring 2024",
    bsaGroups: ["Data Journalism", "BTC", "Basketball"],
    favoriteTeams: ["New Orleans Saints", "UCLA Basketball", "Golden State Warriors"],
    interests: ["Games", "Soccer", "Bouldering", "Trivia"]
  },
  "pavan-gudavalli": {
    hometown: "",
    joinDate: "",
    bsaGroups: [],
    favoriteTeams: [],
    interests: []
  },
  "beck-zimmerman": {
    hometown: "",
    joinDate: "",
    bsaGroups: [],
    favoriteTeams: [],
    interests: []
  },
  "anika-soitkar": {
    hometown: "Thousand Oaks, CA",
    joinDate: "Freshman year",
    bsaGroups: ["Data Journalism", "Football"],
    favoriteTeams: ["Kansas City Chiefs"],
    interests: ["Baking", "Poker", "Gym"]
  },
  "alan-ruiz": {
    hometown: "",
    joinDate: "",
    bsaGroups: [],
    favoriteTeams: [],
    interests: []
  },
  "mateo-shelton": {
    hometown: "San Jose, CA",
    joinDate: "Fall 2025",
    bsaGroups: ["Football"],
    favoriteTeams: ["SF 49ers", "Golden StateWarriors", "SF Giants", "San Jose Sharks", "Manchester City"],
    interests: ["Kickboxing", "Music"]
  },
  "madeleine-curran": {
    hometown: "",
    joinDate: "",
    bsaGroups: [],
    favoriteTeams: [],
    interests: []
  },
  "evana-sharma": {
    hometown: "",
    joinDate: "",
    bsaGroups: [],
    favoriteTeams: [],
    interests: []
  },
  "annika-gupta": {
    hometown: "",
    joinDate: "",
    bsaGroups: [],
    favoriteTeams: [],
    interests: []
  },
  "kevin-baer": {
    hometown: "Potomac, MD",
    joinDate: "Fall 2023",
    bsaGroups: ["Football", "Volleyball"],
    favoriteTeams: ["Baltimore Ravens", "Aston Villa"],
    interests: ["Musical theater", "Chess"]
  },
  "harsh-govindji": {
    hometown: "",
    joinDate: "",
    bsaGroups: [],
    favoriteTeams: [],
    interests: []
  }
};

/** Helper to retrieve bio info for any member by slug */
export function getBoardBio(slug: string): BoardBio {
  return (
    boardBios[slug] ?? {
      hometown: "",
      joinDate: "",
      bsaGroups: [],
      favoriteTeams: [],
      interests: []
    }
  );
}
