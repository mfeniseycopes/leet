# 243. Shortest Word Distance

Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

For example,
Assume that words = `["practice", "makes", "perfect", "coding", "makes"]`.

Given word1 = “coding”, word2 = “practice”, return 3.
Given word1 = "makes", word2 = "coding", return 1.

Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

## Solution *O(n)*

* Create variables to hold the last occurrence of both words
* Create variable to store min distance
* Iterate through the list of words, storing into variables when a word is found
  * check against min distance, update if necessary
* Return min distance
