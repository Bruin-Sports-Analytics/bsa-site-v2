### By: Joshua Sujo and Max Wimmer

## Introduction:

Scottie Scheffler is the best golfer on Earth right now. He currently ranks first in the Official World Golf Rankings and is a serious contender in every tournament he plays. Scheffler excelled tee-to-green this year, leading the PGA Tour’s 2022-2023 ball-striking (how good a player is at hitting the ball) leaderboards by historic margins. Yet, amidst his ball-striking brilliance, a conspicuous anomaly emerges—his below-average putting (see image).

This begs the question: Is Scottie Scheffler a waste of ball-striking talent? In other (less harsh) words, what could he have accomplished with a better putting season?

Before we answer these questions, let’s learn how we collected the data we’re going to use to analyze his performance and what the data really means.

## How We Collected Our Data:

The data was collected from the PGA Tour website which has Strokes Gained data for each PGA Tour member since 2004 and money earned and victories data dating back to 1987. To create this data set, all the Strokes Gained data from 2004-2023 was added to a Google spreadsheet and exported as a .csv file.

![Figure 1](/assets/journalism/scottie-scheffler/figure-01.png)

With increasing prize money over the years, an adjusted money scale was needed to compare earnings. To do this, the z-score of each player’s earnings was calculated in relation to every other player in that year.

For the 2022-2023 season, we excluded data from match play events and anything after the BMW Championship, as the tournaments following this event are formatted and scored differently than a usual PGA Tour event.

## What is Strokes Gained?

TL;DR, strokes gained (SG) is a rating that measures how good a golfer is at certain parts of the game (e.g., driving, approach, putting).

The PGA Tour adopted the Strokes Gained (SG) metric in 2004, effectively establishing the most accurate way to analyze a golfer’s performance.

The SG system compares each individual shot to an average baseline. Let’s use an 8-foot putt as an example. The PGA Tour average amount of strokes taken from 8 feet is 1.5. This essentially means that half of the players would make the putt -- taking 1 stroke -- and the other half would miss the putt and make the subsequent one -- 2 strokes. If you were to make this 8-foot putt, you would receive +0.5 strokes (1.5 average - 1 observed) gained on the field. Likewise, a miss would equate to -0.5 strokes (1.5 average - 2 observed).

![Source: golfwrx.com](/assets/journalism/scottie-scheffler/figure-02.png)

This logic is then extended to all types of shots around the golf course, not just putts. This is where SG gets a little more complicated.

Let’s look at another example. From 100 yards out in the fairway, let’s say the average amount of strokes taken is 3.7. Without SG, the way to analyze one’s performance would be to group the wedge shot and following putt(s) into one bucket by comparing the total number of strokes a golfer takes to the 3.7 baseline value. The issue with this is that there would be no statistical difference between the various ways one could take 3 strokes to get in the hole from 100 yards -- the golfer could hit an amazing wedge shot and a horrible putt, or a poor wedge shot and 2 good putts.

What makes the SG system so powerful is its ability to establish independence between shots. In this wedge example, the SG system knows the average amount of strokes taken from every length of putt. Then, the system can work backwards and use the wedge shot’s resulting proximity to the hole to calculate that wedge shot’s SG. The system works even further backwards, generalizing this method to every shot imaginable: off the tee, from the bunker 30 yards away, from the rough 165 yards away, etc. Thus, the system can rate “how good” any golf shot is simply given the start and end locations.

By assigning individual ratings to each shot, SG enables the calculation of an average SG for every aspect of a golfer's game over any chosen timeframe—be it a single round, a tournament, a year, or even a decade. This approach provides a nuanced and comprehensive understanding of a golfer's performance beyond traditional statistics.

## Scottie Scheffler’s Amazing Statistical Season:

Let’s apply our knowledge of the SG system, looking at Scottie Scheffler’s season.

Scheffeler’s ball-striking prowess this season ranks among the greatest of all time. Note: “ball-striking” is the same thing as “tee-to-green.” This year, his tee-to-green (T2G) strokes gained led the field by a historic margin. For reference, tee-to-green is a collection of all ball-striking categories (off the tee, approaching the green, around the greens). He averaged 2.74 T2G strokes gained per round for the entire year. This is absurd.

