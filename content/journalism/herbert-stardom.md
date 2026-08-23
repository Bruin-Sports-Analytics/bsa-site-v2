### By: Krithik Jatavallabhula

When looking at NFL quarterbacks, we assess their performance through many different metrics: passer rating, passing yards, touchdowns, interceptions, etc. However, while the quarterback skill is relevant for the following metrics, we should also look at external factors, such as the other players on offense (offensive line, running back, wide receivers, etc.) If a quarterback has a poor offensive line, then even if he is really good, his stats probably won’t reflect this as he’ll be getting hit more frequently. This is the same with wide receivers; if the quarterback is working with a poor receiving core, he could make the best throws possible, but it wouldn’t really mean much if the receivers couldn’t get open or couldn’t catch the ball. While I won’t be working with the teams’ defenses, one can argue that a team's defense can psychologically affect a quarterback's performance. For example, if one’s team had a really good defense, they may play a little more conservative and mistake-free, but if the defense was constantly allowing points, it may pressure the quarterback to score more and make a lot more mistakes.

For the sake of this, I wanted to use one quarterback as a test: Justin Herbert. Justin Herbert is an interesting quarterback in the sense that, after an illustrious rookie season where he broke many rookie records, everyone expected him to be amongst one of the elite quarterbacks in the league. However, three seasons later, he’s kind of just… there. He’s definitely not a liability by any stretch, but he hasn’t been amongst elite company like many people have expected him to. He had above average stats in the 2021 and 2022 season, which resulted in barely missing the playoffs one season and losing in the first round of the playoffs the next season. While he is in the upper echelon of quarterbacks, people expected him to be much more. This brings me to the question: is Justin Herbert the problem or has his team failed him? To do this, I will be comparing him to other quarterbacks in the league and trying to predict his stats. If he is consistently doing worse than expected, it may be fair to say that he is the problem, but if the predictions show that he is consistently doing better, then perhaps it is the team that let him down.

For our data, I found a large dataset on Kaggle, and have subset it so that the quarterbacks will only be from the 2018 season and up (not including the current NFL season) with at least 1000 yards thrown. For this dataset, I will be observing individual stats (Passing Yards, TD, INT, Completion Percent, Passer Rating), and team stats (Offensive Line Ranking, Running Back Group Ranking, Wide Receiver Core Ranking). Team stats will be used to predict individual stats. 5 different models will be made to predict each individual stat.

When it comes to actually making the model, I decided to use linear regression with cross validation. Since the data set is pretty short (191 entries), it will be important to cross validate the data to get the best model possible. I used 5 fold cross validation, which essentially means that the data set will be broken up into 5 parts, and each time it runs, there will be 4 parts that are used to make the model, and 1 part that will be used to test the validity of the model. This process will repeat 5 times, 1 time for each part. The graphs for each individual stat will be shown below.

![Figure 1](/assets/journalism/herbert-stardom/figure-01.png)

![Figure 2](/assets/journalism/herbert-stardom/figure-02.png)

![Figure 3](/assets/journalism/herbert-stardom/figure-03.png)

![Figure 4](/assets/journalism/herbert-stardom/figure-04.png)

![Figure 5](/assets/journalism/herbert-stardom/figure-05.png)

As we can see, with the exception of INT, there is a strong relationship between the other individual stats, implying that the ranking of your team has some importance.

Now that the model is made, the next thing is to make predictions. To ensure that I don’t have to compare predicted vs actual stats for every single QB, the next step I wanted to take was to create a “score” for each quarterback. This score would essentially take the difference between projected stats and actual stats for each metric and add them together. For example, if someone was predicted to have 2 touchdowns per game and 1 interception per game, and actually had 1 touchdown per game and 2 interceptions per game, their score would be -2, which would be really bad in this case (Note: it’s a good thing in this case if you have more projected interceptions than actual interceptions, but this only applies to interceptions. Additional note. The difference in passing yards will be multiplied by 0.1 otherwise it will heavily inflate scores).

The following chart is from the 2022 NFL season (Every number to the left of scores is predictions and the score is the comparison between predicted and actual scores):

![Figure 6](/assets/journalism/herbert-stardom/figure-06.png)

Out of 40 QBs that qualified for this, only 15 did better than they were supposed to, and in terms of exceeding expectations, Justin Herbert was the 12th best QB, which somewhat proves his case that his team let him down. However, the main thing with this does come down to consistency, which is why we will also be using his 2021 and 2020 seasons.

