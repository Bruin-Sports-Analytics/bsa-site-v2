## Introduction

As sports are a very prevalent aspect in a child's upbringing it has come to wonder whether a child's hometown has an impact on their probability of becoming a professional athlete. This sports article looks into the frequency of professional athletes based on their hometown state and what other factors may be correlated or a result of their upbringing environment.

## Core Metrics

- NBA: National Basketball Association
- NFL: National Football League
- MLB: Major League Baseball
- FG%: Field goal percentage - the percentage of shots made from the field (two-pointers and three-pointers) out of all attempted shots

## Method

While the United States is home to a large number of high level professional athletic leagues this paper focuses on the athletes within the NBA, NFL, and MLB. These leagues were specifically chosen due to the higher rates of professionals coming from the United States while the other professional leagues such as the NHL and MLS have a large number of foreign players. To analyze geographic trends in professional athletes’ origins, we compiled data on NBA, NFL, and MLB players, focusing specifically on their listed birthplaces. We visualized both the distribution of players by U.S. state and their average career length, and then compared these patterns across the three major leagues. Based on our findings we found significance in looking into other possible factors to make sense of the finding distributions.

## NBA

![Figure 1](/assets/journalism/where-do-professional-athletes-come-from/figure-01.png)

Patterns in NBA player birthplaces show a clear concentration in historically strong basketball states. As illustrated in the heatmap, California, New York, and Illinois top the charts in terms of the number of professional basketball players produced. California leads by a wide margin, accounting for over 10% of all NBA players, which is likely driven by its large population, economic opportunities, and strong basketball culture.

![Figure 2](/assets/journalism/where-do-professional-athletes-come-from/figure-02.png)

As we look at the average number of years played, the scatterplot shows that players from states with higher representation in the league tend to have career lengths similar to that over players from other states, suggesting that career length in the NBA is relatively independent of a player's birth state. Some of these states host multiple teams, such as California with four teams and New York with two teams. Interestingly, the next states in the ranking are Illinois, Pennsylvania, and Ohio, despite having only one NBA team each and a significantly smaller population compared to California and New York. Next in rank is Texas, which has three NBA teams and a notably large population, yet produces fewer NBA players than might be expected given these advantages.

![Figure 3](/assets/journalism/where-do-professional-athletes-come-from/figure-03.png)

When analyzing the relationship between a state’s representation in the NBA and its players’ average FG%, we can see that states that produce a high proportion of players do not have significantly different average FG%s compared to other states. While certain states may produce more athletes overall, they are not necessarily producing NBA players who shoot significantly better or worse than athletes from other states across the U.S..

## NFL

![Figure 4](/assets/journalism/where-do-professional-athletes-come-from/figure-04.png)

Interestingly, the NFL’s geographic spread closely mirrors that of the NBA, with states like California and Texas (each producing over 10% of all NBA players) as well as Florida being home to some of the league’s most powerful teams. In the heatmap of the number of NFL players from different states across the U.S., we can see that these states unsurprisingly account for a significant proportion of all NFL players. This is likely influenced not only by their large populations but also by the strong football infrastructure and culture present in these states even starting from a high school age. California and Florida each have three NFL teams, and Texas has two, compared to most other states, which have only one team or none at all.

![Figure 5](/assets/journalism/where-do-professional-athletes-come-from/figure-05.png)

For the career longevity of NFL players, the distribution appears relatively uniform across birth states, including the dominating states. What stands out are mid-sized states like Louisiana and Georgia. Though they produce fewer players overall, their athletes tend to have longer NFL careers on average. This could be influenced by a variety of factors, such as physical health, performance, and positional demands.

## MLB

![Figure 6](/assets/journalism/where-do-professional-athletes-come-from/figure-06.png)

The MLB follows a similar geographic trend to that of the NBA and NFL, and the heatmap of MLB players by birth state reveals that California, the home to five MLB teams, again leads by a significant margin, producing over 10% of all MLB players. Other major contributors include Pennsylvania, New York, Illinois, Texas, and Ohio, which all have two MLB franchises, whereas most other states have one or none. Pennsylvania stands out in particular, ranking the second highest in player production, despite having a smaller population than states like Texas or Florida. This suggests that factors beyond population size may influence player development.

![Figure 7](/assets/journalism/where-do-professional-athletes-come-from/figure-07.png)

When looking at the average career length of players, its correlation to birthplace appears relatively weak. Players from the states leading in MLB player production play around the same number of years compared to other states, suggesting that birthplace has little to no impact on how long a player remains in the league. As with the NBA and NFL, career longevity is more likely influenced by external factors.

## Additional Insights

![Figure 8](/assets/journalism/where-do-professional-athletes-come-from/figure-08.png)

This population map provides context for interpreting the player proportion visualizations across NBA, NFL, and MLB. As the previous maps demonstrate the amount of professional athletes in each state, it is important to note the distribution of state populations across the country since comparing player proportions without accounting for population size can be misleading. Since California, Texas, New York, and Florida account for a large share of the country’s population, it’s important to remember that in other graphs, a high number of players from these states reflects frequency rather than percentage.

![Figure 9](/assets/journalism/where-do-professional-athletes-come-from/figure-09.png)

A potential factor to consider in the influence of hometown on professional athletes is the level of participation in high school sports in each state. Maine was the state with the highest percentage with approximately 62% of high school students being enrolled to play a sport while Nevada was the lowest at around 19%. This variation in youth sports engagement can impact the number of athletes who eventually reach professional leagues. Surprisingly, some of the states that dominate professional sports player production like California, Texas, and New York do not stand out in high school sports participation rates. This suggests that there are other more important factors that play a role in developing professional athletes.

![Figure 10](/assets/journalism/where-do-professional-athletes-come-from/figure-10.png)

This line graph comparing the proportion of professional athletes from each state across the NBA, NFL, and MLB reveals relatively consistent patterns. California, Texas, and Florida rank among the highest prey-producing states across all three leagues, but some fluctuations do exist. While population size clearly plays a role, it does not entirely determine player output. Some highly populated states rank lower than expected while some smaller states consistently outperform. This indicates that there are many other factors that play a significant role in shaping professional athletic careers.

## Conclusion

While population size and access to major league teams certainly help explain some of the patterns in professional athlete origins, this analysis reveals that birth state alone does not fully determine athletic success. The path to becoming a professional athlete is shaped by a mix of factors, such as physical attributes, access to sports, quality coaching, sports environment growing up, and support from others. Athletic success isn’t born in one place, and while certain states may have some advantages, talent can emerge from almost anywhere!

## Sources

- [https://www.kaggle.com/datasets/thedevastator/birthplaces-of-nba-and-aba-players](https://www.kaggle.com/datasets/thedevastator/birthplaces-of-nba-and-aba-players)
- [https://www.kaggle.com/datasets/kendallgillies/nflstatistics](https://www.kaggle.com/datasets/kendallgillies/nflstatistics)
- [https://www.kaggle.com/datasets/seanlahman/the-history-of-baseball?select=player.csv](https://www.kaggle.com/datasets/seanlahman/the-history-of-baseball?select=player.csv)
- [https://www.statsamerica.org/sip/rank_list.aspx?rank_label=pop1](https://www.statsamerica.org/sip/rank_list.aspx?rank_label=pop1)
- [https://www.usatodayhss.com/story/sports/high-school/2024/06/08/where-does-your-state-rank-data-shows-percentage-high-school-students-participate-sports-across-the/76228756007/](https://www.usatodayhss.com/story/sports/high-school/2024/06/08/where-does-your-state-rank-data-shows-percentage-high-school-students-participate-sports-across-the/76228756007/)
