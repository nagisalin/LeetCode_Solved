/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i=i+1) {
        const distenct = target - nums[i];
        const find_index = nums.indexOf(distenct)
        if (find_index !== -1 && find_index !== i) {
            return [i, find_index]
        }
    }
};