## Introduction

In his prime, Shaquille O’Neal had no equal. Weighing 325 pounds at 7’1, O’Neal would utilize his sheer physical advantage in conjunction with his post skills to become arguably the most dominant center in NBA history. The disparity between O’Neal and other players in the league was so great, in fact, that teams would literally fill their rosters with big men of similar physiques just to minimize his effectiveness.

Of course, his opponents were not the only ones making moves to counter O’Neal. Prior to the 2001-2002 season, the NBA decided to legalize zone defense, which had not really been permitted for the league’s entire history. Today, man-to-man and zone defenses comprise the two main defensive alignments in the modern NBA. To explain the distinction between the two styles, the former involves each player of a team guarding a specific player of the opposing team, while the latter entails each player defending a specific spot on the court, oftentimes in a “2-3” scheme where two players guard the areas around the perimeter and the other three players guard the areas closer to the basket.

When it comes to stopping O’Neal, such a rule change would be extremely impactful. By being allowed to guard specific areas instead of specific players, players of opposing teams would have greater flexibility to adjust their defense, such as in the case of stopping a top-tier player who would normally bully their way into the paint and score easily. However, while this mechanism may make sense in theory, it may not be necessarily true in practice. As such, this article will look at the data and build the necessary models to determine whether or not there was perhaps a causal effect of this rule change with respect to O’Neal’s offensive prowess.

## Looking at the data

In order to visualize the progression of O’Neal’s career over time, the article will be taking a look at four metrics: points per game (PPG), field goal attempts per game (FGA), effective field goal percentage (eFG%), and minutes per game (MPG). For each time series plot associated with each metric, the graph will differentiate between pre-2002 and post-2002 data through the use of a vertical line.

![Figure 1](/assets/journalism/shaq-zone-analysis/figure-01.png)

![Figure 2](/assets/journalism/shaq-zone-analysis/figure-02.png)

![Figure 3](/assets/journalism/shaq-zone-analysis/figure-03.png)

![Figure 4](/assets/journalism/shaq-zone-analysis/figure-04.png)

The plots show that while O’Neal’s PPG, FGA, and MPG all declined after 2002, his eFG% remained generally the same, with this metric even experiencing a significant spike in his final year. The article assumes that such a number is merely an outlier.

At first glance, one may assume that these figures are strong supporting evidence for the impact of the rule change on O’Neal’s performance. However, one must also take into account the confounding variable of age over the course of a player’s career. Indeed, the impact of this variable can already be seen in the decline in minutes that O’Neal experienced towards the end of his career. Therefore, the article will discuss a baseline projection through which one may be able to isolate the effect of age from other potential effects, such as the one we are interested in.

## Creating a baseline projection

For time series data, it is common to use models such as the ARIMA model or the ETS model in order to project changes in the outcome variable over time. However, the former model assumes that the data are stationary, while the latter model assumes that the errors follow a normal distribution with a mean of zero. And both models have the central assumption of there being no autocorrelation, meaning that a specific value is dependent on the past value. But because of the nature of age, which causes a player’s effectiveness to ultimately decline, all of these assumptions are unfortunately not valid.

Therefore, the article must use more specialized modeling in order to create a benchmark for O’Neal’s decline over time. To be more precise, this article uses a quadratic regression model built off a dataset that consists of all players who have ever played in the NBA. However, to best represent the circumstances that O’Neal was in, the model itself only considers players who played during the same years as O’Neal did, as well as those who played at least until the age of 35.

The model was built through the lm() function in base R, with the independent variables being age and the square of age, the latter of which is necessary for a quadratic model. One should note that this process is still technically linear regression because while the terms are not necessarily linear, the coefficients are linear. This process was repeated for each of the three offensive metrics the article is looking at, meaning that we have created a total of three quadratic models.

All of the three models produced statistically significant coefficients, meaning that the probability that one would observe such coefficients given that the actual coefficients were zero is sufficiently small. However, for PPG and FGA, the p-values for their respective coefficients were much smaller than those for eFG%. The same is true for the F-statistic and R-squared values, all of which were larger for the first two metrics than the last metric.

