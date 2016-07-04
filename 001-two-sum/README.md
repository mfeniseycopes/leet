## Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## Solution : O(n)
A brute force approach would consist of checking every element against every
other elementL O(n).

A slightly less fast implementation would be making two passes on the index
hash. The first to population and the second to find the pair. O(n)

The fastest is a single pass implementation, checking for a pair after each
insertion. This is also O(n).
