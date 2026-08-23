### By Matthew Sasaki

Part of what makes the NBA Draft so special is the controversy and disagreements that arise over player evaluations. In ranking players, draftniks rely primarily on easily quantifiable metrics like college statistics and measurables. In general, players that put up bigger numbers tend to go higher in the draft. Also, we tend to see a large number of players from certain colleges like Kentucky, Duke and Kansas enter the draft and get drafted in the early lottery. However, every year we see exceptions to both these rules. For example, this year, Antoine Davis, a senior guard for Detroit Mercy, is set to enter the NBA draft. Davis, who is approaching the all time collegiate scoring record, can’t even be found on most draft boards. Why is this?

![Figure 1](/assets/journalism/draft-conferences/figure-01.jpg)

Davis is one of many high scoring collegiate superstars that finds himself on the outside looking in at higher touted college prospects like Baylor’s Keyonte George and Alabama’s Brandon Miller. Davis’ main drawback is his lack of competition. Davis plays in the Horizon League, while George and Miller compete against future NBA players’ weekly in the Big 12 and SEC respectively. As seen in the table below, there’s a massive gap in average strength of schedule between the Power 6 conferences and the rest of the conferences. We define the Power 6 conferences as the 6 high major basketball conferences: the Big 12, the Big 10, the ACC, the SEC, the Pac 12, and the Big East. While Davis may be putting up big scoring numbers, his counterparts in more competitive conferences are putting up solid stats against far better competition.

![Figure 2](/assets/journalism/draft-conferences/figure-02.jpg)

This trend isn’t a new one. As can be seen in the pie chart below, over 75% of the college players drafted since 2006 have come from one of the Power 6 conferences. Further, players from these conferences have produced far more win shares than those from every other conference combined. For this reason, we see top players from lesser conferences transfer to more competitive conferences every year in an attempt to boost their draft stock. Without even looking at the numbers, it’s obvious that NBA teams have their preferences when it comes to where a prospect played college ball. How then can we quantify this preference?

![Figure 3](/assets/journalism/draft-conferences/figure-03.jpg)

## The Regression

To quantify this, I scraped draft data from all the NBA drafts since 2006, which year the NBA disallowed high school players from entering the draft. Since 2006, 821 college players have been drafted. For this analysis, we look at the last college a player played for in considering what conference they played in. After doing this, I ran a linear regression using the following college stats/factors as predictors: average minutes, field goal percentage, two point percentage, three point percentage, free throw percentage, rebounds per game, assists per game, steals per game, blocks per game, turnovers per game, and points per game to give a rough estimate of a player’s statistical impact. In addition to these, another variable was created called college tier, in which each player was put into one of a 7 categories based on their college conference: Big 10, Pac 12, ACC, SEC, Big 12, Big East, and Other. The dependent variable for this regression was draft pick. After running this regression, the below coefficients for each of the conference tiers were recorded.

![Figure 4](/assets/journalism/draft-conferences/figure-04.png)

These coefficients measure the average change in draft position for a player with equal statistics based on their conference. Therefore, you’d expect a player from the Big 12 to be drafted around 3 picks earlier than one in the Big East with equal statistics, and over 11 picks higher than one from the “Other” conferences. Based on this, it would appear that there is a clear bias for players from the top 6 conferences.

![Figure 5](/assets/journalism/draft-conferences/figure-05.jpg)

## Is this Bias Justified?

To accompany this analysis, I ran a similar regression with the same predictors but a new response variable: total win shares. The bias in draft perception was clear, and I wanted to see if this big conference bias was justified. After running this regression, the following coefficients were recorded.

![Figure 6](/assets/journalism/draft-conferences/figure-06.png)

This means that on average, for players with equivalent statistics, you would expect a player from the Big East to garner about 5 more win shares over the course of their NBA career than one from the Big 12, and around 8 more win shares than one from the “Other” conferences. While the players from non P6 conferences again found themselves at the bottom, the distribution of win share coefficients is far more balanced than that of the draft pick coefficients.

## Analysis

While the initial regression shows that bigger conferences do tend to produce players that are drafted higher, there are several other factors to consider that weren’t captured in this regression. First and foremost, statistics aren’t the only metric used to evaluate draft prospects. Often, other traits like measurables (height and wingspan) and intangibles are just as important. In running a regression with just the stats as predictors and the draft pick as the response, we end up with an R squared of around 0.25, which means that only a quarter of the variability in where a player is drafted can be attributed to their statistics. Also, as was previously mentioned, top players in non Power 6 conferences often end up transferring to higher level schools. In other words, we should expect the quality of players in Power 6 conferences to be higher in general, and should therefore be drafted higher regardless of conference. However, there is something to be said about prospect readiness and where they played in college. Since 2006, Ja Morant and Tyreke Evans are the only two players to win rookie of the year that came from a Non P6 program. This excludes Lamelo Ball and Luka Doncic, who played overseas prior to getting drafted. Last year, Scottie Barnes, out of Florida State, won over Cade Cunningham and Evan Mobley, who were drafted out of Oklahoma State and USC respectively. Note that all three rookies were drafted out of Power 6 conferences. More often than not these high major programs are producing more players that are able to make an impact from day one, as they likely need less time to acclimate to the higher levels of athleticism/skill. Overall, while collegiate level of competition shouldn’t be a deciding factor in evaluating prospects, it is definitely something that should be at least looked at, especially when comparing players with similar statistics and physical characteristics.

**Sources:** https://basketball-reference.com/
