## Introduction

In the competitive world of professional tennis a player’s success goes beyond their raw talent; they must also navigate several different external and internal challenges. A prominent external factor that significantly influences player performance is the variety of playing surfaces–clay, hard, and grass. Each surface poses distinct challenges, demanding different skill sets and highlighting adaptability as the key to success. As the Association of Tennis Professionals (ATP) tournaments unfolded, certain players demonstrated a notable edge in win percentages, prompting a crucial question: What skills drive these players to success on specific court types?

To discover these skills, we need to explore player statistics and analyze the correlation between specific player attributes and winning percentages among the court surfaces. From observing matches and the court types, some predictions arose on what skills each court type championed. Clay courts seem to favor players who excel in longer rally lengths, while grass courts highlight higher ace-winning percentages. In contrast, the hard courts, which are the highest in popularity, are a lot more random and unpredictable in their valued skills. Notably, player Carlos Alcaraz dominates both clay and grass courts with winning percentages of 89.3% and 100%, respectively. While his specific skills, such as rally lengths or ace numbers, may not be outstandingly impressive compared to his opponents, his consistent success evokes curiosity. This highlights the necessity of studying overall trends rather than focusing solely on individual player abilities. This article aims to study the correlation between skills and win percentages as we try to determine which attributes are the most advantageous for players based on their match surfaces.

## Hard Courts

As the most common, standard surface, hard courts generally do not have a particular trait that make them stand out compared to clay and grass courts. The speed and bounce of the ball on hard courts is relatively normal compared to the other two surfaces, meaning that the best hard court players in the world tend to be the best overall players in the world, with varying playstyles from aggressive baseliners to counterpunching defensive juggernauts. Therefore, our predictions for how playstyles on serve, rally, and return for the best hard court players were that there would not be too much correlation between any stat and hard court win %, as various playstyles are effective on hard courts.

### Serve

![Figure 1](/assets/journalism/surface-dominance/figure-01.png)

As seen from this linear model, it is apparent that 1st serve win % has a relatively positive correlation with win % on hard courts. This makes sense, as for nearly all play styles in tennis, possessing a good 1st serve is one of the keys to winning matches. We observe an R2 value of 0.1227, which while very low, is higher than the R2 values we will see for the relationship between first serve win % and win% on grass and clay courts. A large factor for this is likely due to the fact that hard courts are the most common surface among the tour. Of the 9 ATP Masters 1000 tournaments, the tournament with the second highest prestige next to the 4 Grand Slams and the ATP Finals, 6 of them are on hard courts. Aside from that, around 60% of the season’s tournaments are on hard courts, leading to a much higher sample size, giving us cleaner, more sensible data. Holding serve is the most important aspect of being able to consistently win matches, so it additionally also checks out that service hold % also correlates with hard win %, as shown below.

![Figure 2](/assets/journalism/surface-dominance/figure-02.png)

### Return

![Figure 3](/assets/journalism/surface-dominance/figure-03.png)

The linear model indicates that there is a positive correlation between return points won and win percentage on hard courts, with a coefficient of 0.3152. This indicates a tendency for higher return points won to align with increased hard win percentages, within the sampled data. However, it is also notable that the scatter plot shows high variability around the regression line. This implies that while return points won contribute to success on grass, they are not the sole determinants.

### Rally

![Figure 4](/assets/journalism/surface-dominance/figure-04.png)

As seen from this linear regression model, there is a positive correlation between rally length and win percentage on hard courts. Thus, on average, as a player is able to maintain longer rallies, they tend to win more matches. However, the explained variation between these two is fairly low, with an R2 value of 0.0386. It appears that only 3.86% of the changes in win percentage could be attributed to variations in rally length. This indicates that the rally length may not be as influential on hard courts.

## Clay Courts

On a clay court, the ball bounces higher and is slower in its pace, leading to the serve being less of a dictating factor and longer rallies on average. Therefore, the typical archetype of a clay court specialist is a grinding player with great endurance that is able to grind out long rallies in order to wear their opponent down. Thus, it is natural to predict that serve statistics would have very low correlation with win %, while players with longer rally statistics and better return win percentages would have a higher clay win %

### Serve

![Figure 5](/assets/journalism/surface-dominance/figure-05.png)

![Figure 6](/assets/journalism/surface-dominance/figure-06.png)

Taking a look at these graphs, we can see that 1st Serve Win % and Ace % generally exhibit a weak correlation with Clay Win %. This aligns with our hypothesis, as clay court players tend to focus more on their groundstroke game, meaning that the serve is one of the less important aspects of top clay courters’ games. Our R2s, however, at 0.0764 and 0.0093 indicate that there is nearly zero correlation between the two statistics based on the data that we extracted.

### Return

![Figure 7](/assets/journalism/surface-dominance/figure-07.png)

