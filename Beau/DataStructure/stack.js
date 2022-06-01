// todo Stack
/* 
Stack is service - has first in first out - funtions- push,pop,peek,length
*/

let letters = []; //this is our stack
let word = "racecare";
let rword = "";
// for (let i = 0; i < word.length; i++){
//     letters.push(word[i])
// }
const something = Object.values(word).map((w) => letters.push(w));

const func2 = Object.values(word).map(() => rword += letters.pop())

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
