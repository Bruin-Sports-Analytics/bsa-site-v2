## Introduction

The game of cricket has been changing over the years, just like every other sport. There are changes in the way the game is played, in the way the players approach the game, and sometimes changes in even the rules. Cricket was originally only played in the test format, where teams would get 2 innings each to bat and the match would go on for 3-5 days (Test matches are played for 5 days today). Eventually, in the 1960s, cricket was played in the limited-overs format where each team got to face 50 overs of bowling. Finally, in 2004, the first-ever T20 match was played, and as everyone knows now, it is the most popular format in cricket. The shorter format made the game more exciting to watch for the general population, as it involved “big hitting” and shorter game time. Batters were forced to maximize the runs scored in every ball, making boundaries a more frequent occurrence.

The T20 format has become so popular that it is not only played at an international level but also as leagues in different countries. The Big Bash League in Australia, the Pakistan Super League in Pakistan, the Caribbean Premier League in the West Indies, and the Indian Premier League in India are a few of the most popular cricket leagues in the world. The most popular out of these is the Indian Premier League (IPL), which had a record-breaking 450 million viewers this year. The IPL started in 2008 and is played every year for a period of 3 months where 8-10 teams compete for a trophy. Over the years, IPL has become more and more popular as it showcases not only the best international players but also brings to the spotlight new Indian players. There are many reasons for the increasing popularity of the IPL, but in this article, we are going to do an in-depth analysis of variables such as runs and wickets across the 16 seasons of the IPL to figure out whether the patterns observed in runs, wickets, and other variables have anything to do with the increasing popularity of the game.

![Source: YouGov Sports](/assets/journalism/cricket-ipl-evolution/figure-01.png)

## Data

The data for the analysis of runs, wickets, and all other variables were obtained from cricsheet.org. All the graphs produced were through a careful analysis of all the matches played in the IPL so far. Graphs were produced via the matplotlib library in python.

## Analysis of Runs

![Figure 2](/assets/journalism/cricket-ipl-evolution/figure-02.png)

As you can see from the above graph, there is a clear increasing trend in the number of runs scored over the years. The runs per match, which was 145 in the 2009 season, increased to an astounding 174 runs per match in the current year 2023. There is a small dip in the runs scored per match in the years 2020 and 2021, and this is due to the fact that many players were unavailable due to COVID protocols. Most of the matches in these 2 years were played in Dubai, and the pitch could’ve also played a big part in the decrease in runs scored in 2020 and 2021. Overall, the increasing trend inferred from this graph can be attributed to several other factors, which will be discussed later in this article.

To get a more in-depth understanding of the runs scored over the years, we created graphs representing the run rate across the years in different periods of play, namely the powerplay (1-6 overs), the middle overs (7-15 overs), and the death overs (16-20 overs). As observed from the graphs, there is a similar increasing trend for run rate in the powerplay across the seasons, with a dip in the 2020 and 2021 seasons. There is more variability in the run rate in the powerplay due to its heavy dependence on good opening batsmen. Even a couple of wickets in the powerplay can decrease the runs scored, decreasing the run rate drastically. The run rate in the middle overs had a more consistent increase over the years. This means that teams are realizing that having 5 fielders on the boundary rather than 2 in the powerplay is no excuse to stop accelerating run production, as the T-20 format has only 20 overs, making every over precious. The run rate in the powerplay increased by over 1.75 runs per over and the run rate in the middle overs increased by 1.5 runs per over. Still, there is a considerable difference between the run rate in the powerplay and in the middle overs due to the field restrictions in the powerplay. In the death overs, however, the run rate goes up again as players are looking to maximize the runs they score, throwing caution to the wind even with 5 fielders near the boundary. The runs in death overs has increased by approximately 1.5 runs per over, similar to the increase in runs in the middle overs. From this we can infer that teams are going harder and trying to get more runs from the start (taking more advantage of the powerplay) instead of playing conservative and saving wickets. This also means that the quality of batting has increased.

![Figure 3](/assets/journalism/cricket-ipl-evolution/figure-03.png)

![Figure 4](/assets/journalism/cricket-ipl-evolution/figure-04.png)

![Figure 5](/assets/journalism/cricket-ipl-evolution/figure-05.png)

## Analysis of wickets

![Figure 6](/assets/journalism/cricket-ipl-evolution/figure-06.png)

