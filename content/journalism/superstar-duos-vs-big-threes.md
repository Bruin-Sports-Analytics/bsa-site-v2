## Introduction

Throughout NBA history, teams have done everything they can to win the elusive NBA championship. Whether it’s tanking for a possible championship in the future, reworking the front office by hiring a new general manager, or reconstructing the roster to a more win-now situation, teams have typically done whatever it takes to open the door for a championship.

Today, we will look at how teams reconstruct their roster to win a championship. More specifically, we will observe whether superstar duos or “big threes” are more effective in capturing the Larry O’Brien trophy. Throughout NBA history, superstar duos and big threes dominate on the big stage. For example, Michael Jordan, Scottie Pippen, and Dennis Rodman dominated the 90s, while Kobe and Shaquille O'Neal “three-peated” in the early 2000s. More recently, we’ve seen Stephen Curry, Kevin Durant, and Klay Thompson win the trophy together three times, and Jayson Tatum and Jaylen Brown won just last year. The championship window for a team in win-now mode is usually a couple of years, so they must capitalize on every opportunity they get, meaning they must sign all the right free agents and potentially trade away future draft picks.

Of course, the most important part of the puzzle is the guys at the top. The stars of the team are the ones that carry you to the promised land. The stars are the ones who close out games and put the team on their back when times are tough. But is having too many stars detrimental to the team? Is having two stars not enough? This article will explore whether superstar duos or big threes are more effective in winning championships in the modern NBA (1980s to the present). We will be exploring the winning statistics that will prove whether big threes or superstar duos are more effective at winning championships.

## Sourcing the Dataset

The first dataset was sourced from Kaggle, which looks at the NBA finals and champions throughout modern NBA history.

## Methodology

There are several metrics that I want to look at. Here are the ones that I will calculate:

1. **Number of Championships:**  The total count of championships won by big threes and superstar duos.
2. **Number of Finals Appearances:**  The number of times teams classified as big threes or superstar duos reached the NBA Finals.
3. **Win Percentage in Finals:**  The percentage of NBA Finals appearances that resulted in a championship victory. This is calculated as:
4. **Win Percentage in Regular Season:**  The average win rate of teams in the regular season.
5. **Win Percentage in Postseason:**  The average win rate of teams in the playoffs.
6. **Point Differential (Average Margin of Victory):**  The average difference in points scored versus points allowed per game.

## Preparing the Data

![Figure 1](/assets/journalism/superstar-duos-vs-big-threes/figure-01.png)

My main goal when analyzing the data was to create multiple visualizations comparing big threes and superstar duos. The first graph I want to show is the number of championships (count) between big threes and superstar duos. The next graph I want to display is the number of finals appearances between them. Lastly, I will compute their win percentage in finals, meaning how successful they were once they got there. In summary:

- Graph 1: Found the number of championships won by big threes and superstar duos from the 1980s to 2018 (the end of the dataset), then, created a bar chart displaying the difference.
- Graph 2: Found the number of finals appearances for big threes and superstar duos respectively, then created a bar chart displaying the difference.
- Graph 3: Using the numbers I found for graph 1 and graph 2, I computed the win percentage in finals for big threes and superstar duos respectively by dividing the number of championships they won by the number of finals appearances.

Next, let’s look at the regular season performance between championship-winning big threes and superstar duos. We will first calculate the win percentage in the regular season between big threes and superstar duos. We will then look at the win percentage in the postseason. Lastly, we will look at point differential, which measures the average margin of victory. To summarize:

- Graph 1: Win percentage (regular season): The average regular-season win rate for teams classified as big threes vs. superstar duos.
- Graph 2: Win percentage (post-season): The average postseason win rate for teams classified as big threes vs. superstar duos.
- Graph 3: Point differential: The average margin of victory.

## Analysis

![Figure 2](/assets/journalism/superstar-duos-vs-big-threes/figure-02.png)

![Figure 3](/assets/journalism/superstar-duos-vs-big-threes/figure-03.png)

