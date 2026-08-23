## Introduction

Max Kellerman, a famous sports commentator and co-host of ESPN’s First Take show, in 2016 famously made his Tom Brady cliff prediction. Specifically this is what Kellerman said: “Tom Brady’s just about done. It could be his next game. It could be a year from now. But he is going to fall off a cliff. Tom Brady is going to be a bum in short order.” Kellerman made his prediction right before the 2016 season, during which Tom Brady was suspended for the first 4 games due to the Deflategate scandal.

Tom Brady has just won his 3rd Super Bowl since that prediction. So obviously, Tom Brady hasn’t taken a deep dive off the cliff from elite quarterback play by any stretch of the imagination. However, it is reasonable to wonder if his play has declined at all in the past couple of years due to the increase in his age. We have seen countless legends in all sports eventually succumb to Father Time: Kobe Bryant and Derek Jeter are some notable examples. Both players had a sudden decline in performance late in their careers. For Bryant, in his last season where he played 66 out of 82 games, he had 17.6 point per game and 35.6% shooting when his career averages are 25 PPG and 44.7%. In Jeter’s last season--he played 145 out of 162 games--he had a batting average of 0.256 while his career BA is 0.310. Interestingly, for both Bryant and Jeter, much of their decline can be attributed to devastating injuries suffered late in their careers: an Achilles tear for Bryant and a broken ankle for Jeter.

While Tom Brady hasn’t suffered any big injuries in the last few years (he suffered an ACL and MCL tear in his knee in 2008), it remains true that time eventually takes a toll and no player can play indefinitely without any decrease in performance. In that sense, Kellerman’s cliff prediction doesn’t come out of nowhere; in the NFL, there are very few quarterbacks that have any success past the age of 40 and Tom Brady was 39 at the time of Kellerman’s prediction. So has Brady’s production declined at all since then?

In this article, we will take a deep dive into Tom Brady’s performance since Kellerman’s prediction to look for any distinct decline. We will look into some common performance metrics such as completion percentage and passing yards per game. A key thing to keep in mind is that Tom Brady’s free agency move to Tampa Bay last season should have an effect on his statistics, as the Buccaneers have a better group of receivers than the New England Patriots did and the style of play under Bruce Arians (coach of the Buccaneers) is decidedly different when compared to that of Bill Belichick (coach of the Patriots).

Lastly, we will take a look at other legendary NFL quarterbacks and their play late in their career to see if there is any trend between them and Tom Brady, potentially giving insight regarding when Tom Brady will fall victim to his increasing age.

Throughout the article, we will be using a 2 sample test for proportions on completion percentages to statistically analyze the existence of a cliff for NFL quarterbacks. Specifically, our two samples will be the last 2 years of completion percentages with attempts as the number of trials and completions as number of successes. A two sample test will compare the change between 2 years of data and evaluate if there has been a statistically significant change between the years.

## Tom Brady After the Cliff Prediction

To evaluate whether or not Tom Brady showed any signs of decline after the cliff prediction, we will compare his completion percentages and passing yards per game to his career averages.

![Figure 1](/assets/journalism/goat_vs_cliff/figure-01.png)

![Figure 2](/assets/journalism/goat_vs_cliff/figure-02.png)

We can see that Tom’s performance in the year directly after the prediction is much better than his career averages. In that year he had a completion percentage of 67.4% and yards per game of 296.2. His career averages for both categories are 64% and 264.9 yards per game, respectively. While his statistics in 2016 were well above his career average, in the couple of years after, his performance dipped, but still above his career average.

However, in 2019, we see a big decrease in both of our main performance metrics. In 2019 where Tom Brady was 42 years old, we saw a completion percentage of 60.8% and passing yards per game of 253.6 yards per game which are extremely poor compared to his career average. So imagine if we were analyzing Tom Brady’s career up to that season and ignore his uptick in performance in 2020-2021. It would seem pretty obvious in a statistical point of view that Tom Brady is on the decline.

We can see a big uptick in both completion percentage and passing yards per game after Brady’s free agency move to Tampa Bay. In 2020, he had a completion percentage of 65.7% and 289.6 passing yards per game, which is a 4.9% and 36 yards per game increase, respectively. It seems based on these statistics alone that Brady bounced back from a couple of off-years and is back playing elite football.

