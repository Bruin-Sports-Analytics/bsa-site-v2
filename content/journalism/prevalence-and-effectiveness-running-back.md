Saquon Barkley’s dominant 2024-25 NFL season has turned heads and significantly changed the discourse surrounding the running back position at the professional level. His season, alongside the campaigns of other ball-carriers including Derrick Henry and Josh Jacobs, has in many ways revitalized what was seen as a “dying” position entering this year. Prior to this season, having a superstar running back was largely devalued by the NFL, with teams largely opting to employ several runners on smaller contracts than one expensive back, leading to an overall devaluation of the position.

This devaluation of solo star running backs in exchange for multiple backs reflects the growth of the “running back-by-committee” approach, which has increasingly taken center stage among league backfields across recent seasons. This philosophy necessitates splitting rushing responsibilities between several running backs as opposed to employing a singular “bell-cow” running back. In response to this perceived increased dominance of split backfields across the NFL as well as the potential shift to this trend that we witnessed this past season, our team sought to identify which NFL teams have the most split backfields by creating a quantification of backfield splitness. Using this, we aimed to determine whether using this running back-by-committee approach correlates with the effectiveness of rushing offense and overall team performance in the regular and postseason.

## How Do We Measure Splitness?

A significant challenge that emerges off the bat when attempting to evaluate the effects of splitting carries in an NFL backfield is that there are no existing metrics that quantify “splitness.” Indeed, on a game-by-game basis, one can evaluate which backs received which percent of the carries, however, on a season-long basis, there is no available statistic that measures how split a given backfield is. Thus, our team sought to establish a metric that would allow us to quantify how split a given backfield was over an entire season.

Our first intuition was to look at the percent of carries that each running back received on the entire season and use that as a basis by which to define a metric evaluating splitness. However, this approach has several limitations, namely, it looks at aggregate carries over the season rather than individual games. In the case of teams where a primary running back went down with an injury in the middle of the season and was replaced by a backup, this approach would report that this team had an extremely split backfield, even if on a game-by-game basis, carries were dominated by one running back. A notable example of this case in the 2024 season was the San Francisco 49ers, which generally had carries dominated by one running back, however, many 49ers running backs dealt with injuries throughout the year, resulting in a rotating cast of players splitting carries throughout the year, but on a game-by-game basis.

Thus, our team sought to create a metric that accounted for how split a backfield is on any given game, which is a truer measure of splitness since it accounts for cases like the 49ers. To generate this metric, we looked at the percentage of carries and yards that each ball carrier on a given team received on a given week of the regular season. We then took the variance of these percentages for each team on a given week. Our intuition was that if a team has a perfectly split backfield, the variances of the percentage of carries and yards that each rusher accounted for would be small, whereas if one rusher dominated the backfield, there would be considerably larger variances. We then took the inverse of this variance by team, resulting in a Splitness Score (SS) for this week, with higher scores indicating more split backfields. Repeating this process for every week of the 2024 NFL season and averaging the Splitness Score by team over the year, we generated a metric that represented how split a given backfield was on an average week in 2024.

The results of our Splitness Score metric by team are the following:

![Figure 1](/assets/journalism/prevalence-and-effectiveness-running-back/figure-01.png)

Looking at the result, some key observations emerge. The most split backfields of 2024 include the Broncos with their rotating three-headed carousel of Javonte Williams, Jaleel McLaughlin, and Audric Estime (sometimes even expanding to four with the inclusion of Tyler Badie), the Steelers, who frequently split carries between Najee Harris and Jaylen Warren, and the Lions, who famously employed the likes of Jahmyr Gibbs and David Montgomery to great rushing success this past season. On the other hand, the least split backfields of the season included the Colts, who relied almost exclusively on Jonathan Taylor and only used Trey Sermon when Taylor was injured, the Panthers, who surprisingly utilized Chuba Hubbard more than many predicted going into the season, and the Rams, who for the past fifteen years have consistently employed a one-RB approach (more on this later).

