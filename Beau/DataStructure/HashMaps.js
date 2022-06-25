
/* https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Array-operations-time-complexity */

//hashmaps are like js objects. for a key as string we get the corresponding value,Unlike the array where one has to see through all the indexes.
// two ways to implement hashmaps - Array and BST
// Components of hashmaps - keys, hash functions, buckets
//we get hash codes from hash function and then we use modular function( % ) to get the index

/* 
https://www.youtube.com/watch?v=UOxTMOCTEZk
*/

function hashStringToInt(s) {
    let hash = 17;// max bucket size - choose a prime number for evenly spreading the array.

    return hash;
}

class HashTable{
    table = new Array(100);

    setItem = (key, value) => {
        const idx = hashStringToInt(key);
        this.table[idx] = value;


    }

    getItem = (key) => {
        const idx = hashStringToInt(key);
        return this.table[idx];
    }
}

const myTable = new HashTable();