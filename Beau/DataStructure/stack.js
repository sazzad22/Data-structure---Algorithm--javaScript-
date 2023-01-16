// todo Stack
/* 

Stacks is a data structure where the last entered data is the first to come out. Also know as Last-in, First-out (LIFO).

Stack is service - has first in first out - funtions- push,pop,peek,length
*/

let letters = []; //this is our stack - checking if the word is a palindrome
let word = "odo";
let rword = "";
// for (let i = 0; i < word.length; i++){
//     letters.push(word[i])
// }
const func1 = Object.values(word).map((w) => letters.push(w)); //func1 takes letters of word in the letters array

const func2 = Object.values(word).map(() => rword += letters.pop())// func2 takes the letters in letters array and shoves then in rword in reversed order .
console.log(func2);

rword === word ? console.log(word, ' is a palindrome') : console.log(word, ' is NOT a palindrome');

/* *Example 2 */

//Created a stack
var Stack = function () {
    this.count = 0;
    this.storage = {};

    //adds a value onto the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }
    
    //Removes and returns the value at the end of the stack
    this.pop = function () {
        if (this.count === 0) {
            return undefined
        }
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    //Size or length
    this.size = function () {
        return this.count
    }

    //returns the value at the end of the stack
    this.peek = function () {
        return this.storage[this.count - 1];
    }
}
var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop() , 'is popped off');
console.log(myStack.peek());
