### By: Kathir Ilango

Much like what has happened to basketball during Stephen Curry's career, the offensive philosophy of football has changed over the last few years. The traditional usage of wide receivers that has been around for decades is slowly fading away as football enters a new era of play calling and receivers in general are becoming far more versatile. Given all of this, I decided to look into how the tiers of receivers in the modern NFL can be better classified and how different they are from the traditional roles we have known for years. With the help of some analysis I did to classify advanced receiver data, I was able to find some pretty interesting things.

## The Basics

Traditionally, there are three main receivers in an offense: the X, the Y, and the Z. The X receiver is the number one guy; he typically lines up on the weak side of the formation and right on the line of scrimmage. He's expected to be a physical player that's great with his hands and savvy enough to get off the ball and his man when jammed at the line of scrimmage. The Y receiver is usually a tight end; he's a blocker with pass-catching abilities and typically lines up closest to an offensive tackle. And lastly, the Z receiver is known as the 'flanker' or the number two guy. He typically lines up on the strong side of the formation about a yard off the ball and has the ability to motion in and out of the formation. He's usually relatively fast and can utilize that speed without worrying about getting jammed at the line of scrimmage to generate separation from his man. These are the labels by which plays have largely been called in the NFL for decades, but the actual roles of receivers within offenses have become far more convoluted than a simple X, Y, and Z classification.

Take the two teams that participated in this year's Super Bowl as examples. The Kansas City Chiefs' number one receiver is actually their *tight end* Travis Kelce; play caller Andy Reid simply puts him all over the field as if he's a top wideout. It's actually more accurate to say that the Chiefs have two number one receivers (Kelce and Tyreek Hill) rather than a simple X, Y, and Z. Their opponent, on the other hand, has zero X receivers. The 49ers' receiving corps is made up of three number two guys, a freakishly athletic tight end, and a fullback that had more yards per target than any of the starting receivers in 2019. And yet, these two rather unconventional offenses were in the top three in net yards gained per pass attempt last season before ultimately squaring off in a Super Bowl. In many ways, that game was indicative of the current trajectory of football.

Reid, Niners play caller Kyle Shanahan, and many of their peers today subscribe to the following mindset: on any given play you have five eligible receivers; which five you roll with and how you choose to deploy them is entirely up to your creativity. There aren't really any other rules to this chess game. Tight ends can play like wide receivers, wide receivers can play like running backs, and fullbacks can play like tight ends. The NFL has changed, but by how much?

## Methodology

I started with advanced data from the NFL's [NextGenStats](https://nextgenstats.nfl.com/stats/receiving) database of every wide receiver and tight end in the NFL over the last four years (2016-2019) who averaged at least 2.5 targets per week. The categories of data I took for each receiver along with their name, the year, their team, and their position were:

![Figure 1](/assets/journalism/modernreceivers/figure-01.png)

The goal was to create a k-means clustering of this data to see what patterns I could find in the groups that the algorithm split the receivers into. The way a K-means algorithm works is by initially choosing the desired number of centroids (mean values of clusters) and then constantly adjusting these centroids as it takes in more data points by using the Euclidean distance between points to place them into clusters. But with high-dimensional data, the calculation of this distance becomes more and more meaningless. To reduce the data to a few meaningful variables, I used Principal Component Analysis, a method that represents a given dataset with orthogonal vectors that explain the original dataset's variance. A subset of these orthogonal vectors (components) can then be used to represent a given percentage of the variance in the data. To determine the exact number of components that would be used in the k-means algorithm, I plotted the cumulative sum of the explained variance as the number of components increases:

![Figure 2](/assets/journalism/modernreceivers/figure-02.png)

Three components explained 73.6% of the variance in the data. After that, the increase in explained variance was not significant enough to warrant the inclusion of another component in the model, so I decided to proceed with three principal components for this data set.

Once that was complete, an optimal number of clusters for the k-means algorithm needed to be determined as well. To do this, I simply ran the algorithm 20 times with a different number of clusters each time and stored the within-cluster sum of squares (WCSS) for each run. WCSS is the sum of the squared deviations from each data point and its cluster centroid, which essentially makes it a metric for how distinctive each cluster is (the smaller the WCSS, the more compact the clusters are). Plotting these values revealed that the drop in WCSS began to level off at around three clusters, so that's how many clusters I decided to use in the algorithm. With three principal components and three desired clusters, the k-means clustering produced the following classifications of NFL receivers over the last four years:

![Figure 3](/assets/journalism/modernreceivers/figure-03.png)

The interesting part had finally arrived. The receivers had been split up into three groups as shown above, but what exactly are the groups? After spending some time looking through the names and stats in the different groups, I arrived at some loose conclusions about what kind of receivers were in each group.

## Cluster 1: Tight Ends and YAC Monsters (211 players)

