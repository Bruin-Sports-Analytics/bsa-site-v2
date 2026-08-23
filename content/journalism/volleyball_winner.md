### By: Matthew Li and Jed Miguel

## Intro

Volleyball is a relatively young sport, being introduced to the Olympics in 1964. With its unique rotation system, there are many factors that affect how volleyball is played. But what factors, specifically what statistics, make a winner in volleyball?

For our data, we chose the European Golden League because Europe is often seen as the best continent to play volleyball in, with players all over the world flocking over to various European leagues. As a result, the volleyball culture in Europe is leagues ahead of other continents, leading to better players and better play.

## Individual Stats

Volleyball consists of four fundamental skills: serving, blocking, passing and attacking. In order to determine the significance of each skill, each statistic was run using a linear model, paring the correlation between win percentage and the respective volleyball statistic.

### Serving - The Most Debated Statistic

Though volleyball is a sport that relies heavily on teamwork, there is one daunting aspect that volleyball players must complete alone: the serve. Serving is one of the most important skills that a volleyball player has: it dictates the start of a rally. It is common for coaches to debate the method of serving, in conjunction with balancing serving efficiency and aces. The following analyzes the statistical significance of serving efficiency and aces.

![Figure 1](/assets/journalism/volleyball_winner/figure-01.png)

R-Squared: 0.3818

P-Value: 5.997e-06

The variation in the win percentage is explained by the amount of aces per serve.

![Figure 2](/assets/journalism/volleyball_winner/figure-02.png)

R-Squared: 0.1401

P-Value: 5.754e-3

The variation in win percentage is not significantly explained by the serve efficiency.

This finding is somewhat interesting, as coaches in volleyball commonly teach that simply keeping the ball in allows for the possibility of winning the rally, whereas risking a tough serve may result in an instant loss of a point. However, this data indicates that in professional play, teams that have a high percentage of aces have higher win rates, notably because more aces result in more instant points. In professional play, simply keeping the ball in is not enough; servers should serve to win a point. By trying to go for an ace, servers could not only potentially disrupt the formation of the receiving team and make it easier for their team to follow up and score, but they may instantly receive a point.

### Reception and Blocking - The Instigators

![Figure 3](/assets/journalism/volleyball_winner/figure-03.png)

R-squared: 0.0551

P-Value: 9.069e-2

The variation in win percentage is not explained by reception efficiency percentage.

![Figure 4](/assets/journalism/volleyball_winner/figure-04.png)

R-squared: 0.2432

P-Value: 1.754e-4

The variation in win percentage is not well explained by blocks per set.

For both passing and blocking, there is an insignificant, at best low, explanation for the variation in win percentage. This is not to say that these skills are of less value, rather that they are not direct scorers. A team may pass well but if attackers cannot get a kill, then a team will not score points and lose either way. A team may have a lot of blocks but if they are not able to make plays off such blocks then they won’t win either.

However, the distribution of passing does provide an interesting insight. The smooth curve indicates a slight correlation as reception efficiency reaches about 0.2, with the curve then reaching a plateau. This may indicate that a team with bad passing will never be able to attack and score, but once teams reach a certain passing threshold, better passing becomes of less value.

### Attack - The Big Boy

![Figure 5](/assets/journalism/volleyball_winner/figure-05.png)

R-squared: 0.6100

P-Value: 5.243e-12

Attack efficiency is significantly related to the variation of win percentages.

Here we find that attack efficiency is the biggest indicator of what makes a winner in volleyball. Collectively, this adds up: attacking is heavily reliant on how good a team is overall. In order to have an opportunity to attack or spike, a team must have good blocking or good reception. The perfect block or receive gives the setter the necessary ball height and time to make a good play. The perfect serve disrupts the defending formation of the opposing team, allowing the serving team to receive the ball back and exploit the disorganized defense of the opposition. The perfect set executed by the setter confuses the opposition and allows for attackers to go in for the kill. Thus, this high correlation between attack efficiency and win percentage in our data reflects this fundamental understanding of winning volleyball games.

### Winners Per Year

In an attempt to determine what makes a winner in volleyball, it is just as important to dissect previous winners, looking at what made them successful in their respective year. It was imperative to find out how many winning teams were statistically better than the average and what the average was for all winning teams. For good measure, runner ups from each year are included in order to account for unforeseen variability in a potential champion.

