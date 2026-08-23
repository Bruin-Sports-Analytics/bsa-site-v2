### By: Arvind Kalyan

Following the age of Big 3’s in Miami, Los Angeles, and Golden State, a sort of staple has emerged amongst title-contending NBA teams: two superstars, occupying max contract slots in a team’s salary table, complemented by a remaining twelve players composed of exceptions, draft picks, and veteran-minimum salaries. With such limited resources to fill out an adequate supporting cast around their superstars, the hunt for cheap production each offseason can place the front offices who adopt this top-heavy model in quite a bind.

We can quantify the construction of that supporting cast as a construction of skills—3-point shot making, rim protection, athleticism, etc. In the process of roster construction with a budget dominated by max contracts, it becomes crucial for general managers to collect these skills in as cost-efficient a manner as possible. Thus, the question is posed: what are the most and least valued skills in today’s NBA?

## Feature Selection

To start, I selected certain stats to quantify each of the most pertinent skills in building an NBA team. For some of the less traditional metrics, I’ve included an official definition from NBA.com.

### Offensive

Scoring:

Less than 5ft FGM

10-14 ft FGM

15-19 ft FGM

20-24 ft FGM

3PM

Screen Assists: The number of times an offensive player or team sets a screen for a teammate that directly leads to a made field goal by that teammate

Rebounding:

Offensive Rebounding

Defensive Rebounding

Rebounding

Passing: ASTADJ (Adjusted Assists): The total sum of a player or team's assists, free throw assists, and secondary assists

Passes Made

### Defensive

Rim Protection:

Contested 2pt shots

Blocks

Perimeter Defense:

Contested 3pt shots

Steals

Hustle:

Deflections

Loose Balls Recovered

### Athleticism

Average Speed

Average Speed (OFF)

Average Speed (DEF)

Here’s a look at some of those stats, aggregated for the players in the 2021-22 NBA Season.

![Figure 1](/assets/journalism/paying_skills/figure-01.png)

![Figure 2](/assets/journalism/paying_skills/figure-02.png)

Here’s a look at the leaders in adjusted assists, down to the top 15, as well as a histogram with the counts of players and their assists.

![Figure 3](/assets/journalism/paying_skills/figure-03.png)

![Figure 4](/assets/journalism/paying_skills/figure-04.png)

Derrick Walton Jr., who has played all of 3 games in his NBA career, is only really here on a sample-size error. Otherwise, the rest of the top-7 seems intuitive enough.

![Figure 5](/assets/journalism/paying_skills/figure-05.png)

![Figure 6](/assets/journalism/paying_skills/figure-06.png)

Most NBA players seem clustered around that 4-5MPH range on their average offensive speeds. The data near zero is, again, just due to a small sample size.

## Data Processing

The counting stats I used to model offensive and defensive skills were all tracked on a per-game basis. Players that are paid more, however, tend to be played more, lending these stats to a potential bias where a player’s lack in a particular counting stat may be attributed to a lack of playing time as opposed to a lack of that skill. In order to account for this, I normalized the stat by minutes played.

Of course, this now led to the forsaken small sample-size problem, where a hypothetical player who played 30 seconds and made 1 3-pointer would now sit atop the table in 3PM. I applied a total minutes cutoff of 350 minutes played, slicing the number of eligible players from 590 to 371, but leading to some more reasonable-looking results.

Then, to combat the right skew in a lot of the data, I applied a logarithmic scaler, bringing the stat distributions slightly closer to normal.

Here are the same selected three stats following processing:

![Figure 7](/assets/journalism/paying_skills/figure-07.png)

![Figure 8](/assets/journalism/paying_skills/figure-08.png)

![Figure 9](/assets/journalism/paying_skills/figure-09.png)

![Figure 10](/assets/journalism/paying_skills/figure-10.png)

![Figure 11](/assets/journalism/paying_skills/figure-11.png)

![Figure 12](/assets/journalism/paying_skills/figure-12.png)

Using the aforementioned stats as features, I set the target variable to be the amount of money, in dollars, each player is set to make in 2022.

The first step with these salaries was to filter out any players still being paid under the terms of their rookie contracts. A player like Luka Doncic, who has finished 6th and 4th in MVP voting over the last two years, is still being paid just $10.2M under his rookie deal. The 5-year, $207.1M extension Doncic signed in December of 2021 will finally bring the appropriate market value to his extraordinary stats, but in this study, Doncic, and his fellow overachieving outliers, posed the potential to skew the results of the findings. This brought the count of players down to 257.

One final aspect remained unaccounted for: the supermax contract. Stephen Curry, for example, is currently being paid $45.8M as a result of the supermax deal with the Golden State Warriors. Had he hypothetically left Golden State and signed elsewhere as an unrestricted free agent this offseason, Curry would only be eligible to make $39.3M as part of the max-contract he would inevitably sign. To account for this difference, I set an upper bound to players salaries to $35M, placing a “max-value” player who re-upped via supermax and one who signed a regular max with a new team on the same footing.

## Model

Using each of the aforementioned stats as features, and adjusted salary as the target variable, I employed an XGBoost Classifier to quantify the feature importance for each of the stats—and in theory, skills.

Essentially, the XGBoost Classifier trains multiple decision tree models sequentially, using the error residuals of the previous models’ results to influence future models, then aggregating these models together in the end. Once the final model is obtained, we can calculate an F-score for each attribute, denoting its number of appearances in the model and therefore, representing its relative feature importance.

The most important skills, represented by these features, are the ones that are most “important” toward the salary that each player makes, or target variable used in classification. Note that the importances of each of these features are listed in order of magnitude, so their actual association may be either positive or negative.

## Findings

The classifier produced the following feature importance ranking amongst the selected stats:

![Figure 13](/assets/journalism/paying_skills/figure-13.png)

