## Introduction

In Major League Baseball, a wide array of traditional and advanced statistics can be used to evaluate players, teams, or the league as a whole. With such a diverse set of metrics to evaluate performance, there is no consensus among players, executives, or fans about which of these metrics measure performance most successfully. While advanced statistics like wRC+ (weighted runs created plus) attempt to quantify a player or team's performance with a single value, the foundations for these metrics always begin with traditional statistics such as hits, strikeouts, and walks. Similarly, this article will consider purely traditional team metrics while applying statistical regression methods to identify what metrics correlate to wins and to what degree these correlative metrics affect a team's win count.

The data set I will analyze contains season data for all MLB teams for 2019, 2021, and 2022 (2020 is omitted because of the shortened season due to COVID-19), a total of 90 observations. My outcome variable will be the number of games won by a team in a particular season, and I will attempt to create a multiple linear regression model to assess the significance of the linear relationship between a team's number of wins and several of a team's offensive, defensive, and miscellaneous team statistics from a given season.

The offensive predictors include a team's number of hits, number of home runs, number of walks, and number of strikeouts by batters in a season. The defensive predictors are number of hits allowed, number of home runs allowed, number of walks allowed, number of strikeouts by pitchers, and fielding percentage (% of plays where an error is not made) in a season. The last predictor will be the number of fans who attended a team's games in the season. I will utilize statistical testing, assumption verification, and model selection to identify which combination of these ten predictors most effectively predicts an MLB team's number of wins in a season.

Here is a description of each variable used in the regression analysis:

![Figure 1](/assets/journalism/what-wins-ball-games/figure-01.png)

## Summary Statistics

![Figure 2](/assets/journalism/what-wins-ball-games/figure-02.jpg)

Looking at the summary statistics for all of the variables, it can be seen that there is a variety of distributions among the variables, all of which are numerical. Numbers like attendance can go as high as almost four million with a 12-digit variance, while fielding percentage can only reach one at maximum and has a near zero variance.

I will now construct a multiple linear regression model and perform a t-test for slopes to test whether each individual predictor is significant in predicting a team's number of wins in a season.

## Model Summary and T-Tests

![Figure 3](/assets/journalism/what-wins-ball-games/figure-03.jpg)

Using a significance level of 0.05, the t-test results show that six of our predictors have p-values below 0.05 and are thus significant, while attendance, FP, SO, and SOA have p-values above 0.05, rendering them insignificant. This indicates that the estimated slopes of the significant variables (H, HR, BB, HA, HRA, and BBA) differ significantly from 0, and they thus have a significant effect on wins, the outcome variable in our model. Conversely, FP, SO, and SOA do not have a significant effect on the outcome variable because their estimated slopes do not significantly differ from 0.

The model resulted in an R-squared value of 0.897 and a 68.8 F-statistic with a p-value of 2.2x10^-16^ for the F-test. These results communicate that the model is highly likely to have at least one significant predictor, and the predictor variables explain 89.7% of the variation in wins.

## Verifying Assumptions

In order to further assess the model's goodness of fit, the assumptions for multiple linear regression must be verified. The assumptions that must be verified include linearity between the response variable and the predictors, normality of the error terms, constant variance of the error terms, and no multicollinearity between predictors. It is also worthwhile to check for any outliers or influential points using standardized residuals, leverage, and Cook's Distance.

Here are four diagnostic plots that will help check the model assumptions:

![Figure 4](/assets/journalism/what-wins-ball-games/figure-04.png)

To satisfy the assumption of linearity, the residuals must be randomly scattered about the line y = 0 in the residuals vs. fitted values plot. This holds true, so the linearity assumption is met by the model.

In order to verify the assumption of normality of the error terms, the normal Q-Q plot must form an approximately straight line. This holds true for the normal Q-Q plot shown, verifying the normality of the error terms.

The assumption of constant variance of the error terms can be checked in the residuals vs. fitted plot. In this plot, the spread of the residuals around the line y = 0 is fairly consistent and does not significantly change with the fitted values, so the constant variance assumption is met.

To check for multicollinearity, the Variance Inflation Factor (VIF) for each variable in the model can be calculated. If none of the VIF values are greater than 5, then the correlation between predictors does not disrupt the coefficient estimates. The VIF values for each predictor are shown below.

