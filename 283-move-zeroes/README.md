## Move Zeros

Given an array nums, write a function to move all 0's to the end of it
while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function,
nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

## Solution
Though posited as moving zeros to the right, it is actually much simpler to move
non-zeros to the left. My initial attempt was to keep track of the number of
zeros and swap them into the front of a all zeros sub-array which ends at the
last index. The problem here is everytime you
swap a zero to the front of the rear sub-array, whatever non-zero was there is
skipping ahead (thus 
breaking) the original ordering. Moving non-zeros to the left fixes this because,
since you encounter them in the same order, swapping them to the end of the
non-zero sub-array does not break ordering.
