### By: Aarnav Dharia, Aditya Malhotra, and Samir Joshi

## Introduction

With about 20 games left in the 2025–26 NBA regular season, the standings and data reveal contrary tales. More specifically, two teams have distinguished themselves from the rest of the competition, and several others are winning games their numbers say they shouldn't. Among both conferences, a handful of aspirant teams are separated by just five games or fewer. These teams will battle over the next six weeks for a spot in the playoffs, who survives the play-in, and who goes home.

In this article, we identified every game result from the 2025–26 season, pulled advanced team metrics from Basketball Reference, and built a regression model to identify which statistics serve as accurate indicators of success. We then used each team's recent performances and remaining schedule difficulty to project how the standings will pan out at the end of the season. What the data reveals may differ greatly from the expectations you may have for your favorite team and some of the league’s best and worst teams this season.

![Figure 1: Eastern Conference Seeding Trajectory for the top 8 seeds (as of March 2026)](/assets/journalism/beyond-the-standings-using-data-to-predict-the-nba-playoff-race/figure-01.png)

![Figure 2: Western Conference Seeding Trajectory for the top 8 seeds (as of March 2026)](/assets/journalism/beyond-the-standings-using-data-to-predict-the-nba-playoff-race/figure-02.png)

## Key Terms and Metrics

| **Key Term** | **Definition** |
| --- | --- |
| **Net Rating (NRtg)** | Points scored minus points allowed per 100 possessions. The single best measurement of how good a team actually is, independent of pace. A team with a +10 NRtg outscores opponents by 10 points every 100 possessions |
| **Offensive Rating (ORtg) / Defensive Rating (DRtg)** | The offensive and defensive components of Net Rating. ORtg measures points scored and DRtg measures points allowed per 100 possessions. Lower DRtg = better defense. |
| **Simple Rating System (SRS)** | A Basketball Reference metric that combines a team's average point differential with strength of schedule in its assessment of team success. It accounts for the quality of opponents, paints a clearer picture than a win-loss record for comparing teams across conferences. |
| **Strength of Schedule (SoS)** | The average win percentage of a team's remaining opponents. A higher SoS means a harder road to the end of the regular season. |
| **Win Percentage (Last 15 Games)** | A team's win rate over their most recent 15 games. Win percentage (Last 15 Games) is true to recent performance rather than season-long win percentage as it reflects current roster health, momentum, and form. |
| **Regression Model** **(R²)** | A measure of how well a statistical model explains the data. Our model achieves R² = 0.942, meaning it accounts for 94.2% of the variation in team win totals using just six metrics: Net Rating, Offensive Rating, Defensive Rating, Pace, SoS, and Point Differential. |

### Key Term

### Definition

### Net Rating (NRtg)

Points scored minus points allowed per 100 possessions. The single best measurement of how good a team actually is, independent of pace. A team with a +10 NRtg outscores opponents by 10 points every 100 possessions

### Offensive Rating (ORtg) / Defensive Rating (DRtg)

The offensive and defensive components of Net Rating. ORtg measures points scored and DRtg measures points allowed per 100 possessions. Lower DRtg = better defense.

### Simple Rating System (SRS)

A Basketball Reference metric that combines a team's average point differential with strength of schedule in its assessment of team success. It accounts for the quality of opponents, paints a clearer picture than a win-loss record for comparing teams across conferences.

### Strength of Schedule (SoS)

The average win percentage of a team's remaining opponents. A higher SoS means a harder road to the end of the regular season.

### Win Percentage (Last 15 Games)

A team's win rate over their most recent 15 games. Win percentage (Last 15 Games) is true to recent performance rather than season-long win percentage as it reflects current roster health, momentum, and form.

**Regression Model** **(R²)**

A measure of how well a statistical model explains the data. Our model achieves R² = 0.942, meaning it accounts for 94.2% of the variation in team win totals using just six metrics: Net Rating, Offensive Rating, Defensive Rating, Pace, SoS, and Point Differential.

## Net Rating vs. Wins: What the Standings Aren't Telling You

![Figure 3: Predicted vs. Actual Wins Model for both conferences](/assets/journalism/beyond-the-standings-using-data-to-predict-the-nba-playoff-race/figure-03.png)

The strongest estimator of wins is not points per game, win streaks, or star power- it's Net Rating. Our regression model, which uses NRtg alongside five other advanced metrics, explains 94.2% of the variation in team win totals across the league this season. The relationship is nearly linear, in that for every additional point of Net Rating, a team can expect roughly two to three more wins.

The model, however, also reveals who is and isn't exceeding their metric expectations. The Detroit Pistons sit at 45 wins and lead the Eastern Conference, but their Net Rating of +7.9 is actually lower than Boston's +8.3. The model predicts the Pistons should have around 42 wins, but they have 45. That three-win gap is the largest positive outlier in the East, suggesting Detroit has been winning a majority of its close games. The question heading into the playoffs is whether that reflects consistent and replicable clutch performance or unsustainable variance.

On the other hand, the Los Angeles Lakers (+0.5 NRtg) are projected to be better than their current 36-24 record suggests, while the Denver Nuggets (+4.4 NRtg) are projected to win fewer games than their record implies. Denver’s advanced numbers are good, but a lackluster stretch of performances and a challenging remaining schedule are pulling down their projection.

