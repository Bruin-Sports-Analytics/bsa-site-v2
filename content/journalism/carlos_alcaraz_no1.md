### By: Jerry Shi

With the ascension of Roger Federer to the throne as ATP World No.1 in 2004, only the Big Three—Roger Federer, Novak Djokovic, and Rafael Nadal—and Andy Murrary have been able to reach the No.1 Ranking in the past 18 years. However in 2022, with Federer’s retirement, Nadal’s injuries, and Djokovic’s inability to get vaccinated, there was plenty of room for two new players to join the group of becoming the “best player in the world”: Daniil Medvedev (26yr) and Carlos Alcaraz (19yr). At the time of writing this article, December 2022, Alcaraz is currently still the World No.1, and the only teenager to accomplish this feat. Is he as talented as his age suggests, and how does he compare the other 27 previous World No.1’s?

![Includes the age upon reaching World No.1 for all 28 players](/assets/journalism/carlos_alcaraz_no1/figure-01.png)

## Method

I decided to compare Alcaraz to the previous 27 World No.1’s using data from Jeff Sackmann’s Tennis Abstract, including all ATP data since it became recorded in 1968. Analyzing over 50+ years of data, I filtered out every match of these 28 World No.1’s, separating their match statistics between wins, losses, and their total stats. For each match a total of 10 variables were collected as summarized below.

1. Serve Points Won
2. 1st Serves In
3. 1st Serve Points Won
4. 2nd Serve In
5. 2nd Serve Points Won
6. Aces
7. Double Faults
8. Break Points Faced
9. Break Points Saved
10. Break Points Converted (%)

The goal of analyzing these summary statistics is to get a better idea of how these players are winning matches and are not necessarily indicative of the better player. For instance, hitting the most aces in a match definitely helps your winning odds but without a strong groundstroke game to back it up, aces alone may not win the match. Therefore, it is important to look at the combination of all these statistics to see how well-rounded a player is.

Some limitations we must keep in mind is that due to the start date of recording match data, some World No.1’s before 1968 such as Rod Laver could not be considered. Even after 1989, however, some players had missing data until 1988, so those players were not included in order to preserve integrity of comparing overall careers: these players include John Newcombe, Illie Nastase, Jimmy Connors, Bjorn Borg, John McEnroe, Ivan Lendl, Mats Wilander, Stefan Edberg, Boris Becker, Thomas Muster, Andre Agassi, Pete Sampras, and Jim Courier. So the compilation of “other World No.1 players” consists of the most recent 14 World No.1’s, not including Alcaraz.

![Figure 2](/assets/journalism/carlos_alcaraz_no1/figure-02.png)

![Figure 3](/assets/journalism/carlos_alcaraz_no1/figure-03.png)

Comparing these 10 statistics, it is clear that Alcaraz is an extremely aggressive player, dominating his service games with more first serves in and service points won. Although he is lacking in categories such as 2nd serves won and aces, his high 1st serve in, 1st serve won, and serve points won statistics show that he does not need to ace the player to win points on his serve overall. However, his second serve won is still lower than the combined other No.1’s suggesting that he either needs to take more risk on his second serve or be more comfortable starting off on the backend of a strong return.

While examining the differences between Alcaraz’s statistics when he won and lost, it became clear that his wins relied on more successful breakpoints while his losses had little breakpoints and out of them few successes. Alcaraz's breakpoint conversion percentage during wins averaged at 63% compared to a drastically lower 49% when he lost. Despite winning or losing, the amount of points won on serve remained relatively consistent implying that Alcaraz always felt comfortable holding on to his serve, even with very low ace numbers. However, it comes down to the returns and converting breakpoints as seen below in the difference between his win and losses for breakpoints.

![Figure 4](/assets/journalism/carlos_alcaraz_no1/figure-04.png)

![Figure 5](/assets/journalism/carlos_alcaraz_no1/figure-05.png)

Currently, Alcaraz’s playstyle of attacking after the serve and trying to hold returns is working well enough to reach rank number 1 with a current 74.38% win probability, which is the 17th highest according to the ATP Stats powered by Infosys. Based on the differences between his winning and losing matches, Alcaraz must improve his breakpoint faced statistics to put pressure on the opposing server and have the ability to increase his breakpoint conversion as his service statistics usually remain solid.

## CONCLUSION

Alcaraz’s ability to reach the World No. 1 ranking is certainly impressive as he is matching and besting the playing statistics of many of the established greatest players of tennis. However, it is clear that he has an opportunity to improve with his return games that will solidify his winning percentage, or this could be the difference that drops him down in the future. I, like the tennis community as a whole, am excited to see how he can maintain or even improve upon his current level and potentially challenge the greatness of the Big Three. With a long career ahead and his talent at disposal, it is definitely not out of the question.

## FUTURE WORK

I want to continue studying this topic in more detail, purposefully comparing Alcaraz’s statistics to the Big Three—Roger Federer, Novak Djokovic, and Rafael Nadal—especially at Alcaraz’s age. Moreover, I want to refine the details of the statistics through methods such as K-means clustering in order to group players by playstyle and determine what playstyles are favorable matchups. This could be even further dissected by separating statistics between surfaces in which match conditions change enormously. Lastly, I would like to create a parallel study for Iga Swiantek, who is the current world No. 1 while being one of the youngest and most dominant players on the professional tour.

### Sources:

[*github.com/JeffSackmann*](http://github.com/JeffSackmann)

[*ultimatetennisstatistics.com*](http://ultimatetennisstatistics.com)

[*atptour.com/en/stats*](http://atptour.com/en/stats)

[*tennisabstract.com*](http://tennisabstract.com)
