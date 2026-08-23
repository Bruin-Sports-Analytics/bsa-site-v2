### By: Daniel Wang and Robin Lee

Throughout the 2010s, skateboarding as a sport swelled exponentially, not only in its popularity and viewership, but also cultural impact—subtly influencing various aspects of day-to-day life around the world. Through iconic brands like Supreme and Stussy, skateboarding’s ostentatious style and propensity for controversy kickstarted the so-called “streetwear” fashion trend in the 2010s, and inspired acclaimed musical artists such as Tyler the Creator.

With such an explosive growth in popularity, it came to no one’s surprise that skateboarding eventually wormed its way into mainstream media, making an Olympic debut in Tokyo’s 2020 Summer competitions. However, as a newly-established “sport” in the Olympics, we quickly noticed that the specifics of skateboarding still remained largely unknown to the general public.

While it’s well established that an athlete’s size, age, or handiness has a tremendous impact in sports like basketball, football, or soccer, the importance of these physical factors in professional skateboarding is unclear. In these other sports, it’s common to hear the phrase “built in a lab” to describe physical freaks such as LeBron James, Calvin Johnson, or Cristiano Ronaldo, but what constitutes a “physical freak” in skateboarding? Welcome to the skateboarding lab, where we aim to analyze each athlete's attributes in order to build the physically perfect men’s professional skateboarder, and—for the first time on Bruin Sports Analytics—examine the competition from a statistical perspective.

First and foremost, the Olympic skateboarding competition is divided into two categories: street and park. Each event not only features different obstacles and athletes, but also a unique scoring system.We will focus specifically on the men’s Semi-Finals and Final format.

For the street contest—which consists of stairs, rails, and other obstacles, 20 skaters are allowed exactly two 45-second opportunities to complete five tricks in front of five judges. These judges give both “runs” and each of the 5 “tricks” a score between 0.0 and 10.0 based on “speed, difficulty, originality, timing and execution.” After removing their highest and lowest scores for the run or trick, the judges use the three remaining scores to produce a collective average for each run and trick, resulting in a total of 7 scores. Finally, the highest four are utilized to determine the final score.

![The park course for Tokyo 2020 ©California Skateparks](/assets/journalism/perfect_skateboarder/figure-01.png)

For the park contest—which consists of swimming pool-esque bowls and large ramps, 20 skaters are given three 45-second runs, where they are scored from 0 to 100 based on their tricks’ height, difficulty, and other specifications. Like in the street competition, the highest and lowest scores for each run are removed, and the final score consists of the highest cumulative average of the three runs.

​​

![The park course for Tokyo 2020 ©California Skateparks](/assets/journalism/perfect_skateboarder/figure-02.png)

Because these two competitions are scored differently, we will transform the aggregate data by dividing the street competition scores by 40 (the highest possible score for street athletes) and the park scores by 100 (the highest possible score for park athletes). As such, we are able to juxtapose the two competitions on the same scale: [0,1]. We will be examining the men’s competitors in both of these contests at Tokyo 2020 and have aggregated their measurements in the following categories:

- Age (at time of competition)
- Height
- Weight
- Stance

![A snippet of our dataset](/assets/journalism/perfect_skateboarder/figure-03.png)

### Age:

![Figure 4](/assets/journalism/perfect_skateboarder/figure-04.png)

Much like in other action sports, such as basketball and football, skateboarding requires a healthy balance of both youth and experience. The two 40+ year old athletes both performed poorly at Tokyo 2020 (Rune Gilfberg doesn’t seem to be skateboarding’s Danish Tom Brady), but removing them from consideration leaves no significant correlation between the age of athlete and their performance.

When we consider athletes’ ages in ranges, there is still no clear “perfect” age; those older than 30 are certainly fewer in number, but it’s difficult to claim whether their performance has suffered as a result. However, from both plots above, there is certainly a slight decrease in the scores as the age increases from the 20-29 range to 30+. Perhaps skaters younger than 30 are more likely to reach the Olympic stage, but we cannot pinpoint an exact age that represents the pinnacle of skateboarding expertise. Ultimately, the optimal age appears to be any age below 29.

### Height:

![Figure 5](/assets/journalism/perfect_skateboarder/figure-05.png)