## Remaining Schedule Difficulty: Who Has the Hardest Road Left?

![Figure 4: Remaining Schedule Difficulty vs. Current Win %](/assets/journalism/beyond-the-standings-using-data-to-predict-the-nba-playoff-race/figure-04.png)

Not all remaining schedules are created equal. A team cruising to the 6-seed with 22 games left against lottery opponents is in a very different position than a team fighting for the same seed against playoff-caliber competition. We calculated each team's remaining strength of schedule by averaging the current win percentage of every opponent left on its schedule.

Denver faces the hardest remaining slate in the Western Conference, with their opponents averaging a .550 win percentage. Paired with a win percentage (last 15 games) of just 47%, the Nuggets are the team most likely to slip in the standings over the final stretch. While they currently hold the 5-seed, our model drops them to 6 just behind the Lakers.

Contrastingly, the Portland Trailblazers have the easiest remaining schedule in the West (.423 SoS), which gives them a better chance of holding the 10-seed than their recent performances would suggest.

In the East, the Charlotte Hornets and Indiana Pacers face the toughest remaining schedules, while the Washington Wizards and Brooklyn Nets — who are already out of playoff contention — have the lightest remaining loads in the conference.

The SoS adjustment in our projection model uses metrics to project the standings accurately. The Hornets, who face a difficult remaining schedule, still rise in the projection because their recent form (80% win rate in their last 15 games) more than offsets their SoS.

The Dallas Mavericks, with a 13% win percentage (last 15 games) and a remaining SoS above .500, see the most dramatic downward revision of any team in the model.

## Projected Final Seedings: Where Everyone Lands

![Figure 5: 2025-26 NBA Projected Final Standings](/assets/journalism/beyond-the-standings-using-data-to-predict-the-nba-playoff-race/figure-05.png)

Combining current records, recent performance, and remaining schedule difficulty, our model produces a projected final standings for both conferences. The top of each conference is statistically guaranteed, with Oklahoma City (projected 61 wins) and Detroit (projected 63 wins) running away from their respective competitors. But from seeds 3 through 10 in both conferences, disruption is not only possible, but might be probable.

**Eastern Conference:** Detroit and Boston have secured the top two seeds. New York, Cleveland, Toronto, and Philadelphia round out the playoff picture. However, the play-in race is the most interesting story in the East: Charlotte (80% last-15 win rate) bounces Atlanta for the 9-seed, while Orlando edges Miami for the 7-seed by a fraction of a win. Milwaukee, at just 26-34 with a -4.3 Net Rating, are mathematically eliminated from the play-in by the model, as their underlying numbers are simply too poor to recover from.

**Western Conference:** Oklahoma and San Antonio are in a tier of their own. Houston, Minnesota, and Denver clump tightly at the 3 through 5 seeds, with Los Angeles sneaking past Denver for seed 5 based on recent momentum. The Western Conference play-in is a four-team scramble: Phoenix holds seed 7, but the Clippers (trending up, .460 remaining SoS) surpass Golden State (trending down, 40% last-15 form) for the 8-seed. Dallas has the most dramatic fall-off story in the league. Having just a 13% win rate over their last 15 games drops them below New Orleans and out of any realistic play-in conversations.

The model gives every play-in team in both conferences roughly a coin-flip chance of moving up or down one seed before the season ends. What happens over the next three weeks, more than anything that happened in October, will determine who faces whom in the first round.

## Sources

Standings:

- [https://www.basketball-reference.com/leagues/NBA_2026_standings.html](https://www.basketball-reference.com/leagues/NBA_2026_standings.html)

Game logs (by month):

- [https://www.basketball-reference.com/leagues/NBA_2026_games-october.html](https://www.basketball-reference.com/leagues/NBA_2026_games-october.html)
- [https://www.basketball-reference.com/leagues/NBA_2026_games-november.html](https://www.basketball-reference.com/leagues/NBA_2026_games-november.html)
- [https://www.basketball-reference.com/leagues/NBA_2026_games-december.html](https://www.basketball-reference.com/leagues/NBA_2026_games-december.html)
- [https://www.basketball-reference.com/leagues/NBA_2026_games-january.html](https://www.basketball-reference.com/leagues/NBA_2026_games-january.html)
- [https://www.basketball-reference.com/leagues/NBA_2026_games-february.html](https://www.basketball-reference.com/leagues/NBA_2026_games-february.html)
- [https://www.basketball-reference.com/leagues/NBA_2026_games-march.html](https://www.basketball-reference.com/leagues/NBA_2026_games-march.html)

Advanced team stats:

- [https://www.basketball-reference.com/leagues/NBA_2026.html](https://www.basketball-reference.com/leagues/NBA_2026.html)

Remaining schedule:

- [https://www.basketball-reference.com/leagues/NBA_2026_games-march.html](https://www.basketball-reference.com/leagues/NBA_2026_games-march.html)
- [https://www.basketball-reference.com/leagues/NBA_2026_games-april.html](https://www.basketball-reference.com/leagues/NBA_2026_games-april.html)
