### By: Ryan Liu and Shaash Sivakumar

## Introduction

In an era marked by the relentless progress of modern technology and advancements in healthcare, professional athletes, particularly in the realm of the National Basketball Association (NBA), are defying the conventional limits of career longevity. The intersection of cutting-edge medical treatments and state-of-the-art training methodologies has ushered in a new age where players not only extend their careers but also thrive on the court well beyond what was once deemed possible. LeBron James, for example, is making history, playing in his 21st season and still averaging over 25 points per game (PPG), whereas even other legendary players, such as Kevin Garnett, only averaged 3 in his 21st season. The NBA has become a fascinating case for the study of player longevity, as even significant injuries that were previously deemed career-ending, such as tearing an ACL or an achilles tendon, are now seen as less fatal to players’ careers, due to the fact that many have come back from these injuries and played at a high level, such as Kevin Durant, Zach Lavine, Jamal Murray, and more. So, with that being said, it might be quite interesting to look into the career longevity of former all star players to examine the career lifespans of current all stars in the league. By examining certain factors relating to players’ health, minutes played, and more, we can begin to forecast the number of years the league’s best players will play.

## Methodology

For this study, we decided to only predict the career lengths of the all-star caliber players in the league at the moment, so we collected data from all all-star players that retired since 2010 and put them into a spreadsheet, displaying the variables defined below:

- *General Information:* Height, Weight, # of all star appearances
- GP: Total Games Played in the NBA
- MP: Total Minutes Played in the NBA
- Usage Rate: Average Usage Rate throughout career in NBA
- LSM: Average Minutes Played in Final NBA Season
- SLSM: Average Minutes Played in Penultimate NBA Season

For all the players we used in this study, we aggregated those stats above because we believed that they had the most correlation to how long an NBA player would play in the league. First off, for the general variables, we definitely believe that height and weight are significant factors to a players career length, as taller and heavier players, as we have seen in the past, likely will have shorter careers due to having a higher risk of being injured. History has shown us a number of examples, like Yao Ming, for instance, who was 7’6”, but suffered a number of knee and foot injuries, so his career was shortened to just 9 years. This is still the case in the modern day, as a player like Zion Williamson, who is 280 lbs, has been plagued with injuries to start his career. Another piece of data we took into account was the # of all star appearances a player had, since the more all star appearances a player had, the more likely they were playing more minutes in more games compared to a regular player, which likely would take a toll on said players’ bodies. Additionally, we tracked the number of total games and minutes played, as we believe this probably has the most correlation to a player’s career span, as the mileage built up on a player’s body likely has a significant impact on their playing career. Usage rate was also taken into account to check if ball dominance had a significant effect, and the average minutes played in the past two seasons was also tracked in order to track the difference in average minutes within the final two years and their average minutes played throughout their career. We did this because players typically see a dropoff in minutes in their last two years, so these minutes might have a decent indication of when a player is soon to retire.

![Figure 1](/assets/journalism/predicting-nba-career-lifespans/figure-01.png)

This graphic illustrates the contrast in average minutes played by select Hall of Famers throughout their careers, highlighting the disparity between their overall career average and the average minutes played in the last two years. A higher numerical difference signals a notable decrease in minutes logged on the court during the final two years of their careers. This statistic holds considerable importance in the model's ability to predict an NBA player's total lifespan. The graph vividly portrays that retired Hall of Famers experienced a significant decline in minutes played during their last two years, ranging from 5 to 20. These findings underscore the pivotal role played by this metric in assessing an athlete's career trajectory.

![Figure 2](/assets/journalism/predicting-nba-career-lifespans/figure-02.png)

This graph visually depicts the performance of our model with the training data, showcasing its accuracy trend. The convergence point hovers around 0.793, reached through 250 iterations of assessing and recording the model's accuracy. By plotting these accuracies, we glean valuable insights: our model effectively predicted the longevity of NBA players in the training data approximately 79.3% of the time. While this success is noteworthy, it also unveils certain limitations, which we will delve into later in the discussion.

![Figure 3](/assets/journalism/predicting-nba-career-lifespans/figure-03.png)

This bar chart represents the correlation between the positions and the longevity (in years) of NBA players within our training data. The absence of a pattern in the graph suggests that a player's position does not significantly influence their longevity in the NBA. Several factors contribute to this lack of correlation. A primary factor we identified is the prevalence of Hall of Fame players in our training set, most of whom boast robust and enduring careers. Traditionally, in the NBA, Power Forwards (4s) and Centers (5s) are expected to face early career injuries, leading to shorter playing careers. However, our analysis focuses on players who have established themselves as bonafide stars in the league by consistently playing at a high level year after year. This implies that they have either successfully avoided or overcome the injuries that typically shortens careers. Consequently, we have reasoned that analyzing the impact of position would be more pertinent when predicting outcomes for incoming rookies rather than for well-established stars who have proven their durability over time.

![Figure 4](/assets/journalism/predicting-nba-career-lifespans/figure-04.png)

This graph depicts the correlation between the number of games played and the longevity of NBA players within our training set. The visual representation highlights a robust positive linear relationship between these two variables. The data strongly suggests that the quantity of games played by a given NBA player significantly influences their overall career longevity. This observation underscores the pivotal role that games played can play in our model's ability to predict the lifespan of individual NBA players.

## The Model

So, we developed a Linear Regression Model to predict the career lifespans of the top NBA players. Whilst developing the model, we experimented with which of the variables to include for the model to analyze since we thought that having the model analyze 7 or so different variables could potentially lead to overfitting and overanalysis, so we decided to limit our database to only 4 variables: GP, MP, height, and weight, as these had the most correlation to a player’s career length. Additionally, we performed some feature weighting as well, as we implemented Ridge Regression, which is a technique to regularize data by shrinking values towards zero in order to deal with multicollinearity. The method utilizes a parameter called alpha, which controls the strength of the regularization, and we also experimented with that number to determine the optimal value for our model to achieve a satisfactory accuracy. So, after training the model to achieve a consistent accuracy of around 80%, we used the model to predict the career lengths of 24 of aging and upcoming stars in the NBA:

### Predicted Variables

Years Played: Amount of years player is predicted to play in the NBA

![Figure 5](/assets/journalism/predicting-nba-career-lifespans/figure-05.png)

## Conclusions and Limitations

While our model was reasonably successful with its predictions, there were some results that people may deem questionable, such as the predictions for the longevity of Donovan Mitchell, Anthony Edwards, and Ja Morant. While this definitely seems questionable, there is definitely an argument that since these young stars are heavily reliant on their athleticism and dunks, their talents may fade due to age, and these stars are after all more prone to injuries. Additionally, we must note that there are many other factors that may have caused the presence of outliers and thus affected the performance of our model in predicting the career lengths of NBA stars. For instance, how a player’s role changes throughout their careers may abnormally prolong or cut short their career. For example, Udonis Haslem of the Miami Heat barely played in his final many years on the team, but he continued to have a spot on their roster due to his locker room presence and leadership. Additionally, the data we collected is not the largest, since we only looked at all-star players that retired, so the predictions could also be made more accurate with a larger sample size. Especially since we only collected data from players that were all stars, we could improve the model by collecting data from more players in general. We could also, in the future, collect data on every player in the NBA to predict everybody’s career length. Overall, with the NBA soon turning a new leaf to newer, younger superstars, we look forward to seeing how the NBA grows and how their careers evolve.

- [https://www.basketball-reference.com/](https://www.basketball-reference.com/)
- [https://www.statmuse.com/](https://www.statmuse.com/)
