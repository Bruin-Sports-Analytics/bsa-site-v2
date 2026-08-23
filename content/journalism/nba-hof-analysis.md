### By: Trent Bellinger and Derek Nakagawa

## Introduction:

Since 1959, the Naismith Memorial Basketball Hall of Fame has honored and celebrated some of the game’s greatest moments and brightest stars. To be nominated and selected to be in the Hall of Fame is not only a huge honor for the player, but also a sign to know that they were one of the best players to ever play basketball. Many of these players were role models, inspirations, and key figures in the NBA that shaped how the game is played today. Less than 5% of the players to ever play in the NBA ever get nominated, and even less get selected to be part of this elite group.

With this in mind, what does it take in order to be a part of the Hall of Fame? What made each one of these players stand heads above the rest? Throughout this article we are going to explore what is necessary to be known as one of the best players in NBA history and to be selected to be a part of the Hall of Fame.

## Data Cleaning:

The NBA has been around since 1949 and there have been many many rule changes including the three point line, legalizing of the gather step, and many more that play a huge role in modern basketball. In order to begin to view a correlation between in-game statistics and induction into the Hall of Fame, I decided to base my model on only the data of players who started their career in 1980 or later and ended their career before 2018. This is because modern basketball is considered to have started in 1979 when the three-point line was introduced in 1979. Also, we are not including active players or players who have recently retired since players are not considered for the Hall of Fame until 4 full seasons after they retire.

In order to start the project, we gathered the data for all of these players and split the data into three datasets by the 3 main position groups in basketball: guard, forward, and center. Each position plays a unique role in the game so it would make sense to compare players relative to their position rather than comparing them against each other. As a result, we made 3 separate models, one for each group.

## Guards:

We will first focus on guards. For the guards, the most relevant statistics in predicting induction into the Hall of Fame were field goals made, 3-pointers made, assists, and points. In total, 21 different variables were used to create the model. These variables were selected through experimentation with different linear models, and the model created by these variables was the most efficient in predicting Hall of Fame induction. The below graph shows the prediction made by the linear regression model for all guards who played from 1980 to 2018, and whether they were inducted into the Hall of Fame.

![Figure 1](/assets/journalism/nba-hof-analysis/figure-01.png)

According to the model, a score of over 0.406 is a predicted Hall of Fame guard. The model can predict a Hall of Fame guard with a 84.62% success rate. The model can predict a non Hall of Fame guard with a 99.74% success rate.

Below is what the model predicts for guards who are currently playing in the NBA.

![Figure 2](/assets/journalism/nba-hof-analysis/figure-02.png)

The model predicts that James Harden, Stephen Curry, Russell Westbrook, Chris Paul, and Kyle Lowry have had careers that deserve induction into the Hall of Fame. There are some notable names missing, such as Luka Doncic and Ja Morant, who are two of the best guards in the league currently. However, one of the most important aspects of being inducted into the NBA Hall of Fame is longevity, which these players have yet to prove.

## Forwards:

We now move on to the forwards. For the forwards, the main relevant statistics in predicting induction into the Hall of Fame were field goals made, 2-pointers made, free throws attempted, and offensive rebounds. For forwards, 14 different variables were found to be significant and were used to create the model. Similar to the guards, the below graph shows the prediction made by the model for all forwards who played from 1980 to 2018, and whether they were inducted into the Hall of Fame.

![Figure 3](/assets/journalism/nba-hof-analysis/figure-03.png)

A player who has a score of over 0.31 by the model is a predicted Hall of Fame forward. According to the data, this model predicts a Hall of Fame forward with a 81.25% success rate, and it predicts a non Hall of Fame forward with a 99.56% success rate.

Below is what the model predicts for forwards who currently play in the NBA.

![Figure 4](/assets/journalism/nba-hof-analysis/figure-04.png)

Unsurprisingly, Lebron James has severely outperformed the model, so he is a clear Hall of Fame Inductee when he eventually retires. The other forwards who have had a Hall of Fame caliber career according to the model are Kevin Durant, Giannis Antetokounmpo, Jimmy Butler, Andre Iguodala, DeMar Derozan, and Kawhi Leonard.

## Centers:

