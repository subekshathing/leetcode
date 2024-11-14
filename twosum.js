/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    let rem = target - nums[i];
    if (mp.has(rem)) {
      console.log(mp.get(rem), i); // Print the indices before returning
      return [mp.get(rem), i];
    } else {
      mp.set(nums[i], i);
    }
  }
};

// Example usage
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
