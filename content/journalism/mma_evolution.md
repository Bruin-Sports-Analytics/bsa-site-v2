### By: Jake Brophy and Manav Chadha

Mixed Martial Arts, better known by the abbreviation MMA, is an extreme combat sport which incorporates the fighting techniques utilised in boxing, wrestling, kickboxing, jiu jitsu, judo, and karate. While many companies host and broadcast fights, the most popular is the Ultimate Fighting Championship (UFC). Originating in 1993 as a professional mixed martial arts organization, Ultimate Fighting Championship has revolutionized the fighting industry. It is now a premium global sports media company and the largest Pay-Per-View event provider in the world. The Ultimate Fighting Championship originated in the United States after Vale Tudo (a Brazilian form of mixed martial arts) sparked interest in the sport.

This article will explore how the sport changed from UFC’s inception in 1993, both the business side and the fights themselves. Before diving into the data, it is important to understand a few technical terms. We have taken the win variable to indicate the number of wins by the fighter in the red corner. In MMA, for ease of identification, fighters are assigned to either the red corner, or the blue corner. “Average Takedown Pct” refers to the average number of successful takedowns in a fight. The “Submissions Attempted” variable is a count of the number of times the fighter in the red corner attempted to submit their opponent through moves like a guillotine, arm bar, etc. The “Ground Strikes” variable defines the number of successful strikes carried out by the fighter in the red corner while their opponent was on the ground. Apart from KOs and Submissions, a ground strike is a common goal for MMA fighters. The variable “Average Significant Strike Pct” shows the mean number of significant strikes successfully performed by the fighter in the red corner. Significant strikes are defined as all landed strikes at a distance and power the judges deem significant. The variable “Title Bout” is an indication of whether the fight was for a title or not.

## The Sport

Starting as a relatively small, niche company, UFC has now grown to be a multibillion dollar organization, hosting over 40 events each year. UFC programming is broadcasted in over 165 countries and territories with over 1.1 billion TV households watching worldwide in over 40 different languages. One of the most significant changes to UFC in the past five years is the geographic expansion of where fights are taking place. The graph below shows the percentage growth in the number of fights hosted from the 2010-2015 timeframe to the 2016-2021 timeframe based on geographic location. For reference, countries in orange increased from 0 fights in the previous time period so the percent increase was set to 1 to better visualize this.

![Figure 1](/assets/journalism/mma_evolution/figure-01.png)

In absolute terms, the US has hosted the greatest number of fights, but this graphic shows that a substantial amount of UFC’s growth has taken place internationally, with several countries like China, Argentina, and Japan hosting events for the first time in UFC history during 2016-2021. The graph also shows a respectable increase in the number of fights taking place in countries that have a history of hosting UFC events, with Brazil and the UK hosting 124 and 65 fights respectively. Compared to 2010-2015, this is a roughly 11.2% increase in Brazil and a 67% increase in the UK.

This expansion of international fights also reflects an overall increase in the number of fights every year, which as the graph below shows, has steadily grown almost every year, except 2020 during the pandemic.

![Figure 2](/assets/journalism/mma_evolution/figure-02.png)

But this increase isn’t enough to signify growth in the popularity of the sport, which is why we also investigated the number of pay per view purchases for UFC events from 2001-2017.

![Figure 3](/assets/journalism/mma_evolution/figure-03.png)

From this graph we can see that although the number of purchases has not shown the same steady increase as the number of fights, it’s clear that there is still a definite upward trend, especially in comparison to the early days of 2001-2006. It’s possible that this fluctuation in pay per view purchases is due to the ‘big name fights’ such as those involving fighters like Connor McGreggor, Kamaru Usman, Jorge Masvidal, Khabib Nurmagomedov, and Dustin Poirier.

As far as changes in the actual fights, there has been a gradual decline in the percentage of fights won by submission and knock out/technical knockout. The stacked bar graph below shows how the relative percentage of fights have been won in the three different time periods. For reference, a decision majority win is when two of the three judges rule the same way for a winner while the third rules it a tie. A decision split is when two judges rule in the same way and the third rules in the opposite direction. A unanimous decision is when all three judges decide the same winner.

![Figure 4](/assets/journalism/mma_evolution/figure-04.png)

