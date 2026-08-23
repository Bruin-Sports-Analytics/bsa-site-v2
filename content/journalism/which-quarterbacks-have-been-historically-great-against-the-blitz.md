## Introduction

In the modern NFL, play-calling success on both sides of the ball is often decided within seconds of the ball being snapped. For a defensive coordinator, the blitz is the ultimate gamble. Bringing an extra pass rusher offers a chance to blow up the play early, but risks leaving a man open, leading to a chunk play. It’s the quarterback’s job to identify and dissect the blitz, punishing the defense before the pocket collapses. As NFL defenses become more complex, the ability to remain efficient while under pressure has become a crucial trait of elite quarterback talent.

This article examines quarterback efficiency and performance against the blitz from 2016 through 2024 to determine which players truly thrive when facing a blitz. By analyzing QB processing efficiency metrics, decision-making archetypes, sack rate statistics, and offensive line scores, we will try to determine which quarterbacks are actually finding success against the blitz.

## Key Variables & Metrics

| Metric | Description |
| --- | --- |
| **Blitz** | For our analysis, we defined the blitz as any plays where the number of pass rushers was greater than 4 |
| **Expected Points Added (EPA)** | Measures the value of a play by comparing the expected points before and after the snap |
| **Success Rate** | The percentage of plays that result in a positive EPA, measuring quarterback consistency |
| **Simulated Pressure** | Plays in which there are more than 7 defenders in the box pre-snap, but the defense only brings a 4-man rush |
| **Completion Percentage over Expected (CPoE)** | Measures accuracy and catchability relative to the difficulty of the throw |

### Data Foundations and Scope

Our data was extracted from the nflverse dataset, specifically the participation and play-by-play data from the 2016-17 through 2024-25. This period spans 9 seasons and includes a sample size of over 430,000 plays.

To isolate quarterback-focused plays, the raw data was filtered exclusively on dropbacks, which include pass attempts, QB scrambles, and sacks. We also filtered this quarterback data to include only those who have faced at least 150 blitzed dropbacks, to ensure stable metrics and filter out small-sample variance from our analysis.

## The QB Processing Efficiency Score

The first lens through which we evaluated quarterback performance is the QB Processing Efficiency Score. By calculating a weighted average of total EPA/play and Success Rate against more than 4 pass rushers, we can measure a quarterback’s value per dropback in high-pressure situations. This rewards quarterbacks who not only create big plays (EPA), but do so consistently (Success Rate) while accounting for the value of scrambles and the cost of taking sacks.

![Figure 1: QB Processing Efficiency vs. The Blitz (2016 - 2024)](/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-01.png)

Figure 1 highlights the top and bottom 10 quarterbacks in processing efficiency versus the blitz.

At the top, we see established elite processors, like Brock Purdy, Patrick Mahomes, and Drew Brees. All the players shown in green are significantly better than league average at identifying and taking advantage of the defense when they bring an extra man. These quarterbacks all ranked in the top 10 for high EPA/play and elite Success Rate, proving they consistently made the right reads to move the chains and punish the defense.

Jayden Daniels being in the top 10 is surprising. While he has a smaller sample size of games played (17*), his high placement suggests he is already performing at an elite level in terms of pre-snap recognition and decision-making and hasn’t been affected much by the “speed” of the game at the NFL level.

**Our data only covers up to the 2024-25 season, so Daniels’ evaluation here is based on his rookie season.*

On the other hand, the red section represents quarterbacks who have historically struggled to succeed against the blitz. Guys like Blaine Gabbert, Zach Wilson, and (unfortunately) UCLA legend Josh Rosen demonstrate the catastrophic cost of slow processing speed. Their relatively poor EPA/play suggests blitzes were identified too late, leading to drive-altering consequences such as sacks or turnovers.

Blaine Gabbert’s inclusion in the bottom 10 highlights a core idea: mental processing speed outweighs physical talent. Entering the league, Gabbert’s athleticism, particularly his huge arm, played a large role in his getting drafted in the top 10. Despite his insane physical traits, he was still the second-most inefficient quarterback against the blitz, highlighting how important an efficient internal clock is, regardless of a player’s natural physical gifts.

While this model highlights elite talent at beating the blitz, it is important to remember that this metric is not a catch-all for overall quarterback quality but rather a measure of this specific mental skill in isolation. Ultimately, this shows who “ *wins* ” the snap, but not *how.* To understand the strategic choices behind these statistics, we have to analyze player behavior and decision-making.

## The Deep-Ball vs. Checkdown Index

