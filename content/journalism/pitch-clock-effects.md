### By: Daniel Wang

New this season, the MLB implemented a pitch clock with a 15-second timer between pitches with the bases empty and a 20-second timer between pitches with runners on base. The pitcher must begin his delivery before the clock expires, or else he will be assessed with an automatic ball. The goal of the pitch clock is to speed up the game, and it has successfully done so as the average game length is down about 30 minutes compared to last year, to roughly 2 hours and 38 minutes per game. This rule was highly controversial, as many pitchers were publicly against the pitch clock, while others argued that the rule would disrupt the game's natural flow. However, two months into the season, the pitch clock has looked like a successful change.

The pitch clock affects slow-working pitchers the most, as they are the ones who have to speed up their tempo and alter their rhythm because of the rule change. Let’s explore how the pitch clock has affected the slowest working pitchers from last year, particularly those who had a pitch tempo of 20 seconds or more last season, which is equivalent to about 14 seconds on the new 15-second timer. Statcast’s pitch tempo metric measures the median time between pitches and only accounts for pitches that follow a take (called strike or called ball). About six seconds elapse from the start of a pitcher’s delivery to them receiving the return throw.

![Figure 1](/assets/journalism/pitch-clock-effects/figure-01.png)

In this graph, the x-axis is ordered by pitch tempo such that among all the pitchers with a pitch tempo of 20 seconds or greater, those with the slowest tempo are farthest on the right. However, the graph looks relatively symmetric, so it seems like there are no notable differences between pitchers with the fastest and slowest tempos among this group. Based on this graph, pitchers with the slowest tempos last year have generally been worse this season, sporting an ERA (Earned Run Average) that is an average of 0.592 runs higher this season compared to last season. Especially early on in the year, pitchers who traditionally take a lot of time between pitches have to adjust to adopt a faster pace of play this season. Nevertheless, there are also several slow-working pitchers who have been better this year compared to last year.

Aside from ERA, we can also look at expected stats like xWOBA to see if the same trend holds in the pitchers’ peripherals. While ERA calculates how many earned runs a pitcher allows per 9 innings, xwOBA is a more advanced stat that essentially calculates the average run value of every batted ball for a pitcher. xwOBA is calculated with run-value estimates from exit velocity and launch angle and removes the variance of batted-ball results. Like ERA, a lower xwOBA is better (each batted ball allowed by a pitcher has a lower run value).

![Figure 2](/assets/journalism/pitch-clock-effects/figure-02.png)

This graph communicates a similar message that the slowest pitchers have generally performed worse this season compared to last season. Like we saw from the ERA graph, there doesn’t seem to be a notable difference between pitchers with the fastest and slowest tempos among this group.

It’s worth exploring the correlation between ERA and xwOBA:

![Figure 3](/assets/journalism/pitch-clock-effects/figure-03.png)

In this graph, each data point measures an individual pitcher’s change in xwOBA and ERA this year compared to last year. The points are also colored to separate pitchers with a slow tempo, but there doesn't seem to be a noticeable difference between the two groups. XwOBA and ERA have a moderately strong positive correlation (r = 0.603), meaning that if one’s xwOBA increased, their ERA also likely increased.

In addition to the pitch clock, there have been other rule changes as well: the shift was banned, the size of bases was increased, and a pitcher is now limited to only two disengagements per plate appearance without penalty. Thus, we cannot necessarily conclude that the change in performance was solely due to the pitch clock. Looking at the league as a whole, hitting statistics are up across the board:

![Figure 4](/assets/journalism/pitch-clock-effects/figure-04.png)

Because of all the rule changes, we need to analyze how the slowest pitchers have performed relative to all pitchers, including those who already pitched at a fast tempo and are seemingly unaffected by the pitch clock.

Looking at ERA and xwOBA once again:

![Figure 5](/assets/journalism/pitch-clock-effects/figure-05.png)

![Figure 6](/assets/journalism/pitch-clock-effects/figure-06.png)

Interestingly, the average increase in ERA and xwOBA is actually smaller for pitchers with the slowest tempos from last year. In the graphs, the group of “normal/fast” tempo and “slow” tempo pitchers display the same pattern and shape, so the pitch clock has not made a disproportionate impact on slow-working pitchers — tempo is likely a marginal change that is easy to adjust to. Other rule changes, like the shift ban and limit on disengagements, have probably made a more negative impact on pitchers.

## Case Studies

Let’s look at five starting pitchers and five relief pitchers who had the slowest tempos last season and analyze their changes in stats from 2022 to 2023. For starting pitchers, we will use Corbin Burnes, Luis Garcia, Michael Kopech, Shohei Ohtani, and Yu Darvish, all pitchers with a pitch tempo of 20.9 seconds or more.

![Figure 7](/assets/journalism/pitch-clock-effects/figure-07.png)

Each of these starters was forced to work faster this year, going from an average tempo of 21.18 seconds in 2022 to 16 seconds this year. These pitchers have also seen their pitching performance worsen, as their average xERA (Expected ERA) increased from 3.346 to 3.802, their average xwOBA grew from 0.2782 to 0.3056, and their xFIP (Expected Fielding Independent Pitching) rose from 3.546 to 3.984.

We can look at five of the slowest relief pitchers from 2022 and compare their stats between last season and this season as well. We will use A.J. Minter, Craig Kimbrel, Devin Williams, James Karinchak, and Josh Hader, all of whom had a pitch tempo higher than 22 seconds. We see a similar trend:

![Figure 8](/assets/journalism/pitch-clock-effects/figure-08.png)

For relievers, the average tempo among these five pitchers went from 23.02 seconds last year to 17.04 seconds this year, so they are working about 6 seconds quicker. Looking at their performance, their average xERA increased from 2.874 to 3.188, their average xwOBA rose from 0.2632 to 0.2758, and their average xFIP climbed from 3.026 to 3.598.

While the pitch clock may play a role in their worse performance this year, it is unlikely to be the main culprit. As we observed earlier, the combined effect of all the rule changes has contributed to more offense across the league. Still, it is interesting to see many of these elite pitchers, both starters and relievers, experience dips in performance after having to adjust their tempo this season.

- [https://baseballsavant.mlb.com/leaderboard/pitch-tempo](https://baseballsavant.mlb.com/leaderboard/pitch-tempo)
- [https://www.fangraphs.com/leaders.aspx?pos=all&stats=pit&lg=all&qual=y&type=8&season=2023&month=0&season1=2023&ind=0](https://www.fangraphs.com/leaders.aspx?pos=all&stats=pit&lg=all&qual=y&type=8&season=2023&month=0&season1=2023&ind=0)
- [https://baseballsavant.mlb.com/leaderboard/custom?year=2023&type=pitcher&filter=&sort=4&sortDir=asc&min=q&selections=xba,xslg,xwoba,xobp,xiso,exit_velocity_avg,launch_angle_avg,barrel_batted_rate,&chart=false&x=xba&y=xba&r=no&chartType=beeswarm](https://baseballsavant.mlb.com/leaderboard/custom?year=2023&type=pitcher&filter=&sort=4&sortDir=asc&min=q&selections=xba,xslg,xwoba,xobp,xiso,exit_velocity_avg,launch_angle_avg,barrel_batted_rate,&chart=false&x=xba&y=xba&r=no&chartType=beeswarm)
