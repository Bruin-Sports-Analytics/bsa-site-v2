## Introduction

In the cutthroat world of F1 racing, every millisecond matters. A team of twenty-three aim to change tires, clean the driver's visor, fix mechanical issues, and make other adjustments in under two seconds. While the quickness of a pit stop is essential, what adjustments are made, when they are made, and how consistently they are done in speedily fashion all factor into a team’s likelihood of winning. In this article, we will examine the relationship between pit-stop length and race outcome. Shorter pit stops are undeniably beneficial, but are pit stops a consistent prediction of a win or loss? Or, is a team’s experience more significant in determining race placement?

## Understanding Terminology

In our examination of Formula 1 racing, we will be focusing the driver as opposed to the constructor or team affiliated with the driver for the highest accuracy when analyzing pit stop time. If you’re unfamiliar with the logistics of F1 racing, each **driver** drives for a team and each team can enter 2 drivers per race. The builder of the car that the drivers use is known as the **constructor** . As expected, the driver that places first is the winner of the races, meaning that there are 19 losers for every 1 winner in a race. Each driver is awarded points for how high they place with the winner earning 25 points, second place earning 18, and decreasing until 11th place. In this article, these points will be referred to as **points earned** by a driver. The core of this article will focus on the **pit-stop** , a very quick refresh of fuel, tires, and other equipment during a race that can add time to a driver’s lap and decrease their place in the race. Pit stops can be seen as a necessary evil that takes time out of the race but can significantly increase a car’s performance during a race and also prevent fatal crashes during a race.

## Methodology

To quanitfy the impact of a pit-stop on race performance, we plan to test the significance of the relationship between average pit stop time and points earned which will confirm is shorter pit stop times are correlated with higher placement overall. Then, to understand if this is truly the off-track strategy that winning teams rely on, we will compare a driver’s experience with their pit stop time to determine if they rely on lower pit stop times or lower lap times.

## Exploratory Data Analysis & Discussion

![Figure 1](/assets/journalism/f1-pitstops-time/figure-01.png)

This scatterplot compares the average pit stop time in seconds versus points earned. The graph does not display a linear shape, however the negative regression line does suggest that teams with faster pit stops tend to earn more points per race, but is this the strategy that winning teams rely on?

![Figure 2](/assets/journalism/f1-pitstops-time/figure-02.png)

Plotting the average pit stop time in milliseconds of the winning versus losing teams, we see that the winning team’s median average pit stop time is slightly lower than the losing team’s median average pit stop. This seems to indicate that a team able to get back on the track quicker is more likely to win. However, since the difference between median average stop lengths is so small, we will examine the relationship between a team’s experience and pit stop times to gain a better understanding of pit stop length’s significance.

![Figure 3](/assets/journalism/f1-pitstops-time/figure-03.png)

This scatterplot visualizes the relationship between a team’s experience (measured in terms of seasons leading up to the 2023 season) and their average pit stop time in milliseconds. The blue dots highlight teams that won the season. Contrary to initial intuition, as team experience increased, so did the average length of pit stops. Could this indicate that more experienced teams rely on faster lap times to compensate for higher pit stop times?

![Figure 4](/assets/journalism/f1-pitstops-time/figure-04.png)

The boxplots above show a downward trend in average lap time as experience increases—despite slight variation in the mean lap times. This graph has two possible implications: either more experienced teams rely on faster lap times to compensate for slower pit stop times, or more experienced teams have faster lap times because of their longer pit stops. Because the data from the two graphs above are gathered from observations and are not from controlled experiments, we cannot deduce causation. However, we can conclude that as experience increases, mean pit stop times increase while mean lap times decrease. This leaves it unclear as to why pit stop times are increasing for more experienced teams if not to compensate with their fast lap times. But, this is slightly clarified by the look at the relationship between lap time and pit stop time.

![Figure 5](/assets/journalism/f1-pitstops-time/figure-05.png)

As the average pit stop time increases, the average lap time also increases. Of course, a lot of extrapolation has been done in regards to this graph because many of the points are concentrated around the shorter times, but the generally positive relationship between pit stop and lap time indicates that teams that have longer pit stop times do not rely on faster lap time to make up for it, nor do faster lap times indicate shorter pit stop times. This demonstrates that many teams simply rely on all-around efficiency—no trade-offs. Therefore, we can conclude that pit stop time has an effect on a team's chances of winning, but what matters most is their strategy to manage their time effectively.

## Conclusion

Overall, pit-stop times are an important factor in a driver’s chances of winning, but the strategy that they employ to ration their time effectively matters more. From the last graph, it is clear that many teams strive for overall efficiency, but that teams that place better reply on faster lap times knowing that the faster they drive, the longer pit stop times they’ll need. We must acknowledge the limitations of our analysis with our data being limited to a single source on kaggle and the differences in times being mere milliseconds. Thus, our conclusions may be based on minuscule data patterns, possibly making them inaccurate. However, with a more robust and up to date data set, these patterns can be tested with greater accuracy and effectiveness of different time management strategies can be statistically tested.

## Sources

Data: [https://www.kaggle.com/datasets/rohanrao/formula-1-world-championship-1950-2020](https://www.kaggle.com/datasets/rohanrao/formula-1-world-championship-1950-2020)

Terminology: [https://f1chronicle.com/a-beginners-guide-to-formula-1/](https://f1chronicle.com/a-beginners-guide-to-formula-1/)