2021:

![Figure 7](/assets/journalism/herbert-stardom/figure-07.png)

Out of 36 eligible QBs, 17 did better than expected, which is significantly better than the 2022, but it’s still less than 50%. Justin Herbert ranked 7th, which is much better than the year after. This is still something that doesn’t prove too much, but for what it’s worth, Kyler Murray is the only QB to rank higher than him in both 2022 and 2021.

2020:

![Figure 8](/assets/journalism/herbert-stardom/figure-08.png)

Out of 39 eligible QBs, 22 had a positive score, so this was probably a good year for QBs. Justin Herbert ranked 10 here, which is pretty good as this was his rookie season and he still had a lot of development to undergo.

Now, this brings us to the question: did Justin Herbert’s team let him down? When it comes to playoff success, he unfortunately has not had much. He did not make the playoffs his first two years, and he did make it in his third year, but he did not win a playoff game. While defense is a big part of regular season and postseason success, for the sake of this article, we will see if Justin Herbert has been doing his role. To do this, we will be looking at the average score of Pro-Bowl (only the elected Pro-Bowlers, not replacements), and we will also be looking at the average score of QBs whose team finished in the final four.

Pro-Bowl QBs 2022: Patrick Mahomes, Josh Allen, Joe Burrow, Jalen Hurts, Kirk Cousins, Geno Smith

2021: Justin Herbert (won’t be included in the average), Patrick Mahomes, Lamar Jackson, Kirk Cousins, Kyler Murray, Russell Wilson

2020: Patrick Mahomes, Josh Allen, Deshaun Watson, Aaron Rodgers, Russell Wilson, Kyler Murray

2019: Lamar Jackson, Patrick Mahomes, Deshaun Watson, Russell Wilson, Drew Brees, Aaron Rodgers

2018: Patrick Mahomes, Philip Rivers, Tom Brady, Drew Brees, Jared Goff, Aaron Rodgers

The average score for the Pro-Bowlers was 14.1218, and the average score for Justin Herbert was 6.831845, and this was with his rookie season that dragged his average down significantly. Regardless, this is still not a very good look for him, as the Pro-Bowlers have outperformed him by nearly double, and this is odd considering that Justin Herbert was actually a Pro-Bowler once in his career.

Now we need to look at playoff runs. Once again, defenses are important and defense isn’t included in this, so we will only be looking at the offensive side.

Final Four in 2022: Patrick Mahomes, Joe Burrow, Brock Purdy, Jalen Hurts

2021: Patrick Mahomes, Joe Burrow, Matthew Stafford, Jimmy Garoppolo

2020: Patrick Mahomes, Josh Allen, Tom Brady, Aaron Rodgers

2019: Patrick Mahomes, Ryan Tannehill, Jimmy Garoppolo, Aaron Rodgers

2018: Patrick Mahomes, Tom Brady, Jared Goff, Drew Brees

The average score for final four quarterbacks is 14.90582, which is higher than Justin Herbert’s average, which was 6.831845. This implies that maybe Herbert could improve to get himself further into the playoffs, and it also suggests that perhaps the QB play of the QBs making deep playoff runs is better than the QB play of the Pro-Bowlers, but that’s a discussion for another time.

![Figure 9](/assets/journalism/herbert-stardom/figure-09.png)

The above plot shows where Justin Herbert ranks amongst other QBs in expectations. He does consistently overperform, but it seems that he just barely makes it over the mark. While consistency is a good thing, there is also that small concern that if he gets the team he needs, how will this affect his expectations?

