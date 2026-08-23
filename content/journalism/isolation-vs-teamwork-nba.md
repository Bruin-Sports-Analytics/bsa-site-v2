## Introduction

Basketball is a team game at its core, relying on the coordinated efforts of all five players on the court. While every team has a star player, it stands to reason that offenses are most effective when they involve movement, passing, and collective decision-making. Yet, in the final minutes of close games, many teams abandon these principles, shifting to stagnant isolation plays where their best scorer is tasked with creating offense alone.

This strategy often feels less efficient, even when executed by elite clutch performers like LeBron James, Steph Curry, or Luka Dončić. Why abandon the ball movement and spacing that were so effective earlier in the game? Is a one-man offensive approach really the optimal choice in high-pressure moments?

In this article, we aim to analyze whether isolation-heavy basketball in clutch moments—defined as the final five minutes of close NBA games—is more or less effective than team-centric play. By examining how often teams rely on isolation plays in these situations and measuring their success rates, we’ll explore whether this common shift in strategy truly delivers results.

### Clutch Scenarios and Offensive Strategies

In order to tackle this problem of determining whether iso-based play or team-based play is more effective in a tight game, we first have to define a couple of terms. First, we are defining a clutch game to be any game within a 5 point margin with 5 minutes to play. We were able to collect NBA data from the past 3 NBA seasons (2021-2022, 2022-2023, and 2023-2024) for every player that has played in a clutch game. Then we sorted out all players with less than 10 clutch games per season to ensure that we were truly obtaining the team’s best players. Then, to determine how often each player is utilized in the clutch moments of a game, we looked at each player’s usage rate. Usage rate measures the percentage of possessions a player of a team was involved in. For usage rate, involved means either a player attempted a field goal, free throw, or turned the ball over. So if a team has 100 possessions, and a player attempts 20 shots and commits 5 turnovers, their usage rate would be 25%. So although this isn’t exactly an isolation, the higher a player’s usage rate percentage, the more involved the player is in the offense, so we can use usage rate as a way of determining how iso-focused teams are in the final few minutes of close games. Finally, true shooting percentage (TS%) is a shooting efficiency metric that adjusts for the value of three-point shots, two-point shots, and free throws.

Below is a graphic of the top 20 players with the highest usage rate clutch time in the last 3 seasons (min of 10 games played).

![Figure 1](/assets/journalism/isolation-vs-teamwork-nba/figure-01.png)

As expected, this list hosts some of the best players in the league: Joel Embiid, Nikola Jokić, Kevin Durant, Stephen Curry - confirming the idea that teams often ask their best players for more offensive output in clutch situations. For example - Steph Curry’s usage rate in the 2023-2024 season overall was about 30% - but in the clutch time of games - his usage rate in iso-situations was over 40% - demonstrating that it's common for teams to ask more of their star players in clutch scenarios.

Because we are more focused on how a team performs in the clutch and whether iso-centric or team-centric offense is more effective, rather than look at individual players, we are going to look at how teams perform in the clutch. In order to see how often a team runs single man offense, we will look at the top 3 players in terms of usage rates for every team and take the average to give every team an average usage rate.

Using this average usage rate for the top 3 players, we can look at some teams with high usage average rates and low average usage rates and understand why a team might have a high or low average usage rate:

![Figure 2](/assets/journalism/isolation-vs-teamwork-nba/figure-02.png)

In this plot we see the 3 teams with the highest average usage rates make sense - in the 2024 76ers and 2023 Pelicans case - those two teams were armed with dangerous two headed monsters in Embiid and Maxey and Ingram and Zion respectively. And for the teams with the lowest average usage rates - this again makes sense. None of these teams have a clear cut number 1 option - so they don’t often run iso-centric offense in the clutch because of a lack of a definite number 1 star option.

### Clustering Teams by Clutch Performance

To better understand how teams utilize isolation or team-focused basketball in the clutch, we applied clustering to identify patterns in the data. Clustering is an unsupervised machine learning method that groups data points based on similarity. Unlike supervised methods, it doesn’t rely on labeled data. Instead, clustering uncovers hidden patterns, making it a powerful tool for exploring team performance.

