## Introduction

Whether players and fans like it or not, injuries are an unavoidable part of the game of basketball. As most players will get injured at some point within their career, the question isn’t if it will happen, but how long will they be sidelined for?

To combat this, teams have opted for a strategy of load management, which allows star players to skip games in the name of preserving their stamina and health for a deep playoff push. With big names such as Stephen Curry, James Harden, Kevin Durant, and Kawhi Leonard partaking in said strategy, it has left countless fans disappointed at missing their shot in seeing their favourite stars in action. In the beginning of the 2017-18 season, the NBA implemented a player resting program that prohibited teams from resting healthy players for either nationally-televised, or highly anticipated games. Teams who are caught in conducting load management would be fined a minimum of $100,000 with a possibility of facing league investigation.

The practice of load management has also been questioned for its effectiveness, with many players from previous eras stating that they had no problem playing back-to-back games during their primes. In this article, we’ll be exploring the correlation between an athlete’s injury, and their usage rate leading up to it to determine whether load management is necessary for players to preserve their health.

## Sourcing the Dataset

The dataset was sourced from the official NBA website for the tracking and hustle stats. As for the complete list of injuries, the dataset was sourced from Kaggle, where we were able to download it directly as a csv file.

## Preparing the Data

![Figure 1](/assets/journalism/nba-load-management-injury/figure-01.png)

Our main goal when cleaning the data was to order it in such a way that we could create a multiple regression model where the explanatory variables are the variables that we’ve previously defined above, and the response variable being the length of each player’s injury.

Without going over too much of the technical stuff, here’s what we did:

1. Found the length of each player’s injury by grouping by their names, and performed datetime subtraction where the current date has a null value for “Acquired” column, and the previous date has a null value for “Relinquished” column
2. Accounted for players who suffered multiple season long injuries (E.g. Klay Thompson) and season ending injuries to have player return dates, as those are usually not tracked by the NBA.
3. Merged the  *Injury*  dataset and the  *Hustle and Tracking Metric*  dataset together on the “Player Name” and “Season” column.

## Methodology

These are the explanatory variables that we tested for our model and their definitions:

1. GP: Number of games played
2. DIST. MILES: Average distance travelled a player runs per game in miles
3. AVG. SPEED: Average speed of a player
4. CHARGES DRAWN: Average number of charges (a type of foul) a player draws per game
5. SCREEN ASSISTS: Average number of screens a player makes that leads to another player directly scoring
6. DEFLECTIONS: Average number of deflections (tipping a pass, tipping a dribble, making a steal, getting a loose ball, blocking a shot etc.) a player makes per game
7. LOOSE BALLS RECOVERED: Average number of loose balls (balls in which no player has control of the ball) recovered per game
8. CONTESTED SHOTS: Average number of shots contested (when a player tries to block another player from shooting) per game

As we’re doing a multiple linear regression model, our first objective is to remove predictors which do not contribute a significant factor to the response variable. We can see from the image below that games played, charges drawn, screen assists, deflections, as well as contested shots do not meet the requirement to be a significant predictor for our model.

![Figure 2](/assets/journalism/nba-load-management-injury/figure-02.png)

## Analysis

![Figure 3](/assets/journalism/nba-load-management-injury/figure-03.png)

To gauge the effectiveness of the model, we use a metric as shown above known as the adjusted R-squared, which indicates how well a model explains the variation of the response variable while also taking into account the number of independent variables within the [model.As](http://model.As) can be seen from the results above, we can see that the model fits quite poorly onto the given dataset with a 0.02656 adjusted R-squared, showing that there is no direct relationship between the physicality of a player’s game and the length of their respective injuries.

Just like Gordon Hayward’s freak accident of an alley-oop in his first game as a Celtic, which left him with a fractured tibia and dislocated ankle leaving him injured for the remainder of the season, freak accidents are sometimes unavoidable in the NBA, no matter how much load management each player participates in. The graphs of each player’s injury length against each predictor will also be shown below to demonstrate the randomness of a player’s injury length within our model.

![Figure 4](/assets/journalism/nba-load-management-injury/figure-04.png)

![Figure 5](/assets/journalism/nba-load-management-injury/figure-05.png)

![Figure 6](/assets/journalism/nba-load-management-injury/figure-06.png)

We can see that the injury length vs loose balls received graph is somewhat right skewed, the injury length vs average speed graph makes a somewhat normal distribution, while the injury length vs average speed graph appears to be somewhat uniform in nature. This perpetuates the idea that an injury length is random in nature and can’t be reliably explained by the effort a player exerts when playing an NBA game..

### Additional Information Regarding Injuries

![Figure 7](/assets/journalism/nba-load-management-injury/figure-07.png)

![Figure 8](/assets/journalism/nba-load-management-injury/figure-08.png)

The graphs above highlight the most commonly occurring injuries, as well as their length of average recovery time. We can see that knee injuries are the most commonly occuring injury, with a little above 500 cases over the past 5 seasons and an average recovery time of 30 days. Ankle injuries are up next with about 450 cases and a slightly lower average recovery time of 20 days. As for the third most commonly occurring injury, it would have to be COVID protocols which were rampant throughout 2020-2022, and took an average of 2 weeks to recover from.

Though these injuries are not as commonly occuring, the data suggests that they take relatively longer to heal, with abdominal injuries taking an average of 80 days, finger injuries taking around 45 days, and elbow injuries taking around 40 days.

## Conclusions/Improvements/Limitations

Through our analysis, we concluded that there is no evidence that load management is effective for reducing the severity of a player’s injury. Injuries are quite unpredictable in nature, especially in a contact sport such as basketball where running, and jumping at high speeds is expected.

Initially, the researchers wanted to take the statistics of the last 10 games prior to each injury, which would allow for a more detailed outlook on how game schedules may affect the severity of an injury sustained. However, obtaining the necessary data proved to be quite difficult as we would have to scrape multiple seasons worth of game logs from each player who played between 2019-2024, which would be impractical. A work around to this problem would be to randomly sample several players and perform an analysis of the severity of their injuries relative to their game schedules and how hard they played in the 10 games prior to getting hurt.

## Sources

[https://www.kaggle.com/datasets/loganlauton/nba-injury-stats-1951-2023](https://www.kaggle.com/datasets/loganlauton/nba-injury-stats-1951-2023)

[https://www.nba.com/stats/players/speed-distance](https://www.nba.com/stats/players/speed-distance)

[https://www.nba.com/stats/players/hustle](https://www.nba.com/stats/players/hustle)
