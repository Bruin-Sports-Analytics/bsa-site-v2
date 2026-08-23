### By: Paige Lee and Shuqin (Sue) Tang

Historically, there has been a disproportionate number of male coaches in the Olympic Games. In the Tokyo 2020 Summer Olympics, only 13% of the coaches were females. Given that a record number of female athletes competed in the Beijing 2022 Winter Olympics (constituting 45% of athletes), we wondered why the proportion of female coaches has not been increasing at a similar rate. We wanted to analyze and compare the Olympic performance of teams that are coached by males versus females for a sport where gender differences matter less.

Curling is one of the few Olympic sports that offers mixed-gender events, as the sport itself is played and scored very similarly in both male-only and female-only events. Although males tend to have more physical strength than females, this difference doesn’t seem to matter much in curling. While male curlers tend to play with heavier weight stones, a 2009 article published in the *Journal of Sports Science Medicine* found that male curlers’ sweeping force tends to decline significantly over the course of a game, while female curlers’ force remains consistent. As for mixed-gender competition, the mixed doubles event was introduced to Olympic curling in 2018, and since then, it has become the most popular type of doubles event in curling. Given the less dramatic gender differences in curling and its greater prevalence of mixed-gender events, we believe that curling is the best Olympic sport to analyze for coach gender differences with minimal influence from athlete gender differences.

For our analysis, we selected curling data from the most recent Olympic Games, which was the Beijing 2022 Winter Olympics. First, we sought to identify which teams scored the greatest total number of points (from all games) and the greatest average number of points per game.

![Figure 1](/assets/journalism/olympic_curling/figure-01.png)

![Figure 2](/assets/journalism/olympic_curling/figure-02.png)

![Figure 3](/assets/journalism/olympic_curling/figure-03.png)

![Figure 4](/assets/journalism/olympic_curling/figure-04.png)

![Figure 5](/assets/journalism/olympic_curling/figure-05.png)

![Figure 6](/assets/journalism/olympic_curling/figure-06.png)

Among the three categories of Olympic curling events, teams tended to score the lowest total points and lowest average points in their male-only events, which were dominated by Great Britain and Sweden. In male-only events, these teams scored the greatest total points (75 and 74 respectively) and the greatest average points (6.8 and 6.7 respectively). In contrast, teams tended to score the highest total points and highest average points in their female-only events, which were dominated by Great Britain, Sweden, and Canada. The greatest total points scored in female-only events were 85 and 84 by Great Britain and Sweden respectively. The greatest average points scored in female-only events were 7.9 and 7.7 by Canada and Great Britain respectively. In mixed events, the greatest total points and average points were observed: 95 and 8.6, both scored by Italy. However, the performance of other teams in mixed-events seemed to fall in between the male-only and female-only events in terms of total points and average points scored.

To further support our identification of the best-performing Olympic curling teams in the 2022 Beijing games, we analyzed the breakdown of medals earned by each team.

![Figure 7](/assets/journalism/olympic_curling/figure-07.png)

The teams that earned the most medals were Sweden and Great Britain. Sweden earned a total of 12 medals (seven bronze and five gold), and Great Britain earned a total of 10 medals (five silver and five gold). Canada and Italy were also identified as top-performing teams, earning five bronze medals and two gold medals respectively.

With the best-performing teams in each event category in mind, we further analyzed each team’s breakdown of male and female coaches.

![Figure 8](/assets/journalism/olympic_curling/figure-08.png)

![Figure 9](/assets/journalism/olympic_curling/figure-09.png)

*Gender breakdown of coaches by event (left) and by team (right)*

Of the three event categories, teams in female-only events tended to earn consistently higher total points and average points. In the 2022 Beijing Olympics, two of the 12 coaches in women’s events were female. In male-only events, teams earned the lowest total points and average points, and one out of 10 coaches of men’s events were female. Mixed event performance fell somewhere between that of the male-only and female-only categories, and none of the 10 coaches were female. Adding to the inconclusive nature of these results, the event category data was missing for 19 coaches, two of whom were female. Furthermore, of the 51 curling coaches in the dataset, only five of them were female, so missing data on two of five female coaches heavily influences the conclusions we can draw. For these reasons, it is difficult to determine the relationship, if any, between coaches’ gender on performance in various curling event categories.

As for the breakdown of coaches by team, Canada, Sweden, and the United States each had one female coach, and Denmark had two female coaches. We had previously identified Sweden and Canada as top-performing teams. Specifically, Sweden dominated both male-only and female-only events, while Canada dominated female-only events. Denmark, which had the greatest number of female coaches for a single team (two out of their four coaches), only competed in male-only and female-only events, and they performed relatively poorly in terms of total points and average points across those events. The United States is a similar case, where one of their three coaches was female, and they performed relatively poorly across all events. We had previously identified Great Britain as a top-performers in male-only and female-only events, and Italy as a top performer in mixed events, but neither team had any female coaches. Based on these results, there is no clear answer regarding whether coaches’ gender has a substantial impact on their team’s curling performance. We believe this analysis is especially difficult because we’re trying to draw conclusions based on a very small number of female curling coaches who participated in the 2022 Beijing Olympics.

We performed a t-test to see if the scores for each game were significantly different for teams with female coaches versus teams with no female coaches, assuming the two groups have equal variances. The average score per game for teams that had no female coaches was 6.583784, and the average score per game was 6.247706 for teams that had female coaches. According to the results from the t-test, this difference in means is not considered to be significant, as the p-value is 0.2318, which is greater than 0.05.

By analyzing the scores of the curling events in the 2022 Winter Olympics, we tried to investigate whether there is a relationship between the performance of each team and their coaches’ gender. We chose to study whether coaches’ gender matters because we observed the percentage of female coaches is small compared to the percentage of female athletes in the Olympics. We hoped that our analysis of this dataset would give people more insight into the gender diversity and representation of the Olympic Games.

However, we did not find a direct relationship between the gender of coaches and the performance of their teams. Some of the best performing teams like Great Britain, Sweden, Canada, and Italy had either one or no female coaches, while other teams that had female coaches, such as the U.S. and Denmark, didn’t perform as well. Still, it is very difficult to draw any meaningful conclusions about coaches’ gender and curling performance due to the very small number of female coaches in the dataset and the fact that two of them had missing data. Additionally, through the t-test, we found that the difference between the mean scores of the teams with female coaches and those without female coaches was not significant.

We hope that in the future, as more female athletes enter the Olympics, the number of female coaches will also increase. When more data becomes available on female coaches, perhaps we will be able to identify trends in how they affect the performance of their teams, how male and female approaches to coaching may differ, and which coaching styles are best suited for each Olympic sport and team.

### Source

[*https://www.kaggle.com/datasets/piterfm/beijing-2022-olympics*](https://www.kaggle.com/datasets/piterfm/beijing-2022-olympics)
