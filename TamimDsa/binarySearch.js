//the funtion
//binary search er time complexity O(n) ,space complexity O(1)
const binarySearch = (myArray, elementToSearch) => {
    let left = 0;
    let right = myArray.length - 1;
    let mid;

    //as long as left is less than right;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        // console.log(mid)
        if (myArray[mid] === elementToSearch) {
            let ans = [];
            let i = mid - 1;
            let j = mid + 1;
            while (i > -1 && myArray[i] == elementToSearch) {
                
                i--;
            }
            while (j < myArray.length && myArray[j] == elementToSearch) {
                
                j++
            }
            while (++i < j) {
                ans.push(i);
            }
            return ans
        }
        if (myArray[mid] < elementToSearch) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        
    }
    return -1;
}

//calling the func
console.log(binarySearch([1, 2, 4, 4, 5, 6],4))
