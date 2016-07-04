require 'byebug'
def two_sum(nums, target)
  # creates hash of indices to easily lookup complement to target
  num_to_index = Hash.new { |h, k| h[k] = [] }

  # iterate until pair found
  nums.each_with_index do |el, idx|
    num_to_index[el] << idx

    # ie. el + complement = target
    complement = target - el

    # complement exists, then we have a pair
    unless num_to_index[complement].empty?

      # if indices.length > 1, num is found in two places in array
      # otherwise trying to pair with self
      return num_to_index[el] if el == complement && num_to_index[el].length > 1

      # distinct complement
      return [num_to_index[el][0], num_to_index[complement][0]] if el != complement
    end
  end
end

p two_sum([0,2,3,5,7,4], 5)
p two_sum([0,4,3,0], 0)
p two_sum([3,2,4], 6)
p two_sum([-1,-2,-3,-4,-5], -8)
