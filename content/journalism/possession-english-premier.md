### By: Divik Chotani, Siddharth Singh, and Shawn Reznikov

### Intro:

How to win a soccer game? Simple, score goals. It goes without saying that to score a goal, a team must be in possession of the soccer ball. But how much does the possession of the ball throughout the game impact a team’s standing at the end of the season? Is there a positive correlation between possession and points earned? Our investigation attempts to answer these questions and break down the influence of possession on the game of soccer.

Graph 1

![Figure 1](/assets/journalism/possession-english-premier/figure-01.png)

The graph above shows how possession can affect the expected points a team earns. First, let's define these terms. Possession refers to what percent of the game the soccer ball was under the control of one team. If a team had 60% possession, it would mean that for 60% of the game, or for about 54 of the 90 minutes, that team had control of the ball. The second term is expected points (xPTS), which is a metric used to calculate how many points a team should have gotten in a game based on how good their attack and defense were. The value for expected points ranges from 0 to 3 for every game, and the better a team performed, the higher their expected points score. This score is given to every team for every game they play, and the sum is their total expected points score for the season, which is what is shown on the y-axis of the graph.

Let’s start by analyzing a scatterplot of Possession Percentage vs Expected Points. In the legend, we can see that we are comparing the bottom three teams, but with a specific focus on Leeds United, Leicester City, and Southampton versus other teams in the league. We are doing this because these teams were the three worst performing teams in the league. To give some background, the bottom three teams get relegated (or demoted) to the Championship, the league of soccer below the Premier League. Additionally, the top 4 teams get admitted to the Champions League, a tournament involving the best teams from the various leagues of Europe. We will use this information later.

We see a positive trend between possession and xPTS. Leeds, Leicester, and Southampton are among the 13 teams that held an average possession of 50 percent or less. These three teams got relegated in the 22-23 season.

Expected points is a value calculated with many factors. The positive correlation between possession and expected points confirms the idea that having more time with the ball correlates to a higher probability of winning a soccer game.

Graph 2: Scatterplot with Linear Regression

![Figure 2](/assets/journalism/possession-english-premier/figure-02.png)

This graph uses possession in correlation to actual points earned during the 22-23 season. The top four teams that made it to the Champions League–Newcastle, Manchester United, Arsenal, and Manchester City–are in blue and the teams that got relegated–Leicester City, Leeds United, and Southampton–are in red.

This visual shows the teams that value the ball throughout the game win more. Some teams throughout the history of soccer have let the opponent have more possession of the ball and use a counter-attacking philosophy to win games. They take advantage of the fact that more opponents are on their half of the field to attack when they win the ball and make a run for goal. However, as exemplified by the graph, these teams usually don’t hold a high standing at the end of the season.

Graph 3 & 4: Radar Chart of Leeds and Leicester

![Figure 3](/assets/journalism/possession-english-premier/figure-03.png)

![Figure 4](/assets/journalism/possession-english-premier/figure-04.png)

The two radar charts above breakdown Leeds and Leicster (green) based on specific metrics and compare them to the league average (blue). There are six variables that are shown for each of the two teams. Let’s first define these variables

**Possession** : This represents the amount of time a team has the ball compared to its opponent. It's usually calculated as the percentage of the total match time that a team has the ball.

**Progressive Passes** : These are passes that move the ball towards the opponent's goal. A progressive pass is considered to have advanced the ball towards the opponent's goal by a specific amount, depending on the situation (e.g., 10 yards in the final third, 30 yards in the middle third).

**Pass% (Pass Completion Percentage)** : This is the percentage of a player's passes that are successfully completed. It gives an idea of a player's accuracy and control over the ball.

**Attacking Third Touches** : This represents the number of times a team touches the ball in the attacking third of the field. A higher number indicates more activity and engagement in the opponent's half.

**xG (Expected Goals)** : This is a metric that measures the quality of a goal-scoring opportunity. It provides a measure of how likely a particular shot is to result in a goal based on historical data of similar shots.

**xGA (Expected Goals Against)** : This is the expected number of goals a team is expected to concede based on the quality of the shots they allow their opponents to take.

The first four variables defined can be interpreted as different ways to not only quantify the ability of each team to hold onto the ball, but also qualify how productive they are with the ball. For example, a team could have 90 percent possession but not do anything with it, meaning that the team is counter-productive, this diagram would show if that were the case.

The last two variables defined are ways to measure the attacking and defending abilities of a team, since these are defined as percentiles, the higher each of those values are, it can be interpreted as the team is better performing.

