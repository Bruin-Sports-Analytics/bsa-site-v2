## Introduction

Just past the quarter mark of the 2024-25 NHL season, we have seen some crazy things already happen. The Winnipeg Jets, Washington Capitals, and Minnesota Wild have exceeded everyone’s preseason expectations and ascended to the top of the NHL standings. On the flip side, the Nashville Predators have plummeted to the bottom of the NHL despite free-agent additions of Steven Stamkos, Jonathan Marchessault, and Brady Skjei. Preseason Stanley Cup favorites, New York Rangers, have fallen off a cliff in recent weeks and traded their captain Jacob Trouba to Anaheim due to their struggles.

Just like with every NHL season, we can expect a lot more craziness to come in these next few months of the season. However, in this article, I will attempt to predict the rest of this NHL season from a statistical lens and we’ll come back in June to see how well I did.

## Regular Season

### Method

To predict the regular season, I used a model from an article by [HockeyAnayltics.com](http://HockeyAnayltics.com) called “The 10 Laws of Hockey Analytics.” which finds how the expected winning percentage of a team based on the number of goals it scores and gives up. The formula for this model comes from the Pythagorean expectation created by Bill James but translated to hockey. The formula is winning percentage = Goals For ^ 2 / (goals for ^2 + goals against ^2). In place of goals for and against, I substituted them with expected goals for and against (expected goal: chance of an unblocked shot attempt being a goal) since many actual goals scored are random. To find the number of wins a team is expected to end with, you multiply the winning percentage by 82 games.

To test the model, I used data from the 2023-24 NHL season to find the expected wins each team would get based on the model. I found that the model is not perfect and is off by about 4 wins per team.

![Figure 1](/assets/journalism/2024-25-nhl-season/figure-01.png)

For this season because we are not fully finished with the season, the data is incomplete. To estimate the number of expected goals, I found the average expected goals for and against per game for each team and then multiplied that number by 82 to estimate how many expected goals each team will finish the season with. I then took the number of expected goals for and goals against I found and plugged them into the formula to find how many wins we expect each team to end with this year.

### Predictions

![Figure 2](/assets/journalism/2024-25-nhl-season/figure-02.png)

I ran the model using data from December 15. Based on the model, I expect the Los Angeles Kings to win the Pacific Divison, the Dallas Stars to take home the Central Division, the Tampa Bay Lightning to re-stake their claim in the Atlantic Division, and the New Jersey Devils to win not just the Metropolitan Division but the President’s Trophy as well. The San Jose Sharks, Montreal Canadiens, Chicago Blackhawks, and Anaheim Ducks are expected to finish at the bottom of the league and in contention for the no 1 overall pick in the draft.

## Division Standings

### Pacific

![Figure 3](/assets/journalism/2024-25-nhl-season/figure-03.png)

### Central

![Figure 4](/assets/journalism/2024-25-nhl-season/figure-04.png)

### Metropolitan

![Figure 5](/assets/journalism/2024-25-nhl-season/figure-05.png)

### Atlantic

![Figure 6](/assets/journalism/2024-25-nhl-season/figure-06.png)

The playoff seeding will look like this:

LA Kings vs Calgary Flames

Edmonton Oilers vs Las Vegas Golden Knights

Dallas Stars vs Winnipeg Jets

Colorado Avalanche vs Minnesota Wild

New Jersey Devils vs New York Rangers

Carolina Hurricanes vs Washington Capitals

Tampa Bay Lightning vs Boston Bruins

Florida Panthers vs Toronto Maple Leafs

## Playoffs

### Method

For the playoffs, I used a different approach because of the format of the NHL playoffs. Since playoffs series are best of 7, oftentimes the playoffs are about how each team's matchup head to head. To accommodate for the playoff format, I used a logistic regression model to find the probability of a team winning. The variables I used were home or away, Corsi %, faceoff win %, penalty minutes %, High danger shots %, and expected goals %.

### Variable Definitions:

- Home or away: 1 denotes the team plays at home, 0 denotes the team plays on the road
- Corsi%: shot attempts for / (shot attempts for + shot attempts against),
- Shot attempts: shots on goal + shots that miss the net + blocked shots
- Faceoff Win%: Percentage of faceoffs won by a team during a game
- Penalty Minute%: Penalty minutes for / (penalty minutes for + penalty minutes against)
- High Danger shots%: High danger shots for / (high danger shots for + high danger shots against)
- High-danger shots: unblocked shot attempts with ≥ 20% probability of being a goal
- Expected Goal%: expected goals for / (expected goals for + expected goals against)

I tested the model using game data from the 2021-22, 2022-23, 2023-24, and 2024-25 season. With 1 donated as a win and 0 as a loss, I found that the model worked was accurate for 73.4% of the games.

Some limitations of the model are that I could not include special teams (powerplay and penalty kill) stats when building the model because I chose to build the model based on data from all game situations (even strength and powerplay and penalty kill) to avoid complexity. While the 6 variables I chose give a good indicator of who will win a game, they do not tell the full story and more variables could be used to improve the model.

![Figure 7](/assets/journalism/2024-25-nhl-season/figure-07.png)

To find the variables needed to predict the playoffs for this current season, I calculated what I expected each statistic to end by finding the average per game and multiplying by 82. I matched up each team head to head and plugged their statistics into the logistic regression model to find the win probability for each team. I then compared the win probabilities of each team and predicted the winner of the series based on which team had the higher win probability.

### Predictions

In the Western Conference, I have the Kings (0.501 win percentage) beating the Flames (0.42). The Golden Knights (0.49) will take down the Oilers (0.43). The Dallas Stars (0.48) will advance past the Jets (0.44) and the Avalanche (0.501) will get the better of the Wild (0.42).

In the Eastern Conference, the Devils (0..51) will defeat the Rangers (0.41). The Capitals (0.52) will beat the Carolina Hurricanes (0.40). The Lightning (0.49) will defeat the Bruins (0.43). Magically, the Maple Leafs (0.52) will advance past the first round over the defending cup champs, Panthers (0.401).

With these winners, the second round will be Kings vs Golden Knights, Stars vs Avalanche, Devils vs Capitals, and Lightning vs Leafs.

In round 2, the Golden Knights (0.52) will beat the Kings (0.40). The Stars (0.48) will take down the Avalanche (0.44) for the second year in a row. The Capitals (0.47) will surge past the Devils (0.45). The Leafs (0.461) will win another series moving past the Lightning (0.459).

This sets up the Western Conference finals to be the Dallas Stars vs Vegas Golden Knights, and the Eastern Conference Final to be the Washington Capitals vs Toronto Maple Leafs.

In the western conference finals, the Golden Knights (0.47) will advance to their 3rd Stanley Cup final over the Dallas Stars (0.45), and in the East the Capitals (0.54) will make it to the dance over the Maple Leafs (0.38). With the Golden Knights and Capitals both advancing this will set up a rematch of the 2018 Stanley Cup Finals.

According to my model, in the 2025 Stanley Cup Final, history will repeat itself as the Washington Capitals (0.54) will become Stanley Cup Champions beating the Golden Knights (0.38).

![Figure 8](/assets/journalism/2024-25-nhl-season/figure-08.png)

## Conclusion

After a lot of testing and two different models, I predict that the Washington Capitals, who currently sit 3rd in the NHL standings, will win the Stanley Cup in the 2024-25 season. However, these predictions are just predictions, nothing in this article is a guarantee. A lot can change throughout an 82-game season. Teams can fall apart and lose a bunch of games like what is currently happening to the New York Rangers, a team near the bottom of the league can find their form and rise their way up the standings like the St Louis Blues did in 2019, teams can make trades, or unfortunately, injuries can happen. However, if the current trends continue to stay somewhat similar throughout the season, this article may end up being a good indicator of what lies ahead.

## Sources

**Moneypuck:** [**https://moneypuck.com/data.htm**](https://moneypuck.com/data.htm)

**Northern Michigan University:** [**https://commons.nmu.edu/isbs/vol36/iss1/17/**](https://commons.nmu.edu/isbs/vol36/iss1/17/)

**Hockey Analytics:** [**https://hockeyanalytics.com/2008/01/the-ten-laws-of-hockey-analytics/**](https://hockeyanalytics.com/2008/01/the-ten-laws-of-hockey-analytics/)
