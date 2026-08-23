## Intro

In recent years, a noticeable shift has swept through the ranks of professional golfers on the PGA Tour: a dramatic increase in swing speed. This evolution is a testament to the fusion of dynamic speed training, athleticism, skill, and technology. As players refine their training regimens and as equipment undergoes continuous innovation, distances off the tee have surged, reshaping the very fabric of the game. This newfound emphasis on distance has sparked discussion, debate, and a fascinating journey into the future of golf.

Most recently, the governing bodies of golf, the USGA and R&A, have made official their intent to “roll back” the golf ball, to combat the “Bomb and Gouge” style of golf being seen more commonly, where players hit the ball as far as they can with less regards to accuracy -- hit it as far as you can (bomb) and then muscle it out of the rough, if you must (gouge). The governing bodies argue that this style of golf makes obsolete the vast majority of courses when players can hit their tee shots past where the architects anticipated tee shots to land and had placed the penalty areas. Figureheads in the golfing community feel as though the prestige and tradition of golf’s most famous courses are lost when players bomb it past all the trouble.

This dramatic ruling entails prohibiting the professional use of the newest golf balls (that go farther) and forcing players to use limited-flight golf balls. The rollback goes into effect January 2028 for professional competitions and for everybody come January 2030. This ruling has been met with immense backlash, with a myriad of members in the golfing world speaking out against this significant change.

This brings up the question: statistically speaking, does the “Bomb and Gouge” style of golf even create an advantage? Yes, we’ve seen players gain distance over the past few years and we’ve also seen scores drop -- some recent PGA Tour events being won in the -25 to -30 range -- but these two changes aren’t necessarily correlated.

## Data Collection

Data is collected from the PGA Tour’s official website, which conveniently has a section where the PGA Tour posts all kinds of statistics dating back from the early 2000s. Data was downloaded as a .CSV file and imported into R.

## Strokes Gained

