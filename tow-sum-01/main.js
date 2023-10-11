const twoSum = (nums, targer) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === targer) {
        console.log([i, j]);
      }
    }
  }
};

const nums = [2, 3, 4, 5, 6];
const targer = 6;
twoSum(nums, targer);
