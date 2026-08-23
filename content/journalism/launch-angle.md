### By:  Steven Lu Chen

## Introduction

Hitting a baseball is often agreed upon to be among the most difficult feats to perform in sports. Consequently, over professional baseball’s decades of history, there has been no shortage of coaches and players advocating for an endless variety of approaches to hitting. In recent years, hitters have begun to place a significant emphasis on optimizing launch angle: defined by MLB Statcast as “the vertical angle at which the ball leaves a player’s bat after being struck.” In other words, the launch angle is the angle formed by the trajectory of the struck baseball and the plane parallel to the ground and passing through the point of contact; a fly ball would have a relatively high launch angle, while a grounder would likely have a negative launch angle. While the true “ideal” launch angle differs slightly from hitter to hitter based on their respective skill sets, Jeff Zimmerman of RotoGraphs identifies the general range of optimal launch angles to be between 15 and 20 degrees. In this article, we examine the launch angle and its effectiveness as a predictor of the success of a hitter.

## Methodology

We will examine a dataset consisting of 132 qualified hitters’ (2.1 plate appearances per team game) statistics from the 2021 MLB season. Statistics were taken from Baseball Savant’s Statcast database and Baseball Reference.

Since its introduction in 2015, MLB Statcast has collected massive amounts of data pertaining to batted ball metrics, commonly referred to as **advanced metrics** , as opposed to traditional statistics such as batting average or slugging percentage. We examine the statistical significance of the correlation between a hitter’s launch angle and the following advanced metrics used to evaluate a hitter’s “quality of contact:”

- **Average exit velocity** : The velocity with which a struck ball leaves the hitter’s bat. Higher exit velocities are associated with better contact, increasing the likelihood of a hit.
- **Hard hit percentage** : A hitter’s percentage of batted ball events (BBE) with exit velocity above 95 miles per hour.
- **Batted ball distance** : The horizontal distance, in feet, a BBE travels before hitting the ground.

Additionally, we perform the same significance tests with the following standard metrics that offer a more general overview of a hitter’s pure performance:

- **Home runs**
- **Batting average**
- **Slugging percentage**

Each of the 132 qualified hitters are sorted into one of three categories based on their average launch angle being below, within, or above the optimal range defined by Zimmerman. Basic summary statistics for each category are provided below. The sample of hitters with below-ideal launch angles contained one outlier. The first quartile of the sample was 8.4 degrees and the interquartile range was 7.5, resulting in a lower threshold of 0.9 degrees, meaning that Raimel Tapia’s entry of -4.4 degrees was excluded from calculations.

There were also a number of outliers in each sample of dependent variables. For instance, Angels infielder David Fletcher’s hard hit percentage of 15.7% was far lower than any other player, with the second lowest entry being 25.2%, making it a clear outlier in both the sample of all players and that of his launch angle grouping. However, it would be unwise to exclude Fletcher’s entry altogether, as this would mean removing his entry from every other sample as well, in which it was not an outlier. Thus, we accept this tradeoff of a small amount of measurement bias in one dependent variable sample for an additional meaningful observation in the other five samples. This stands in contrast to outliers in the independent variable (launch angle) sample, which would impact the accuracy of all six tests since every dependent metric is tested with launch angle.

We then perform a two-sample single-tailed T-test to test the null hypothesis that the mean exit velocities of the higher group and ideal group are equal, then repeat the process for the lower and ideal groups. We repeat the same process for the rest of the statistics in question. In total, twelve T-tests are performed, at 35 degrees of freedom for the lower group, and 6 degrees of freedom for the higher group. Note that the summary statistics state that the variance in the lower group is far greater than that of the ideal group. Although the traditional two-sample T-test assumes homoscedasticity between the samples, as in the higher and ideal groups, we can resolve this by utilizing the heteroscedastic T-test, which assumes unequal variances, when testing for differences in means between the lower and ideal groups. The relationships between launch angle and the various metrics are visualized using a series of side-by-side boxplots, created in R using the ggplot2 package.

The resulting p-values for each test are displayed in the table below. Each cell is colored green or red relative to the significance level 0.05. The resulting p-values for the two tests in exit velocity and batting average for the higher group were approximately 0.056 and 0.053, respectively; although these are technically insignificant results, they are extremely close to the accepted significance level, and are thus denoted with a yellow cell.

