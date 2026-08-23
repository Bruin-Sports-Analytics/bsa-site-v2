### By: Raja Kavasseri

## Introduction

The NFL recently increased the number of games per team from 16 to 17. A 17th game makes sense - more football is great for fans and for profits. But an extra game also means more physical stress, and therefore more injuries for players. There is no NFL without the players, and their health needs to remain a priority. This is not lost on the NFL, as many features of the league, like helmets and the bye week, are set up to minimize injuries. There are also constant rule and equipment changes implemented to decrease injury risk. Despite such a heavy focus on preventing injuries, there have been many conversations about extending the NFL season even further to 18 games. Will increasing the number of games create more injuries, counteracting all the work done to prevent them? Throughout this article, we will look at the effects of adding an 18th game and try to determine if we can make this addition safely by adding a second bye week. Can we maximize fan entertainment while preserving the well-being of NFL players?

## Data

The data for this project comes from[this](https://github.com/nflverse/nflverse-data/releases/tag/injuries) GitHub repository and is composed of every listing on NFL injury reports since 2016. To ensure we are assessing players with substantial injuries (as opposed to extremely minor injuries or resting players), we will only look at data for players who were given “Out,” “Doubtful,” or “Questionable” game designations.

![Figure 1](/assets/journalism/bye-week/figure-01.png)

## Terms and Notes

*Injuries* - In this article, injuries refer to players featured on an injury report with an “Out,” “Doubtful,” or “Questionable” designation.

*Week* - An injury in a specific week means the player was injured leading into that week’s game, not during that week’s game.

*week_diff* - The week_diff column displayed in the above image is the difference between the week a player was injured and the bye week for that player’s team. For example, a week 6 injury with a week 9 bye week would have a week_diff of -3.

*Injured Reserve* - Injured players who are slated to miss extensive time are placed on injured reserve so they do not count against the 53 player roster limit. These players are not listed on injury reports, and therefore cannot be represented in this article.

## Analysis

### A Look Back at Adding the 17th Game

![Figure 2](/assets/journalism/bye-week/figure-02.png)

There were 179 more injuries in 2022, when the NFL season was extended to 17 games, than there were in 2021. Adding an extra game evidently created more injuries, demonstrating the perils of increasing the season length to 18 games in the future. Also, I believe the large number of injuries in 2016 is due to a transition period in NFL injury report procedures, but more research would need to be done to confirm this.

### The Effect of The Bye Week on Injuries

Let’s see if the bye week actually works for preventing injuries in the NFL. The next graph shows the average number of injuries per team for different numbers of weeks after the bye. Negative indices indicate a number of weeks before the bye week. Note that there is no data for injuries during the bye week, so the graph will skip from one week before the bye week to one week after the bye week.

![Figure 3](/assets/journalism/bye-week/figure-03.png)

There is a 30% decrease in injuries following the bye week, indicating that the bye week is extremely effective in mitigating injuries. There is also a prolonged period after the bye during which injury counts are lower than they were the week before the bye.

This begs the question - if we wish to both increase the total number of games while ensuring player health, why not add both an extra game and an extra bye week? Could the second bye week offset an increase in injuries resulting from an additional game?

## Predictions

Let’s predict how adding an 18th game could impact injuries. I want to compare how having one bye week would compare to having two bye weeks in an 18 game season. To do this, we will look at the data on injuries per week for teams that have had week 6 byes since 2016. I chose to look at data for teams with a specific bye week because it makes it easier to compare the number of total injuries in a season. There are a few reasons as to why I chose to look at data for teams with week 6 byes, specifically:

- Week 6 is about one-third of the way through the season, making it possible to space out a second bye week fairly evenly.
- The data for week 6 byes was more linear than other weeks. Frankly, this makes it easier to fit a linear relationship to, making it more suited for a regression-based prediction.

First, we’ll predict how adding an 18th game, while having only one bye week, would impact injuries. To do this, I fit a regression model for the data both before and after the bye week, respectively, to get a solid approximation of the trends in the data.

![Figure 4](/assets/journalism/bye-week/figure-04.png)

The blue line represents the original data on injuries per week for teams with week 6 byes, while the red line is the best fit line to this data. I then extended the best fit line to week 19 to see the effect of adding an 18th game.

![Figure 5](/assets/journalism/bye-week/figure-05.png)

The prediction shows that adding another game with no changes to bye weeks would increase the number of injuries per team each season by about 5.42. This equates to an additional 173 injuries across the league every season. Therefore, adding an 18th game with no other changes would be incredibly harmful to players.

But what if we added an 18th game and a second bye week?

### Creating the Prediction with a Second Bye Week

For teams with week 6 byes, the week after the bye week had an average of about 19% fewer injuries than the week before the bye week. The lines of best fit from the previous section also demonstrate that, after the bye, the number of injuries increases at about 6% of the rate that it increased at before the bye (after the bye, the slope was about 94% less than it was before the bye). For predicting the addition of a second bye, I assumed that the second bye week would have the same effects as the first bye week did - about a 19% immediate decrease in injuries and a 94% decrease from the fitted slope after the first bye.

![Figure 6](/assets/journalism/bye-week/figure-06.png)

While it appears that adding a second bye greatly reduces the number of injuries, the extra bye makes it difficult to directly compare the counts week-by-week. Let’s look at the total number of injuries over the season for the original data and the two predictions. This was calculated by adding up the number of injuries each week for the three distinct cases, then multiplying the results by 32 to account for all teams.

![Figure 7](/assets/journalism/bye-week/figure-07.png)

Our prediction states that adding a second bye and an 18th game would lead to less injuries per game than having 17 games with one bye. This means we can add an 18th game while decreasing injuries as long as we have a second bye week.

While the week 6 bye week reduced the slope by about 94%, I would like to note that average slope reduction across all bye weeks was about 49%. To ensure I was not overestimating the slope reduction and underestimating the number of injuries, I made a revised prediction. I used the same immediate decrease in injuries (about 19%), but this time I did not change the predicted slope from what it was after the first bye. Let’s look at the revised prediction.

![Figure 8](/assets/journalism/bye-week/figure-08.png)

With this projection, we still cannot easily compare the total number of injuries between the three cases by looking at the line graphs. A bar graph will help us understand the total number of injuries for each case.

![Figure 9](/assets/journalism/bye-week/figure-09.png)

We can see that even without changing the injury accumulation rate after the second bye week, having two bye weeks and 18 games is projected to yield the fewest number of injuries - about 77 fewer injuries across the NFL each season than there are currently. However, adding an 18th game without a second bye would lead to far more injuries per team each season - about 174 more total injuries each season than the current 17 game season has and about 251 more injuries than an 18 game season with two bye weeks is projected to have.

## Conclusion

The NFL bye week plays a prominent role in mitigating injuries in the NFL. While we only used data from teams with week 6 byes when making our predictions, I believe the results would be fairly similar regardless of bye week. This is because the bye week created an average of a 30% immediate decrease in injuries, while we only used a 19% decrease when making predictions based on week 6 byes. Therefore, I would anticipate the overall results to be equally or more favorable towards creating a second bye week whilst adding an 18th game.

Adding an 18th game without adding a second bye week is expected to create a large increase in the number of injuries per season. However, adding a second bye week along with an 18th game was actually projected to *reduce* the number of injuries from the current format (17 games, 1 bye week). Therefore, my predictions signify that the NFL can safely add an 18th game, as long as they also create a second bye week for each team. This can simultaneously increase league profits, fan entertainment, and player safety.

As a final note, I will give my personal opinion. If the sole intention is preventing injuries, keeping the season length at 17 games while adding a second bye week would maximize player safety. However, if the NFL is set on an 18 game season, a second bye week is the way to go.

### Sources:

[https://github.com/nflverse/nflverse-data/releases/tag/injuries](https://github.com/nflverse/nflverse-data/releases/tag/injuries)

[https://www.buffalobills.com/photos/game-frames-bills-at-jets-monday-night-football#f3d79f25-d930-4573-9f72-72bc16facd30](https://www.buffalobills.com/photos/game-frames-bills-at-jets-monday-night-football#f3d79f25-d930-4573-9f72-72bc16facd30)