Here, we can see that the superstar duo won 17 times while the big threes won 18 times. Notably, superstar duos like Shaquille O’Neal and Kobe Bryant won three times, and big threes like Michael Jordan, Scottie Pippen, and Dennis Rodman also won three times. However, as you can see, there is a third column: neither. This is for championship teams that did not fit into either category, whether it’s because they had a well-balanced team or had one solo superstar on the team with a bunch of role players. Some examples of this include the 1994 Houston Rockets, where Hakeem was the only star on the team, and the 1999 San Antonio Spurs, where David Robinson was aging quickly and Duncan was the only superstar. Overall, we can see that big threes and superstar duos typically win at the same rate, meaning that we need to look at more metrics to see which one is truly superior.

![Figure 4](/assets/journalism/superstar-duos-vs-big-threes/figure-04.png)

![Figure 5](/assets/journalism/superstar-duos-vs-big-threes/figure-05.png)

Here, we observe the number of final appearances for each formation. Even though a team doesn’t win a championship, that doesn’t mean that season is a failure. According to Bucks legend and former MVP and Finals MVP Giannis Antetokounmpo, "There's no failure in sports. It's not a failure, it's a step to success.” Similarly, making the finals is a great sign for the team to come, and it is a huge step towards success. Looking at the graph, we see that the NBA finals in the modern NBA consisted of 30 superstar duos, 48 big threes, and 16 teams that didn’t fit either category. What’s interesting is that even though superstar duos and big threes are pretty split in the number of championships they’ve won, big threes have appeared in the finals way more often. Additionally, teams that don’t fit in either category make it to the finals a good amount, highlighting the importance of a well-balanced team.

![Figure 6](/assets/journalism/superstar-duos-vs-big-threes/figure-06.png)

![Figure 7](/assets/journalism/superstar-duos-vs-big-threes/figure-07.png)

Here, we can see the NBA finals win percentage for both formations. In the finals, superstar duos win almost 57% of the time while big threes tend to win championships 37.5% of the time. So superstar duos are more successful in the finals, but big threes are more successful in getting to the finals. This is interesting because they balance each other out, as seen in the number of championships each formation has won.

![Figure 8](/assets/journalism/superstar-duos-vs-big-threes/figure-08.png)

![Figure 9](/assets/journalism/superstar-duos-vs-big-threes/figure-09.png)

![Figure 10](/assets/journalism/superstar-duos-vs-big-threes/figure-10.png)

![Figure 11](/assets/journalism/superstar-duos-vs-big-threes/figure-11.png)

Here, we can see the average regular season win percentage between championship-winning big threes and superstar duos. Big threes have an average win percentage of 78% while superstar duos have an average win percentage of 72%, a pretty noticeable difference. However, regular season win percentage doesn’t directly translate to postseason success, but it does give a good indication as to which teams will succeed on the big stage.

![Figure 12](/assets/journalism/superstar-duos-vs-big-threes/figure-12.png)

![Figure 13](/assets/journalism/superstar-duos-vs-big-threes/figure-13.png)

![Figure 14](/assets/journalism/superstar-duos-vs-big-threes/figure-14.png)

We can see the average postseason win percentage between championship-winning big threes and superstar duos. Big threes have an average win percentage of 77% while superstar duos have an average win percentage of 74%. Based on this stat and many others, it seems that big threes have more postseason success than superstar duos.

![Figure 15](/assets/journalism/superstar-duos-vs-big-threes/figure-15.png)

![Figure 16](/assets/journalism/superstar-duos-vs-big-threes/figure-16.png)

![Figure 17](/assets/journalism/superstar-duos-vs-big-threes/figure-17.png)

## Conclusion

Through my analysis of key success metrics, like win percentage and point differential, I’ve concluded that there is no definitive evidence that big threes are inherently better than superstar duos, or vice versa, in winning championships.

While both formations have had their successes in the modern NBA, the differences in their statistical performance are very minimal and very similar. Teams with big threes are more flexible when it comes to withstanding injuries, but superstar duos provide more financial flexibility, allowing for a good rotation of role players.

Ultimately, winning a championship is not dependent on team formation. The key to success is having a balanced roster where good role players complement star players.

## Sources

[https://www.kaggle.com/datasets/thedevastator/historical-nba-finals-and-mvp-results](https://www.kaggle.com/datasets/thedevastator/historical-nba-finals-and-mvp-results)

[https://www.basketball-reference.com/playoffs](https://www.basketball-reference.com/playoffs)

[https://thenewleafjournal.com/examining-whether-defense-wins-nba-championships](https://thenewleafjournal.com/examining-whether-defense-wins-nba-championships)
