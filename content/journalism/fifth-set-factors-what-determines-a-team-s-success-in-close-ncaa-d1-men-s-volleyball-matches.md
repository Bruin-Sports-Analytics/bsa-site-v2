## Introduction

NCAA D1 Men’s Volleyball is a growing sport, attracting greater audiences every season. Collegiate volleyball matches consist of a best-of-five sets. Teams must win 3 sets to win the match, with sets going to 25 points, except for fifth sets, which are played to 15. In these tie-breaking sets, what statistics and skills determine the winner? Is there a home court advantage in fifth sets? How does serving and attacking affect the outcome of a fifth set? Do metrics that determine a winner change when a match goes to a fifth set?

We collected data from the top 20 Division 1 Men’s Volleyball Teams, as determined by the American Volleyball Coaches Associated final regular season poll, published on April 21, 2025. The AVCA regular season rankings are as follows:

1. Long Beach State
2. UCLA
3. University of Hawaii
4. UC Irvine
5. USC
6. Loyola Chicago
7. BYU
8. Pepperdine
9. CSUN
10. UC San Diego
11. Grand Canyon
12. McKendree
13. Stanford
14. Lewis
15. Ohio State
16. Lincoln Memorial
17. UC Santa Barbara
18. Ball State
19. Princeton
20. Mount Olive

Our analysis will focus on both offensive and defensive statistics including:

- Hitting Percentage
- Blocking
- Errors
- Serving

![Figure 1](/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-01.png)

## Home Court

For teams in the AVCA Top 20, it appears that there is no home court advantage for games that go to a fifth set. In games that went to only 3 or 4 sets, the average win percentage was 80.5% for home games, and 61.5% for away games. In 5 set matches, the average win percentage at home was 60.0% and 56.8% for away games. It appears that playing on a home court is relevant in non-five-set matches, but not in 5 set matches.

![Figure 2](/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-02.png)

## Errors

An error is a rule violation or a mistake that leads to a point being awarded to the opposing team. Error types were separated into hitting errors, service errors, reception errors, and blocking errors. In 5 set matches, there is not much variation in the amount of errors between matches won and matches lost. Generally, teams made more errors in games that they lost, which makes sense considering the errors they made gave points to the opposing team, costing them the game.

![Figure 3](/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-03.png)

## Blocks

A block is a defensive action that prevents a ball from crossing the net, placing the ball back on the opposing side.

Average blocks per team were mapped against team win percentage across the regular season for both five-set matches. Visually, a strong correlation between team blocks and win percentage is not clear. This can be confirmed with a correlation coefficient of 0.08.

![Figure 4](/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-04.png)

To continue an investigation into if five-set matches differ from shorter matches, the same mapping was done for non-five-set matches. There is still not a strong visual correlation, but there is a higher correlation coefficient (0.31) between team blocks and win percentage.

![Figure 5](/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-05.png)

Overall, a strong correlation between team blocks and winning percentage is not found, especially within 5-set matches. The reliability of these tests is also impacted by the limited data. Outliers are common due to the large variation of skill within even the top 20 teams.

## Hitting Percentage

Hitting percentage (HP) is defined as a successful attack that results in the opposing team failing to make a return, minus hitting errors, divided by total hitting attempts, or HP = (kills - errors)/total attempts.

When analyzing average hitting percentage versus fifth set win percentage by team, there seems to be a slight trend in that teams with a higher average hitting percentage won more 5 set matches. Overall, the correlation between average hitting percentage and fifth set win percentage is not very high, with the correlation coefficient being 0.236.

![Figure 6](/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-06.png)

To look at the overall relationship between winning matches and hitting percentages, average hitting percentages were compared between winning and losing teams for both five-set matches and non-five-set matches.

Winning teams have higher hitting percentages in all matches, but the margin is much smaller in five-set matches compared to non-five-set matches. In non-five-set matches, winning clearly correlates with a higher HP, as winning teams averaged a HP of 0.37 and losing teams averaged a HP of 0.23. However, in five-set matches, winning teams averaged a HP of 0.31 and losing teams averaged a HP of 0.28. This comparison does not give a clear indication that hitting percentage is a crucial factor in winning five-set matches. However, it may provide insight into what makes five-set matches different from non-five-set matches.

![Figure 7](/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-07.png)

To investigate further, the differences regarding hitting percentages and sets played can be analyzed directly. When focusing on winning teams, HP decreases with sets played. Matches won in a sweep, or in 3 sets, had an average HP of 0.4, followed by 4-set wins at 0.33 and 5-set wins at 0.31. This decrease in hitting percentage as sets go on could indicate or be caused by several other factors, such as fatigue or opponent skill level.

![Figure 8](/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-08.png)

## Conclusion

While better statistics for some categories correlated with winning teams in fifth-set matches, no one factor seems to determine the winner of a five-set game. None of our investigations pointed to a category differing significantly between winning and losing teams or showed conclusive correlations between team statistics and winning percentages. This could be because if a game goes to a fifth set, the teams are likely playing at a similar level, meaning their statistics are more likely to be similar. While our initial research question of which skills determine five-set match winners was not definitively answered, we are left with many new ones.

There were consistently differences in how a metric related to winning a match when it came to fifth-set matches versus non-fifth-set matches. This illustrates that the nature of five-set matches is indeed distinct from three or four-set matches. In order to analyze this contrast, more specific data would need to be available. For example, set-by-set data would allow for more in-depth analysis of both the differences between five-set and non-five-set matches and the specific factors that play into success in a fifth set. With the growing nature of men’s collegiate volleyball, this data may be widely available soon, and our questions may be able to be answered with more clarity.

### Sources

[https://www.avca.org/polls-awards/polls/?_weeks=week-15](https://www.avca.org/polls-awards/polls/?_weeks=week-15)

[https://www.ncaa.com/stats/volleyball-men/nc](https://www.ncaa.com/stats/volleyball-men/nc)

[https://stats.ncaa.org/](https://stats.ncaa.org/)
