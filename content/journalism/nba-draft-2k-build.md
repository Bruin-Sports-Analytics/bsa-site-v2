## Introduction

We don’t see many Derrick Whites out there: 6 foot 4 tall, 190 lb, bald players with incredible defensive instincts and a silky smooth three-point jumper. Neither do we see many Victor Wembanyamas: 7 foot 4 giants that can create off the dribble, drill shots from beyond the arc, and swat three shots a game. This is because basketball is a game of tradeoffs. Taller players are typically skilled in shot-blocking and rebounding. In contrast, shorter players, though worse shot-blockers, are typically better three-point shooters and play-makers.

The series NBA 2K captures this idea beautifully in the single-player MyCAREER game mode. When customizing a MyPlayer, there is a set number of attributes that a user can assign to the various skills of their MyPlayer. An 85 in Post Control and an 80 in Pass Accuracy may mean that the player only has 40 points allocated to their Speed and Acceleration. Another MyPlayer may have an 80 in Block and Steal, but only 20 in Strength. Together, the various combinations of allocated attributes create builds, each corresponding to a unique playstyle. In total, NBA 2K24 has 49 distinct point guard builds, 44 distinct shooting guard builds, 35 small forward builds, 45 power forward builds, and 44 center builds. With so many possible builds to choose from, the question arises: which build is the best? What type of playstyle is the most successful in the NBA? Can we use college playstyle to predict the success of NBA prospects?

![MyCAREER image from NBA 2K24 (Source: Joshua Moy)](/assets/journalism/nba-draft-2k-build/figure-01.png)

## A Basic Measure of Success

One of the key goals of this project is to classify player builds as either "bust"-prone or not. To do this, we'll define busts and successes using a metric based on individual statistics relative to a player’s draft position. Take Jaylen Brown, for example, the Celtics' 3rd overall pick in the 2016 NBA Draft:

| Name | Pick Overall | Year | PPG | RPG | APG | VORP | GamesPlayed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jaylen Brown | 3 | 2016 | 18.6 | 5.3 | 2.4 | 9.7 | 540 |

Now, compare Brown’s career statistics to the average statistics of the third overall pick from 2010 to 2023:

| PPG | RPG | APG | VORP | Games Played |
| --- | --- | --- | --- | --- |
| 17.4 | 6.6 | 3.3 | 12 | 420 |

Among players of the same draft position, Jaylen Brown is above average in points per game, but below average in rebounds per game, assists per game, and Value Over Replacement.

To be more specific, our metric of success looks at whether or not the player’s career statistics fall into either the top 30th percentile for PPG, APG, or VORPPG or the top 20th percentile for RPG. This means that if a player is a top-tier scorer or a top-tier rebounder (but not necessarily both), they are considered a good draft pick.

From this metric, we find that these 64 lottery picks from 2010 to 2023 are considered good-valued picks:

![Figure 2](/assets/journalism/nba-draft-2k-build/figure-02.png)

Notably missing from this list are international players like Luka Doncic and Victor Wembanyama. International players were excluded from the data in order to make predictions about draft picks easier as play and competition are more standardized in the NCAA. Moreover, shot distribution, used for playstyle analysis, is more readily available for lottery picks from the NCAA scene.

Of course, this metric is not a perfect measure of individual success. The aforementioned Jaylen Brown, an all-NBA player, is noticeably absent from this list, while Trey Burke and Nerlens Noel are on the list. However, the list captures many players we consider good-value draft picks such as Tyrese Haliburton, Jalen Williams, and Bam Adebayo.

On the flip side, busts are defined similarly. Busts are players whose career stats fall into the bottom 30th percentile of all the following stats: PPG, APG, VORPPG, and the bottom 40th percentile for RPG, or have played less than half the seasons since their draft year. This means that a player must be terrible at scoring, rebounding, and assisting or have been out of the league for years to be considered a bust.

In the 2010 to 2023 draft classes, we find that these 15 players are busts:

![Figure 3](/assets/journalism/nba-draft-2k-build/figure-03.png)

Players that are not considered “Successes” or “Busts” by the metric are considered “Average value,” indicating they play at the level that they are expected to play at considering their draft position.

## Defining Playstyle

Playstyle will be defined according to the players’ college profiles to determine which NBA prospects’ playstyles translate the best to the NBA.

