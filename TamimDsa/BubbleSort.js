//Bubble sort
//It compare the two adjacent values and put the larger one to the right.Doing this proccess for every element of the array the largest value gets to the end and sorts the array in ascending order.
// time Complexity O(n^2)
//Space complexity O(1)

const bubbleSort = (unsortedArray) => {
    for (let i = 0; i < unsortedArray.length; i++){
        for (let j = 0; j < unsortedArray.length - i - 1; j++){
            if (unsortedArray[j] > unsortedArray[j + 1]) {
                let temp = unsortedArray[j];
                unsortedArray[j] = unsortedArray[j + 1];
                unsortedArray[j + 1] = temp;
            }
        }
    }
    // return unsortedArray;
}

const myArray = [4, 5, 3, 2, 3, 7];
bubbleSort(myArray)
console.log(myArray);