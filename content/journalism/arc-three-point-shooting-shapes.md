## Introduction

The modern NBA is a game of spacing, shooting, and efficiency, where the three-point shot has revolutionized how teams approach success. From the dominance of the Golden State Warriors to the rise of analytically driven offenses, three-point shooting has become a defining factor in determining a team’s fate. But just how important is it? Do teams with higher three-point percentages automatically achieve greater success in the playoffs, or is there more to the story? By analyzing the relationship between three-point percentage and both regular-season and playoff performance, we can uncover whether three-point efficiency is the key to winning or just one piece of a larger puzzle. Through data visualizations, this study explores the trends, correlations, and outliers that shape the impact of three-point shooting on a team's success.

## Key Terms

- Three-Point Percentage (3P%) – The percentage of three-point shots made by a team or player, indicating long-range shooting efficiency.
- Field Goal Percentage (FG%) – The overall shooting efficiency of a team or player, including all field goal attempts (two-pointers and three-pointers).
- Mid-Range Field Goal Percentage (Mid-Range FG%) – The shooting efficiency on attempts taken from outside the paint but inside the three-point line.
- Playoff Success – A measure of how far a team advances in the NBA playoffs, often based on the number of rounds won.
- Regression Line – A statistical tool used in data visualization to show the trend or correlation between two variables.
- Regular Season Success – A team’s performance in the NBA regular season, often measured by win-loss record or playoff seeding.

## Methodology

### Data Collection

- Our data is directly from the NBA official website.
- Variables TrackedFGM: Field Goals Made (total)FGA: Field Goals Attempted (total)3PM: Three-Pointers Made3PA: Three-Pointers Attempted3P%: Three-Point Efficiency WIN%: Win Rate
- FGM: Field Goals Made (total)
- FGA: Field Goals Attempted (total)
- 3PM: Three-Pointers Made
- 3PA: Three-Pointers Attempted
- 3P%: Three-Point Efficiency
- WIN%: Win Rate

- FGM: Field Goals Made (total)
- FGA: Field Goals Attempted (total)
- 3PM: Three-Pointers Made
- 3PA: Three-Pointers Attempted
- 3P%: Three-Point Efficiency
- WIN%: Win Rate

### Methods

In this analysis, we utilized statistical methods and data visualization techniques to examine the relationship between three-point efficiency, mid-range field goal percentage, and team success in the NBA. The key metric used for correlation measurement is Pearson’s correlation coefficient, and multiple types of charts were employed to highlight different aspects of the data.

### Pearson’s Correlation Coefficient

Pearson’s correlation coefficient *r* is a statistical measure that quantifies the strength and direction of the linear relationship between two variables. It ranges from -1 to 1:

r = 1: Perfect positive correlation (as one variable increases, the other increases).

r = -1: Perfect negative correlation (as one increases, the other decreases).

r = 0: No correlation (the variables are unrelated).

In this analysis, Pearson’s correlation was used to assess how strongly three-point percentage (3P%) and mid-range FG% correlate with team success metrics, such as playoff advancement and win percentage.

### Scatterplots

- Used to analyze the relationship between shooting efficiency and success.
- Each point represents a team, and the trend line (regression line) shows the general direction of the relationship.
- The shaded region represents the confidence interval, which gives an idea of the possible range of the trend.
- In this analysis, scatterplots were used for:
- Three-Point Efficiency vs. Playoff Success
- Mid-Range FG% vs. Win Percentage

### Bar Charts

- Used to compare shooting percentages across different teams.
- This method allows a direct visual comparison of three-point percentage, mid-range percentage, and overall field goal percentage.
- In this analysis, a bar chart was used to compare:
- 3P%, Mid-Range FG%, and FG% for Each Team
- Win Rates of Top 10 Teams by 3P% vs. Top 10 Teams by Mid-Range FG%

These statistical and visualization methods provide a clear and quantifiable understanding of how different shooting strategies impact team performance, particularly in the playoffs where game-to-game adjustments play a crucial role.

