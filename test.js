/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[indexMin] > nums[j]) {
        indexMin = j;
      }
    }
    if (indexMin != i) {
      let temp = nums[i];
      nums[i] = nums[indexMin];
      nums[indexMin] = temp;
    }
  }
  return nums;
};

const binarySearch = (nums, target) => {
  let left = 0;
  console.log(nums);
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    console.log(nums[mid]);
    console.log(mid);
    if (nums[mid] === target) {
      let ans = [];
      console.log(ans);
      let i = mid - 1;
      let j = mid + 1;
      while (i > -1 && nums[i] == target) {
        i--;
      }
      while (j < nums.length && nums[j] == target) {
        j++;
      }
      while (++i < j) {
        ans.push(i);
      }
      return ans;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [-1];
};

var targetIndices = function (nums, target) {
  const sortedArray = nums.sort();
  return binarySearch(sortedArray, target);
};
const myArray = [1, 2, 2, 3, 5];
console.log(targetIndices(myArray, 5)); // [ 4 ]