Using NCAA shot selection data from [barttorvik.com](http://barttorvik.com), we can quantify playstyle by the distribution of shots across two-point and three-point shot makes and attempts, in addition to other statistics like rebounds, assists, steals, and blocks per game. The shot distribution is split into dunks, at-the-rim shots (layups), other two-point shots, and three-point shots. These categories are further split into whether the shot was assisted or not. Here is a sample shot distribution table of our favorite bald player in his last year in Colorado:

![Derrick White shot distribution (Source: https://barttorvik.com/playerstat.php?p=Derrick+White)](/assets/journalism/nba-draft-2k-build/figure-04.png)

Using this information we can graph the players on a two-point shot vs three-point shot scatter plot. Each point on the plot represents a player, and the color of each point represents their value calculated based on the success vs bust metric defined previously.

![Figure 5](/assets/journalism/nba-draft-2k-build/figure-05.png)

Separating busts from good value players, we get these two graphs.

![Figure 6](/assets/journalism/nba-draft-2k-build/figure-06.png)

![Figure 7](/assets/journalism/nba-draft-2k-build/figure-07.png)

Although the graph doesn’t explicitly show any distinct clusters of players based on two-point vs three-point shooting, big men tend to be lower down on the graph, making fewer three-point shots a game, while guards tend to be higher up the graph, making more three-point shots.

It is also difficult to distinguish between busts and good-valued players solely through these graphs. Anthony Davis and Ekpe Udoh had incredibly similar two-point vs three-point field goal makes per game in college but have had vastly different professional careers. Thus, we must take into account other statistics when trying to find clusters of players. The comprehensive set of metrics that are used are shown in the correlation matrix below. The correlation matrix helps demonstrate the idea of tradeoffs: notice how defensive and offensive rebounds are strongly negatively correlated with three-point shots.

![Figure 8](/assets/journalism/nba-draft-2k-build/figure-08.png)

## Higher Dimensional Data

We now have 24 statistics for each player. To represent higher dimensional data, we can use Principal Component Analysis (PCA) to reduce the complexity. This is necessary so that we can graph the data in two dimensions. Let’s graph the players on the first two dimensions of our PCA:

![Figure 9](/assets/journalism/nba-draft-2k-build/figure-09.png)

With this new graph, we can better differentiate players based on their playstyle. The positive right side of the graph corresponds to big men, while the left side has more guards and wings. Intuitively, players on opposite sides of the plot have opposite playstyles. For example, Trae Young, at the top left, and Dereck Lively II, at the bottom right have vastly contrasting college playstyle profiles.

| Player | Dereck Lively II | Trae Young |
| --- | --- | --- |
| Total Dunks | 54/55 | 0/0 |
| Total At the Rim Shots | 74/96 | 105/201 |
| Total Three Point Shots | 2/13 | 118/328 |
| Field Goals Per Game | 2.3/3.4 | 8.2/19.3 |
| Free Throws Per Game | 0.6/1.0 | 7.4/8.6 |
| Rebounds Per Game | 5.4 | 3.9 |
| Assists Per Game | 1.1 | 8.7 |
| Steals Per Game | 0.5 | 1.7 |
| Blocks Per Game | 2.4 | 0.3 |
| Turnovers Per Game | 0.7 | 5.2 |
| Points Per Game | 5.2 | 27.4 |

Player

Dereck Lively II

Trae Young

Total Dunks

54/55

0/0

Total At the Rim Shots

74/96

105/201

Total Three Point Shots

2/13

118/328

Field Goals Per Game

2.3/3.4

8.2/19.3

Free Throws Per Game

0.6/1.0

7.4/8.6

Rebounds Per Game

5.4

3.9

Assists Per Game

1.1

8.7

Steals Per Game

0.5

1.7

Blocks Per Game

2.4

0.3

Turnovers Per Game

0.7

5.2

Points Per Game

5.2

27.4

## Clustering

Clustering data is the action of grouping data points with similar values together. K-means clustering is a clustering algorithm that groups the data into *K* classes. Applying this idea to our data, we can group players with similar statistics. Essentially, this explicitly partitions our players into *K* different “builds”.

We can take two approaches to K-means: one that clusters on the original 24-dimensional data or one that groups according to our two PCA dimensions. Both have their pros and cons: our 24-dimensional groups cannot be portrayed graphically but are more accurate, and vice versa for the PCA groups.

Using *K* = 10 with the PCA groups, we get this graph:

![Figure 10](/assets/journalism/nba-draft-2k-build/figure-10.png)

With *K* = 5, we find these clusters:

![Figure 11](/assets/journalism/nba-draft-2k-build/figure-11.png)

And with *K* = 15, these groups emerge:

![Figure 12](/assets/journalism/nba-draft-2k-build/figure-12.png)

Interestingly, Trae Young always forms a separate group in the 15-group graph. We found that this phenomenon occurred for any K ≥ 12, displaying just how unique of a college player Trae Young was. Outside of Trae Young, Ben Simmons was the only other player to form his own group.

Looking at the average statistics for each group, we can find several patterns:

Group 8 is the lowest-scoring group at 8.4 PPG. Moreover, this group has the highest percentage of assisted buckets: 69.8% of makes around the rim and 62.6% of other two-point shots were assisted. This makes sense as the players in Group 8 are big men, whose value in the NBA comes from being able to catch lobs and play in the pick-and-roll.

Groups 7, 10, and 12 are also majority big men. Group 7 has the best shot blockers, at 2.92 per game, and are the most efficient finishers around the rim at 77.8%. Group 10 has the big men shooters, shooting the greatest volume of the three at 1.5 attempts per game with an accuracy of 28.6%. Group 12 has the best scorers out at 17.9 PPG, drawing the most free throws at 6.38 attempts per game.

The guards and passers are located in Groups 4, 5, and 14, averaging 4.0, 3.9, and 4.9 APG respectively. They all have roughly the same AST/TO ratio at 1.50 per game. Group 4 has the best three-point shooters: 5.29 attempts at 38.3%. Group 5 players steal the most at 1.51 a game, and Group 14 scores the most out of all groups (disregarding Trae Young’s Group 3) at 19.5 PPG. Perhaps, not so coincidentally, Group 14 has the highest proportion of one-and-dones, averaging only 32.6 games played in college.

The 24-dimensional data results in similar clusters of players. A large majority of players stay in a group with the same players. Those who switch tend to switch between groups of the same position. For example, Kris Dunn, previously in the group with Damian Lillard, Jimmer Ferdette, Cam Reddish, and Kemba Walker, moved to the group with Marcus Smart, Anthony Black, Bradley Beal, and Isaac Okoro. In our plot using the first two principal components as axes, we observe more overlaps between clusters.

![Figure 13](/assets/journalism/nba-draft-2k-build/figure-13.png)

Next, to quantify how well each playstyle does in the NBA, we can use our previous metric of success and bust and find the proportion of busts and successful players in each group. In the following graphic, points outlined by squares are successful players and circled points are busts. Notice how players on the outskirts of the plot tend to be either busts and successes, rather than just average players. Naturally, a reason for this could be that players with unique playstyles tend to have their games translate great into the NBA like Trae Young and Anthony Davis, or not so well like Kendall Marshall.

![Figure 14](/assets/journalism/nba-draft-2k-build/figure-14.png)

Groups with big men tend to have the highest proportion of players who do well in the NBA. Take Group 15, for example, where 70% of players in the group are successful players in the NBA. Over half of the players in Groups 12 and 13, both groups of mostly centers and forwards were deemed successful as well.

Other stand-out groups include Groups 2, 8, 10, and 14. Here, we see several All-Stars and All-NBA players like Shai Gilgeous-Alexander, Jayson Tatum, Kemba Walker, and D’Angelo Russell. These groups also happen to be in the same area of the graph, indicating that there may be a correlation between the playstyle corresponding to that part of the graph and success in the NBA. Jaylen Brown, if correctly classified as a success, would also appear in this area of the graph.

If we move slightly below that group, we see the cluster with the most busts. 23% of the players in Group 5 are considered busts. However, it cannot be understated that 23% of players in the same group are also considered successes, revealing that picking college players in this area may be riskier. After all, according to our graph, Johnny Davis just as well could have turned out like Paul George.

## The 2024 NBA Draft

Looking forward to the 2024 NBA Draft, we can find which college prospects fit into which builds. Using ESPN’s list of best available picks, we compiled a list of twenty NCAA draft prospects. Notable names include Zach Edey, Reed Sheppard, Rob Dillingham, Isaiah Collier, Bronny James, and fan favorite, Adem Bona.

![Figure 15](/assets/journalism/nba-draft-2k-build/figure-15.png)

By clustering with K-means on the two dimensions from PCA, we can find NBA comparisons for each player. At the bottom, we find Bronny James, Tristan Da Silva, and Kyshawn George in a group with Terrence Ross, Zach LaVine, and Devin Vassell. Zach Edey finds himself with Joel Embiid, Wendell Carter Jr, and Chet Holmgren, among others. Adem Bona lands in the cluster with Jaren Jackson Jr and Myles Turner.

Marking the plot with Busts as circles with crosses, Successes as rotated squares, and Prospects as triangles, we get the following graphic.

![Figure 16](/assets/journalism/nba-draft-2k-build/figure-16.png)

The safest choices for this draft are likely the big men located in Group 14. These include Kel’el Ware—the 20-year-old center from Indiana, Zach Edey—the two-time National Player of the Year, and Yves Missi—Baylor’s freshman center. This bunch of players excels in blocks at 2.64 a game and are highly efficient two-point shot takers, hitting an average of 62.4% of attempts.

Dalton Knecht and Isaiah Collier are likely to be great picks as well, with comparisons to the likes of Jayson Tatum, Anthony Edwards, Shai Gilgeous Alexander, and Jamal Murray in Group 3. Surprisingly, no specific statistic stands out with this group, though they do shoot free throws and score at an above-average clip. Looking at the names in the group, these players are likely to become players who are great at getting to the rim.

![Figure 17](/assets/journalism/nba-draft-2k-build/figure-17.png)

Using a larger *K* and our 24-dimensional data, we can get more accurate comparisons between prospects and NBA players. Using *K = 35* and filtering out groups without prospects, we get this plot of 15 clusters.

![Figure 18](/assets/journalism/nba-draft-2k-build/figure-18.png)

Adem Bona’s best game resembles Jakob Poeltl, Ed Davis, and Steven Adams, being low-scoring players with high shot-blocking capabilities. Stephon Castle and Cody Williams, numbers 6 and 10 on The Ringer’s Mock Draft, have playstyles closest to Florida State Scottie Barnes, being low-volume 3-point shooting wings that can do a little bit of everything else. Perhaps, the strangest of all groups is Group 23, where Kyle Filipowski, a 7-foot center, is categorized with Miles Bridges and Gordon Hayward. This group consists of low-volume dunkers who are above average at scoring with 15.8 points per game.

## Conclusion

Let’s return to the question that we proposed at the beginning of the article. Which build is the best?

Analysis of data shows that there is no clear build that is overwhelmingly better than the rest, though centers tend to be the safest picks. However, we must take this with a grain of salt, as our metric of success has a bias for centers. We find no definitive answer to this question as each position has so many play styles that work in the NBA, and each position has had players that are consistently MVP candidates. Among guards, there are defensive menaces like Marcus Smart and Kentavious Caldwell-Pope who are just as useful as offensive-minded players like Tyrese Haliburton and Tyler Herro. Across positions, Buddy Hields and Jakob Poeltls are both builds that are needed in the NBA.

If we were to single out a college playstyle that we believe would have the most success in the NBA, it would have to be Groups 5 and 7 in our last graphic. These two groups consist of the non-center players who take the most dunks and shots at the rim. They also take free throws at a high volume and accuracy, a skill that translates well into the NBA. Thus, as stated previously, we believe in this draft class, Dalton Knecht and Isaiah Collier will likely see success in their professional careers.

## Next Steps

As a byproduct of clustering, we were able to make NBA comparisons to each draft prospect. A way this could be improved could be to use readily accessible physical data from the NBA combine, such as standing verticals, wingspans, heights, and mobility tests as metrics used, along with the college statistics we used previously.

Moreover, NBA talent is now coming from across the globe more than ever before. To disregard international players and players that took different paths to the NBA like through the G League Ignite and the NBL takes out a massive pool of talent. In this draft, five out of the top ten picks in The Ringer’s Mock Draft have never played a game in the NCAA. Future analysis would have to include non-NCAA prospects and must take into account the relative competitiveness of the leagues to the NCAA.

Lastly, more rigorous approaches to defining success and clustering could be taken. A continuous metric of success could be used to quantify how good a player is, rather than our discrete categorization of success. Success could also encapsulate awards such as All-NBA and All-Defense. On the clustering side, other approaches could be used, like Gaussian Mixture Models or non-parametric techniques. These methods could algorithmically determine how many groups exist in our data and calculate the probabilities that players belong in certain groups, instead of a binary classification that we take.

[https://www.espn.com/nba/draft/bestavailable](https://www.espn.com/nba/draft/bestavailable)

[https://www.basketball-reference.com/draft/](https://www.basketball-reference.com/draft/)

[https://nbadraft.theringer.com/mock-draft](https://nbadraft.theringer.com/mock-draft)

[https://www.sports-reference.com/cbb/players/](https://www.sports-reference.com/cbb/players/)

[https://barttorvik.com/#](https://barttorvik.com/)

[https://github.com/azh05/BSADJ-Spring24](https://github.com/azh05/BSADJ-Spring24)