## Body

![Figure 1](/assets/journalism/arc-three-point-shooting-shapes/figure-01.png)

To begin, three-point efficiency of NBA teams were first measured in terms of regular season success (win rate). According to the scatterplot, the two variables demonstrated strong linear correlation with a correlation coefficient of 0.86, suggesting that in the regular season, the number of three point shots made by a team is a statistically good predictor of their chances of winning.

![Figure 2](/assets/journalism/arc-three-point-shooting-shapes/figure-02.png)

When the same variables are plotted for the NBA playoffs in the same year, a much less significant albeit positive linear correlation was found between three-point percentage and win rate (0.43). In addition, the points on the scatterplot appear to be more spread apart than for the regular season. Some teams such as the Phoenix Suns and the Boston Celtics also appear as extreme outliers in the graph, both with similar 3P% values but drastically different win rates. This suggests that while three-point efficiency plays a role in winning, other factors may as well be detrimental to the victory of teams during playoffs.

![Figure 3](/assets/journalism/arc-three-point-shooting-shapes/figure-03.png)

Aside from three-pointers, teams are also able to score points via lay-ups, dunks, jump shots, and other various two-point field goals. This poses a new question regarding the topic of three-pointers and the playoffs: has there been too much emphasis placed on three-point goals? According to the bar chart that records the three-point, mid-range field goal, and field goal efficiencies of each team in the playoffs, teams with higher Mid-Range FG% tend to have lower 3P% values. This indicates that most teams have a preference between the two which is further supported by the statistically low correlation coefficient of 0.04 between the two variables.

![Figure 4](/assets/journalism/arc-three-point-shooting-shapes/figure-04.png)

To investigate further, a scatter plot between the variables Mid-Range FG% and WIN% was created. Interestingly, the two demonstrate a less significant correlation coefficient compared to with three-point efficiency. The graph’s points spread out in a similar fashion and there are multiple extremities which may have contributed to the lower coefficient of 0.32. The graph indicates that the playoffs are multifaceted, unable to rely on just one variable to determine the success of a team.

![Figure 5](/assets/journalism/arc-three-point-shooting-shapes/figure-05.png)

According to the bar chart displaying the top 10 teams by three-point and mid-range field goal efficiency, the teams with the highest win rates (measured by the variable WIN%) in the playoffs consistently performed well in both 3P% and mid-range FG%. In contrast, teams that excelled in only one of these two categories tended to have lower win rates.

## Conclusion

In conclusion, while there is a positive correlation between three-point shooting and win rate in the playoffs, a similar trend—albeit with a lower correlation coefficient—can also be observed for mid-range field goals. This suggests that while three-point efficiency is crucial, teams that excel in multiple scoring areas tend to perform best overall. Further analysis indicates that well-rounded teams, capable of balancing perimeter shooting with effective mid-range and inside play, achieve the highest levels of success.

However, there are several limitations to this analysis. One major constraint is the inability to assess the volatility of three-point shooting throughout different rounds of the playoffs due to the lack of round-by-round data. Additionally, this study does not account for key external factors such as defensive strategies, player matchups, and overall team composition, all of which play a significant role in determining postseason success. Another limitation is that the data used was exclusively from the most recent playoff season, which may not fully capture long-term trends or historical patterns.

Moving forward, it would be beneficial to explore how teams can strike a balance between three-point shooting and other essential elements, such as defensive efficiency and interior scoring, to maximize their chances of playoff success. A more comprehensive study incorporating multiple seasons, defensive metrics, and shooting volatility across different playoff rounds would provide a deeper understanding of the factors that contribute to winning at the highest level.

## References

- [https://www.nba.com](https://www.nba.com)
- [https://www.sportingnews.com/us/nba/news/stepehn-curry-golden-state-warriors-3-pointer/1cjje4rjv1apa1djxq4urf8bim](https://www.sportingnews.com/us/nba/news/stepehn-curry-golden-state-warriors-3-pointer/1cjje4rjv1apa1djxq4urf8bim)