## Analysis of Results

The null and alternative hypotheses for each T-test took the following form:

**H0** : There is no significant difference between the mean exit velocity of players with “ideal” launch angles and players with launch angles falling above/below the ideal range.

**Ha** : The mean exit velocity of players with launch angles falling above/below the ideal range is *greater/less* than the mean exit velocity of players with “ideal” launch angles.

Other than the metric and sample names, the wording of the null hypothesis does not change for each T-test.

Because we use a single-tailed T-test, the alternative hypothesis would state that the average dependent variable for the non-ideal group is either greater or less than that of the ideal group. For exit velocity, hard hit percentage, and slugging percentage, the alternative hypotheses for both groups of players would state that the mean was less than that of the ideal group. This is also true for batting average, but only for the higher launch angle group; the hitters with lower launch angles actually had a higher mean batting average than the ideal group, so the reverse was tested instead.

With respect to batted ball distance and home runs, a lower launch angle resulted in a lower expected metric value, and vice versa. Considering that basic kinematics tells us that the optimal angle to maximize horizontal displacement is 45 degrees, it can be assumed that a higher launch angle, on aggregate, would result in greater batted ball distance, and subsequently home runs as well. Note that 45 degrees, while being the ideal launch angle to maximize horizontal displacement of a projectile, is not the ideal launch angle to hit a baseball at; any hitter will tell you that swinging with the intent of hitting a ball at a 45 degree angle is all but impossible!

In this section, we examine the significance of a higher or lower launch angle as a predictor for each metric.

### I. Average Exit Velocity

The p-values for the tests with the lower and higher launch angle groups, respectively, were approximately 0.014 and 0.056. There should be no doubt that there is a significant difference in mean exit velocity of players in the lower and ideal launch angle groups, but this isn’t necessarily the case with players in the higher group. Yet, the relatively low p-value suggests that there may still exist a weaker correlation, even if it isn’t statistically significant.

Intuitively, it may be tricky to determine whether or not this is a reasonable result. At first glance, launch angle does not seem like it should have a massive bearing on exit velocity. After all, a routine groundout can easily have the same exit velocity as a line drive double. However, just the existence of a relationship between these two metrics does not necessitate that said relationship is causal. It is well known that a high exit velocity is one of the signs of a great hitter; therefore, it could be the case that those players with “ideal” launch angles exhibit many of the characteristics of a good overall hitter, resulting in a higher average exit velocity as well.

![Figure 1](/assets/journalism/launch-angle/figure-01.jpg)

### II. Hard Hit Percentage

The p-values for the tests with the lower and higher launch angle groups were both approximately 0.02. Given this result, we comfortably reject the null hypothesis in both cases, concluding that hitting at an ideal launch angle would result in a greater hard hit percentage.

Seeing that a high hard hit percentage is closely related to a high average exit velocity in a hitter, we can come to a similar conclusion. Moreover, the statistically significant result for the test between the higher and ideal groups provides additional backing to the claim that there also exists a difference in mean exit velocity between the two groups raised in the previous section.

![Figure 2](/assets/journalism/launch-angle/figure-02.jpg)

### III. Batted Ball Distance

The p-values for the tests with the lower and higher launch angle groups, respectively, were approximately 0 (a number 19 orders of magnitude smaller than the significance level of 0.05) and 0.00169. Both of these values are absolutely miniscule, indicating that there is a near-undeniable relationship between launch angle and batted ball distance.

Again, basic examination of two-dimensional kinematics reveals that such a correlation is to be expected. We know that there is a simple linear relationship between launch angle and horizontal distance traveled given that the launch angle is below 45 degrees. Therefore, we can safely say that hitters with lower launch angles will have lower batted ball distances than those with ideal angles, and hitters with higher launch angles will have higher batted ball distances. This result is notable not only because it is significant, but also because the ideal group actually performed “worse” than one of the non-ideal groups.

![Figure 3](/assets/journalism/launch-angle/figure-03.jpg)

### IV. Home Runs

The p-values for the tests with the lower and higher launch angle groups, respectively, were approximately 0.0000158 and 0.109. Although we do get another extremely significant result, we also thoroughly fail to reject a null hypothesis for the first time.

