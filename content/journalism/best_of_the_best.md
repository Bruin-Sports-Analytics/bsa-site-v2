The NBA Draft—it is one of the most exciting moments of professional basketball. Not only do worse-performing teams gain an opportunity to improve themselves by selecting a worthy prospect among lottery picks, but all teams involved also seek to strengthen their position in the league through late-round picks and/or beneficial trade acquisitions. But arguably the most exciting element of this event is the anticipation over who will be selected with the first overall pick.

Given that these players are chosen first, it is assumed by most that they are the best players of their respective draft classes and that they will generally outperform the average NBA player over the course of their careers. After all, it would be unreasonable for teams with the first pick to *not* choose whom they see as the best fit/player for their team.

However, is this common presupposition actually supported by the statistical evidence? If so, what is the exact disparity between the average player and the average first overall pick? And finally, who are the all-time best players among first overall picks, and who are the all-time worst players among this group? To help answer these questions, this article will make use of the following advanced statistics: PER, RAPTOR WAR, WS per 48 minutes, and VORP.

## The Average Player Versus the First Overall Pick

To figure out whether or not first overall picks are actually better than the average NBA player, this article utilizes multiple histogram plots that compare the distribution of all NBA players who have played after 1976—the merger of the ABA and the NBA—with the distribution of first overall picks who were drafted after 1976 in terms of the aforementioned advanced statistics. Following each plot, we will perform a difference-in-means test to ascertain whether the difference between the distributions is statistically significant.

![Figure 1](/assets/journalism/best_of_the_best/figure-01.png)

The first plot compares all NBA players and the all first overall picks in terms of RAPTOR WAR, which was created by FiveThirtyEight to measure the amount of points that a player contributes through their offense and defense relative to the average player. In addition, the rating incorporates modern-day skills such as floor spacing and spot creation. As the figure shows, the distribution of first overall picks is much more to the right of the distribution of all NBA players, with the mean RAPTOR WAR for general players being 0.83, while the same figure for first overall picks is 3.70. It is true that there are three NBA players that are better than all of the first overall picks. However, one must note that the three players are Michael Jordan, Chris Paul, and John Stockton, whose careers are not exactly run-of-the-mill. Also, the general impression from the figure is still that first overall picks are much better than NBA players when it comes to RAPTOR WAR.

The difference-in-means test only confirms this expectation—the probability of observing such an outcome at least as extreme as the one observed given the null hypothesis of the two distributions being equal (otherwise known as the p-value) is approximately zero with a t-score of -6.25. Therefore, it would be fair to conclude that the difference between the two distributions is significantly different, with the group of first overall picks exceeding the general body of NBA players.

![Figure 2](/assets/journalism/best_of_the_best/figure-02.png)

The next statistic this article will cover is PER, which was created by John Holinger of ESPN. Arguably the most famous and well-known measure of efficiency in the NBA, it gives random weight to a select number of statistics and calculates a rating of efficiency using a formula that inputs these statistics as variables. Although somewhat outdated and arbitrary, it is still useful to analyze, especially considering that we are not just looking at PER. As one can see, the distribution of first overall picks is much more to the right of the distribution of general NBA players, which was also the case for RAPTOR WAR. To put it in a more quantitative manner, the mean PER for general players is 11.71, while the mean PER for first overall picks is 18.18.

And just like for the previous statistic, the difference-in-means test confirms the claim that the first overall picks are better than the overall body of NBA players in a statistically significant manner, with the p-value for this test also being zero with a t-score of -9.47.

![Figure 3](/assets/journalism/best_of_the_best/figure-03.png)

The article also compares the aforementioned two groups in terms of WS per 48 minutes, which is a calculation of how many win shares—defined as one third of a team win—a player contributes to the team per 48 minutes they play. At first glance, the numbers on the x-axis appear to be quite small and unimpressive, but once one takes into account that most in the NBA play much longer than 48 minutes in a season, one can see how they can accumulate many win shares within this duration.

Just like the previous plots, the histograms appear to be positioned apart from one another, so one may conclude based on its visual appearance that they are inherently different. In addition, the mean WS per 48 minutes for general players is 0.06, while the same figure for first overall picks is 0.12. And in terms of statistical significance, the difference between the two distributions is similar to the previous advanced figures, with the p-value also being approximately zero with a t-value of -7.56.

![Figure 4](/assets/journalism/best_of_the_best/figure-04.png)

The final statistic that this article will use to compare the general population of NBA players and the group of first overall picks is value over replacement player, more commonly known as VORP. First used to analyze baseball, this statistic essentially measures the amount of points that a player produces relative to a replacement-level player per 100 possessions over the course of the entire season.

As one can see, the distributions appear to be quite far apart as was the case for the previous three statistics. The mean VORP of general players is 4.13, while the mean VORP of first overall picks is 28.48, which also shows the difference between the two groups. And likewise, the difference-in-means test produced a p-value of again approximately zero with a t-value of -5.24.

The fact that four separate tests of statistical significance all produced the same conclusions serves as strong evidence that first overall picks are indeed better than the general body of NBA players. Now that the article has resolved that question, it will now discuss who among these first overall picks have been the best, and who among them have been the worst.

## The Best First Overall Picks

![Figure 5](/assets/journalism/best_of_the_best/figure-05.png)

![Figure 6](/assets/journalism/best_of_the_best/figure-06.png)

![Figure 7](/assets/journalism/best_of_the_best/figure-07.png)

![Figure 8](/assets/journalism/best_of_the_best/figure-08.png)