Return of serve is massively important on clay courts, with some of the most dominant clay courters including Novak Djokovic and Carlos Alcaraz having some of the top return statistics. The linear regression model here indicates that there is a positive correlation between the best returners and the best clay court players. While there are many outliers that drag down the R2 to 0.2546, this coefficient is better overall compared to the other coefficients we observe among clay courts.

### Rally

![Figure 8](/assets/journalism/surface-dominance/figure-08.png)

As seen from this linear regression model, there is a slight negative correlation between rally length and win percentage on hard courts. Thus, on average, as a player is able to maintain longer rallies, they tend to win fewer matches. However, the explained variation between these two factors is extremely low, with an R2 value of 0.0057. This implies that only 0.57% of the changes in win percentage can be attributed to variations in rally length. Therefore, it indicates that rally length is not very influential in determining win percentages on clay courts.

## Grass Courts

Grass courts exhibit the ball bouncing lower and moving much faster through the court. This gives an advantage to players with aggressive playstyles and big serves. Naturally, this would lead one to hypothesize that players with better serve statistics would have higher grass win %, and that return statistics and rally length wouldn’t be the best indicator of grass win %. However, one important note to make is that grass is by far the least common surface. While the other two surfaces feature at least one grand slam and numerous The Association of Tennis Professionals (ATP) Masters 1000 level tournaments, grass has Wimbledon, three ATP 500 level tournaments, and some ATP 250 level tournaments. This means that the statistics we retrieve from grass tournaments have a far lower sample size when compared with the other surfaces, leading to some possibly incomplete or misleading results.

### Serve

![Figure 9](/assets/journalism/surface-dominance/figure-09.png)

![Figure 10](/assets/journalism/surface-dominance/figure-10.png)

Unexpectedly, it appears that there is little to no correlation between Ace % and Grass Win % according to the model, with a low R2 as well. This can be attributed to multiple factors, such as the fact that tennis play styles are generally becoming more homogenous nowadays, slower grass court surfaces, or more likely, a small sample size. Similarly, we expected a bigger correlation between 1st Serve Win % and Grass Win %, and while there is some correlation, it was not as concrete as we expected. This can be attributed to similar factors.

### Return

![Figure 11](/assets/journalism/surface-dominance/figure-11.png)

Return of serve is hardest on grass courts, with the fast surface accelerating serve speeds. However, the model exhibits very slight positive correlation between return points won and grass win percentage, albeit with lots of outliers leading to an R2 of 0.1056. While small sample size is a huge factor, it is likely that the homogenous playstyles required at the top level of play on tour result in the best players also having fantastic return games.

### Rally

![Figure 12](/assets/journalism/surface-dominance/figure-12.png)

As seen from our linear regression , there is a slight positive correlation between rally length and win percentage on hard courts. Thus, on average, as a player is able to maintain longer rallies, they tend to win more matches. The explained variation between these two is fairly low, with an R2 value of 0.0221. This means that only 2.21% of the changes in win percentage could be attributed to variations in rally length. Thus, the changes in win percentage are not heavily dependent on rally length, and there are most likely other skills or traits accompanying players that are determining their winning percentage.

## Conclusion

We initially expected a positive connection between average rally length and winning percentage, assuming that longer rallies reflect key player attributes like endurance, consistency, and strategic acumen. Additionally, we predicted that since clay courts typically have slower ball paces, it might result in longer rallies. Our analysis of player statistics indicates that rally length has limited impact on explaining player win percentages. This result suggests that other skills or traits play a more significant role in determining match outcomes. The explained variation of our linear regression is strongest on hard courts (0.0386) and weakest on clay courts (0.0057), also opposing our predictions. Hard courts are the most standard and common surface to play on and therefore it makes sense that hard court data sets were where the highest R2 values were calculated. Hard courts are more popular and therefore more common, which appeals to better players and could lead to better rally performance.

Hard courts generally exhibited the results that we predicted, with serve playing an important role, (return comment), and rally length generally having little to no predictive factor. Clay courts ended up placing little importance on the serve as we predicted, (return comment), but we found that rally length actually had extremely insignificant correlation with win percentage, which was quite surprising. Lastly, grass led to some insignificant results as well, with serve turning out to be less of a predictive factor of performance, (return comment), and rally length naturally not being an accurate measure of dominance on the surface.

All in all, the somewhat inconclusive results that we have ended up with do not mean that there is nothing to be concluded from this analysis. Tennis is an ever-changing landscape, with homogeneity of play styles leading the way. Every player nowadays can hit the ball extremely well, and with all surfaces slowing down year by year, the surfaces are slowly becoming more and more alike. This means that the average player is becoming more versatile year by year, leading to the general archetypes tennis fans associate with each surface becoming more obsolete. The presence of the three court specialists in tennis might just be coming to an end, with a new age of generalists ushering in an era of all-court dominance.

### Sources

[https://www.tennisabstract.com/](https://www.tennisabstract.com/)

[https://www.atptour.com/en/](https://www.atptour.com/en/)
