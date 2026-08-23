### By: Krish Jain and Shubhan Yenuganti

## Introduction

Over the years, the NBA has grown from a measly peach basket into a worldwide sensation, with millions of people around the globe tuning in daily to watch NBA players streak back and forth across the court, raining threes on each other in high-scoring affairs. However, the NBA used to consist of slow-paced possessions, grueling and physical post-specialists, and heavy isolation, with the three-point shot a rarity. In the modern NBA, players have broken out of their traditional roles for their size and build. We have 7-footers who can shoot from behind the arc and guards capable of scoring 70 points in a game. As it appears that the NBA is becoming increasingly positionless, we want to analyze how the positions of the NBA have changed over time. For this analysis, we opted to research the last thirty years of the NBA, as it included many years before the emergence of the three-point shooting era, making it easier to depict changes for each position.

How exactly have the roles of the five positions (Point Guard, Shooting Guard, Small Forward, Power Forward, Center) evolved throughout the transitions from the Late 1990s Jordan Era to the 2000s Lakers Celtics Era and so on until our current era of the 2020s? And how do we expect the NBA positions to change in the upcoming future?

## Approach

To answer this question, we first needed to gather data on each position over the past thirty years. Using StatsMuse and Python web-scraping, we gathered league averages on each position’s points, assists, and rebounds per game, along with shooting percentage, three-point percentage, and usage rates from 1993 to 2023. We used [NBA.com](http://NBA.com) to accumulate data on the shot attempts by zones (paint, mid-range, three-pointer) of guards, forwards, and centers. To be able to properly analyze how positions have evolved, we also had to gather the league pace for each season, which is the number of possessions per game, which could account for increases in each of the statistics that we collected.

## Analysis

We expected that each of the statistics we gathered over time would mirror how the pace has changed each season. For example, if there were an increase in points per game over a few years, we would expect to see a corresponding pace increase over those years. However, we observed that some statistical categories surprisingly deviated from how the pace changed across the thirty years for each position.

## Point Guards

The modern NBA point guard has shifted from a pass-first facilitator into an all-around scorer, with the likes of Stephen Curry, Damian Lillard, and DeAaron Fox, and more dominating as score-first guards. Our data has shown a steady increase in the scoring output of point guards until the stretch of years 2013 to 2023, where there has been an exceptionally rapid growth in their scoring despite the pace remaining stagnant. This can be attributed to the emergence of score-first guards such as Stephen Curry, James Harden, and Russell Westbrook during the mid-2010s, and now other younger guards such as Shai Gilgeous Alexander and Luka Doncic who are continuing to revolutionize the score-first role of point guards.

Thirty years ago, most point guards focused on passing over scoring. All-time guards such as John Stockton, Steve Nash, and Jason Kidd fit this role. However, throughout the past thirty years, there has been a consistent decrease in point guard’s assists per game, dropping their total from 4.9 to 4.3 assists per game. Although it is a slight decrease, it is definitely a noticeable one. Paired with the significant increase in scoring output, we can conclude that the modern point guard has shifted from a pass-first to a score-first role.

Correspondingly, the usage rate of the point guard increased from 18.8% to 21.6% over the past thirty years, a huge increase relative to the change in usage rate of the other positions. This change is apparent when we consider that most recent championship teams have had an all-star caliber point guard— Jamal Murray, Stephen Curry, Jrue Holiday, Kyle Lowry, etc. In contrast, teams of previous eras, such as the Lebron-Heat and the Jordan-Bulls, lacked talent at the point guard spot yet were highly successful.

![Figure 1](/assets/journalism/nba-positional-evolution/figure-01.png)

## Shooting Guards

Shooting guards in the 1990s and 2000s were noticeably the most significant position, with superstars such as Michael Jordan, Kobe Bryant, and Allen Iverson boasting high usage rates as primary ball handlers and scorers. However, the role of the shooting guard has diminished, with points per game, usage rate, and shot attempts decreasing at a consistent rate, becoming nearly identical to the corresponding stats for point guards. We already know that point guards have become more score-first. As a result, the defined roles of point guards and shooting guards overlap significantly more, and thus, many players in the NBA can play both positions effectively.

A reason behind the blend of the point guard and shooting guard positions is the rise in three-point shooting. It has become essential for guards to be able to shoot the ball. Thirty years ago, shooting guards shot 1.7 three-point attempts per game on average. Now, they shoot 4.1 threes per game. This huge increase clearly reflects the increase in scoring in the NBA as a whole. Similarly, point guards took an even more giant leap in three-point shooting, going from 1.3 three-point attempts per game to 4.0 three-point attempts per game. The three-point attempt numbers of the two positions being almost identical further indicates the overlap of the two positions.

![Figure 2](/assets/journalism/nba-positional-evolution/figure-02.png)

## Small Forward

The small forward position has stayed relatively consistent over the past thirty years, with averages for points, assists, and rebounds per game staying relatively the same, with the exception of three-point shooting. Small forwards' three-point attempts have increased significantly over the past thirty years, going from just one attempt in 1993 to 3.7 in 2023. In particular, the stretch from 2006 to 2023 was especially significant, with nearly an increase of two three-point attempts per game. This makes sense, as the league's three-point shooting has greatly increased across these two decades. Additionally, many shooting guards, such as Paul George, Demar Derozan, and Jaylen Brown, transitioned to small forward in recent years. Consequently, small forwards' usage rates have reduced over the years, as more small forwards are becoming 3-D specialists, more focused on stretching the floor than handling the ball and being a primary scorer.

![Figure 3](/assets/journalism/nba-positional-evolution/figure-03.png)

## Power Forward

In the league today, the definition of a power forward has pretty much disappeared, with there being a surplus of power forwards with many different playstyles, varying from freak athletes who dominate the paint like Giannis Antetokounmpo, to block machines who can score inside and out like Jaren Jackson Jr., and elite triple threat scorers like Jayson Tatum. However, the overarching trend of power forwards has shifted from post-dominant, mid-range volume shooters into stretch fours who can take outside shots. This is supported by the change in both small and power forward shot frequencies, with the mid-range shot attempts rapidly decreasing over the years.

![Figure 4](/assets/journalism/nba-positional-evolution/figure-04.png)

![Figure 5](/assets/journalism/nba-positional-evolution/figure-05.png)

This shift has caused power forwards' presence in the paint to diminish, with their rebound numbers dropping from 6.1 to 4.9 rebounds per game. Consequently, like small forwards, power forwards have seen a surge in three-point attempts and efficiency, jumping from 27.6% to 35.1%, which is only a couple of percentiles lower than the three-point percentage of guards. Power forwards are beginning to overlap with small forwards as they continue to grow into three-level scorers that can stretch the floor but are also becoming less physically dominant in the paint.

## Center

The center has significantly improved in almost every aspect of the game over the last thirty years. Dominant centers of the past used to use their size to score inside and protect the paint. However, it is apparent that centers have become more skilled and can now shoot threes, bring the ball up the court, and set up shots for teammates. Many centers are more capable of scoring at all three levels, reflected in an increase from 8.4 to 9.9 points per game. Centers are also growing more efficient as their shooting percentage skyrocketed from an inefficient 49.6% to 57.4%. Furthermore, centers have become more adept at passing and handling the ball, with assist numbers jumping from 1.1 to 1.6 assists per game. This is apparent with centers such as Nikola Jokic, Domantas Sabonis, and Alperen Sengun serving as primary ball handlers in their respective offensives. As more skilled centers are introduced to the NBA, there will be a higher demand for skill in current centers. We can see how centers like Victor Wembanyama and Chet Holmgren, who are already playing at a high level as rookies, can redefine the center's role to one that demands scoring outside the paint and some degree of playmaking. The center position is one with significant potential to grow. There is a striking increase in skill in future NBA 7-footers, which can drastically change the playstyle of the NBA.

![Figure 6](/assets/journalism/nba-positional-evolution/figure-06.png)

## Conclusion

The five positions in basketball are subject to significant changes as the NBA evolves. Using data collected over the past thirty years, we determined the change in the role of each position by analyzing various stats per position over the years. Point guards have become score-first guards and are essential to every NBA team for success. Their role blends with the shooting guard's role, further reinforcing the idea of positionless basketball. Small forwards, surprisingly, have stayed relatively consistent over the last thirty years. Power forwards space the floor and shoot from the outside far more than before. Centers have experienced a significant increase in skill, improving their shooting and playmaking, and have the potential to greatly influence the league in the future. Positionless basketball has taken a huge leap in the league today, and the concept will likely become more prevalent in the years to come. We can continue to use this form of statistical analysis to further track the evolution of NBA positions as the game evolves and transforms. There are also a multitude of other NBA statistics that can reveal even more about positional growth that we haven’t even touched yet. With additional data, we could potentially use these statistics to predict the future evolution of NBA positions.

[statmuse.com/nba](http://statmuse.com/nba)

[nba.com/stats/players/advanced](http://nba.com/stats/players/advanced)
