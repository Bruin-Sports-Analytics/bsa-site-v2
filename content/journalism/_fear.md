### By: Ian Turner

## Introduction

On a late night in 1998, the Arizona Diamondbacks led the San Francisco Giants 8 to 6 in the bottom of the ninth inning with two outs and the bases loaded. A Giants batter stepped up to the plate and was walked by the Diamondbacks pitcher, cutting the Diamondback's lead to 8 to 7. Now you do not need to be a baseball expert or professional statistician to know that walking a batter with the bases loaded is not a good idea. But this walk wasn't just any walk, it was an intentional walk. And this batter wasn't just any batter, it was Barry Bonds. The decision to intentionally walk Barry Bonds with the bases loaded ultimately worked, as the Diamondbacks pitcher retired the following batter, giving the Diamondbacks the 8 to 7 victory. Now one may look at the statistics and say, "well Barry Bonds is an incredible hitter but you are still more likely to get him out than not. Why walk him?"; and the answer is something that cannot be measured by any statistic in baseball. The answer is *fear* .

Fear is something that affects all sports. Although too much fear is certainly detrimental, fear is something that can benefit teams greatly, as seen above. In this article, I will attempt to decipher what makes a pitcher fear a batter. Of course, this is no easy task, since there is no statistic remotely capable of predicting a pitcher's emotions and feelings. However, walks can be used as a form of "fear" - meaning that the pitcher would rather give a batter a free pass to first base than risk another outcome. Of course, not all walks are intentional, but the baseball statistic "intentional walks", does not capture every “intended” walk, so to try to figure out what makes a batter scary, we will use walks.

To approach this particular problem, we will take a look at some of the most "scary" hitters of all time - the hitters with the most walks in a single season. This list of 200 players hosts some of the best hitters of all time: Barry Bonds (who appears on this top 200 list 13 times), Mark McGwire, Mickey Mantle, William McCovey, Mike Trout, and David Ortiz among others. To determine what offensive statistics makes these players inspire fear, I collected 400 random MLB players from across baseball history. Combining these two data sets, marking the walk drawers with 'W' and the random players with 'R', I will use statistical classification to determine what offensive statistics differentiate an average MLB player from one who inspires fear.

## Data Exploration

The data being used has 63 predictor variables and the categorical response variable, which is what we are trying to predict. Of course, several of these predictor variables can be thrown out immediately, such as player names, positions, and teams, as they have nothing to do with measuring offensive talent and fear. In addition, variables that are influenced by walks such as On Base Percentage (OBP) and Times on Base (TOB) can be thrown out as well, as they are dependent on walks, so they would be the best predictors by default.

The graph below shows the separation between the density plots of walks for the "Walk" category versus the "Random" Category.

![Figure 1](/assets/journalism/_fear/figure-01.png)

As expected, there is almost no crossover between the two categories, meaning that the "random" players have a clear statistical distinction from the all time walk drawers.

Now let's take a look at offensive statistics that would be expected to have influence on how a pitcher approaches a batter. Note that the more separated the two density curves are, the more important the statistic is in determining fear, as it is better at separating the two different types of players.

![Figure 2](/assets/journalism/_fear/figure-02.png)

As expected, the players that walk often perform better than the average hitter in every offensive category seen above, including advanced statistics like oWAR (Offensive Wins Above Replacement), which measures offensive production compared to a replacement player, and more basic statistics such as Slugging Percentage, which is the average number of bases gained (walks not included) per at bat. Based on these density plots, these offensive statistics create a strong distinction between a scary hitter and an average hitter.

Using these density plots, we can not only determine which variables perform well in separating the two player types, but also which ones perform poorly. For example, the statistic dWAR (Defensive Wins Above Replacement) is an advanced statistic that determines how strong a fielder is overall, and has nothing to do with batting whatsoever. So we can see in the density plot below that there is nearly no separation between each density curve, since dWAR has nothing to do with walks nor offensive statistics.

![Figure 3](/assets/journalism/_fear/figure-03.png)

In addition to density plots, we can also look at scatter plots to gauge predictor strength as seen below.

![Figure 4](/assets/journalism/_fear/figure-04.png)

Since the blue points in the scatterplot are more separated horizontally from the red than they are vertically, simply based on graphics, home runs make a hitter scarier than runs batted in, which makes sense intuitively.

## Model Testing and Statistical Classification

Now typically for statistical classification, models with several variables are built in order to best predict the response variable. But in this case, rather than trying to predict whether a batter is a random batter or a scary batter, we are trying to determine which predictor variables are indicators that a batter is scary. In addition, models such as Linear Discriminant Analysis (LDA) and Generalized Linear Model require independence of the predictor variables, but nearly all of the offensive statistics captured in baseball are related to each other (such as the more home runs a player has the more RBIs, the higher the Slugging Percentage and so on). So because we only care about the strength of the predictor variables and not the actual "ideal" model, along with the fact that most of our predictor variables are correlated, we will be looking at the accuracy of models with one predictor variable. The model type being used for all the single variable classification models is LDA, which aims to project the data onto a lower-dimensional space to create class separability.

The bar plot below shows the misclassification rates of the models and their respective singular predictor variables. Observe that the lower the misclassification rate, the more important the statistic is in determining a "scary hitter".

![Figure 5](/assets/journalism/_fear/figure-05.png)

![Figure 6](/assets/journalism/_fear/figure-06.png)

