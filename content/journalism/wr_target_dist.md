### By: Kiel Messinger and Zayne Kratz

## Introduction

As the NFL continues becoming a more pass-happy league, we have seen even more value being placed on its top quarterbacks, and as a result, their primary pass-catchers. Elite wide receivers can make upwards of $20 million a year, and even replacement-level receivers like Nelson Agholor received $10+ million dollars contracts this past offseason. The league’s promotion of these pass-catchers raises questions on not only how valuable these receivers are, but if teams should be targeting a single elite one, or multiple solid ones.

To test an aspect of this, we gathered the target percentages–the amount of targets received divided by the overall number of targets–for each team’s top three pass-catchers over five seasons (2016 - 2020). To measure success, we use the team’s win percentage that season. The results should indicate whether team’s have had success peppering their top pass-catcher with targets, or with a more balanced spread of targets among their top three receivers.

## Data and Analysis

![Figure 1](/assets/journalism/wr_target_dist/figure-01.png)

![Figure 2](/assets/journalism/wr_target_dist/figure-02.png)

![Figure 3](/assets/journalism/wr_target_dist/figure-03.png)

As seen by the graphs, both pass-catcher 1 and pass-catcher 2 target share have a positive correlation with win percentage. The slopes of win percentage in response to target share are .05606 and .03996 respectively, representing the expected increase in win percentage for an increase in 1% target share for each pass-catcher category.. The slopes indicate that on the other hand, WR 3 target share shows little to no correlation with win percentage.

The trends over a five year period indicate that better teams tended to have higher pass-catcher 1 and 2 target shares. The R-squared for the two sets were .0781 and .0649 respectively, with these values indicating the percent of variance in win percentage that is predicted by the target share data. There were p-values of less than .0002 for both sets of data, which would lead to the conclusion that the observed difference was extremely unlikely to have been random, and thus there is some impact these target shares have on team success. This conclusion makes sense given that while elite receivers on good teams demand elite target shares, natural intuition would also assume that poor teams might filter their targets to their top receiver due to a lack of better options. This can be seen throughout the league this year, with a majority of the elite target share players (Davante Adams, Cooper Kupp, Tyreek Hill) are on good teams while others (D.J. Moore, Darnell Mooney, Brandin Cooks) are on mediocre to poor teams.

However, further analysis strongly suggests that teams with elite pass-catcher target shares have for the most part a higher floor than teams without. Of the 14 teams who had a player with a 28% or higher target share, only 1 had a win percentage of under 40%. That team was the 2017 Texans, who went 4-12 despite DeAndre Hopkins’ 35% target share, the highest in our sample. However, this result could even be seen as an outlier, as the team’s lack of success could be credited to Deshaun Watson’s injury. Either way, it seems having a pass-catcher that demands that level of target share probably means that player is just elite, and naturally gives the team a higher floor. Another conclusion could be that teams should not specifically gameplan to get other receivers involved if one naturally demands a significant amount of looks.

On the other hand, the six lowest teams in terms of pass catcher 1 target share, all with shares of around 16% or less, all had records less than .500. This indicates that potentially, teams should at least aim to target their top player 16% of the time. However, these occurrences may have been influenced by injury to top receivers or bench players overtaking starters, both indicators of teams with a lower record, among other factors.

![Figure 4](/assets/journalism/wr_target_dist/figure-04.png)

![Figure 5](/assets/journalism/wr_target_dist/figure-05.png)

The results from the WR 3 graph as well as the above two indicate that the pass catcher 3 target share is irrelevant to win percentage. As you can see, the trend is about the same between WR 1, 2, and 3 target share and win percentage, and WR 1 and 2 target share and win percentage. The slopes are .0933 and .0962 respectively. A potential conclusion would be that teams should focus on investing in two pass-catching weapons, whether it be two receivers, or involving a tight end or running back, and that the third option becomes less relevant. Or, the team should at least focus their gameplan on their two top pass-catching weapons. This can be seen with a team like the Chiefs, who built their game plan with Tyreek Hill beating cover 1 defenses and Travis Kelce beating cover 2.

## Conclusions and Further Insights

Our analysis has produced results that show a positive correlation between target shares of the top two pass-catchers on a team and that team’s win percentage. However, the analysis could have a few inconsistencies due to unforeseen aspects like injuries. It also leaves room for further insight. Future analyses could look into how specifically tight end or running back target percentage influences win percentage. Or we could look at each pass-catcher level’s production and how it relates to win percentage to get a better sense of how much actual efficiency affects wins, though there would be an assumed positive correlation in that scenario. We could look into the consistency of these target share numbers from year to year and try to conclude if changes on a year by year basis are due to a coach’s gameplan, the quarterback, changes in personnel, or simply variance.

### Sources

[*https://github.com/nflverse/nflfastR-data*](https://github.com/nflverse/nflfastR-data)
