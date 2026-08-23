## Introduction

It has been 20 years since the turn of the century--a span in which basketball experienced many revolutions. The 2000-2001 NBA season was before Steph Curry’s three-point revolution, Lebron James and his undeniable dominance through three different teams: it is the time of Kobe Bryant, Shaq, Tim Duncan, and many other names we have gradually forgotten as time passes. This was when Allen Iverson averaged 31 points and 5 assists, winning the MVP over many of the greats that we recognize today. While we certainly have more rising stars coming, including James Wiseman, LaMelo Ball, and others lighting up the League in our new season, I will go back in time and see how different the game was then compared to today. The goal of this article is to provide a comprehensive comparison between two different eras, namely the 2000-2001 season and the 2019-2020 season, with respect to each position.

## The Premise

For proper comparison, I decided to separate the players in both eras into three groups: great players, good players, and average players. The metric I used for the groupings is Player Efficiency Rating (PER) because it is one of the more accurate with considerations to all basic statistics and relative to the league during that year. The great player group consists of the top 15 players of each season; the good player group consists of the top 50 players minus the 15 players from the previous group; the last group consists of all the other players not counted in the first two groups.

In addition, since the current era has advanced the concept of positionless basketball, it is more difficult to separate the roles of shooting guards and point guards or small forwards/power forwards, I decided that it is best to combine the roles to simply guards, and forwards to provide a more general grouping and eliminate misclassification.

![Figure 1](/assets/journalism/compare_nba_eras/figure-01.png)

![Figure 2](/assets/journalism/compare_nba_eras/figure-02.png)

The above tables show the average PER for each era. The first chart shows that during the current era, centers are the most productive position in the league. While forwards and guards have similar PER at their respective groups, the centers of today greatly exceed both positions at all three groups, by at least a two-point difference. The second chart--the 2000-2001 season--however, is slightly different from the first chart. Although centers at the highest level show dominance over the other two positions, it seems like there are more forwards and guards who are doing better than centers at lower efficiency groups.

## Basic Statistics

### Points

Points, in the NBA, might be the most recognizable statistic, because it conspicuously reflects how good a player is offensively. In graphs below, I calculated the averages of points per game for each group, at each of the three positions.

![Figure 3](/assets/journalism/compare_nba_eras/figure-03.png)

![Figure 4](/assets/journalism/compare_nba_eras/figure-04.png)

In both eras, scoring seems to be similar for the three different positions; however, the scoring in the previous era has a very skewed result at the center position, similar to that of PER. Before the 3-point revolution, Centers have been predominantly the leading scores on each team. When talking about the greats such as Kareem Abdul-Jabbar, Bill Russel, Wilt Chamberlain, they all hold the center position. Even Michael Jordan during the 90s cannot undermine the talent that comes out of the center position. Hall of Famers such as David Robinson, Hakeem Olajuwon, Patrick Ewing shed light to how dominant a center can be near the rim. This explains the scoring category with centers taking first. However, the roles of centers below the superstar level has drastically changed into only rim protectors, while in the current era, centers who want to take a spot in the NBA have to more or less know how to shoot from downtown, leading to higher scoring. In comparison, the current era features guards having the highest scoring out of all three positions, which can be explained through the very structure of three point shooting; while players like Stephen Curry and Damian Lillard can jack up 15 3’s per game, role players are also expected to make these shots on the side.

### Rebounds

The game of rebounding has a lot to do with height, although there are definitely anomalies such as Dennis Rodman, who developed a skill set that is more superior to both his peers and players who are more fit for the role; this game is about height, and it is obvious to see that centers and forwards have a significant lead in this category in both eras.

![Figure 5](/assets/journalism/compare_nba_eras/figure-05.png)

![Figure 6](/assets/journalism/compare_nba_eras/figure-06.png)

However, by looking at the graphs, one thing to note is that forwards in the previous era averaged more rebounds (at 9.52 in top 15 players category) than forwards in the current era (at 8.12 in top 15 players category). This could be explained by the active floor-spreading implemented in today’s game, and teams gradually going into small-ball that require less traditional centers and forwards.

### Assists

Ball distribution has always been the role of the smaller players, as they are more agile and are capable of making very dynamic plays. The graphs below reflect the average assists in each group.

![Figure 7](/assets/journalism/compare_nba_eras/figure-07.png)

![Figure 8](/assets/journalism/compare_nba_eras/figure-08.png)

Surprisingly, guards in the current era average either really close or more assists than guards in the previous era. One of the intuitive answers would probably be the result of combining point guards and shooting guards. The roles in the previous era may be very clear, with point guards distributing the ball and shooting guards taking the assists; however, when combining the assists of these two positions together and taking the average, it could end up similar to that of guards of the current era, who rarely define their roles and are counted as one position for the most part.

To back up this theory, I did conduct another comparison between the point guards and shooting guards of the two eras, and it is obvious that there is a clear discrepancy in terms of assists between the two groups.

![Figure 9](/assets/journalism/compare_nba_eras/figure-09.png)

![Figure 10](/assets/journalism/compare_nba_eras/figure-10.png)

### Blocks & Steals

Both of the defensive statistics have their represented groups. Typically, players who are taller are more likely to get blocks, adn players who are short and agile are more likely to get steals; these two graphs show exactly that.

