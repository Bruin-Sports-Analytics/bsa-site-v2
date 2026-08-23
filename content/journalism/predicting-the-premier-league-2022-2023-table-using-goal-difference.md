### By: Hashim Bhat and Daniel (Seungmo) Lee

## Introduction

It’s a well-known fact that soccer is the most popular sport worldwide, bringing together billions of fans from all over the world to enjoy the beautiful game. The English Premier League, founded in 1992, boasts the most viewership out of any professional soccer league, with a total social media following of over 1 billion people. For those of us who are die-hard fans, this comes as no surprise as the league is known for its unmatched competitiveness, physicality, and unpredictability. Although it could be argued that Manchester City has been the main dominating force in the league over the past decade, fans are still overjoyed with excitement and anticipation at the beginning of every season. After all, a lot of things can change over the summer break and a successful transfer window can make all the difference when it comes to a team’s chances of succeeding in a particular season.

This brings us to this season. Arsenal fans have been through a lot over the past two decades with their side enduring a long struggle to get back to the world-class level that amassed them such a great following in the late 90s and early 2000s. Excitingly, we are witnessing an Arsenal team this season that could lead the club back to their winning ways, and the fans could finally be rewarded for “trusting the process” since current manager (and former Arsenal player) Mikel Arteta took charge in 2020. Although Arsenal is currently ranked 1st, there is no guarantee for them, with powerhouses Manchester City lurking closely behind. Additionally, the fight for those top 4 champions league spots is fiercely competitive as it always is, with clubs like Newcastle and Brighton having surprisingly exceptional starts to the season, giving the big 6 some unexpected competition. No less interesting is the fight to make it out of those relegation spots, with Wolves, Southampton, and Nott’m Forest currently in the mud.

Who knows what the league table will end up looking like at the end of this season? In this article, we attempt to answer this question using the data that has been recorded so far this season.

## Methodology

The first step was deciding what metrics to use to help us predict the table. In the premier league, teams are awarded 3 points for a win, 1 point each for a tie, and 0 points for a loss. A plethora of data is collected from soccer matches, including shots per game, possession, fouls committed, etc. However, the metric that is most positively correlated with winning is goal difference. Intuitively, this makes sense as scoring more goals than you concede will obviously win you games. Additionally, the significance of a team’s advantage playing at home and the disadvantage of playing away cannot be ignored so this had to be factored into our data. The following visualizations highlight this point.

![Figure 1](/assets/journalism/predicting-the-premier-league-2022-2023-table-using-goal-difference/figure-01.png)

![Figure 2](/assets/journalism/predicting-the-premier-league-2022-2023-table-using-goal-difference/figure-02.png)

At the time of writing this article, we are currently 14/15 games into the season. From a spreadsheet that included data pertaining to every fixture that has taken place so far, we created one table showing the average number of goals scored and conceded for every team at home, and another table with the same information for every team when they played away. By taking away average goals conceded from average goals scored, we ended up with two tables showing the average goal difference for every team at home and away. We then wrote a function called Match_Predictor, that returns the predicted number of points for the Home Team and the Away Team in any given fixture by doing the following:

For every fixture, if the Home Team’s average home goal difference is greater than the away team’s average away goal difference by a certain margin (0.6), the Home Team wins and is awarded 3 points.

If the Away Team’s average away goal difference is greater than the home team’s average home goals difference by a certain margin (0.6), the Away Team wins and is awarded 3 points.

If the Home and Away Team’s respective goals differences at home and away are within a certain range of each other (0.6), the game is a tie and both teams get 1 point each.

We then applied our Match_Predictor function to every remaining fixture this season and this gave us the following predicted table:

![Figure 3](/assets/journalism/predicting-the-premier-league-2022-2023-table-using-goal-difference/figure-03.png)

## Takeaways

Most critics have expressed their feeling that Arsenal will not be able to keep the current(12/01/2022) lead that they currently have over Manchester City, but our prediction based on goal difference says differently. The visualizations above indicate that both teams are in stellar form but Arsenal’s away goal difference is particularly exceptional and could perhaps give them the edge.

Our predicted table also suggests that Newcastle’s recent increase in funding from Saudi Arabian billionaire owners is set to pay dividends. A 3rd place finish would be a remarkable achievement for the side, but whether they can keep up their current form for a whole season remains to be seen.

Liverpool, Chelsea, and Man United fans will be disappointed to see their teams missing out on the top 4 to Tottenham, who clinch 4th place.

Southampton getting relegated would be a major upset for the club who, despite regularly placing low in the table, have been able to stay in the league since 2012.

## Limitations of this Model

Only using data from this season so far is an obvious limiting factor considering we are only 14-15 games into the season and a lot can change. Results like Brighton finishing over Liverpool and Chelsea would be shocking and perhaps factoring in data from previous seasons would place Brighton substantially lower. That being said, we are talking about a league in which Leicester, who was playing in the EFL Championship (2nd tier of English soccer) 2 seasons prior, won the league in 2016. So we know that teams can improve dramatically in a short time span and perhaps factoring in old data could inaccurately undermine the improvements in a team. On the other hand, powerhouses like Liverpool and Chelsea are more capable than other teams of recovering from dips in form and this model is not accounting for that.

The tie range for this model was 0.6 which is another limitation of this model as this number was chosen somewhat arbitrarily to produce a table in which teams had a realistic point tally. It is to be said, however, that changing the tie range had very little effect on the ranking order, meaning that the top 4 and bottom 3 remained the same for a variety of tie ranges. Increasing and decreasing the tie range just increased the specific point tallies for each team.

Furthermore, our model does not predict score lines, which means that it does not update the goal difference statistics based on predicted results.

### Some More Visualizations:

### Shots Per Game Table:

![Figure 4](/assets/journalism/predicting-the-premier-league-2022-2023-table-using-goal-difference/figure-04.png)

### Corners Per Game Table:

![Figure 5](/assets/journalism/predicting-the-premier-league-2022-2023-table-using-goal-difference/figure-05.png)

## Sources:

[*https://www.football-data.co.uk/englandm.php*](https://www.football-data.co.uk/englandm.php)

[*https://www.premierleague.com/stats*](https://www.premierleague.com/stats)
