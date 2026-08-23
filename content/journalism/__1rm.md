### By: Ryan Quach

Given that the standard of living has generally improved worldwide over the past few decades, it would stand to reason that performances in the more physical sports would also improve as well. And in these sports, athletes also use knowledge and experience from previous generations to further themselves and their health, providing a further reason for such improvements. The sport of powerlifting is a perfect example of the category of a physically-demanding sport, but without concrete evidence, it is cannot be known for sure that it has experienced improvement in athletes’ performance numbers. As such, the purpose of this article is to determine whether or not this hypothesis is true based on observational data regarding powerlifting competitions.

Before this article looks into the data, it must first discuss the general rules of the sport of powerlifting. To start, athletes must first perform three attempts at a squat. If they complete at least one squat successfully, then they are allowed to go for three attempts at a bench press. And if they are able to complete at least one attempt of a bench press, then they are allowed to go for three attempts at a deadlift, which is the last of the three main lifts tested. At the end of the events, the athletes are separated by weight class and compared based on their lift numbers. For each lift, the best of the three attempts is the one that ultimately counts for the competition. Based on this framework, those who lift the most within their weight class win the competition and are recognized accordingly. It should be noted that athletes are not allowed to decrease the amount of weight on following lifts.

For the sake of conciseness and simplicity, this article will only look at data associated with the barbell squat. Therefore, it goes without saying that it would be necessary to explain the specific rules and nuances associated with this exercise in the context of powerlifting.

To start, an athlete would begin the lift by placing the bar on their back and then unracking the weight. In general, a back squat can be performed as a high-bar squat or as a low-bar squat. The former entails placing the bar more on one’s upper traps (an important back muscle), while the latter entails placing the bar more on one’s rear deltoids (shoulder muscles). Given that a low-bar squat generally allows one to lift more weight, most powerlifters opt to perform the squat in this manner.

Once the barbell is unracked and the athlete steps away from the weight rack, they wait until the referee says the command “squat.” Right after this command is made, the athlete will squat down until they have reached below parallel, which means that their hip crease is below the top of their knee joint. Such a benchmark allows judges to efficiently evaluate the depth of the squat while also being low enough to test the lower-body strength of the athlete. After lowering far enough, the athlete will then try to squat the barbell up and then wait for the command ‘rack,’ which enables them to finally re-rack the barbell. A failed lift would either mean that the athlete could not lift the weight back up and required the assistance of spotters, that the athlete lifted at least one of their feet during the lift, or that they did not properly follow the given commands.

Given that we have explained the essential powerlifting rules and mechanics of the barbell squat, it is now appropriate to begin looking at whether or not powerlifters have become stronger in terms of this exercise over the course of the sport’s history.

As mentioned before, powerlifters have three attempts for each lift. In terms of actually measuring the squat for each powerlifter in the dataset, this article will take the best squat of three attempts as this figure. Such a choice makes sense because this statistic represents the peak strength that the lifter demonstrated with their squat. Using PostgreSQL with the help of the DBeaver platform, this article was able to calculate the average 1RM squat by year from 1964 to 2019. Note that 1RM means the maximum amount of weight that can be lifted in one rep by an individual.

![Figure 1](/assets/journalism/__1rm/figure-01.png)

Shockingly, the results were the complete opposite of our initial hypothesis—the average 1RM squat stagnated from 1964 to 2010, and it actually declined sharply ever since 2010. So essentially, if one were to take this data at face value, one would seemingly have to conclude that powerlifters have become weaker. However, there are several potential confounding variables that may help explain this decline in the average 1RM squat for powerlifting competitions.

One potential confounding variable that could have affected the max squat statistics is age. To explain, it is very well possible that as the years went by, powerlifters became older as well, which may have hidden the true increase in performance given that younger powerlifters are generally stronger than older ones. Therefore, if this hypothesis were true, this article expects the data to show a significant increase in the age of the average powerlifter that participates.

Based on the data, from 1964 to 2005, the average powerlifter became older in terms of both mean and median age. But from 2005 to the end of the recorded time period, the average powerlifter actually became younger, which is the opposite of what one may have expected given the sudden drop around the year 2010. However, an interesting observation that could be made from the later years is that the mean

![Figure 2](/assets/journalism/__1rm/figure-02.png)

age has become noticeably larger than the median age, meaning that a few older powerlifters have joined in recent times to skew the

overall age distribution. And since older individuals tend to be weaker than younger ones, it acts as an additional reason for why there may have been a decrease in the max squat.

Another potential confounding variable that could have affected the max squat data is bodyweight. Indeed, it is possible that the average powerlifter has become more lean over time. However, one must check with the data to ensure that this conclusion is valid. The bodyweight statistic shows that from 1964 to 1977, the average bodyweight was quite volatile and inconsistent. After 1977, it would stabilize at 82-83 kg until about 2004, when

![Figure 3](/assets/journalism/__1rm/figure-03.png)

