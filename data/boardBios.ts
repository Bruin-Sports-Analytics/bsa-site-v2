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
    funFact: "I can duel anyone in a Suits quote-off"
  },
  "sampath-kalagarla": {
    hometown: "Andover, MA",
    joinDate: "Fall 2025",
    bsaGroups: ["Basketball"],
    favoriteTeams: ["Boston Celtics", "New England Patriots", "Boston Red Sox"],
    interests: ["Entrepreneurship", "Lifting", "2K", "Soccer"],
    funFact: "I can solve a Megaminx (12-sided Rubik's cube)"
  },
  "ben-troutman": {
    hometown: "Orange County, CA",
    joinDate: "Fall 2024",
    bsaGroups: ["Baseball"],
    favoriteTeams: ["LA Angels", "LA Lakers"],
    interests: ["Indie/Alternative Rock", "Pickup Basketball", "Hiking", "Cars"],
    funFact: "I know the capital of every country"
  },
  "vardaan-sinha": {
    hometown: "San Diego, CA",
    joinDate: "Fall 2024",
    bsaGroups: ["Football"],
    favoriteTeams: ["New England Patriots", "LA Lakers", "San Diego Padres"],
    interests: ["Cricket"],
    funFact: "I worked with the Knicks front office this summer!"
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
    joinDate: "Fall 2024",
    bsaGroups: ["Data Journalism", "Baseball"],
    favoriteTeams: ["Arizona Diamondbacks", "Phoenix Suns", "Arizona Cardinals", "UCLA Sports"],
    interests: ["Gym", "Running", "Star Wars", "MCU", "Pokémon"],
    funFact: "I was at the game where UCLA legend Josh Rosen made his regular season debut"
  },
  "eshaan-dhavala": {
    hometown: "Prior Lake, MN",
    joinDate: "Spring 2025",
    bsaGroups: ["Tennis Scouting", "Football Research"],
    favoriteTeams: [],
    interests: ["Video Games", "Space", "Music"],
    funFact: "I am addicted to Taco Bell"
  },
  "abhi-kumar": {
    hometown: "San Diego, CA",
    joinDate: "Fall 2025",
    bsaGroups: ["Football"],
    favoriteTeams: ["San Diego Padres", "Pittsburgh Steelers"],
    interests: ["Sports Journalism", "Intramural Sports", "Finance", "Sitcoms"],
    funFact: "I have a 6 handicap in golf"
  },
  "lucas-pichardo": {
    hometown: "Pasadena, CA",
    joinDate: "Fall 2024",
    bsaGroups: ["Data Journalism", "Basketball"],
    favoriteTeams: ["LA Lakers", "LA Dodgers", "LA Rams"],
    interests: ["Weightlifting", "Golf", "Wii Sports"],
    funFact: "I’m a practice player for our women’s basketball team"
  },
  "raja-kavasseri": {
    hometown: "Fremont, CA",
    joinDate: "Spring 2024",
    bsaGroups: ["Data Journalism", "BTC", "Basketball"],
    favoriteTeams: ["New Orleans Saints", "UCLA Basketball", "Golden State Warriors"],
    interests: ["Video & Board Games", "Soccer", "Bouldering", "Trivia"],
    funFact: "I’ve seen the northern lights 4 times"
  },
  "pavan-gudavalli": {
    hometown: "Boulder, CO",
    joinDate: "Fall 2023",
    bsaGroups: ["Tennis"],
    favoriteTeams: ["Brighton", "Denver Broncos", "Denver Nuggets"],
    interests: ["Golf", "Brawl Stars"]
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
    joinDate: "Fall 2024",
    bsaGroups: ["Data Journalism", "Football"],
    favoriteTeams: ["Kansas City Chiefs"],
    interests: ["Baking", "Poker", "Gym"],
    funFact: "I’ve had a licensed baking business for 6 years"
  },
  "alan-ruiz": {
    hometown: "Granada Hills, CA",
    joinDate: "Fall 2025",
    bsaGroups: ["Data Journalism", "Baseball"],
    favoriteTeams: ["LA Dodgers", "LA Rams", "LA Lakers"],
    interests: ["Nature & Animals", "Star Wars & Marvel", "Singing"],
    funFact: "I created a social media platform called “All Things Dodgers” to present sports analysis on my favorite team since 2023."
  },
  "mateo-shelton": {
    hometown: "San Jose, CA",
    joinDate: "Fall 2025",
    bsaGroups: ["Football"],
    favoriteTeams: ["San Francisco 49ers", "Golden State Warriors", "San Francisco Giants", "San Jose Sharks", "Manchester City"],
    interests: ["Kickboxing", "Music"],
    funFact: "I have the same birthday as LeBron and Tiger Woods"
  },
  "madeleine-curran": {
    hometown: "",
    joinDate: "",
    bsaGroups: [],
    favoriteTeams: [],
    interests: []
  },
  "evana-sharma": {
    hometown: "Sacramento, CA",
    joinDate: "Fall 2025",
    bsaGroups: ["Data Journalism", "Marketing"],
    favoriteTeams: ["Golden State Warriors"],
    interests: ["Tennis", "Pickleball", "Basketball"],
    funFact: "I randomly met Marcello Hernández from SNL while I was in New York!"
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
    interests: ["Musical Theater", "Chess"],
    funFact: "I love the Sydney Opera House!"
  },
  "harsh-govindji": {
    hometown: "Bakersfield, CA",
    joinDate: "Fall 2024",
    bsaGroups: ["Football", "Research", "Basketball"],
    favoriteTeams: ["Miami Heat"],
    interests: ["Golf", "Lifting", "Cooking"],
    funFact: "I can solve a Rubik’s cube in 15 seconds"
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
