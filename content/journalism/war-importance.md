Every year when it comes down to MVP voting in the NL and AL leagues, we always hear fans and media clamor over every last bit of WAR when trying to decide between the finalists. As a reference, WAR stands for Wins Above Replacement and is a single number that tries to encompass how well a player does on both offense and defense (for pitchers, it is just their pitching and there are better statistics to evaluate how well someone pitches) given the various metrics of hitting, fielding, base running, etc. For the most part, WAR is typically one of the first go to numbers one would take a look at when trying to see how well a player performs aside from the famous triple slash line.

Now of course, WAR is important at an individual level for player success but how does WAR seem to fare across teams and the league as a whole when it comes to team success? For our purposes we will be using fWAR as calculated by FanGraphs, but there are other sources such as Baseball Reference that also calculate WAR in a slightly different way.

We can first take a look at the percentage of total league WAR that each team had a share of and note down their 2023 outcomes.

![Figure 1](/assets/journalism/war-importance/figure-01.png)

If we start at Atlanta and go clockwise all the way up to Houston, we can see that the top 5 teams with the most WAR all made the playoffs. Notably, the majority of 2023 MVP finalists come from the top 3 teams with the most WAR save for Shohei Ohtani.

Once we start looking at the sixth team, that is where we note something interesting. Looking at Seattle, San Diego, and Chicago, these 3 teams were in the top ten when it came to most team WAR but they didn’t make the playoffs at all, so what gives?

Ultimately, to make it into the playoffs it comes down to attaining as many wins as you can while trying to either win the division or make it as a wildcard. Unfortunately for Seattle and San Diego, they happened to be in divisions where 2 other teams already made it to the playoffs making it even harder for them to sneak in.

This calls for a look into seeing if there is any correlation between team WAR and team win %.

![r = 0.83 (correlation coefficient)](/assets/journalism/war-importance/figure-02.png)

There does seem to be a strong indication of team WAR and team win % being positively related but there appears to be quite a bit of variance as we move towards the middle of the scatterplot. While it is possible that teams with the most WAR tend to have the best records there are other factors apart from WAR that most likely tell us the whole picture of why a team’s record happened to be that way. Injuries to players who had a high WAR or players who were traded with a high WAR are some possible explanations as to why a team’s record at the end of the season may not have kept in line even if the team as a whole had a lot of WAR.

In baseball, roster building is very crucial to having success in both the regular and postseason, so even with teams like the Angels and Padres having quite a few players who are all star batters with very high WARs, this isn’t enough to compensate for the rest of the roster.

And once a team gets to the postseason, it becomes even more volatile as the best records and highest team WARs matter less and less. Out of the top 5 teams with the most WAR, only Texas and to some extent Houston, had any semblance of postseason success as Atlanta, Los Angeles, and Tampa Bay were all knocked out in their respective first rounds. We will look more directly later at how teams and their compositions affected postseason success based on WAR.

In order to dive more into how roster building impacts a team, we also analyzed the WAR distribution of players on an individual level. We decided to split players into different categories based on their WAR stat so that we can better visualize the distribution. Additionally, the categories were chosen to describe the players in a context that makes it easier to understand for common fans. We split the players into these categories: average players have 0-2 WAR, below average have 0 and below WAR, good players have 2-4 WAR, exceptional players have 4-5 WAR, star players have 5-6 WAR, and MVP caliber players have 6 and above WAR.

![Figure 3](/assets/journalism/war-importance/figure-03.png)

As anticipated, the majority of players fall into the "average" category, while the least represented group comprises those considered MVP caliber. This aligns with the common understanding that only a select few players reach MVP contention, showcasing the cream of the crop in the league. Thus, only a handful of teams had superstart type players and every team had to have their fair share of average and below average players.

As WAR values increase, the player count decreases, reinforcing the notion that there are limited "elite" players, and achieving top-tier status in a professional league is a formidable challenge. Notably, what caught my attention is the presence of a significant number of below-average players in the league. Contrary to my initial assumption that most below-average players might not secure spots on teams, it appears there is a notable presence. This observation may, in part, be influenced by bench players who receive fewer at-bats but contribute to the overall player distribution.

We decided to see directly how individual players and their WAR on teams affect postseason success by looking at the past 6 champions and analyzing the average distributions on those teams.

![Figure 4](/assets/journalism/war-importance/figure-04.png)

