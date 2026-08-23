### By: Leonardo Cardozo

The selection and seeding of college basketball teams for the NCAA tournament has been a complaint among college basketball teams and fans ever since the tournament expanded to 64 teams in 1985. With the combined seeds of the men’s 2023 final four adding up to 23 (5.75 seed average), many have suggested that the seeding system needs an overhaul, as the committee tends to give higher seeds to major conference teams with worse records than teams that come from worse conferences.

![Figure 1](/assets/journalism/fixing-net/figure-01.png)

Even though there is not one clear conference that is getting explicitly rewarded with lots of undeserving seeds, the chart above displays a considerable amount of mediocre Power 6 teams that made the tournament. For context, the median offensive efficiency among tournament teams is 111.6, and the median defensive efficiency among tournament teams is 96.2.

In an effort to rectify seeding and help the selection committee make their bracket, numerous ranking systems have been developed. In 2018-2019, the NCAA introduced a [new tool](https://www.ncaa.com/news/basketball-men/article/2022-12-05/college-basketballs-net-rankings-explained#:~:text=The%20NET%20includes%20more%20components,quality%20of%20wins%20and%20losses.), called the NET to help better rank teams and assist the committee in seeding them. The NET rankings use machine learning techniques along with input variables like net efficiency and adjusted win percentage to derive a true ranking of college basketball teams. Another system, KenPom, is designed purely as a predictive ranking metric, using a Pythagorean calculation for expected winning percentage and [a lot of math](https://kenpom.com/blog/ratings-explanation/) to design a system that does pretty well in predicting the tournament each year.

But, while both these systems do a great job in determining the true ability of college basketball teams, neither system does that great a job in determining how good their season has been. For example, if team A beats team B by 1 and team C by 1, they will likely be ranked worse than team D who loses to team B by 1 but beats team C by 60 with great efficiency. Since the role of the committee is to award seeds to the 68 most deserving teams, and not necessarily the 68 best teams, a new ranking system must be developed.

One possible system is an ELO model, popularized in Chess and used by [FiveThirtyEight](https://fivethirtyeight.com/features/how-we-calculate-nba-elo-ratings/) to rate professional sports teams. ELO models start every team at a set rating (in this case 1500) and then adjust their rating up or down a set amount based on the difficulty of their opponent. Both teams gain or lose the same amount of ELO points from each matchup, and a win against a team with a stronger ELO rating is given much more weight than a win against a weaker ELO team. More information about ELO systems can be found [here](https://medium.com/purple-theory/what-is-elo-rating-c4eb7a9061e0).

ESPN has a metric that is similar, called strength of record. This metric only uses three inputs: who a team played, where the game was played, and who won. Although our ELO model will factor in additional variables such as margin of victory, we can expect our ELO model to have somewhat similar results to strength of record.

In order to achieve our purpose, we use an ELO model that only takes into account 4 input variables: the strength of team 1, the strength of team 2, the winner of the game, and the margin of victory. The strength of each team is determined by the ELO model, as all teams start with a rating of 1500, and are progressively adjusted by the results of each game. The formula used for the elo model has a k-value of 20 + 10 * margin of victory. This means that if team A beats team B by 4 points, and it is the first game of the season (both teams have equal ELO values), then team A will gain 60 ELO points, and team B will lose 60 ELO points. This formula was settled on largely through a trial and error process, where different formulas were tried and then tested on different seasons of data. Other factors such as home-court advantage were considered and tried for the model, but ultimately not included due to seemingly insignificant effects. In college basketball, measuring home-court advantage during the regular season becomes less important since all games in March Madness are played on a neutral court and teams play most conference opponents both home and away.

## Training The model On The 2023 Season:

For the 2023 season, the top 10 teams before the NCAA tournament were calculated to be as follows:

1. Texas (2423.959)
2. Gonzaga (2418.595)
3. Alabama (2370.113)
4. Houston (2316.015)
5. UCLA (2309.700)
6. FAU (2305.288)
7. Duke (2287.237)
8. Drake (2280.144)
9. Memphis (2278.945)
10. SDSU (2258.469)

![Figure 2](/assets/journalism/fixing-net/figure-02.png)

One of the immediate factors that jumps out from the ELO model is the prevalence of conference tournament winners. Outside of Houston, every single team listed in the top 10 won their conference tournament. This is due to the fact that winning a conference tournament involves winning consecutive games against increasingly difficult opponents, skyrocketing a teams ELO model since their opponents ELO ratings only get higher as they continue playing opponents.

A second take away from the ELO model is that it placed Florida Atlantic University and San Diego State inside its top 10, despite the fact that they were both seemingly surprise final four teams. Despite UConn and Miami not cracking the top 10, they were both still placed in the top 25, with UConn landing at the number 15 spot and Miami ending up ranked 24th.

## Can Our ELO Model Predict March Madness?

Using the same formula as the one derived for the 2023 season, I generated ELO rankings for the 2022 season:

1. Tennessee (2397.368)
2. Gonzaga (2367.779)
3. Iowa (2301.875)
4. Murray St (2300.204)
5. Arizona (2275.204)
6. Houston (2275.168)
7. S Dakota St (2272.356)
8. Villanova (2265.453)
9. Kansas (2264.546)
10. Virginia Tech (2249.189)

Our model really falls flat here. Iowa makes a surprise appearance in the top three, but was upset by Richmond in the first round. Final Four teams in Villanova and Kansas are ranked lower than traditional metrics, and Duke and North Carolina are nowhere to be found. Other surprise top 10 teams such as Murray State, South Dakota State, and Virginia Tech had similarly disappointing postseasons. Clearly, the model is not perfect, but let’s take a look at its performance for one more season.

Here are the top 10 teams from the 2021 season:

1. Illinois (2300.416)
2. Gonzaga (2280.702)
3. SDSU (2191.463)
4. Houston (2170.080)
5. Loyola Chicago (2169.845)
6. Alabama (2164.163)
7. Colorado (2115.652)
8. Arkansas (2100.989)
9. Baylor (2093.575)
10. Grand Canyon (2089.196)

Once again, the model does not do great. Baylor, a consensus top-2 team in college basketball and eventual national championship team, is only ranked 9th, while San Diego State, the third ranked team, didn’t even win their first round matchup.

## Takeaways

It is not entirely surprising that the model does not do great in predicting march madness results. As mentioned before, the ELO system is devised to measure how strong a resume a team has, rather than measure a true talent level of teams, which we already have established metrics for.

One way in which applying an ELO system to college basketball is flawed is due to the fact that recent results may not be more accurate measurements of talent level compared to old results. In a game like chess, players' skill levels are constantly changing, so a system that updates ratings based on the last match does a good job of measuring improvement. However, the talent of college basketball teams does not change much throughout the season, so emphasizing results that happen just before March such as conference tournaments lead to very skewed results.

Knowing this, an interesting way of utilizing the ELO rankings in evaluating teams could be to look at teams that are still ranked high despite **losing** their conference tournament. Baylor was shocked in their conference tournament in 2021, but still managed to make the top 10 of the ELO rankings before their dominant tournament run. Similarly, UConn lost their conference tournament, but still managed to crack the top 15 in the ELO this past year. Future work could definitely look into modifying the model so that recent results are not overemphasized, but that would probably involve moving away from an ELO system entirely.

Regardless, whether you use an ELO model, a predictive tool like the NET or Kenpom, or a pure resume metric such as strength of record, predicting March Madness is not easy. In single game outcomes, unlikely results are more likely to occur, which is why the NCAA tournament is so captivating to viewers. So sit back and enjoy the madness.

Data was collected from the hoopR package.

If you are interested in the code used to build the model, that can be accessed [here](https://github.com/cardo14/BSA-ELO-NCAAB). Otherwise, if you have any questions about the model, or any suggestions for the future, you can email me at [leonardocardozo14@gmail.com](mailto:leonardocardozo14@gmail.com).
