# Given an array nums, write a function to move all 0's to the end of it
# while maintaining the relative order of the non-zero elements.
#
# For example, given nums = [0, 1, 0, 3, 12], after calling your function,
# nums should be [1, 3, 12, 0, 0].
#
# Note:
# You must do this in-place without making a copy of the array.
# Minimize the total number of operations.

def move_zeroes(nums)

  last_non_zero = -1

  # iterates through list once
  nums.length.times do |current|
    if nums[current] != 0
      last_non_zero += 1
      nums[current], nums[last_non_zero] = nums[last_non_zero], nums[current]
    end
  end

  nil
end
