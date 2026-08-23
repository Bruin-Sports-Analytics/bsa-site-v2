### By: Faraz Murshed

As the most-watched sports league on the planet, the English Premier League (EPL) prides itself on being a fiercely contested competition. Analysts and pundits generally believe that any of the clubs in the table are capable of taking points off another. Furthermore, financial investments in the EPL dwarf the numbers of all the other top leagues. According to [transfermarkt.us](https://www.transfermarkt.us/), the estimated total market value of the league for the 2020-21 season is an impressive $9.8 billion, with the Italian Serie A coming in 2nd with a $5.6 billion valuation. These figures are based off of the estimated transfer values of the league’s players, which implies that the EPL is filled to the brim with raw talent.

In this lucrative competition with teams of similar caliber, the play style of a club plays a role in separating themselves from the pack. As a result, we will take a look at how different tactical approaches can contribute to success in the EPL and which, if any, is the key to success.

## The Structure of the English Premier League

The EPL consists of 20 teams, and every season each team plays the others twice, home and away. Teams get 3 points for a win, 1 for a tie, and 0 for a loss. Ties are broken by goal differential (goals scored minus goals allowed). The top four teams qualify for the prestigious UEFA Champions League, and the bottom three teams are relegated to the 2nd division, the EFL Championship. Thus, every team has something to play for, whether it be for the title, European competitions, or just the right to stay in the league.

From left to right, these are the final EPL standings for the 19/20, 18/19, and 17/18 seasons

(Source: skysports.com)

The EPL tends to have similar teams finishing at the top or bottom of the table from year-to-year, with the middle providing much of the fluctuation. Even then, the exact positioning of teams is unlikely to be the same; a new tactical approach that succeeded one year could be less effective after several seasons. To see which play styles are most impactful recently, we will be analyzing how various statistics affected the 2019 - 2020 EPL standings.

## Visualizing the Metrics

The plot below demonstrates trends that are generally expected: scoring more goals has a positive relationship with final point totals, whereas conceding a greater amount has a negative relationship.

![Figure 1](/assets/journalism/epl_tactical_breakdown/figure-01.png)

Given this basic idea, we will want to analyze which offensive statistics lead to better goal creation and which defensive statistics allow a team to keep more clean sheets.

## Offensive MetricsShooting and possession are generally assumed to be the most indicative metrics for a club’s offensive performance. Thus, we will start by visualizing their correlation with goal scoring output.

![Figure 2](/assets/journalism/epl_tactical_breakdown/figure-02.png)

![Figure 3](/assets/journalism/epl_tactical_breakdown/figure-03.jpg)

We can see in the graphs and correlation table that both possession percentage and passing percentage have a roughly positive linear relationship with goal scoring, with the former having a stronger relationship. Still, on their own, these metrics are not making clear-cut separations in regards to team performance. For example, if we look at teams who had a passing percentage of approximately 80%, we see that a team who finished with less than 30 goals had a similar output to that of a team who ended with more than 60 goals. Furthermore, there is an obvious linear relationship between possession and passing, as evidenced by the value r = 0.92. This demonstrates that teams who possess well are able to distribute the ball effectively and safely.

![Figure 4](/assets/journalism/epl_tactical_breakdown/figure-04.png)

The two shooting statistics have a very strong correlation with each other, and both have similar values for the relationship with the amount of goals scored. However, most teams registered a similar amount of shots on-target per game, which implies that this statistic is relatively useless for differentiating teams. The shots per game metric can be deemed more useful, as there is some clear separation among the teams. The data shows that most clubs tend to have similar amounts of shots on goal per game, but the teams who score more have more total shots. This indicates that high-pressure offenses are more favorable to more conservative offenses that produce a few clear-cut chances per game. As such, tactics revolving around “passing the ball into the goal” are unlikely to be advantageous over a game plan that seeks to frequently trouble the other teams’ goalkeeper and defensive line.

![Figure 5](/assets/journalism/epl_tactical_breakdown/figure-05.png)

Passing, possession, and shooting distinguish tiers of clubs within the table, butteams within those tiers produce similar outputs, bringing into question if technical skills can separate similar-caliber squads. However, the graph above proves that dribbling statistics do not give significant implications for goal scoring. The correlation between dribbles and goals per game is 0.27, which supports this observation. Thus, for optimal offensive performance, teams should opt for high-pressure tactics that emphasize passing with purpose and taking opportunities that seem to be half-chances.

## Defensive Metrics

To analyze the defensive performance of clubs, some notable statistics that we use often are the number of shots allowed, tackles made, and interceptions.

![Figure 6](/assets/journalism/epl_tactical_breakdown/figure-06.png)

Barring a few outliers, the obvious trend here is that permitting fewer shots in total leads to fewer goals allowed. This observation makes intuitive sense: an ideal defensive unit should minimize the number of chances for their opponent; a natural follow-up is to investigate what contributes to the minimization. One interesting observation is that Chelsea, the team with the 2nd fewest shots allowed per game, conceded the same amount of goals as Brighton, who allowed the 3rd most shots per game. Goalkeeping is more of an individual skill rather than a tactical one, but the ineptitude of Chelsea’s Kepa Arrizzabalaga demonstrates how solid defensive maneuvers can be undone by a lackluster goalie.

![Figure 7](/assets/journalism/epl_tactical_breakdown/figure-07.png)

![Figure 8](/assets/journalism/epl_tactical_breakdown/figure-08.png)

Interestingly, the relevant data demonstrates that tackling statistics do not have any discernible correlation with giving up goals nor shots. If anything, there is actually a very slight negative linear relationship in both cases. Teams with similar values for tackling had widely varying performances in the other categories. This form of defence is sometimes considered a last-ditch move. A leaky defence may be forced to make a lot of tackles due to inadequate positioning beforehand. A sturdy backline may just have better tacklers in general; they also may have been able to deal with their opponent’s earlier in the attacking sequence.

![Figure 9](/assets/journalism/epl_tactical_breakdown/figure-09.png)

![Figure 10](/assets/journalism/epl_tactical_breakdown/figure-10.png)

We have defined the top backlines as the units that allow the least amount of goals. Since interceptions do not have a very strong correlation with either metric when considering all of the teams, we cannot conclude that the best defenses will be making more interceptions. Similar to tackles, interceptions can sometimes be viewed as a risk, as a failure to succeed in an attempt can create openings in the back. Thus, high performance in this metric is not necessarily indicative of a strong defense.

After visualizing the defensive metrics, the primary conclusion is the best defenses are more conservative. If we compare the analysis of the number of shots allowed with the number of tackles and interceptions, we notice that strong defences have varied approaches to the game. However, the relationship between shots allowed and goals conceded implies that the less risks a defence takes, the better. The relative non-significance of interceptions and tackles indicates that some teams’ strategy is to simply force the other offense into making errors.

## Is the Best Defense a Good Offense?

Possession clearly plays a large part in offensive success, and preventative tactics play a similar role on the defensive end. Though these metrics would seem to affect different aspects of the match, the following graph shows that they are linked to each other as well.

![Figure 11](/assets/journalism/epl_tactical_breakdown/figure-11.png)

Here, we can detect a negative linear relationship with a correlation of -0.72. In essence, the less time the opponent has the ball, the less time they have to create legitimate opportunities. The most preventative teams are taking this idea to heart through their playstyle.

## Final Thoughts

Visualizing the primary offensive and defensive metrics in the 2019-2020 EPL season allows us to make several conclusions about the optimal set of tactics in the current era.

First, possession, for which accurate passing plays an essential part, is a key feature of both a strong offense and defense. The teams that held the ball longest won the most points and scored the most goals. This is a multifaceted issue for many clubs down the table; in order to have fantastic possession statistics, talented players with excellent in-game IQ and patience are necessary. Teams with historically lower budgets, such as Bournemouth, are often unable to afford these types of players, which the Manchester clubs buy during every transfer window. Still, good ball retention is an attainable and vital feature for many teams in the top half of the table. Manchester City has demonstrated the full potential of these methods, with quality passers in every position, including goalkeeper. At their peak, the team finished with an EPL record 100 points at the conclusion of the 2017-2018 season.

Second, a club cannot have a successful offense by just waiting for easy chances to present themselves. Instead, they have to be willing to force the issue and trouble the goalkeepers often. The effectiveness of these methods are noticeable under Jurgen Klopp’s Liverpool, which is known for its high-octane offense that constantly presses the opponent’s defense. Consequently, the team has been able to end the past two seasons with an incredible average of 98 points.

Lastly, a top tier defense is capable of stopping an opponent’s attack before they ever pose a real threat. The Liverpool defensive core of Virgil Van Dijk, Trent Alexander-Arnold, and Andrew Robertson are revered for these shutdown performances. Defensive midfielders have an important role for this as well. Chelsea’s N’golo Kante and Leicester’s Wilfried Ndidi are elite options at the position, and their teams’ were among the most preventative defensive units.

*Data Source: whoscored.com*

*GitHub Repository: https://github.com/farazmurshed13/epl_tactics*