![Figure 5](/assets/journalism/what-wins-ball-games/figure-05.jpg)

None of these values exceed 5, so the assumption of no multicollinearity between predictors is satisfied.

Using standardized residuals, leverage, and Cook's Distance, outliers and influential points can be identified. By looking at the standardized residuals vs. leverage plot, there is only one with standardized residuals above 2 or below -2, making it an outlier. There are twenty-two high leverage points, which are categorized by having leverage values higher than 2(p+1)/n (p = number of predictors, n = number of observations), or higher than two times the average leverage value in the model, (p+1)/n. These leverage points have a significant effect on the model, but are not necessarily outliers, as a good leverage point will have a high influence on the model while still following the regression pattern. There are eight points with Cook's Distances greater than 4/(n - 2), making them outliers.

Despite the outliers and influential points present in the model, none of the influential points are outliers, so they do not disrupt model estimates very much. In addition, these points do not cause any of the model assumptions to be violated. Therefore, it will be not necessary to transform this model to account for outliers.

After verifying the assumptions, the model can be improved using model selection to ensure the best combination of predictor variables is included in the model. This method may also help reduce the number of outliers and influential points in the model.

## Variable Selection

The model is shown to meet the assumptions of multiple linear regression. Now, model selection can be used to find the best combination of predictors in predicting the outcome variable, wins. The forward regression model selection method searches for the best-fitting model by starting with no predictors and continuously adding the most significant predictor not yet in the model, eventually resulting in the original full model. The best of the ten models can then be identified by looking for the highest adjusted R-squared, lowest CP, and lowest BIC between the models. The best-fitting models will have the best predicting power without introducing too many variables, as this complexity could cause over-fitting, worsening the model's ability to generalize the model to new observations accurately.

Here are graphical comparisons between the ten models based on their adjusted R-squared, CP, and BIC values.

![Figure 6](/assets/journalism/what-wins-ball-games/figure-06.png)

Using forward selection, the BIC and CP of the models stop significantly decreasing after the model with six variables is considered. R-squared stops significantly increasing after the model with six variables. The model with seven variables has a slightly lower value of CP and a slightly higher value of R-squared in comparison to the six-variable model.

In order to choose between the six and seven-variable models, I will conduct a partial F-test to analyze the significance of the predictor that is present in the seven-variable model and absent in the six-variable model. The null and alternative hypotheses for the test are as follows:

H-Null: The reduced model is more significant in predicting wins than the full model

H-1: The full model is a more significant predictor of wins than the reduced model

![Figure 7](/assets/journalism/what-wins-ball-games/figure-07.jpg)

As shown, the p-value for this test is greater than the significance level of 0.05, so we fail to reject the null hypothesis that the reduced model outperforms the model using FP as a predictor, meaning that FP it is an insignificant predictor in our model and the reduced six variable model will be chosen as the final model. It is also worth noting that the six-variable model has only two high leverage points, a large decrease from the twenty-two high leverage points present in the original model. The final model summary is shown below:

![Figure 8](/assets/journalism/what-wins-ball-games/figure-08.jpg)

## Conclusion

After investigating the relationship between the number of games an MLB team wins in a season and ten predictor variables with a goal of creating a multiple linear regression model to fit the relationship, six predictors were chosen for the final wins model: **hits** , **home runs** , **walks** , **hits allowed** , **home runs allowed** , and **walks allowed** .

These results suggest that the number of hits, home runs, and walks are important metrics of baseball that teams should try to maximize on offense and limit for opposing teams on defense in order to increase win potential.

However, the model does not fully explain the variation in team wins; only 89.23%. The outliers and influential points in the data set could be accounted for more effectively by utilizing the weighted least squares method, which could improve the model's goodness of fit. If given more time, further investigation of other predictor variables and more observations of data could yield an improved model.

Further application of the model could involve introducing new data to test the model on in order to evaluate how well it predicts a team's number of wins. Assuming that the model predicts team wins fairly accurately, further investigation of how to maximize and minimize metrics positively and negatively correlated with wins respectively could help MLB teams train and prepare their players and rosters to give them the best chance to succeed.

Lahman Baseball Database
