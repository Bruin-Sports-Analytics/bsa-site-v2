## Introduction

Sports betting has surged into popularity in recent years after its legalization in 2018 in the United States. Although it’s not legalized in all 50 states, there are still 25.02 million users in 2024 in the booming industry, posting a 11 billion revenue in the year 2023 for the sportsbooks. Fans and analysts are actively predicting the outcomes, often betting on the underdogs for the huge profit boost. For example, betting on the Brooklyn Nets to beat the Golden State Warriors on November 25th can turn your 100$ to 550$, that’s a 450% increase. In this analysis, we aim to explore how frequently underdogs have historically secured victories and investigate external factors that might improve their chances, such as home-court advantage, playoff intensity, or rest periods between games.

To start, we need to define what an underdog is. Underdogs teams are the teams that are favored to lose in betting websites, where the spread is positive. The spread is defined as the winning margin, the expected number of points one team will win by. In **figure 1,** a -5 spread for the Celtics means they need to win by at least 5 points to meet expectations, while a +5 spread for the New York Knicks implies they can either win outright or lose by no more than 5 points to meet the spread. Spreads bring teams to an even playing field, we can think of it as a handicap in golf. A small spread from +1 to +5 means the 2 teams are pretty evenly matched. However, the study will focus on teams with bigger spreads, to truly highlight how often an underdog wins.

### Figure 1. Example Spread and Point Breakdown

![Figure Notes: Displayed in the figure above is the example of the spread for a game between the New York Knicks and the Boston Celtics](/assets/journalism/nba-odds-upsets/figure-01.png)

## Methodology

### a. Data Source

The data is found on Kaggle named **NBA Odds and Scores;** it covers the data of every regular season and playoff game from the 2012-13 to the 2018-19 season. This dataset includes details such as game dates, locations, teams, opponents, average line spreads, points scored, and game results. After uploading it onto the Jupyter Notebook, we specified and filtered out the specific columns below: Date, Location, Team, Opponent Team, Average Line Spread, Point scored, and Game Result. The column average line spread is the average spread from multiple sportsbooks, including Draftkings, Fanduel and Bovoda. We chose it because it provides an average of the spread, which is more standardized than choosing one specific sportsbook.

### b. Dataframe and Analysis

**Figure 2. The dataframe we are working with.**

![Figure Notes: After importing the dataset into Jupyter Notebook, the data frame was further filtered to include the following fields: Date, Location, Team, Opponent Team, Average Line Spread, Points, and Result of the Game.](/assets/journalism/nba-odds-upsets/figure-02.png)

We then turned the data every year to a singular dataframe with the average line spread greater than 5 for each team, which features every single underdog game from the 2012-13 NBA season to the 2018-19. We used simple panda functions to filter out the games that don't qualify the minimum spread of 5 for each team. This filters out 4754 games to work with that we proceeded to analyze with simple linear regression as well as exploratory data analysis.

## Results

### a. Exploratory Data Analysis

### Figure 3. Win Percentage Throughout the Years Depending on Spread

![Figure Notes: The figure displays the win percentage of teams from 2012-2019 depending on varying spread ranges including +0-5, +5-10, +10-15, +15-20. Furthermore, a linear regression line was included for spread range as well as their respective 95% confidence intervals](/assets/journalism/nba-odds-upsets/figure-03.png)

Underdog teams are categorized into subgroups based on the point spread on the graph above, as games with a spread of 0 to 5 are typically more competitive than those with a spread of 15 to 20. The win percentage for underdogs varies across these subgroups as well. As hypothesized, underdogs with a spread of 0 to 5 have the highest win percentage, around 40%, while the win percentage declines as the spread increases. Games with a spread of 15 to 20 are particularly challenging for underdogs due to the significant mismatch, with no wins recorded in 2013, 2014, 2016, and 2017. However, such games are relatively rare, resulting in a small sample size for this spread range.

### Figure 4. Eastern Conference Vs. Western Conference Upset Rate By Year

![Figure Notes: In this figure, we aimed to illustrate the varying upset rates between the Western and Eastern Conferences. Additionally, a linear regression line is displayed for each conference as well as their respective 95% confidence intervals.](/assets/journalism/nba-odds-upsets/figure-04.png)

We also aim to determine whether the conference plays a role in influencing the winning percentage of underdog teams. To analyze this, we calculated the win percentages for each year from 2012 to 2019 and identified the line of best fit. Our findings show that underdogs in the Eastern Conference have a slightly higher winning percentage compared to those in the Western Conference. However, the difference is minimal and insufficient to conclude that the conference significantly impacts the likelihood of underdog victories.

### Figure 5. Underdog statistics compared to the favored teams

![Figure Notes: In the figure above, we explored differences in NBA game statistics between the underdog and favored teams. We looked at the mean for the following statistics: points per game, team rebounds, team assists, field goal percentage, three point percentage, and turnovers.](/assets/journalism/nba-odds-upsets/figure-05.png)

