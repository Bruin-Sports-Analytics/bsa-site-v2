## Introduction

The “sophomore slump” is a commonly believed NBA phenomenon that suggests that rookies often face a decline in performance during their second season. This article will examine the validity of this argument by looking broadly at 2018-2023 rookies and their development from their first to their second seasons. After this, we will focus on the Rookie of the Year (ROTY) winners from these years, as the “sophomore slump” myth typically refers to the most dominant rookies. Using all this info, we will try to predict the sophomore season statistics of the 2023-2024 ROTY finalists: Victor Wembanyama, Chet Holmgren, and Brandon Miller.

Before moving further, we will define important abbreviations used throughout the article:

PPG- Points per game

PPM- Points per minute

EFF- Efficiency

PTS - Points

REB- Rebounds

AST- Assists

STL- Steals

BLK- Blocks

FG- Field Goals

FT- Free Throws

FG%- Field Goal Percentage

3FG%- Three Point Percentage

FT%- Free Throw Percentage

TOV- Turnovers

MP- Minutes Played

GP- Games Played

## The Data

All the players in the following data must have played at least 70% of their team’s games in their rookie and, if applicable, sophomore seasons. This minimum helps preserve the data’s consistency, which allows for more accurate analysis and predictions.

We can help track the progression of 2018-2023 rookies going into their sophomore seasons by comparing their rookie and sophomore PPG. In addition, we can use an advanced statistic called EFF, which is calculated by the following formula: (PTS + REB + AST + STL + BLK − Missed FG − Missed FT - TOV) / GP. EFF is a comprehensive statistic that gives a better representation of a player’s productivity on the court when compared to PPG. We compared PPG and EFF using scatter plots that include the best line of fit, as shown below.

![Figure 1](/assets/journalism/sophomore-slump-nba/figure-01.png)

The graph comparing PPG shows a 17.2% increase in PPG when looking at the progression of 2018-2023 rookies into their sophomore seasons. In addition, we can see that the EFF average percentage increase is even higher at 18.5%.

While some rookies have a decrease in EFF and PPG, these percentages indicate an overall improvement for these rookies. However, we fail to consider the potential change in minutes played from their rookie to sophomore seasons. To explain, an increase in minutes played would most likely lead to an inflated PPG, and similarly, EFF could be impacted as well. The opposite is also true: decreased minutes could lead to deflated PPG and EFF. To help account for this, we constructed similar scatter plots with PPM and EFF per minute instead of PPG and EFF, respectively. By doing this, we can track player improvement from rookie to sophomore seasons without a player’s change in minutes affecting our data.

![Figure 2](/assets/journalism/sophomore-slump-nba/figure-02.png)

While the percentages are not as high as that from the PPG graph, we still see an 8.5% improvement in PPM, demonstrating that, on average, there is a non-negligible improvement when 2018-2023 rookies enter their sophomore seasons. In addition, we still see an 8.8% improvement in EFF per minute when looking at 2018-2023 rookies progressing into their sophomore seasons. PPG, PPM, EFF, and EFF per minute all demonstrated an increase when examining 2018-2023 rookies and their progression into their sophomore seasons, which proves that, on average, a player will improve statistically between their first and second seasons.

While this helps to disprove the “sophomore slump” argument, we can not entirely do so without taking a closer look at 2019-2023 ROTY winners and comparing their PPM and EFF per minute from their rookie seasons with their sophomore seasons using bar graphs.

![Figure 3](/assets/journalism/sophomore-slump-nba/figure-03.png)

Looking at these 5 ROTY winners, we see an average 12.5% increase in PPM, which helps demonstrate the improvement these dominant rookies underwent. Additionally, each ROTY winner improved in PPM, which shows a consistent increase in scoring production among top rookies. We also see an average 12.0% increase in EFF per minute which helps to demonstrate the improvement that these dominant rookies underwent. While Ja Morant and Scottie Barnes underwent a slight decrease in EFF per minute, on average, these ROTY winners demonstrated noticeable improvement, which disproves the notion of the sophomore slump. While some rookies may not improve or even get slightly worse in their sophomore seasons, on average, we notice an improvement in statistics such as PPG, PPM, EFF, and EFF per minute, which indicate improved overall performance in their sophomore seasons.

Below, we constructed a correlation matrix to further explore the relationship between rookie and sophomore seasons. The values on this matrix range from -1 to 1, with values closer to -1 indicating a negative relationship, values closer to 1 indicating a positive relationship, and values closer to 0 indicating no relationship.

