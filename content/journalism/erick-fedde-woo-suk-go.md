### By: Nathan Kim and Aiden Lee

Seoul, Gocheok Sky Dome, is the place where the MLB opening game was held this year. Recently, in the 21st century, the MLB has been putting effort into globalizing baseball, and more players from Asian leagues, such as KBO (Korea) and NPB (Japan), are arriving in the United States. While most of the focus is on the NPB with Yoshinobu Yamamoto’s $325 million contract with the Dodgers, this article attempts to dive into pitchers who performed their outstanding skills in the KBO during the 2023 season and signed with MLB teams for the upcoming 2024 season. The two pitchers to analyze are Erick Fedde and Woo-Suk Go.

Fedde used to be a top prospect and made his MLB debut many years ago. Yet, he couldn’t hold his spot in the big leagues and crossed the Pacific Ocean to Korea to grab constant opportunities to pitch. In the 2023 season, he was nominated for MVP in the KBO league. Throughout his experience in KBO, Fedde added sweeper to his repertoire, enhanced his changeup, and had experience of being on the starting rotation for a full season. With advancement, Fedde signed a 2-year $15 million contract with the Chicago White Sox. Go used to be a top closer in KBO from the 2019 season, being named the 2022 Save Leader with 42 saves. Go is known for his 95 MPH fastball average, 87 MPH slider, and 92 MPH cutter. Go arrived in San Diego with a minimum 2-year $4.5 million deal, including additional options.

## Data Collection

The data was collected from both Sports2i and Fangraph. Sports2i has multiple types of data on players who have played in the KBO (Korean Baseball Organization) from 2021 to 2023. Since Sports2i has a limited range of data, which is three years, we only focused on players who played in MLB and KBO in recent years. Fangraph also has similar types of data on players who played in MLB (Major League Baseball), with a larger variety of data than Sports2i.

In order to predict the transitions of Fedde and Go to the MLB this 2024 season, we compared significant pitching data for both the KBO and MLB. One of the best methods to come up with the prediction is to find a collection of data on pitchers who both played in KBO and MLB. With their records, it is possible to infer changes in pitching performance in two different leagues. To make a reasonable standard for the data collection, we decided to choose all the foreign players who played in the KBO in any season between 2021 and 2023. Furthermore, for the MLB data of the players, we then chose the most recent MLB season of each player to analyze. The more recent the data is, the more relevant to the 2024 season prediction.

Other than the standard for the selection of season that players played, players need to satisfy the minimum innings in that selected season so that the sample size is large enough for our data analysis. A minimum of 50 innings in that selected season is the requirement. We believe that 10 appearances as a starting pitcher is a minimum sample size to analyze a player's performances. If pitchers throw an average of 5 innings per game, pitchers meet one of the criteria to receive a win. Thus, we decided on 50 innings as a minimum requirement. Moreover, due to a lack of foreign players who satisfy these two requirements, we also added three Korean players, Seunghwan Oh, Kwanghyun Kim, and Hyeon-jong Yang, to the data collection process. We thought that the number of Korean players in our data was not sufficient, and having a Korean sample would support the more accurate prediction for Woo Suk Go.

We collected raw pitching tracking data of players like ball spin rate and movement to estimate the pitching statistics such as ERA and WHIP.. The tracking data that we collected are spin rate, vertical movement, horizontal movement, exit velocity, and hard-hit rate. We chose these specific data because they represent the crucial modern sabermetrics data among statistics that Sports2i provided. These data are modern pitching data and are used by MLB scouts and experts frequently. To make the prediction general, we mostly tracked fastballs as almost all the pitchers have fastballs in their repertoire.

Here are the key definitions of the tracking data:

- Spin rate (rpm): How much the ball that pitchers throw spins until the catchers catch it.
- Vertical movement (cm): The difference in distance vertically between the hypothetical trajectory of the ball when there is no spin of the ball and the actual trajectory of the ball as it passes through the strike zone.
- Horizontal movement (cm): The difference in distance horizontally between the hypothetical trajectory of the ball when there is no spin of the ball and the actual trajectory of the ball as it passes through the strike zone.
- Exit velocity (km/h): The velocity of the batted balls.
- Hard-hit rate (%): Percentages of batted balls that were hit at 95 MPH or more.

## Data Analysis

For analysis, we focused on the correlation coefficients of statistics to observe any trends. Besides, we observed the difference in means to see a general, average, variation between KBO and MLB. In order to make predictions based on our analysis, we designed lines of best fit and then input KBO data of Fedde and Go to predict the statistics in MLB. Then, we attempted to make a list of players with similar and close statistics and take an average of their pitching outcomes and performances this year. The average will be our prediction. Later, we made comparisons with AI models, to see the differences for fun.