![Figure 14](/assets/journalism/paying_skills/figure-14.png)

## Analysis

### Athleticism

The average speeds are the least important features toward determining the salary of a player—there is very little relationship between the stat and a player’s salary. There are some scheme-dependencies that may impact this stat—for example, a player on a team that runs a motion offense is more likely to have a higher average offensive speed than one centered around post or isolation play. Still, this fits what’s intuitively understood. There are plenty of G-League players who can jump through the gym, but because they don’t possess the requisite technical shooting or defensive abilities, they are unable to earn sizable contracts.

![Figure 15](/assets/journalism/paying_skills/figure-15.png)

### Defense

The feature with the most importance in the finding is contested 3-point shots. This stat is meant to encapsulate good wing defense, and at first glance, the result seems intuitive. The league has gravitated toward the perimeter offensively, so, naturally, the counter would be for defenses to do so as well. However, a look at the findings actually shows a seemingly-negative relation between salary and contested shots.

![Figure 16](/assets/journalism/paying_skills/figure-16.png)

A common characteristic with most of the players on this list is a nondescript offensive game, and from there, a pattern begins to show. Playing pure perimeter defense and contesting shots, as measured by the stat, requires a great deal of energy expended on the defensive end, leaving players with less to give on the offensive side. On the flip-side, good defensive players who are even more offensively inclined are sometimes “hidden” defensively in an effort to conserve energy, camping out on the corners while another player takes on primary on-ball duties. Thus, with these players with stingy perimeter defense and limited offensive contribution, teams appear more inclined to set them loose defensively, but less inclined to give out bigger contracts.

### Playmaking

Similarly high on the feature importance ranks are adjusted assists, counting a player’s traditional assists, secondary assists, and passes leading to free throws for a teammate. A player who ranks highly in adjusted assists is one who can dish the ball, control the flow of an offense, and keep his teammates involved on the offensive side of the ball.

![Figure 17](/assets/journalism/paying_skills/figure-17.png)

There’s a strongly positive association between adjusted assists and salary. Simply put, being able to run an offense gets guys paid. The level of mental acuity required to make the proper reads on a defense, then call and execute plays for a high-level offense, make this a skill that is incredibly rare, valuable, and ultimately, in high demand across the NBA. Point guard Ricky Rubio is perhaps the epitome of this trend. Rubio, despite notable shortcomings as a shooter (38.9% career shooter, 32.6% from beyond the arc), is one of the league’s most talented playmakers, averaging 7.6 assists throughout his years in the NBA. Almost exclusively due to this ability to play-make and orchestrate a team’s offense, Rubio has played for over a decade in the league, earning nearly $120M in contracts in that period.

### Scoring

The first scoring stat listed is field goals made within 5 feet. These are the highest-percentage looks in the NBA, with players scoring at a 62.5% clip from this region across the league.

![Figure 18](/assets/journalism/paying_skills/figure-18.png)

From here, there appears to be a negative relationship between scoring at the rim and salary. Being proficient in these high-efficiency shots makes these players some of the most efficient scorers, on a percentage-basis, in the NBA. But as the graph shows, teams have been able to find production in this facet of the game for relatively cheap. Historic scorers like LeBron James and Giannis Antetokoumpo, of course, are outliers with significantly higher price tags, but the players in between the two superstars—JaVale McGee, Daniel Gafford, Montrezl Harrell, and Nic Claxton—are all making pennies on the dime in comparison. This is one of the cheapest skills in the NBA.

![Figure 19](/assets/journalism/paying_skills/figure-19.png)

On the flip side, near the top of the list is made field goals from 10-14 feet from the basket. This is a bit of a unique region—a shooter’s no man’s land—in that it’s shorter and worth less than a 3-pointer, shorter too than a traditional mid-range shot, but not close enough to the basket to reap the benefits of the aforementioned, higher-percentage looks around the rim. This region sees the second-least amount of field goals attempted across the league, leading only the inefficient and thusly phased-out midrange shot in frequency. In today’s NBA, where the focus has shifted to scoring from behind the arc and inside the rim, players rarely camp out in the mid-range waiting for a catch-and-shoot opportunity.

Therefore, efficiency from this range implies strong shooting ability, and not only on spot-up or catch-and-shoot looks, but off the dribble, since movement and self-shot creation are required to shoot so regularly from this area. The only players that approach—much less excel—in this zone are considered the true “three-level” scorers. A quick look at the leaders in these stats shows as much.

![Figure 20](/assets/journalism/paying_skills/figure-20.png)

From this, we can infer an extremely positive relationship between salary and scoring—and scoring all across the court. Even with the rise of 3-point and paint specialists, the game will always be geared toward the players that can get the ball in their hands and score it from anywhere. For a game that began with a group of men pushing soccer balls through peach baskets, it’s somewhat fitting that one of its most sought-after skills, no matter where the last 100 years have taken the game, is its most intrinsic: just putting the ball in the basket.

## Conclusion

This study shows us that the most valuable skills in today’s NBA are three-level scoring and playmaking, while the skills that teams are able to acquire for the cheapest include scoring at the rim and three-point defense. With the exception of rim scoring—a skill that shares more of a correlation with height—the most important skills in the league remain on the offensive side of the ball. The offensive IQ required to be a good playmaker, for example, is significantly more in-demand than the corresponding defensive IQ in navigating screens and defending the perimeter.

## Future Work

An interesting future study I want to look into involves a similar feature analysis done across each year’s free agent market, using the prior year’s stats as features and contract received in free agency as the target. Since this process is reasonably easy to repeat across multiple years’ worth of game and free agent data, I would be able to look into the trends in importance of each of the different skills over the last few years.

### Sources

[BasketballReference.com](http://basketballreference.com)

[NBA.com](http://nba.com)