We perform a 2 sample test for proportions on the completion percentages in 2019 and 2020 to see if there is a statistically significant increase in completion percentage. We use a significance level of 0.05. After performing the statistical test, we get a z-value of -1.773 which leads to a p value of 0.03836, indicating a statistically significant result. This result shows that Tom Brady had a definite improvement between 2019 and 2020 instead of a dive in performance that “falling off the cliff” would suggest.

## Adjusting for Better Supporting Cast

However, we must consider the free agency move that Brady made, which leads to an important question: is the reason for his success the abundance of talented wide receivers and tight ends on the Buccaneers?

When you compare the rosters of the New England Patriots while Tom Brady was quarterback to the Tampa Bay Buccaneers, there is a very apparent disparity in talent. On Tom Brady’s last season on the Patriots, his top 3 receivers were Julian Edleman, James White, and Phillip Dorsett; these three were not Pro Bowl players. For Brady’s season with the Buccaneers, his top 3 receivers were Mike Evans, Chris Godwin, and Rob Gronkowski, all of whom have made the Pro Bowl and were selected as All-Pro in the past. In addition, Antonio Brown joined the team midway through the season, and he too is a former Pro Bowler and All-Pro player.

Needless to say, Tom Brady was throwing passes to players on a different level than his previous seasons. This brings up whether Tom has simply relied on his excellent teammates to make himself look better than he is actually playing. We will analyze Brady’s Expected Completion Percentage and Completion Percentage Above Expectation to attempt to remove any compounding influence the change in his teammates may have.

Expected Completion Percentage is an advanced metric created by Next Gen Stats that uses the Completion Probability to calculate the Expected Completion Percentage. The Completion Probability is based on many factors including receiver separation, where the receiver is on the field, how close the nearest pass rusher was, and more. In essence, using the Expected Completion Percentage to measure performance removes other compounding factors such as quality of receivers or the offensive line.

![Figure 3](/assets/journalism/goat_vs_cliff/figure-03.png)

![Figure 4](/assets/journalism/goat_vs_cliff/figure-04.png)

The Completion Percentage Above Expectation (CPAE) represents the difference between a quarterback’s true completion percentage and expected completion percentage, so the statistic represents how a quarterback compares to an average quarterback in terms of completion percentage. For Tom Brady, his CPAE after the cliff prediction declines pretty much linearly for 3 years, which backs up the idea that Tom Brady is essentially losing his touch. While Brady isn’t really falling off a cliff, he is at least sliding down a hill.

However, we see a big jump in CPAE in his age 43 season where he moved to the Tampa Bay Buccaneers. His CPAE moved from -3.1% to 1.3%, a jump of almost 4.5%. Thus, Tom Brady definitely played much better in 2020 than he did in previous years. While the talented supporting cast he had with the Buccaneers definitely made a difference, a lot of his improvement can be attributed to himself. With his performance this season, Brady disproved the idea that he is in decline, but it remains to be seen how long he can keep up playing at an elite level.

We have seen that Brady has definitely defied the cliff so far with two methods of analysis: a two proportion statistical test on 2019 and 2020’s completion percentages and using advanced statistics provided by Next Gen Statistics.

A key idea to keep in mind is that a cliff is not easily visible with just statistics alone. We should consider important intangibles like mentality, confidence, and leadership as well. When considering the intangibles, Tom Brady is unparalleled: his teammates have repeatedly emphasized his leadership and commitment to excellence throughout his career.

For example, one of Brady’s former teammates from college Ian Gold said this about him: “He wasn’t the greatest athlete but he was the smartest guy on the field”. Another example is what wide receiver Troy Brown said: “It doesn’t matter whether he’s right or wrong. People listen to him.” Ignoring arm talent, speed, and any other physical traits, Brady has been mentally one of the best quarterbacks in league history.

Even in Brady’s 20th season, he has continued to show a mental edge over the competition. According to Buccaneers wide receiver Mike Evans speaking on the Michael Irvin podcast about preparation before the Superbowl:

“He was [texting us a lot of clips](https://twitter.com/NFLSTROUD/status/1362440788056158212), lots and lots of film on what to expect on certain down and distances. And he does that all the time, but just in the playoffs and especially this game, he went above and beyond.

“Like 12 at night, six in the morning. People aren’t even up, and he’s telling us this won’t work against this guy. You’ve got to run it like this. This is the detail that went into this and the extra meetings and all the hard work. It all paid off and Tom is a great leader.”

Clearly, Brady takes the mental aspect of the game extremely seriously and has not let off in the slightest this past year.

## Comparison to Other Legendary Quarterbacks

While Brady has temporarily put to rest the idea of decline this year, many times a quarterback’s level of play will “fall off a cliff” and deteriorate without much indication. This has happened in the past, particularly for quarterbacks playing in their late 30’s and 40’s. For example, let us take a look at Peyton Manning and Brett Favre late in their careers. Manning and Favre both have multiple MVP awards and a place in the Hall of Fame, providing similarities to Brady’s career regarding achievement and ability. In addition, both players changed teams late in their careers after spending over a decade with their previous teams: Manning moved from the Indianapolis Colts to the Denver Broncos; Favre moved from the Green Bay Packers to the New York Jets to the Minnesota Vikings.

Let’s take a look at each player’s performance the final 4 years of their career to better understand how each player faced the cliff.

### Peyton Manning:

![Figure 5](/assets/journalism/goat_vs_cliff/figure-05.png)

![Figure 6](/assets/journalism/goat_vs_cliff/figure-06.png)

In Manning’s final season, he had a 59.8% completion percentage and averaged 224.9 yards per game well below his career averages of 65.3% and 270.5 yards per game. Manning had a sub-60 completion percentage for the first time since his rookie season and had the lowest yards per game in his entire career. While Manning did win the Super Bowl in his final season, it was on the back of an amazing defense which forced 4 turnovers and strip-sacked the opposing quarterback for a touchdown.

Nevertheless, we can see that Manning had 3 above-average years at ages 36-38, but his abysmal year at age 39 suggests the existence of a metaphorical cliff that quarterbacks are on late in their career. Manning suffered a foot injury late in the year that can explain his non-factor performance in the Super Bowl. However, his poor statistics in the regular season can’t be explained away with injury. In terms of talent of the supporting cast, the Broncos retained their top 2 receivers Demariyus Thomas and Emmanuel Sanders, who were both Pro Bowlers.

We can further look into Manning’s decline with a statistical test. Similar to Brady, we will use a 2 sample test for proportions with a significance level of 0.05. After performing the statistical test, we get a z-score of 1.928 and a p-value of 0.0268, a significant result. Thus, we can conclude that Manning definitely declined heavily in his last year which is a demonstration of the cliff theory applying to Manning.

### Brett Favre:

![Figure 7](/assets/journalism/goat_vs_cliff/figure-07.png)

![Figure 8](/assets/journalism/goat_vs_cliff/figure-08.png)

We can see that Favre, similar to Manning, had an uncharacteristically bad final season where he had a 60.6% completion percentage and an average of 193 pass yards per game. His career averages were 62% and 237.9 yards per game. Favre had a career year at age 40 posting the highest completion percentage (68.4%) and third-highest yards per game (262.6) of his career. However, he declined heavily in his final season. Favre also dealt with injuries in his final season suffering both foot problems and a sprained shoulder.

For consistency, we will again apply the 2 sample test for proportions on Brett Favre’s completion percentage in the last 2 seasons to see if there is evidence of Favre “falling off the cliff”. After applying the test, we get a z value of 2.379 which leads to a p-value of 0.00868, another statistically significant result. Both Favre and Manning are both examples of legendary quarterbacks that seemed to “fall off a cliff” at the end of their careers. Both quarterbacks were playing at an extremely high level prior to their decline which happened suddenly.

## Conclusion

The cliff theory that Max Kellerman proposed about Tom Brady definitely had logical reasoning behind it. Brady definitely had declining statistics in the previous couple of years and sudden declines had happened multiple times in the past as well. Brady, at this point in his career, has definitely outplayed the normal shelf life for an NFL quarterback and proved that he possesses elite abilities as a quarterback.

It remains to be seen how long Brady can sustain this level of production in his mid-40’s. A key for Brady is to avoid any injuries at this point; after late career injuries for Manning and Favre, they never regained their MVP-level form and had lackluster final seasons. It’s possible that he could continue playing at a high level for the next couple seasons, he could regress suddenly next season as well. With Manning and Favre, they both had good seasons before their last year where they had comparatively dreadful performances. There really are no comparable examples in NFL history that could help give a clue about when Tom might decline. It is clear, however, that Brady has defeated Kellerman’s cliff theory; in fact, Kellerman himself has admitted to Brady’s success:

*Source:* [*NFL Next Gen Stats*](https://nextgenstats.nfl.com/stats/passing#yards) *,* [*NFL Stats*](https://www.nfl.com/stats/player-stats/)