![Figure 1](/assets/journalism/erick-fedde-woo-suk-go/figure-01.png)

![Figure 2](/assets/journalism/erick-fedde-woo-suk-go/figure-02.png)

![Figure 3](/assets/journalism/erick-fedde-woo-suk-go/figure-03.png)

Yet, some of the statistics were not significant enough to make predictions as the correlation coefficients were close to zero. The correlation coefficient of the spin rate was -0.04, which is near zero. As the correlation coefficient gets closer to an absolute value of 1, that means that there is a valuable association between the two variables. In contrast, a correlation coefficient near zero implies that we can’t draw meaningful conclusions regarding the association between the input data and output variables. In the context of this article, there is no significant correlation between KBO data and MLB data for spin rate. In a similar context, we discovered that the correlation coefficient of exit velocity can not be helpful for making assumptions since the correlation coefficient was -0.02, which is also nearly zero. Similarly, the correlation coefficient of the hard-hit rate did not support us to make predictions as -0.28 is relatively close to zero, rather than 1.

![Figure 4](/assets/journalism/erick-fedde-woo-suk-go/figure-04.png)

However, we can still make comparisons regarding the difference between the mean of KBO data and MLB data. The graph on the right shows the spin rate of statistics in MLB with blue lines and in KBO with green lines. We can clearly see that KBO has a higher average spin rate. Additionally, the mean spin rate in KBO drawn from our sample is 2375 rpm while the number from MLB is 2219, indicating that the spin rate used to drop when players transferred from KBO to MLB. A similar graph drawn for exit velocity indicates that MLB has a higher exit velocity of players compared to KBO. The average applies the same logic. The average exit velocity of the players in KBO was approximately 135 km/h, while in MLB, it was around 145 km/h. Again, the hard hit rate applies in the same method. The graph shows that players resulted in a higher hard-hit rate in MLB, in the blue graph, compared to KBO in green bars. The average hard hit rate in MLB from the data collected is 42.5, and the rate was 22.9 in KBO. Though we can’t identify the correlation between spin rate, hard-hit rate, and exit velocity in KBO and MLB, we can clearly notice the difference in trends through the graphs and means.

![Figure 5](/assets/journalism/erick-fedde-woo-suk-go/figure-05.png)

![Figure 6](/assets/journalism/erick-fedde-woo-suk-go/figure-06.png)

![Figure 7](/assets/journalism/erick-fedde-woo-suk-go/figure-07.png)

Meanwhile, vertical movement and horizontal movement display statistically significant trends in predicting pitchers' performances. The correlation coefficient of vertical movement is -0.81 which is relatively close to -1, which means that the vertical movements in KBO and MLB have a strong negative relationship. Looking at the plot, they also have a linear relationship. As the vertical movement in KBO increases, the vertical movement in MLB decreases generally according to the trend line. In other words, as the vertical movement in KBO decreases, the vertical movement in MLB increases. Players who had relatively high vertical movement in the MLB have relatively low vertical movement in KBO. Though it is not easy to conclude, we can infer that players with high fastball vertical movement tended to focus more on harmonies with other pitch types like slider, change-up, and curve while they moved to different leagues and vice versa. It happened a lot to players who moved to different leagues to try new strategies such as Pedde, Kwanghyun Kim, and Hyunjong Yang, etc. It can be the possible reason why their vertical movement relatively dropped.

![Figure 8](/assets/journalism/erick-fedde-woo-suk-go/figure-08.png)

Moreover, the average vertical movement in MLB is 43.69 cm and the average horizontal movement in KBO is 26.4 cm. It means that pitchers throw balls with greater vertical movement in MLB than in KBO. Both results do not make any sense by intuition because a greater spin rate leads to greater vertical movement. Then, there should be other factors affecting this general difference. MLB focuses on high fastballs with high vertical movement and KBO tends to value low fastballs with less focus on vertical movement. This is the possible reason why vertical movement in MLB is greater, even though the spin rate in MLB is lower due to the balls.

![Figure 9](/assets/journalism/erick-fedde-woo-suk-go/figure-09.png)

![Figure 10](/assets/journalism/erick-fedde-woo-suk-go/figure-10.png)