The various advanced statistics presented in this article give somewhat different answers to the question of who have been the best first overall picks, but there is also some consistency. To be more precise, there are only two players who have shown up consistently in the results: Lebron James and David Robinson. While the presence of Lebron is not that surprising considering that he is argued by some to be the greatest player of all time besides perhaps Michael Jordan, the presence of David Robinson is somewhat surprising. David Robinson is widely viewed as an all-time great center, but he is generally not viewed on the same tier as players like Shaquille O’Neal or Magic Johnson. Of course, the results of this analysis do not necessarily mean that this viewpoint ought to change, mainly due to the limitations of advanced stats that the article will discuss in the conclusion. However, this discrepancy is still quite interesting to note.

## The Worst First Overall Picks

![Figure 9](/assets/journalism/best_of_the_best/figure-09.png)

![Figure 10](/assets/journalism/best_of_the_best/figure-10.png)

![Figure 11](/assets/journalism/best_of_the_best/figure-11.png)

![Figure 12](/assets/journalism/best_of_the_best/figure-12.png)

In regards to the worst first overall picks in NBA history, the advanced stats show three common names: Michael Olowakandi, Anthony Bennett, and Markelle Fultz. The first of these three is less well-known than more well-known draft busts such as Kwame Brown, but this analysis shows that he has been the worst-performing out of all the players in the set of first overall picks. The second of the players is already considered to be a significant draft bust, and his performance has been so underwhelming to the point where he does not perform well in foreign leagues that are of lower prestige than the NBA. But in contrast to the previous two players, the latter of these three has been plagued by injury and is relatively new to the league at 23 years old, so it may be unfair to describe him as one of the biggest draft busts in the history of the league.

## Conclusion

To conclude, this analysis has demonstrated that first overall picks are indeed better than the general population of NBA players based on the statistical evidence. Whether one looks at an advanced metric like RAPTOR WAR or VORP, the reader can repeatedly observe that the former group exceeds the performance of the latter group to a statistically significant degree.

And in regards to who the best first overall picks have been, such players include Lebron James, Magic Johnson, and David Robinson, who not only lead the figures in this article’s analysis, but are also considered by both NBA insiders and the general public to be among the greatest players in NBA history. In regards to the worst first overall picks, these players include names such as Anthony Bennett, Kwame Brown, and Michael Olowankandi, who are relatively well-known to have not only poor careers relative to their expectations as first overall picks, but also poor careers on their own right even compared to the average NBA player.

It should be noted that the analysis in this article has some limitations. For instance, the use of advanced metrics has been criticized by some for not accounting for “intangibles” or other qualities that need an “eye test” and therefore cannot be captured by statistics. As such, judging who have been the best overall picks and who have been the worst is a task that might not necessarily ought to be done with just advanced statistics.

In addition, basketball is a sport of teamwork and circumstance, meaning that individual quality is not necessarily the only factor that affects the performance of a player. Suppose as an example that an aspiring big man is drafted by a team that already has too many big men. Would that draftee not perform better in a team that was in need of a big man and would therefore have the right complementary pieces waiting for that player? Also, suppose that a player is drafted as a lottery pick but experiences several injuries early on, and they go on to deliver an underwhelming performance throughout the entirety of their career. Would it really be really fair to consider this player as a draft bust just from the fact that he was unfortunate to be injured so many times.

All in all, it is clear that outside factors play a significant role in players’ careers as well as the inherent qualities and skill-sets of these players. Therefore, it may be more prudent to view this analysis as judging the *performance* of the first overall picks rather than the first overall picks themselves.

### Sources

[https://fivethirtyeight.com/features/how-our-raptor-metric-works/](https://www.google.com/url?q=https://fivethirtyeight.com/features/how-our-raptor-metric-works/&sa=D&source=editors&ust=1647878830693317&usg=AOvVaw0bIO7q-gJP4mfpQYRoe1cI)

[https://www.espn.com/nba/columns/story?columnist=hollinger_john&id=2850240](https://www.google.com/url?q=https://www.espn.com/nba/columns/story?columnist%3Dhollinger_john%26id%3D2850240&sa=D&source=editors&ust=1647878830693904&usg=AOvVaw2uSwhSED7K3YvjHjPGpCEj)

[https://www.basketball-reference.com/about/ws.html](https://www.google.com/url?q=https://www.basketball-reference.com/about/ws.html&sa=D&source=editors&ust=1647878830694416&usg=AOvVaw088ZnyiL7Ru4DnTGiKR6cO)

[https://sport-net.org/what-is-vorp-nba/](https://www.google.com/url?q=https://sport-net.org/what-is-vorp-nba/&sa=D&source=editors&ust=1647878830694860&usg=AOvVaw3YeYWI_PW6Hjq5GbqJcmZx)

[https://www.kaggle.com/hrfang1995/nba-drafts-of-19472018](https://www.google.com/url?q=https://www.kaggle.com/hrfang1995/nba-drafts-of-19472018&sa=D&source=editors&ust=1647878830695355&usg=AOvVaw3RlB6xh8U4HrvmXxJXriWP)

[https://www.kaggle.com/sumitrodatta/nba-aba-baa-stats](https://www.google.com/url?q=https://www.kaggle.com/sumitrodatta/nba-aba-baa-stats&sa=D&source=editors&ust=1647878830695819&usg=AOvVaw03aIROJZU8GsjfaK5kZULP)

[https://github.com/fivethirtyeight/nba-player-advanced-metrics](https://www.google.com/url?q=https://github.com/fivethirtyeight/nba-player-advanced-metrics&sa=D&source=editors&ust=1647878830696299&usg=AOvVaw3WFW53Nz4Lp04VSXoJLzQ4)
