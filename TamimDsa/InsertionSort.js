
//Insertion Sort -practically used a lot - starts with the 1 indexed element of the array - it is refered as the numberToInsert - checks the previous element - if previous is larger, the larger one is push to the right - if previous is smaller than numberToInsert then the NTI stays at the right of the previous one
// O= O(n^2)

const insertionSort = arrayToSort => {
    
    for (let i = 1; i < arrayToSort.length; i++){
        let numberToInsert = arrayToSort[i];
        let j = i - 1;
        while (j >= 0 && arrayToSort[j] > numberToInsert) {
            arrayToSort[j+1]=arrayToSort[j]
            j = j - 1
        }
        arrayToSort[j + 1] = numberToInsert;
    }

}

const myArray = [9, 8, 1, 55, 34, 2];
const myAnotherArray = [1, 2, 3, 4, 5, 2];
insertionSort(myAnotherArray);
console.log(myAnotherArray);