This means that on average for every 4-day tournament he played in, his ball-striking would save him 10.96 shots compared to the average golfer in the field… 11 whole strokes per tournament! In the 2023 Players Championship (which Scheffler won by 5 shots…), for instance, 11 shots was the difference between a 2nd-place finish and a tie for 54th. This is a difference of $2,655,750.

His putting, however, was not as impressive. He ranked 145th on the PGA Tour in SG: Putting.

In the following graphs, the x-axis represents strokes gained from tee-to-green and the y-axis represents strokes gained from putting. The left graph is T2G vs. putting for this most recent season, and the right graph is the same comparison for the last 20 years. Each dot represents a single player’s season. Scheffler’s 2022-2023 season is the red dot.

![Figure 3](/assets/journalism/scottie-scheffler/figure-03.png)

In both graphs, dots towards the right are better ball-striking seasons, and dots towards the top are better putting seasons.

In the left graph, notice how, on the x-axis of T2G, Scheffler leads the pack by a significant margin; however, on the y-axis of putting, he falls slightly below average.

In the right graph, Scheffler’s 2022-2023 ball-striking again proves dominant. Since the Strokes Gaines system was invented in 2004, only 3 seasons have provided better ball-striking than Scottie Scheffler this year. 3,845 seasons were recorded. All of those 3 seasons are Tiger Woods. And again, Scheffler’s putting ranks just below average.

## The Specific Question

Did Scottie Scheffler's 2022-2023 PGA Tour season fall short of expectations due to poor putting, or does his consistent presence on leaderboards act as proof of success?

Our two writers, Josh and Max, will give their answers to this question.

### Josh’s Answer: Scottie Scheffler had an impressive season this year full of top-10s and near-victories. He was not held back by his putting.

Although he objectively didn’t win that much, he excelled by consistently finishing near the top of the leaderboard. In a sport where a millimeter can differentiate a win from a loss and luck is inherently required to win, we can’t only look at his wins. We need a more holistic review.

![This graph shows Total Strokes Gained: tee-to-green vs. the amount of victories that player had that year.](/assets/journalism/scottie-scheffler/figure-04.png)

Scottie Scheffler’s win total was far below the expected value for someone with his tee-to-green stats. It might seem like this graph shows that Scheffler’s putting ruined his season. However, his money earned tells a different story. Money Earned tells a better-rounded story that takes every single tournament Scheffler played into consideration.

![This graph shows Total Strokes Gained: tee-to-green compared to money z-scores (money values adjusted using average PGA Tour earnings that year)](/assets/journalism/scottie-scheffler/figure-05.png)

As you can see from this graph, his money earned is barely below the expected value. This actually matches up with his SG: Putting being slightly below average. So how did he make so much money with only two wins?

A lot of high finishes.

In 24 tournaments, he had 2 wins, 10 top-3 finishes, and 17 top-10 finishes! That’s a top-3 rate of 42% and a top-10 rate of 70% in tournaments that can have more than 120 players!

![Figure 6](/assets/journalism/scottie-scheffler/figure-06.png)

This bar plot shows all players in the 2022-2023 season with at least one top-10 finish. Scottie Scheffler’s 17 top-10 finishes are 4 more than the next closest player.

Scottie Scheffler also had the third-highest top-10 total since 2004, behind Vijay Singh’s 9-win 2004 season and 4-win 2005 season, each with 17 top-10 finishes. It just so happens that those two seasons and Scottie Scheffler’s 2022-2023 season also were the top 3 seasons in Total SG: tee-to-green.

![Figure 7](/assets/journalism/scottie-scheffler/figure-07.png)

This graph shows the Total Strokes Gained: tee-to-green compared to the amount of top 10s the player had that year.

From this strong correlation between total SG: tee-to-green and Top-10s, we can see that good tee-to-green often translates to consistent high finishes. While Scottie Scheffler’s 2023 season won’t go down as one of the greatest seasons of all time because he only won 2 times, his amazing SG: tee-to-green was rewarded with consistently high finishes and historic earnings.

### Max’s Answer: Scheffler’s putting stunted him from having an impressive season of victories.

In golf, wins are king. Other factors such as money earned or top-10s can be interesting supplemental information; however, wins trump all. Every golf fan knows that Tiger has 82 wins, and only a very select few know how many top-5s or top-10s he has.

