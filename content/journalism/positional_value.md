The first round of the NFL Draft is a major conundrum to many franchises around the league. While many of the best college players are drafted in the first round, it can be very difficult to determine whether they will succeed at the professional level. Even players like 2012 Heisman Trophy winner, Johnny Manziel, can be complete wastes of a first round pick, and doom underperforming franchises to another year of mediocrity. Conversely, players like Arian Foster, an undrafted free agent, can grow to be a 4-time Pro Bowler, and an elite running back. It is cases like these that make the NFL Draft seem like an unsolvable enigma.

There is another method of obtaining players in the NFL: trading. What this study is examining is how the first round draft picks in the NFL performed, and then grouped them by position in order to see whether certain positions outperformed others. For example, is it better to draft a quarterback in the first round, or draft another position and attempt to trade for a quarterback that has already succeeded at the professional level? Using this data, we can then arrive at conclusions as to which positions are riskier to draft in the first round, and then make educated decisions as to if they should be selected.

This data set includes statistics of players drafted in the first round of the NFL Draft from 2010 to 2019, in order to allow players to prove themselves in the league, as well as having a relatively large sample size.

## Data Breakdown of Positional Value in the First Round

![Figure 1](/assets/journalism/positional_value/figure-01.png)

Before we dive into the relative value of each position, it is important to look at the rate at which players were drafted in the first round to begin with. While this is not a huge deal for most of the positions, there is a noticeably small quantity of tight ends drafted. This is likely due to the fact that many players do not identify as solely tight ends heading into the NFL, and even fewer are elite enough to be drafted in the first round. This means that much of the data will be variable for the tight end position, as this is a relatively small sample size compared to the rest of the available positions.

On the opposite side, the lineman positions, both offensive and defensive, have a lot of data to pick from. This is an indicator that their data is very accurate for determining the value of the position in first round draft picks, and if they succeed or perform poorly, then it is a solid indicator of where they actually scale in their value.

![Figure 2](/assets/journalism/positional_value/figure-02.png)

Approximate Value (AV) is a statistic formulated by Pro Football Reference founder, Doug Drinen. AV is a single number given to a player that represents their value to their team for a season, regardless of their position. This value can be added up each season to determine a player’s value for their entire career. DrAV is a player’s cumulative approximate value for the team that drafted them. By calculating the mean (average) DrAV of each position drafted in the first round, we are able to identify a trend for the most and least valuable positions in the first round.

![Figure 3](/assets/journalism/positional_value/figure-03.png)

This is a bar plot that demonstrates the mean DrAV by position for players drafted in the first round from 2010 to 2019. From the data, we can see that quarterbacks, offensive linemen, and defensive tackles are the three most valuable positions drafted in the first round. Their mean DrAVs are 31.567, 30.433, and 29.485, respectively. On the other hand, tight ends, cornerbacks, and safeties make up the three least valuable positions drafted in the first round. Their mean DrAVs are 12.778, 21.75, and 24.25, respectively. The significant drop off in mean DrAV between tight ends and other positions is intriguing because it indicates that teams might be better off drafting tight ends in the later rounds of the draft. The data may suggest that teams are better off looking for their franchise quarterbacks, offensive linemen, and defensive tackles in the first round while waiting to draft tight ends, cornerbacks, and safeties in the later rounds. However, one question that arises is which position has a consistent mean DrAV?

By looking at the standard deviations of mean DrAV for players drafted in the first round by position from 2010 to 2019, we are able to assess the variability of mean DrAV for each position. Essentially, we are able to identify which positions are more hit or miss than others when drafting in the first round.

![Figure 4](/assets/journalism/positional_value/figure-04.png)

This is a bar plot that demonstrates the mean the standard deviation DrAV by position for players drafted in the first round from 2010 to 2019. From this plot, we can see that quarterbacks, defensive ends, and wide receivers are the three most hit or miss positions drafted in the first round. On the other hand, tight ends, running backs, and cornerbacks make up the three least hit or miss positions drafted in the first round. The data suggests nothing is a guarantee when drafting in the first round. Even though quarterbacks are the most valuable position in the first round, they are also most likely to be hit or miss.

## Notable Conclusions

The quarterback is the focal point of the offense in football: they are the method by which every play will begin, and generally one of the biggest cogs in the offensive scheme. By this logic, it makes sense that they can be the greatest failures if the offense itself isn’t up to snuff. Because of this, it is reasonable that the quarterback can yield some of the highest value, but also result in some of the greatest busts in the history of the NFL, making them a risky choice, but one that can pay off immensely if they hit the jackpot.

Comparatively, offensive line positions have the second-highest mean DrAV, and a middle of the road standard deviation, leading to the conclusion that it is very consistent to draft an offensive lineman in the first round. This can also be seen in the defensive lineman positions, although with more variability. The skillset of a lineman is much more focused on consistency rather than dynamic plays, which makes sense why they often succeed once they reach the professional level. For these reasons, it is hard to go wrong with choosing an offensive/defensive lineman in the first round, and is a great choice for a first round draft pick.

One final position that is worth noting in this data is that of the wide receiver. Wideouts are on the lower end for mean DrAV, but are third highest in variability, meaning that they are like the quarterback in that it is a risky choice to select one in the first round. On average, however, there is less value in selecting a wide receiver compared to a quarterback, so the risk is more justified when selecting a quarterback to run the franchise for the next decade.

## Final Thoughts

From this data, we can conclude that if an NFL front office wants to make sure they get their value out of a first round pick, they should select a consistent position like an offensive lineman or a linebacker. However, if they are willing to take a risk in their draft choice, quarterbacks and wide receivers are the way to go, with wideouts being a fair bit riskier than even the quarterbacks. It is reasonable for teams that are struggling at the wide receiver position to trade for them, instead of relying on an unproven prospect out of college.

This data succeeds in seeing relative trends in players that came out of the NFL draft from the years 2010-2019, but could be improved by increasing the sample size of draft classes or removing major outliers from the data. In general, though, this study succeeds in analyzing the first round of the NFL draft in the decade of the 2010’s, which is much different than that of past eras of football. Comparing different decades of DrAV for first round draft picks could be an interesting follow up study to see how football has grown across its existence.

### Sources

[*https://www.pro-football-reference.com/*](https://www.pro-football-reference.com/)