To get an idea of the decision-making profiles of each quarterback, we analyzed the relationship between Average Target Depth (Air Yards) and Completion Percentage Over Expected (CPOE). Figure 2 (below) is a “Decision Strategy Matrix,” divided into four quadrants by dashed lines representing the league median for each metric. This creates a baseline, allowing us to categorize quarterbacks into four distinct archetypes based on how they choose to distribute the ball under pressure.

![Figure 2: Processing Archetypes vs. the Blitz (2016 - 2024)](/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-02.png)

### i. High CPOE and High Air Yards

In the top-right quadrant, labeled in green, lies arguably the most dangerous quarterback archetype. These QBs maintain top-tier accuracy while also wielding rocket arms, always threatening huge impact plays downfield. Players like Russell Wilson, Derek Carr, and Jayden Daniels all possess the rare mental processing speed to identify a deep-threat opportunity and the physical gifts and mechanics to execute the throw in a collapsing pocket.

### ii. High CPOE and Low Air Yards

The top-left quadrant, highlighted in blue, represents the players who emphasize shorter passes. Their strategies focus on maximizing systematic efficiency rather than hunting the huge chunk plays. Guys like Patrick Mahomes, Brock Purdy, and Drew Brees define this category. By targeting receivers closer to the line of scrimmage, they prioritize high-probability completions and minimize sack risk, keeping the team moving downfield. It’s important to understand that these checkdowns aren’t due to panic; instead, the quarterback identifies areas of the field left open due to the blitz and executes accordingly.

### iii.  Low CPOE and High Air Yards

The bottom-right quadrant, colored in orange, illustrates players who rely on their deep ball when facing the blitz, but falter in accuracy. This metric shows that players like Drew Lock, Mason Rudolph, and Tyrod Taylor respond to the blitz with aggression. However, while they’re willing to look deep downfield, their negative CPOE suggests that the “speed” of the blitz often forces them into off-platform or hurried throws, creating high-risk, high-reward scenarios where big play potential is always overshadowed by turnover or sack risk.

### iv. Low CPOE and Low Air Yards

The bottom-left quadrant represents the least efficient passing archetype. Players like Josh Rosen and Jay Cutler occupy this quadrant, representing passers who are throwing short, indicating they are trying to find the open read, but are doing so with poor accuracy. This suggests that the blitz is successfully disrupting their mechanics and decision-making, forcing quick incompletions that fail to move the ball.

However, players falling into this quadrant do not necessarily imply a lack of talent. Notable players such as Andy Dalton and Bo Nix also fall into this category. For guys like these, who’ve had their fair share of success in the NFL, this quadrant represents a strategic prioritization on sack avoidance over completion probability. Both Nix and Dalton have been historically quite good at avoiding sacks, but part of the reason they’ve had such success is their willingness to “throw the ball away” when they feel the blitz has won the snap. While this strategy protects the team from negative plays, it also results in a drop in CPOE. In this context, this quadrant is less a sign of poor or inefficient passing and more a sign that a quarterback places a higher priority on ball safety under pressure.

The Deep-Ball vs. Checkdown Index demonstrates that there is no single “correct” method for beating the blitz. While quarterbacks may have different preferences or styles of play, this matrix emphasizes positive CPOE as the floor for successful blitz processing.

## Pressure vs. Sack Rate

Metrics like **Success Rate** and **CPOE** highlight a quarterback’s ability to maximize positive outcomes, but this only tells half the story. When analyzing efficiency against the blitz as a whole, the ability to avoid sacks against pressure is arguably more important than success punishing the blitz. Throwing the ball away when the pocket collapses costs a down, but getting sacked loses both yards and the down. A 2nd-and-10 after an incompletion is much more manageable than a 2nd-and-17. Loss of yardage typically shrinks the playbook, leading to fewer options and more drive-ending plays.

Figure 3 (below) plots **blitz pressure rate** against **blitz sack rate** . The y-axis has been inverted so that players with lower sack rates appear higher up in the plot. The blue and red colors represent the players’ sack rate z-scores, i.e., how many standard deviations their sack rate was from the mean.

![Figure 3: Blitz Pressure vs. Sack Rate (2016 - 2024)](/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-03.png)

In the top left corner of the plot, we see NFL legends like Tom Brady, Ben Roethlisberger, and Drew Brees. Their elite pre-snap recognition and internal clocks allowed them to get the ball out quickly and efficiently, protecting the team’s field position and mitigating the risk of a loss of yardage.

Moving to the top right, we see guys like Patrick Mahomes. These quarterbacks face significantly higher pressure rates, but are still able to maintain sack rates comparable to the greats. Not only does this display a high level of reactive processing, but it also highlights their ability to do so at a high frequency, allowing them to ensure that even if the offensive line gets beaten, the defense isn’t able to record the sack.