The graph of average wickets per innings shows that the number of wickets taken per innings every season has mostly stayed the same, with the team taking an average of 5.8 wickets per innings. The number of wickets taken in 2022 and the current year 2023 has increased drastically by almost 0.5 wickets per innings, which means that players are looking to score more runs at the expense of giving away their wicket, especially due to the introduction of the impact player. This rule change meant that teams could substitute a player from the playing XI anytime during the game. For teams batting first, they would stack their team with an additional batter and substitute this batter for a bowler at the end of the innings. For teams batting second, they will substitute a bowler for an additional batter at the end of the innings. This means there is usually one more batter in the lineup, meaning that teams can afford to take a little more risk to hit more. This is why we see an increase in both runs scored and wickets taken in 2023.

The wickets taken in the powerplay per innings have surprisingly decreased in the first couple of years and then stayed approximately the same after that. This could be attributed to the fact that teams have better openers who can both score runs and preserve their wicket at the same time. The average wickets per innings in the middle overs has increased, especially in the 2023 season. This means that teams are accelerating more in the middle overs than usual, knowing that they can take risks with a deep batting lineup. As a consequence, they are losing around 0.5 wickets more than usual. The graph of the number of wickets in the death overs doesn’t tell much of a story, as every team looks to hit in the last 4 overs regardless of the wickets remaining and the runs required.

![Figure 7](/assets/journalism/cricket-ipl-evolution/figure-07.png)

![Figure 8](/assets/journalism/cricket-ipl-evolution/figure-08.png)

![Figure 9](/assets/journalism/cricket-ipl-evolution/figure-09.png)

## Other Variables

The graph of dot ball percentage, calculated by taking the percentage of dot balls played over the total number of balls, tells us that the dot ball percentage has decreased by 4 percent, which means that the number of dot balls has decreased by almost an over. This means that the players are either looking to rotate the strike more or hit more boundaries. Still, the average dot ball percentage is around 35 percent, which is not great when it comes to scoring runs in the shorter format.

![Figure 10](/assets/journalism/cricket-ipl-evolution/figure-10.png)

From the graphs below, we can infer that the batter is hitting a boundary every 6.25 balls, which is almost an over. We can also see that the boundary percentage of total balls has increased by approximately 3 percent over the 16 IPL seasons, which means that the batters are hitting more boundaries than before. The boundary percentage of total runs has also increased, emphasizing the trend towards “big hitting” rather than scoring runs by rotating the strike. We also see that approximately 56 percent of runs come from boundaries in the IPL.

![Figure 11](/assets/journalism/cricket-ipl-evolution/figure-11.png)

![Figure 12](/assets/journalism/cricket-ipl-evolution/figure-12.png)

## Factors Causing These Changes

As the game of cricket has evolved and we can see a clear increase in scoring rates, boundary rates, and changes in the distribution of wickets across a twenty over game. Seeing this growing pattern across t20 games, where records seem to be broken almost every other month, we must ask what are the factors causing the changes seen in the graphs above?

### Fearless, Aggressive Mindset

As mentioned earlier, in the modern age of new technology and instant gratification, many young people being introduced to the sport seem to lack the patience to watch ODI and Test cricket. As a result, the fan following of those two formats have gone down, while T20 cricket, which lasts about three and a half hours, has become the clear favorite of the lot. In the same way that fans would rather watch high flying sixes and cracking fours, the players themselves have grown to like that style of play.

An example of this is the England cricket team’s new style of play, known as “Bazball”, derived from their coach Brendon McCullum’s nickname “Baz”. In this style of play, players are encouraged to make positive decisions, whether they attack or defend. The key is that players are taught to be confident with their choices and to never be in two minds. As a result, when batsmen choose to go for a shot, they put their full strength and effort into it…therefore, even if the shot choice may be incorrect, the sheer power of their shot may help them clear the fielders. This mindset of fearlessness is ingrained into the next generation of cricketers. In the earlier days, coaches used to preach the idea of “placing a price” on your wicket. In cricket, unlike baseball, batters only get one chance to bat. If they get out, they lose the opportunity to bat for the rest of the game, so players used to be extra careful and minimize risk taking while batting. However, with the rise of T20 cricket, the cost of losing a batsman is lower, since the game is shorter, and there is a reliance on everyone in the team to contribute to generate a large overall team total.

### Better Technology, Data, and Facilities

Just like in any other sport, cricket has taken advantage of the new plethora of data that is now available. IPL teams will often have film sessions in which bowlers will analyze the strengths and weaknesses of the batsman, while the batsmen will look to see how bowlers tend to bowl and what variations they have in their arsenal. With better technology, both batsmen and bowlers are able to simulate in game conditions so they are better prepared come game time.

