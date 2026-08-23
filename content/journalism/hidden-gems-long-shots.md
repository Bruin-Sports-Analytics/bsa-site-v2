## Introduction

The National Basketball Association (NBA) draft is an annual event where teams select eligible players to join their rosters. Among the pool of talents, certain NBA teams have drafted prodigies that have defined dynasties—take, for example, the drafting of Tim Duncan by the San Antonio Spurs, which led to their decade-long hold on the league. On the other hand, other teams have been less fortunate. Draft busts like James Wiseman, Greg Oden, and Ben Simmons cost their respective teams a season (sometimes numerous seasons) of tanking and losing rather than being competitive.

It’s not to say that only first-round draft picks are momentous to a franchise’s success: breakout second-rounders have, at times, exceeded all standards placed upon them, challenging conventional depictions of second-round bench warmers and, instead, becoming the face of their team. Perhaps the best example of such a statement is the emergence of Nikola Jokic in the league—although initially deemed unfit for the quick-paced nature of the NBA, he’s now considered one of the best players in the league. It’s through examples like Jokic from which this article’s research question stems from: what is the percentage of second-round picks that achieve success in the NBA?

## Background

Given the inherent subjectivity of how one can determine whether or not an NBA player is successful—especially for second-round picks who have significantly lower expectations placed upon them by coaches, franchise owners, and fans—this article generated a list of metrics that span from game statistics to career longevity to VORP scores to assess the individual performance of players. A summarized list of the metrics and the NBA’s average values for each metric can be found in the figure below.

| Metric | Average Value | Metric | Average Value |
| --- | --- | --- | --- |
| Years Played | 5.499 | Win Shares Per 48 Min | 0.054 |
| Minutes Played | 15.747 | Games Played | 302.228 |
| Points Per Game | 6.318 | Three Point Percentage | 0.219 |
| Rebounds Per Game | 2.774 | Free Throw Percentage | 0.609 |
| Assists Per Game | 1.347 | Field Goal Percentage | 0.378 |
| Box Plus Minus | -2.006 | VORP | 3.824 |

Metric

Average Value

Metric

Average Value

Years Played

5.499

Win Shares Per 48 Min

0.054

Minutes Played

15.747

Games Played

302.228

Points Per Game

6.318

Three Point Percentage

0.219

Rebounds Per Game

2.774

Free Throw Percentage

0.609

Assists Per Game

1.347

Field Goal Percentage

0.378

Box Plus Minus

-2.006

VORP

3.824

*Figure 1: Metrics and Average Values*

### Important Definitions

