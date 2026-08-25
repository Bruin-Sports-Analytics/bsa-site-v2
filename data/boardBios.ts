export type BoardBio = {
  hometown: string;
  joinDate: string;
  favoriteTeams: string[];
  interests: string[];
  funFact?: string;
  bioText?: string;
};

export const boardBios: Record<string, BoardBio> = {
  "moulik-chatterjee": {
    hometown: "Chicago, IL",
    joinDate: "Winter 2025",
    favoriteTeams: ["Chicago Bears", "Chicago Bulls", "Chicago Cubs", "Chicago Blackhawks"],
    interests: ["Music Production", "LLM Evals", "NYT & Board Games", "2K", "Golf", "Beli"],
    funFact: "Has attended games in over 15 different MLB stadiums and is on a quest to visit all 30."
  },
  "sampath-kalagarla": {
    hometown: "Pleasanton, CA",
    joinDate: "Fall 2024",
    favoriteTeams: ["Golden State Warriors", "San Francisco 49ers", "UCLA Bruins"],
    interests: ["Full-Stack Web Dev", "Basketball Analytics", "Data Infrastructure", "Pickleball"],
    funFact: "Built an interactive real-time shot chart tool that mapped over 50,000 NBA jump shots."
  },
  "ben-troutman": {
    hometown: "Los Angeles, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["Los Angeles Dodgers", "Los Angeles Lakers", "UCLA Bruins"],
    interests: ["Internal Operations", "Statistical Modeling", "Sports Economics", "Spikeball"],
    funFact: "Has never missed watching an opening day Dodgers baseball game since 2012."
  },
  "vardaan-sinha": {
    hometown: "Fremont, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["San Francisco 49ers", "Golden State Warriors", "Liverpool FC"],
    interests: ["External Partnerships", "Football Analytics", "Sponsorship Strategy", "Golf"],
    funFact: "Ran a fantasy football league with a 100-page custom constitution."
  },
  "anthony-mui": {
    hometown: "Arcadia, CA",
    joinDate: "Fall 2025",
    favoriteTeams: ["Los Angeles Dodgers", "Los Angeles Angels", "UCLA Baseball"],
    interests: ["Sabermetrics", "Pitch Tracking & Biomechanics", "Machine Learning", "Table Tennis"],
    funFact: "Can identify pitch types and spin rates by sight alone from behind the plate."
  },
  "colin-granger": {
    hometown: "San Diego, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["San Diego Padres", "Los Angeles Chargers", "UCLA Bruins"],
    interests: ["Baseball Analytics", "Defensive Shift Modeling", "Sports Betting Markets", "Surfing"],
    funFact: "Once watched 14 consecutive hours of March Madness games without moving from the couch."
  },
  "eshaan-dhavala": {
    hometown: "Cupertino, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["San Francisco 49ers", "Golden State Warriors", "Arsenal FC"],
    interests: ["NFL NextGen Stats", "Computer Vision in Sports", "Coverages & Schemes", "Hiking"],
    funFact: "Analyzed every single 4th down decision by the 49ers over a full NFL season."
  },
  "abhi-kumar": {
    hometown: "Irvine, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["Los Angeles Rams", "Los Angeles Lakers", "Tottenham Hotspur"],
    interests: ["Pass-Rush Analytics", "Expected Points Added (EPA)", "Data Visualization", "Formula 1"],
    funFact: "Collects vintage sports jerseys and owns over 25 authentic game jerseys."
  },
  "lucas-pichardo": {
    hometown: "San Antonio, TX",
    joinDate: "Fall 2023",
    favoriteTeams: ["San Antonio Spurs", "Dallas Cowboys", "Real Madrid"],
    interests: ["Shot Quality Modeling", "Lineup Synergy Analysis", "Spatial Tracking", "Weightlifting"],
    funFact: "Hit a game-winning half-court buzzer-beater in his high school intramural championship."
  },
  "raja-kavasseri": {
    hometown: "Chicago, IL",
    joinDate: "Fall 2023",
    favoriteTeams: ["Chicago Bulls", "Chicago Bears", "Chicago White Sox"],
    interests: ["Basketball Analytics", "Clutch Rating Models", "Bayesian Statistics", "Basketball Coaching"],
    funFact: "Can recite every NBA Finals MVP and championship matchup since 1980 from memory."
  },
  "pavan-gudavalli": {
    hometown: "Dallas, TX",
    joinDate: "Fall 2023",
    favoriteTeams: ["Dallas Mavericks", "Dallas Cowboys", "UCLA Tennis"],
    interests: ["Tennis Tagging & Strategy", "Shot Trajectory Modeling", "Game Theory", "Tennis"],
    funFact: "Once played a 3-hour, 38-game tiebreak tennis match in 100-degree Texas heat."
  },
  "beck-zimmerman": {
    hometown: "Manhattan Beach, CA",
    joinDate: "Fall 2024",
    favoriteTeams: ["Los Angeles Dodgers", "Los Angeles Kings", "UCLA Volleyball"],
    interests: ["Volleyball Analytics", "Rotational Defense Models", "Serve Quality Metrics", "Beach Volleyball"],
    funFact: "Played beach volleyball tournaments across the entire California coastline."
  },
  "anika-soitkar": {
    hometown: "San Diego, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["San Diego Wave FC", "Golden State Warriors", "UCLA Bruins"],
    interests: ["Data Journalism", "Storytelling with Data", "Interactive Visualizations", "Creative Writing"],
    funFact: "Wrote an investigative sports analytics feature that was cited by professional soccer analysts."
  },
  "alan-ruiz": {
    hometown: "Los Angeles, CA",
    joinDate: "Fall 2023",
    favoriteTeams: ["Los Angeles Lakers", "Los Angeles Dodgers", "LA Galaxy"],
    interests: ["Sports Journalism", "Graphic Design", "Editorial Strategy", "Photography"],
    funFact: "Photographed over 40 collegiate sporting events from the courtside press box."
  },
  "mateo-shelton": {
    hometown: "Seattle, WA",
    joinDate: "Fall 2023",
    favoriteTeams: ["Seattle Seahawks", "Seattle Mariners", "Seattle Sounders FC"],
    interests: ["Recruitment & Talent Development", "Community Building", "Sports Analytics", "Skiing"],
    funFact: "Skied down double black diamonds in four different countries."
  },
  "madeleine-curran": {
    hometown: "Newport Beach, CA",
    joinDate: "Fall 2024",
    favoriteTeams: ["Los Angeles Dodgers", "Los Angeles Rams", "UCLA Bruins"],
    interests: ["Financial Modeling", "Budget Allocation", "Club Sponsorships", "Running"],
    funFact: "Completed a half-marathon while tracking pace analytics on an interactive smartwatch dashboard."
  },
  "evana-sharma": {
    hometown: "Sunnyvale, CA",
    joinDate: "Fall 2024",
    favoriteTeams: ["Golden State Warriors", "San Francisco 49ers", "UCLA Bruins"],
    interests: ["Digital Marketing", "Social Media Strategy", "Graphic Design", "Content Creation"],
    funFact: "Created viral sports graphics that received over 1 million impressions across social media."
  },
  "annika-gupta": {
    hometown: "Austin, TX",
    joinDate: "Fall 2024",
    favoriteTeams: ["Austin FC", "San Antonio Spurs", "UCLA Bruins"],
    interests: ["Brand Strategy", "Event Marketing", "Creative Campaigns", "Graphic Design"],
    funFact: "Designed custom sports merchandise that sold out within 24 hours of release."
  },
  "kevin-baer": {
    hometown: "Los Angeles, CA",
    joinDate: "Fall 2022",
    favoriteTeams: ["Los Angeles Dodgers", "Los Angeles Lakers", "Los Angeles Rams"],
    interests: ["Sports Analytics Advising", "Machine Learning in Sports", "Alumni Mentorship", "Golf"],
    funFact: "Co-founded BSA's original predictive modeling workshop series."
  },
  "harsh-govindji": {
    hometown: "Orange County, CA",
    joinDate: "Fall 2022",
    favoriteTeams: ["Los Angeles Lakers", "Los Angeles Angels", "UCLA Bruins"],
    interests: ["Strategic Advising", "Quantitative Analysis", "Career Development", "Tennis"],
    funFact: "Mentored over 50 BSA alumni who now work across pro sports and tech."
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
      funFact: "Passionate about applying data science and analytics to sports strategy."
    }
  );
}
