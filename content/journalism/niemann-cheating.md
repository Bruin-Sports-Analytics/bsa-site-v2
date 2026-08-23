## The Drama

On September 4, 2022, Hans Niemann shocked the chess world by defeating the world chess champion Magnus Carlsen in the 3rd round of the Sinquefield Cup. Coming off of a 53-game unbeaten streak of in-person (called “over-the-board” by chess players) matches, nobody expected Carlsen to lose to Niemann — the lowest-ranked player in the tournament.

Soon afterward, Carlsen unexpectedly announced his withdrawal from the tournament, which many people interpreted as him accusing Niemann of cheating. Carlsen later confirmed this when, a week later, he resigned against Niemann in the Champions Chess Tour after only one move and attached the following letter to a tweet:

![Source: Magnus Carlsen on Twitter](/assets/journalism/niemann-cheating/figure-01.png)

Not surprisingly, this started a firestorm. A major chess player had publicly accused a rival of cheating and had dropped out of a major tournament. This, while entertaining, rarely happens in chess. In an interview, Niemann admitted to having cheated in the past but said it was only a handful of times, and it was years ago. This quickly became contentious, however, after a study by Chess.com (the largest online chess service in the world) found that Niemann had likely cheated over 100 times in online matches, including in games with prize money. But there was no clear evidence of cheating during over-the-board matches, as opposed to online ones.

Chess fans theorized wildly about how Niemann could have cheated in over-the-board matches — which wouldn’t be easy. Here are just some of the ideas they came up with:

- Perhaps he received messages in Morse code
- Maybe it was the old-school trick of a ‘washroom break’ (Years ago, a top chess player allegedly checked a phone hidden in the toilet flush)
- Most entertainingly, there was the idea that he received messages via a vibrating butt plug

Modern chess is highly data-driven and analytical, so the discussion quickly turned from wild theorizing to a detailed analysis of the tournament. Some of the best statisticians analyzed the Niemann v Carlsen match, as well as past Niemann games, to see if he was playing at a level of accuracy impossible for an unaided human. But again, nothing definitive could be shown. It was all unusual, but was it unusual enough to imply cheating? It’s just not clear.

## The Analysis

Carlsen claimed in his tweet that Niemann’s “over-the-board progress has been unusual.” To test if that’s true, we can use FIDE rating, a measure of the strength of a player relative to their performances in over-the-board matches against other top players. We can use that to compare Niemann’s rating progression to other top young chess players.

![Figure 2](/assets/journalism/niemann-cheating/figure-02.png)

Niemann, shown in purple, does have an impressive rise, but does it indicate cheating? Probably not. The rating fluctuations when Niemann was young are normal for a junior player and not necessarily evidence of cheating. Arjun Erigaisi, another promising young grandmaster, had a similar rise, so unless he is also cheating, Niemann’s rating rise is plausible—impressive, but not impossible.

Our analysis need not stop here, however. We can treat the chess tournament almost like the current World Cup and simulate it based on rankings. Instead of, say, USA vs. England, we have Neimann vs. Carlsen. What is the distribution of outcomes if we play that game over and over—thousands of times—knowing their respective rankings?

This kind of analysis is usually called a Monte Carlo simulation. Using this method, we can, in essence, come up with a distribution of outcomes by simulating the tournament’s games over and over and over again. Beginning by using ELO, a similar measure of a player’s relative strength to FIDE rating, we can simulate the entire Sinquefield Cup. Jeff Sonas of ChessBase created an ELO rating system that calculates the correlation between ELO difference and expected win percentage. By applying this system and calculating individual players’ win, loss, and draw probabilities against different players’ ELOs, we can create a simulation of the entire tournament. Then after running the simulation 1000 times, we can create a graph of the players' different rankings. Niemann, the player with the lowest ELO going into the tournament, has a graph like this:

![Figure 3](/assets/journalism/niemann-cheating/figure-03.png)

Note that because a win is 1 point and a draw is 0.5 points in chess, the point differences between players will often be minimal at the end of the tournament leading to many players with the same number of points. Thus, it is unlikely for Niemann to place 10th because there are only 10 players participating in the tournament, and players often tie in points. This also applies to 1st position because players sometimes tie for 1st and then play a deciding final match. However, for the purpose of this simulation, the results are solely based on their total point score.

In real life, Niemann finished in 3rd place despite being the lowest-ranked player in the tournament. To many, the combination of his high finish and the defeat of Magnus Carlsen was suspicious. But the graph shows that Niemann finishes 3rd or above roughly 25% of the time and actually reaches the final in 7.5% of simulations. So for Niemann to finish in 3rd place, especially with the withdrawal of the favorite, Magnus Carlsen, is not an unreasonable result, and it certainly does not indicate cheating.

Well, what if Niemann only cheated in the game against Magnus Carlsen? To answer that, we can use a similar approach to create a Monte Carlo simulation of just the game between Niemann and Carlsen. In the match, Carlsen plays as white, giving him a small advantage from the start. Then using the same ELO rating system and the player’s past win percentages as white and black, we can run a Monte Carlo simulation of the match 1000 times. Here are the results:

![Figure 4](/assets/journalism/niemann-cheating/figure-04.png)

After 1000 simulations, Niemann wins nearly 9% of games as black against Carlsen. While 9% does seem low as a win percentage, it does show that it is very plausible for Niemann to defeat Carlsen, especially when other Grandmasters described Carlsen as playing sloppily.

The Monte Carlo approach provides new insights into the Niemann v Carlsen controversy because instead of analyzing the individual moves like many statisticians, we look at known and estimated historical win probabilities based on ELO. Niemann entered the tournament with the lowest ELO and defeated Carlsen, possibly the greatest chess player of all time. To many, this could only be explained by cheating, but as the Monte Carlo simulations demonstrate, Niemann’s result is entirely possible.

## The Conclusion

Hans Niemann does not have the most likable personality, often being arrogant and rude in interviews. But tarnishing a promising young player's reputation without concrete evidence of cheating in over-the-board matches is unjustified. By not providing proof of cheating, Carlsen simply villainizes a talented player and could come across as a sore loser, even if that’s not his personality, in general.

So, did Niemann cheat? The theories of how he might have cheated almost make it fun to imagine, and Carlsen’s anger made it an appealing claim. And there is no doubt that Niemann has cheated in the past, so the narrative is easy to see. But while it’s possible that he did cheat, the evidence for it is not compelling, and this article’s analysis shows how his win could have happened just by chance. Unexpected things can happen in any competition, and they don’t always involve butt plugs.

### Sources:

FIDE ratings: [https://fide.com/](https://fide.com/)

Niemann v Carlsen match: [https://chess.com](https://chess.com/)/

ELO Rating System: [https://en.chessbase.com/post/the-elo-rating-system-correcting-the-expectancy-tables](https://en.chessbase.com/post/the-elo-rating-system-correcting-the-expectancy-tables)