Bo Nix appears here, too. As highlighted earlier, his CPOE against the blitz ranked below the league average, which we attributed to his low sack rate. His elite sack rate, despite him facing an extremely high pressure rate, emphasizes that his low CPOE is likely just a byproduct of minimizing the damage done by a successful blitz, reinforcing our argument from earlier.

The bottom half of the plot shows the opposite. Despite facing pressure rates similar to or even lower than Mahomes, guys like Ryan Tannehill, Deshaun Watson, and Justin Fields display a slower reaction time to the blitz, causing them to take more sacks. Whether they’re taking too long to find the open man or just panicking when the pocket breaks down, their inability to get the ball out against the blitz hurts the offensive unit as a whole, forcing them into tougher spots.

From a quarterback’s standpoint, managing a blitz relies on the quarterback recognizing the additional pass rusher and adjusting accordingly so they can keep the ball and themselves out of harm's way. However, an extra man on the line of scrimmage doesn’t always mean the blitz is coming.

## The Simulation Pressure Grade

As offenses become more complex and quarterbacks continue to get better at identifying and punishing the blitz, defensive coordinators have adapted accordingly, with more pre-snap adjustments and movement. The **Simulated Pressure** look is defined by defenses showing a heavy front of defenders in the box pre-snap, before dropping off into a standard four-man rush. Unlike a typical blitz, which tests a quarterback’s internal clock, the simulated blitz tests their ability to identify the rush pre-snap and then recalibrate after the play starts.

To identify which passers best navigate these disguised looks, our metric analyzes each quarterback’s **Success Rate** against simulated pressure. We selected to use this metric over EPA/play to minimize the impact of individual high EPA plays, such as a 90-yard touchdown, and isolate play-to-play consistency against simulated pressure.

Here, we also set a minimum of 150 plays with six or more defenders in the box pre-snap. Labeled below are the top and bottom 10% from the population of qualified quarterbacks.

![Figure 4: Success Rate vs. Simulated Pressure (2016 - 2024)](/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-04.png)

![Figure 5: Top 10% of QBs vs. Simulated Pressure](/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-05.png)

![Figure 6: Bottom 10% of QBs vs. Simulated Pressure](/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-06.png)

Most of the players in the top 10 don’t come as much of a surprise. MVPs like Mahomes, Jackson, and Allen, along with guys that keep showing up, like Purdy and Brees, top the list. These quarterbacks are all elite pre-snap processors, but also understand that a defense isn’t bringing the house just because they show blitz. Instead of rushing to find the first checkdown after the snap, they take the extra time provided by the 4-man rush to find windows downfield.

Interestingly, Drake Maye lies at the top of the list, leading all qualified quarterbacks with a success rate against simulated pressure of 55.6%. While the sample size is small (205 dropbacks), the statistic is staggering. With the modern NFL adopting the new simulated pressure meta, being able to detect when a pass rusher is bluffing has never been more important. Quarterbacks now see more disguised looks than ever before, and a rookie being able to show such poise against these complex play calls serves as a testament to his talent and a hint at what is to come.

*Note: Again, our data only covers up to the 2024-25 NFL season, so it did not cover Maye’s Super Bowl run and MVP runner-up campaign this season. His success this year suggests his rookie-year efficiency wasn’t a fluke, but an early indication of elite processing talent.*

Conversely, players like DeShone Kizer, Tim Boyle, and (also, unfortunately)UCLA legend Dorian-Thompson Robinson make up the bottom 10%. For these quarterbacks, the mere threat of a blitz throws off their timing, forcing them to rush through their progressions and force throws. Despite their O-line having the numbers advantage, their low success rates against the blitz indicate that the initial pressure affects their ability to get the ball out quickly.

Overall, the simulated pressure data emphasizes the idea that success against deception is a mental skill. The ability to read a blitz pre-snap and adjust after the snap plays a crucial role in a quarterback’s overall success against the blitz. As defensive coordinators continue to prioritize disguised looks and simulated pressure, the ability to maintain a consistent internal clock while also being aware of what is going on after the play begins will likely become a good indicator of a quarterback’s ability to punish the defensive gamble.

## Results

The ultimate test for an NFL quarterback is their ability to execute, even when facing pressure and the risk of getting hit. Our goal in this analysis was to analyze quarterback play under blitz pressure. By focusing specifically on dropbacks with more than 4 pass rushers, we were able to more closely examine each player’s ability to diagnose, react, and perform when facing an extra pass rusher.

To rank each qualified passer, we created the **Quarterback Blitz Grade** metric, defined by the following equation:

![Figure 7](/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-07.png)

Where:

- ***Z***  ***Eff***  **(QB Processing Efficiency Score)**  = Combined Z-score accounting for  EPA/play and Success Rate against the blitz
- ***Z***  ***SA***  **(Sack Avoidance Grade)**  = Combined Z-score accounting for Blitz Pressure Rate and Blitz Sack Rate
- ***Z***  ***CPOE***  **(CPOE)**   = Standardized Completion Percentage Over Expected when facing a blitz
- ***Z***  ***Sim***  **(Blitz Recognition)** = Standardized Simulated Pressure Grade

In this model, we placed the most weight (40%) on Processing Efficiency ( *Z* *Eff* ), as ideally, teams would prefer their quarterbacks to thrive against the blitz, not just survive. However, survival (Sack Avoidance) is still heavily weighted (30%), as avoiding sacks is crucial to mitigating damage done by a blitz. Finally, Completion Over Expected ( *Z* *CPOE* ) and Blitz Recognition ( *Z* *Sim* ) are weighted at 20% and 10%, respectively. As shown by quarterbacks like Bo Nix, CPOE isn’t always the primary driver of success. Simulated pressure is slowly becoming an integral part of defensive schemes, and while it plays a critical part in pre-snap reads, we weighted it as such because it represents a mental challenge rather than a physical one. Even though the defense shows a blitz, they ultimately drop back into a standard 4-man rush, meaning the play does not actually result in a blitz. Thus, by weighting it lower, the model acknowledges the importance of the mental part of blitz processing, without allowing for those plays to overshadow actual performance against an extra pass rusher.

Based on the final calculated grade, the following 10 quarterbacks emerged as the best blitz processors of the last 9 seasons:

![Figure 7: Top 10 best blitz processors between 2016 - 2024](/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-08.png)

At this point, a lot of these names are quite familiar, having topped one or multiple of the metrics we’ve analyzed, so it comes as no surprise to see Mahomes, Brees, and Purdy at the top. Other notable finalists include Phillip Rivers, Ben Roethlisberger, and Tom Brady.

Two interesting data points appear in the inclusion of Sam Bradford and Jayden Daniels. Both players have relatively small sample sizes (~200 dropbacks), but while one retired back in 2019, the other has (at the time our data was collected) only one full season under his belt. Despite never having a winning season in his career, Bradford’s appearance highlights his high-floor and consistently efficient performance when pressured. On the other hand, a rookie like Daniels cracking the top 10 in his first year is staggering. It suggests he came into the league already equipped with the blitz-beating instincts needed to punish NFL-level defenses, and still has a whole career ahead of him to continue to refine and improve his abilities.

## Limitations

Our analysis attempts to create a comprehensive model on which to evaluate overall quarterback performance against the blitz. However, several limitations should be considered when interpreting the results of this study.

Firstly, while we used Success Rate to balance our QB Processing Efficiency Score, the inclusion of total EPA/play inherently introduces some volatility, as the metric can be largely affected by outlier plays, skewing the overall average.

Additionally, a threshold of 150+ blitzed dropbacks was placed on all of our metrics, ensuring statistical significance. Even still, this is a small sample size relative to some of the veteran quarterbacks in our analysis. Thus, it is important to acknowledge that for these quarterbacks, our analysis doesn’t cover a complete career, but rather a “snapshot” of their performance.

Furthermore, this model does not account for environmental factors surrounding the quarterbacks, such as offensive line performance, offensive scheme and personnel, nor opposing defensive line strength and defensive coordinators, which all do impact a quarterback’s exposure to and ability to navigate the blitz.

Finally, our dataset only spans the 2016-17 to 2024-25 NFL seasons. Because of this, many quarterbacks’ careers are not completely accounted for in our data. Thus, although our rankings are statistically valid, they favor career coverage within the available nine-year window covered in the nflverse data.

## Conclusion

Through our models and analysis, we were able to identify a definitive answer to our research question: Patrick Mahomes is far and away the best quarterback when the defense brings the blitz. While many of the quarterbacks identified are NFL legends, the study also highlighted a couple of surprising candidates, such as Purdy and Daniels. Ultimately, while Mahomes is the gold standard when it comes to beating the blitz, the emergence of new rookies suggests the league won’t have to wait too long to see if the next generation can give him a run for his money.

## Sources

- NFL play-by-play dataset: [https://github.com/nflverse/nflverse-data/releases/tag/pbp](https://github.com/nflverse/nflverse-data/releases/tag/pbp)
- NFL play-by-play participation dataset: [https://github.com/nflverse/nflverse-data/releases/tag/pbp_participation](https://github.com/nflverse/nflverse-data/releases/tag/pbp_participation)