The examination of the average distribution of players on championship teams provides valuable insights into the role of Wins Above Replacement (WAR) as an indicator of postseason success, beyond its correlation with regular season achievements. Notably, the distribution pattern mirrors that of the broader MLB player distribution, with the majority falling within the average or below-average categories. The scarcity of top-tier players, who distinguish themselves prominently, reinforces the idea that elite players are indeed a rarity and often set themselves apart in the league.

A compelling observation emerges when comparing championship teams to others: the percentage or frequency of exceptional, star, and MVP-caliber players is notably higher on these victorious teams. This suggests that teams securing championships tend to feature a higher concentration of elite players, elevating the overall standard of play and the team's level of competitiveness. An intriguing exception to this trend is evident in the 2021 Atlanta Braves, who lacked any star or MVP-caliber players. Instead, they demonstrated exceptional performance collectively, as exemplified by players like Eddie Rosario with a 181 wRC+ and Jorge Soler with a 145 wRC+ during the postseason. This underscores the notion that, in certain instances, a team can achieve success through a collective surge in performance rather than relying solely on individual star power.

It's worth noting that the impact of WAR appears to diminish during the postseason, where the fewer number of games may contribute to a reduced emphasis on individual player statistics. Moreover, the percentage of below-average and average players is notably lower on World Series-winning teams, aligning with the notion that championship teams tend to exhibit a more elite and competitive roster.

![Figure 5](/assets/journalism/war-importance/figure-05.png)

Now, let's delve into a case study of the most recent champions, the Texas Rangers. Similar to the trend observed in most championship teams, the Rangers boasted a higher number of MVP-caliber players than the average team, with two notable names in Corey Seager and Marcus Semien. In fact, they achieved the maximum number of MVP-caliber players, tying with the previous year's Houston Astros, among the championship teams we examined (excluding the COVID-affected year Dodgers).

Remarkably, the Texas Rangers demonstrated a reduced presence of average and below-average players compared to the typical championship team. This exemplifies a well-rounded roster, featuring a significant proportion of elite players complemented by a strong supporting cast of above-average contributors, a combination often associated with championship success.

It's essential to acknowledge that while this analysis provides valuable insights, factors such as luck and the relatively diminished impact of postseason on WAR metrics should be considered. These elements may introduce some variability and temper the precision of our statistical measures. Nonetheless, the Texas Rangers stand out as a compelling example of a team strategically balanced between elite talent and above-average contributors, showcasing a formula that proved successful in their championship pursuit.

### Conclusion

For the most part, WAR provides a holistic view of individual success during a season since it combines batting, fielding, and more. It can also help you understand which teams are most geared to have postseason runs and possible championships based on their roster construction. You can understand which players are the best and most important and how they can possibly affect the team they play. However, WAR is just a single statistic that doesn’t explain everything. It can at most give you more context and information about how well a player does or how good a team is. When evaluating individuals and teams, it is best to use a variety of statistics in addition to WAR. Ultimately, WAR is geared towards rating players on an individual level and while it does seem to have some association at a team level with team records, it still doesn’t perfectly predict a team’s record or chance of being in the playoffs. As a result, WAR is most useful for evaluating individuals or teams on an individual basis rather than teams on a whole.

As fans, whenever we use WAR, we should understand that it is more of a player statistic that is mainly valuable in gaining more context on individuals and their impact on the game.

### Sources

*ESPN* , ESPN Internet Ventures, [www.espn.com/mlb/worldseries/history/winners](http://www.espn.com/mlb/worldseries/history/winners). Accessed 17 Dec. 2023.

Hoffman, James. “Why Is War so Important in Baseball?” *The Baseball Lifestyle* , 13 Mar. 2023, [thebaseballlifestyle.com/why-is-war-so-important-in-baseball/](http://thebaseballlifestyle.com/why-is-war-so-important-in-baseball/).

“War Leaderboards.” *FanGraphs Baseball* , [www.fangraphs.com/leaders/war?season=&wartype=&lg=&team=](http://www.fangraphs.com/leaders/war?season=&wartype=&lg=&team=). Accessed 17 Dec. 2023.

Weinberg, Neil. “Calculating Position Player War, a Complete Example.” *Sabermetrics Library* , 24 June 2015, [library.fangraphs.com/calculating-position-player-war-a-complete-example/](http://library.fangraphs.com/calculating-position-player-war-a-complete-example/).