Let us start with the simple part: the statistically significant result. In order to hit a ball out of the park, the launch angle at which it is struck needs to be sufficiently high to allow for the ball to attain the vertical displacement necessary to clear the fence. It should then follow that players with lower average launch angles hit fewer home runs, hence the extremely small p-value. Easy enough, but why is it that we cannot also conclude that players with higher launch angles hit more home runs, especially considering that we have already found that a higher launch angle results in a greater average batted ball distance? Even taking into account external factors such as air resistance and spin, which would decrease the true optimal angle, it still would certainly be above 20 degrees.

As it turns out, there does not exist a single definitive answer to this question. It is always a possibility that the limitations of this study (see below) could have introduced bias such that the p-value was skewed. Also, players who hit at a higher launch angle could have mechanical differences in their personal hitting styles that result in more swings and misses, and thus more strikeouts. Because strikeouts do not count as a batted ball event, they don’t affect a player’s average batted ball distance. However, they do still count as an at-bat, and decrease the number of opportunities a player has to hit a home run. There is also an undeniable element of randomness in hitting home runs, as seemingly minute differences such as the type of pitch, the stadium in which the ball is hit, and even the weather conditions can turn a home run ball into a flyout.

![Figure 4](/assets/journalism/launch-angle/figure-04.jpg)

### V. Batting Average

The p-values for the tests with the lower and higher launch angle groups, respectively, were approximately 0.00207 and 0.053. Again, we get one significant result and one that is very close to being significant, but not quite.

We first find that there is a significant relationship between a lower launch angle and higher batting average, which may appear contradictory at first glance. However, we must not forget that higher launch angles are associated with line drives and fly balls, while lower launch angles are associated with more ground balls. Of course, fly balls that stay in the park are usually caught by the defense, and ground balls always have a chance to sneak through the infield for a base hit; think of all the warning track flyouts and seeing-eye ground balls hit over the course of a season, and it suddenly doesn’t seem so absurd that a lower launch angle can result in a higher batting average.

On the other hand, we cannot substantiate that a higher launch angle results in a lower batting average, even though this does seem like it would be the case - too high of a launch angle results in more popups and flyouts, lowering the batting average. Although the p-value is again very close to the significance level, implying it is not impossible that such a relationship exists, we cannot draw any conclusions.

![Figure 5](/assets/journalism/launch-angle/figure-05.jpg)

### VI. Slugging Percentage

The p-values for the tests with the lower and higher launch angle groups, respectively, were approximately 0.000626 and 0.325. We again obtain a significant result for the lower group, but still fail to reject the null hypothesis for the higher group.

The formula for slugging percentage differs from batting average in that it values some types of hits more than others by accounting for total bases. As a result, home runs are the most valuable, followed by triples and doubles. Since extra-base hits are heavily dependent on a higher launch angle, the first result makes perfect sense. However, we cannot conclude that the reverse is true, meaning that there is no clear correlation between a higher launch angle and a lower slugging percentage.

![Figure 6](/assets/journalism/launch-angle/figure-06.jpg)

### Limitations and Assumptions

The most influential factor that impacted the validity of this study was the small sample size of the group of hitters with launch angles above the ideal range. Just seven players had an average launch angle above 20 degrees, as opposed to 36 observations in the ideal group and 88 (not counting an outlier) in the lower group. Despite the small sample size, the sample was still relatively normally distributed, leading us to carry out the tests anyway. Unfortunately, there was no realistic method to correct for the small sample size, meaning that some of the results may have been less accurate. For instance, both of the p-values that were very close to being statistically significant were both for tests with the higher group; with just a few additional observations consistent with the existing data, these p-values could have been lowered to the point that they would have been significant. If one was to repeat this study, it could be beneficial to lower the criteria for “qualified hitters” until there are enough observations to create a reasonably sized sample.

The increased variance in the lower group could also have potentially impacted the validity of our results. Because the variance of 10.6 for the lower group was over four times greater than the variance of the ideal group, we used a heteroscedastic, or unequal variance, T-test while using a homoscedastic, or equal variance, T-test for the higher group. It then may be inappropriate to compare the results of each group because they were calculated using different test statistics. In future, this mistake could be avoided by restricting the range of players with lower launch angles to between 10 and 15 degrees. In this way, the variance of the sample would decrease while still retaining large enough of a sample size.

