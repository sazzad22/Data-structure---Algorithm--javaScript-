//todo: 3 show how to integrate jwt

/* const jwt = require('jwt');

const encData = jwt.sign({ name: "himel" }, process.env.SECRET);

const decData = jwt.verify(encData, process.env.SECRET);

// console.log(decData);

//todo :  4. write a post request
//node with mongoDB
const express = require('express');
const app = express();

app.post('/addproduct', async(req,res) => {
    // const id = req.params;
    const product = req.body;
    const productCollection = db.collection('product')
    const result = await productCollection.insertOne(product);

    res
        .status(200)
        .json({
            success: true,
            result: result
    })

})

//node with mySQL
app.post('/addproduct', async(req,res) => {
    // const id = req.params;
    const product = req.body;
    const db = dbService.getNewService()

    const result = await db.insertNewProduct(product);

    res
        .status(200)
        .json({
            success: true,
            result: result
    })

}) */

// todo: 5. call ,apply, bind
// theses methods change the context of a function. In a fucntion this represent the context.
//the methods can change the this key word's value

const person1 = { name: 'John', age: 10 };
const person2 = { name: 'Babola', age: 30 };
const person3 = { name: 'Shaquile O Neil', age: 30 };

function greet(greeting) {
    return (this.name + ' says ' + greeting);
};
const result = greet.call(person1, 'hey');
console.log(result); //john says hey

//apply - same as call, just argument are passed in as an array
const res2 = greet.apply(person2, ['hello there'])
console.log(res2);

//bind
const bindedContext = greet.bind(person3);
console.log(bindedContext('hey')); //Shaquile O Neil says hey


//todo : 6. JS closures
const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
})();
  //here func in the return is assigned to the add variable. the anonimous function is called only once.So counter variable becomes a private variable.It's scope is within the anonemous function
  
  add();
  add();
  add();
  
  // the counter is now 3