This classification is performed over the full data, in which there are 200 players that are "walkers" and 400 players that are "random". So that means for a variable to be an effective predictor, it must get more than 66.6% of the predictions right (less than 0.33 error rate). This is because by predicting that every player is "R" in the full data, you would get an error rate of ⅓ , so because of this, we will get rid of the predictors that do not meet this minimum threshold.

Using this threshold, we end up with the following 15 predictor variables:

![Figure 7](/assets/journalism/_fear/figure-07.png)

## Analysis of Results

Out of the 15 variables remaining, only 3 are "basic" baseball statistics - home runs, slugging percentage, and strikeouts. This makes sense intuitively, as what makes a hitter scary is not an ability to hit singles, but to hit home runs, doubles, and triples, which is weighed heavier in slugging percentage. Although strikeouts barely clears the threshold, power hitters do tend to strikeout more often than the average hitter, so this also tracks.

However, the remaining 12 variables that are best at demonstrating what makes a hitter scary are all much more complicated, known as "advanced" baseball statistics. Most of these advanced statistics go beyond simply tabulated statistics, but rather create ratings for each player based on how much offensive output they add to their team, taking into account the situation. For example, the RE24 statistic is described by Stathead Baseball (which was used to collect the data) as a statistic that measures the number of runs the batter added, taking into account the number of outs and number of runners on base. A possible reason why RE24 performed so well is that a batter is scary not only because of their home run counts or slugging percentage, but when they do it. Players that succeed in scenarios where there are runners on base are far more intimidating and scary than those who are not as effective when runners are on base.

The advanced statistic that performed the best out of all considered is BtRuns, which only incorrectly sorted 118 out of the 600 players. BtRuns is described as adjusted batting runs, which "estimates a player's total contributions to a team's runs total via linear weights" (Stathead Baseball). So players with a higher BtRuns statistic provide larger contributions to their team's offensive output. It makes sense then why this variable would perform the best compared to all the other offensive statistics. If a batter is responsible for a large share of their team's offensive output, then that hitter is seen as "scary". For example, if a player such as Barry Bonds, Mike Trout, or Mickey Mantle were on a team with a bunch of average players, a pitcher would be "scared" of facing these batters not only because of their ability to hit for power, but also because they carry such a large load of offensive output; a pitcher is far more likely to be scared of a batter if that batter not only has impressive offensive talent, but is the main force of a team's offense.

Thinking back to the game where Barry Bonds was walked with the bases loaded, the pitcher was scared of Barry Bonds not only because he is one of the best power hitters of all time, but because he was the dominant offensive force on that San Francisco Giants team. The hitter that followed Barry Bonds that night was Brent Mayne, a career .263 hitter who is much less scary to face with the bases loaded than the home run machine Barry Bonds. Based on this example and the fact that BtRuns performed the best, in baseball, fear is not only dependent on a batter's skill and offensive statistics, but the talent around them.

## Drawbacks and Possible Issues

Although the conclusions of this statistical experiment are fairly sound and intuitive - the idea that both individual skill along with how pivotal a player is in creating offense for a team both cause a pitcher to be afraid of a batter - there are some limitations of this conclusion and some possible issues.

The first problem is how the "random" players were selected. I was unable to find a method for finding random players, so I instead decided to do a search for the top leaders in what I'd consider to be "irrelevant" baseball statistics - sacrifice flies and hit by a pitch. Of course, there is correlation in every statistic in baseball, so it is possible that these players were not truly random, so although I believe the conclusions are sound, it is possible that another variable could have performed better than BtRuns given a more randomized player set.

Another valid question that can be asked is why the accuracy of the predictors is so poor. Of course, because each of our models is only 1 variable, predictions are not going to be as strong. However, it is also because not all players who draw a lot of walks are drawing them for the same reasons. Although a majority of the players in the top 200 walks list draw that many walks because of their ability to hit and hit with power in pivotal situations, there are some players in the list that are good hitters, but draw so many walks because they have a good eye, rather than intimidating batting prowess. So because there is the possibility that not all the batters in the "scary batters" data are actually scary, there might be a limitation for how low the misclassification score can go.

Although the statistical experiment was not flawless, and fear is far more complicated than a simple statistic like walks can capture, I believe that the method I used was able to provide some real insights into why these batters are pitched around so often.

## Conclusion

The exploration of fear in baseball reveals a complex interplay between individual skill and team dynamics. While traditional statistics such as home runs and slugging percentage do play a role in defining a "scary" hitter, it is the advanced metrics that offer a deeper understanding of a player's impact on the game. BtRuns stands out by accurately capturing a player's contribution to their team's offensive output, thus serving as a reliable indicator of the threat they pose to opposing pitchers, whereas the statistic RE24 stands out as it captures a player's ability to hit when it matters most. These advanced statistics performed better than the simple statistics because they not only capture a hitter’s ability to hit and hit for power, but how valuable they are in their team’s offensive machine.

The case of Barry Bonds' intentional walk with the bases loaded exemplifies the multifaceted nature of fear in baseball. It's not merely the potential for a powerful hit that intimidates pitchers; it's also the recognition of a player's critical role within their team's offense. This insight challenges teams and analysts to consider not just the individual prowess of hitters but also how they fit into and elevate the collective performance of their lineup.

### Sources:

- [stathead.com](http://stathead.com)
- [baseball-reference.com](http://baseball-reference.com)
