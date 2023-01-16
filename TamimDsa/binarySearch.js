//the funtion
//binary search er time complexity O(n) ,space complexity O(1)
/* 
Binary Search Algorithm: The basic steps to perform Binary Search are:

Begin with the mid element of the whole array as a search key.
If the value of the search key is equal to the item then return an index of the search key.
Or if the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
Otherwise, narrow it to the upper half.
Repeatedly check from the second point until the value is found or the interval is empty.
 */
//* Template 1
const binarySearch = (myArray, elementToSearch) => {
  let left = 0;
  let right = myArray.length - 1;
  let mid;

  //as long as left is less than right;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (myArray[mid] === elementToSearch) {
      let ans = [];
      let i = mid - 1;
      let j = mid + 1;
      //loops below finds multiple indexes if they matches the target elementToSearch
      while (i > -1 && myArray[i] == elementToSearch) {
        //searcher to the left until match is found
        i--; //0
      }
      while (j < myArray.length && myArray[j] == elementToSearch) {
        //searcher to the right until match is found

        j++; //4
      }
      // for (++i; i < j; ++i){ans.push(i)}
      while (++i < j) {
        // the values between i & j is push into ans .In every loop ++i changes the original value of i. So it increases with every loop .here we start pushing indexes after i and before j. here the original i & j dont have the ans.
        ans.push(i);
      }
      return ans;
    }
    if (myArray[mid] < elementToSearch) {
      // If mid is smaller than target, it means target lies within the last half.
      left = mid + 1; //so we re-assign left to the start of the last half.
    } else {
      // If mid is bigger than target, it means target lies within the first half.
      right = mid - 1;
    }
  }
  return -1;
};

//calling the func
console.log(binarySearch([1, 4, 4, 4, 5, 6], 4));
//

//template 3
/* 
Key Attributes:
An alternative way to implement Binary Search
Search Condition needs to access element's immediate left and right neighbors
Use element's neighbors to determine if condition is met and decide whether to go left or right
Gurantees Search Space is at least 3 in size at each step
Post-processing required. Loop/Recursion ends when you have 2 elements left. Need to assess if the remaining elements meet the condition.
Distinguishing Syntax:
Initial Condition: left = 0, right = length-1
Termination: left + 1 == right
Searching Left: right = mid
Searching Right: left = mid
*/
function binarySearch3(nums) {
  if (nums == null || nums.length == 0);
  let L = 0;
  let R = nums.length - 1;
  let mid;

  while (L + 1 < R) {
    mid = L + (R - L) / 2;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      L = mid;
    } else {
      R = mid;
    }

    //post-proccessing
    if (nums[L] == target) return L;
    if (nums[R] == target) return R;
    return -1;
  }
}
