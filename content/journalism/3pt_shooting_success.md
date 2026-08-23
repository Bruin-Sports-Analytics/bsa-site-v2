### By: Ryan Quach and Surya Dham

### Introduction

To an NBA fan from 1946, today’s shooting would be completely unrecognizable. Whether one considers the volume, the form, or the type of shot, we have seen a dramatic shift from the origins. The focus of this article will be on the latter of these aspects, specifically the three-point shot.

First introduced in the NBA in 1979, the three-point shot initially had no tangible impact. Practically no team employed it to any meaningful extent, and it was even considered by some to be a meaningless fluke in the game.

Slowly, however, this perception began to change as the decades passed. Beginning in the mid-to-late 1980s, the proportion of three-point shooting increased through the 1990s at a much higher rate before slowing down in the 2000s. Players like Larry Bird, Reggie Miller, and Dale Ellis popularized the three point shot by using it often and leading their respective teams to success. Perimeter shooting was now far more common than in the infancy of the NBA, but it would not be until the 2010s that the three-point shot would reach its peak.

![Figure 1](/assets/journalism/3pt_shooting_success/figure-01.png)

During this decade, the extent of three-point shooting nearly doubled from its level in 2010, with teams taking more than 38% of their shots from the perimeter by about 2020. Perhaps the best example of such a team would be the Golden State Warriors. Propelled by Stephen Curry and Klay Thompson—arguably the greatest shooting duo of all time—the Warriors would form a dominant dynasty (albeit one somewhat short-lived) and win three championships during the second half of the 2010s. Known as the Splash Brothers, they are often credited with revolutionizing the game of basketball by displaying the value of the three point shot, ball and player movement, and spacing as compared to older strategies like the triangle offence. They forced the league to adapt to this playstyle. Other teams would attempt to replicate their success, such as the Houston Rockets and their Moreyball strategy, and three-point shooting would continue to grow. Currently, three-point shooting specialists like Duncan Robinson, Joe Harris, and Buddy Hield are a hot commodity in the NBA and are signing much larger deals than other role players.

![Figure 2](/assets/journalism/3pt_shooting_success/figure-02.png)

As such, few argue against the claim three-point shooting is now far more common than during the past. However, a question that some have raised over this trend is whether or not this three-point shooting has led to team success on a consistent and significant basis.

## Data

To answer this question, we decided to collect data on three-point shooting from FiveThirtyEight, Kaggle, and Basketball Reference.

During the first steps of our data collection, the main issue we faced was that we were unable to locate a single dataset that contained all of the actual three-point field goal percentages for each team over the right time periods (2002-2007 and 2015-2017). Indeed, we were only able to find these statistics for the 2020 season, as well as individual datasets for each team in each season. Consequently, we were forced to find a way to calculate these statistics ourselves using the Kaggle dataset.

This dataset contains the three-point statistics for every player, but not for every team. However, there was a way to calculate team statistics from the player statistics. First, we filtered out players who were not in the right time period, and then group the players together by team. From there, we would take the average of their 3P% by finding the total number of three-point shots they made, and then dividing that amount by the total number of three-point attempts. Using this method, we were able to manually calculate the team three-point shooting statistics for the Kaggle dataset. And as for three-point shooting volume, we would divide the amount of three-point shots by the total amount of shot attempts.

In the case of the Basketball Reference dataset, we were able to immediately find team statistics for all the basic offensive and defensive metrics for just the 2020-2021 season, which eliminated many of the problems that using a more dated dataset presented. We were able to extract solely the three point data for the teams and use this information in our graphics.

Next, we found a dataset that included the advanced Win/Loss statistics for each team. We extracted the win percentage for each team and used this information in our graphics as well. Finally, we calculated the median win percentage and three point shooting percentage for each team and used this as a metric to compare the teams and draw our conclusions. We used median instead of mean because the disparity between the win loss and three point percentage of teams at the top and the bottom would skew the results one way or the other, especially considering the fact that this dataset includes only one year.

Once we collected our data, we decided to measure the association between three-point shooting and win percentage through ordinary least squares regression.

## Analysis/Results

![Figure 3](/assets/journalism/3pt_shooting_success/figure-03.png)

The first graphic we produced displays the association between the volume of three-point shooting and win percentage from 2002 to 2007. During these years, the game was less oriented around the three-point shot, and it was more “traditional” per se. As one may tell, there is very little correlation between the two variables with an r-squared of 0.03 for the whole time period, which is understandable given that there are so many other factors that could explain the variance in win percentage, especially during this time period where three-point shooting was not at its peak.

![Figure 4](/assets/journalism/3pt_shooting_success/figure-04.png)

The next graphic displayed the same association as the previous graphic, but with a different time period from 2015 to 2017, right in the midst of the three-point era. As such, the correlation between the two variables was stronger than the correlation of the previous regression, having a r-squared of 0.14, albeit still quite weak. Notable outliers include the Houston Rockets on the far right, which makes sense because of the Rockets’ Moreyball strategy during this time period. This strategy emphasized taking the most efficient shots in terms of points per attempt, which meant that the Rockets focused on three-point shooting and scoring in the paint. Given that scoring in the paint would already be relatively common even before this strategy, it meant that they now had a much higher proportion of shots from three-point range.

![Figure 5](/assets/journalism/3pt_shooting_success/figure-05.png)