Finally, we will look at the centers. For centers, the statistics that were found to be the most significant in predicting induction into the Hall of Fame were total rebounds, blocks, field goals made, and free throws attempted. For centers, I used 11 different variables to create the model. Again, the scatterplot below shows the prediction made by the model for all centers who played from 1980 to 2018, and whether they were inducted into the Hall of Fame.

![Figure 5](/assets/journalism/nba-hof-analysis/figure-05.png)

According to the model, a score of over 0.32 indicates a predicted Hall of Fame center. The model can predict a Hall of Fame center with a 81.25% success rate, and it can predict a non Hall of Fame center with a 99.09% success rate.

Below is what the model predicts for centers who currently play in the NBA.

![Figure 6](/assets/journalism/nba-hof-analysis/figure-06.png)

The model predicts that 17 current centers will be inducted into the hall of fame. This is certainly due to the evolution of the center position, where the modern center is much more involved in a team’s offense. This leads to a significant boost in statistics for centers who currently play in the league compared to centers who played in previous eras. Given that about 4-5 players are inducted into the hall of fame every year, it is safe to say that the top 8 players on the above list have a significant chance at making the Hall of Fame by the end of their careers.

## Limitations of Model:

The biggest limitation of the model is that it can’t predict the future success of current players in the NBA. Like stated above, there are many great young talents such as Luka Doncic, Ja Morant, and Devin Booker that were not included in the model. This is because based off their current stats, they don’t have a good enough resume to be considered a NBA Hall of Famer and need more time to improve on their game and prove why they will be one of the best players in NBA history.

Another thing to note is that sometimes it takes more than 4 years for some players to be nominated to the NBA Hall of Fame. This can explain some of the inaccuracy of the model since there are some players like Chauncey Billups who retired in 2014 and is only now being placed on the ballot for the NBA Hall of Fame despite being the 2004 Finals MVP, 5 time All-Star, and Olympic Gold Medalist.

## Non-Game Stats

Outside of in-game statistics, we wanted to take a quick look at non-game statistics including number of All-Star Games, Most Valuable Players (MVPs), and Defensive Player of the Years (DPOYs). These awards are given to players who had an excellent season and contribute to their team’s winning culture. Below displays the NBA’s retired MVPs and DPOYs in the previous seasons and the distribution of NBA All-Star game selections between hall-of-famers and non-hall of famers.

![Figure 7](/assets/journalism/nba-hof-analysis/figure-07.png)

The table above shows that earning an MVP guarantees the player’s spot in the NBA Hall of Fame. The MVP is used to honor the player with the best individual performance of the season so it would make sense that players who earn this are guaranteed a spot in the Hall of Fame. However, for Defensive Player of the Year, there are some players who were not and likely are not going to be nominated for the Hall of Fame. Although the DPOY is used to award the best defensive player of the season, it isn’t enough to prove greatness in the sport of basketball. Many of the players who’ve gotten DPOY have also made an impact through rebounding (Rodman), dominating the paint (Mutombo), or just being a great two-way player (Payton). With this in mind, we are going to look at the last statistic, All-Star Game Selections.

![Figure 8](/assets/journalism/nba-hof-analysis/figure-08.png)

From the graphic above, it is evident that players with more than seven all star selections are nearly guaranteed a spot in the NBA Hall of Fame. This is likely due to the fact of long-term greatness in the game. The average NBA player is in the league for around four years so being selected as one of the best players in the league for seven different seasons is absolutely astounding. There are some players who have five or six all-star appearances and could be future nominees but to guarantee a spot, it seems like seven games is the number to beat.

## Conclusion:

Although there are many great players, there are only a few considered to be legends of the sport. Athletes who were icons, role models, and shaped the game to what it is today. The NBA Hall of Fame honors these players and through our analysis found some pretty interesting insights. For one, any player who earns the MVP of a season or has played in seven different All-Star games are all but guaranteed a spot in the Hall of Fame. In addition, the position the athlete plays at plays an important factor in determining what stats are necessary to be inducted into the Hall of Fame. Each position is specialized and requires a different set of skills to help its team succeed. For guards, it’s field goals made, 3-pointers made, assists, and points. For forwards, it’s field goals made, 2-pointers made, free throws attempted, and offensive rebounds. And for centers, it’s total rebounds, blocks, field goals made, and free throws attempted. These statistics outline the most important role for each one of these positions and to be truly considered great in the game of basketball, the player has to absolutely dominate in these areas.