![Figure 4](/assets/journalism/sophomore-slump-nba/figure-04.png)

The correlation matrix indicates that Rookie PPG, Rookie REB, and Rookie AST have strong positive correlations with their respective sophomore metrics (0.77 for PPG, 0.86 for REB, and 0.85 for AST), suggesting players who excel in scoring, rebounding, and assisting as rookies tend to maintain or improve these skills in their sophomore year. Additionally, the high correlation between Rookie MP and Sophomore PPG (0.82) implies that consistent playing time as a rookie contributes significantly to scoring improvement in the following season.

This matrix highlights that statistics in a player's rookie season are predictive of their continued development and improvement in their sophomore year. As a result, we can use this data to predict the sophomore statistics of 2023-2024 rookies. Particularly, we will look at the 2023-2024 ROTY Finalists: Victor Wembanyama, Chet Holmgren, and Brandon Miller. We will use a linear regression model trained and tested with 2018-2023 NBA rookie statistics and these players’ stats from the following season. For this model, we decided to use 80% of the data for training and the remaining 20% for testing. Linear regression is used to find a relationship between a dependent variable and one or more independent variables. In this case, the independent variables are the rookie statistics, and the dependent variables are the sophomore statistics of these current rookies. By finding this relationship, we can enter rookie statistics to get predicted sophomore statistics. Once we input the 2023-2024 ROTY Finalists statistics into the model, we get the predicted statistics in the table below.

![Figure 5](/assets/journalism/sophomore-slump-nba/figure-05.png)

Our model shows that the 2023-2024 ROTY Finalists improved statistically or remained the same for PPG, REB, AST, STL, and BLK in their predicted sophomore seasons. While TOV and shooting efficiency (FG%, FG3%, and FT%) did not always necessarily improve or stay the same, we can see that all three of these rising sophomores are predicted to improve in most significant statistics for their next NBA season. The increase in minutes played for all three players also indicates an increased role in their respective teams, which could explain the drop in efficiency for these future sophomores.

## Conclusion

According to our data and statistical methods, we can debunk the commonly believed “sophomore slump” in the NBA. By examining data from 2018 to 2023, we observed noticeable improvements in key metrics such as Points per Game (PPG), Points per Minute (PPM), Efficiency (EFF), and EFF per minute from rookie to sophomore seasons. Specifically, ROTY winners from 2019 to 2023 showed consistent increases in PPM and EFF per minute, further disproving the “sophomore slump” myth. Using a linear regression model, we were able to predict that the 2023-2024 Rookie of the Year (ROTY) finalists - Victor Wembanyama, Chet Holmgren, and Brandon Miller - will statistically improve in most categories in their sophomore seasons.

So, why does the belief in the “sophomore slump” persist despite evidence to the contrary? A thorough exploration of this belief would require a much more extensive article, but we can offer a partial explanation. NBA rookies face intense scrutiny, and critics often have high expectations for their sophomore seasons. When these expectations are not met, despite glimpses of improvement, players are often unfairly labeled as experiencing a “sophomore slump.” It’s crucial to appreciate and support rookies in their development, as they represent the future generation of the NBA. Recognizing their progress, rather than focusing solely on meeting inflated expectations, will foster a more accurate and supportive understanding of player development.

[https://www.nba.com/stats/leaders?SeasonType=Regular+Season&Season=2018-19](https://www.nba.com/stats/leaders?SeasonType=Regular+Season&Season=2018-19)

[https://www.nba.com/stats/leaders?SeasonType=Regular+Season&Season=2019-20](https://www.nba.com/stats/leaders?SeasonType=Regular+Season&Season=2019-20)

[https://www.nba.com/stats/leaders?SeasonType=Regular+Season&Season=2020-21](https://www.nba.com/stats/leaders?SeasonType=Regular+Season&Season=2020-21)

[https://www.nba.com/stats/leaders?SeasonType=Regular+Season&Season=2021-22](https://www.nba.com/stats/leaders?SeasonType=Regular+Season&Season=2021-22)

[https://www.nba.com/stats/leaders?SeasonType=Regular+Season&Season=2022-23](https://www.nba.com/stats/leaders?SeasonType=Regular+Season&Season=2022-23)

[https://www.nba.com/stats/leaders?SeasonType=Regular+Season&Season=2023-24](https://www.nba.com/stats/leaders?SeasonType=Regular+Season&Season=2023-24)

[https://www.nba.com/stats/help/statminimums](https://www.nba.com/stats/help/statminimums)