From the graph, we can see that in every time period, the percentage of fights won by knockout has shrunk while unanimous decisions and decision splits have grown. There are many reasons for this, but the most obvious is that fighters are getting better [(1)](https://www.google.com/url?q=https://www.thestatszone.com/mma/are-more-ufc-fights-going-to-a-decision-899075&sa=D&source=editors&ust=1639439164993000&usg=AOvVaw0cpobKF817jO2wxPlOxo9J). Early on, MMA wasn’t an established fighting style, which meant fighters would come from backgrounds like wrestling or kickboxing and supplement their game with just enough knowledge of other styles to get by. Today, due to the increasing popularity of the sport, that has changed dramatically, and improved training methods and coaching techniques mean that fighters are becoming more well rounded and better able to defend themselves. This increase in the importance of defense is also reflected in the decrease in the percentage of fights won by doctor stoppage after 2005-2010.

While the way fights have been won has noticeably changed over the past 20 years, the fighters themselves have surprisingly not. The graphs below show the average weight difference among fighters from 2010-2015 and 2016-2021, which show that most fights occur between fighters with no weight difference between them. This part isn’t surprising: the UFC instituted weight classes in 1994, which limits how heavy a fighter can be and still compete in a weight class. The creation of weight classes also generated an incentive for fighters to cut as much weight as possible to be in the lowest physically feasible weight class to maximize their height and size advantage. We see this incentive play out in the average height difference among fighters, which has remained constant at around 4.8 inches, a substantial height difference for two people at the same weight. The reason this difference has stayed relatively constant is likely because of the physical drawbacks imposed on a tall person trying to lose a lot of weight while maintaining strength, endurance, and overall health.

![Figure 5](/assets/journalism/mma_evolution/figure-05.png)

![Figure 6](/assets/journalism/mma_evolution/figure-06.png)

Given that fighters clearly try to maximize the height difference between them and their opponent, it begs the question of whether this actually makes a fighter more likely to win. The figure below shows a correlation plot between whether a fighter won or not, the height difference, reach difference, and weight difference between them and their opponent. While there is a positive correlation between weight difference, reach difference, and winning, it is relatively weak, and surprisingly there is a negative correlation between winning and height difference. While this doesn’t imply a causal relationship between winning and any of these factors, it does raise questions about whether the extreme weight cutting techniques performed by fighters are really worth it considering the relatively low correlation between size differences and a fighter’s likelihood of winning a bout.

MMA has changed substantially over the past 20 years. Starting as a relatively small, niche sport, it has since grown into a worldwide phenomenon with events in multiple countries and millions of fans. We showed that year after year the number of fights has increased, and pay per view purchases have reflected this increase with somewhat erratic but steady growth.

The sport itself has changed too, evolving from an amalgamation of different styles into a cohesive martial art. The way fights have been won show this, with more fights being decided by judges rather than by knockout. We demonstrated that the practice of drastically cutting weight to maximize size difference is a questionable decision that may not have as large of a benefit as is commonly held.

All in all, it was interesting to investigate a sport that has managed to grow so quickly over the years, and moving forward, it would be interesting to see more analysis done on what it is about a fighter that allows them to come out on top.

### Sources:

[https://www.thestatszone.com/mma/are-more-ufc-fights-going-to-a-decision-899075](https://www.google.com/url?q=https://www.thestatszone.com/mma/are-more-ufc-fights-going-to-a-decision-899075&sa=D&source=editors&ust=1639439164995000&usg=AOvVaw2KvW0G9lz-bOr_NBSLUqDx)

[https://www.ufc.com/history-ufc](https://www.google.com/url?q=https://www.ufc.com/history-ufc&sa=D&source=editors&ust=1639439164995000&usg=AOvVaw3e6Kq7d1VSb1s4otY2W1lE)

[https://sportskeeda.com/mma/news-how-much-ufc-worth-dana-white-reveals-estimated-value#:~:text=Dana%20White%20reveals%20its%20estimated%20value&text=The%20UFC%20had%20a%20monster,worth%209-10%20billion%20dollars.&text=%22It's%20the%20best%20year%20we%20have%20ever%20had](https://www.google.com/url?q=https://sportskeeda.com/mma/news-how-much-ufc-worth-dana-white-reveals-estimated-value%23:~:text%3DDana%2520White%2520reveals%2520its%2520estimated%2520value%26text%3DThe%2520UFC%2520had%2520a%2520monster,worth%25209-10%2520billion%2520dollars.%26text%3D%2522It%27s%2520the%2520best%2520year%2520we%2520have%2520ever%2520had&sa=D&source=editors&ust=1639439164995000&usg=AOvVaw242mP07Ez3NRtc2-pz2qCo)

Data: [https://www.kaggle.com/rajeevw/ufcdata](https://www.google.com/url?q=https://www.kaggle.com/rajeevw/ufcdata&sa=D&source=editors&ust=1639439164996000&usg=AOvVaw2r16s4wPJ5pXoxfnXmzJV_)
