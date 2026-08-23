### By: Raja Kavasseri, Ryan Ralph, and Tony Lomeli

## Introduction

Few roles in football are as scrutinized—or as celebrated—as that of the play caller, and the NFL has seen its share of legendary minds orchestrating games like grandmasters. From the great Bill Belichick to the unpredictable Andy Reid, great play callers have shaped eras, defined dynasties, and reimagined what offense can be. In that lineage stands Sean McVay, head coach of the Los Angeles Rams, who became the youngest head coach in modern NFL history in 2017 and instantly revived a lifeless offense into one of the league’s most feared units. His fast-paced, motion-heavy system, built on misdirection and precision, has made him a model for the modern offensive coach. But what makes McVay especially intriguing is how calculated he is—every formation, every shift, every call is layered with intention. Whether he's operating out of shotgun or pushing tempo with a no-huddle look, he's constantly adjusting based on field conditions, defensive alignments, and the scoreboard. It’s not just creativity—it’s controlled aggression, shaped by down, distance, and situation, and it’s what makes reading McVay both fascinating and deceptively difficult. In trying to predict whether he’ll call a run or a pass, we’re not just crunching numbers—we’re trying to think like him. This is an attempt to get inside the head of a football genius and see the game through his eyes.

## The Model

Football may be a game of inches, but predicting a coach’s next move requires thinking in probabilities. For this project, we turned to the nflverse play-by-play data from the 2021 through 2024 NFL seasons, honing in on 4,555 offensive plays by the Los Angeles Rams—each one a puzzle piece in the larger strategy of Sean McVay. We excluded rare events like two-point conversions and overtime plays to keep our model focused on the most common and structured decision-making moments. Just like defenses break down film to spot tendencies, we broke down data to spot patterns—specifically, trying to answer one core question: run or pass? To do that, we used logistic regression, a classic tool for modeling the probability of binary outcomes, ideal for this type of yes/no prediction. But McVay’s offense is anything but simple, so to capture the complexity of how multiple variables interact—down, distance, formation, field type, and more—we introduced a wide array of feature interactions into the model. This quickly ballooned the number of predictors, so we turned to LASSO logistic regression, a method that applies regularization to reduce model complexity by shrinking less relevant variables to zero.

Our model accurately predicted the play outcome 72% of the time when using a 50% decision threshold. However, the true strength of logistic regression lies in estimating the probability of a pass, rather than making a binary run/pass decision. For instance, a predicted 99% chance of a pass carries much more confidence than a 51% prediction, even though both may result in the same classification. With that in mind, the next section explores which factors the model identified as having the most significant influence on the probability of calling a run or a pass.

Just as McVay tailors his game plans to exploit defensive weaknesses, we tailored our model to reflect the decision-making pressure points he likely values most. While formation, tempo, and field surface all matter, two variables stood out as central to predicting his tendencies: **third- or fourth-down yardage to gain** and **fourth-quarter score differential** . These are the moments where a single decision can swing momentum, and where McVay’s reputation for calculated boldness comes into play. Whether he's protecting a lead or chasing one, facing 3rd-and-short or 4th-and-long, his calls reveal patterns that go beyond intuition—they're shaped by context and situation. LASSO helped us isolate those high-leverage combinations, stripping away noise and zeroing in on how McVay adjusts under pressure. The result isn’t just a prediction tool—it’s a lens through which we can observe how one of the NFL’s most innovative coaches thinks when the stakes are highest.

![Figure 1](/assets/journalism/can-you-predict-sean-mcvay-s-play-calling-inside-the-mind-of-a-genius/figure-01.png)

Note: These lines depict the variables most heavily influencing our model. As the number gets further from 0, the factor becomes more influential in predicting run/pass outcome. A negative indicates that as the value of the variable increases, the probability of calling a run increases and the probability of calling a pass decreases.

## Analysis

Before a ball is snapped, a coach like Sean McVay is already calculating—evaluating score, down, distance, formation, and more in real time. If our goal is to predict his next move, we need to do the same. The following visualizations highlight just a few of the key variables that help shape his play calling tendencies. From situational scenarios like goal-to-go or shotgun formations, to context-sensitive factors like down and score differential, each graph reveals patterns in how the Rams adapt their strategy.

![Figure 2](/assets/journalism/can-you-predict-sean-mcvay-s-play-calling-inside-the-mind-of-a-genius/figure-02.png)

Note: This chart shows Sean McVay’s pass rate across various game scenarios from 2021 to 2024. Situations like no-huddle and shotgun formations strongly skew toward passing, while goal-to-go situations show a more balanced approach.