This approach to quantifying splitness now allows us to concretely determine which teams used more split backfields relative to other teams, and this metric formed the basis for our ability to compare splitness across other statistical categories.

## How Was Splitness Correlated with Success in 2024?

Analyzing these Splitness Scores against team performance data from this past season, our team generated three key takeaways.

1. **Splitness leads to more receiving production from running backs.** 

Teams with higher splitness tend to have both higher yards from scrimmage from their running backs as well as total receiving yards from running backs. This comes as a byproduct of having two lead backs as opposed to only one. Even though they may share the singular position, over the course of a game, two players are able to have greater total production than just one. Teams with higher splitness also follow the trend of having more total rushing attempts, allowing running backs to garner a higher percentage of total offensive touches. It has also become common for teams to split touches via having a “third-down back.” In this system the primary third-down back is different from the team's leading ball carrier. third-downs are more often considered “receiving downs,” giving these secondary running backs higher touches in the receiving game. The higher rates of splitness not only lead to more touches out of the backfield, but also the potential for more scrimmage and receiving yards produced from the backfield.
2. **Splitness does not significantly impact team offensive production.** 

When attempting to maximize offensive production over the course of a game, teams do not see any change by having a more split backfield. At the end of the day, there is still only one football, and only eleven players on the field for either team. There is a slight bump in total yards accumulated by running backs, but even then it is still fairly negligible. Teams that are able to increase their splitness allow for a more diverse backfield that can provide a more balanced production between the air and ground game. However, the total effect on the offense's ability to move down the field is trivial.
3. **Splitness is a significant positive contributor to regular season success, but not playoff success.** 

On average, teams with a higher splitness showed more regular season success than those with lower scores. The Denver Broncos, who accumulated the highest splitness this season, have projected two more wins than the Indianapolis Colts who garnered the lowest splitness this season. All four teams that acquired a splitness greater than 100 made the playoffs, and it was a mixed bag for the remaining 28. When it came to continuing that success throughout the postseason, the projections are not so favorable toward teams who use a multitude of running backs. Of the four teams whose splitness was over 100, they combined for a lowly total of only two playoff wins. Both of those victories came at the hands of the Washington Commanders, but one of their wins was against the Detroit Lions, who are one of the other 100+ splitness teams. On the other hand, for every playoff team that had a splitness below 50 (30% of teams that had a splitness < 50 made the playoffs), all five of them won at least one playoff game. Both the Chiefs and Eagles, who made the Super Bowl had a splitness between 25-30, and ranked 25th and 26th in the league this season in splitness.

![Figure 2](/assets/journalism/prevalence-and-effectiveness-running-back/figure-02.png)

![Figure 3](/assets/journalism/prevalence-and-effectiveness-running-back/figure-03.png)

![Figure 4](/assets/journalism/prevalence-and-effectiveness-running-back/figure-04.png)

![Figure 5](/assets/journalism/prevalence-and-effectiveness-running-back/figure-05.png)

![Figure 6](/assets/journalism/prevalence-and-effectiveness-running-back/figure-06.png)

![Figure 7](/assets/journalism/prevalence-and-effectiveness-running-back/figure-07.png)

| **Stat to know:** In the 2025 NFL playoffs, the team with the lower splitness won 10/13 games, including a 3-0 record in both Conference Championship games and the Super Bowl. |

When it comes to games under the spotlight of the playoffs in the 2024-25 NFL season, it is more important to have a reliable RB1. Being able to divvy up the running back load may be more useful over the stretch of an entire season, but come the postseason, the best players need to play the most. Other major American sports reflect this trend of limiting playing time to only the best players during the playoffs. Examples of this include the NBA teams who will shorten their rotation from an average of about ten players down to eight. In the MLB, starting pitcher rotations are cut down from about five or six to four. In the NFL, when teams have been used to splitting carries more, this shift to a higher focus on one running back may throw off how a team has been accustomed to playing for the past four months. On the other hand, if teams choose not to make this switch, they will find themselves at an inherent talent disadvantage if they cannot send their star players out nearly every play.

