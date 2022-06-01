//todo Sets

//sets data structure  are like an array but without any duplicate items, and the values are not in any particular order  -  it is used to check for an item

// The Set objects are collection of values - one can iterate through the elements of a ser on insertion order

//The Set object lets you store unique values of any type, whether primitive values or object references.

//more - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// the set object and it's mehtods elaborated

function mySet() {
    
    //this let collection will hold the set
    let collection = [];

    //this method check if the element exists in the set and returns true of false
    this.has = function (elem) {
        return (collection.indexOf(elem)!== -1)
    }

    //this method returns all the values in the set
    this.values = function () {
        return collection;
    }
    
    //this method will add an element to the set
    this.add = function (elem) {
        if (!this.has(elem)) {
            collection.push(elem)
            return true;
        }
        return false
    }

    //this method removes an element
    this.remove = function (elem) {
        if (this.has(elem)) {
            index = collection.indexOf(elem);
            collection.splice(index, 1)
            return true
        }
        return false
    }

    //this method will return the size of the collection
    this.size = function () {
        return collection.length;
    }

    // UNION - this method will return the union of two sets
    this.union = function (otherSet) {
        let unionSet = new mySet();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e)
        })
        secondSet.forEach(function (e) {
            unionSet.add(e)
        })
        return unionSet;
    }

    //Intersection - this method will return the intersection of two sets a new set
    this.intersection = function (otherSet) {
        let intersection = new mySet();
        const firstSet = this.values()
        
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersection.add(e)
            }
        })
        return intersection;
    }

    // Difference between two sets
    this.difference = function (otherSet) {
        const differenceSet = new mySet();
        const firstSet = this.values()
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        })
        return differenceSet;
    }

    //subset check - this method will test if the set is a subset of a differenct  set;
    this.subset = function (otherSet) {
        const firstSet = this.values();
        return firstSet.every(function (value) {
            return otherSet.has(value)
        })
    }

}

// test values
var setA = new mySet();  
var setB = new mySet();  
setA.add("a");  
setB.add("b");  
setB.add("c");  
setB.add("a");  
setB.add("d");  
// console.log(setA.subset(setB));
// console.log(setA.intersection(setB).values());
// console.log(setB.difference(setA).values());


var setC = new Set();  
var setD = new Set();  
setC.add("a");  
setD.add("b");  
setD.add("c");  
setD.add("a");  
setD.add("d");  
console.log(setD.values())
// setD.delete("a");
// console.log(setD.has("a"));
// console.log(setD.add("d"));