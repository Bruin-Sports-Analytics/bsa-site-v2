### By: Ryan Kawamura

## Introduction

With a new stream of talent coming from college and across the world to the NBA, basketball is and forever will be a constantly changing game. However, is there a statistic that proves to be the most important and indicative of a championship caliber team? In this project, I researched the statistics of all of the NBA teams over the past decade in an attempt to find whether there is a statistic that is common among winning basketball teams.

## Background

Each year, every NBA team plays 82 games in what is called the regular season. Of the 30 teams, the teams with the highest record in the East and West Conference are invited to the Playoffs for a chance to win the Finals and be deemed the best team in the NBA. In order to find the best teams from each season, I retrieved the two NBA teams that made it to the finals as they are the best from the East and West Conferences. Then, I analyzed their average statistics over the season and attempted to find any common statistics that those teams excelled at.

## Methodology

In order to find what statistics the two teams that went to the Finals excelled at in that specific season, I sorted the data frame of the data on both teams in descending order by the column of the statistic that I am trying to observe, and looked at the top five teams in that category. If one of the NBA teams that made it to the Finals was in the top five in that category, I would append that statistic to a list that kept track of the statistics the team ranked the top five in. I did this for every season from 2013 to 2022 (the past decade). I also utilized my knowledge and experience playing basketball to analyze the results and come to conclusions based off of the data.

There are three categories of statistics I chose to analyze; those categories are per game statistics, advanced statistics, and shooting statistics.

## Analysis 1: Per Game Statistics

First, we will analyze the per game statistics. Examples of these include field goal attempts (FGA), offensive rebounds (ORB), and turnovers (TOV). Essentially, the per game statistics are the core and more popularly known statistics. A heat map of the data frame consisting of the available data from the per game statistics is presented down below to not only help visualize what data is present, but also help compare the averages, totals, and percentages between the NBA teams.

![Figure 1](/assets/journalism/stats-nba-champs/figure-01.png)

Example of sixteen NBA teams' average 2021-2022 Per Game Statistics

Using the methodology mentioned previously, I created a bar graph containing the statistics that the two teams in the past 10 finals ranked top 5 in.

![Figure 2](/assets/journalism/stats-nba-champs/figure-02.png)

![Figure 3](/assets/journalism/stats-nba-champs/figure-03.png)

Bar plot of number of Per Game Statistics the two NBA teams in Finals ranked top 5 in

As you can see from the visualization, 16 of the 20 teams to make the Finals in the past decade have ranked in the top 5 in the league for their 2 point field goal percentage. Considering that none of the 20 teams that made the finals in the last decade ranked in the first five for 2 point field goal attempts, that allows us to assume that a common trend in these winning teams is that they take high percentage 2 point shots that are more likely to go in. This can be attributed to teams running plays that get their players open and having more uncontested shots, shooting more layups, and taking shots closer to the basket as those are higher percentage shots and more likely to go in. Another reason for this is that the NBA teams have players that are talented and proficient at making 2 point shots.

Field goal and 3 point percentage are also in the top five most common statistics that successful NBA teams excelled at. Especially in recent years, the 3 point shot has become a strategy that many NBA teams have adapted to using as it spaces out the court and forces players to guard further from the basket. This can also play a role in the high 2 point field goal percentage, as being proficient in three point shooting forces the defending team to guard the offensive players more closely and farther away from the basket, which opens up the basketball court and allows for more less contested 2 point field goals. These statistics will be further looked at in the analysis of shooting statistics.

The next most prominent statistic that does not relate to scoring points is defensive rebounds. With 9 of the 20 teams being a top-5 rebounding team in the years they made the Finals, this proves to be an important statistic. Defensive rebounds are crucial to a successful basketball team. If a team allows the offense to grab a rebound, then that allows the offense to have multiple possessions, which allows for more opportunities to score. Giving the opposing team less shots, keeps them from having more attempts at scoring.

## Analysis 2: Advanced Statistics

Now, we will analyze advanced statistics using the same methodology as before. The difference between per game statistics and advanced statistics is that advanced statistics involves keeping track of more in depth statistics. There is data on statistics such as free throw attempt rate, which is how many free throw attempts are taken per field goal attempt, and pace, which is an estimate of possessions per 48 minutes. Here is a heatmap of the data frame of the data available for the advanced statistics.

![Figure 4](/assets/journalism/stats-nba-champs/figure-04.png)

Example of data frame of sixteen NBA teams average 2021-2022 Advanced Statistics

Here you can see a visualization of the number of advanced statistics the two NBA teams in the Finals ranked the top 5 in.

![Figure 5](/assets/journalism/stats-nba-champs/figure-05.png)

![Figure 6](/assets/journalism/stats-nba-champs/figure-06.png)

Bar plot of number of Advanced Statistics the two NBA teams in Finals ranked top 5 in

As you can see from the visualization, 19 of the 20 teams to make it to the Finals in the past decade ranked in the top five in effective field goal percentage (eFG%). Effective field goal percentage is a statistic that calculates the field goal percentage but accounts for the fact that 3 point shots are worth more than 2 point shots. Essentially, it measures the efficiency of shot attempts while taking into account differences in shot selection. This statistic is calculated with the following formula:

![Figure 7](/assets/journalism/stats-nba-champs/figure-07.png)

