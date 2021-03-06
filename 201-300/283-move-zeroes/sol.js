/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	for (var i = nums.length - 1; i >= 0; i--) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			nums.push(0);
		}
	}
};

// or

var moveZeroes_2 = function(nums) {
	var pos = 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			var temp = nums[i];
			nums[i] = nums[pos];
			nums[pos] = temp;
			pos += 1;
		}
	}
};