![Figure 4](/assets/journalism/modernreceivers/figure-04.png)

In general, these receivers do not have the highest share of the team's air yards and they work closer to the line of scrimmage (lower Avg. TAY), but they create more separation per play and have more yards after the catch (YAC) per reception than any other cluster. This assessment has 'Tight End' written all over it and surely enough, most of the tight ends in the data set fell into this cluster. But these statistics also accurately capture faster wide receivers that are number two or number three guys within their respective offenses and who are great after the catch, so many notable YAC specialists over the years fell into this group as well.

![Figure 5](/assets/journalism/modernreceivers/figure-05.png)

## Cluster 2: Unproductive Speedsters and Old/Injured Stars (156 players)

This cluster is characterized by players who have more targeted air yards but a lower catch percentage and less YAC per reception than any other cluster. This was easily the most interesting cluster of the three because for the most part, it seemed like the worst receivers in the dataset appeared here, with some notable names also appearing. As far as the bulk of the receivers in this group goes, their commonality seems to be that they are generally very fast players that have no other dimension to their games than their speed (in that particular year).

![Figure 6](/assets/journalism/modernreceivers/figure-06.png)

But this does not explain why certain popular receivers that have been known to be very productive throughout their careers fell into this group. Looking closer at these names, almost all of them appear to have something in common. I've listed a few examples below:

![Figure 7](/assets/journalism/modernreceivers/figure-07.png)

Almost every surprising name in this cluster was in the final year(s) of his career, injured, or both (almost every player in the above table was once a Pro Bowler). As a result, they got put into the same group as the generally unproductive receivers because their overall value to their passing offense is roughly the same.

## Cluster 3: The Best Receivers in Football, True Number Ones (139 players)

![Figure 8](/assets/journalism/modernreceivers/figure-08.png)

It looks like the modern NFL does still have the concept of the X receiver in terms of number one guys, even if the way these players line up is not always how the traditional X lines up. These players have the highest share of their teams' air yards and they lead the league in catches, targets, total yards, and touchdowns. They are some of the most recognizable names in football.

![Figure 9](/assets/journalism/modernreceivers/figure-09.png)

## Additional Thoughts

The clusters do a decent job of capturing the development of receivers over the four years of data. For example, Tyler Lockett was a Cluster 1 receiver in 2016 and 2017 but transitioned into a Cluster 3 receiver in 2018 and 2019 as he became the Seahawks' premier target. Moreover, the clusters also give a pretty accurate depiction of the offensive situations of the 32 teams in the NFL. Going back to our Super Bowl teams, we can see that Kansas City has two Cluster 3 receivers in Kelce and Hill, backing up what the world knows about their high-octane passing offense. San Francisco, however, has zero Cluster 3 receivers, correctly leading us to believe that they are a team that relies on scheme to move the ball through the air rather than top-tier receivers.

The clustering was by no means perfect. There are still certain head-scratchers in each cluster, which can largely be attributed to the random nature of the NFL. But it is also important to note that some of the strange output can be a result of cross-season comparison of these receivers. Using four seasons worth of receiver data and treating it all the exact same way is not entirely correct given the way sports tend to change over time. All in all, it's almost impossible to entirely classify a football player's value or production based on numbers alone, but this project did a solid job in helping illuminate the status of receivers today. Circling back to the discussion of traditional receiver roles, it looks like the X receiver is very much alive and well as the alpha of the receiving group, but with the way that pre-snap motion and shifts have started to take over the league (for various reasons that can be discussed in another article), these number one guys tend to line up all over the field rather than just the typical spot for X receivers on the weak side of the formation. The traditional Y and Z roles, however, seem to be merging into one and the evolution of tight ends is likely the culprit for this. While most of the tight ends are Cluster 1 players, many tight ends have been making their ways into Cluster 3 over the years. The standard for tight end play is increasing every year in the NFL as they are becoming extremely athletic, dynamic players that play callers like to use as wildcards within their offenses. As a result, the production of tight ends is becoming extremely similar to number two and even number one wide receivers.

I suspect that it won't be long before Cluster 1 and Cluster 3 start to overlap as well. The Cluster 1 guys are generally better after the catch and the Cluster 3 guys are generally more physical players with better hands, but the Cluster 3 players are also tremendous YAC receivers and the Cluster 1 players are becoming number one options for many teams. The line between those two will only become more blurry as the years go on. It's not official, but football seems to be entering an era where three players that can do a little bit of everything are becoming more valuable than a group consisting of a pure X, Y, and Z. 'Positionless basketball' is one of the hot phrases in sports today, but it may not be long before we have positionless offensive football as well.

*Sources: nextgenstats.nfl.com, pro-football-reference.com*

*View Code:* [*Github Repository*](https://github.com/Kathirilango/Sports-Analytics/tree/master/receiver_cluster)