Producing a greater Splitness Score allows teams to stay fresh and win games throughout the lengthy and grueling 18-week regular season. This comes at the cost of being less equipped for the playoffs and prepared to maximize the impact of their best players when do-or-die time rolls around. It is most vital that any team planning for success at this point in the season have a number one running back that can carry the load, but also has trust and chemistry with the rest of the offense. Even while being a team sport, football games are won by putting the ball into the hands of the best playmakers as much as possible. For teams who have their playmaker in the backfield, it is in their best interest to reduce the split of their running back touches. Teams that lack that type of player should hand over the keys to whoever they trust most and hope for the best.

## How Does Splitness Affect Advanced Statistics?

To further investigate the impact of splitness on success beyond aggregate numbers, we defined a new metric: **Seasonal Adjusted Efficiency.**

Even though Splitness tells us how evenly a team distributes its backfield carriers, it doesn’t tell us anything about how effective the strategy is. As such, we have defined a new metric called Seasonal Adjusted Efficiency (SAE) that adjusts for rushing efficiency by incorporating Yards Per Carry (YPC) into the equation. We define SAE as follows:

**SAE** = Splitness Score * YPC

This metric standardizes the benefit of teams that split their carriers in terms of average rushing attack and links usage with performance. If a team has a high Splitness Score but low YPC, then the running back by committee approach is not effective. On the other hand, a team that has high Splitness Score and high YPC should continue to operate running backs by committee as this strategy contributes to their offensive success.

We conducted two advanced statistical analyses. First, we looked at SAE vs. Explosive Plays to determine whether teams that distribute their backfield carriers more evenly generate longer run plays. Explosive plays—defined as 10+ yard plays—are significant determinants of offensive success as they contribute to a team’s ability to rack up yards on 3rd and long situations and forecast scoring potential.

To render the analysis, we created linear regression models for SAE vs. Explosive Plays with regular season data from 2010-2024, only accounting for HBs with ≥ 85 rushing attempts. By comparing explosive plays to SAE, we hoped to see whether using multiple running backs leads to more (or fewer) breakaway runs.

![Figure 8](/assets/journalism/prevalence-and-effectiveness-running-back/figure-08.png)

![Figure 9](/assets/journalism/prevalence-and-effectiveness-running-back/figure-09.png)

Based on an analysis of 14 years of seasonal data, we noticed that most of the years—like 2024, see graph above—had a positive correlation between the number of explosive plays per team and Seasonal-Adjusted Efficiency by team, which we found by taking the average of YPC for qualified running backs on each team and multiplying this by the Splitness Scores we calculated earlier. Some seasons produced opposite results; notably, the 2011 (see above), 2012, 2013, and 2016 seasons had a negative correlation. What is striking about this analysis is that in 2011, the team with the highest number of explosive plays, the Vikings, had a very small SAE compared to the stat’s league leader, the New Orleans Saints. Yet, the Vikings nearly quadrupled the Saints in the number of explosive plays, which suggests that in the 2011 season, teams with very low splitness were more offensively explosive on the ground than teams with high splitness like the Saints. In 2024, we see results more closely aligned with our expectations. The Detroit Lions, powered by their dynamic “Sonic and Knuckles” duo of David Montgomery and Jahmyr Gibbs, led the league in explosive plays with a fairly high SAE compared to the 2011 Vikings. Thus, our predictor accounted for a greater percentage of the variation in the data last season than it did more than a decade ago. Teams like Broncos (DEN) and Commanders (WAS) stand out with high SAE values yet relatively average explosive play counts, suggesting that maintaining efficient rushing with a committee approach doesn’t necessarily translate to a high number of explosive plays. Meanwhile, teams like the Raiders (LV) and the Bears (CHI) exhibited low SAE values and comparably low explosive play counts, suggesting that for teams with weak rushing O-line scheming, relying on a single lead back isn’t particularly effective in producing big plays. While higher SAE teams appear to lean toward better explosive play production, the correlation is weak enough to suggest that other factors such as running back archetype, O-line scheming, and rushing cadence also play a significant role. Thus, moderate SAE values appear to strike the best balance for generating explosive plays.

