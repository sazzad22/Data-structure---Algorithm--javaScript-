/* 
Question #0

Write a function to return the number of odd numbers in a given array
example 1 - input [1,2,3,4,5], output 3
example 2 - input [2,6,8], output 0
example 3 - input [], output 0
 */

const findOddLength = (arr) => {
    //base case
    if (!arr) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}
//test
const testArray = [2,6,8];
// console.log(findOddLength(testArray));

//todo: Question #1

/* Write a function to check if a string contains an even number of characters. (will return a boolean)
example 1 - input "aabbccdddd", output true
example 2 - input "ababc", output false */

function checkEvenCharacterCounter(string) {
    //base cases
    if (string.length == 0) {
        return false;
    }
    let charTracker = new Map();
    for (let i = 0; i < string.length; i++) {
        if (charTracker.has(string[i])) {
            charTracker.set(string[i], charTracker.get(string[i])+1);
            
        } else {
        charTracker.set(string[i],1)
            
        }

    }
    console.log(charTracker);
    const char = [];
    for ([key,value] of charTracker) {
        char.push(key)
        if (charTracker.get(key) % 2 !== 0) {
            return false
        }
    }
    console.log(char);
    return true;
    
}

console.log(checkEvenCharacterCounter('aabbcc'));
// a,b,c,d
// L
//