We proceeded to compare underdog teams to their favored team counterparts and found that they tend to perform worse statistically across the board compared to favored teams. On average, underdogs score about 9 fewer points, grab roughly 3 fewer rebounds, and make 2 fewer team assists. Additionally, their field goal percentage is 4% lower, their three-point shooting is 3% less accurate, and they commit 1 more turnover than the favored teams.

### Figure 6. Upset rate by Team (Western vs Eastern) Conference

![Figure 6](/assets/journalism/nba-odds-upsets/figure-06.png)

![Figure 7](/assets/journalism/nba-odds-upsets/figure-07.png)

Figure Notes: In figure above we broke down the overall upset rates from 2012-2019 for each individual team. On the left side are Western Conference teams and on the right side are the teams from the Eastern Conference.

Here is the win percentage from each team based on their respective conference. In the western conference teams like Portland, Houston have a relatively high upset rate while teams like Minnesota, Phoenix and San Antonio have the lowest rate of upsetting teams, this can be caused from the few factors that’ll be explained below. In the Eastern conference Miami, Boston and Chicago have the highest rates while Philadelphia and Cleveland have the rates on the lower spectrum.

### b. Factors that Affect Underdog Performance

### Figure 8.1. Underdog Win % (and Difference Between Playoffs and Regular Season)

![Figure 8](/assets/journalism/nba-odds-upsets/figure-08.jpg)

![Figure 9](/assets/journalism/nba-odds-upsets/figure-09.png)

Figure Notes: The figure above illustrates how upset rates vary depending on playoff pressure. On the left side, the graph displays the corresponding upsets rates during the regular season and the playoffs for each nba season from 2012-2019. The graph on the left simply illustrates the respective difference between playoffs and regular season.

For these graphs, we considered underdogs as teams that were predicted to lose by 5 or more points, thus the spread was +5 or higher for these teams. We decided, per our own determination, that a team facing a spread of less than 5 is not significant enough to be considered an underdog. Upon analysis, there seems to be no continuity between heightened underdog win percentages in the playoffs versus the regular season. 2013, 2014, 2017 and 2019 saw underdogs perform better in the playoffs, and vice versa for the remaining years. 2014 is the most notable, seeing a 6.36% difference between underdogs win percentage in the playoffs and in the regular season. This can be attributed to many teams forcing long series that year when they were projected not to. Another compelling note is the differences seems to have gotten smaller throughout the years, meaning that underdogs across the board seem to perform similar to how they do in the regular season in more recent seasons.

### Figure 8.2. Wins by Seed

![Figure notes: This graph explores the wins by seed in each playoffs. The darker bar represents the number of wins by the lower seed, while the lighter bar represents wins by the higher seed.](/assets/journalism/nba-odds-upsets/figure-10.png)

