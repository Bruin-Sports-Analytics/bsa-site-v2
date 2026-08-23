### Takao Oba and Daniel Neufeldt

## Introduction

The FIFA World Cup is where dreams are made. The golden trophy from this most prestigious tournament in the world is what every soccer player looks up to and dedicates their lives for. Numerous players across the globe gather to compete in this tournament to represent their nation. Similar to the Olympic games, the FIFA World Cup is only held once every four years which is one of the reasons why the games gain attention and intensity. In November of 2022, the FIFA World Cup Qatar 2022 will kick off and which is expected to attract millions of football fans across the world. In this article, we will aim to see if any external factor influences the result of the important matches.

## Methodology

As per other sports, soccer and the FIFA World Cup consists of countries that have shown dominance and superiority over other countries. Whether this is in the form of better coaching systems or more athletic individuals, certain countries tend to perform better than others.

![Figure 1](/assets/journalism/win_world_cup/figure-01.png)

In the bar graph above, we can see the amount of times certain countries appeared on the podium. The gold bar represents the amount of times the corresponding country received a gold medal. Similarly, the silver bar represents a silver medal, the red/bronze bar represents a bronze medal, and the black bar represents being fourth place. Notice how Brazil, Italy, and Germany dominate in podium appearances.

![Figure 2](/assets/journalism/win_world_cup/figure-02.png)

Further, we sharpen the scope to examine the amount of gold medals each notable country received. Again, we can clearly see that the same countries dominate the ranking lead by Brazil. Soccer is especially popular in Brazil and many notable legends have been born in Brazil such as the king of soccer, Pele. However, since this is examining the frequencies of the podium appearances, these dominating countries may simply have participated in many tournaments.

![Figure 3](/assets/journalism/win_world_cup/figure-03.png)

In the above graph, we see the amount of time each country appears in the FIFA tournament. The ranking is fairly correlated with the podium appearances graph. This can possibly be due to the fact that participating in the FIFA tournament itself is competitive. Being able to win constantly in smaller division leagues and being granted the opportunity to compete in these challenging tournaments emphasizes these countries' strength.

As these countries typically tend to have a higher soccer population and a more dynamic fanbase, we want to see if the presence of these teams shows an increase in fan attraction.

![Figure 4](/assets/journalism/win_world_cup/figure-04.png)

In the graph above, we can see that the most powerful countries do not necessarily have the highest fan attendance count. For example, Ukraine, Canada, and Ecuador are the top three countries that on average attracted the most amount of fans. However, none of these countries are present on the podium presence frequency and the FIFA tournament frequency graph. Although powerful countries such as Brazil and Germany are still on the above graph, they do not particularly have the highest fan attendance count. This may be because countries such as Ukraine may have participated in the tournament for the first time which could have potentially drawn strong and passionate fans to watch their games in person.

When looking at the results of the World Cup, we can also look into how a team’s overall performance in previous years as well as during the year that they are playing can impact how many finals appearances they achieve. The question that we will be exploring is if the reputation of a team being good will impact how well a team plays in the future years. This is worth exploring because we can determine if the legacy that past players present could possibly inspire newer countrymen into performing better in the World Cup, or if dominating teams come and go as time progresses. In the first part of this analysis, let us see which teams have progressed to the finals in recent years (since 1978 to 2014)

![Figure 5](/assets/journalism/win_world_cup/figure-05.png)

We can see that the same 8 teams have been to the finals from the year 1978 to 2014. We can conclude that due to the fact that soccer is much more popular in these European and South American countries along with the fact that these areas historically have had more dominant players, these countries should have more finals appearances than countries that were not so dominant in soccer or where soccer is just not as popular (such as the United States or Asia). For further examination, we can look into the overall point difference for each of these countries to see if that is a good indication for whether or not a country is more likely to go to the finals.

Note: Overall point difference is the amount of points each team has scored minus the amount of points any opposing team has scored on that team during the World Cup from 1978 to 2014 excluding the preliminary stages.

![Figure 6](/assets/journalism/win_world_cup/figure-06.png)

In the graph above, we see that in recent years, Germany actually has the highest point differential, with Brazil and Argentina following respectively. For the teams with the lowest point differentials, we can see that Spain has the lowest point difference followed by France and then Italy. We can see some slight correlation, but also some outliers. For instance, Argentina, Brazil, and Germany are all on the upper echelon for finals appearances and the point differentials for all games played are also the highest; however, there are some contradictions like Italy having a very low point differential in comparison to the amount of finals appearances Italy has. Let’s look at the numerical data in order to look deeper into this topic.

![Figure 7](/assets/journalism/win_world_cup/figure-07.png)

In the table above, we see that Germany will have the highest point differential by a landslide, followed by Brazil, and then Argentina. There seems to be a decent amount of correlation between point differential and finals appearances at first due to Germany having a point differential of 88 and six finals appearances; however, we need to explore the lower echelon of finals appearance countries. We see that Spain has the lowest point differential and the lowest finals appearances. We can also see that France has a similar conclusion; however, Italy has almost half the point difference that Brazil has with the same amount of finals appearances. We can deduce this as an outlier. Based on our graphs and tables, we can see that there is some slight correlation between the overall point differential and the amount of times a team has gone to the finals of the World Cup, but there are some exceptions that cannot be ignored, so the correlation is not incredibly strong.

To explore the correlation between these two factors, we conducted a chi-square test for independence on this table and found a p-value of around 0.61. This is an incredibly high p-value, meaning that the finals appearances and overall point differentials for a team are independent of each other. This means that how well a team’s score differential in the year of the World Cup, as well as in previous years, does not mean that they have a higher chance of being in the finals. This makes sense as players come and go frequently in the World Cup due to the four year breaks in between and therefore the teams are always changing.

## Conclusion

In conclusion, we examined the correlations between attendance in Fifa games and dominance in the league, as well as the amount of times a team has gone to the finals and the point differences that that team achieved. We can see from our results that the amount of people attending these games does not necessarily correlate with how well the team does due to the highest average attendance for these games being Ukraine, Canada, and Ecuador even though these countries are not particularly dominant in the World Cup. When examining the point differentials and finals appearances for teams, we can see that there is not a correlation between these two factors. We can grasp for some trends through Germany or Argentina, but there are also other statistics like Italy’s performances that contradict this correlation. In such a monumental tournament like the Fifa World Cup, there are many factors that go into how well a team performs. It is important to explore these aspects and determine what truly goes into determining which team will be the next Fifa World Cup champion.

### Sources:

Data Set: [*https://www.kaggle.com/datasets/abecklas/fifa-world-cup?select=WorldCups.csv*](https://www.kaggle.com/datasets/abecklas/fifa-world-cup?select=WorldCups.csv)

FIFA FAQ: [*https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022*](https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022)
