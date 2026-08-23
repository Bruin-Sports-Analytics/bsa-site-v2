College football debates once focused on the major conferences were nearly as intense as those surrounding individual team dominance. Prior to Texas and Oklahoma agreeing to join the Southeastern Conference (SEC) in July of 2021, conference realignment was no more than speculative chatter. On June 30th of 2022, UCLA and USC followed by leaving the Pac-12 and joining the Big Ten, and when Oregon and Washington did the same, along with dozens of other programs moving to various conferences, the question of whether or not certain “under matched” football teams could hang in larger conferences became all but a wait-and-see.

Most avid college football fans can vividly remember Ohio State’s Ezekiel Elliot tearing through the Oregon Ducks for 246 yards and 4 touchdowns en route to a 46-20 thrashing in the 2015 National Championship, or, more recently, Michigan’s 34-14 throttling of Washington in this past season’s championship. These being two of the most notable Pac-12 vs. Big Ten matchups over the past 10 years, it makes sense as to why many fans of the four migrating Pac-12 teams may have concerns of being overmatched in conference play.

But are these concerns justified?

I took every piece of available game data for each of these teams over the past 10 years to see just how they would match up with opposing Big Ten teams.

Next season, UCLA, Oregon, Washington, and USC will face much greater travel distances for away games than they've seen in the past decade, with each team having to travel over 1,150 miles on average per away game. UCLA will experience the biggest jump with a 313% increase in miles per game, followed by Oregon with a 193% rise, and Washington and USC with 165% and 153% increases. This added travel doesn’t bode well for these teams, as they've struggled in the past with long-distance games. Of the 32 games played where they traveled over 1,500 miles, they've won only 11 (34%).

![Figure 1](/assets/journalism/big-10-pac-12-football/figure-01.png)

So, what actually happens when these teams travel across the country? The first glaring statistic is the change in playcalling: All four teams have struggled mightily to run the ball when they have traveled longer distances. We can see each of the teams’ average rushing yards per game by distance below:

![Figure 2](/assets/journalism/big-10-pac-12-football/figure-02.png)

![Figure 3](/assets/journalism/big-10-pac-12-football/figure-03.png)

![Figure 4](/assets/journalism/big-10-pac-12-football/figure-04.png)

![Figure 5](/assets/journalism/big-10-pac-12-football/figure-05.png)

This is a direct result of offensive playcalling, as all four teams saw lowered run play percentages the further they traveled, shown below (blue: run play percentage, orange: pass play percentage):

![Figure 6](/assets/journalism/big-10-pac-12-football/figure-06.png)

![Figure 7](/assets/journalism/big-10-pac-12-football/figure-07.png)

![Figure 8](/assets/journalism/big-10-pac-12-football/figure-08.png)

![Figure 9](/assets/journalism/big-10-pac-12-football/figure-09.png)

In turn, this led to a decrease in total yards per game for all four teams. On the other side of the ball, UCLA, Oregon, and Washington all have given up more yards per game the further they travel, as shown below:

![Figure 10](/assets/journalism/big-10-pac-12-football/figure-10.png)

![Figure 11](/assets/journalism/big-10-pac-12-football/figure-11.png)

![Figure 12](/assets/journalism/big-10-pac-12-football/figure-12.png)

USC, on the other hand, saw fluctuating movement in average yards allowed per game, as seen here:

![Figure 13](/assets/journalism/big-10-pac-12-football/figure-13.png)

It is also important to look at how this added travel may—or may not— affect field goal kicking.

Over the last ten years, shown by both a linear regression model and a bar chart that compares the overall average field goal percentage with the average field goal percentage in each distance range (<500 miles, 500-1000 miles, 1000-1500 miles, 1500+ miles), we can clearly see that distance traveled has little effect on kicking performance.

![Figure 14](/assets/journalism/big-10-pac-12-football/figure-14.png)

![Figure 15](/assets/journalism/big-10-pac-12-football/figure-15.png)

