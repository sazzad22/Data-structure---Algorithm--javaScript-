//the funtion
//binary search er time complexity O(n) ,space complexity O(1)
const binarySearch = (myArray, elementToSearch) => {
    let left = 0;
    let right = myArray.length - 1;
    let mid;

    //as long as left is less than right;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        console.log(mid)
        if (myArray[mid] === elementToSearch) {
            return mid;
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
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6))
