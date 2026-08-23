## Introduction

Depth is overrated. That is what I always believed when it came to the NBA. I think that if depth, the strength of a basketball team outside of its star players, is the highlight of your NBA team, they will never be a true championship contender. By this, I mean that you absolutely need star players to make deep playoff runs in the NBA. Yes, championship teams typically *are* deep, but this is not *why* they win championships.

For example, the Golden State Warriors had great supporting pieces next to Steph Curry, Klay Thompson, and, later, Kevin Durant, but that was rarely cited as the reason they won three championships. Similarly, for all four of LeBron James’ championship runs, he has always been part of an elite duo (or trio) of all-NBA players. The perfect counterexample of this is the Los Angeles Clippers. The Clippers have made the playoffs in eleven of the previous thirteen seasons, second to only the Boston Celtics during this stretch. During this run, there have been multiple occasions where the media praised the Clippers for their depth and having the best roster on paper. However, they have only advanced to the Western Conference Finals once in franchise history and have always fallen short of their championship aspirations.

After examining these examples, I came up with a hypothesis that depth, quantified by the performance of NBA teams’ benches, would serve as a good predictor of success in the regular season but a poor predictor of winning in the playoffs. This article will utilize linear regression techniques to determine if this claim is valid.

## Methodology

### Data Collection