it would jump to its peak in 2009 before declining sharply towards the end of the dataset. While the overall pattern is not that consistent with the max squat data, the decline in weight near the end of the time period matches the sharp decline in the max squat during the same time frame. As such, there is some evidence that bodyweight is indeed a confounding variable.

In addition, there is the potential confounding variable of gender. In recent times, it is possible that more women have entered powerlifting compared to previous years. But because women have less muscle mass and a lower bone density on average than men do, the average max squat may actually decline

![Figure 4](/assets/journalism/__1rm/figure-04.png)

as a result of greater female participation. The data confirms that in recent years, there have been more women participating in powerlifting meets, as shown by the noticeable increase in the proportion of women. Therefore, there is strong evidence that gender acts as a confounding variable for the recent decline of the average max squat.

Finally, there is the possibility that in recent years, there was a sudden surge in the amount of powerlifters in the dataset per year. Such an increase would certainly impact the overall statistic for the average max squat, so looking at this variable would be quite useful. The data clearly shows that the number of powerlifters has increased dramatically in recent years, with 2009 being an especially significant year in this regard, which corresponds with the observed decline in the average max squat.

![Figure 5](/assets/journalism/__1rm/figure-05.png)

![Figure 6](/assets/journalism/__1rm/figure-06.png)

Of course, there is still some uncertainty in this matter. After all, it is unclear whether or not this increase is due to improved data collection or due to the fact that more people have entered powerlifting. But either way, it is consistent with the aforementioned decline. If it were the first reason, then it is possible that only the best powerlifting meets were recorded down in the dataset. And if it were the latter reason, then those individuals would have been newer and less experienced, which also explains the lower average max squat.

It should be noted that in terms of percent change, the earlier years are actually the ones which experience the most largest increases. However, such a disparity is mainly because the initial sample sizes were quite small, so

![Figure 7](/assets/journalism/__1rm/figure-07.png)

later time periods were more worthwhile because there had been more time to collect more data from powerlifting competitions. Additionally, it can be seen that the year of 2009 looks large even in comparison to the other years, providing further evidence that the surge was indeed significant.

Now that this article has addressed the variety of confounding variables that had a possible effect on the max squat statistic, it is now appropriate to see whether the apparent stagnation in squat performances remains the same after adjusting for these variables. In order to achieve this goal, the same SQL query is used once again, but instead, age and bodyweight are both set to a specific range. Furthermore, the query groups by gender in addition to year so that the resulting plot can provide a more comprehensive picture of the change in the max squat. Unfortunately, there is really no way to adjust for the surge in new powerlifters without adding penalties to the more recent years, so one would simply have to keep this confounding variable in mind for interpretation.

![Figure 8](/assets/journalism/__1rm/figure-08.png)

Despite the article accounting for the most of the confounding variables, the results are ultimately the same—the max squat has seemingly declined for both men and women over time. As mentioned before, the main reasons are almost certainly that newer powerlifting competitions are far more accessible than in the past, meaning that there are far more individuals who are entering powerlifting, and also that the most prominent powerlifting competitions are no longer the only ones being measured, which acts as a downward bias on the max squat statistic. But moreover, it is important to note that even for the earlier years, there was stagnation, meaning that the confounding variables did not turn out to be that impactful.

However, there is still one way to solve this issue—by measuring the highest max squat (or the maximum max squat…) per year. Logically, there would not really be any bias that disproportionately affects certain years over the other years, and it would account for the fact that there are far more powerlifters being measured in the more recent data points.

![Figure 9](/assets/journalism/__1rm/figure-09.png)

While there is a slight drop in 2019, the results clearly demonstrate that top-tier powerlifters have improved their one-rep max squat over time, as shown by the fact that the highest max squat has increased over the course of the sport’s history. So even though it may be true that the average powerlifter has technically not become stronger ever since the beginning of the dataset, there is unquestionable evidence here that those at the top have become stronger over time. Such a finding provides a more nuanced picture of powerlifting, and it serves as a useful reminder that the mean is not always the best summary statistic for a given figure.

To conclude, this article discussed the question of whether or not powerlifters have become stronger over time in terms of their best 1RM squat. While they have not improved their strength numerically in terms of the mean 1RM squat over the years, there is still evidence that they have become stronger as shown by the increases over time that were observed in the highest 1RM squat. In terms of avenues for future discussion and research, it would be interesting to look into the causal reasons behind the behavior in the aforementioned statistics, and it would be useful to extend this methodology towards both the bench press and the deadlift, which form the three main lifts of powerlifting along with the squat.

Sources:

​​[https://www.tucsonstrength.com/powerlifting-meet-rules/](https://www.tucsonstrength.com/powerlifting-meet-rules/)

[https://www.kaggle.com/datasets/open-powerlifting/powerlifting-database](https://www.kaggle.com/datasets/open-powerlifting/powerlifting-database)