![Figure 11](/assets/journalism/compare_nba_eras/figure-11.png)

![Figure 12](/assets/journalism/compare_nba_eras/figure-12.png)

![Figure 13](/assets/journalism/compare_nba_eras/figure-13.png)

![Figure 14](/assets/journalism/compare_nba_eras/figure-14.png)

From the graphs, it is clear that both of the defensive statistics seemed to be very different for both eras. On average, Centers and Forwards are getting a lot more blocks in the 2000-2001 season; centers have less, while forwards have more steals in the 2000-2001 season. Compared to the offensive statistics, the difference looks much more significant for these positions.

## How Significant are the Differences?

There are multiple points in the graphs that show a difference between different eras of different groups; to find out whether they are significant or not, I performed a t-test on all the groups of each statistic of each position. To note, the tests are performed between specific positions of specific groups between the two eras. For instance, in the 2019-2020 season, the Top 15 group of point guards in the Points category are only compared to its counterparts in the 2000-2001 season.

### Centers

The table is filled with p-values for the t-test. In this case, I am aiming for a 99% confidence interval, meaning that the difference would be significant if the p-value is less than 0.01. Out of all the t-tests conducted, we find significant differences in two different statistics, namely points and assists corresponding to the Top 50 groups. The biggest difference in the centers position lies in assists of the top 50 group. Intuitively, the centers of today have to be more well-rounded than the centers in the past. From today’s league, there are plenty of examples of elite passers such as Nikola Jokic, who functions as a “point center” rather than a traditional center. While there are good passers in the past, this position is never tasked with the role of ball-distribution; elite players might not differ as much, but the influence of positionless basketball becomes amplified at a lower level, bringing us this specific result. For average players of the league, there seem to be no difference between the two eras, which can be explained by the fact that these players lack playing time, and it is hard to demonstrate playing differences between them.

### Forwards

For this position, there is only one category that demonstrates a significant difference between the two eras. Indeed, we find that the blocking difference is rather significant between the two seasons. Surprisingly, the difference between the forwards of the two eras lies in the elite players, with players from 2000-2001 season averaging 1.2 blocks per game, and players from 2019-2020 averaging only 0.65 blocks per game. In addition, forwards in the past averaged more steals, at 0.91steals per game, while current day forwards averaged 0.71 steals per game; although not significant enough to say it drastically changed over the years, it is still interesting to see the difference. From these two categories, we can conclude that there is likely a falloff of defensive abilities in basic statistics.

### Guards

Guards of the two eras differ the most in Points, Rebounds, and Blocks, all in the Top 50 player group. The most significant difference lies in the Points category, with current players averaging 16.1 points, and previous players averaging 11.3 points. Legendary Point Guard Steve Nash once mentioned in an interview that he was always looking for opportunities to get the team involved, rather than scoring from the three-point line. This implies that they were always looking for opportunities to pass the ball rather than shooting it. This could be an explanation to the difference in points between the two eras, but it would also, in theory, lead to a higher assist number between the two groups, while there isn’t.

## Advanced Statistics

For this section, it is much more difficult to analyze the differences between the two eras as advanced data does not reflect performances that can be visually tested. Instead, I want to only examine the top 50 players of each position in terms of win share to see which position is the most important in each era. This time, the top 50 players include the top 15 players unlike for previous statistical analysis.

In addition, the metrics I am using is percentage win share, rather than raw win share, because it more reflects how a player performs in the context of team success. For instance, a player could have a really high win share because the team is leading the league in wins, rather than him being a great player himself; on the other hand, a great player’s win share can be undermined by a bad team performance.

From the chart above, there is a huge difference between the position. In the 2000-2001 season, Centers have the highest average win share, while in the 2019-2020 season, forwards have a significantly higher win share. This result is rather interesting, as forwards rarely excel at any of the basic categories; in fact, after going through the data again and graphs again, Centers and Guards dominated the different categories in both eras. However, it makes much more sense intuitively. For example, guards can be hard to get blocks and centers can be hard to get steals, but forwards such as LeBron James, and Kwahi Leonard have always been regarded as players who can guard all five positions because they both have the height close to a center and the agility close to a guard.

## Conclusion

After comparing these different statistics, it is clear that although some categories are significantly different between the two eras, most of the other statistics remain the same. We see clear distinction in points and assists for Centers, blocks in Forwards, and points, rebounds, and assists for guards, mostly clustered in the Top 50 groups; however, there aren’t many distinctions when it comes to the best of the best, and those who sit on the bench for most of the time. Each position, regardless of how positionless the league has become, still hold their own weight during the games. Although it might be cliche to say, guards are simply better than centers when it comes to assists, and centers are better than guards when it comes to rebounding. There might be slight improvements or regressions on certain categories, the trend still remains the same. However, the game of basketball is never just about the statistics. The players of the current era bring a lot to the table as well. We may not have another Shaquille O’Neal throwing down dunks on everybody, we may not have another Steve Nash who always thinks about passing first, and we may not have the great Kobe Bryant shooting his famous fade-away again, but we can experience Damian Lillard shooting logo 3-pointers at a record-high level, a center like Nikola Jokic who passes the ball better than most point guards, and LeBron James, who is going to continue to prove he is the one of the best to ever play the game of basketball.

*Sources:* [*Basketball Reference*](https://www.basketball-reference.com/)
