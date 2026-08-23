## Introduction

A breakout season is a phenomenon where a player, seemingly out of nowhere, performs to a much greater standard than previously believed to be within their capabilities. This is not exclusive to a specific sport as most, if not all, recorded competitive sports have seen an athlete “breakout” and achieve a much higher level of competition.

However in the case of basketball and the NBA, a sport with an electrifying 75 year history, we have seen numerous breakout stars break barriers and make major waves in the league. Front cover superstars such as Giannis Antetokounmpo, James Harden, or Jimmy Butler didn’t start out as all time great talents. These players and many more saw sudden surges in productivity, seemingly flipping their careers over and becoming the new generation of legends.

With these breakout performances come a breakthrough of questions: How can we define a breakout season? What are the common features or trends seen within breakout stars? And, if possible, can we predict a breakout NBA season?

## Methodology

### Defining a Breakout Season

Our first glaring concern is what defines a breakout season. There is no official definition nor criteria for what is considered an NBA “breakout season.” As viewers we usually judge based on our own subjective criteria and deem the labels accordingly. While many like to look at basic stats such as points, rebounds, or assists per game, I think a more effective method would be to look at their PER, or Player Efficiency Rating.

By definition, ‘The player efficiency rating (PER) is John Hollinger's all-in-one basketball rating, which attempts to collect or boil down all of a player's contributions into one number. Using a detailed formula, Hollinger developed a system that rates every player's statistical performance. PER strives to measure a player's per-minute performance, while adjusting for pace. A league-average PER is always 15.00, which permits comparisons of player performance across seasons.

PER takes into account positive results, including field goals, free throws, 3-pointers, assists, rebounds, blocks and steals and negative results, including missed shots, turnovers and personal fouls. The formula adds positive stats and subtracts negative ones through a statistical point value system. The rating for each player is then adjusted to a per-minute basis so that, for example, substitutes can be compared with starters in playing time debates. It is also adjusted for the team's pace. In the end, one number sums up the players' statistical accomplishments for that season.’ (Wikipedia)

### Methods of Analysis

We will select a group of about 25-30 players who have had a breakout season and gather their stats from both their breakout season as well as their previous season. We mean to look for trends in our data through focusing on a variety of these players stats including:

- Player Efficiency Rating
- Usage Ratings
- Team Composition
- Active Years and Age
- Position

We will need to focus on the differences in these stats between their prior and breakout season. Using different forms of analyses and visualizations, we will try to identify a certain trend or pattern between these players which may give us insight as to what goes into predicting a breakout season for an NBA player.

## Analysis

### Who Are Our Candidates

In order to find the potential candidates we first must group our data for each unique player and subset the data to those who have played at least two seasons. First and foremost, players before the 1952 season will not be considered due to the PER statistic not being created yet. In order to account for performance improvement due to injury or lack of games played, we will also subset the players to have played at least 50 games in the season. Cleaning our data we now have 2881 potential candidates.

The next step of action is to look at all of these players and record their biggest PER jump, that is, their greatest season of PER improvement. Looking at our PER differentials we see the following distribution:

![Figure 1](/assets/journalism/nba-breakouts/figure-01.png)

From this visualization, we can clearly see that most players see large improvements in PER, with very few players having seasons of improving by over 7. Now we must further quantify a breakout season by imposing a minimum PER in order to be considered a breakout season. As previously discussed, the league average PER is always 15 with some of the highest PER seasons hovering around 30; hence I believe a good benchmark to impose a ‘good enough season’ would be a PER score of 19. Looking at our biggest breakout seasons we are left with the following players:

![Figure 2](/assets/journalism/nba-breakouts/figure-02.png)

And we are left with 289 potential breakout seasons in the entirety of NBA history (of available data). Finally, we can use a benchmark of being in the top 20% of all PER differentials in order to be considered a breakout season. For more familiar names we can see the best breakout seasons since the 2000s:

![Figure 3](/assets/journalism/nba-breakouts/figure-03.png)

Imposing our 80% threshold of PER differentials we are left with exactly 120 breakout seasons as defined by our parameters, with the mark of a breakout season being a PER increase of 4.1 or higher.

### What Does the Data Show

Looking at our data, the first note of interest is the distributions of age and position for our breakout seasons.

![Figure 4](/assets/journalism/nba-breakouts/figure-04.png)

From our basic bar graph we can see that interestingly enough the extremes come in the two ‘big man’ positions. Looking at the age distributions versus our different positions we find:

![Figure 5](/assets/journalism/nba-breakouts/figure-05.png)