In terms of three-point field goal percentage from 2002 to 2007, the linear regression produced a similar result to the regression for relative three-point shooting volume. For the entire time period, the regression analysis produced an r-squared of 0.13. This number was higher than the figure for three-point shooting volume over these years, but it was still quite small.

![Figure 6](/assets/journalism/3pt_shooting_success/figure-06.png)

As for the years from 2015 to 2017, the correlation between 3PT% and team success was much stronger during this time period, having an r-squared of 0.54. At the very top of the regression, the Golden State Warriors can be seen, which is reasonable given that during this time period, they dominated and won two championships mainly on the backs of their three-point shooting.

While it is expected that three-point shooting would play an important role in the time period during which the Warriors were dominant, it is slightly less clear whether this trend would continue for later seasons, including the 2020 season.

![Figure 7](/assets/journalism/3pt_shooting_success/figure-07.jpg)

This graphic displays the association between three point percentage and win percentage, but only for the 2020 season. We can see that the teams with the best records in the league also have the highest percentage. Teams below the median shooting percentage and above the median winning percentage like MIA, DAL, LAL, and MEM were all in the playoffs but did not have the level of success like teams such as ATL, BKN, PHX and MIL on the other side of the median line. Teams that shot badly like MIN, ORL, HOU, CLE, and OKC performed worse and are lottery teams. Some notable outliers include WAS, SAS, and LAC. WAS and SAS were both in the play-in tournament but were not able to make the playoffs. LAC was excellent in the regular season, but they lost their star player Kawhi Lenoard in the second round. Yet, their superb team play and team three point shooting helped them take PHX to six games in the Western Conference Finals.

![Figure 8](/assets/journalism/3pt_shooting_success/figure-08.png)

This graph shows the association between total three pointers attempted and win percentage for each team. It is useful in explaining the previous graphic showing 3P% vs Win%. Teams like UTA shot the ball efficiently and often, which explains why they led the league in wins in the regular season. Teams like BKN, MIL, and POR also performed well in the regular season by shooting efficiently and often. Conversely, teams like CLE, ORL, and DET understood their limitations, as they did not shoot the ball as often because they did not make it as often. Some notable outliers are PHI, NYK, HOU, TOR, and LAL. LAL, PHI, and NYK were all playoff teams, but shot less three pointers than the median value for the league. While PHI and NYK shot the ball at a higher than median percentage, LAL shot the ball well under the league median yet still made the playoffs. This can be explained by how the Lakers relied on their stars, Lebron James and Anthony Davis, to carry their team, and neither of them shoot the three pointer very well or very often when they are given the ball, which is a lot of the time for the lakers. HOU and TOR attempted a lot of three pointers but were unable to make them, explaining their dismal records.

## Conclusion

![Figure 9](/assets/journalism/3pt_shooting_success/figure-09.png)

To conclude, our analysis has two main findings. First of all, three-point shooting has become more impactful in recent years than it was in previous years, with the aforementioned correlations being much stronger during these times. Why this difference exists may be because teams have simply become better at shooting from the perimeter, or because three-point shooting is not impactful until a certain scale has been reached. Given that three-point efficiency has stagnated ever since the mid-to-late 1990s, the latter reason is more likely, although other factors should not be counted out.

The second finding of our analysis is that while the volume of three-point shooting had limited correlation, the ability of teams to hit three-pointers generally had a stronger correlation with their success. Such findings are relevant for the basketball world because they show that simply telling your team to shoot more three-pointers will not necessarily lead to a greater level of success in the NBA. However, training players to have a high level of efficiency from the perimeter, or signing those who do, then having them shoot more three-pointers would be a better solution to securing more wins.

### Sources

[*https://www.thehoopsgeek.com/history-three-pointer/*](https://www.google.com/url?q=https://www.thehoopsgeek.com/history-three-pointer/&sa=D&source=editors&ust=1639367527834000&usg=AOvVaw2mjzN0hxfqToBaV2khzxYf)

[*https://github.com/fivethirtyeight/nba-player-advanced-metrics*](https://www.google.com/url?q=https://github.com/fivethirtyeight/nba-player-advanced-metrics&sa=D&source=editors&ust=1639367527835000&usg=AOvVaw3yNuzkAsaN-Q7iU7Z1eYcS)

[*https://www.kaggle.com/boonpalipatana/nba-season-records-from-every-year*](https://www.google.com/url?q=https://www.kaggle.com/boonpalipatana/nba-season-records-from-every-year&sa=D&source=editors&ust=1639367527835000&usg=AOvVaw1id26xVwQVYlJHm_uyx6BG)

[*https://www.kaggle.com/drgilermo/nba-players-stats*](https://www.google.com/url?q=https://www.kaggle.com/drgilermo/nba-players-stats&sa=D&source=editors&ust=1639367527835000&usg=AOvVaw0MZ8IIcug93yYMCKSSMhIR)

[*https://www.basketball-reference.com/leagues/NBA_2021_standings.html*](https://www.google.com/url?q=https://www.basketball-reference.com/leagues/NBA_2021_standings.html&sa=D&source=editors&ust=1639367527836000&usg=AOvVaw3iHG7pcb-tl-XynpR7KfHF)

[*https://www.basketball-reference.com/leagues/NBA_2021.html*](https://www.google.com/url?q=https://www.basketball-reference.com/leagues/NBA_2021.html&sa=D&source=editors&ust=1639367527836000&usg=AOvVaw2PTsY1D-kGDYX3rldggUFs)
