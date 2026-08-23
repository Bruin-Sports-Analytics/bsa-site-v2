## Introduction

It’s no secret that height is an athletic advantage across numerous sports—towering professional and college basketball, football, water polo, and volleyball athletes bear witness. But at the professional or college level when everyone is relatively tall, how much does height make a difference, specifically in volleyball? Do inches matter? To explore how the height of a team affects the offense of a team, we compared various relationships between the heights of VNL athletes to points scored in both the men’s and women’s leagues. For example, one such relationship we analyzed was the relationship between the heights of middle blockers and points scored.

For anyone unfamiliar with the sport, volleyball is a team sport where two teams, usually with six players each, are separated by a net. The objective is to score points by sending the ball over the net and into the opponent’s court in a way that they can’t return it. Each team can hit the ball up to three times before sending it back over. Points are scored when the opposing team fails to return the ball within the rules. A match is typically played in sets, with the first team to reach a set number of points (usually 25, with a two-point lead) winning a set. Matches are often best-of-five sets.

## Methodology and Data Collection

Our data was gathered from the Volleyball World website, consisting of all the Men and Women’s teams in the VNL 2024 season. Their database contains statistics on every player on each team, as well as overall team statistics concerning their performance over the season. We manually scraped the data of the general facts of each player (their name, team, team score, position, age, and height) along with various gameplay statistics, such as attack points, block points, attack efficiency, and block success rate into a spreadsheet and imported it into a Collab notebook for further analysis. Attack points are points scored from an offensive action, usually when a player hits the ball into the opponent’s court without the opponent returning the ball. Block points occur when a player stops an opponent’s attack at the net by blocking the ball, causing it to land back on the attacker’s side of the court. Attack efficiency is calculated by the number of successful attacks minus the number of errors, divided by the total number of attack attempts, representing how effective a player is at attacking. Block success rate is how often a player successfully blocks the ball, representing how effective a player is at defending.

Utilizing the [VNL’s formula for World Ranking](https://en.volleyballworld.com/volleyball/world-ranking/ranking-explained) to survey the performance of each team, our visualizations primarily focus on analyzing the correlation between the variables we surveyed, such as correlation between a player’s success (based on their position) with their height, in order to answer our question of how height affects the offense of a team.

## Data Analysis

![Figure 1](/assets/journalism/height-importance-volleyball/figure-01.png)

This violin plot compares the distributions of heights for each position in the Men’s VNL teams. Setters have the greatest range of heights, whilst middle blockers have the shortest range of heights concentrated on the taller side of most players. Liberos fall under the shorter side of the player base unsurprisingly, but still have a few outliers that match the heights of other positions. All positions have a relatively normal distribution with slight right skewness.

![Figure 2](/assets/journalism/height-importance-volleyball/figure-02.png)

![Figure 3](/assets/journalism/height-importance-volleyball/figure-03.png)

This bubble plot maps the height (cm) against the team score, calculated by the VNL based on varying factors of team performance, for each outside hitter, opposite hitter, and middle blocker for both the Men and Women VNL teams. The range of heights of the outside hitters falls on the lower end compared to other positions. However, the chart shows that there is no significant correlation between a player’s height and the overall performance of the team, regardless of position.

![Figure 4](/assets/journalism/height-importance-volleyball/figure-04.png)

![Figure 5](/assets/journalism/height-importance-volleyball/figure-05.png)

These scatter plots feature every VNL player’s height plotted against their attack points. The plotted points display a very weak positive linear association. As is evident from the great difference between the expected attack points (linear regression line) and the actual attack points scored, there is little to no association between height and attack points. Furthermore, the r value (Pearson correlation coefficient, which tells the direction and strength of the linear relationship between both variables) of the men’s data is 0.319 and the r value of the women’s data is 0.267. R values close to 1 or -1 indicate high association, whereas r values close to 0, such as those in our graph, suggest little to no association. Based on this, it should be noted that a linear regression model may not be the best technique to analyze this particular data set, due to the low linear correlation values.

![Figure 6](/assets/journalism/height-importance-volleyball/figure-06.png)

Out of all the MBs (middle blockers) on each team, we examined the correlation between height and the number of block points scored using the heatmap provided. The heatmap visualizes block points scored against height and team score for middle blockers, but no clear patterns or clustering emerge to suggest a meaningful relationship between height and block points. The distribution of data points is scattered, indicating that taller middle blockers do not consistently score more block points than their shorter counterparts.

Additionally, the correlation coefficients for both men’s and women’s leagues are close to zero, confirming the lack of a significant relationship. These findings imply that while height may play a role in other aspects of blocking, it does not directly determine a middle blocker’s ability to score block points at the professional level. Instead, other factors such as timing, positioning, and technique likely have a greater impact.

![Figure 7](/assets/journalism/height-importance-volleyball/figure-07.png)

When considering average team height, it brought up the question whether this variable affects men and women differently. From our plot, interestingly women saw a moderate positive trend and correlation (r = 0.3873) between a higher average height and better team score. However, men saw a weak negative correlation (r = -0.3568) as the average height was larger. Conclusively the data shows that height matters more for women than in men in terms of overall team performance possibly due to the physical nature of women vs. men. In other words, it is more of an outlier if women are extremely tall and thus giving them an advantage. However, most men in VNL are already significantly taller so the slight change in heights doesn't seem to have any effect. However, when comparing it to the rest of the data it is difficult to claim correlation between these two variables as they seem relatively independent of one another. Thus, it is safe to conclude that women are more heavily affected (higher team score/performance) by larger average team height than men are, but in general, both men and women are relatively unaffected by differences in height.

## Conclusion

Our article examined the role of height in the offensive performance of the VNL 2024 League, surveying both men’s and women’s games. We analyzed team scores, individual points, and positional performance traditionally valued for their height and blocking ability.

Our analysis revealed that technical aspects, such as attack efficiency and defensive coordination, were stronger determinants of performance. Shorter teams often relied on agility and quick plays, while taller teams leveraged blocking power and high-percentage spikes. This shows that success in volleyball is driven by diverse skills that offset physical differences.

In both men’s and women’s leagues, we found little to no correlation between height and points scored. Scatter plots and regression lines confirmed this lack of association, and correlation values for both leagues were close to zero. Even for middle blockers, height had minimal impact on block points scored. Men’s leagues showed slightly greater variability, likely due to differences in play style, but the results were consistent across genders: height alone does not dictate performance at the professional level.

Future research should explore other factors like reaction time, vertical leap, and defensive metrics (e.g., dig success rates) to better understand performance drivers. Additionally, examining height’s impact in younger or amateur leagues could reveal more pronounced correlations, as physical disparities may play a larger role at those levels.

## Sources

[https://en.volleyballworld.com/volleyball/world-ranking/ranking-explained](https://en.volleyballworld.com/volleyball/world-ranking/ranking-explained)

[https://en.volleyballworld.com/volleyball/world-ranking/men](https://en.volleyballworld.com/volleyball/world-ranking/men)

[https://en.volleyballworld.com/volleyball/world-ranking/women](https://en.volleyballworld.com/volleyball/world-ranking/women)

[https://en.volleyballworld.com/volleyball/competitions/volleyball-nations-league/teams/men/](https://en.volleyballworld.com/volleyball/competitions/volleyball-nations-league/teams/men/)

[https://en.volleyballworld.com/volleyball/competitions/volleyball-nations-league/teams/women/](https://en.volleyballworld.com/volleyball/competitions/volleyball-nations-league/teams/women/)
