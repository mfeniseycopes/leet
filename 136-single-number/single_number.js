/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = 0;
  nums.forEach(function(el) {
    result = result ^ el;
  });

  return result;
};
