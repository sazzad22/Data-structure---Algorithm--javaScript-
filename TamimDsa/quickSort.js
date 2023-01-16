/*
*Quick sort
*https://www.geeksforgeeks.org/quick-sort/

*quick sort => time- best O(nlogn),average O(nlog n) , worst O(n^2)

The key process in quickSort is a partition(). The target of partitions is, given an array and an element x of an array as the pivot, put x at its correct position in a sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.

quicksort

Partition Algorithm: 

There can be many ways to do partition, following pseudo-code adopts the method given in the CLRS book. The logic is simple, we start from the leftmost element and keep track of the index of smaller (or equal to) elements as i. While traversing, if we find a smaller element, we swap the current element with arr[i]. Otherwise, we ignore the current element. 

Pseudo Code for recursive QuickSort function:

/* low  –> Starting index,  high  –> Ending index */

// quickSort(arr[], low, high) {

//     if (low < high) {

//         /* pi is partitioning index, arr[pi] is now at right place */

//         pi = partition(arr, low, high);

//         quickSort(arr, low, pi – 1);  // Before pi

//         quickSort(arr, pi + 1, high); // After pi

//     }

// }

// Pseudo code for partition()  

/* This function takes last element as pivot, places the pivot element at its correct position in sorted array, and places all smaller (smaller than pivot) to left of pivot and all greater elements to right of pivot */

// partition (arr[], low, high)
// {
    // pivot (Element to be placed at right position)
//     pivot = arr[high];  

//     i = (low – 1)  // Index of smaller element and indicates the 
    // right position of pivot found so far

//     for (j = low; j <= high- 1; j++){

        // If current element is smaller than the pivot
//         if (arr[j] < pivot){
//             i++;    // increment index of smaller element
//             swap arr[i] and arr[j]
//         }
//     }
//     swap arr[i + 1] and arr[high])
//     return (i + 1)
// }

// Illustration of partition() : 

// Consider: arr[] = {10, 80, 30, 90, 40, 50, 70}

// Indexes:  0   1   2   3   4   5   6 
// low = 0, high =  6, pivot = arr[h] = 70
// Initialize index of smaller element, i = -1

 

// Traverse elements from j = low to high-1
// j = 0: Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])
// i = 0 
// arr[] = {10, 80, 30, 90, 40, 50, 70} // No change as i and j are same
// j = 1: Since arr[j] > pivot, do nothing


function quickSort(arr, low, high) {
    if (low < high) {
        //pi is partitioning index.
        //what the partition func does is that is devides the array around pivot point
        let pi = partition(arr, low, high);
        //now we recursively sort the elements before and after pi position
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);

    }

}

function partition(arr,low,high) {
    //pivot
    let pivot = arr[high];
    //index of smaller element = i
    //we set i to low - 1 , because we want i to be incremented to the position of low and keep incrementing until arr[j] is smaller than pivot.
    let i = low - 1;

    for (let j = low; j <= high - 1; j++){
        //if current element is smaller than the pivot
        if (arr[j] < pivot) {
            //increment index of smaller element 
            i++;
            //swap - put the smaller element to the left or on i position
            [arr[i], arr[j]] = [arr[j], arr[i]];

        }
    }
    //after the loop is over,we set the pivot to to i+1 position. bcz it is the ordered position of pivot
    //swap
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

let myArr = [3, 2, 4, 1];
quickSort(myArr,0,myArr.length-1);
console.log(myArr);