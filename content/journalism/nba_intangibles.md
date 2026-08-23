### By: Aaron Phung and Matthew Sasaki

## Introduction

Analysts tend to emphasize box score statistics such as points and rebounds when assessing the greatness of an NBA player. Because they are the only objective pieces of information recorded, statistics overshadow other methods of determining a player’s value. However, there are many ways to contribute to an NBA game that do not show up on the box score. Setting screens, hustling for loose balls, and boosting team morale during critical moments of the game are also essential to team success and can turn the tide of the game. Factors like these that are not tracked as stats are called intangibles.

The purpose of this article is to determine which NBA player provides the most intangible value to their team. Our definition of “intangible value” is how much a player contributes to a team’s win compared to the box score statistics they put up. Our first step was to collect players’ total stats recorded. We used ESPN’s fantasy basketball scoring system with a few modifications in order to receive a single number for a player’s total stats recorded. Next, we collected players’ regularized adjusted plus/minus (RAPM) as a representation of their impact on the game. RAPM first calculates the point differential of a player’s team and the opposing team while the player is on the floor. Then standard errors are accounted for by using a technique called ridge regression. A positive RAPM means that the team performed better while the player was on the floor. Next, we created a best fit line for the data. The player whose RAPM is the highest above the best fit line is deemed the one with the highest intangible value. We only looked at statistics from the 2018-2019 season to the 2020-2021 season, and we only included players who played 118+ games and averaged 20+ minutes per game during this time.

## Calculating total stats recorded

In order to determine how many stats a player contributes, we first collected their per-game stats from the past three years (2018-2019, 2019-2020, and 2020-2021 seasons). Next, we used the ESPN fantasy basketball scoring system with a few modifications to calculate each player’s statistical value. Below is our scoring system.

![Figure 1](/assets/journalism/nba_intangibles/figure-01.png)

If you are familiar with ESPN’s fantasy basketball scoring system, each block and steal is normally awarded 4 points. We lowered it to 2 points in order to match it with the point value of a turnover because all of them deny the opposing team an opportunity to score a field goal. By adding a player’s box score statistics together using our scoring system, we will get one number. For example, if a player averaged 4.2 FG, 9.6 FGA, 7.4 REB, 2.6 AST, 0.8 STL, 1.1 BLK, 1.9 TO, and 12.5 PTS, their total score would be:

**([2*4.2] - 9.6 + 7.4 + [2*2.6] + [2*0.8] + [2*1.1] - [2*1.9] + 12.5) = 23.9.**

We will refer to this calculated number for each player as “statistical value” for the remainder of the article. Below is a table of the players with the highest statistical value.

![Figure 2](/assets/journalism/nba_intangibles/figure-02.png)

## Calculating RAPM

Basketball is all about scoring more points than the other team. One common box score statistic is plus-minus, which essentially gives us the point differential while a certain player is on the court. While plus-minus may seem to be a good indicator of a player’s impact, it can often be misleading. For example, someone playing alongside Steph Curry, Klay Thompson, Kevin Durant, and Draymond Green on the 2017 Warriors may have a disproportionately high plus-minus, while someone equally as impactful that only plays in garbage time may have a disproportionately low one. RAPM attempts to correct these other factors. In short, RAPM looks to quantify a player’s contribution by accounting for things like the strength of their team or their opponents. Like plus-minus, however, it’s important to recognize that RAPM isn’t perfect. Regardless, we thought that RAPM did the best job at measuring a player’s impact without considering their box score contributions. We collected each player’s each player’s average RAPM from 2018-2021 for further analysis.

