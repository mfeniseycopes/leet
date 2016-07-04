## Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the
answer must be a substring, "pwke" is a subsequence and not a substring.

## Solution O(n)

* Create a hash to store characters and their indices. I originally had this holding just the last index, but determined its faster (with slightly higher space complexity of a guaranteed n).
* Keep track of the current max, current index, head index and tail index
* Iterate over elements.
  * If element exists in hash and the last index stored there is within the current substring then update then recalculate the max, and update the head index to the index after the previous occurrence of the element.
  * Add index to the hash
  * Increment current index and tail index
* At the end recalculate the max and return
