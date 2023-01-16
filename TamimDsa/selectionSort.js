//Selection sort is a sorting algodrithm - it sorts an array by repeatedly finding the minimum element(considering the ascending order) from unsorted part and putting it at the beginning - It has a loop and a nested loop - adding every iteration or steps: n+n-1+n-2+n-3+.... = n(n-1)/2, this can be written as n^2-n/2. Thats why time complexity is O(n^2)

const selectionSort = (unsortedArray) => {
    
    let arrayLength = unsortedArray.length;
    // console.log(arrayLength);
    for (let i = 0; i < arrayLength-1; i++){
        // console.log(i);
        let indexMin = i;
        for (let j = i + 1; j < arrayLength; j++){
            if (unsortedArray[indexMin] > unsortedArray[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            //swapping between unsortedArray[i] and unsortedArray[indexMin];
            let temp = unsortedArray[i];
            unsortedArray[i] = unsortedArray[indexMin];
            unsortedArray[indexMin] = temp;

        }
    }
    
}
let myArray = [3, 2, 1];
selectionSort(myArray);
console.log(myArray);