Finally, the overarching aim of this study is to examine the effectiveness of launch angle as a predictor of success in hitting. Thus, its validity could be improved by testing a wider variety of hitting metrics that may not be directly affected by launch angle, such as wins above replacement. If the statistically significant results hold even for these statistics, the study could solidify launch angle as a valid and uniquely impactful measure of hitting.

### Conclusion

Based on our results, there is clear evidence to suggest that a less-than-ideal launch angle correlates with a lower average exit velocity, hard hit percentage, batted ball distance, slugging percentage, and fewer home runs, but a higher batting average. We can also conclude that too high of a launch angle correlates with a lower hard hit percentage and higher batted ball distance, and could potentially also explain a lower average exit velocity and batting average. Owing to the small sample size of players with higher launch angles, however, it may not be possible to generalize these results to a larger population of hitters.

Although we can conclude that hitters with an ideal launch angle frequently perform better than others in several of these metrics, it may not yet be possible to affirm that said players are definitely better hitters than their competitors. Baseball can be a fickle game, and what makes one hitter great might not work for others. Let us go back to the case of David Fletcher - ranking at or near the bottom in all of exit velocity, batted ball distance, hard hit percentage, home runs, and slugging percentage, and falling firmly in the lower range of average launch angles. Yet, not a single MLB player or fan could peg Fletcher as a poor hitter; as an Oakland A’s fan myself, it feels like the guy goes 3-for-4 with a double just about every time he plays against my team. Moreover, despite the obvious talent present in the ideal sample of hitters, there could be just as many, if not even more quality hitters present on either side of the ideal range. National League MVP Bryce Harper had a launch angle of just 13.3 degrees, whilst the Blue Jays’ Marcus Semien, who had one of the greatest seasons ever by a second baseman in 2021, hit at an average angle of 20.3 degrees. Other big names falling outside of the ideal range included Freddie Freeman (12°), Fernando Tatis Jr. (13.8°) and Joey Gallo (22.7°).

In conclusion, there is no doubt that players with lower launch angles than the ideal range tend to have lower statistics, with the exception of batting average. This likely seems to also be the case with higher launch angles, but a more thorough testing and analysis process may be necessary to fully support the claim. Moreover, launch angle appears to be a better predictor of advanced metrics than traditional ones, as evidenced by the greatest p-values resulting from tests in home runs and slugging percentage. Testing and analysis reveals that although hitting within the ideal range of launch angles cannot detract from the effectiveness of a particular hitter in the context of the statistics studied, it is not the case that a hitter cannot have success while still hitting outside of the ideal range. Overall, launch angle appears to be an important metric in determining the success of a hitter, but it may not be fully deserving of the massive emphasis that many players and coaches place upon it today.

### References

MLB Statcast Glossary: [https://www.mlb.com/glossary/statcast/launch-angle](https://www.google.com/url?q=https://www.mlb.com/glossary/statcast/launch-angle&sa=D&source=editors&ust=1646850107398369&usg=AOvVaw2k9W2Zd4uLAKACgERCIq8r)

Baseball Savant Statcast Database: [https://baseballsavant.mlb.com/statcast_leaderboard](https://www.google.com/url?q=https://baseballsavant.mlb.com/statcast_leaderboard&sa=D&source=editors&ust=1646850107399131&usg=AOvVaw2gdr2DdyuJccQduFGmWgxc)

Baseball Reference: [https://baseball-reference.com](https://www.google.com/url?q=https://baseball-reference.com&sa=D&source=editors&ust=1646850107399671&usg=AOvVaw3OPtgurtzhk0ZxKjwHuyN8)

Defining the ideal range of launch angles: [https://fantasy.fangraphs.com/finding-a-simple-ideal-launch-angle/](https://www.google.com/url?q=https://fantasy.fangraphs.com/finding-a-simple-ideal-launch-angle/&sa=D&source=editors&ust=1646850107400238&usg=AOvVaw3K9WKn1Fy7gBK-I1FWesmr)