To conclude, this article focused mainly on Justin Herbert, and I wanted to see whether it was his own ability that was holding him and his team back, or if it was his teammates. Justin Herbert is interesting in the sense that he is one of the best QBs in the league, but he’s also probably the most forgotten. Playing on the Chargers probably has something to do with it, but it is kind of interesting to see how someone who had the greatest rookie season by a QB in NFL history could just become nonexistent a few years later. Based on this article, it seems that Herbert is without a doubt within the upper echelon of QBs, but even with a better supporting cast, he may not be at the level needed to make a deep playoff run or be a consistent Pro-Bowler. Is this a bad thing? Not necessarily, seeing as some QBs have had good seasons despite falling short of expectations. For example, in 2021, Patrick Mahomes and the Chiefs made the AFC Championship, despite having a score of -.07. On the flip side, in 2020, Gardner Minshew and the Jaguars finished with a 1-15 record, despite Minshew being ranked [#12](https://www.bruinsportsanalytics.com/blog/hashtags/12) across all years.

While the results may have been a bit underwhelming for Justin Herbert stans, one very positive takeaway from this was his consistency. Out of the 50 QBs whose names were used more than one time, Herbert was one of only 5 QBs who exceeded expectations in all of their years (the other 4 were Kyler Murray, Drew Brees, Gardner Minshew, and Ryan Fitzpatrick). Consistency is a big part of being a good NFL QB, and if Herbert can consistently overperform, even if it isn’t by much, he could eventually find himself stumbling into a deep playoff run.

While I did enjoy writing this article, there were definitely some flaws that need to be noted. This was a sample size of only 6 seasons, which is pretty small, and the only metrics I used to make the model were WR rank, RB rank, and OL rank, and there are a lot more metrics within the offense itself that doesn’t include the QB, so there was definitely room for improvement. There was also the fact that defenses weren’t considered whatsoever. Another big one was the fact that rushing stats weren’t used at all, which put the mobile QBs at a bit of a disadvantage.

Out of curiosity, I wanted to see which QB in which season exceeded expectations the most and which did not. The “best” QB was Aaron Rodgers in 2020. This makes perfect sense, considering that Aaron Rodgers won MVP (Most Valuable Player), made the Pro-Bowl, and finished the season as one of the final four teams. The second “best” QB was Deshaun Watson in 2020, who surprisingly went 4-12 that season, which shows the importance of a good defense. The “worst” QB was Zach Wilson in 2022. Once again, this also makes sense considering that he got benched in the middle of the season for his poor performance. The mean score was 0.00166, meaning that the average was pretty close to 0, which implies that the linear regression model did a pretty good job predicting stats.

For the sites I consulted during this project, feel free to see the page below.

### Sources

[https://www.espn.com/nfl/stats/team/_/season/2022/seasontype/2](https://www.espn.com/nfl/stats/team/_/season/2022/seasontype/2)

[https://seahawkswire.usatoday.com/2023/01/12/seahawks-offensive-line-rankings-week-18-pff/](https://seahawkswire.usatoday.com/2023/01/12/seahawks-offensive-line-rankings-week-18-pff/)

[https://www.nfl.com/stats/team-stats/offense/rushing/2022/reg/all](https://www.nfl.com/stats/team-stats/offense/rushing/2022/reg/all)

[https://theathletic.com/4213606/2023/02/22/nfl-rankings-wide-receiver-depth-chart/](https://theathletic.com/4213606/2023/02/22/nfl-rankings-wide-receiver-depth-chart/)

[https://www.nfl.com/news/nfl-reveals-rosters-for-2019-pro-bowl-in-orlando-0ap3000001001792](https://www.nfl.com/news/nfl-reveals-rosters-for-2019-pro-bowl-in-orlando-0ap3000001001792)

[https://www.pff.com/news/pro-2018-nfl-offensive-line-rankings-all-32-teams-units-after-week-17](https://www.pff.com/news/pro-2018-nfl-offensive-line-rankings-all-32-teams-units-after-week-17)

[https://www.pff.com/news/nfl-offensive-line-rankings-following-2019-regular-season](https://www.pff.com/news/nfl-offensive-line-rankings-following-2019-regular-season)

[https://www.pff.com/news/nfl-final-2020-offensive-line-rankings](https://www.pff.com/news/nfl-final-2020-offensive-line-rankings)

[https://www.pff.com/news/nfl-final-2021-offensive-line-rankings](https://www.pff.com/news/nfl-final-2021-offensive-line-rankings)

[https://bleacherreport.com/articles/2923537-nfl-pro-bowl-selections-2021-voting-results-and-full-list-of-players-announced](https://bleacherreport.com/articles/2923537-nfl-pro-bowl-selections-2021-voting-results-and-full-list-of-players-announced)

[https://www.sandiegouniontribune.com/sports/national/story/2022-02-01/2022-pro-bowl-rosters](https://www.sandiegouniontribune.com/sports/national/story/2022-02-01/2022-pro-bowl-rosters)