Does height matter? While seven foot giants dominate the game of basketball, it may be intuitive to think that short kings rule the sport skateboarding; a shorter person has a lower center of gravity, allowing for better balance and control during tricks.

Although the negative correlation between the olympic skateboarders’ heights and scores is weak, only 3 competitors measured in at 6 ft or taller. Once again, while we can’t determine an ideal height, those shorter than 5’10” are the majority in olympic level skateboarding.

### Weight:

![Figure 6](/assets/journalism/perfect_skateboarder/figure-06.png)

How about weight? Combat sports are divided into weight classes to compensate for its importance and you don’t see many 150 lb linemen in the NFL. Well, it appears that being lean is better in the world of skateboarding. No Olympian skateboarder weighed over 185 lbs, and the lower weight athletes did seem to perform better.

Because our data closely follows the line in our QQ plot, we can assume that it is normally distributed, indicating a relatively strong relationship between a skater’s weight and their score; this supports a negative correlation between weight and performance in skateboarding. As such, while there is no specific weight that is ideal, we can assume that any weight between 120 and 150 can correlate to a strong performance, the lower end of that range may just be ideal.

### Stance:

![Figure 7](/assets/journalism/perfect_skateboarder/figure-07.png)

Skaters are either “Goofy” or “Regular” stanced, which merely determines whether they prefer to skate with their right foot (the former) or their left foot (the latter) in front. There has always been a heated debate on which is superior and, judging from the boxplots above, goofy just might reign supreme.

There was a relatively even split in the number of regular vs goofy riders at Tokyo 2020, and we noticed that the median goofy skater outperformed its regular counterpart in general. On one hand, we can see from our aggregated data that a goofy skater actually scored the highest, since the upper limit of the left-hand plot is higher than the right-hand side. On the other hand, the lowest score belongs to a regular skater.

To put it simply, goofy-footed riders dominated the street competition; the highest score belongs to a goofy skater (Gold Medalist Yuto Horigome) and by looking at the quantiles, the middle 50% of goofy skaters definitely edge out the bottom 75% of regular skaters. Ironically, the park competition, on the other hand,was dominated by regular riders. In fact, more than half of the regular-footed athletes scored higher than the middle 50% of their goofy opponents—judging from the far higher upper quantile—and the majority of goofy-footed athletes pale in comparison to the regular-footed skateboarders.

Did we just put an end to this age-old debate? Probably not, but a goofy-footed skater may just have a slight edge in the street comparison, while a regular-footed skater appears to be better suited for the park competition.

After all of this analysis, we return to the lab, having determined the optimal build for the next skateboarding great and the sport’s quintessential “physical freak”. By investigating the characteristics of each country’s representative at the Olympics—the best-of-the-best in their craft—we conclude that this athlete will be younger than 30, shorter than 5’10”, weigh 120-130 lbs, and skate with his right foot forward. Like the 3-point contest, skateboarding consists of many “off-days” and even the so-called “goats” will falter under the spotlight. However, considering everything goes according to plan, our ideal skater is set to dominate the world at the Paris 2024 Olympics.

## Sources

1. [*https://www.abc.net.au/news/2021-07-25/tokyo-olympics-skateboarding-what-is-it-how-scored-park-street/100316766*](https://www.abc.net.au/news/2021-07-25/tokyo-olympics-skateboarding-what-is-it-how-scored-park-street/100316766)
2. [*https://olympics.com/en/news/tokyo-bound-inaugural-class-of-olympic-skateboarders-announced*](https://olympics.com/en/news/tokyo-bound-inaugural-class-of-olympic-skateboarders-announced)
3. [*https://www.insidethegames.biz/articles/1106159/tokyo-2020-skateboarding-course*](https://www.insidethegames.biz/articles/1106159/tokyo-2020-skateboarding-course)
4. [*https://doseskateboarding.com/articles/rune-gilfberg-makes-his-olympic-debut*](https://doseskateboarding.com/articles/rune-gilfberg-makes-his-olympic-debut)
5. [*https://www.npr.org/sections/tokyo-olympics-live-updates/2021/07/25/1020382670/japans-own-wins-first-skateboarding-medal-at-tokyo-olympics*](https://www.npr.org/sections/tokyo-olympics-live-updates/2021/07/25/1020382670/japans-own-wins-first-skateboarding-medal-at-tokyo-olympics)