For more information on how RAPM is calculated, visit this website: [https://basketballstat.home.blog/2019/08/14/regularized-adjusted-plus-minus-rapm/](https://www.google.com/url?q=https://basketballstat.home.blog/2019/08/14/regularized-adjusted-plus-minus-rapm/&sa=D&source=editors&ust=1639347826031000&usg=AOvVaw2vaI2gt9z-B8JYFHZVOhoK)

## Statistical Value vs. RAPM Plot

With the statistical value and RAPM for each player calculated, we created a scatter plot with statistical value on the x-axis and RAPM on the y-axis. Our regression yielded an R squared coefficient of 0.33, which indicates a slightly positive but weak correlation between statistical value and RAPM. These results show that statistical value alone cannot accurately predict a player’s RAPM. While players with greater statistical value have a higher chance of having a high RAPM, it is possible for players with a low statistical value to have a high RAPM, and vice versa. Other factors that are not included in the box score must be looked at to accurately determine a player’s impact on the game.

![Figure 3](/assets/journalism/nba_intangibles/figure-03.png)

### Histogram and Scatterplot of Residual Values

![Figure 4](/assets/journalism/nba_intangibles/figure-04.png)

![Figure 5](/assets/journalism/nba_intangibles/figure-05.png)

The left scatterplot plots the statistical value on the x-axis and the residuals of each player on the y-axis. Those above the x-axis outperformed their projected RAPM based on their statistical value, while those below the x-axis underperformed. Those on the right side of the plot had a higher statistical value, and those on the left had a lower one. Looking at the below table of residuals, we can identify the top three points as Alex Caruso, Paul George, and Danny Green.

On the right, we have a histogram show that shows the distribution of the residuals. We see a pretty standard bell curve, which is to be expected. Most of the residuals were relatively close to 0, so we know that the regression worked.

## Players with the Most Intangible Value

![Figure 6](/assets/journalism/nba_intangibles/figure-06.png)

Above is a table that ranks the top 15 players with the most intangible value. Alex Caruso tops the list with an RAPM that is 4.748 points higher than his projected RAPM, which is surprising because he is not considered one of the best players in the league. While there are a few superstars on this list such as Jayson Tatum, Kawhi Leonard, and Paul George, many players on this list are role players like Joe Ingles, Duncan Robinson, and Reggie Jackson. The drastic differences in stat production between these players may be misleading. Although it appears as if these players share no similarities, there are some patterns. First, this list is mainly comprised of veterans, with ten of them being over 30 years old. In addition, many of these players are great defenders. The average defensive rating among them is 108.28. Defensive rating is the number of points allowed while a player is on the court, per 100 possessions, signifying that a lower defensive rating is better. For reference, the average defensive rating in the NBA is about 110. The last category of players on this list is known for its elite 3-point shooting. Among all the players on this list who attempted at least 500 attempts since the beginning of the 2018-2019 season, the average 3-point percentage is 39.49%. For reference, the average 3-point percentage in the NBA is about 35%. Below is a table of the 3-point percentages and 3-point attempts for the 15 players with the most intangible value (minimum 500 attempts).

![Figure 7](/assets/journalism/nba_intangibles/figure-07.png)

## Players with the Least Intangible Value

![Figure 8](/assets/journalism/nba_intangibles/figure-08.png)

We will now look at the bottom 15 players with the least intangible value for the stats they produce. Sitting at the bottom of this list is Collin Sexton with a residual of -4.860, classifying him as the player with the lowest intangible value in the NBA. Similar to the top 15 players list above, the players on this list range from superstars like Russell Westbrook to almost unknown players like Glenn Robinson III. Interestingly enough, these players also share similarities in the factors we used to compare the top 15 players. However, they occupy the opposite side of the spectrum. For example, while the top 15 players are older, 6 out of the 15 players on this list are under the age of 24 years old, and 4 are between the ages of 24 and 28. Another similarity most of these players have is their below average defensive rating. While the average defensive rating in the NBA is about 110, the average defensive rating among players on this list is 112.1. Lastly, their 3 point percentage is lower in comparison to those in the top 15. On average, the bottom 15 players shot 35.3% from 3 (minimum 500 attempts). While this isn’t necessarily a low 3 point percentage, this is about 4 percentage points lower than those in the top 15.Below is a table of the 3-point percentages and 3-point attempts of the top 15 players with the lowest RAPM (minimum 500 attempts).

![Figure 9](/assets/journalism/nba_intangibles/figure-09.png)

## Discussion

The three main traits that differentiated those who outperformed their statistical value versus those who underperformed them were age, defense, and three-point shooting.

Age was an important element that affected players’ impact on the game. We saw far more experienced players on the top 15 list than in the bottom 15. This makes sense, as most players go through an adjustment period of sorts when entering the NBA. Those that belong in the NBA eventually come into their own as they learn to adapt, both mentally and physically. Along with this, many players develop leadership skills as they gain experience. Basketball is a team sport, so having good leaders is instrumental. While they may not put up a lot of stats, being able to uplift teammates and keep locker room morale up can be just as important to winning a game.

Defense has long been an aspect of the game that has been underrepresented in traditional box scores. While our formula for statistical value accounted for steals and blocks, there is more to defense that can affect the outcome of a game. One example is taking a charge. There is much more to this simple play than a change of possession. It penalizes the opposing team with one foul, which can lead to bonus free throws. In addition, charges can cause an opposing player to get into foul trouble, could result in them playing less aggressively to avoid fouls. A charge has even more hidden value by the morale boost it gives one’s team. When taking a charge, a defending player must stand still, letting the offense make significant contact. This is often physically painful for the defending player, as they are usually the ones that end up on the floor. However, stopping the offense in such a manner can quickly change the flow of the game. The act of sacrificing one’s body for a play is something teammates can rally behind, and the effort will prompt the rest of the team to increase their effort. Taking a charge is just one of the aspects of defense that can make a noticeable impact on the game, which explains why so many great defenders have high RAPM’s for their statistical value.

The last factor we saw that separated the players on each list was 3-point shooting. In recent years, the number of 3 pointers attempted has increased significantly. Being a good 3-point shooter has its benefits: it grants more points for one possession and opens up the court for other players to drive in to the basket. Making a long-distance, high-arcing 3-pointer can also be a morale booster. On the other hand, missing a 3-pointer can have more detrimental effects than just a missed opportunity to score. If a player shoots a 3-pointer above the free throw line, they are often the person closest to the basket they are defending. Because they are most likely watching their own shot rather than getting back on defense, their team is susceptible to fast breaks if the shot misses. Therefore, not only does the team lose an opportunity to score but they also give the opposing team a chance at an easy basket.

## Conclusion

In our analysis, we focused on two statistics: our calculated statistical value and RAPM. Neither of these stats are perfect. We chose arbitrary coefficients for our statistical value equation, and RAPM definitely doesn’t completely describe a player’s impact on the game. However, for our purposes, these numbers were sufficient. For future studies, maybe a more refined statistical value equation and some combination of RAPM with other advanced stats could yield more consequential results.

Nonetheless, our analysis shows that while there is definitely a correlation between box score contributions and a player’s impact, there must be several other factors at play. Leadership, chemistry with teammates, and other personal attributes can affect a player’s performance. Also, it’s pretty much impossible to completely eliminate a player’s circumstances when evaluating their impact. This is why some players may be a hindrance on one team but shine on another. Kyle Kuzma is a great example of this. While playing for the Los Angeles Lakers last year, he was ridiculed for underperforming, averaging only 12 ppg. The Lakers finished 7th in the Western Conference in the 2020-2021 season. In the offseason, Kyle Kuzma moved to the Washington Wizards, and he seems like a completely different player. While his points per game only rose by 1 point, his team’s performance has drastically improved. Last year, the Wizards finished 8th in the Eastern Conference. In the 2021-2022 season, the Wizards are 3rd in the Eastern Conference as of December 2nd, 2021.

Kuzma’s story is just one example of why we should not judge a player’s performance on box score statistics alone. This leads to the question “What factors or combination of factors can most accurately predict a player’s impact on the game?” Based on the patterns we found when looking at the top 15 players, 3-point percentage and defensive rating may be more telling of an individual’s RAPM. It would also be interesting to see how a player’s chemistry with his team is correlated with his RAPM, although there is no direct statistic that measures this. While further investigation is needed to uncover the primary factors affecting RAPM, we hope this article will encourage fans and analysts to account for other details when determining a player’s greatness rather than relying only on box score statistics to tell the story.

### Sources

1. [*https://www.basketball-reference.com/*](https://www.google.com/url?q=https://www.basketball-reference.com/&sa=D&source=editors&ust=1639347826201000&usg=AOvVaw14_Iwliy7WcdZ-2pR-ek00) *,* [*http://nbashotcharts.com/rapm?id=-2146555570*](https://www.google.com/url?q=http://nbashotcharts.com/rapm?id%3D-2146555570&sa=D&source=editors&ust=1639347826201000&usg=AOvVaw1Xs1V_2VJj52gBlcmuLwEy)
2. [*https://basketballstat.home.blog/2019/08/14/regularized-adjusted-plus-minus-rapm/*](https://www.google.com/url?q=https://basketballstat.home.blog/2019/08/14/regularized-adjusted-plus-minus-rapm/&sa=D&source=editors&ust=1639347826202000&usg=AOvVaw1HlgjgHSpp0NXgBBgRsArn)
3. [*https://www.statmuse.com/*](https://www.google.com/url?q=https://www.statmuse.com/&sa=D&source=editors&ust=1639347826202000&usg=AOvVaw2xtUDqxAezYzADC-rG8AEx)