In general, solely relying on one statistical measurement to evaluate the goodness of fit for a model is often poor statistical practice. But given that the p-values, the F-statistic, and R-squared all have stronger values—not just one—for PPG and FGA, there is strong evidence to indicate that this quadratic model is a much poorer fit for predicting a player’s eFG% over the course of their career. And this discrepancy can be seen when comparing O’Neal’s actual progression to the projections of the model.

![Figure 5](/assets/journalism/shaq-zone-analysis/figure-05.png)

![Figure 6](/assets/journalism/shaq-zone-analysis/figure-06.png)

![Figure 7](/assets/journalism/shaq-zone-analysis/figure-07.png)

As one can see, while the quadratic curve appears to be a good fit for the first two data series, it does not fit well with the last one. However, what is important about the first two models is that they generally underestimate the extent of O’Neal’s decline, as shown by the negative residuals around the later stages of his career. Such a finding provides strong evidence for other factors that have contributed to his decline besides age.

## Building the main model

To determine whether or not the 2002 rule change was indeed impactful, the article will employ an interrupted time series regression model for each of the offensive metrics of PPG, FGA, and eFG%. This model uses a multiple linear regression in which there are three relevant independent variables: the amount time passed ever since the beginning of the dataset, whether or not the treatment has been applied yet in the form of a dummy variable (meaning that it can take the values of 0 or 1), and the amount of time passed since the treatment. For simplicity, the article will refer to these variables as A, B, and C, respectively.

![Figure 8](/assets/journalism/shaq-zone-analysis/figure-08.png)

Essentially, if the coefficient for variable B is shown to be statistically significant, then there is strong evidence for there being an *immediate* effect. Meanwhile, if the coefficient for variable C is shown to be statistically significant, then there is strong evidence for there being a *sustained* effect, which means that there is a meaningful difference between the pre-treatment slope and the post-treatment slope.

The models themselves were built through base R expressions, such as the ifelse() function and the lm() function. The summaries of the three models are shown to the right with the help of the stargazer package in R.

For the eFG% variable, none of the relevant coefficients are statistically significant. In addition, the model seems to be a poor fit of the data. As such, we have very strong evidence to conclude that the rule change in 2002 did not have much effect on O’Neal’s eFG%.

As for PPG and FGA, it may appear at first glance that the evidence for a causal relationship is clear, especially when taking into account the appearance of their time series plots. Indeed, their R-squared and F-statistic values are very high, and their coefficients for variable C are statistically significant, which provides strong evidence for there being a sustained effect of the rule change in 2002.

However, given that the coefficient for variable B is not statistically significant for any of the three models, it provides evidence against the hypothesis that there was a causal impact. After all, if the rule change was impactful, then O’Neal’s numbers would have taken an immediate hit, not just a sustained one. This finding leads to differing conclusions. One could conclude that the zone defenses had no actual impact on O’Neal’s performance, or that O’Neal was initially able to overcome these defensive schemes initially, but as he aged, he became less capable of dealing with them. Then again, one could argue that there was no immediate effect because teams did not fully adopt zone defenses until later years. In this scenario, the rule change would still be impactful on O’Neal’s performance.

## Conclusion

To conclude, this article has analyzed the introduction of zone defense into the NBA prior to the 2001-2002 season and its impact on Shaquille O’Neal’s offensive performance from a descriptive and causal perspective. Based on the previous results, it is shown that there is some statistical evidence in favor of the hypothesis that the rule change did hinder O’Neal’s to a certain degree.

An additional caveat that has not been mentioned here is health, which may be a significant confounding variable in O’Neal’s circumstance. Indeed, around the early 2000s, the big man claimed himself that he would decide to gain a substantial amount of mass through an immense bulking diet. While this decision may have been helpful in the short run, it may have ruined his long-term health and athleticism.

In order to further explore the impact that zone defenses have on players, analysts and researchers may want to employ more experimental designs, in contrast to the limited observational data that was utilized in this article. Such a process would be much stronger from a causal impact and would help provide even more insight on the actual effect of zone defenses.

Source: [https://basketball-reference.com/](https://basketball-reference.com/), [https://kaggle.com/](https://kaggle.com/)