While both batters and bowlers have taken advantage of more data and better technology, it seems to be benefiting the batsmen more. Why is this? Theoretically, any ball can be hit for 6 runs. As a bowler, there is a limited number of places you can legally pitch the ball, there are a limited number of variations you can bowl, there’s a limit to what you can do. Even if you have a plan, and you execute it, the batsman could just as well be prepared for that plan and execute his shots. In response, there is absolutely nothing the bowler can do. In this perfect world, the batsman would hit every ball for a maximum. Obviously no one is perfect, but we can see why bowlers aren’t able to counteract the aggressive playstyles of batsmen as well as we would initially expect them to.

### Better Training, Recovery, and Fitness

As science has progressed, nutrition and physical fitness becomes of utmost importance to athletes. Better training facilities, machines, and self monitoring and care has resulted in increased fitness in most athletes. Recently, many cricket playing nations have set standardized fitness tests like the yo-yo intermittent recovery test that players must pass a benchmark score on. While many cricketers before the 2000s often had other jobs and were not financially stable, the monetization of the Premier League and the tremendous amounts of money that athletes receive allows them to focus solely on their performance on the field. As cricketers, they can dedicate their entire lives to playing cricket, resulting in stronger, better athletes. If you look at specific big strikers of the ball like Andre Russell or Hardik Pandya, both rely a lot on their strength to hit big sixes. Players today have become stronger and more specialized in their role. Especially with the addition of the impact sub in the IPL, cricket is moving away from all-rounders and turning more into a specialization sport, where batters focus solely on batting and bowlers hone in on their bowling. Once players more clearly understand what their role on the team is, they can better prepare, train, and recover to suit that exact role.

### Better Bats

The evolution of cricket bats has facilitated power hitting among modern day batsmen. Custom made cricket bats allow players to use bats tailored to their exact specifications. The quality of the willow that is used to make the bat has also improved.

![Figure 13](/assets/journalism/cricket-ipl-evolution/figure-13.png)

This graphic from CricTracker shows the longest sixes hit in the 2023 IPL season. While there have been plenty of larger sixes hit in earlier seasons, the number of sixes in triple digit meters continues to increase on average, and new records and scoring rates were broken this IPL season as well. Yashasvi Jaiswal scored the fastest 50 this season in just 13 balls, breaking the previous record of 14 balls. Additionally, the latter half of the IPL season saw plenty of 100+ scores from players like Shubman Gill, Virat Kohli, and Heinrich Klaasen.

Not only is it the bats, but the cricket balls have also helped batsmen. If you look at an IPL game today, the white ball they use only swings (curves in the air) for about 2 overs at a maximum. After that, there is little deviation in the air, and the batter friendly pitches only add to the cause. The ball also remains hard and is quite aerodynamic, so sometimes even a mistimed shot can go for six.

With bowlers becoming stronger and quicker, take for example Umran Malik or Lockie Ferguson, the batsman doesn’t have to generate much power to help the ball travel far. There’s a saying in cricket, “The faster it comes, the faster it goes”, and that is very true as batsmen have begun creatively using the pace of the ball to their advantage, often hitting the ball behind the wicket with unorthodox shots like reverse sweeps, scoops, paddles, and uppercuts.

### Smaller Field Dimensions

Seen above are the dimensions for the stadium in Karachi during the Pakistan Super League, another t20 league similar to the IPL. As you can see, the dimensions are about 70 meters straight, only about 55 meters behind the wicket, and 60 meters on both the square boundaries. This is extremely short, and compared to the start of the IPL, field dimensions have gotten slightly smaller, making it even easier for batsmen to hit the ball out of the park. In many instances, even mistimed shots or top edges may sail over the boundary.

A famous video from a couple years ago shows the English bowler Jofra Archer bowling the ball at a rapid pace and getting the batsman out bowled. The ball just clips the top of the stumps and somehow gains enough of an angle to sail all the way over the boundary behind the wicket before bouncing. It was almost as if the stump had “hit” the ball for a six. This goes to show how short the boundaries have gotten in recent years.

Shown below are the dimensions of one of the biggest international cricket fields, the Melbourne Cricket Ground in Australia. However, these dimensions are only used for test cricket. The square boundaries are a massive 82 meters in length. The intentional pulling in of the boundaries for shorter format games is a big cause for the increase in runs per inning seen over the last decade.

The addition of the impact player, better technology, smaller field dimensions, fearless aggressive mindset, better bats, and better training facilities have all contributed to the dominance of batters in the IPL and other T20 leagues across the world. The increase of runs scored has only increased the number of viewers, and even though we think that it’s bad for the game, it’s here to stay.
