### By: Andrew Weiner and Eric Zhou

### Introduction:

The air within Cleveland’s Richfield Coliseum was thick with anticipation, and the deafening roar of the crowd echoed like thunder as the shot clock ticked away with mere seconds left in the game. The Chicago Bulls were trailing by one point to the heavily favored Cleveland Cavaliers in the final second of the final game in their 1989 NBA playoff series. It was either score or go home for the Bulls. Yet, amidst the chaos of competition, Michael Jordan remained a solitary figure, hanging in the air, ball-in-hand and poised for greatness. With the weight of the entire season bearing down upon Jordan’s shoulders, he released the ball, and for an eternal second, the world held its breath.

In a moment that would be immortalized in the annals of basketball history as “The Shot,” Jordan secured the Chicago Bulls’ victory in the series right at the buzzer. This single shot has had a huge impact on Jordan’s legacy today, epitomizing his ability to make shots when it matters most, his “clutchness.” Rising to occasions and performing under pressure is a highly regarded characteristic for NBA players when determining greatness, but clutchness is hard to quantify and one of the most elusive stats in sports.

For instance, Jordan is widely touted as one of the most clutch players in NBA history, delivering in the most critical moments. His GOAT debate counterpart, Lebron James, however, is often ridiculed for lacking the “clutch gene,” having lost 6 NBA finals. On the contrary, some say Lebron *is* a clutch player, and “myths” regarding whether a player is or is not clutch are regularly “debunked.” So what does it really mean for a player to be clutch? Who turns into a diamond under pressure while others crack?

### Methods:

To answer the question of who is the most clutch player this regular season, we took a look at ESPN’s win probability data for each game sourced from HoopR, an R package for working with play by play data. Win probability is a good measure of clutch impact, because it captures the importance of each play. For example, a game winning play such as Max Strus’s amazing 59 foot buzzer beater against the mavs can swing the win probability by as much as 92%, while making the same 3 pointer in the middle of the first quarter might only swing it by a percent or 2. We aim to find out which players rise to the occasion and produce these game defining plays when the lights are the brightest and which players shrink and choke in these moments.

We used the NBA’s definition of a clutch play as a play within the last 5 minutes of the 4th quarter or overtime where the score was within 5 points. To get the most clutch plays, we further filtered the data and found plays that affected the win probability by more than 5%, since making a shot with 4:59 left is not as clutch as making a shot with 5 seconds left. We used the win probability swing of each play to determine how important it is. We also filtered out extraneous plays from the play by play data such as timeouts and challenges that didn’t affect the win probability. We then aggregated the win probability data by player to see whose clutch plays affected the win probability the most, both positively and negatively. The sum of the win probabilities of all of a player’s

clutch plays is known as Win Probability Added (WPA).

![Figure 1](/assets/journalism/nba-clutch/figure-01.png)

![Figure 2](/assets/journalism/nba-clutch/figure-02.png)

### Top 10 Players with Most Clutch Plays (both positive and negative):

| Rank | Win Prob Added | Total Clutch Plays | Positive Clutch Plays | Negative Clutch plays | Player |
| --- | --- | --- | --- | --- | --- |
| **1** | -1.965 | 122 | 45 | 77 | DeMar DeRozan |
| **2** | -3.533 | 103 | 35 | 68 | Alperen Sengun |
| **3** | 2.028 | 103 | 48 | 55 | Stephen Curry |
| **4** | -3.056 | 96 | 30 | 66 | Trae Young |
| **5** | -1.097 | 93 | 34 | 59 | Dejounte Murray |
| **6** | -2.799 | 89 | 27 | 62 | Kevin Durant |
| **7** | -2.393 | 89 | 34 | 55 | De'Aaron Fox |
| **8** | -1.705 | 88 | 29 | 59 | Paolo Banchero |
| **9** | -1.306 | 87 | 36 | 51 | Mikal Bridges |
| **10** | -0.771 | 84 | 37 | 47 | Nikola Jokic |

Average Clutch Play: -0.02148135 win probability added

### Top 10 Out of Top 50 Players with Most Clutch Plays:

|  | WPA | Plays | Player |
| --- | --- | --- | --- |
| **1** | 2.028 | 103 | Stephen Curry |
| **2** | 0.632 | 68 | LeBron James |
| **3** | -0.010 | 79 | Malik Monk |
| **4** | -0.082 | 51 | Shai Gilgeous-Alexander |
| **5** | -0.088 | 47 | Klay Thompson |
| **6** | -0.092 | 49 | Keldon Johnson |
| **7** | -0.214 | 74 | Damian Lillard |
| **8** | -0.281 | 55 | Jerami Grant |
| **9** | -0.312 | 47 | Jaylen Brown |
| **10** | -0.338 | 59 | Terry Rozier |

**Bottom 10 Players of Win Percentage Added Out of Top 50 Players with Most Clutch Plays:**