[Win shares](https://www.thesportster.com/confusing-stats-metrics-nba-fans-understand-explained/) per 48 minutes is a statistic that weighs a player’s contribution to a win for a set number of wins every 48 minutes played. A win share is an indicative index that divides a team’s success among each member, computing the wins produced by one specific player by taking their offensive and defensive numbers and comparing them to team and league statistics.

A separate advanced statistic gaining popularity is value over replacement player [(VORP)](https://www.samford.edu/sports-analytics/fans/2023/The-Numbers-Dont-Lie), a statistical estimate of the points a player contributes to a game above a replacement-level player per 100 team possessions. A replacement-level player can be thought of as a bench or role player. This value is then translated to an average team and made proportional to an 82-game season.

### What Does It Mean to Be ‘Successful’

To determine if a player is successful, we designed a points system to assign each player a certain amount of points for reaching above the league average in the metrics we defined above. For each second-round player’s metric that exceeds the league average for said metric, a point is added to their performance score—this sums to 12 points for the 12 metrics implemented in the analysis. The decision to compare player stats to mean league values is made based on the notion that players drafted in the second round are naturally deemed inferior (in terms of skillsets, physiques, ball IQ, etc) and less likely to succeed in the NBA than the average player. Thus, to outscore, outlast, or outperform the typical, conventional player is inherently an example of exceeding standards and a suggestion of success.

### How Many Players are ‘Successful’?

![Figure 2: Number of Successful Players in Each Round](/assets/journalism/hidden-gems-long-shots/figure-01.png)

The aforementioned 12-metric analysis reveals a stark contrast in the success rates of first- and second-round NBA draft picks. Only **4.1%** of second-round selections surpass all 12 performance metrics, compared to **21.2%** of first-round picks. This massive drop-off highlights the inherent risk of second-round selections, where the likelihood of landing a true impact player is significantly lower. Given these odds, teams might be better off **trading second-round picks** for proven assets or packaging them in deals rather than gambling on long-shot prospects who have a slim chance of making a lasting impact in the league.

In the NBA Draft, second-round picks range from the 30th to the 60th overall selection, with each team allotted two picks. We divide the second-round picks into three groups of ten picks each to analyze the performance of second-round selections. The first group—picks 30 to 40—has the highest percentage of successful players. The second group—picks 41 to 50—follows with a moderate success rate, while the third group—picks 51 to 60—has the lowest percentage of successful outcomes. This trend aligns with the general assumption that teams prioritize selecting the best available talent early on, meaning players chosen earlier in the second round are more likely to succeed due to their perceived higher potential at the time of selection.

![Figure 3: Number of Successful Players in the Second Round](/assets/journalism/hidden-gems-long-shots/figure-02.png)

To further the analysis, mutual information scores are captured and plotted in the figure below. Mutual information is a measure of the information that two variables—the metrics and the likelihood of success in this case—share, essentially quantifying the insight provided by one variable on the other. As shown, with VORP, average minutes played, and points per game being the leading metrics for mutual information scores, and with only x% of second-rounders exceeding the average for the said metrics, serious doubt is cast upon the potential of these drafted players in assisting the team in securing wins.

![Figure 4: MI Scores for Target Variables](/assets/journalism/hidden-gems-long-shots/figure-03.png)

It’s not just about the proportion of second-rounders meeting standards either; it’s also about the mass percentage of second-rounders contributing utterly nothing to the team. In the histograms below, the mode of each distribution rests uncomfortably at zero: zero minutes played, zero points scored per game, and zero minutes played. The left-skewed shape echoes the sentiments of being unlikely to find talented athletes in the second round *and* translating their talents to court contributions. The majority of these players end up spending their entire careers in the G-League with (if fortunate) limited minutes in the NBA.

![Figure 5: Key Metrics for Second Round Picks](/assets/journalism/hidden-gems-long-shots/figure-04.png)

### A Worldwide Game

![Figure 6: Player Origin of Second Round Picks on Success](/assets/journalism/hidden-gems-long-shots/figure-05.png)

When it comes to the NBA Draft, conventional wisdom suggests that college players, having developed within structured NCAA programs, are the safer selections. Meanwhile, international prospects are often seen as high-risk, high-reward investments, with teams drafting them as long-term projects rather than immediate contributors. However, an analysis of second-round picks challenges this assumption, revealing that international players actually have a slightly higher success rate than their domestic counterparts.

So why do international second-rounders appear to fare slightly better? One likely explanation is selection bias: NBA teams are generally more selective when drafting international players, focusing on well-scouted, high-upside prospects. In contrast, college players are taken in much higher volume, meaning more enter the league with lower ceilings or skill sets that don’t translate well to the NBA. Many college draftees struggle to adjust to the NBA’s speed and physicality, and, with limited opportunities for second-round picks, they often fade out of the league before realizing their potential.

Conversely, international players—especially those already competing in professional leagues overseas—may enter the NBA with more polished fundamentals and experience playing against older, stronger competition. This could explain how, despite their reputation as riskier selections, second-round international players have shown slightly better success rates than their domestic counterparts.

While international second-round picks may offer a marginally better return on investment, the broader reality remains clear: second-round success stories are rare across the board. Even among players taken earlier in the round, the odds of finding an impact player remain slim. Whether selecting a college prospect or an international talent, NBA teams must recognize that second-round picks are more often a gamble than a guarantee.

## Conclusion

While stories like Nikola Jokic inspire hope in the value of second-round draft picks, the data tells a far less romantic tale. The vast majority of second-rounders fail to meet even the average league performance across key metrics, with only 4.1% considered “successful” by our 12-metric scoring system. A deeper dive into the second round further underscores the risk: the earlier a player is picked, the higher their likelihood of success—but even then, the odds remain slim. Mutual information analysis confirms that only a handful of performance indicators—like average minutes played and points per game—meaningfully predict success, and yet, most second-round picks fall well short in those areas. The prevalence of players recording zeros across critical metrics reflects a harsh truth: second-round picks are more often long shots than hidden gems.

Beyond those who fail to reach league-average performance levels, a significant proportion of second-round picks make no impact at all. The left-skewed distribution of critical metrics—such as minutes played and points per game—demonstrates that many second-rounders never step foot on an NBA court. Instead, they languish in the G-League, struggle for limited opportunities, or pursue careers overseas. The reality is that finding the next hidden gem is more about overcoming structural challenges and maximizing opportunities than simply making a lucky pick.

For NBA teams looking to build competitive rosters, this analysis poses a difficult but necessary question: are second-round picks worth the gamble, or should they be viewed more strategically—as trade assets or developmental experiments? The answer may vary from franchise to franchise, but one thing is clear: finding the next Jokic is less about lucking into greatness and more about beating the odds in a game that rarely favors the underdog.

### References

- [Notebook](https://colab.research.google.com/drive/1j0_bduIoeQRl5Od558HCsRcH1i9P7Alq#scrollTo=IRCJ3rEcy0DZ) containing our code for visualizations and our point system.
- Our [dataset](https://www.kaggle.com/datasets/mattop/nba-draft-basketball-player-data-19892021) from Kaggle contained data of NBA players from 1989-2021 with the metrics we studied.
- We used this [image](https://fadeawayworld.net/the-greatest-second-round-draft-picks-in-nba-history) for our cover photo and different sites to explain the terms [VORP](https://www.samford.edu/sports-analytics/fans/2023/The-Numbers-Dont-Lie) and [Win Shares](https://www.thesportster.com/confusing-stats-metrics-nba-fans-understand-explained/).
- We also took this image from this [tiktok](https://www.tiktok.com/@nba_brasil/video/6876204363417701638) for our social media post.