The horizontal movement had a significant correlation coefficient of 0.72, which indicates that the horizontal movement was impacted by the difference in league. Due to the high level of correlation coefficient, we can assume that players with high horizontal movement in MLB still maintained their high horizontal movement in KBO. The graph at the right also shows a positive linear line of best fit, bringing a similar conclusion. The mean of the horizontal movement in KBO is 14.68 cm, and the horizontal movement from our data in MLB is 19.08 cm. We infer that the decrease in average is due to the difference in balls between the leagues. Therefore, we can make the assumption that the horizontal movement of pitchers mostly declined from MLB to KBO, but in comparative evaluation, players with great horizontal movement in MLB could maintain the high rank of horizontal movement while players with poor horizontal movement were still poor in the KBO.

## Prediction

Since spin rate, exit velocity, and hard hit rate do not have a clear linear relationship, we will add the difference in the average of the two league predictions for Fedde and Go. We will use the trend line for the prediction of two players for the vertical movement and the horizontal movement because they have a clear linear relationship in the scatterplot as those variables have high correlation coefficients.

|  | Difference in Mean (KBO → MLB) | Line of Best Fit | Erick Fedde | Woo Suk Go |
| --- | --- | --- | --- | --- |
| Spin rate | 2375 -> 2216Difference: -159 |  | 1967-159=1808 | 2360-159=2201 |
| Exit velocity | 135.3 -> 145.3Difference: 10 |  | 134.3+10=144.3 | 137.6+10=147.6 |
| Hard hit rate | 22.9 -> 42.5Difference: 19.6 |  | 20.4+19.6=40 | 25+19.6=44.6 |
| Vertical Movement |  | y=-1.67x+87.64, y=MLB, x=KBO | 57.08cm | 45.05cm |
| Horizontal Movement |  | y=1.26x+0.51y=MLB, x=KBO | 21.3cm | 18.65cm |

Difference in Mean (KBO → MLB)

Line of Best Fit

Erick Fedde

Woo Suk Go

Spin rate

2375 -> 2216

Difference: -159

1967-159=1808

2360-159=2201

Exit velocity

135.3 -> 145.3

Difference: 10

134.3+10=144.3

137.6+10=147.6

Hard hit rate

22.9 -> 42.5

Difference: 19.6

20.4+19.6=40

25+19.6=44.6

Vertical Movement

y=-1.67x+87.64, y=MLB, x=KBO

57.08cm

45.05cm

Horizontal Movement

y=1.26x+0.51

y=MLB, x=KBO

21.3cm

18.65cm

We found predicted tracking data of Fedde and Go in the MLB 2024 season. Using this pitching data, we discovered MLB players who played in the 2023 season with the same pitching data of these two players to predict future pitching statistics. For example, Go had a 2201 predicted spin rate last season. In MLB, Chase Anderson had the same statistics last year. Then, we brought last year's statistics of Chase Anderson to calculate. Since ERA and WHIP are the most common pitching statistics, we used these two types of statistics. We matched five similar players with Fedde and Go in each category of tracking data and found the average ERA and WHIP of five players to find our own ERA and WHIP predictions for Fedde and Go next season.

|  | Erick Fedde | Woo Suk Go |
| --- | --- | --- |
| Spin rate | Zack ThompsonERA: 4.48WHIP: 1.42 | Chase AndersonERA: 5.42WHIP: 1.42 |
| Exit velocity | Kyle GibsonERA: 4.73WHIP: 1.32 | Shane BieberERA: 3.80WHIP: 1.23 |
| Hard hit rate | Jesus LuzardoERA: 3.58WHIP: 1.21 | Logan GilbertERA: 3.73WHIP: 1.08 |
| Vertical Movement | Hyun Jin RyuERA: 3.49WHIP: 1.29 | Jose UrenaERA: 6.45WHIP: 1.61 |
| Horizontal Movement | Tristan Back ERA: 3.92WHIP: 1.22 | Bowden FrancisERA: 1.73WHIP: 0.83 |

Erick Fedde

Woo Suk Go

Spin rate

Zack Thompson

ERA: 4.48

WHIP: 1.42

Chase Anderson

ERA: 5.42

WHIP: 1.42

Exit velocity

Kyle Gibson

ERA: 4.73

WHIP: 1.32

Shane Bieber

ERA: 3.80

WHIP: 1.23

Hard hit rate

Jesus Luzardo

ERA: 3.58

WHIP: 1.21

Logan Gilbert

ERA: 3.73WHIP: 1.08

Vertical Movement

Hyun Jin Ryu

ERA: 3.49

WHIP: 1.29

Jose Urena

ERA: 6.45

WHIP: 1.61

Horizontal Movement

Tristan Back

ERA: 3.92

WHIP: 1.22

Bowden Francis

ERA: 1.73

WHIP: 0.83

