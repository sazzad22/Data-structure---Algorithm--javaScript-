//Maps

let myMap = function () {
    this.collection = {};
    this.count = 0;
    this.size = function () {
        return this.count;
    }

    //sets a key value pair in the collection obj
    this.set = function (key, value) {
        this.collection[key] = value;
        this.count++;//increaments size
    }

    this.has = function (key) {
        return (key in this.collection) //in operator returns true or false
    }

    //gets the value if you pass in the key
    this.get = function (key) {
        return (key in this.collection) ? this.collection[key] : null
    }


    //deletes the pair
    this.delete = function (key) {
        if (key in this.collection) {
            delete this.collection[key]
            this.count--;
        }
    };
    this.values = function () {
        let result = new Array();
        for (let key of Object.keys(this.collection)) {
            result.push(this.collection[key])
        }
        return (result.length > 0) ? result : null;
    }
    //clears the collection elements
    this.clear = function () {
        this.collection = {};
        this.count = 0;
    }

}

let map1 = new myMap();

map1.set('cup', 2);
map1.set('watch', 2);
map1.set('hair', 'A lots');
map1.set('confidence', false);


console.log(map1.size());
console.log(map1.get('hair'));
console.log(map1.values());

// for map obj ,one can set any value (obj ,function ) as keys .
// map obj that is intoduces in ES6 , it is a little bit different than the javascript object.Like, js obj has a prototype, map dont. In map any value can be set as the key. In case of obj ,only strings and symbol is allowed.