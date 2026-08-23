### By: Angelina Muliadi and Brian Mualim

## Introduction

Ever since the 1983 season, the NBA has awarded the Defensive Player of the Year award to the best defensive player of the regular season. That begs the question, who would be the Offensive Player of the Year? The player that dominates the court with unparalleled scoring ability, strategic playmaking, and an innate understanding of the game's nuances. The (theoretical) Offensive Player of the Year embodies the essence of offensive excellence, embodying precision, creativity, and sheer determination in every aspect of their game. Through the use of statistics, we aim to embark on this exploration, seeking to uncover the player whose offensive contributions transcend mere numbers, leaving an indelible mark on the court and inspiring generations of basketball enthusiasts worldwide.

## Methodology

### Definitions:

Before delving into who the candidates for Offensive Player of the Year are, we must first understand the terminologies of the sport.

1. eFG% (Effective Field Goal Percentage): Adjusted shooting percentage accounting for the value of 3-point shots.
2. AST (Assists): Passes leading directly to teammate scores.
3. PTS (Points): Total points scored by a player.
4. Non-TOV% (Turnover Percentage): Percentage of possessions not ending in turnovers.
5. WS (Win Shares): Player's contribution to team wins.
6. BPM (Box Plus/Minus): Player's overall impact compared to the average.
7. VORP (Value Over Replacement Player): Player's value compared to a replacement-level player.

### Sourcing the Dataset:

We sourced our dataset from [basketball-reference.com](http://basketball-reference.com), due to its user-friendly user interface that allowed us to extract data directly into CSV files. We ran a web-scraping program to automate this part of the process for our convenience.

After compiling the required dataset, we had to do some minor data cleaning as some players had foreign names which were translated wrongly into our dataset and interfered with our analysis.

### Methods of Analysis:

The process of finding the NBA’s Offensive Player of the Year (OPOY) involves evaluating a linear combination of the 7 metrics mentioned above. Each metric carries a weight that we thought reflects its significance in determining offensive prowess. For example, metrics like assists and points scored typically hold more weight than others, such as turnover and field goal percentage.

In the data preprocessing step, each metric underwent a standardization process. This involved transforming the raw metrics to a common scale by assigning a value of 0 to the player with the worst rating and a value of 1 to the player with the best rating within each year. This ensured a consistent baseline for comparison across different metrics and accounted for differences in their raw numeric values. Subsequently, we’re able to multiply each metric by its respective weight.

A composite offensive score is then calculated for each player, providing a comprehensive measure of their offensive contribution. This approach aims to normalize the metrics within each annual context and assist us in providing a comprehensive and weighted evaluation framework for player performance over the years. Following the calculation of offensive scores, the analysis identifies the player with the highest offensive score for each year, which enables us to recognize which player can be crowned as that year’s “Offensive Player of the Year”.

## Scoring System:

The weights we used are as shown below:

| **Metrics** | **Weights** |
| --- | --- |
| eFG% | 10% |
| Assists | 20% |
| Points | 30% |
| Non-TOV% | 10% |
| WS | 10% |
| BPM | 10% |
| VORP | 10% |

### Metrics

### Weights

eFG%

10%

Assists

20%

Points

30%

Non-TOV%

10%

WS

10%

BPM

10%

VORP

10%

Due to the initial standardization of each metric, we were able to make a system that grades players on a 100 point scale.

Additionally, the “assists” metric was slightly modified to account for the difference in each player’s positional responsibilities. Point guards had their assists cut down by 20%, while Centers had their assists increased by 20%.

## Results

![Figure 1](/assets/journalism/offensive-player-of-the-year/figure-01.png)

## Winners Analysis

### By Age:

![Figure 2](/assets/journalism/offensive-player-of-the-year/figure-02.png)

As we can see from the table above, most of the players winning the award fall between the ages of 25 to 29. This is expected as players usually enter their prime and become either key playmakers or top scorers at this age. Surprisingly, the age 23 has 5 different players winning the award, which are namely Allen Iverson, Lebron James, Tracy McGrady, Michael Jordan, and Magic Johnson.

Interestingly enough, Lebron is the youngest player to win the award at age 20, while Jordan is the oldest player to win the award at age 34. Lebron’s first award comes in his 2005 season with the Cavaliers, in which he played a career-high 42.4 minutes per game and averaged 27.2 points per game with 7.2 assists, which were good for 3rd and 6th in the league respectively. Jordan’s last award came in his 1998 season in which he won the last championship of the Chicago Bulls’ dynasty. That year, he led the league in scoring and VORP, while also being third in box plus-minus.

### By Position:

![Figure 3](/assets/journalism/offensive-player-of-the-year/figure-03.png)

As can be seen from the pie chart above, Point Guards (PG) have the least number of OPOY winners. The 3 PG winners were Steph Curry in 2016, Russell Westbrook in 2017, and James Harden in 2019. It’s worth noting that these 3 put up historic offensive numbers during those years, with Steph winning the first-ever unanimous MVP on a 73-9 season, Russell Westbrook winning MVP while averaging a triple-double, and James Harden having the 3rd highest PPG in the 21st century, behind only himself and Kobe Bryant in 2006.

On the other hand, Shooting Guards (SG) having the most number of OPOY winners can be attributed to Michael Jeffrey Jordan, who notched 10 of the titles himself between the years of 1987 - 1993 and 1996 - 1998. Other names in this category include: Kobe Bryant, Allen Iverson, Magic Johnson, James Harden, and Tracy McGrady.

### Compared to the average player:

![Figure 4](/assets/journalism/offensive-player-of-the-year/figure-04.png)

As seen in the bar chart above, the Offensive Player of the Year for each respective season is achieving a score of twice the average. Achieving a score twice the average underscores the dominance of these Offensive Players of the Year within their respective seasons. Their ability to consistently outperform their peers speaks volumes about their talent and impact on the game. Although we have analyzed the player’s offensive score through the metric outlined above. There may also be external factors that contributed to their offensive performance, such as team dynamics, coaching strategies, or even rule changes.

## Conclusions/Improvements/Limitations

In our journey to identify the Offensive Player of the Year in the NBA, we made a comprehensive analysis utilizing a combination of seven key offensive metrics: eFG%, assists, points, non-turnover percentage, win shares, box plus/minus, and value over replacement player. We standardized the metrics, assigned weights by importance, and calculated offensive scores for each player. This approach allowed us to evaluate their offensive abilities by accounting for the different seasons and player positions.

In our analysis of the results, there is a trend of dominance for OPOY by shooting guards. Moreover, our comparison to the average player showcased the difference in the caliber of offensive skill of OPOY winners compared to their peers as they consistently achieved offensive scores double that of their peers.

However, it is important to acknowledge the limitations of our analysis. Although our method of analysis does provide valuable insights, the predetermined weights were manually assigned which may introduce bias to our model. Ideally, we would perform a comprehensive analysis using linear regression in which we find the weights more objectively and which variables are considered statistically significant.

### Citations

[https://www.basketball-reference.com/leagues/NBA_1978_per_game.html](https://www.basketball-reference.com/leagues/NBA_1978_per_game.html)

[https://www.basketball-reference.com/leagues/NBA_1978_advanced.html](https://www.basketball-reference.com/leagues/NBA_1978_advanced.html)

The years we included are from 1978 to 2023