A key term that will be used in this article is “strokes gained,” often referred to as SG. See my [previous article](https://www.bruinsportsanalytics.com/post/scottie-scheffler) for an in-depth description of this metric (scroll down to the third section).

TL;DR, strokes gained (SG) is a rating that measures how good a golfer is at certain parts of the game (e.g., driving, approach, putting, overall).

## The Origins of “Bomb and Gouge” Golf

Pros are hitting the ball farther. The following graph shows the average driving distance on the PGA Tour dating back each year since 2000.

![Figure 1](/assets/journalism/bomb-and-gouge/figure-01.png)

As you can see, there has been a drastic increase of nearly 30 yards (a 10% increase) over the past 24 seasons.

Meanwhile, the percentage of fairways that these players have hit has decreased by about 10% in this same timeframe:

![Figure 2](/assets/journalism/bomb-and-gouge/figure-02.png)

So, from this data, we see that more players are leaning into the “Bomb and Gouge” tactic -- gaining distance off the tee while experiencing a sacrifice in accuracy.

The following graph compares driving distance and accuracy for the 2022-2023 PGA Tour season:

![Figure 3](/assets/journalism/bomb-and-gouge/figure-03.png)

Each dot represents a player. The x-axis represents the player’s average tee shot distance for the entire season, and the y-axis represents the percentage of fairways that the player hit. Using a t-test, we find distance to be a statistically significant predictor of accuracy. Specifically, we predict that every additional 10 yards of distance leads to a loss of 3.2% of fairways hit for a player.

So, by virtue of this relationship, those who hit the ball further have less control over the ball. This is the essence of “Bomb and Gouge” golf.

## The Modern Popularity of “Bomb and Gouge” Golf

Yes, we’ve seen an increase in the popularity of long and less accurate play off the tee. However, we still don’t quite know *how* popular it is -- relative to other playstyles. To show this, I graphed distance and accuracy for the 193 players in the 2022-2023 season for whom both measurements were available.

![Figure 4](/assets/journalism/bomb-and-gouge/figure-04.png)

Each dot represents a player. The lines through the graph represent the mean of each axis. The top-right quadrant, for instance, is the long and straight hitters. Now, let’s examine the distribution of how many players fall into each category.

![Figure 5](/assets/journalism/bomb-and-gouge/figure-05.png)

From this, you can see that there are two main categories that most players fall into -- being short, accurate players or being long, inaccurate players. The former makes up 38.3% of the Tour, and the latter (our bombers) makes up 34.7%. So, even though the “Bomb and Gouge” playstyle has become a lot more popular in recent years, it doesn’t quite dominate the Tour just yet.

## Does “Bomb and Gouge” Work?

### Examining Strokes Gained

Let’s see if this “Bomb and Gouge” playstyle even works. The following graph shows the relationship between each player’s distance off the tee and SG:OTT (strokes gained: off the tee) in the ‘23 season. This metric represents the advantage a player receives from play off the tee -- a SG:OTT of 0 is field average, and a positive score indicates an advantage due to good play off the tee.

It is important to note that SG is a directly applicable metric -- a SG value of 1 would mean that a player gains one stroke relative to the field.

![Figure 6](/assets/journalism/bomb-and-gouge/figure-06.png)

My regression model finds distance to be a statistically significant predictor of SG (with an impressive p-value of 2.2e-16). Specifically, an increase of 10 yards off of the tee indicates a predicted gain of 0.25 strokes off the tee -- regardless of accuracy.

On the flip side, the proportion of fairways hit seems to have a very limited effect on a player’s advantage off the tee.

![Figure 7](/assets/journalism/bomb-and-gouge/figure-07.png)

Although accuracy produces a statistically significant p-value as to SG:OTT (0.011) when we run this linear regression, its effect is not as significant as that of distance. Specifically, we predict that every additional 10% of fairways hit leads to a gain of 0.13 SG:OTT. So, although accuracy is significant in predicting SG:OTT, distance is *more* significant. Thus, a statistically backed, logical conclusion would be to place more importance on distance training than accuracy training.

### Looking At Scoring Averages

If strokes gained is a little too theoretical for you, let’s take a quick look at how distance and accuracy affect a player’s scoring average. To combat the influence of course difficulty, the PGA Tour keeps an adjusted scoring average, which takes the stroke average of the field into account.

![Figure 8](/assets/journalism/bomb-and-gouge/figure-08.png)

The correlation here is not super high (which I assume is a result of the metric’s unpredictability and susceptibility to the influence of approach, chipping, and putting); however, we still find distance to be a statistically significant predictor of scoring average (with a p-value of 3.37e-05). In fact, we predict that an increase in 10 yards off the tee is associated with a decrease of 0.28191 strokes per round. This is the same general pattern we found using SG.

Let’s now look at accuracy. Same deal as with SG.

![Figure 9](/assets/journalism/bomb-and-gouge/figure-09.png)

Just as we found before while using SG as our metric for scoring success, we again find the proportion of fairways hit to be a significant predictor of scoring success (p-value of 0.011). Again, we find accuracy to be a less significant predictor than distance. Thus, accuracy off the tee does not matter as much as distance.

## Examining a Counterargument (and why it’s wrong…)

A common critique of the “Bomb and Gouge” playstyle and the reason that players are hesitant to “swing for the fences” -- if you will -- is that being in the rough is a huge penalty. Admittedly, this is true; being in the rough does penalize you… a lot. When faced with a daunting hole, both sides of the fairway lined in thick rough, the *last* thing you want to do is swing hard.

The following graph summarizes every single approach shot hit on the PGA Tour this year from the fairway and rough. The green dots are hit from the fairway, and the red dots are hit from the rough. The x-axis of this graph measures the initial distance from the hole where the approach shot begins. The y-axis measures the resulting distance from the hole where the approach shot finishes. Dots farther to the right are shots hit from farther and dots higher are shots that end up farther from the hole.

![Figure 10](/assets/journalism/bomb-and-gouge/figure-10.png)

We can see that hitting approach shots from the fairway leads to much more accurate shots. For instance, shots hit from 50 yards in the fairway (point A) land an average of 10 feet closer than those out of the rough from the same distance (point B), and shots hit from 200 yards in the fairway (point C) end up an average of 30 feet closer than hit from the rough from the same distance (point D).

This difference is quite considerable. For instance, we can see that an approach shot from 100 yards in the rough (point E) is, on average, as precise as an approach shot from 170 yards in the fairway (point F). Thus, the change in lie accounts for a driving difference of 70 yards. This is a huge difference -- in the ‘23 season on Tour, 50% of each player’s average driving distances were within only 11 yards of each other.

So, this counterargument has a good mathematical basis. The rough is more penile than distance can realistically overcome … why swing hard?

## Why The Counterargument Is Wrong

Let’s say golfer A -- the “Bomb and Gouge” golfer -- ends up in the rough, and let’s say golfer B -- the short, accurate player ends up in the fairway. Golfer B will have a statistical advantage over golfer A on their upcoming approach shots. (That is, unless golfer A is a good 60 or 70 yards ahead -- which is an unrealistic, and thus irrelevant, situation on the PGA Tour.)

In reality, golfer A will only be 15 or 20 yards ahead of golfer B. With this difference of only 15 or 20 yards, we can confidently predict that golfer B, who is lying in the fairway, will score better on the hole.

*So how in the world can we say that “Bomb and Gouge” golf is advantageous?*

The answer to this question requires a statistical mindset. We have to view scoring in golf as a larger-scale problem. When people give this argument, they fail to consider that the situation where golfer A is in the rough and golfer B is in the fairway is not going to occur every single time.

Since golf is such a random game, the only real way to analyze it is to consider a strategy applied over thousands and thousands of trials -- not just a single one. Golfer A won’t be in the rough for every single trial. In fact, golfer A will likely hit the fairway a decent percentage of the time, and golfer B won’t be in the fairway every single time. Let’s get more technical.

In the ‘23 season on Tour, the top 20% of the most accurate players off the tee hit 66.6% of all fairways, and the least accurate 20% of players hit 52.3% of them. Using these independent events, we can construct the following table of combined probabilities:

![Figure 11](/assets/journalism/bomb-and-gouge/figure-11.png)

So, as we can from the chart, the situation that scares golfers from swinging fast (namely, golfer A misses the fairway and B hits it) only happens 31.7% of the time.

We can keep going. Let’s use these percentages to statistically prove that “Bomb and Gouge” golf is more advantageous than being conservative off the tee.

Our overall expectation for each player’s score on our model hole is as follows:

**Player A:** (.523) *(expected score from fairway) + (.477)* (expected score from rough)

**Player B:** (.665) *(expected score from fairway) + (.335)* (expected score from rough)

Keep in mind that player A will be closer to the hole than player B. *How much closer?* Let’s see. The following chart shows the average driving distance for two groups from the ‘23 season: the top 20% in driving distance and the bottom 20% in driving distance.

![Figure 12](/assets/journalism/bomb-and-gouge/figure-12.png)

Given that the average par 4 on Tour is around 430 yards, this would indicate the following:

![Figure 13](/assets/journalism/bomb-and-gouge/figure-13.png)

**Player A:** (.523) *(expected score from 117 yards, fairway) + (.477)* (expected score from 117 yards, rough)

**Player B:** (.665) *(expected score from 142 yards, fairway) + (.335)* (expected score from 142 yards, rough)

Using DECADE golf’s strokes gained table, we get the following:

**Player A:** (.523) *(2.845) + (.477)* (3.095)

**Player B:** (.665) *(2.91) + (.335)* (3.16)

Final expected scores on our model hole:

**Player A:** 2.9645

**Player B:** 2.99375

Thus, as shown and tested by our model hole, the general strategy of “Bomb and Gouge” golf -- or being in the top 20% of distance and bottom 20% of accuracy -- is a statistically superior approach to playing golf.

## Concluding Thoughts and Shortcomings

1. The counterargument I introduced in this article really only tackles the classic two-shot hole. In reality, holes vary in distance and this model isn’t a good representation of every type of hole that PGA Tour players will face.
2. Thus, par-3, par-5, and drivable par-4 scoring will be a bit more complicated.
3. The effect of distance differences will be very minimal on par-3 scoring. Although some players may be able to hit shorter clubs (which is a slight advantage), all players approach the green from the same distance.
4. On par-5 holes, the longer golfer will be able to reach some holes in 2 shots that the shorter player will not be able to reach. This will further benefit the “Bomb and Gouge” golfer.
5. Likewise, some short par-4 holes will be driveable by the “Bomb and Gouge” golfer. Being able to putt versus having a pitch is more advantageous than simply being closer to the hole. This will further benefit our “Bomb and Gouge” golfer.
6. In this article, I treated accuracy off the tee as a binary variable: you either hit the fairway or hit the rough. In this article, I did not discuss other non-fairway areas -- whether they be fairway bunkers, trees, hazards, or penalty areas. The cost of an increase in driving distance may be bigger misses -- misses that not only miss the fairway but miss it by wider margins. If these big misses lead to situations where a golfer must punch out sideways (e.g., to avoid a tree) and/or incur penalty strokes, our strategy will not be as beneficial. The key to “Bomb and Gouge” golf is to keep the ball in play. The extent to which these penalty areas cost a player is beyond the scope of this article.

### Citations

[pgatour.com](http://pgatour.com)

[pgatour.com/stats](http://pgatour.com/stats)

[Decade.golf](http://Decade.golf)

[golf.com](http://golf.com)

[frontofficesports.com](http://frontofficesports.com)