We used the popular k-means algorithm for this analysis, selecting five centroids as the centers of the clusters. Each team was assigned to a cluster based on two metrics: the average usage rate of the top three players and the true shooting percentage difference. The goal of clustering is to group similar teams, helping us pinpoint what makes certain teams excel in the clutch.

The graph below illustrates the clustering results for NBA teams in the 2022, 2023, and 2024 seasons:

- X-axis: The average usage rate (as a percentage) of the top three players on each team. Teams further to the right have stars who shoulder a larger share of the offensive load in clutch moments.
- Y-axis: The difference between the weighted true shooting percentage of the top three players and the team’s overall true shooting percentage. This metric shows whether the top players perform better during clutch time compared to normal game situations. Players with higher usage rates have a greater influence on this calculation.

By grouping teams based on these metrics, we aim to identify what makes certain strategies effective in high-pressure moments.

![Figure 3](/assets/journalism/isolation-vs-teamwork-nba/figure-03.png)

As expected, most points fall below 0 on the y-axis, as scoring in the clutch is significantly harder than during normal gametime. The chart above shows 30 teams from each of the three seasons grouped into one of five clusters, each representing distinct patterns in clutch performance and isolation play.

- **Cluster 1** : Teams in this cluster excel in clutch situations, shooting efficiently compared to their normal game performance, while also relying heavily on isolation play. These teams demonstrate an ability to utilize isolation effectively to score under pressure.
- **Cluster 2** : These teams struggle in the clutch, shooting poorly and running minimal isolation play. This suggests a lack of star power to execute isolation effectively or a missing element that prevents them from performing at the level of Cluster 3.
- **Cluster 3** : The most intriguing cluster. These teams rely on isolation play less than average but score far more efficiently in clutch situations than during normal game time. This suggests they thrive on team-centric strategies or alternative approaches to isolation.
- **Cluster 4** : Teams here are average in both clutch shooting and the frequency of isolation play. Their performance is steady but unremarkable in high-pressure moments.
- **Cluster 5** : Interestingly, this cluster contains several playoff teams. These teams rely heavily on isolation play in the clutch but do so inefficiently. Despite their talent, they fail to translate their isolation strategy into consistent scoring success, distinguishing them from Cluster 1.

### The Role of Talent

After clustering all NBA teams from the past three seasons, one question stood out: Why do some teams, such as those in Clusters 1 and 5, favor isolation basketball in clutch situations, while teams in Clusters 2 and 3 take a different approach? To explore this, we examined the player talent on each team.

While scoring alone doesn’t fully define the talent level of an NBA roster, it provides valuable insight into how a team generates its offensive output. To assess talent across clusters, we analyzed points per game (PPG) for players on each team. Specifically, we calculated the number of players scoring between 10 and 20 PPG, those scoring over 20 PPG, and those scoring over 25 PPG. This breakdown highlights whether a team possesses a transformative star player who can be relied upon in clutch moments. Teams with such players are more likely to structure their offense around them during critical moments, leading to higher reliance on isolation play.

To better understand this, we categorized players into three talent tiers based on their offensive output:

1. **Category 1 (10-20 PPG)** : These players, while not superstars, are valuable role players and starters who significantly impact a game. They provide steady offensive contributions but are not at a star level.
2. **Category 2 (20-25 PPG)** : These players are often recognized as stars or All-Stars. While not elite, they are reliable scorers and essential to their team’s offensive success.
3. **Category 3 (25+ PPG)** : The league’s elite scorers. These players are unquestionably star-caliber, often All-NBA talents, and are the centerpiece of their team’s offensive strategy. These are the players teams depend on to win games, especially in high-pressure situations.

By analyzing the distribution of these player categories within each cluster, we can better understand why some teams lean heavily on isolation play in clutch moments while others favor a more team-oriented approach.

![Figure 4](/assets/journalism/isolation-vs-teamwork-nba/figure-04.png)