To explore whether bench performance is a reliable predictor of regular season and playoff success, I collected detailed bench performance statistics for all thirty NBA teams for the 2022-2023 and 2023-2024 NBA seasons. If you are interested, you can view the data [here](https://drive.google.com/drive/folders/1pT47g6SMkzy_hvmXxX72b5qmDz7VOxMG?usp=drive_link).

I sourced this data from the official NBA website containing game-by-game statistics for all teams. By focusing on per-game statistics, I aim to capture the consistency and overall impact of bench players throughout the season.

### Development of the Multiple Linear Regression (MLR) Model

I developed a Multiple Linear Regression (MLR) model to analyze the relationship between bench performance and team success. At a basic level, an MLR model helps us understand how multiple independent variables (in this case, the various bench performance statistics) collectively influence a dependent variable (here, the number of regular season wins and playoff wins).

The first step in building the MLR model was to select the most relevant variables. Initially, I included all collected statistics to capture a comprehensive view of bench performance. However, not all variables equally contribute to predicting wins, and including too many can lead to overfitting. In this scenario, the model performs well on training data but poorly on unseen data.

I employed the Least Absolute Shrinkage and Selection Operator (Lasso) feature selection to refine the model. Lasso is a technique that helps select only the most significant variables by shrinking the less important ones to zero. Reducing the number of variables improves the model's predictive accuracy and enhances interpretability.

Once the significant variables were selected, I trained the MLR model using the 2022-2023 season data. Training involves finding the best-fit line (or hyperplane, in the case of multiple variables) that minimizes the error between the predicted and actual values.

I then validated the model by applying it to the 2023-2024 season data to predict regular-season and playoff wins. Validation is crucial as it tests the model’s ability to generalize to new data, ensuring that the learned patterns are not specific to the training set.

By following this methodology, I aim to determine whether bench performance, quantified by my selected statistics, strongly predicts the NBA team's success in the regular season and playoffs.

## Results and Analysis

### Model Summary

The final model predicts a team's regular-season wins using the following charts and accompanying equation.

![Figure 1](/assets/journalism/depth-is-overrated/figure-01.png)

![Figure 2](/assets/journalism/depth-is-overrated/figure-02.png)

Also, using the model, we can assign each NBA team a “depth index” out of 100. Here are the indexes for every team in the 2022-2023 season. The Milwaukee Bucks led the pack with a depth index of about 70, while the Detroit Pistons came in last with an index of about 21. Interestingly, the top three teams on the depth index were all from the Eastern Conference, and none advanced to the NBA finals. Instead, the Miami Heat, 11th on the depth chart, were the ones to make it to the finals.

![Figure 3](/assets/journalism/depth-is-overrated/figure-03.png)

I understand that this is quite a bit to examine. So, what does it mean? Using Lasso Regression, I narrowed down the original dataset of forty variables to sixteen that were considered statistically significant predictors of regular-season success.

The MLR equation provides some interesting insights. Notice that the variables in the equation are in order of descending coefficients. This means they are listed in order of most positively correlated with regular-season wins to most negatively correlated. For example, we could conclude that fast break scoring is the most desirable trait of an NBA bench, while a backup group too focused on hunting steals may harm team success.

However, for the purpose of this article, we are more concerned with the model's accuracy. It is impressive, to say the least, for the regular season.

### Regular Season Prediction Results

The model for the 2023 regular season boasts an R-squared value of 94.9%, which measures how well the model explains the variation in the data. In basketball terms, think of R-squared as a measure of how well our "playbook" (the model) helps us understand and predict the team's performance based on their bench statistics.

An R-squared value of 94.9% means that 94.9% of the differences in the actual number of regular season wins for NBA teams can be explained by the statistical model we used. This high percentage indicates that our model is very effective at predicting the outcomes based on the data we have.

Simply put, imagine a coach trying to predict how many games their team will win in a season based on various statistics like player efficiency, defensive rebounds, and assists. If the coach's predictions are highly accurate, it means their understanding of the game and the factors that lead to winning is very strong. Similarly, our model's R^2 value of 94.9% suggests that it captures almost all the important factors that contribute to a team's success during the regular season.

![Figure 4](/assets/journalism/depth-is-overrated/figure-04.png)

When the model was expanded to predict the 2024 season, it had an average standardized residual of -0.94. This value provides insight into the accuracy of the model's predictions for the new season.

The standardized residual is a measure of how far off the model's predictions are from the actual results, expressed in terms of standard deviations. An average standardized residual of -0.94 means that, on average, the model's predictions were 0.94 standard deviations below the actual number of regular season wins.

In practical terms, a standardized residual close to zero would indicate highly accurate predictions, with little difference between predicted and actual values. In this case, an average standardized residual of -0.94 is relatively close to zero, suggesting that the model's predictions were fairly accurate for the 2024 season. The model's ability to predict wins within less than one standard deviation of the actual results indicates a strong predictive capability.

Overall, while the model did slightly underestimate the number of wins, the magnitude of the residuals indicates that the model's predictions were quite reliable. The average standardized residual of -0.94 shows that the model was generally accurate in forecasting the regular season wins for the 2024 season, demonstrating its robustness and applicability for future predictions.

### Model Collapse in Playoffs

However, the model breaks down when expanded to the playoffs. The R-squared value for the model when applied to the 2023 NBA playoffs is -0.762. This negative R-squared value indicates that the model fails to explain the variability in playoff wins. Essentially, the model performs worse than a simple average of playoff wins across all teams, signifying poor predictive power for playoff outcomes. This negative R-squared value could even suggest an inverse correlation between bench performance and playoff wins, indicating that some teams could be "too deep" for the playoffs. This notion implies that relying too heavily on bench performance might detract from the star-driven success typically required in playoff scenarios.

In the context of the playoffs, an R-squared value of -0.762 suggests that the model is not just inaccurate but also misleading in predicting playoff performance. The value implies that the model's predictions are significantly off, providing a negative contribution to understanding the actual results.

The predicted vs. actual playoff wins chart shows a lack of correlation between the predicted and actual values. Unlike the regular season, where the model showed a strong fit, the playoff predictions scatter widely around the diagonal line representing perfect predictions.

The standardized residuals plot highlights the discrepancies in more detail. The residuals, representing the difference between predicted and actual playoff wins, vary widely, with many points lying far from the zero line. This spread indicates a high level of prediction error.

![Figure 5](/assets/journalism/depth-is-overrated/figure-05.png)

Additionally, the dashed red lines marking two standard deviations from the mean residual illustrate the extremity of some prediction errors.

The standardized residuals reveal that the model's assumptions, which held for regular season data, do not apply to the playoffs. Factors such as player injuries, game-to-game adjustments, and higher reliance on star players during the playoffs likely contribute to this breakdown. Hence, while the model effectively predicts regular season performance based on bench statistics, it does not capture the dynamics crucial for playoff success.

## Conclusion

In summary, my analysis aimed to understand the relationship between NBA bench performance and team success, both in the regular season and playoffs. Using a Multiple Linear Regression (MLR) model, I found that bench performance is a strong predictor of regular-season success, with an R-squared value of 94.9%. This indicates that the model can explain 94.9% of the variation in regular-season wins based on the selected bench statistics, highlighting its accuracy and reliability.

However, when the model was applied to the playoffs, it failed to maintain its predictive power. The negative R-squared value of -0.762 suggests that the model not only poorly predicts playoff outcomes but might also imply an inverse relationship between bench performance and playoff success. This breakdown is likely due to the increased emphasis on star players, game-to-game adjustments, and other dynamics unique to the playoffs.

Overall, while bench depth is crucial for a strong regular-season performance, it appears to be less significant in the playoffs, where star power and other factors play a more critical role. These findings provide valuable insights for teams looking to build a championship-contending roster, emphasizing the need for a balanced approach that values both depth and elite talent.

By understanding these dynamics, teams can better strategize their roster construction, ensuring they are well-prepared for both the grind of the regular season and the high-stakes environment of the playoffs.

[NBA.com](http://NBA.com)