An example of this statistic at work is if two players shoot the same field goal percentage, but Player 1 makes 4/6 2 point shots and 1/4 3 point shots while Player 2 makes 3/6 2 point shots and 2/4 3 point shots. In this scenario, even though in total both players had the same field goal percentage, Player 2 has a higher effective field goal percentage because he made more three point field goals. Since 19 of the 20 teams that made it to the finals in the past 10 years ranked in the top five for eFG%, having a high eFG% is clearly a statistic that helps NBA teams be successful. This follows a common trend that is apparent in the data that the 3 point shot is valuable not only in the sense that it is worth more than a 2 points, but also because it spaces out the floor and thus allows for more opportunities to score inside.

The second most relevant statistic is True Shooting Percentage (TS%). This statistic is similar to eFG% because it measures the shooting percentage while taking into account the difference in points, but also taking into account the free throw. From the eFG% and TS%, we understand that it is important for teams to find a balance between two point and three point attempts, and to take into consideration their field goal percentage at both ranges in order to be a successful team. A team cannot solely rely on one or the other.

The next three statistics that the best teams are proficient at are statistics that simply indicate that a team must be better than the other and score more points. Thus, we will neglect these three statistics (MOV, NRtg, and ORtg). The rest of the statistics are uncommon in winning teams as less than 7.5 teams that made the Finals ranked in the top five for them, so will not use them to indicate a common statistic in winning teams.

## Analysis 3: Shooting Statistics

Now we will look into shooting statistics. Shooting statistics are in-depth statistics into NBA teams shooting tendencies and percentages. For instance, there are percentages of field goal attempts from different distances from the basket (0-3 feet, 3-6 feet, 10-16 feet, 16 feet - 3 point range) as well as the field goal percent from different distances.

![Figure 8](/assets/journalism/stats-nba-champs/figure-08.png)

Example of data frame of sixteen NBA teams average 2021-2022 Shooting Statistics

Below is a visualization of the number of teams that made the finals in the past ten years that ranked in the top five in each shooting statistic.

![Figure 9](/assets/journalism/stats-nba-champs/figure-09.png)

![Figure 10](/assets/journalism/stats-nba-champs/figure-10.png)

Bar plot of number of shooting statistics the two NBA teams in Finals ranked top 5 in

As you can see from the visualization, 15 of the 20 teams ranked in the top five in field goal percentage (FG%) and 2 point field goal percentage (2P.1), which agrees with the analysis of the per game statistics. Additionally, 15 teams ranked in the top five in 0-3.1, which is field goal percentage from 0 to 3 feet from the rim and 12 teams ranked in the top five in 16-3P.1 (16 feet to 3 point field goal percentage) and 3P.1 (3 point field goal percentage). This data shows that successful teams had higher field goal percentages from 0 to 3 feet (close to the hoop) and from 16 feet to past the 3 point line (shots worth 3 points or close to it). Given that only 8 teams ranked in the top five in 3-10 feet field goal percentage and only 7 teams ranked in the top five in 10-16 feet field goal percentage, we can see that 0 to 3 feet and 16 feet to past the three point line are the shots that successful teams excel at. Again, this reiterates the effect of teams being able to make three point shots, and its ability to open up the floor and in turn allow for easier two point shots. This evidence points towards the use of the strategy implemented by teams from the high school level to the NBA commonly known as “Three or Key.”

## “Three or Key” Strategy

The “Three or Key'' strategy is a game plan where a team only takes shots in the key or behind the three point line. The ideology behind this strategy is that any shot closer than the three point line is worth two points, so a player might as well take the “easiest” shot (as close to the hoop as you can get). What has been emphasized throughout this project is teams having players that are talented three point shooters to help space out the floor and allow for these two point shots to be more uncontested, and hence easier to make. From the analysis of the shooting statistics, we highlighted the fact that the shooting areas where the best teams have the highest percentage from are 0 to 3 feet from the rim and 16 feet to past the three point line, which is evidence of successful teams implementing the game plan of “Key or Three.”

## Conclusion

The question I tried to solve with this project was what was a common statistic that is prevalent in successful teams. From my analysis and research, I found that common statistics that the best teams from the past decade were proficient at were 2 point field goal percentage, 3 point field goal percentage, and defensive rebounds. Additionally, from looking deeper into these statistics, we found that effective field goal percentage and true shooting percentage were very prevalent in successful teams, which brought to light the point that a team must not only be proficient at shooting from both 2 point and 3 point field goal range, but also be able to find an effective and dependable balance between the two forms of scoring in order to score more points than their opposing team. Finally, from the shooting statistics, we found what range the best teams had the highest shooting percentage from — 0 to 3 feet and 16 feet to past the three point line. Bringing all of this analysis together, we were able to piece together that these statistics pointed towards teams utilizing the “Key or Three” strategy. From the data, we are able to assume that this strategy, knowing or unknowingly, is implemented by winning teams. Most recently, the Golden State Warriors won the NBA Finals in the 2021-2022 season. They are most commonly known for their players who excel at the three point shots, commonly naming some of these star players as “Splash Brothers.” However, if you watch the Warriors play, you will see that this proficiency to shoot threes also opens up the court to allow their big men (Center and Power Forwards) get easier close range shots. Their guards are also allowed to take advantage of the defense guarding them closely to prevent them from shooting threes to drive around them and get an open shot at the hoop from close range. Next time you watch the NBA, look for these statistics, and see if you can identify a team using this “Key or Three” strategy.

## Reflection

In an attempt to solve this question, I not only found evidence that helps show a common statistic, but also a strategy and game plan that is found evident in championship caliber teams. This goes to show that when analyzing data, sometimes the question you are researching can open up a world of ideas and connections.

For more information on statistics or clarification on statistical abbreviations, visit source [https://www.basketball-reference.com/leagues/NBA_2022.html](https://www.basketball-reference.com/leagues/NBA_2022.html).
