### By: Jong Hyun Cha

As the modern game of soccer evolves, the roles of central defensive midfielders have increased significantly. They are expected not only to provide defensive support and stability, but also to facilitate offensively. Teams in the Premier League have been on the search for players that are able to do both. With so many different standards to the way defensive midfielders were being assessed, I wanted to make a standardized criteria to rank the defensive midfielders in the Premier League.

I chose to evaluate players from the 2020-2021 season, as they would have more games and a complete set of statistics to analyse. I picked out one player from every team, excluding those that have been relegated as they would not be relevant for the current season. I’ve also excluded players from teams that have just been promoted to the Premier League for the 2021-2022 season, as the statistics from the Championship would not be an accurate representation for the standards of the Premier League.

For statistics, I gathered both attacking, defending, and passing stats, as they are all relevant to the roles of a central defensive midfielder. Once the stats were gathered, I scaled the stats into a 5-point scale, giving the player with the best stat a score of 5, and scoring the remaining players accordingly. To do this, I divided each player’s stat by the top stat, and multiplied each value by 5.

![Figure 1](/assets/journalism/cdm_analysis/figure-01.jpg)

An analysis of the attacking stats shows that the players are pretty spread out in this department. It makes sense, since defensive midfielders are less likely to get a chance at goal, or to provide the killer pass for a goal. And while attacking is an important asset, it isn’t the biggest focus for a defensive midfielder. Taking that into consideration, Players like Fred and Yves Bissouma seem to have the least attacking presence, while Doucoure, Hojberg and Ndidi display better attacking performances.

![Figure 2](/assets/journalism/cdm_analysis/figure-02.jpg)

A defensive analysis shows a more compact spread of statistics amongst the players. Players like N’golo Kante and Wilfried Ndidi expectedly show high levels of interceptions, while Ashley Westwood has an exceptionally low tackles score, but has the highest score for number of times dribbled against. Interesting to note that Yves Bissouma has significantly higher scores in defensive stats compared to his attacking stats, highlighting his focus on his role as a central defensive midfielder.

![Figure 3](/assets/journalism/cdm_analysis/figure-03.jpg)

Passing statistics show a general trend among the players. Passing accuracy is all within the 4-5 score range, which is probably a necessary trait to play as a midfielder in an elite league like the Premier league. Rodri from Manchester City stands out with the highest passing accuracy and the highest number of passes completed per 90 minutes.

Looking at these numbers, I started to wonder if the number of passes a player makes had independence from his passing accuracy. Players that play in a possession based team would probably get more passes than other players, but would that also mean their accuracy would be higher? To study this, I ran a Pearson’s chi-squared test of independence for the two statistics.

An analysis of the number of passes vs pass accuracy showed some interesting results. As shown by the graphics, there is a weak correlation between passes per 90 mins and passing accuracy. The p-value for correlation is <0.05, hence it is statistically significant. However, the p-value for the chi-squared test is >0.05, and hence we cannot conclude that the statistics are dependent on each other. These results make a lot of sense upon some thought. Players in a high possession based team have more opportunity to make passes, and thus more opportunity to gain a higher passing accuracy. However, playing for a team that makes less passes as a whole does not necessarily mean that the central defensive midfielder has a lower passing accuracy.

![Figure 4](/assets/journalism/cdm_analysis/figure-04.png)

Averaging out all the statistics, I got a total score for each player and ranked them based on this score. As shown, the standouts were Wilfried Ndidi and Rodri with a total score of 3.51 and 3.48 respectively. Fred from Manchester United fell behind, scoring a mere 2.36.

Fred’s poor performances highlights the current problems Manchester United are facing in midfield. While this may not be the most accurate scoring system for central defensive midfielders, his inconsistency shows in his score, and Manchester United will never get to where they would want to be with a midfielder that ranks lower than those that have been in the relegation scrap. That’s probably why they have been linked numerous times with players like Declan Rice, Wilfried Ndidi and Kalvin Phillips. All three players show significant improvement from Manchester United’s current midfield. New interim manager Ralf Rangnick will have to ponder upon acquiring new assets, or mold Fred into a player that brings more quality into his system.

The current game weighs so much importance on central defensive midfielders as they break down the oppositions’ attacking patterns, and thus allowing offensive players to focus on creativity and scoring goals. It’ll be crucial for teams to improve in this area, or for some teams to maintain superiority in order to fight for the title, for a spot in the European competitions, or in some cases for survival in the toughest league in the world.

### Sources

[*premierleague.com*](http://premierleague.com) *,* [*whoscored.com*](http://whoscored.com)
