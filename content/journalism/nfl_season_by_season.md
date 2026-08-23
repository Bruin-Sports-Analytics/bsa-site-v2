## Introduction

In any given NFL matchup, random factors such as poor officiating, unforeseen injuries, or dropped passes have a substantial impact on the outcome of the game. In the last NFL season, underdogs won nearly 36% of games. This gives teams and fans hope, even when facing unfavorable matchups. Following the conclusion of a season, NFL teams hope to improve upon their records through off-season roster moves and coaching hires. But are these adjustments sufficient to transform a losing team into a Superbowl contender? How drastically can a team improve from one season to the next?

In this article, we will consider the NFL team’s records from the 2000 to 2020 seasons. The 2021 season was the first year the NFL implemented a 17-game season. We will first assess the correlation between a team’s number of wins from one season to the next season. We will then consider the mean absolute difference between each team’s number of wins from one season to the next season. This will allow us to determine which NFL team has been the most volatile over the period in question, and which NFL team has been the most consistent.

We will examine the teams that have made the greatest single-season turnarounds through this 20-year period, and consider the factors that could be responsible for these turnarounds. Finally, we will consider the record and playoff results of Superbowl winners in their previous seasons.

## Season to season Correlation

![Figure 1](/assets/journalism/nfl_season_by_season/figure-01.png)

In order to assess the correlation between an NFL team’s number of wins from season to season, I created a plot of every team’s number of wins in year N + 1 against the team’s number of wins in year N. For example, the point at (1, 0) represents the Browns' 2016 1-15 record followed by their 2017 0-16 record. I included a regression line to visualize the relationship between wins in year N and wins in year N + 1.

The value of the correlation coefficient is 0.3065. This is a relatively weak positive correlation. The value of R-squared is 0.0939. This indicates that only 9.39% of the variance in a team’s number of wins from one season can be accounted for by their number of wins in the previous season.

This data suggests that there is not a strong correlation between an NFL team's records from season to season.

## Volatility

### Win totals from Season to Season for every NFL Team

![Figure 2](/assets/journalism/nfl_season_by_season/figure-02.png)

![Figure 3](/assets/journalism/nfl_season_by_season/figure-03.png)

![Figure 4](/assets/journalism/nfl_season_by_season/figure-04.png)

![Figure 5](/assets/journalism/nfl_season_by_season/figure-05.png)

![Figure 6](/assets/journalism/nfl_season_by_season/figure-06.png)

![Figure 7](/assets/journalism/nfl_season_by_season/figure-07.png)

![Figure 8](/assets/journalism/nfl_season_by_season/figure-08.png)

![Figure 9](/assets/journalism/nfl_season_by_season/figure-09.png)

In analyzing how team records vary from season to season, a logical question to pose is whether certain teams' records vary more than others. Over the past 20 seasons, which NFL team has had the most volatility, and which team has been the most consistent? We define volatility to be the mean of the absolute difference between each team's number of wins from one season to the next over the 2000-2020 seasons. The most consistent team is the least volatile team, in other words, the team with the lowest absolute difference in the number of wins from one season to the next. The mean of the absolute difference in wins from one season to the next across all NFL teams over the past 20 seasons was 2.93. In other words, a team’s number of wins from one season is on average 2.93 wins different from the number of wins in the previous season.

The Panthers had a mean absolute difference of 4.53. This was the highest in the league over this 20-season period. Therefore, the Panthers were the most volatile team during this period. This 20-season period featured 16 different starting quarterbacks for the Panthers franchise. Constant quarterback rotation could be a factor in the lack of consistency in the Panthers’ season-to-season records.

Meanwhile, the Broncos with a mean absolute difference of 2.00 were the most consistent team through the 2000-2020 seasons. It is important to note that consistency is not necessarily desirable. For example, a team like the Browns with low volatility (mean absolute difference of 2.58), but also a low average win total (4.95 per season over the 20-year period), means they have been a consistently bad team.

The highest single difference in wins from one season to the next for any NFL team over this period is 10. The Dolphins went from last place in their division at 1-15 in the 2007 NFL season to first place in their division at 11-5 in the 2008 NFL season. Up until this point, the 1998 Indianapolis Colts were the only team in NFL history to achieve a 10-game single-season turnaround. By no coincidence, this Colts turnaround occurred during Peyton Manning’s first season in Indianapolis. The Dolphins ' 10-game turnaround took place under Bill Parcels' first year as VP of football operations and Tony Sparano’s first year as head coach. This highlights the enormous impact of an NFL team’s management on its success.

On the other hand, the Houston Texans, hot off a franchise-best 12-win season, culminating in a 2012 divisional round playoff loss, suffered a 14-game losing streak to end the 2013 season at 2-14. This 10-win decline ties the season-to-season record. Unlike the Dolphins, who achieved their record improvement following notable coaching staff adjustments, there is no obvious explanation for the Texans' flop. 2012 Texans quarterback Matt Schaub was benched in week 7 of the 2013 season in favor of Case Keenum after breaking an NFL record for most consecutive games with pick-sixes.

### Worst to First

For most NFL teams, an improved record is not sufficient to count the season as a success. At the culmination of an NFL season, there is one winner and 31 losers. These 31 losers are left with nothing but the promise of a fresh start and another shot at a championship in their next season. But for certain teams, this shot may be more of a false hope. Superbowl-winning teams over the past 20 seasons averaged 10.6 wins in their previous season.

The lowest of the previous season wins of a Superbowl winner over the past 20 seasons comes from the 2000 patriots who went 5-11 a year prior to their 2001 Superbowl championship. This was uncoincidentally Tom Brady’s first season under center. This was only the beginning of an era of dominance that spanned 20 seasons. However, teams do not necessarily need a Tom Brady to achieve a Superbowl-winning turnaround. 6 of the 20 Superbowl winners in this period won the championship after missing the playoffs in their previous season.

### Notable Conclusions

In this article, we aimed to assess whether an NFL team and its fan base should have hope for next year following the conclusion of a disappointing season. We did not find there to be a strong correlation between a team’s win total from one season to the next. We found that an NFL team’s record from one season differs on average by 2.93 from its record in the previous season. Based on this data, it is not uncommon for a team to significantly improve their record from one season to the next.

We also found that 30% of Superbowl winners from the period in question won the championship following a season in which they missed the playoffs. While the Dolphins’ 10-game turnaround may have been an anomaly, key injuries and player acquisitions lead to drastic differences in teams’ records from season to season. Therefore, while each season culminates in 31 disappointed fan bases, each season opens with 32 Superbowl contenders.

[*https://www.sportingnews.com/us/nfl/news/tom-brady-nfl-first-start-colts-peyton-manning/9q8ynne217gq1oxt8r8w5zdfh*](https://www.sportingnews.com/us/nfl/news/tom-brady-nfl-first-start-colts-peyton-manning/9q8ynne217gq1oxt8r8w5zdfh)

[*https://milehighsports.com/happy-anniversary-to-the-denver-broncos-their-super-bowl-50-win-and-peyton-mannings-final-game/*](https://milehighsports.com/happy-anniversary-to-the-denver-broncos-their-super-bowl-50-win-and-peyton-mannings-final-game/)

[*https://www.pro-football-reference.com/years/*](https://www.pro-football-reference.com/years/)