In our analysis, we introduced another new statistic - **Elusive Efficiency Index (EEI)** , which ***combines key variables correlating with a player’s ability to generate yards after contact*** . It captures avoided tackles, breakaway potential, and rushing consistency ***.*** A high EEI indicates a running back committee that excels at breaking tackles and turning carries into big plays, thus thriving in open-field situations or behind efficient blocking schemes. On the contrary, a low EEI indicates a team that struggles to generate extra yards after contact, which could reflect runners with high volume but without explosive play traits. After approximating EEI, we plotted this metric as a predictor for Yards After Contact (YCO) - a runner’s ability to gain extra yards after initial contact by a defensive player. YCO is a key indicator of a running back’s ability to break tackles and gain burst yardage, and a high YCO running back would fit the Derrick Henry archetype.

**EEI** = Avoided Tackles * Breakaway Yards / (Rushing Attempts + Fumbles + 1), where we add 1 in the denominator to stabilize returns for low-carry players.

EEI combines key factors like Avoided Tackles, Breakaway Yards, and Rushing Attempts to estimate a player’s ability to break tackles and extend plays — both crucial for maximizing YCO. EEI also helps evaluate efficiency vs. volume, distinguishing runners who generate high YCO through skill rather than sheer workload.

![Figure 10](/assets/journalism/prevalence-and-effectiveness-running-back/figure-10.png)

![Figure 11](/assets/journalism/prevalence-and-effectiveness-running-back/figure-11.png)

Based on the results, we can conclude a positive correlation between Elusive Efficiency Index (EEI) and Yards After Contact (per attempt). We chose to show results from 2011 and 2024 since those were two significant years in our previous analysis. The distribution of results in 2011 appears more varied than those for 2024, where we see two distinct data points residing in the higher ranges of EEI and YCO. In 2011, the spread in EEI values was much broader—spanning 0-8—with some extreme outliers like CAR and TB producing unusually high YCO. Overall, the relationship appears weaker and more volatile in 2011. Last season, we observed a stronger positive correlation between EEI and YCO. BAL and PHI stand out as extreme outliers, achieving very high EEI and exceptionally high YCO. This comes as no surprise given these teams had the two best backs in the league in Derrick Henry and Saquon Barkley respectively. Teams with lower EEI like KC, DEN, and CHI are clustered at the bottom with minimal YCO, indicating less elusive and effective contact runners. This can be attributed to weak offensive rushing schemes and injuries to the likes of Isiah Pacheco of the Chiefs, though Kareem Hunt might want to refute this with his mid-season resurgence.

## How Have Trends in Splitness Changed Since 2010?

Our team sought to situate the 2024 season within broader trends in the NFL surrounding the splitness of backfields. To do so, we examined data from every rushing game performance for running backs since 2010 and applied our splitness calculation approach to this data. Averaging these scores over each team and season, we generated Splitness Scores for each individual team season.

![Figure 12](/assets/journalism/prevalence-and-effectiveness-running-back/figure-12.png)

