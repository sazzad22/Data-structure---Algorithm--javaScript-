
/* https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Array-operations-time-complexity */

//hashmaps are like js objects. for a key as string we get the corresponding value,Unlike the array where one has to see through all the indexes.
// two ways to implement hashmaps - Array and BST
// Components of hashmaps - keys, hash functions, buckets
//we get hash codes from hash function and then we use modular function( % ) to get the index

/* 
https://www.youtube.com/watch?v=UOxTMOCTEZk
*/

function hashStringToInt(s,tableSize) {
    let hash = 17;// max bucket size - choose a prime number for evenly spreading the array.
    console.log(s,tableSize);
    for (let i = 0; i < s.length; i++){
        hash = (hash * s.charCodeAt(i)) % tableSize;
    }
    console.log(hash);
    return hash;
}

class HashTable{
    table = new Array(2001);
    numItems = 0; //for counting items
    loadFactor = this.numItems / this.table.length; // more closer to 1 ,more getting fuller,

    //it resizes the hashtable if loadfactor is more than 0.8
    resize = () => {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
          if (item) {
            item.forEach(([key, value]) => {
              const idx = hashStringToInt(key, newTable.length);
              if (newTable[idx]) {
                newTable[idx].push([key, value]);
              } else {
                newTable[idx] = [[key, value]];
              }
            });
          }
        });
        this.table = newTable;
      };

    setItem = (key, value) => {
        this.numItems++;
        const idx = hashStringToInt(key, this.table.length); //here this keyword is used to refer the table property of this class.

        if (this.loadFactor < 0.8) {
            //resize
            this.resize()
        }
        
        // this.table[idx] = value;
        if (this.table[idx]) {
            this.table[idx].push([key.value]) //this will give the items that collided at same idx inside another array - colliding occure when the array size is too small
        } else {
            this.table[idx] = [[key,value]];

        }
    }

    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length);
        if (!this.table[idx]) {
            return null;
        }
        return this.table[idx].find(x=>x[0] === key);
    }
}

const myTable = new HashTable();
myTable.setItem("firstName", "bob")
myTable.setItem("lastName","tamborine")
console.log(myTable.getItem("firstName"));