From our visual we can see that our age distributions for centers and shooting guards are bimodal with a large spike at age 23 and 24 and another at age 27 and 28 respectively. Small forwards have the most varied distribution being centered at the young age of 21 and having a long right tail. Power forwards have by far the most symmetrical and unimodal distribution being centered at around 24 as well. In general, while we do see different variabilities of ages between our different positions, the key takeaway here is how all of our distributions tend to center at around age 22-24. This makes sense as young players often need a few years to develop to fully reach their potential and make a jump in their performance.

In terms of other factors of interest, we found that around 28% of all players saw a team change between their biggest season improvement. Many say that a new team can change a player, so it may be interesting to note that team change can influence a player’s likelihood of breaking out as we’ve seen with stars such as Brandon Ingram or James Harden.

![Figure 6](/assets/journalism/nba-breakouts/figure-06.png)

![Figure 7](/assets/journalism/nba-breakouts/figure-07.png)

Looking at minutes and usage, we see that when comparing the minutes and usage of players before and after their breakout seasons, we tend to find noticeably higher stats for the breakout athletes. It is no surprise that players can break out when suddenly having more expected out of them in terms of time and productivity on the court. In any case, these were the stars that rose to that challenge.

![Figure 8](/assets/journalism/nba-breakouts/figure-08.png)

![Figure 9](/assets/journalism/nba-breakouts/figure-09.png)

When factoring the team change we see some more observations of note. We can see that our team change density distributions are more right skewed for both minutes and usage, implying that these players came to a new team and in one way or another had to produce even more on a new team.

## Conclusion and Predictive Analysis

So how exactly can we predict a breakout season? Though this question is still a difficult and nuanced one, we do have some evidence that we can use for future predictions. For one, it was hardly the case where the breakout athlete jumped from a highly below average player to a star overnight. Usually before the big leap in production the player was already gradually improving or has been an established solid player. Additionally, young and developing players have been seen to be a majority case in this subject matter, and thus it’ll be useful to watch the performance and improvement of players around 22 to 25 years old. As these players improve and develop they’ll see more usage and that’s where we can choose our potential candidates. Obviously, the case of a team switch is another factor to consider as players may be seen to pick up more responsibility in their new role. In any case, closely watching the interactions between team success and composition can be something to consider in these scenarios.

Applying these conditions to current players this season, we are left with a handful of breakout prospects for the 2024 NBA season. In particular, I predict that Tyrese Maxey of the Philadelphia 76ers is a great candidate for a breakout season. Being a young player on a strong playoff contending team, we have seen him develop greatly in his first three years. He’s only gotten better and with the combination of James Harden wanting out of Philadelphia and a hot postseason, I believe he’ll be faced with a much larger load of responsibility this next season.

I think another great potential candidate is Scottie Barnes of the Toronto Raptors, a 21 year old explosive and dynamic player. We have seen flashes of brilliance from him since his rookie season and he seems to be constantly improving and willing to rise up to any challenge. Trade rumors seem to suggest a potential rebuild in Toronto, yet the Raptors have disclosed no intentions of releasing Barnes from the team. It is clear that Scottie is special and has superstar potential and I believe that the Raptors want to polish this talent moving forward. This next season I expect Barnes to see much greater usage and I’m excited to see where he goes from here.

Ultimately, the NBA is unpredictable. From trades to injuries to everything in between, we cannot expect a formula to accurately predict which player will break out and when. However, through statistical trends and modeling, we can learn and observe which factors may play a role. These explorations are what make sports so interesting; while we may have our breakout picks based on statistical evidence, history has shown that anybody can make the stars align and show the world their capabilities.

[https://www.basketball-reference.com/leagues/NBA_2023_totals.html](https://www.basketball-reference.com/leagues/NBA_2023_totals.html)

[https://www.kaggle.com/datasets/drgilermo/nba-players-stats?resource=download&select=Seasons_Stats.csv](https://www.kaggle.com/datasets/drgilermo/nba-players-stats?resource=download&select=Seasons_Stats.csv)

[https://en.wikipedia.org/wiki/Player_efficiency_rating#:~:text=PER%20takes%20into%20account%20positive,a%20statistical%20point%20value%20system](https://en.wikipedia.org/wiki/Player_efficiency_rating#:~:text=PER%20takes%20into%20account%20positive,a%20statistical%20point%20value%20system).

[https://www.basketball-reference.com/leagues/NBA_2023_advanced.html](https://www.basketball-reference.com/leagues/NBA_2023_advanced.html)