## Down by Down Scenarios

One of the clearest indicators for predicting whether Sean McVay will call a run or pass play is the down itself. Each down presents a different level of urgency, and McVay’s play calling patterns reflect that shifting context. On first down, the Rams show a fairly balanced approach, with a slight lean toward the run to keep defenses honest. On the other hand, fourth down is more complex—while the overall pass rate drops from third down, it’s heavily dependent on game situations, field position, and opponent tendencies. These patterns make the down a useful starting point for identifying play call tendencies, although looking only at the down number can oversimplify the situation, especially when McVay is known for adapting based on in-game variables. That said, not all 3rd and 4th downs are created equal—specific distances to the sticks often reshape these tendencies even further.

![Figure 3](/assets/journalism/can-you-predict-sean-mcvay-s-play-calling-inside-the-mind-of-a-genius/figure-03.png)

Note: Second down often swings based on the outcome of the previous play, but still sees a moderately high pass rate. By third down, especially in medium-to-long situations, passing becomes the default, and the Rams’ 78% pass rate on 3rd down reflects that reliance.

## Downs With Distance

![Figure 4](/assets/journalism/can-you-predict-sean-mcvay-s-play-calling-inside-the-mind-of-a-genius/figure-04.png)

Note: Short distance: 1-3 yards from the first down marker; Medium: 4-6 yards; Long: 7-12 yards; Very Long 13+ yards

Although above, we see a rise and fall in terms of McVay’s probability of passing the ball as the downs change, the logistic regression model pointed out that the down and distance to gain a first down was particularly influential in predicting McVay’s play calling. The thought process behind this graph above is to zone in on just third and fourth down because that is when McVay is going to be the most aggressively calling plays to progress the Rams’ drive. These are the most critical downs in a possession, often dictating whether the offense stays on the field or is forced to punt or settle for a field goal. We can interpret this graph and conclude that a medium distanced 3rd down is a strong indicator that Sean McVay will elect to pass the ball compared to the low pass probability we see on a short 4th down. By combining this football context with data-driven analysis, we move one step closer to decoding the mind of a play calling mastermind.

## Point Differential In the Fourth

![Figure 5](/assets/journalism/can-you-predict-sean-mcvay-s-play-calling-inside-the-mind-of-a-genius/figure-05.png)

Looking at the graph above, we see how Sean McVay’s fourth-quarter play calling shifts dramatically depending on the point differential. Our model also pointed out the fourth quarter point differential as being a particularly influential variable. This aligns with how real games play out; in the fourth quarter, tendencies become more pronounced and predictable, such as running to protect a lead or passing to mount a comeback. When the Rams are down by more than one possession, the pass rate spikes to over 80%, reflecting an urgent need to move the ball quickly and preserve clock. As the game tightens—either tied or within one score—the pass rate remains high, but is slightly more balanced, suggesting McVay is still pushing the tempo while keeping some unpredictability. However, once the Rams hold a lead of more than one possession, the play calling flips: the run rate jumps significantly, nearing 60%, indicating a clear effort to manage the clock and reduce risk. This graph reveals how point differential is not just a background stat—it’s a key driver of strategic shifts in McVay’s fourth-quarter decisions.

## Conclusion

Predicting play calling in the NFL is part art, part science—and no one makes it more fascinating than Sean McVay. In a league where every yard matters and each decision is magnified under the spotlight, understanding what goes into a coach’s call is a challenge teams and analysts constantly chase. With McVay, it's not just about instinct; it's about patterns, context, and situational awareness. By examining key variables like down and distance, fourth-quarter point differential, and formation tendencies, we begin to see how his decisions are shaped by both analytics and game flow. Football is a game of strategy as much as physicality, and play calling sits at the intersection of those two forces. Through data, we get a glimpse into that hidden chess match—where one move can decide a drive, a game, or a season. Our model doesn’t just decode the numbers; it brings us closer to the logic behind McVay’s brilliance. And in a sport built on inches and split-second decisions, even the smallest edge in understanding can make all the difference. In breaking down McVay’s patterns, we’re not just reading plays—we’re stepping inside the mind of a genius.

## References

Original datasets from [https://github.com/nflverse/nflverse-data/releases/tag/pbp](https://github.com/nflverse/nflverse-data/releases/tag/pbp)

Final dataset and model creation code can be found at [https://github.com/RajaKavasseri/McVay_Model](https://github.com/RajaKavasseri/McVay_Model)