The graph above illustrates the average number of players scoring 10–20 points per game (PPG) for teams in each cluster. Teams in Cluster 1 have approximately 4.5 players in this scoring range, while teams in Cluster 2 lead with nearly 6 players on average. Interestingly, Clusters 2 and 3, which have the most players scoring 10–20 PPG, also correspond to teams with the lowest usage rates in clutch situations. This suggests that these teams rely more on balanced offensive contributions across multiple players rather than leaning heavily on a single star. By contrast, teams in Cluster 1, which favor isolation play in the clutch, tend to have fewer players in the 10–20 PPG range, potentially reflecting a stronger reliance on top-tier talent for offensive production during critical moments.

![Figure 5](/assets/journalism/isolation-vs-teamwork-nba/figure-05.png)

The graph above illustrates the average number of players per team scoring over 25 points per game (PPG) across clusters. As expected, teams in Clusters 2 and 3, which rely less on isolation in the clutch, have fewer elite-caliber scorers. In contrast, Clusters 1 and 4, which favor significant isolation play, have on average one player who is an elite scorer. This highlights a key distinction: the discrepancy in clutch efficiency between teams in Cluster 3 (efficient but less reliant on isolation) and Cluster 1 (efficient and heavily reliant on isolation) likely comes down to talent level. Teams in Cluster 1 can depend on their elite scorers to execute isolation effectively in critical moments, while Cluster 3 teams compensate with other strategies.

Each cluster offers unique insights and tailored advice for teams:

- **Cluster 1** : These teams have star players who are effectively utilized, allowing them to score efficiently in clutch situations. The current strategy of relying on their top talent is working well and should be maintained.
- **Cluster 2** : Teams in this cluster face a difficult challenge—they lack significant talent and struggle to score in the clutch. Developing or acquiring star players could be a solution, but until then, exploring strategies that prioritize teamwork and balanced offensive contributions may help improve their performance.
- **Cluster 3** : Despite having less talent than Cluster 1, these teams achieve similar levels of clutch efficiency. This shows that success in high-pressure moments is possible without elite scorers, likely through strong team-oriented play or other innovative strategies. Teams in this cluster should continue leveraging these approaches to maximize their efficiency.
- **Cluster 4** : These teams have nearly as much elite scoring talent as Cluster 1 but are less efficient in the clutch. Unlike Cluster 1, they rely less on isolation play. To improve their performance, teams in Cluster 4 should consider leaning more heavily on their top scorers in clutch moments, as a more isolation-focused strategy may yield better results.
- **Cluster 5** : While these teams lack the elite scoring talent of Clusters 1 and 4, they rely on isolation basketball as much as Cluster 1. This over-reliance on isolation play hurts their clutch efficiency. To improve, teams in Cluster 5 should shift their focus toward team-oriented basketball to create more efficient scoring opportunities in high-pressure situations.

## Conclusion

How a team performs in the final minutes of a close game can define their season. A strong showing in clutch situations can transform a 39-43 record into a 48-34 success story. While basketball is about more than just clutch performances, how teams approach these high-pressure moments can make all the difference.

In tight games, many teams rely on their star player to take over. This isolation-heavy strategy often proves effective for teams with elite talent, as seen in Cluster 1. However, teams without the necessary star power, like those in Cluster 5, struggle with efficiency when relying too heavily on isolation. Similarly, talented teams that maintain a team-focused offense, like those in Cluster 4, may also falter under clutch conditions, unable to maximize their top players’ potential.

The 2021-2022 Golden State Warriors provide a fascinating example. Despite their championship success, they fall into Cluster 5, where isolation basketball was not a strength. Instead, the Warriors thrived when utilizing their signature motion-heavy offense, creating space for Steph Curry and leveraging the strengths of their entire roster. This demonstrates that success in clutch moments isn’t solely about having star players—it’s about knowing how to use them effectively.

Ultimately, while isolation basketball is an essential tool for many teams, it is not universally effective. The key lies in understanding when and how to use it. Talent is crucial, but deploying that talent within a system that amplifies its strengths is just as important. Winning in the clutch requires not only star power but also strategic adaptability—a balance that every team must strive to achieve.

[https://www.nba.com/stats/teams/advanced](https://www.nba.com/stats/teams/advanced)

[https://www.nba.com/stats/players/clutch-advanced](https://www.nba.com/stats/players/clutch-advanced)

[https://www.basketball-reference.com/leagues](https://www.basketball-reference.com/leagues)
