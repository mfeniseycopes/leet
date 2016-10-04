# 136. Single Number

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

## Solution *O(n)*
**Set**

1. Create a empty set
2. Iterate through array
3. If element exists in set, remove it
4. Otherwise add it to the set
5. After iterating through all elements, the sole remaining element is the solution

**XOR** - bitwise XOR operator is commutative

1. Set result equal to 0
2. Iterate through the array A
3. Set result equal to result XOR element
4. End result equals `0 ^ A[0] ^ A[1] ^ ... ^ A[n]`