So why has added distance been such a struggle for these teams? Is it weather? Is it just being overmatched? When looking at the data, contrary to some beliefs, these four teams are actually battle-tested and ready for common bad football weather conditions, such as rain and wind, which makes sense, especially for cities that experience high amounts of rain, such as Eugene (Oregon location) and Seattle (Washington location). Each of the four post similar winning percentages in the rain as they do overall in the last 10 years shown here:

![Figure 16](/assets/journalism/big-10-pac-12-football/figure-16.png)

High wind speeds also have not had too much effect at all on these teams, as the defensive metrics remain nearly the same at each wind speed. It has had a small but noticeable effect on offensive statistics however, as the four teams combined have seen slight decreases in rushing, passing, and total yards per game as wind speeds increase, as shown in the following linear regression models.

![Figure 17](/assets/journalism/big-10-pac-12-football/figure-17.png)

While some of this data may look alarming for fans of USC, UCLA, Oregon, or Washington, we must now actually look at these teams’ performances against Big Ten teams (not including the migrating Pac-12) over the past 10 years. This sample is limited, as over the last 10 years the four teams have played a combined 32 games versus Big Ten teams, 11 of which were on a neutral playing site, which arguably is not as effective in simulating Big Ten conference play where one team must travel to the other’s home site. The migrating Pac-12 teams have not found success in these games, winning only 11 of the 32 games (~34%).

Similarly to the far-distance away games, the four teams struggled to establish the same running game as they had otherwise, and a slight decrease in total offensive yards per game.

![Figure 18](/assets/journalism/big-10-pac-12-football/figure-18.png)

On the defensive side of the ball, the defense stats remained nearly the same across the board:

![Figure 19](/assets/journalism/big-10-pac-12-football/figure-19.png)

Using a heatmap, we can see the percentage increase/decrease for different key stats for the four teams versus Big Ten teams as opposed to all other games over the last 10 years.

![Figure 20](/assets/journalism/big-10-pac-12-football/figure-20.png)

As data suggests, many of the concerns regarding UCLA, USC, Washington, and Oregon’s transition into the Big Ten may have validity. That said, there are factors that can skew these results. For example, when a team is conditioned to travel short distances and play in a certain type of climate, they can be thrown off by a game farther away and played in unaccustomed weather. Also, since 11 of the games these four teams played against Big Ten games were on neutral sites, most of them bowl games, this suggests that both teams in a bowl matchup were strong, making a loss not as negatively suggestive as one may initially think. But since the move to the Big Ten will change the way teams will practice and gameplan, and when they awake, and where they eat, the probable struggles that the four newcomers will face should not be a surprise, but also should not necessarily be permanent if they learn important ways to adapt.

- [https://www.sports-reference.com/cfb/](https://www.sports-reference.com/cfb/)
- [Visual Crossing Weather API](https://www.visualcrossing.com/?gad_source=1&gclid=CjwKCAjw3P-2BhAEEiwA3yPhwEQqnhFu7SAIx9vAxQkObszS7oIIIq3naZc1iArbMKBXTh1g0b7pvhoC9EIQAvD_BwE)
- [Meteostat weather API](https://www.meteomatics.com/en/api/getting-started/?ppc_keyword=weather%20api&utm_term=weather%20api&utm_campaign=Weather+API+(USA)&utm_source=adwords&utm_medium=ppc&hsa_acc=5001518620&hsa_cam=9941211960&hsa_grp=100297572883&hsa_ad=433642865477&hsa_src=g&hsa_tgt=kwd-161571228802&hsa_kw=weather%20api&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjw3P-2BhAEEiwA3yPhwCuIV3T6sVuGlT657j7a6H0XTE6T3RoaCL5x9kQ2V9Rl86DKaQTadhoCZNcQAvD_BwE)
- [https://www.espn.com/](https://www.espn.com/)
- [https://www.pff.com/college](https://www.pff.com/college)
