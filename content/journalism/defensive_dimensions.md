Anyone who plays any sport knows how difficult it is to take a game full of skill, luck, athleticism, and random chance and reduce a player’s impact down to a metric or statistic. They also know how exponentially harder it is to do so for defense compared to offense. In this piece, I will attempt to analyze NBA players’ defensive impact by looking at four different dimensions: disruption, protection, contest quality, and hustle. I’ve come up with ways to quantify and visualize these defensive attributes which I’ll go more into detail on later. The basic goals of this piece are to a) Analyze and compare players’ defensive impact, b) See who the best defenders in the league are according to the metric, and c) Analyze the metric I developed to see if it is accurate and reliable. Despite being limited in my knowledge and tools, I still believe that what I have come up with represents a new and unique way of visualizing defensive impact.

Before I can get into my work, however, I have to show you where the idea for this analysis originated. In his series on the [40 greatest careers in NBA history](https://backpicks.com/2017/12/11/the-backpicks-goat-the-40-best-careers-in-nba-history/), author, analytics guru, and personal hero of mine Ben Taylor uses what he calls the “Big 4 Offensive Dimensions” to compare the offensive value of different players over three year peaks. His four offensive dimensions are efficiency (real true shooting), scoring (points per 75 possessions), creation ([box creation per 100 possessions](https://fansided.com/2017/08/11/nylon-calculus-measuring-creation-box-score/)), and turnovers ([adjusted turnover percentage](https://backpicks.com/2017/10/16/offensive-load-and-adjusted-tov/)), but the most striking thing about these metrics is not what these values are, but how he uses them. By plotting and scaling these four dimensions onto diamond charts—as seen below—he creates both an easy to comprehend and stimulating visual, allowing for complex comparisons of players which would be nearly impossible in words alone. It was while looking at one of these plots that I came up with the idea to create a visualization of my own, but one which instead measures defensive impact on the court.

![Graphic by Ben Taylor](/assets/journalism/defensive_dimensions/figure-01.png)

While I will be the first to admit that I was inspired by Taylor’s work and borrowed the basic design of the graphic, that is about where the similarities between his work and mine end. The dimensions I chose to evaluate, the way I calculate these dimensions, and my methodology for scaling them to fit the visual, are all original; still, it’s important to give credit where credit is due, as well as give a shout out to one of the best basketball minds out there. Here are the calculations for my four defensive dimensions:

![Figure 2](/assets/journalism/defensive_dimensions/figure-02.png)

As is true for most sports, defensive impact in basketball is at its roots harder to quantify than offensive impact. Fortunately, the availability of advanced stats like block and steal percentage makes analyses like this one much more tangible to complete. Before I decided how to quantify these categories of defensive impact, though, I had to decide what my categories would actually be. Obviously there are more than just four aspects to defensive impact, but I found that some aspects of defense—team defense especially—such as defensive IQ, switching and fighting through screens, and making help rotations were just too hard to quantify. In the end, I landed on disruption, protection, contest quality, and hustle as my four dimensions, each of which I will get into now.

My disruption dimension measures how a defender disrupts ball and player movement, especially on the perimeter and in passing lanes. This dimension relies heavily on steal percentage, which is an estimate of the opponents’ possessions that end with a steal by that player while he is on the court. The purpose of including this metric is two-fold; stealing the ball from the other team is valuable (obviously), but having a high steal percentage also implies that this player is disrupting the opposing team’s offensive flow by pestering ball handlers, being in passing lanes, or anticipating offensive actions. That being said, not all players who provide value in these areas will necessarily get a lot of steals, which is why I decided to add deflections per 36 minutes to the equation. If a player is getting a lot of deflections, we can assume they either are causing havoc at the point of attack, actively reading and disrupting passing lanes, or generally making life difficult for the offense, all great indicators of defensive disruption. Because of the nature of this quantification, this dimension is skewed towards guards and perimeter players, meaning their scores in this category will on average be higher than interior players.

A similar calculus was applied to my quantification of protection; this dimension relies heavily on block percentage, which is an estimate of opponent’s two-point field goal attempts blocked by a player while they are on the court. As with steal percentage, the value of a high block percentage comes from two areas; for one, every shot blocked is a shot that will not go in. In addition to this, however, a high block percentage is indicative of a player who regularly interferes with opponent’s shots, especially ones at and around the rim. A player might not block all of these shots, but a team certainly gets value from every high-quality contest at the hoop. Unlike disruption, which measures defensive value mainly on the perimeter and in passing lanes, protection mainly measures defensive impact at the rim, making this dimension skewed heavily in favor of bigs. To help counterbalance this, however, I have included charges drawn per 36 minutes into my calculus; while a successful charge itself is very valuable—as it is guaranteed to result in a turnover, unlike a successful block—charges are quite rare, and are therefore not given much weight; elite charge-drawers like Kyle Lowry only draw about half a charge per 36 minutes.

Contest Quality is probably the simplest and therefore most inherently valuable of these four defensive categories. Because it relies on only one metric, this statistic actually means something in its own right—that’s not to say that the other defensive dimensions are meaningless, but a player’s steal percentage plus one-half of their deflections per 36 is just a metric, which only derives value by being compared with other players. For example, if you told me that Giannis Antetokounmpo had a PER of 31.86 for the 2019-2020 regular season, knowing this alone doesn’t really tell me anything about the player. On the other hand, if you told me that Giannis’ 31.86 PER was the highest regular season PER in league history, now you’ve told me something interesting! Although having a disruption value of 4.0 doesn’t actually tell me anything specific about that player, a contest quality of 4.0 does. Contest quality is calculated simply by finding a player’s opponent’s field goal percentage differential, or in other words how well does the player you are guarding shoot when guarded by you vs when guarded by the rest of the league. Let’s look at Rudy Gobert, for example: in the 2019-2020 regular season Gobert’s opponent field goal percentage differential was -7.2%, meaning that players he guarded had 7.2% worse field goal percentages when shooting against Gobert than their average percentages. That, as you might imagine, is an elite number (they don’t call him The French Rejection for nothing).

Our fourth and final defensive dimension is what I call defensive hustle; in this metric, I did my best to quantify defensive work, intensity, and effort, things that are vital to playing defense at a high level and yet can be very hard to measure. Right out of the gate, I will admit that this is the most flawed of these four dimensions. Still, I chose to include this category anyway because of how important I feel effort and hustle are to playing impactful defense. To calculate defensive hustle, I first took defensive miles ran per 36 minutes, added 2.5 x personal fouls per 36 minutes, added contested defensive rebounds per 36 minutes, and finally added one tenth x minutes per game minus thirty. All in all, the equation for defensive hustle looks like this: defensive miles ran + (⅖) personal fouls + contested Dreb + (0.1)(mpg–30). Quite the mouthful, I know. I included defensive miles ran for obvious reasons, as a player who is hustling more should in theory run more than a player who is putting in less effort. This portion of the metric inherently favors smaller players, though, as a 6’1, 180 pound guard should have a lot easier time running a mile than a 7’1 280 pound center, but more on that in a minute. I added personal fouls to the equation to try and help quantify effort on on-ball plays and toughness in the interior, although this admittedly has some flaws. There are plenty of players who may not be great defenders but still commit a lot of fouls—I know Russell Westbrook might have a thing or two to say about that. While I want to do my best to avoid rewarding sloppy and careless defense, drawing a foul does usually mean that you were at least in on the defensive play and trying. Also, some of the worst defenders in the league have very small personal foul rates: Trae Young, D'Angelo Russell, and Darius Garland each drew 1.8, 2.1, and 1.8 personal fouls per 36 minutes respectively, which can be seen as indicative of them putting in minimal effort and taking plays off. Adding contested rebounds per 36 minutes to the equation also attempts to measure aggressiveness on defense, as well as how much a player fights for position in the paint. Contested defensive rebounds and to an extent personal fouls will both skew high values towards bigs, although defensive miles ran skews in favor of smaller guards, as mentioned previously. The problem, however, is that defensive miles ran has relatively little variation compared to personal fouls drawn and especially contested defensive rebounds. This creates scenarios where a plus value for defensive miles ran is not nearly as impactful as a minus value for contested defensive rebounds; the end result is that this metric, while still valuable, is heavily biased to favor bigs. The final piece of math I included to this dimension was an adjustment based on minutes played per game. Since we are trying to measure defensive effort here, and each of the values I have used so far are measured per 36 minutes, what I have so far is purely a rate statistic. This means that if I have a defensive hustle value of 4.0 while playing 18 minutes a game vs a value of 4.0 while playing 35 minutes a game, this metric will view these players equally. This is obviously not ideal, as it takes a lot more energy, commitment, and focus to put in 35 minutes of defensive work than it does 18 minutes. To account for this, I set an arbitrary boundary at 30 mpg played and slightly decreased the hustle value of players as they fell further below this threshold, and vice versa. All in all, this is the one metric that I would assign the least importance to of the four, although it is also by far the most difficult to quantify, so this should not be a big surprise.

Before getting into samples of different players, I first want to go over how I will be visualizing this data. To start off, below are some graphics showing how theoretical players would be valued at, below or above average. These were calculated based on a sample of 50 starters from 10 teams, from a healthy mix of what I considered to be good, mediocre, and bad teams.

### Standard Dimension Templates

### Theoretical Average Player

![Figure 3](/assets/journalism/defensive_dimensions/figure-03.jpg)

### Theoretical Player One Standard Deviation Above Average

![Figure 4](/assets/journalism/defensive_dimensions/figure-04.jpg)

### Theoretical Player One Standard Deviation Below Average

![Figure 5](/assets/journalism/defensive_dimensions/figure-05.jpg)

### Theoretical Player Two Standard Deviations Above Average

![Figure 6](/assets/journalism/defensive_dimensions/figure-06.jpg)

### Theoretical Player Two Standard Deviations Below Average

![Figure 7](/assets/journalism/defensive_dimensions/figure-07.jpg)

Concerning the numbers running along the axes, I wouldn’t worry too much about them. For one, excluding contest quality the values themselves are more or less meaningless. More importantly, though, this analysis is meant to be comparative in nature, not absolute. The fact that LeBron James might have a disruption value of 3.5 doesn’t mean much, just as the fact that Luka Doncic might have a value of 2.5 doesn’t mean much. The fact that LeBron has a higher value than Doncic, and to what degree that value is higher, is what is important. Finally, let’s apply some of this to actual players! Below I have within-team comparison of the Boston Celtics and Golden State Warriors’ starting fives:

### Warriors and Celtics

![Figure 8](/assets/journalism/defensive_dimensions/figure-08.png)

![Figure 9](/assets/journalism/defensive_dimensions/figure-09.jpg)

While I have included the calculations for each player, I would again like to emphasize that the value doesn’t necessarily come from the numbers themselves, but rather the comparison of them on a large scale. In addition, it’s important to remember that this piece is not only an analysis of players but also an analysis of the metrics themselves. Just by looking at these results, we can see that everything seems pretty accurate: Daniel Theis, who led the Celtic’s starting five in D-PIPM, D-RPM, and D-BPM covers the largest total area and therefore looks like the teams most impactful defender, in line with the advanced metrics. He also is the best protector by a wide margin, a result I would’ve expected from a team that often plays two perimeter players alongside the center instead of a traditional power forward. Marcus Smart, who among starters was 3rd in D-PIPM, 3rd in D-RPM, 2nd in D-BPM, and 1st in D-RAPTOR appears to have high defensive impact as well, and clearly leads the team in disruption, something we would expect from a tenacious point of attack stopper. Jason Tatum, 2nd in D-PIPM, 2nd in D-RPM, 2rd in D-BPM, and 3rd in D-RAPTOR appears to be in the middle of the pack defensively according to my model, just as he does in the advanced stats. He also seems to do everything well but isn’t elite at anything either, which is what one might expect from the long, athletic but young and relatively inexperienced wing. On the flip side, we have Kemba Walker; last among starters in all four defensive impact metrics, Kemba also looks like the group’s worst defender no matter which way you slice it. All in all, this evidence bodes well concerning the accuracy and reliability of this metric, although the sample size is extremely small.

![Figure 10](/assets/journalism/defensive_dimensions/figure-10.png)

![Figure 11](/assets/journalism/defensive_dimensions/figure-11.jpg)

As one might expect, Draymond Green was by far the best defender out of the 2019-2020 Warriors starting five, although Marquese Chriss seemed to have a significant defensive impact as well. Looking at the advanced metrics, Green led the starters in defensive PIPM, RPM, BPM, and RAPTOR, while Chriss finished 3rd, 3rd, 2nd and 2nd respectively. The other Warrior to seem passable according to the advanced stats, Damion Lee, finished 2nd, 2nd, 3rd, and 3rd in these same categories. While advanced metrics seem to favor Chriss slightly over Lee, my four defensive dimensions value Chriss over Lee in a big way, which speaks to the metric’s skew towards favoring the defensive impact of bigs over perimeter players. While Chriss and Lee were viewed as relatively similar by the advanced metrics, Lee vastly outperformed Warriors’ rookies Jordan Poole and Eric Paschall, two players who were seen by impact metrics as some of the worst defenders among all the league’s starters last year. According to my metric, though, Lee is just barely more impactful than Poole and about on par with Paschall, a conclusion that both the advanced metrics and an eye test would likely not support. In the end, this metric does not seem quite as accurate when looking at the Warriors than it did with the Celtics. Next up, we will do a between-team comparison to see whether Boston or Golden State looks better on defense.

### Celtics vs Warriors

![Figure 12](/assets/journalism/defensive_dimensions/figure-12.jpg)

With an adjusted defensive rating of 108.15, good for fifth best in the league, the Celtics had one of the top defenses in the NBA last year. The Warriors, with their 114.11 adjusted defensive rating, did not. At first glance, however, these two teams seem relatively similar according to my four defensive dimensions; each team’s peak performance is around the same place in each of the four dimensions, with the Warriors even having the best performer in half of the categories! Is something seriously wrong here? How could the 24th best defense look so on par with the 5th best? This is because we have a tendency to focus too much on top-end talent, especially when it comes to visualizations like this. The reason why the Warriors look so competent in this comparison isn’t because they had a team of good defenders, but because they had one good defender, 2017 DPOY Draymond Green. Draymond accounts for the Warriors top values in disruption, contest quality, and hustle; he is so good in these categories, in fact, that he bests all of the Celtics in two of them as well. If we remove his defensive impact, though, we get a better picture of how the rest of the Warriors fare when compared to a strong defense like Boston’s.

### Celtics vs Warriors (without Draymond)

![Figure 13](/assets/journalism/defensive_dimensions/figure-13.jpg)

Here, we see that the Green-less Warriors are significantly worse than the Celtics in two of the dimensions, and are saved only by Marquese Chriss’ solid performance. It is important to look at the interior of the graphic where the poorer defenders are visualized as well. Kemba looked like a pretty awful defender when only compared to his teammates, but when compared to Warriors players as well we can see that he is on par or better than three of the Warriors’ starters. A good defense can still function with one negative defender, but not two or three.

### Walker vs Lee, Poole, and Paschall

![Figure 14](/assets/journalism/defensive_dimensions/figure-14.jpg)

Moving away from team based analyses, I now want to focus on positional comparisons, more specifically by looking at a collection of good defenders at a position and comparing them to bad defenders at the same position. This not only allows us to test the validity of the metric while comparing players of various defensive stature, but it also allows me to scale each visualization to better fit each position; when scaling for guards, for example, the average disruption value will be much higher than for bigs, so a value of 4.0 when scaled for guards will not be as impactful on the visualization as a value of 4.0 when scaled for bigs. Rescaling the visualizations based on position will not only help eliminate the metric’s tendency towards favoring bigs, but also make each group comparison fit more symmetrically on the graphic.

### High vs Low Quality Defenders

The next five visualizations will show three of the very best defenders compared to three of the very worst at each position. I chose the best from each position based on All-Defensive First Team voting as well as impact metric evaluations, while I chose the three worst defenders based only on impact metrics. It is also worth pointing out that I used some licence when it comes to these players’ positions so I could include certain players that I thought deserved to be there, for both good and bad reasons.

**Point Guards** (adj. for guards)

![Figure 15](/assets/journalism/defensive_dimensions/figure-15.jpg)

This graphic portrays three really good vs really bad defenders, and it shows. At only one point does any of the three low quality defenders surpass any of the high quality defenders, being when D’Angelo Russell barely surpassed Eric Bledsoe in the disruption dimension. It is also interesting to note that Kris Dunn and Pat Beverly seem to outperform Eric Bledsoe, as these two are also valued higher than Bledsoe by D-PIPM, D-BPM, D-RPM, and D-RAPTOR.

![Figure 16](/assets/journalism/defensive_dimensions/figure-16.jpg)

Generally, these results show that the four defensive dimensions probably got these comparisons right, although you don’t need to be Einstein to tell me that Trae Young and D’Angelo Russell are a lot worse defenders than Patrick Beverly and Kris Dunn.

**Shooting Guards** (adj.for guards)

![Figure 17](/assets/journalism/defensive_dimensions/figure-17.jpg)

These results essentially tell the same story as the last ones, although the low quality defenders seem to be faring a little bit better this time. Booker is above average in two of the categories and actually leads all of these players in defensive hustle, although this is probably the least indicative of value out of the four dimensions. What is most interesting to note is just how similar the three high quality players are in this visualization; Marcus Smart and Jimmy Butler especially seem to be neck and neck in all four dimensions.

![Figure 18](/assets/journalism/defensive_dimensions/figure-18.jpg)

Smart and Butler do seem to be relatively close when evaluated by impact metrics as well, with both being seen as quite a bit better defenders than Holiday as well. Holiday, however, is given a slight edge according to my defensive dimensions.

**Small Forwards** (adj. for wings)

![Figure 19](/assets/journalism/defensive_dimensions/figure-19.jpg)

Finally, we see a little bit of life coming from the low quality defenders! This success seems to be mostly one sided, however; in Carmelo Anthony’s case, he leads the group in defensive hustle but is valued second to last in two of the other dimensions. Kevin Knox may stand out in his protection, but he is valued dead last in two other dimensions and second to last in the other. This lack of well-roundedness stands in stark contrast to the high quality wing defenders, who are all above average in each of the four dimensions excluding Jayson Tatum’s hustle valuation. Again we see two players with extremely similar plots, as Kawhi Leonard and Ben Simmons seem nearly identical every step of the way.

![Figure 20](/assets/journalism/defensive_dimensions/figure-20.jpg)

Unlike in my model, Leonard is actually valued significantly higher than Simmons in three of the four defensive impact metrics. Also, while the defensive dimensions have Simmons a lot higher than Tatum, the impact metrics view Simmons and Tatum more or less the same—some impact metrics like Tatum while some like Simmons, but in the aggregate they end up around equal.

**Power Forwards** (adj. for bigs)

![Figure 21](/assets/journalism/defensive_dimensions/figure-21.jpg)

This visualization represents the largest disparity between the high and low quality defensive players, which is not surprising considering we’re dealing with Bam Adebayo, Anthony Davis, and reigning Defensive Player of the Year Giannis Antetokounmpo. The defensive dimensions do see Giannis and Davis as quite a bit better than Adebayo, however, which to be fair is likely accurate. The advanced metrics agree with this idea, as Antetokounmpo and Davis are rated higher than Bam in all of the impact metrics aside from D-RPM, where Adebayo is valued higher than Davis.

![Figure 22](/assets/journalism/defensive_dimensions/figure-22.png)

According to these metrics, Antetokounmpo seems to be the most valuable defender by a very significant margin, so I do find it slightly disconcerting that he is valued below Davis and Adebayo in both the protection and disruption categories.

**Centers** (adj. for bigs)

![Figure 23](/assets/journalism/defensive_dimensions/figure-23.jpg)

The centers seemed to have the smallest divide between the high and low quality defenders, largely due to Karl Anthony-Towns performing surprisingly well—a large portion of this is due to his high hustle valuation, which does not exactly bode well concerning the accuracy and validity of the metric. While Rudy Gobert, Joel Ebmiid, and Brook Lopez all are valued relatively high by my four defensive dimensions, they all excel in different areas.

![Figure 24](/assets/journalism/defensive_dimensions/figure-24.png)

Out of these three high quality defensive bigs, Embiid is rated the lowest in both my model as well as in all four of these impact metrics; his valuation according to the four defensive dimensions does not have him nearly as far below Lopez and Gobert as the advanced metrics do, however. Gobert and Lopez seem close according to the impact metrics, although Gobert does seem to have a small advantage; they are very closely valued in my model as well, this time with Lopez taking the edge.

These exercises have both allowed us to compare some of the best and worst defenders in the league as well as shown that my metric serves as a relatively accurate way to compare players. Now, on to the fun stuff! Instead of comparing good defenders with bad ones, we can compare some of the most heralded defenders in the NBA to some of the most underrated defenders in the league. Similarly to before, I determined which players are seen as the best defenders in the league by taking players with the most all-defensive team votes. I also used these all-defense votes to determine which players are eligible to be underrated as well—only one of the “underrated” defenders received more than five defensive-team voting points. I then found the best defenders according to D-PIPM, D-RPM, D-BPM, and D-RAPTOR who did not receive legitimate all-defensive team consideration; in this way, I can compare two groups of players who fared similarly according to impact metrics but who were viewed very differently by the general public and media.

### All-Defensive vs Underrated Defenders

Before we can start comparing these two groups of defenders, we first have to determine which players are in each camp. Picking out the All-Defensive players was easy, as I just took the top three players from the first and second defensive teams at each position. The only hiccup was that there were only two players on these teams who I considered to be true wings—and more importantly, players who guarded other wings—so I had to include Jimmy Butler in this group as well (Sorry Bam). As far as determining the underrated players, that was a little trickier. First, I compiled a list of the best performances from the 2019-2020 season for each of the four defensive impact metrics we’ve been using, then repeated the process for the guard, wing, and big positions. Here’s what that looks like:

![Figure 25](/assets/journalism/defensive_dimensions/figure-25.png)

I used these metrics to try and remain as objective as possible, and I personally was very surprised to see some of these players valued so highly. After seeing which players these advanced metrics loved, I then had to eliminate the players who received significant defensive team consideration. As you will see, many of the players who made the ‘underrated’ list didn’t even receive a single all-defensive team vote. Once I had my all-defensive and underrated groups set, I wanted to see how they would compare analytically. By comparing the average values for each metric, I was able to confirm that the players who did not make the all-defensive list perform nearly as well as the all-defensive players according to these metrics—it is worth noting that the underrated wings outperform the All-Defensive wings in this sample, although the All-Defensive bigs outperform the underrated bigs.

![Figure 26](/assets/journalism/defensive_dimensions/figure-26.png)

Now, let’s finally compare these players!

**Guards** (adj. for guards)

![Figure 27](/assets/journalism/defensive_dimensions/figure-27.jpg)

![Figure 28](/assets/journalism/defensive_dimensions/figure-28.jpg)

We can see that, while some of the underrated players performed well in one or two dimensions, the All-Defensive group really stands out in their consistency. Smart especially looks like a very impactful defender in this comparison, although Beverly isn’t far behind. Dante DiVincenzo to be valuable on the defensive end in his own right, although he only really shines in his disruption valuation; Wes Matthews also stands out in a single category, being contest quality, although poor valuations in the rest of his dimensions have him looking like the least impactful defender of this group. Of all the underrated defenders, though, Alex Caruso looks like the most valuable defender, and is at the top of the group in both protection and disruption; he is heavily penalized, though, by an abysmal defensive hustle valuation, which is likely in part due to his low rebound rate and minutes played per game.

**Wings** (adj. for wings)

![Figure 29](/assets/journalism/defensive_dimensions/figure-29.jpg)

![Figure 30](/assets/journalism/defensive_dimensions/figure-30.jpg)

As we saw before, Simmons and Leonard look very similar when evaluated along the four defensive dimensions, although surprisingly they do not seem like the most impactful defenders on this graphic. In fact, according to my model Jonathan Isaac looks like one of the most impactful defenders in the game, posting very strong valuations in each of the four categories. LeBron James, like Isaac, also looks very consistent, although unlike Isaac he is consistently good to mediocre rather than amazing. Thybulle looks like an impactful defender in his own right, although like Caruso he is hurt by his poor hustle score—Thybulle played under 20 minutes per game, and he had a very poor contested rebound rate for a wing of his stature.

**Bigs** (adj. for bigs)

![Figure 31](/assets/journalism/defensive_dimensions/figure-31.jpg)

![Figure 32](/assets/journalism/defensive_dimensions/figure-32.jpg)

As we saw before, Anthony Davis is seen as one of the most consistent and best defenders according to my metric. Antetokounmpo stands out as well, leading the pack in both hustle and contest quality, although surprisingly he is ranked last among the group in protection. Gasol, much like LeBron in the wing comparison, does not stand out anywhere but is consistently solid in each category—results we are likely to expect for two players who tend to save their strength for the postseason at this point in their careers. While not near Davis or Antetokounmpo’s level, Willie Cauley-Stein is consistently good and shines in his disruption, something that checks out for the not-so-physical but very quick center. Rudy Gobert and Ivica Zubac both excel in their contest quality but are below average in their disruption, again something we would expect from two great yet immobile rim protectors who do not fare well moving out to the perimeter.

While we have taken a look at some of the best (and worst) defenders from the 2019-2020 season, I also want to take a look at some of the best defensive seasons of the last decade, more specifically by comparing the last few Defensive Player of the Year award winners.

### Recent DPOY Winners

Much of the player tracking data used to calculate my four defensive dimensions is only available since the 2013-2014 seasons. Out of the seven seasons that we have this data, five different players have won the Defensive Player of the Year award (Kawhi Leonard and Rudy Gobert both won two). To avoid redundancy, I took a close look at each of Gobert and Kawhi’s back-to-back DPOY seasons, and decided on one season to keep for each player.

![Figure 33](/assets/journalism/defensive_dimensions/figure-33.png)

Gobert’s 2017-2018 campaign does seem to be favored over his 2018-2019 season by impact metrics, as he is valued higher in two of the metrics in 2017-2018 compared to just one in 2018-2019. He also received significantly more DPOY votes and DPOY 1st place votes in the 2017-2018 season, although part of this could be because he had never won the award before, unlike the following year. Gobert also won the award by a much larger margin in 2017-2018, beating out second place by 303 points, 172 more points than his margin of victory of 131 in 2018-2019. Kawhi’s statistical seasons in 2014-2015 and 2015-2016 were much closer than Gobert’s, however, as The Claw scored within 0.16 points in three of these four defensive impact metrics between his two DPOY seasons. While Kawhi averaged a career high 2.3 steals per game in his 2014-2015 season, he set a career high for blocks per game in 2015-2016, averaging 1.0 per contest. Kawhi did receive much more traction in the DPOY voting during his 2015-2016 season, though, as he not only received more total points and more first place ballots in 2015-2016 but also won by a larger margin compared to the previous season. Leonard was also unanimously voted into the All-NBA First Defensive Team in 2015-2016, in addition to making his first all-star appearance. While it was close, I eventually landed on Leonard’s 2015-2016 season to represent him in this analysis. This leaves us with five different seasons from five different players to analyze. Here’s how these performances shake out according to the impact metrics:

![Figure 34](/assets/journalism/defensive_dimensions/figure-34.png)

While each of these seasons is clearly very impressive, some players do seem to stand out from the rest; Draymond Green’s 2015-2016 season, for example, leads the rest of the seasons in D-RPM and D-RAPTOR, while Giannis Antetokounmpo’s 2019-2020 campaign is first in D-PIPM and D-BPM. It is interesting to note, however, that Green’s season ranks 2nd and 3rd in the other two impact metrics, while Antetokounmpo’s season ranks last in the other two. Next, let’s look at these same seasons under the lens of the defensive dimensions:

![Figure 35](/assets/journalism/defensive_dimensions/figure-35.png)

### DPOY Winners

![Figure 36](/assets/journalism/defensive_dimensions/figure-36.jpg)

Before you say these performances all seem weak, I should mention that I scaled this visualization uniquely to portray very high-level defensive impact. While not terrible, Rudy Gobert and Kawhi Leonard do not find themselves on top here; they both excel in certain areas, Noah in disruption and Leonard in protection, but their lack of consistency across all four of the dimensions leaves something lacking. These results are not especially surprising, however, as we have seen before that Gobert tends to excel in rim protection while not being elite in his speed and mobility. Leonard, on the other hand, is the one true wing in this group, and therefore it shouldn't be a shock to see him valued highly in his disruption but low in his protection and hustle. Additionally, when comparing players of all positions, bigs can get a sizable advantage at times in this metric, again showing that these results are not out of the ordinary. Joakim Noah finds himself consistently in the middle of the pack in all dimensions except for hustle, where he leads all players. The two best defensive campaigns according to these dimensions, however, must go to Draymond Green and Giannis Antetokounmpo. Let’s take a closer look at these two amazing defensive players:

### Draymond and Giannis

![Figure 37](/assets/journalism/defensive_dimensions/figure-37.jpg)

Looking at Giannis and Green alone, and in terms of area, allows us to really see how they stack up and in which areas they each excel. If we really want to compare the total area each of these players cover, though, we have to shift some things around, like so:

![Figure 38](/assets/journalism/defensive_dimensions/figure-38.jpg)

This obviously does not actually reflect how Antetokounmpo is valued, but it makes comparing the area covered of these two players much easier. We can now see that Draymond, albeit not by much, covers more area than Giannis—in theory making his defense that season more impactful. Does this mean that Draymond’s 2016-2017 defensive season was more valuable than Giannis’ 2019-2020 season? Not necessarily. What I do hope that this comparison accomplished, along with the rest of this piece, was to widen your viewpoint and introduce a new way of thinking about defensive impact. The field of analytics is still so young, and we still have so far to go—especially when measuring the defensive side of the court. While this piece was a little bit more exploratory and less argumentative than what you might expect, I hope you’ve had as much fun reading this as I’ve had making it!

*Sources: backpicks.com, basketball-reference.com, bball-index.com, stats.nba.com, fansided.com, desmos.com, official.nba.com*

*Data:* [https://docs.google.com/spreadsheets/d/1fVlrlMfhVtlP5mRAPkLtjPp0Ki3U0HWRqyJztDr](https://docs.google.com/spreadsheets/d/1fVlrlMfhVtlP5mRAPkLtjPp0Ki3U0HWRqyJztDrCS0s/edit?usp=sharing)

[CS0s/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1fVlrlMfhVtlP5mRAPkLtjPp0Ki3U0HWRqyJztDrCS0s/edit?usp=sharing)