2017 seems to be one of the most notable years, with a larger majority of higher seeds securing wins in 2017, mostly featuring sweeps or lopsided wins by the favored higher seeded team. Most noticeably, in the finals, the favored Golden State Warriors won the series just in 5 games, over the underdog Cleveland Cavaliers. In contrast, 2018 was arguably more thrilling, showcasing several upsets. The 4th-seeded Cleveland Cavaliers made an impressive run to the finals, upsetting the [#1](https://www.bruinsportsanalytics.com/blog/hashtags/1) seeded Raptors; the New Orleans Pelicans pulled off a surprising first-round upset against the 3rd-seeded Trail Blazers too.

### Figure 8.3. Lower Seed vs Underdogs Regression

![Figure Notes: This graph shows the relationship during the NBA playoffs from 2013-2019, comparing the underdog win percentage and the number of times the lower seed wins. This looks to explore if there is a correlation between playoffs where there is a frequent amount of upsets and lower seeds winning more games.](/assets/journalism/nba-odds-upsets/figure-11.png)

Upon analysis, there seems to be no strong correlation during the playoffs that lower seeds winning more frequently also means more underdogs are winning. This can be the result of many different things, the most notably most likely being the fact that the lower seed is not always the underdog as lower seeds may have underperformed during the regular season, made significant trades or got healthier as playoffs began. This can result in sports betting books determining lower seeds as favorites in certain games (also considering game by game factors like home court advantage). Overall, these parts of figure 8 do not show us much about underdogs performance and the idea that underdogs may perform better in more intense/meaningful games. But these graphs do show us interesting year by year occurrences that would require deeper analysis to discover what causes the outliers. In all, we can conclude that underdogs and lower seeds do not perform better across the board in playoffs, and while there is strategy in sports betting, there seems to be a sense of randomness that makes betting what it is.

### Figure 9. Home vs Away Game Win Percentage for Underdogs

![Figure Notes: The figure above displays the underdog win percentage between home and away games from 2012-2019.](/assets/journalism/nba-odds-upsets/figure-12.png)

A factor that could be important for the outcomes of most NBA games is home court advantage, the atmosphere and the cheers from the fans often increase the winning percentage of teams. As the graph conveys above, underdog teams perform better at home courts compared to being away as well, having a higher winning percentage at around 3%. We want to see if the result is significant or not, by taking a 1 proportion z test to test for its significance.

**Table 1. Win and Loss Totals for Home and Away Games From 2012-13 to 2018-19 season**

| Category | Wins | Losses | Total | Win Proportion |
| --- | --- | --- | --- | --- |
| **Home** | 306 | 921 | 1227 | 0.249 |
| **Away** | 771 | 2756 | 3527 | 0.219 |
| **All Games** | 1077 | 3677 | 4754 | 0.227 |

Table Notes: The table above displays the win and loss totals of underdog teams for home games, away games, and all games.

We have the null and alternate hypothesis of

- Ho = 0.227
- Ha > 0.227

**Figure 10. Results of the 1-proportion Z-Test.**

![Figure Notes: The figure above illustrates the resulting normal curve of our one proportion z test, as well as, the corresponding z score and p value.](/assets/journalism/nba-odds-upsets/figure-13.png)

With the hypothesis test, the p value for the Ha is statistically significant to the alpha level set at 0.05, which can lead to us rejecting the null hypothesis. We can conclude that the difference between the upset rate at home games versus all NBA games is statistically significant. As a result, we conclude that home court advantage is a contributing factor causing the underdogs to win more frequently from the 2012-13 season to 2018-19 season.

### Figure 11. Underdog Win Percentage Depending on Rest Days:

![Figure Notes: The figure above displays the win percentage for underdog teams depending on varying rest days between games. Rest day of one means back-to-back games and so forth.](/assets/journalism/nba-odds-upsets/figure-14.png)

We proceeded to analyze whether resting between games could potentially influence the performance of teams that are favored to lose. However upon looking at the graph we see a very weak trend illustrating how as days between games increase, underdog teams appear to do better. However, there are some outliers. For example, underdog teams who rest 6 days between games appear to have the lowest win percentage, which doesn’t align with our trend. However, we propose that some of these irregularities are due to the fact that resting six, seven, eight days, and so forth between games is very uncommon. As a result, the population size for these rest day amounts are extremely small in comparison to the others, potentially resulting in the skewed results that we see.

## Discussion

### a. Discussion of Results

This study analyzed underdog performance in NBA games from the 2012-13 to 2018-19 seasons to identify trends and factors influencing upset victories. The results highlight several patterns while also illustrating how contextual factors lead to complete variability in our results.

During our exploratory data analysis we could clearly see that spread was a relatively accurate predictor for team performance. Teams with spreads of +15 to +20 performed significantly worse than teams with spreads of just +0 to +5. The trend aligns with our expectation that small spreads indicate closer matchups that lead to closer games, whereas large spreads of +15 to +20 indicate that there is a severe imbalance between team strength.

Looking at upset rates between conferences as well as individual teams, we could find very minimal patterns if any, illustrating how context of specific NBA seasons leads to random variability in upset rates. However, as expected we could conclude that underdog teams performed worse in every single statistical category in comparison with their favored counterparts.

Moving on to factors that could potentially influence underdog performance, we specifically looked at playoff pressure, home court advantage, and rest days in between games. Playoff data offered mixed results. Although certain years illustrated that playoff intensity may have helped push underdogs to overachieve, other seasons clearly demonstrated the opposite.

However, home court advantage clearly played a role in underdog performance as it would for any team. Underdogs consistently performed better during home games in comparison to away games as confirmed by our one-proportion z-test. This confirms the notion that home court advantage has a positive effect on team performance, even for underdogs.

On the other hand, rest days between games showed relatively weak and inconsistent trends. Underdogs appeared to perform slightly better with more rest days, but there were some inconsistencies potentially caused by small sample sizes.

Our findings converge at the conclusion that variability and inconsistencies will inevitably arise when exploring the outcome of NBA games. These games are inherently unpredictable and a combination of complex factors like home-court advantage or playoff intensity can have unforeseen impact on game outcomes regardless of how much a team is favored to win or lose.

### b. Limitations

Since the dataset only covers games from the 2012-13 season to 2018-19 season, it might not represent the NBA today. The current dynamic of the league has changed drastically compared to five years ago, with the league becoming more competitive throughout the years. This year alone, 11 teams have a 0.500 or better record in the western conference which is never seen before. Also with the introduction of the in season tournament NBA cup, more teams will show more grit and fight for it, causing us to make an argument for an increase in the winning percentage of underdogs.

In figure 7, although Houston has the highest percentage of winning as an underdog, the sample size might be skewed since Houston has been dominating the years from 2012 to 2019, having a winning record under the leadership of James Harden, Chris Paul and Eric Gordon throughout the years. They have only been the underdog with a spread 5 or higher in very few games compared to the league standard, therefore we can’t take away much from that graph.

## Conclusion

In this article, we explored the performance of underdogs in the NBA through an in-depth analysis of team, conference, and yearly trends using exploratory data techniques. Our findings revealed that underdogs generally underperform in nearly all major box score statistical categories when compared to favored teams. We also investigated factors that might influence underdog performance, discovering that elements like home-court advantage and rest days can have a notable impact, while others, such as playoff intensity, show more unpredictable effects. These results highlight the inherent unpredictability of sports, which in the end is what makes sports so exciting.

## References

[https://www.kaggle.com/datasets/erichqiu/nba-odds-and-scores](https://www.kaggle.com/datasets/erichqiu/nba-odds-and-scores)
