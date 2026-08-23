## Introduction

The NBA has a long history of players securing lucrative shoe deals with top brands, but what factors determine which players are chosen to represent these brands with their own signature shoes? While some may assume that the biggest stars with the most impressive stats automatically get the deals, the reality is much more complex. In this article, we will explore the many factors that can impact a player's ability to earn a signature shoe deal and aim to identify which of these factors is the most important.

We will begin by looking at social media presence, specifically Instagram followers, and how this impacts a player's marketability to shoe companies. We will also delve into advanced playing statistics and how they may factor into the decision-making process, as well as other off-court considerations like personal brand and media presence. We will examine case studies of successful shoe deals, like Steph Curry with Under Armour and LeBron James with Nike, to identify common themes and factors that led to their success.

Finally, we will utilize a logistic regression classifier to identify which of these factors is the most important in securing a signature shoe deal. By analyzing a dataset of NBA players who have received shoe deals and comparing their characteristics and stats, we aim to determine the most significant factors that determine whether a player is likely to receive a signature shoe deal. By understanding these factors, aspiring NBA players and fans alike can gain insights into what it takes to become a sought-after shoe brand ambassador in the world of professional basketball.

## Analyzing Metrics and Statistics

Our main case studies will be the 19 current NBA players—along with Kobe Bryant—with signature shoe deals with major companies: Nike, Jordan, Adidas, Under Armour, and Puma. This excludes retired players with signature shoes, active players who once did but no longer have signature shoe deals, and players with deals with less noticeable companies like Anta and New Balance. Some notable names among those excluded from our consideration include Kawhi Leonard, Lonzo Ball, Klay Thompson, Carmelo Anthony and Jimmy Butler.

### Instagram Followers

First, we will investigate how social media following may have an effect on which players receive major shoe deals. Below is a graph showing the 75 most followed NBA players by Instagram followers that indicates whether a player has a signature shoe deal:

