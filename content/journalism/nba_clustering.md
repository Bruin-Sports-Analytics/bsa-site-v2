## Introduction

In the last few decades, the NBA has seen rapid evolution. The three point shot becomes more frequent every year and offenses like the Warriors have modernized the game with a “small ball” offense built around guards rather than centers. Recently, young guards and ball handlers of large stature have been brought in, tall guards like Luka Doncic and LaMelo Ball and ball handlers like Lebron James and Zion are redefining what it means to be a guard or offensive leader. With all this change, the question is, where are offenses today? Is the Warriors model as commonplace or effective as the media makes it seem? Which offensive archetypes are most similar or efficient? The goal in this article is to cluster different offenses together and to analyze the efficiencies of these different clusters, while keeping in mind the general trends of the game.

## Data

The first goal is to find stats that give a good picture of a team’s offenses. We looked at how often each team runs certain play types: isolation, pick-n-roll (pnr), postup, transition, and spot up. We also recorded each team’s average offensive speed, sec/touch, passes made, and restricted area, midrange, and three point frequency. We created two star graphs per team to help visualize the data.

As a starting point for analyzing similarities between teams, Python's sklearn library was used to cluster teams with similar stats. This dendrogram provides a general picture of which teams have similar offenses, the further left two teams are connected, the more similar their key offensive stats are.

![Figure 1](/assets/journalism/nba_clustering/figure-01.png)

Next, we manually clustered teams based off of offensive play frequency for key play types like the pnr, isolation, postup, etc.

### The Pick and Rollers

![Figure 2](/assets/journalism/nba_clustering/figure-02.png)

![Figure 3](/assets/journalism/nba_clustering/figure-03.png)

![Figure 4](/assets/journalism/nba_clustering/figure-04.png)

![Figure 5](/assets/journalism/nba_clustering/figure-05.png)

![Figure 6](/assets/journalism/nba_clustering/figure-06.png)

![Figure 7](/assets/journalism/nba_clustering/figure-07.png)

![Figure 8](/assets/journalism/nba_clustering/figure-08.png)