So, if we were to evaluate the success of Scheffler’s season, we must look at wins. He amassed a total of 2 wins this year. Let’s look at how his putting held him back from winning enough to consider his season impressive.

![Figure 8](/assets/journalism/scottie-scheffler/figure-08.png)

Each bar on this graph represents the average SG: tee-to-green for every season played on the PGA Tour since 2004. For instance, bar [#5](https://www.bruinsportsanalytics.com/blog/hashtags/5) is the average SG:T2G for all the 5-win seasons since 2004:

| Year | Player | Wins | SG: tee-to-green |
| --- | --- | --- | --- |
| 2013 | Tiger Woods | 5 | 2.04 |
| 2014 | Jordan Spieth | 5 | 1.63 |
| 2015 | Jason Day | 5 | 1.56 |
| 2016 | Justin Thomas | 5 | 1.46 |

Year

Player

Wins

SG: tee-to-green

2013

Tiger Woods

5

2.04

2014

Jordan Spieth

5

1.63

2015

Jason Day

5

1.56

2016

Justin Thomas

5

1.46

Bar [#2](https://www.bruinsportsanalytics.com/blog/hashtags/2) is highlighted in red because that is the category into which Scheffler’s season falls. His true SG: T2G data for this season is plotted far above his group. It is clear that Scheffler does not belong in this group. If you were to draw a line horizontally to the right of his dot, it would fall around 8 or 9 wins. This is a sign of a letdown.

![Figure 9](/assets/journalism/scottie-scheffler/figure-09.png)

Each dot on this graph represents a tournament that Scheffler played in this season. The dots are grouped horizontally by position finished. Dots to the left are better finishes (with the leftmost section of dots representing wins). The height of the dots represents how well Scheffler putted in that tournament, with a higher dot representing a better putting performance.

A linear model generated in R shows that, as Scheffler’s putting improves, the position of his finish also improves. Given that we have a trend of correlation between putting and finishing, let’s visualize how much his putting held him back this year using a prediction model.

![Figure 10](/assets/journalism/scottie-scheffler/figure-10.png)

This is our baseline graph for the prediction we are about to run. It is a bar chart of every tournament that Scheffler did NOT win this year (we don’t need to include his wins as they can’t be improved at all). The graph is sorted from left-to-right by finish placement, much like the last graph presented. The graphs towards the left are his best non-win finishes, and the bars towards the right are his worst finishes. The blue areas represent his score below par. The red sections are the difference between Scheffler’s score and the winning score. For instance, the 1st bar is the BMW Championship, where Scheffler shot -15, and Viktor Hovland won by shooting -17. Notice how the blue bar extends to -15 and the red section extends to -17.

### How I Executed My Predictions

Before I show the results of my first prediction, I want to explain a little bit about how I did it.

![Figure 11](/assets/journalism/scottie-scheffler/figure-11.png)

For each tournament, I noted what Scheffler shot (column E) and what the winner shot (column G). I then found Scheffler’s corresponding SG: Putting average for each day. I summed each day’s value to find his total SG: Putting for the entire tournament (column H). Then, I subtracted this total SG: Putting value out of his score for the tournament, and I was left with a predicted score (column I) as if he had putted at 0 SG. This prediction was repeated for other thresholds of putting performance (described later).

### Prediction 1  (Perfectly Average):

For my first prediction, let’s predict how many wins Scheffler would have amassed if he had an average of 0 SG: Putting every round he played. This prediction will show if Scheffler were a buck-average putter. This is a very attainable feat (mediocrity on the PGA Tour), so this prediction is not that outlandish.

![Figure 12](/assets/journalism/scottie-scheffler/figure-12.png)

This is the same graph as the last one, but now we have two new colors:

Yellow areas represent the increase in score (in the negative direction…) that Scheffler would experience in each tournament if he were to average 0 SG: Putting. This corresponds to column I in the spreadsheet.

Green areas replace yellow areas if they exceed the winner’s score. This means that the tournament is now a win for Scheffler!

With 0 SG: Putting, Scheffler now wins The Memorial and the Charles Schwab Challenge. In real life, he lost both tournaments by 1 stroke. Now, he wins by 8 and 4 shots, respectively. Wow.

His win tally now sits at 4.

### Prediction 2  (50th on Tour):

Let's take those two new wins tournaments away and examine a higher SG: Putting value. We will adjust his scores to reflect an average SG: Putting of +0.263, which was ranked the 50th-best SG: Putting value for the Tour this year. This is about the 25th percentile of putters. To do this, we simply add 4*0.263 to our adjusted scores from prediction 1. Again, this level of putting is very attainable for Scheffler; thus this prediction is still reasonable.

![Figure 13](/assets/journalism/scottie-scheffler/figure-13.png)

Scheffler now wins the BMW Championship and the Arnold Palmer Invitational @ Bay Hill. He wins both by a singular stroke. He had previously lost both by a margin of 2 shots.

His win tally now sits at 6.

We could end the predictions here, as we have a good balance between a realistic prediction and an incredible feat: a 6-win season. This feat has only been accomplished twice since 2004. Both occurrences were by Tiger Woods, in 2005 and 2009. For Scheffler to add his name to this exclusive list would be pretty special. More, with even *mediocre* putting, Scheffler could have etched his name in history. It is abundantly clear that his putting stunted him from a great season.

### Prediction 3 (Humor Me):

Humor me on this one. Let’s see what Scheffler’s season would have looked like if he ranked 2nd on Tour for SG: Putting. This would mean that he had an average of +1 SG: Putting. This high of a ranking is quite unrealistic for Scheffler, but the resulting prediction captures just how much Scheffler's putting held him back this year from having a once-in-a-generation season.

![Figure 14](/assets/journalism/scottie-scheffler/figure-14.png)

In this graph, we have one new feature to take note of. The orange sections are when Scheffler’s predicted score ties that of the winner (we simply haven’t seen this in the last two predictions due to pure change). This tie would indicate a playoff.

With an average SG: Putting of +1, Scheffler is predicted to win the PGA Championship by 1 shot, the Genesis Scottish Open by 1 shot, and the AT&T Byron Nelson by 1 shot.

He also is predicted to get into a playoff in 3 additional tournaments: the US Open, The Masters, and the American Express Golf Tournament.

So now we're looking at 9 wins and the 3 pending playoffs. Since we're doing this just for emphasis, let's say he wins all 3 playoffs. He is now looking at the following list of accomplishments for the 2022-2023 season:

- 3 Major Championship Wins
- PGA Championship
- US Open
- The Masters
- 9 Regular Season Wins
- WM Phoenix Open
- The Players' Championship
- The Memorial
- Charles Schwab Challenge
- BMW Championship
- Arnold Palmer Invitational
- Genesis Scottish Open
- AT&T Byron Nelson
- American Express Tournament

The last time a player has won 12 or more times in a single season was in 1946 with Ben Hogan. Even more, winning 3 majors in a single season is almost unheard of. This feat, the “Triple Crown,” has only been accomplished twice: Hogan in 1953 and Woods in 2000.

Yes, this prediction is unrealistic (but still possible). The magnitude of its results displays the sheer potential that Scheffler had this season. Even more, fields on the PGA Tour are vastly stronger than they were in 2000, no less in 1953. It was one thing for Ben Hogan to consistently beat 11-person fields, but for Scheffler to continuously beat goliaths like Jon Rahm and Rory McIlroy is absurd.

He possessed the chance to have a season that would highlight any and all athletic performances dating back countless decades. Bluntly, to come out with only 2 wins is a total letdown -- with his putter to blame.

## Conclusion:

While Scottie Scheffler’s 2022-2023 season won’t pop up in the history books because he only recorded 2 victories, the PGA Tour Strokes Gained system highlights how good his season was statistically. His tee-to-green play was the fourth-best performance since 2004 and led him to plenty of top-10 finishes and millions of dollars. Unfortunately, his below-average putting prevented him from having a memorable season. Whether or not his 2022-2023 season was a waste of ball-striking potential is up to you.

### Bibliography

[https://www.pgatour.com/stats](https://www.pgatour.com/stats)

[https://www.google.com/url?q=https://www.google.com/url?sa%3Di%26url%3Dhttps%253A%252F%252Fgolf.com%252Fnews%252Fbizarre-four-putt-masters-scottie-scheffler-laughing%252F%26psig%3DAOvVaw3sdi1Re-QmjWdeM8UdpgCU%26ust%3D1701148862483000%26source%3Dimages%26cd%3Dvfe%26opi%3D89978449%26ved%3D0CBIQjRxqFwoTCKDxur-344IDFQAAAAAdAAAAABAW&sa=D&source=docs&ust=1702864744936143&usg=AOvVaw2wmxQY9MBqs9ZBLnOL_a2A](https://www.google.com/url?q=https://www.google.com/url?sa%3Di%26url%3Dhttps%253A%252F%252Fgolf.com%252Fnews%252Fbizarre-four-putt-masters-scottie-scheffler-laughing%252F%26psig%3DAOvVaw3sdi1Re-QmjWdeM8UdpgCU%26ust%3D1701148862483000%26source%3Dimages%26cd%3Dvfe%26opi%3D89978449%26ved%3D0CBIQjRxqFwoTCKDxur-344IDFQAAAAAdAAAAABAW&sa=D&source=docs&ust=1702864744936143&usg=AOvVaw2wmxQY9MBqs9ZBLnOL_a2A)

[https://www.google.com/url?q=https://www.google.com/url?sa%3Di%26url%3Dhttps%253A%252F%252Fwww.foxnews.com%252Fsports%252Fscottie-scheffler-accidentally-whacks-himself-face-driver%26psig%3DAOvVaw3p1-q-2nvJaSSijnG_ufYS%26ust%3D1701148764068000%26source%3Dimages%26cd%3Dvfe%26opi%3D89978449%26ved%3D0CBIQjRxqFwoTCLi_2JC344IDFQAAAAAdAAAAABAJ&sa=D&source=docs&ust=1702864744934317&usg=AOvVaw1mn_JPURInoj4ned7Qtlxu](https://www.google.com/url?q=https://www.google.com/url?sa%3Di%26url%3Dhttps%253A%252F%252Fwww.foxnews.com%252Fsports%252Fscottie-scheffler-accidentally-whacks-himself-face-driver%26psig%3DAOvVaw3p1-q-2nvJaSSijnG_ufYS%26ust%3D1701148764068000%26source%3Dimages%26cd%3Dvfe%26opi%3D89978449%26ved%3D0CBIQjRxqFwoTCLi_2JC344IDFQAAAAAdAAAAABAJ&sa=D&source=docs&ust=1702864744934317&usg=AOvVaw1mn_JPURInoj4ned7Qtlxu)

[https://www.google.com/url?q=https://www.google.com/url?sa%3Di%26url%3Dhttps%253A%252F%252Fwww.golfwrx.com%252F294423%252Ftaking-the-mystery-out-of-strokes-gained-putting%252F%26psig%3DAOvVaw0k8qS08fZN7leYNFv3UvS0%26ust%3D1701149152487000%26source%3Dimages%26cd%3Dvfe%26opi%3D89978449%26ved%3D0CBIQjRxqFwoTCMjH4sm444IDFQAAAAAdAAAAABAI&sa=D&source=docs&ust=1702864744939907&usg=AOvVaw0htxKoiTAdqc1ipFzziz7e](https://www.google.com/url?q=https://www.google.com/url?sa%3Di%26url%3Dhttps%253A%252F%252Fwww.golfwrx.com%252F294423%252Ftaking-the-mystery-out-of-strokes-gained-putting%252F%26psig%3DAOvVaw0k8qS08fZN7leYNFv3UvS0%26ust%3D1701149152487000%26source%3Dimages%26cd%3Dvfe%26opi%3D89978449%26ved%3D0CBIQjRxqFwoTCMjH4sm444IDFQAAAAAdAAAAABAI&sa=D&source=docs&ust=1702864744939907&usg=AOvVaw0htxKoiTAdqc1ipFzziz7e)

[https://fwtx.com/downloads/32736/download/Hogan%20pic.png?cb=a219dbce42604f77bea2e9485a6b0792](https://fwtx.com/downloads/32736/download/Hogan%20pic.png?cb=a219dbce42604f77bea2e9485a6b0792)

[https://newsinteractive.post-gazette.com/usopen2016/wp-content/uploads/sites/10/2016/06/OAKMONT-Scottie-Scheffler.jpg](https://newsinteractive.post-gazette.com/usopen2016/wp-content/uploads/sites/10/2016/06/OAKMONT-Scottie-Scheffler.jpg)