|  | Erick Fedde | Woo Suk Go |
| --- | --- | --- |
| Average | ERA: 4.04WHIP: 1.29 | ERA: 4.23WHIP: 1.23 |

Erick Fedde

Woo Suk Go

Average

ERA: 4.04

WHIP: 1.29

ERA: 4.23

WHIP: 1.23

The tables above are the tables regarding players with the most similar tracking data and the average of them. We predict that Erick Fedde will result in an ERA of 4.04 and WHIP of 1.29 while Go will hold an ERA of 4.23 and WHIP of 1.23. As ERA and WHIP represent the most important pitching outcome, being directly connected with runs, we confidently say that those estimations will help predict the performances of Erick Fedde and Woo Suk Go

## Comparison with Other Models

These two tables are AI predictions of Woo Suk Go and Erick Fedde from FanGraphs.

Woo Suk Go FanGraphs prediction →

|  | ERA | WHIP |
| --- | --- | --- |
| ZiPS DC | 5.49 | 1.55 |
| THE BAT | 3.06 | 1.11 |
| ATC | 4.07 | 1.38 |
| Steamer | 3.83 | 1.31 |

ERA

WHIP

ZiPS DC

5.49

1.55

THE BAT

3.06

1.11

ATC

4.07

1.38

Steamer

3.83

1.31

| Average | 4.11 | 1.34 |
| --- | --- | --- |

Average

4.11

1.34

Erick Fedde FanGraphs prediction →

|  | ERA | WHIP |
| --- | --- | --- |
| ZiPS DC | 4.86 | 1.36 |
| THE BAT | 4.81 | 1.36 |
| ATC | 4.92 | 1.37 |
| Steamer | 5.14 | 1.47 |

ERA

WHIP

ZiPS DC

4.86

1.36

THE BAT

4.81

1.36

ATC

4.92

1.37

Steamer

5.14

1.47

| Average | 4.93 | 1.39 |
| --- | --- | --- |

Average

4.93

1.39

Our own prediction and AI prediction are somewhat similar. AI predictions gave a relatively lower ERA to Woo Suk Go and a relatively higher ERA to Erick Fedder than our own prediction model. In addition, AI predictions gave similar WHIP predictions and gave relatively higher WHIP than our own prediction model.

In general, we can see that our prediction is not too much different from AI predictions. The percent difference of the ERA and WHIP of each player is not high. The equation below is used to observe the percent difference.

ERA:

![Figure 11](/assets/journalism/erick-fedde-woo-suk-go/figure-11.png)

WHIP:

![Figure 12](/assets/journalism/erick-fedde-woo-suk-go/figure-12.png)

- Woo Suk GoPercent difference of ERA = 2.84%Percent difference of WHIP = 8.94%
- Percent difference of ERA = 2.84%
- Percent difference of WHIP = 8.94%
- Erick FeddePercent difference of ERA = 22.0%Percent difference of WHIP = 7.75%
- Percent difference of ERA = 22.0%
- Percent difference of WHIP = 7.75%

- Percent difference of ERA = 2.84%
- Percent difference of WHIP = 8.94%

- Percent difference of ERA = 22.0%
- Percent difference of WHIP = 7.75%

In this article, we made an estimation regarding the performances of Erick Fedde and Woo Suk Go in the MLB for the 2024 season. Though switching leagues has many unknown variables and changes, we hope our predictions are accurate throughout the 2024 season. We wish them great luck next season.

### Sources

[Sports2i](https://www.2itracking.com/)

[Fangraph](https://www.fangraphs.com/)

[Baseballsavant](https://baseballsavant.mlb.com/leaderboard/custom?year=2023&type=pitcher&filter=&min=q&selections=pa%2Ck_percent%2Cbb_percent%2Cwoba%2Cxwoba%2Cexit_velocity_avg%2Csweet_spot_percent%2Cbarrel_batted_rate%2Chard_hit_percent%2Cavg_best_speed%2Cavg_hyper_speed%2Cpitch_count_fastball%2Cwhiff_percent%2Cswing_percent&chart=false&x=pa&y=pa&r=no&chartType=beeswarm&sort=exit_velocity_avg&sortDir=asc)

[Woo Suk Go Image](https://m.koreatimes.co.kr/pages/article.asp?newsIdx=366258)

[Erick Fedde Image](https://www.mhnse.com/news/articleView.html?idxno=240871)

[KBO and MLB ball Image](https://m.blog.naver.com/jex316/223053248509)

[Seoul Series Image](https://www.foxla.com/news/seoul-series-dodger-game-today-lineup-shohei-ohtani)