The common theme across these teams involves lightning-quick, slashing guards or elite centers. In the case of the Chicago Bulls and Orlando Magic, that commonality stems from a single player: Nikola [Vucevic.In](http://Vucevic.In) Orlando, the Montenegrin big man averaged 5.4 possessions per game as the roll-man in pick-and-roll actions. After a mid-season trade to Chicago, that number rose to 5.7 possessions per game—the most in the NBA. Along with Zach Lavine, whose 41.9% clip from 3 was complemented by the 2nd most makes and attempts (4.5 FGM on 7.1 FGA) within 5ft of the basket across all guards, Vucevic represents a key component in one of the most lethal pick-and-roll duos in the league.

![Figure 9](/assets/journalism/nba_clustering/figure-09.png)

For Cleveland and Sacramento, the mantra is the same—create enough space for Collin Sexton or De’Aaron Fox to attack the goal, then punish the rim if the defense focuses on those guards. For the Kings, actions ending with a De’Aaron Fox drive are favorable, but dump-offs to Richaun Holmes as the roll-man may be even moreso. With the help of a pet “push shot,” Holmes is one of the NBA’s most efficient finishers at the rim, converting at a hyper-efficient clip of 72.1% from the field within 5 feet. Specifically, Holmes led all players with at least 3 attempts as the roll-man in these actions in field goal percentage, at a similarly staggering 64.2%—6.4% higher than second place.

![Figure 10](/assets/journalism/nba_clustering/figure-10.png)

### The One (Two) (Three?) Man Shows

![Figure 11](/assets/journalism/nba_clustering/figure-11.png)

![Figure 12](/assets/journalism/nba_clustering/figure-12.png)

![Figure 13](/assets/journalism/nba_clustering/figure-13.png)

![Figure 14](/assets/journalism/nba_clustering/figure-14.png)

![Figure 15](/assets/journalism/nba_clustering/figure-15.png)

Jaylen Brown, Jayson Tatum. Dame Lillard, CJ McCollum. Kawhi Leonard, Paul George. Kevin Durant, James Harden… and Kyrie Irving? Damn. Almost all of these teams are dominated by superstar duos—or trios, in Brooklyn’s case—giving way to high-ISO style offenses. After all, with talent like that, why put the ball in the hands of anyone else?

![Figure 16](/assets/journalism/nba_clustering/figure-16.png)

The Nets take that ideology to the extreme. With 6’8” Jeff Green as the starting center, there’s very little by way of post-offense or pick-and-roll actions. Instead, the ball goes into one of 3 sets of hands—Durant, Harden, or Irving’s. Harden led the league with 8.0 isolation possessions, Irving in 12th with 4.3, and Durant 16th with 3.3 possessions per game. The Nets were the only team in basketball with 3 players in the top-16 of isolation possessions—truly, a staggering statistic. It worked like a charm too. The three superstars generated points per iso possession in the 88th, 90th, and 94th percentiles.

If shown these charts in 2019 (or, really, any year since 2014), the subsequent questions would probably follow in the lines of: wait, what the heck are the Knicks doing here?

As part of a career resurgence in the Big Apple, where he was named an All-Star, to the All-NBA Second Team, and the NBA’s Most Improved Player, Julius Randle also became one of the league’s most voluminous players out of isolation, where he ranked 3rd among all players with 5.5 isolation possessions per game. Despite a career high mark of 41.1% from behind the arc, however, Randle’s output in these sets was tanked by poor efficiency on high volume coming from just inside it—a 41.5% clip in the mid-range ranked 5th worst among all shooters with at least 4 attempts from the range.

![Figure 17](/assets/journalism/nba_clustering/figure-17.png)

With the obvious sample size warning in place, it’s also worth noting that the Knicks received efficient isolation production from 3 of its guards—Austin Rivers (prior to a mid-season trade), Alec Burks, and Derrick Rose (following a mid-season trade). In his Knicks stint, Rivers generated 1.42 points per ISO possession—tops in the NBA—in 1.2 such possessions per game, while Burks generated 1.31 points per his 0.7 possessions per game.

![Figure 18](/assets/journalism/nba_clustering/figure-18.png)

### The Runners

![Figure 19](/assets/journalism/nba_clustering/figure-19.png)

![Figure 20](/assets/journalism/nba_clustering/figure-20.png)

![Figure 21](/assets/journalism/nba_clustering/figure-21.png)

![Figure 22](/assets/journalism/nba_clustering/figure-22.png)

Really, this group is intriguing for two reasons: Giannis Antetokounmpo and Russell Westbrook. The two led the league in transition possessions and finished [#1](https://www.bruinsportsanalytics.com/blog/hashtags/1) and [#3](https://www.bruinsportsanalytics.com/blog/hashtags/3), respectively, in field goals made in transition. The logic for Antetokounmpo’s place on this list is rather apparent—simply put, there isn’t much any defender can do about a 6’11” forward with a 7’3” wingspan barreling toward the rim at full force. A 6’3” guard like Westbrook, on the other hand, presents an enigma.

![Figure 23](/assets/journalism/nba_clustering/figure-23.png)

Despite standing a full 8 inches shorter than Antetokounmpo, Westbrook’s mentality involves an all-out assault on the rim. Though his high-flying days in Oklahoma City are a thing of the past, Westbrook had never been more effective as a finisher within 3 feet of the rim, equalling a career-high at a 65.0% clip around the basket. Still, Westbrook’s points per possession on transition plays was just 0.94—the 20th percentile among all qualified players. The issue? Decision-making. Westbrook turned the ball over on nearly 20% of his transition attacks—far and away, the highest rate in basketball.

![Figure 24](/assets/journalism/nba_clustering/figure-24.png)

### The Post

![Figure 25](/assets/journalism/nba_clustering/figure-25.png)

![Figure 26](/assets/journalism/nba_clustering/figure-26.png)

![Figure 27](/assets/journalism/nba_clustering/figure-27.png)

Joel Embiid, Nikola Jokic, and Anthony Davis operated 12.3, 9.3, and 9.2 touches per game respectively, coming in at [#1](https://www.bruinsportsanalytics.com/blog/hashtags/1), [#3](https://www.bruinsportsanalytics.com/blog/hashtags/3), and [#4](https://www.bruinsportsanalytics.com/blog/hashtags/4) across the league in the metric. Jokic’s unprecedented playmaking as a center makes him especially lethal from these sets, as he averaged 1.1 assists from the post, tied for the highest in the league. Anthony Davis, whose post-touches are frequently countered with hard double-teams by the defense, finished 6th with 0.8 post assists per game.

![Figure 28](/assets/journalism/nba_clustering/figure-28.png)

Embiid’s approach differed from the other two. From the post, Embiid took the shot himself instead of passing 5.2 times per game—the most in the league. He got to the line 3.0 times per game from these looks and scored 8.6 points by himself—both, similarly, the most in the league. Herein lies the issue with the much-maligned fit between Embiid and his co-star, Ben Simmons. As a team, the 76ers cut on a league-low 4.9% of their plays. Denver, by contrast, cut at the 3rd-highest rate in the NBA at nearly 9.0%. Simmons was a symptom of that problem, cutting on just 12.2% of plays. With his refusal to move without the ball combined with the well-documented lack of an outside shot, Simmons provided nearly no complementary value whenever the 76ers ran Embiid’s most efficient play—the post set. The lack of synergy came to a head as the 76ers were eliminated from the playoffs, and remains an ongoing battle as Philadelphia mulls the future of its former [#1](https://www.bruinsportsanalytics.com/blog/hashtags/1) pick.

![Figure 29](/assets/journalism/nba_clustering/figure-29.png)

### Spot-Ups

![Figure 30](/assets/journalism/nba_clustering/figure-30.png)

![Figure 31](/assets/journalism/nba_clustering/figure-31.png)

![Figure 32](/assets/journalism/nba_clustering/figure-32.png)

![Figure 33](/assets/journalism/nba_clustering/figure-33.png)

![Figure 34](/assets/journalism/nba_clustering/figure-34.png)

![Figure 35](/assets/journalism/nba_clustering/figure-35.png)

![Figure 36](/assets/journalism/nba_clustering/figure-36.png)

Minnesota’s high spot-up frequency is due in part to shooting guard Malik Beasley, who was 8th in spot-up field goals attempted with 4.6 per game. Unlike the 7 players ahead of him, however, Beasley’s efficiency on these looks sets him apart. Across his attempts, he was able to create 1.30 PPP on 67 eFG%, placing him near the 95th percentile among all qualified shooters.

![Figure 37](/assets/journalism/nba_clustering/figure-37.png)

The heightened efficiency stems from Beasley’s propensity to pull—and hit—from behind the arc. His 8.7 attempts from deep were 7th-most, his 3.5 makes the 5th-most. As a quick-triggered sharpshooter, Beasley took advantage of the gravity created by the already-potent group of offensive weapons, from Karl-Anthony Towns, Anthony Edwards, to the distribution of Ricky Rubio, in Minnesota.

In the video, after the initial failed drive by Josh Okogie, spacing for the Timberwolves is a mess. As Naz Reid catches the ball and begins his drive, Okogie and McDaniels are bunched together to the left, essentially neutralized by OG Anunoby (Raptors [#5](https://www.bruinsportsanalytics.com/blog/hashtags/5)), while Beasley and Jordan McLaughlin stand together at the top of the key. However, Kyle Lowry (#7) has failed to rotate to the top of the key, leaving Terence Davis (#0) as the only weak-side defender. Beasley, who has had his hands up calling for a pass the entire time, senses this, and races into the weak-side corner. Davis must now commit, either to McLaughlin at the top, or to Beasley to the corner. Davis actually chooses the correct option, moving toward Beasley as Reid fires the pass over to him, but he has moved far enough in the corner to be unbothered by Davis’s defense. After a quick stop and set of the feet, Beasley nails the open look—a testament to his shot-making ability, even on the move. It’s a very busted play, but Beasley’s knack for finding space and warping the defense with the threat of his shot is on full display.

### Pick, Roll, Shoot

![Figure 38](/assets/journalism/nba_clustering/figure-38.png)

![Figure 39](/assets/journalism/nba_clustering/figure-39.png)

![Figure 40](/assets/journalism/nba_clustering/figure-40.png)

![Figure 41](/assets/journalism/nba_clustering/figure-41.png)

Some of the easiest offense in basketball comes from an efficient pick-and-roll that bends the defense, breaks its coverage, and creates mismatches across the floor. All these teams employ eagle-eyed floor generals—Ja Morant, Jimmy Butler, and Chris Paul—paired with roll-happy big men in Jonas Valanciunas, Bam Adebayo, and DeAndre Ayton, allowing their offenses to flow as such.

![Figure 42](/assets/journalism/nba_clustering/figure-42.png)

San Antonio, though, might have the most unique chart of any team here. Despite the high spot-up frequency, the Spurs shot less 3-pointers than anyone else in the league. They shot from the midrange, upsetting the NBA’s general trend behind the arc (and every cell of Daryl Morey’s body), more than anyone else in the league. The culprits: DeMar DeRozan, Dejounte Murray, and a half season of LaMarcus Aldridge. Aldridge, in particular, is a microcosm of the Spurs’ philosophy. Taking the 2nd most possessions as the roller in pick-and-rolls at 5.7 per game, Aldridge often popped rather than rolled, spotting up in the midrange. Even in the twilight of his career, Aldridge remained as efficient as ever from his favorite spot, nailing 51.2% of his looks.

To help quantify the success of different team play styles, we visualized the correlation between a team’s salary cap and their offensive rating, and displayed each team’s play archetype. While there are many factors involved, isolation offenses seem to outperform the expected rating for their salary caps. The other styles are relatively spread out, suggesting that a range of play styles have potential to be successful.

![Figure 43](/assets/journalism/nba_clustering/figure-43.png)

We also created another set of star graphs which focused on shot selection and ball/player movement rather than play type.

### Slow Ball/Player Movement

![Figure 44](/assets/journalism/nba_clustering/figure-44.png)

![Figure 45](/assets/journalism/nba_clustering/figure-45.png)

![Figure 46](/assets/journalism/nba_clustering/figure-46.png)

![Figure 47](/assets/journalism/nba_clustering/figure-47.png)

![Figure 48](/assets/journalism/nba_clustering/figure-48.png)

These teams are characterized by long touches and slow player movement, they rely on a combination of one/two man plays like isolation or pnr basketball to create offense. Their offenses are centered around stars like Luka Doncic, Trae Young, or Damian Lilliard who slow down the offense and create plays centered around them.

### Slow Player, Fast Ball Movement

![Figure 49](/assets/journalism/nba_clustering/figure-49.png)

![Figure 50](/assets/journalism/nba_clustering/figure-50.png)

![Figure 51](/assets/journalism/nba_clustering/figure-51.png)

![Figure 52](/assets/journalism/nba_clustering/figure-52.png)

These teams are characterized by the combination of slow player movement and fast passing/touches. The objective for these teams is to get their big stars of LeBron, AD, Embiid or Jokic into the paint with a combination of post ups, pick-and-rolls, and screens, i.e. plays that create looks through ball movement and size rather than player speed.

### Fast-Pace/3's

![Figure 53](/assets/journalism/nba_clustering/figure-53.png)

![Figure 54](/assets/journalism/nba_clustering/figure-54.png)

![Figure 55](/assets/journalism/nba_clustering/figure-55.png)

![Figure 56](/assets/journalism/nba_clustering/figure-56.png)

![Figure 57](/assets/journalism/nba_clustering/figure-57.png)

![Figure 58](/assets/journalism/nba_clustering/figure-58.png)

These teams are built around high-pace basketball and three point shooting. To get good looks these teams use lots of ball movement, rotations and screens, while also pushing the pace on transition to take advantage of the displaced defense. These teams generally have multiple threats — the Jazz have Mitchell, Ingles, Clarkson, etc. who are all dangerous shooters, the Heat have Butler, Herro, Lowry and Oladipo, the Hornets have Hayward, Ball, Bridges — so these teams don’t need to slow the offense down for a couple guys.

### Slow-Pace/3's

![Figure 59](/assets/journalism/nba_clustering/figure-59.png)

![Figure 60](/assets/journalism/nba_clustering/figure-60.png)

![Figure 61](/assets/journalism/nba_clustering/figure-61.png)

The Nets have Durant, Irving, and Harden, who are all generally ball handlers/isolation players. Thus, plays generally start around them and role players generally have less involvement in the offense, leading to slower offense and high three point frequencies from their stars. The Celtics and Rockets are also isolation offenses focused, with the Celtics focusing their offense around their young superstar Jayson Tatum.

### High-Paced Paint Specialists

![Figure 62](/assets/journalism/nba_clustering/figure-62.png)

![Figure 63](/assets/journalism/nba_clustering/figure-63.png)

![Figure 64](/assets/journalism/nba_clustering/figure-64.png)

![Figure 65](/assets/journalism/nba_clustering/figure-65.png)

![Figure 66](/assets/journalism/nba_clustering/figure-66.png)

Forwards and centers like Zion Williamson, Jerami Grant, or Karl-Anthony Towns are lead-scorers on these teams. They focus on getting looks near the rim through transition, fast passing, cuts, etc.

### Midrange Specialists

![Figure 67](/assets/journalism/nba_clustering/figure-67.png)

![Figure 68](/assets/journalism/nba_clustering/figure-68.png)

![Figure 69](/assets/journalism/nba_clustering/figure-69.png)

![Figure 70](/assets/journalism/nba_clustering/figure-70.png)

![Figure 71](/assets/journalism/nba_clustering/figure-71.png)

![Figure 72](/assets/journalism/nba_clustering/figure-72.png)

![Figure 73](/assets/journalism/nba_clustering/figure-73.png)

Rejecting the idea that three point shooting is the only way to winning basketball, these teams generally shoot the highest volume midrange and lowest volume 3 point shots in the league. Chris Paul weaves through the offense for his signature right elbow, highly efficient midrange shot. His teammate Devin Booker, Spurs’ DeMar DeRozan, and the Bucks’ Khris Middleton are also elite midrange shooters. The larger amount of windows compared to three makes this a harder shot to guard, causing it to remain an effective weapon.

![Figure 74](/assets/journalism/nba_clustering/figure-74.png)

Contrary to modern basketball philosophies that three point volume and pace are the essentials to winning basketball, slow offenses and mid range focused teams have been very efficient. Meanwhile, three point focused teams are performing near expected for their salary caps. The fast player, slow ball movement offenses are generally underperforming, suggesting ball movement holds precedence over player movement.

Our initial visualizations and clusters of the 30 NBA teams’ play and action types reveals the prevalence—and dominance—of teams that predominantly run isolation sets. The Nets, Trail Blazers, and Clippers, all of which fell into the bucket of iso-heavy teams, had the three highest offensive ratings of all teams in the league last year. This trend, of course, stems from the fact that these teams are built around superstars, and lends credence to the notion that the NBA is evolving into a “superstar’s league”. With a few exceptions, the formula for an elite offense in the modern NBA seems to revolve around the presence of two superstars capable of shouldering a full offensive load, with the rest of the team built to fill the gaps around them. The second clustering of offensive styles then reveals the other trend that has taken the league by storm—the 3-point revolution. The “Fast Pace/3’s” category features some younger teams that race around the court and fire three pointers. In particular, Oklahoma City and Houston—two teams that have undergone complete teardowns and are the closest to being “built from scratch”—find themselves on this list. As players in high school, AAU, and college continue to gravitate toward the 3-point line, it stands to reason that these two criteria will remain the formula to building a championship-level offense.

### Sources

[*https://www.nba.com/stats/*](https://www.google.com/url?q=https://www.nba.com/stats/&sa=D&source=editors&ust=1639432701608000&usg=AOvVaw0N-ZgCe7ovuSC7b5ifzqED) *,* [*https://basketball-reference.com/*](https://basketball-reference.com/)