Leeds are below average in every aspect we used to measure their playing quality, and as a result they were relegated last season. They weren’t able to keep possession, and even for the short amount of time every game that they did, it wasn’t productive.

Leeds United had a challenging season, especially in maintaining possession and utilizing the ball effectively. Their struggles with possession impacted their ability to build and sustain attacking plays. With limited progressive passes and a low pass completion rate, the team found it difficult to create consistent and threatening attacking opportunities. Their difficulty in converting chances and preventing opponents from scoring was evident. On top of that, their lack of possession meant the opposition team always had the ball allowing them to attack Leeds and create goal scoring opportunities. Due to being poor in possession, Leeds struggled both offensively and defensively, contributing significantly to their relegation.

Leicester City presents a different narrative. Despite maintaining average possession, the team still struggled in the attacking third, which is shown by their extremely expected goals value. Their inefficiency in turning possession into clear attacking opportunities and defensive vulnerabilities were evident. Despite being capable of holding onto the ball, Leicester City's offensive shortcomings led to their relegation.

Graph 5: Radar Chart of the Top Three vs League Average

![Figure 5](/assets/journalism/possession-english-premier/figure-05.png)

![Figure 6](/assets/journalism/possession-english-premier/figure-06.png)

![Figure 7](/assets/journalism/possession-english-premier/figure-07.png)

These graphs show the difference in the six variables of the previous graph between the top three teams–Manchester City, Arsenal, and Manchester Untied–and the League average. This shows how valuing the ball led to more outputs in terms of points and standing.

Starting with Manchester City, the winner of the Premier League in the 22-23 season, the team who held the most possession of the ball in that season. Additionally, their progressive passes and pass percentage was the highest of the league as well. Manchester City, and their manager Pep Guardiola, have always valued possession. They move the ball around, switching from side to side, until they find an opening to goal. Guardiola has embedded this philosophy in his players’ minds and when it comes to attack and touches in the final third, City hold the highest percentile value in the league. The idea is: if the other teams attempt to take the ball from City, they will tire themselves running behind their passes, and if the other teams let City have the ball, then they will be defending City’s countless attacks all game. Thus, Manchester City have grown to become the hardest team to play in the league. Lastly, they hold the highest expected goals, and the lowest expected goals against, which shows their dominance and power over the outcomes of the games through their possession-based philosophy of play.

Arsenal have some similar philosophies of the game as Manchester City. They also value the ball and use the ball to their advantage by creating attacks. They might not have perfected it to the level of City, but they are also known to be one of the toughest teams to face. Their expected goals value shows how forward-thinking they are. Moreover, Arsenal are known to use their wingers a lot in their attacks. The connection between the wingers and the midfielders and forward is exemplified in their play. At one point, Arsenal were favorites to win the league, since they started the season positively. Ultimately, they were caught up by City, but their style of play and high possession and attack rates shows their dominance in the league.

Lastly, we have Manchester United. The 22-23 season was filled with ups and downs for United. However, they ended the season with a top 4 finish, sending them to the Champions League. That season was the first full season they had with their new manager, Erik Ten Hag. He came to United from a strong Ajax team, a Champions League level team that valued possession and creating numerous chances throughout the game. Ten Hag proved to apply the same principles at United. That season was a season of change for United. They began to apply Ten Hag’s tactics and were transforming into a great team. We see the possession and pass statistics correlating with a team trying to integrate possession-based soccer into their game. By the end of the season, United became a strong competitor to face, especially at home with their thunderous crowd of fans.

### Conclusion:

All in all, there is a very positive correlation between possession and a team’s standing at the end of the season. Manchester City’s dominance in possession exemplifies how a possession-based philosophy, engineered by managers like Pep Guardiola, can lead to successful results in the English Premier League. The team’s ability to control the game, create scoring changes, and limit opponents’ opportunities highlights the team’s effectiveness. Arsenal and Manchester United, similarly, although not at the same level as Manchester City, also demonstrate the benefits of valuing possession in their game plan. On the other hand, teams like Leeds United and Leicester City struggled not only due to their deficiencies in possession, but also their inability to capitalize on possession and turn it into attacking goal-scoring opportunities. Their relegation serves as a reminder of the emphasis on possession in today’s era. As the league continues to evolve, teams that prioritize possession and adapt their tactics in such a manner are likely to maintain a competitive edge and secure higher standings in the English Premier League.

### Source:

[https://fbref.com/en/](https://fbref.com/en/)