![Source: https://www.popularbasketballers.com/ (as of January 2023)](/assets/journalism/nba-shoe-deals/figure-01.png)

The graph shows that all 17 current NBA players with both a signature shoe deal and an Instagram account are in the top 30 most followed NBA players. In fact, these 17 players, on average, have around 20 million followers, nearly 40 times the rest of the league’s average.

### Market size

Another factor we anticipate could contribute to receiving a shoe deal is the size of the market that a player plays in. Here’s every team’s market size using homes reached as a measurement and indicating whether a team had a player receive a shoe deal while on that team:

![Source: https://www.sportsmediawatch.com/nba-market-size-nfl-mlb-nhl-nielsen-ratings/ (Data for Toronto unavailable)](/assets/journalism/nba-shoe-deals/figure-02.png)

Surprisingly, larger market teams don’t seem to attract more shoe deals. The average market size of a team with a player who received a shoe deal is actually lower than that of teams without a player who received a shoe deal. Only 3 teams, Cleveland, New Orleans and Oklahoma City, have produced 2 separate shoe deals, and they are all three in the bottom half of the league in terms of market size. Possibly due to the popularization of social media, a player’s individual marketability does not necessarily seem to depend on the size of the TV market in which they play.

Notably, among the 3 teams that have rostered 2 different signature shoe signees, only Cleveland has had both of the signees, LeBron James and Kyrie Irving, on the team while one of the players was signed. This speaks to the difficulty of taking up enough of the spotlight on one team to sign a shoe deal when a current teammate already has. OKC is a prime example of this difficulty, as Russell Westbrook signed his shoe deal the year after his teammate Kevin Durant left for Golden State. Thus, it seems unlikely going forward that shoe companies will sign a player to a signature shoe deal if they are teammates with another signature shoe signee who already dominates the spotlight.

### Years of Experience

Next we will inspect how many seasons players typically play before signing a shoe deal. Below shows how far along each of our 20 players was in their career when they signed their shoe deal versus the year in which they signed their deal:

![Figure 3](/assets/journalism/nba-shoe-deals/figure-03.png)

Interestingly, it seems that players often receive shoe deals anytime within their first 7-8 years in the league. The average age of incoming rookies is 22, so it follows that most players who sign a shoe deal do so before turning 30, which is around when most players’ play starts to decline. Not only do players sign deals during the beginning of their prime years around age 26, but also sometimes several years before, in anticipation of a successful career. The graph shows that from 2003-2010, players only received shoe deals in these beginning years—Kobe, the lone exception, signed his second shoe deal with Nike in his 8th year after originally signing to Adidas in his rookie season—3 or fewer years into their career. Since 2013, however, players anywhere in between their 1st and 7th seasons have penned deals with major brands.

### Positions

![Figure 4](/assets/journalism/nba-shoe-deals/figure-04.png)

Based on the bar graph, it appears that point guards are the most likely basketball players to receive shoe deals from shoe companies. The graph shows a breakdown of the percentage of players from each position who have shoe deals, with point guards having the highest percentage at around 55%, followed by shooting guards at about 25%, small forwards at 5%, power forwards at 25 %, and centers at 5 %. This suggests that shoe companies may value the style and marketability of point guards more than players in other positions, perhaps due to their dynamic playing style and ability to generate excitement on the court.

### On Court Statistics

We anticipate that on-court statistics will heavily impact whether a player receives a shoe deal. It is no easy task to quantify overall performance on the court, so we will look at an array of statistics to investigate which of them correlates to getting a shoe deal the most. To do this, we needed a dataset to compare our set of 20 players to in order to learn what separates them from the rest of the league. We chose to use the data from all 75 players that have made an all-star team from 2016 to present, a dataset that contains every one of our 20 players outside of Derrick Rose.

## PPG

![Figure 5](/assets/journalism/nba-shoe-deals/figure-05.png)

Based on the graph, it seems like most of the time, a player has to average over 20 points per game to receive a shoe deal. The two outliers are Chris Paul and LaMelo Ball, who averaged 17.3 PPG and 15.7 PPG in 2006 and 2020 respectively. Paul was the 4th overall pick in 2005, and his 8.9 assists per game in 2009 was good for 4th in the league. Perhaps his playmaking and high draft position was enough for Jordan to see Paul’s stardom before it fully began. As for Ball, he has been a star on social media since his high school days, already amounting the 12th most Instagram followers in the league before the end of his 3rd season in the NBA. In just his rookie year, Puma was quick to capitalize on his already established marketability and immense potential to become a star in the league as the 3rd overall pick in 2020. Ball didn’t need to prove his marketability through his on court performance, and signed a shoe deal without the scoring pedigree to show for it.

It can also be seen that the average PPG among shoe deal signees has risen from 2003 to 2022. As we observed before, players tended to receive shoe deals earlier in their careers from 2003-2010. This could explain why players scored less to receive these deals, as companies were more willing to gamble on a player’s future stardom before they entered their prime. Additionally, league scoring has risen significantly within this time frame. From 2003-2010, team PPG ranged 93.4 to 100.4, and from 2013-present, it has ranged from as low as 100 to as high as 114.5 PPG. With inflated scoring numbers in recent years, it takes more scoring for a player to stand out as a star than it did before 2010. It follows that higher league-wide scoring averages and companies waiting for players’ prime years to sign them to shoe deals causes recent shoe deal signees to have higher point per game averages at the time of signing their deal.

## 3PM

![Figure 6](/assets/journalism/nba-shoe-deals/figure-06.png)

When we look at 3PM, we can see that the number of three pointers a player makes per game has become more correlative to receiving a signature shoe deal over the years. This coincides with the growth in the number of threes teams are attempting and making per game, as teams have averaged 9.63 threes made per game since 2010 compared to only 6.02 made per game between 2003 and 2010. It can be seen that from 2010-present, only 3 out of 16 players who received a signature shoe deal made less threes per game than the career average of our all-star players (1.36 3PM) in the season they signed their deals. From 2003-2010, however, all 4 players who signed a shoe deal made less than 1.36 threes per game. It appears that going forward, shoe companies will look to sign players that adjust to the current NBA’s perimeter focused offensive play style.

## FGA

![Figure 7](/assets/journalism/nba-shoe-deals/figure-07.png)

Shown above are the field goals attempted per game (FGA) of each of our signature shoe players plotted against the season during which each of them signed their shoe deal. The average FGA among our pool of all-star players is 14.15, as opposed to 17.98 for the signature shoe players. By taking even more shots than some of the top players in the league, signature shoe players involve themselves in the action more than anyone else. This draws the attention of the viewer onto a player more, an advantage for a company wanting to maximize shoe sales based on the notoriety and personal brand of a player. Only 2 signature shoe players, LaMelo Ball and Chris Paul, attempted less than the all-star average in the season they signed their deals. Interestingly, these are the same 2 players to fall under the all-star average for points in their respective deal-signing seasons. It may be relevant to add that Ball and Paul both excel at distributing the ball to their teammates for scoring opportunities, lowering the number of shots they attempt per game.

It should be noted that all 3 players who signed a shoe deal in 2022—Jayson Tatum, Luka Doncic and Ja Morant—attempted over 20 shots per game this season, a significant increase from prior years. Perhaps shoe companies are beginning to seek out players who attempt the most shots per game in the entire league, as Doncic, Tatum and Morant currently rank 1st, 2nd and 4th respectively in FGA. Moving forward, shoe companies may want to see their prospective signees involve themselves in play more than any others by shooting at a high volume.

## eFG%

eFG% (effective field goal percentage) is an alternate way of representing a player’s shooting efficiency in which three point attempts are weighed more heavily. This accounts for the additional point that each successful three point field goal produces, focusing on the efficiency at which players produce points instead of the efficiency at which they make shots. Here is the formula for eFG%:

![Figure 8](/assets/journalism/nba-shoe-deals/figure-08.png)

![Figure 9](/assets/journalism/nba-shoe-deals/figure-09.png)

The eFG% by year graph shows the progression of each NBA player's eFG% over the years, with a corresponding line that shows the league's average (0.532) in the 2021-2022 season. Interestingly, more than 50% of the players who received signature shoe deals had lower than average eFG% during the time of their signing. This suggests that eFG% may not be a critical statistic predictor when shoe companies consider which players to sign for endorsement deals. It also highlights the importance of marketability, personality, and other intangible factors that can contribute to a player's overall value and appeal as an endorser.

## Predictions

Now that we have investigated some factors that could contribute to a player receiving a shoe deal, we will attempt to predict the group of players that are next in line to sign a deal with a major shoe brand. To do this, we will look for players that thrive in the following areas, which we found to be correlative to signing a signature shoe deal, compared to all-star players since 2016 as well as current signature shoe players:

- FGA
- Instagram followers
- 3PM
- PPG
- Years of experience
- Whether a teammate has a shoe deal

### Anthony Edwards

- Averaging 19.4 FGA per game
- 1.3 million Instagram followers, good for 55th in the league
- Averages 24.7 PPG
- Makes 2.7 three-pointers per game,
- In only his third year in the NBA at 21 years old
- None of his teammates have existing shoe deals

Edwards has all the traits necessary to earn him a signature shoe: a high scoring average, high shooting volume, three point shot making, decent social media following, his youth, and the fact that none of teammates have signature shoe deals. He is currently signed to a non-signature deal with Adidas, meaning he wears Adidas shoes in game, but does not yet have a shoe under his name with the company.

### Jaylen Brown

- Averages 20.4 FGA
- 33rd in Instagram followers with 3 million
- Makes 2.5 threes per game
- 26.7 PPG
- In his seventh season, 26 years old
- His teammate, Jayson Tatum, just signed a signature shoe deal.

Since only Kyrie Irving has signed a signature shoe deal while having a signature shoe teammate, it might be difficult for Brown to sign a deal without him or Tatum leaving Boston, similar to how Russell Westbrook signed a shoe deal the year after Kevin Durant signed with Golden State. Outside of this barrier, it is not difficult to imagine the release of a Jaylen Brown signature basketball shoe in the near future based on his high-volume scoring and significantly large social media following. Brown originally signed a non-signature deal with Adidas in his rookie year, but has remained unsigned since the 2022 season when his contract expired.

### De’Aaron Fox

- Averages 18.3 FGA
- 56th in Instagram followers with 1.3 million
- Makes 1.7 threes per game
- Averages 25.4 PPG
- In his sixth season at 25 years old
- Would be the only player on his team with a signature shoe deal

Fox is in the midst of his first all-star season in the NBA, and he checks most of the boxes to be a signature shoe player. While his three point shot making is below the signature player average, his elite scoring, solid shooting volume and large social media following in only his sixth year in the NBA are all signs of a possible signature shoe to come. Fox is currently signed with Under Armour, and perhaps could join Joel Embiid and Steph Curry as the only Under Armour athletes with a signature shoe in the coming years.

### Devin Booker

- Averages 20.6 FGA
- 20th in Instagram followers with 5.5 million
- 2.1 3PM
- Averages 28.1 PPG
- In his eighth season at 26 years old
- Has two teammates with signature shoe deals: Chris Paul and Kevin Durant, signed their shoe deals 17 and 16 years ago respectively (Kyrie signed his deal with Nike while teammates with Lebron 11 years after Lebron signed his deal).

Arguably the most productive and popular in this list, Booker’s scoring, shooting volume and social media following jump off the page even in comparison with signature players. Being teammates with Kevin Durant and Chris Paul may prove to be an obstacle in Booker signing his own signature shoe deal, but they signed their deals 16 and 17 years ago respectively. When Kyrie signed his deal with Lebron as a teammate, it had been 11 years after Lebron signed his deal, so perhaps Booker is still in a position to begin a line of his own signature shoes. Booker is currently signed with Nike, but does not have a signature shoe (in the process of writing this article, the D Book 1 was announced to be releasing in Spring 2024).

### Brandon Ingram

- Averages 18.1 FGA
- 37th in Instagram followers with 2.2 million
- Makes 1.6 threes per game
- Averages 23.7 PPG
- In his seventh season at 25 years old
- Teammates with Zion Williamson, who signed a signature shoe deal just 4 years ago

While Ingram lacks the elite three point shot making and shooting volume, he still hovers around the average marks for signature shoe players in these areas while excelling as a scorer and maintaining a large following on Instagram. The main factor that could hold him back from signing a signature deal is being teammates with Zion Williamson, who signed a shoe deal very recently in 2019. Ingram has been signed to both Adidas and Nike in his time in the NBA, and he is currently with Nike on a deal he signed in 2021.

## Conclusion

When it comes to companies offering signature shoe deals, there are plenty of possible factors. While it seems only the best, most-popular players in the league have signature shoes, it is difficult to quantify these traits—what makes them popular enough or great enough to have their own signature shoe? On top of this, as the league continues to change, predicting which players will sign signature shoe deals entails not only understanding the criteria, but how the criteria has changed and is changing. In truth, only NIke, Adidas, Jordan and other major basketball shoe companies know the strategy they employ to recruit new signature players to their brands.

- [https://www.soleretriever.com/news/articles/every-nba-player-that-has-a-signature-sneaker-2022-2023](https://www.soleretriever.com/news/articles/every-nba-player-that-has-a-signature-sneaker-2022-2023)
- [https://www.popularbasketballers.com](https://www.popularbasketballers.com/)
- [https://www.basketball-reference.com/leagues/NBA_2023_per_game.html](https://www.basketball-reference.com/leagues/NBA_2023_per_game.html)
- [https://www.sportingnews.com/us/nba/news/nba-players-signature-sneaker-nike-adidas/qudhgthlcu3e54whi179dwic](https://www.sportingnews.com/us/nba/news/nba-players-signature-sneaker-nike-adidas/qudhgthlcu3e54whi179dwic)
- [https://www.sportsmediawatch.com/nba-market-size-nfl-mlb-nhl-nielsen-ratings/](https://www.sportsmediawatch.com/nba-market-size-nfl-mlb-nhl-nielsen-ratings/)