The average of all winning team’s statistics except for reception efficiency was higher than the average of all teams. Although attack efficiency has the largest marginal increase, it is interesting to note that winning teams perform better in every skill of volleyball instead of just one particular statistic. Simply put, every aspect of volleyball is important.

The decrease in reception efficiency reflects early findings in the analysis of each individual skill. Reception efficiency reaches a plateau after a certain threshold, and thus any further increase in reception efficiency is not a good indicator for more wins. The decrease in the winning teams average reception efficiency can simply be explained by marginal error.

### Predictions

With this knowledge, we are going to try to predict which team will win a specific league. As for the league we are choosing, we decided to go with the 2020 CEV Champions League. We chose this because the league never finished completely, with the league getting to the quarter finals before being cancelled due to COVID-19. We are going to hypothesize which quarter final team would have won.

But first, let's introduce the quarter finalists.

Looking at the table, the two favorites are Associazione Sportiva Volley Lube and Sir Safety Conad Perugia. Both teams have stellar records, both having a record of 7 wins and 0 losses. Volley Lube won the 2019 CEV Champions League and were heavy favorites to take the 2020 Champions League but others touted Perugia to also go on far, with Perugia achieving a third place finish in 2018 and a second place finish in 2017.

As for the underdogs, people saw Knack Roeselare and Trentino Volley as teams who would be eliminated soon. Knack Roeselare has not won the CEV Champions League and were looking to upset the bracket while Trentino Volley were shadows of their former self, winning the CEV Champions League three times in a row, from 2009 to 2011.

In the process to determine who would win, we ran a linear model of win percentage against the 5 main statistics, aces per serve, blocks per set, attack efficiency, reception efficiency and serve efficiency. The data used was from teams that played 2011, 2014, 2017, 2019, and 2021. We then ran a predict function that used this linear model with new data (2020 quarterfinalist). This prediction model gave us the following for each team’s chance of win it all:

Our prediction model gave Volley Lube the highest chance of winning, followed by Perugia and Urengoy. Purely based on statistics, this prediction model follows the stellar record of Volley Lube and Perugia, both of whom have never lost before the quarter finals. Volley Lube is given the edge in our model because although they do not have higher statistics in every skill, they have overall higher statistics in the skills that have a higher correlation to win percentage (value of correlation to win percentage weighed by the predict function algorithm).

This also aligns with the underdogs, as their comparatively mediocre statistics weighed in our model correlate with their lower performance.

However, there is one discovery here that is very interesting. Even though Urengoy has a worse win-loss record (5 to 2) than ZAKSA (7 to 1), the model predicts that Urengoy has a higher chance of winning than ZAKSA. One would assume that ZAKSA would have a higher chance of winning based on observational probability, but statistically speaking, Urengoy has done better in the statistics that matter. This could be attributed to many different factors, such as ZAKSA edging out a team not due to their skill, but a lackluster performance by their opponents.

## Conclusion

As a team sport, Volleyball consists of many skills that are equally important in allowing for a team to win. A winner in volleyball consists of a team that is not only well rounded, but excelling in every statistic. Certain statistics such as attack efficiency may indicate if a team performs well, but in order to increase attack efficiency, a team must increase all other skills. An interesting sport nonetheless, volleyball teaches the importance of teamwork.

### Sources

- [*https://www.cev.eu/national-team/european-league/european-golden-league/men/#history*](https://www.cev.eu/national-team/european-league/european-golden-league/men/#history)
- [*https://championsleague.cev.eu/en/men/#history*](https://championsleague.cev.eu/en/men/#history)
- [*https://en.wikipedia.org/wiki/Volley_Lube*](https://en.wikipedia.org/wiki/Volley_Lube)
- [*https://en.wikipedia.org/wiki/Sir_Safety_Umbria_Volley*](https://en.wikipedia.org/wiki/Sir_Safety_Umbria_Volley)
- [*https://en.wikipedia.org/wiki/Knack_Roeselare*](https://en.wikipedia.org/wiki/Knack_Roeselare)
- [*https://en.wikipedia.org/wiki/Trentino_Volley*](https://en.wikipedia.org/wiki/Trentino_Volley)