Looking at the rankings of each individual team in terms of relative splitness over time, we see that certain teams consistently use more split backfields than others. Teams with high levels of splitness for a given season are highlighted in green, whereas low levels of splitness are highlighted in red. Teams like the Ravens, Saints, and Jets have consistently ranked among the leaders in backfield splitness across the last 14 years, and this can likely be attributed to coaching styles and institutional preference to pay multiple cheaper running backs rather than one more expensive bell-cow. At the bottom of the heatmap, we see teams like the Rams, Cardinals, and Titans who consistently prefer to utilize less split backfields. The Rams, who consistently rank among the lowest in terms of yearly Splitness Score, are particularly notorious for their long tradition of bell-cow running backs in the Jeff Fisher and Sean McVay eras, including Steven Jackson, Zac Stacy, Todd Gurley, Cam Akers, and Kyren Williams.

This visualization gives us insight into the overall preferences and utilization patterns of different teams, and while individual Splitness Scores may vary on a weekly and yearly basis, the overall institutional preferences of organizations become apparent when we zoom out and examine the past 14 years.

Additionally, we looked at average Splitness Scores across the league over this same period to study league-wide trends.

![Figure 13](/assets/journalism/prevalence-and-effectiveness-running-back/figure-13.png)

Examining league-wide average Splitness Scores for each season, we find several observations. Firstly, the league took a significant step towards more split backfields in the 2017 season and splitness remained relatively high for several years. Given the previous observations correlating splitness with passing success, it is no surprise that splitness grew in the middle of the 2010s when passing offense in the NFL was reaching its apogee. However, in the 7 years since splitness has gradually decreased, however, still maintaining higher levels relative to the beginning of the 2010s.

Despite our initial hypothesis that 2024 represented a reduction in overall splitness because of the success of backs like Henry, Barkley, and more, according to our Splitness Score metric, we see that the seasons actually constituted an increase in overall splitness across the league compared to the 2023-24 season. Thus, while the performance of top backs across the league may remain strong, there still exists significant interest among other teams who may lack one of these dominant runners in developing a rotating carousel of backs who can make up for this production. It remains to be seen whether in the coming seasons, teams will seek to replicate the model of the 2024-25 Eagles and their dominant, one-back-focused running game, however, it is worth noting that the scarcity of talent who can replicate the dominance of Barkley may keep Splitness Scores high despite observations that the NFL is truly a “copycat league.”

## Conclusion

Despite the historic season of top-level runners this past season, the running-back-by-committee approach has continued and likely will continue to be a significant part of teams’ rushing approaches across the NFL. In investigating the impact of having a split backfield on offensive and team success, we find that teams with more split backfields have significantly more receiving contributions from their backs. Despite this increased pass-catching work, teams with split backfields do not exhibit significantly greater offensive production than teams that employ a single runner. Moreover, split backfields in 2024 can be seen as a floor raiser, having a significant positive correlation with team success in the regular season, but not a ceiling raiser, being rather negatively correlated with playoff performance.

Examining advanced statistics, we find that having a moderate Seasonal Adjusted Efficiency, which is the product of splitness and yards per carry, is most conducive to producing explosive plays and that teams with more elusive runners tend to generate more yards after contact.

We expect this running-back-by-committee philosophy to remain a part of offensive identities moving forward, although we do predict that the lack of correlation with overall offensive success and the comparative success of Barkley and his Eagles will spark somewhat of a shift away from splitness. Other factors such as contract value and player age will also continue to be significant factors in teams’ choices to use a split backfield. Thus, continued study and application of this Splitness Score approach to future seasons can assess the overall direction of the league and the changing impact of split backfields on offenses.

## References

[https://www.pff.com/nfl/grades/position/hb](https://www.pff.com/nfl/grades/position/hb)

[https://www.fantasypros.com/nfl/stats/rb.php?signedin&signedin](https://www.fantasypros.com/nfl/stats/rb.php?signedin&signedin)

[https://nextgenstats.nfl.com/stats/rushing#yards](https://nextgenstats.nfl.com/stats/rushing#yards)

[https://www.pro-football-reference.com/years/2024/#team_stats::none](https://www.pro-football-reference.com/years/2024/#team_stats::none)

[https://www.footballguys.com/historical-data-dominator](https://www.footballguys.com/historical-data-dominator)