|  | WPA | Plays | Player |
| --- | --- | --- | --- |
| **1** | -3.533 | 103 | Alperen Sengun |
| **2** | -3.056 | 96 | Trae Young |
| **3** | -2.799 | 89 | Kevin Durant |
| **4** | -2.563 | 56 | Cade Cunningham |
| **5** | -2.393 | 89 | De'Aaron Fox |
| **6** | -2.383 | 58 | Jayson Tatum |
| **7** | -2.370 | 63 | Pascal Siakam |
| **8** | -2.216 | 53 | Brandon Ingram |
| **9** | -1.965 | 122 | DeMar DeRozan |
| **10** | -1.961 | 52 | Jimmy Butler |

These results reveal some interesting insights. Superstars Steph Curry, Kyrie Irving, and LeBron James are at the top of the pack with their clutch ability and performance this year. In contrast, players traditionally celebrated for their clutch abilities, such as Kevin Durant and Jimmy Butler, have been struggling in these critical moments. There are some other notable players in the least clutch category too. Trae Young and De’Aaron Fox are rising stars, and Jayson Tatum is supposedly a top 5 player, and potentially one of the faces of the league after Lebron retires.

### Most Clutch Players:

This year, the NBA has had a number of clutch moments and clutch performances, with Stephen Curry leading the way by a large margin. Looking closer into the shots he’s taken this year, they have not been easy. He hit 2 game winners this year, including a deep 3 to beat the Suns and a tough layup with 0.2 seconds left to beat the Thunder in the In-Season Tournament. His shooting splits in clutch scenarios, as reported by [NBA.com](http://NBA.com), are a blistering 50.5% from the field, 46.2% from beyond the arc, and 95.1% from the free-throw line. These figures are especially impressive given that Steph Curry is always the focal point of the defense whenever he’s on the court and even more so at the end of games.

LeBron James has also been instrumental in clutch situations, especially in an area that has historically been a challenge for him: free-throw shooting. Over his career, he has been a shaky free throw shooter, but this year, he’s won games at the free throw line against the Warriors and the Rockets.

Kyrie Irving's clutch performance this season has been equally impressive, punctuated by a memorable left-handed hook shot over Nikola Jokić at the buzzer. His shooting efficiency in clutch moments has been remarkable, with averages of 58.8% from the field, 46.7% from three-point range, and 92.9% from the free-throw line.

Despite not being stars, role players like Josh Hart, Saddiq Bey, and Max Strus have carved their own niches, demonstrating the pivotal impact of timely contributions. This season, they’ve showcased their ability to make clutch shots by being in the right place at the right time, in moments as game-changing as any high-difficulty shot from a superstar. In particular, when Saddiq Bey crashed the board, he tipped in Trey Young’s missed shot to earn a victory against the Raptors. Another example is when Josh Hart was in the right place to capitalize off a turnover to put in the game winning layup. Furthermore, Max Strus put his name into the history books with one of the craziest 59-foot buzzer beaters you will see. Through their actions, Hart, Bey, and Strus have highlighted the invaluable role that every player can have on the outcome of a game.

### Least Clutch Players:

On the flip side, stars Jayson Tatum, Trae Young, and Kevin Durant, despite their undoubted skills and contributions to their teams, have struggled to make it happen when the game is on the line.

Jayson Tatum is probably the most extreme case of a superstar not living up to his potential in the clutch. Overall, he is a very good player, but at the end of games, his approach to the game has raised questions. His overall clutch time percentages of 36.1% from the field, 33.3% from 3, and 82.5% from the line aren’t great, and his performance in the final minute of close games has been even worse. In the final minute of games, he is 2/9 from the field, with his only 2 makes being on assisted 3 pointers. At the end of games, Tatum frequently isos and puts up a contested long 2 or 3, usually going to his turnaround, pull up, or stepback. This shot selection does not play to his strengths and is part of the reason he has not been able to win games in the clutch for his team.

Kevin Durant, one of the game's most lethal scorers, has had mixed results in clutch situations this season. Despite hitting a memorable double-clutch game-winner, his overall clutch shooting splits stand at 36.3% from the field, 32.3% from three, and 83.9% from the line, which are well below his usual great efficiency.

### Conclusion:

By isolating plays that significantly altered win probability, we aimed to identify players who have thrived under pressure and those who have faltered this regular season. Notably, veteran superstars like Steph Curry, Lebron James, and Kyrie Irving headline the list of players who excel in high-pressure moments.

Conversely, despite their undeniable talents, players like Jayson Tatum, Trey Young, and Kevin Durant struggled to produce their usual dominance when the game hangs in the balance. Both Tatum’s and Durant’s low efficiency in clutch situations raise questions regarding the ability to close out games effectively.

Furthermore, role players like Josh Hart, Saddiq Bey, and Max Strus have shown clutchness transcends superstar status. Their timely contributions and ability to capitalize on the most pivotal of moments have profoundly impacted their teams’ seasons.

While clutchness remains a complex and multifaceted aspect of basketball, our analysis offers valuable insights into the players who thrive when the stakes are high. Through a combination of statistical rigor and contextual understanding, we gain a deeper appreciation of clutch performances and their enduring significance in narratives surrounding players. However, due to the small sample size of clutch plays this season, a player’s clutchness can not be completely generalized from our data alone.
