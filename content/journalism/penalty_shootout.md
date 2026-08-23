### By: Anish Ravilla and Ishika Sanghi

## Introduction

In soccer, the penalty shootout is one of those monumental events that can make or break the history of an entire team and everything it stands for, especially when this shootout occurs during a high-profile tournament. The mental contest between the penalty kick taker and the goalkeeper is one that has feature-length articles written about it, as for many of these players, it is a dream to be on this stage -- a dream that rewards many years of hidden sweat and tears. Indeed, for each penalty shootout, players will have prepared with countless hours of rewatching goalkeeper/kick taker footage and shooting/diving practice: all in preparation for one spot kick.

After the endless amount of match replays, and the subsequent fixture congestion that these replays would cause, high profile games that ended in draws required another solution. Officials adopted alternatives such as the [drawing of lots](https://www.google.com/url?q=http://www.goaldentimes.org/flight-of-the-big-bird-story-of-the-1962-world-cup/&sa=D&source=editors&ust=1639462333622000&usg=AOvVaw3rYkzswH3GAHH6lKk3kZns), and the corner counts in which the team with the most corner kicks won the game. When Israel was robbed of an Olympic win against Bulgaria by the drawing of lots in the 1968 Olympics, they naturally felt aggrieved and submitted a proposal to FIFA outlining penalty kick shootouts as a possible alternative to decide these knockout matches. [The penalty shootout came into effect in 1970](https://www.google.com/url?q=https://www.fifamuseum.com/en/stories/blog/why-the-lottery-that-is-penalty-shoot-outs-were-introduced-2610606/&sa=D&source=editors&ust=1639462333622000&usg=AOvVaw2qzdG8BDklVF1iPvSNvW1i), and has been the deciding event in tournament knockout games since then.

In this article, we analyze penalty kicks taken from all of the shootouts since the 1982 World Cup up until the recently concluded 2018 World Cup. We hope to analyze the kicking patterns to see which areas of the goal have the highest and lowest goal success rate, and how these correlations vary among right-footed and left-footed players. This article does not account for the impact of crowds or field and temperature conditions.

## Data Breakdown

To learn about the breakdown of penalty kick placement over all of these World Cups, we analyzed a Kaggle dataset in which the goal frame is divided into nine different zones as seen below.

![Source: Kaggle](/assets/journalism/penalty_shootout/figure-01.png)

After conducting a simple analysis of the data we found that for both right-footed and left-footed players, there was one goal zone that triumphed over the rest. For right-footed players, the highest number of goals scored occurred in **zone 7** (with **34 goals** being scored), while for left-footed players, the highest number of goals scored occurred in **zone 9** (with **8 goals** being scored). Below are the two distributions of these findings:

![Figure 2](/assets/journalism/penalty_shootout/figure-02.png)

![Figure 3](/assets/journalism/penalty_shootout/figure-03.png)

After performing a chi-squared test on both the goals scored by right-footed players and the goals scored by left-footed players, we found that the distribution of right-footed players was very significant, with the distribution achieving a chi-square value of 39.452, suggesting that the sample data does not at all fit the null hypothesis that there is no relationship between where players shoot and where they score. Indeed, the probability that we see results like this if our null hypothesis was true would have been so small that it would practically be zero.

Although we did not find the results of the left-footed distribution to be significant, as we did not calculate a large enough chi-square value to refute our null hypothesis, with more data on left-footed players we could conduct a more extensive analysis to see if the results are similar to those of the right-footed distribution.

An interesting thing to note from this finding is that for both groups of players, their respective zone of preference was the zone that was in the bottom corner when they would shoot across their body. Below is a clip of a right-footed player scoring a penalty-kick across his body into zone 7.

However, it is not enough to just look at the number of goals scored in each zone, as this does not provide the success rate of each goal zone. Below we broke down the frequency of goals scored for each goal zone based on whether the goals were scored with players’ left feet or their right feet.

![Figure 4](/assets/journalism/penalty_shootout/figure-04.png)

From the graph shown above it can be seen that the highest proportion of successes for right footed players is in Zone 3, with a success rate of **0.818** . Left footed players have a **success rate of 1** in both Zone 3 and 5 which indicates that every attempt in the dataset resulted in a goal. However, this can be a biased measurement as the sample size for left footed players is only 56 as only [22% of soccer players are](https://www.google.com/url?q=https://www.sheffield.ac.uk/polopoly_fs/1.105580!/file/left-foot-papermay2009.pdf&sa=D&source=editors&ust=1639462333626000&usg=AOvVaw0y2LchgkGGmjvmkINixJCr)[left-footed](https://www.google.com/url?q=https://www.sheffield.ac.uk/polopoly_fs/1.105580!/file/left-foot-papermay2009.pdf&sa=D&source=editors&ust=1639462333627000&usg=AOvVaw3qeKLCUH-GTsIK-WsppAIK)[.](https://www.google.com/url?q=https://www.sheffield.ac.uk/polopoly_fs/1.105580!/file/left-foot-papermay2009.pdf&sa=D&source=editors&ust=1639462333627000&usg=AOvVaw3qeKLCUH-GTsIK-WsppAIK)

To gain a broader perspective of the penalty kick, the success rate of goalkeepers in the World Cup has been graphed below. The goal is divided into three zones: Center, Left and Right. With reference to the goal zones shown in image 1, left comprises zones 1, 4 and 7; right comprises zones 2, 5, and 8 and center comprises zones 3, 6, and 9.

Below is a heatmap of which zones players have scored the most goals in, across both left and right footed players. As seen in the heatmap, zone 7 (the bottom left corner) experienced the most success.

![Figure 5](/assets/journalism/penalty_shootout/figure-05.png)

### Role of the Goalkeeper

It is not just the shooter that is involved in the penalty shootout. The presence of the keeper would surely play a role in where the shooter decides to shoot the ball. Depending on where keepers dived the most historically, we can examine if there is a relationship between where the shooters shoot the ball and where keepers dive to try and stop it. Note that the keeper statistics are viewed from the perspective of the shooter. So if a keeper dives to the right, he is diving to the shooter’s right side.

![Figure 6](/assets/journalism/penalty_shootout/figure-06.png)

The success rate of the keeper is 0.299 in the left zone, 0.25 in the center zone and is the highest at 0.316 in the right zone. However, the chi-square test reveals that the results of this data are insignificant, meaning that the differences between the way the keeper dives can be attributed to random variation. Indeed, goalkeepers often have to make educated guesses about where to dive based on game footage or a shooter’s body shape. There is no systematic formula for saving penalty kicks.

This reflects that a keeper is better off diving to a side than choosing to stay in the center, purely based on the success rates found using this dataset. To get a clearer understanding of how this fits in with the success rate of players, below is a graph that displays the success rate of players according to the zones left, center and right.

Players have the highest success rate of scoring in the right zone (0.768), followed by the left zone (0.69) and finally the center (0.596). This is the same order of success rate as goalkeepers which is extremely interesting. Success is defined by the player scoring the penalty kick into the goal.

The Player success rates and the Keeper Success rates in an ideal world would simply add up to a frequency of 1, as each event would be the complement of the other. However, players sometimes miss the goal completely, and thus do not place the ball in any of the goal zones. As a result, these shots are not counted and do introduce some bias into this dataset as our dataset is smaller and not as representative as it would be if these players placed their shots on frame.

In this analysis, we observed an imbalance between the number of raw attempts and raw goals scored in each zone, with significantly more attempts and goals scored in the bottom row of zones than in the top or middle rows. We can attribute this to the idea that shots along the bottom row of zones are a more low-risk option for players, as they are able to pass the ball into these zones with more precision and technique. However, since there are more attempts going into these zones, the frequency of goals in these zones would be lower than the frequency of goals scored in the more high-risk zones, such as the top right and left corners of the goal. When players shoot into these top corner zones, a goalkeeper would be less likely to save this shot, since the shot would be out of reach for the keeper Therefore, as seen in the frequency graph above, zone 3 -- which corresponds with the top right corner -- has the highest goal frequency for both left footed and right footed player.

When analysing this data it proves to be difficult to provide perfect advice to a keeper or a player as theoretically they both have a higher chance of success if they choose the right side of the goal however, both of them choosing to go right would significantly lower both their chances of success. Ultimately, the best strategy for a shooter to score a penalty is to pick a section of the goal and use proper technique to shoot it into that zone. Although goalkeepers have more success diving to one side than staying in the center, players should still try to shoot in zones to the left and to the right of the goalkeeper in order to maximize their chances of success, as goalkeepers have roughly the same chance of saving a goal regardless of where they dive.

## Conclusion

This article aimed to determine the goal zone that would maximise a soccer player’s success rate of scoring based on whether they were left or right footed. Our examination of the World Cup data from the 1982 till 2018 indicated that the top right corner is the ideal placement for a right footed player, while the top right corner and center is ideal for a left footed player.

We reached the conclusion that the presence of a goalkeeper should not affect the player’s ideal placement of a shot since the probability of the goalkeeper saving the goal on the left or right side is about the same.

A limitation of this analysis is that there is inadequate data to make a definite conclusion for left footed players due to the limited number of left-footed players.

To gain a broader perspective of the success rate of a player, we also looked at the success rate of goalkeepers during shootouts in each goal zone. The game situation of a World Cup penalty shootout is also very different from penalties that occur during the game, so it would be interesting to examine how penalty trends during regulation time games across different tournaments and different leagues compare to the trends we discovered in this dataset.

The conclusions drawn in this article are only applicable to the World Cup however, it would be an interesting extension to compare and contrast them with data from other soccer leagues and championships to see if there is an overarching trend that can help improve a player’s performance during a penalty shootout.

### Sources

- World Cup Shootout Dataset[https://www.kaggle.com/pablollanderos33/world-cup-penalty-shootouts/metadata](https://www.google.com/url?q=https://www.kaggle.com/pablollanderos33/world-cup-penalty-shootouts/metadata&sa=D&source=editors&ust=1639462333631000&usg=AOvVaw0qMbYLEqL7SlzsworZ1bAZ)
- [https://www.kaggle.com/pablollanderos33/world-cup-penalty-shootouts/metadata](https://www.google.com/url?q=https://www.kaggle.com/pablollanderos33/world-cup-penalty-shootouts/metadata&sa=D&source=editors&ust=1639462333631000&usg=AOvVaw0qMbYLEqL7SlzsworZ1bAZ)
- [http://www.goaldentimes.org/flight-of-the-big-bird-story-of-the-1962-world-cup/](https://www.google.com/url?q=http://www.goaldentimes.org/flight-of-the-big-bird-story-of-the-1962-world-cup/&sa=D&source=editors&ust=1639462333631000&usg=AOvVaw3SzdROs2vM3VNI0ixjAxP_)
- [https://www.fifamuseum.com/en/stories/blog/why-the-lottery-that-is-penalty-shoot-outs-were-introduced-2610606/](https://www.google.com/url?q=https://www.fifamuseum.com/en/stories/blog/why-the-lottery-that-is-penalty-shoot-outs-were-introduced-2610606/&sa=D&source=editors&ust=1639462333632000&usg=AOvVaw2pNjwcO0iP9dKQKvC1HR-2)

- [https://www.kaggle.com/pablollanderos33/world-cup-penalty-shootouts/metadata](https://www.google.com/url?q=https://www.kaggle.com/pablollanderos33/world-cup-penalty-shootouts/metadata&sa=D&source=editors&ust=1639462333631000&usg=AOvVaw0qMbYLEqL7SlzsworZ1bAZ)
