// todo| Reference link - https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/

//* defining class using ES6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `The name of the bike is ${this.name}`;
  }
}
//making obj with the help of constructor
const bike1 = new Vehicle("redDIve", "HONDA", "40Ti");
const bike2 = new Vehicle("horn", "MITSHUBISHI", "Ar5");

console.log(bike1.name); //resDIve
console.log(bike2.engine); //Ar5
console.log(bike1.getDetails()); //The name of the bike is redDIve

//*Encapsulation – The process of wrapping properties and functions within a single unit is known as encapsulation.
class person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  add_Address = function (address) {
    this.address = address;
  };
  getDetails() {
    console.log(`Name is ${this.name},Address is : ${this.address}`);
  }
}

let person1 = new person("mukul", 21);
person1.add_Address("Dhaka");
person1.getDetails();

//* abstraction
//Class fields are public by default, but private class members can be created by using a hash # prefix. The privacy encapsulation of these class features is enforced by JavaScript itself.

//It is a syntax error to refer to # names from outside of the class. It is also a syntax error to refer to private properties that were not declared in the class body, or to attempt to remove declared properties with delete.
class ClassWithPrivate {
  #privateProperty; //has to be declared outside of constructor
  constructor(land) {
    this.#privateProperty = 20;
    this.land = land + this.#privateProperty;
  }
}
const myInstance = new ClassWithPrivate(22);
myInstance.land;
console.log(myInstance.land);

class ClassName {
  constructor(init1, init2) {
    this.prop1 = init1;
    this.prop2 = init2;
  }
  get props() {
    return [this.prop1, this.prop2];
    }
    set props(val) {//here the passed in value would be a array.
        ([this.prop1,this.prop2]=val)
    }
    instanceMethod() {
        //do something
        console.log(this.prop1,this.prop2);
        return this
    }
    static staticMethod() {
        //class level method
        //do something
    }
}

const instance = new ClassName();
instance.props=[1,2]
console.log(instance.props1);
console.log(instance.instanceMethod());

//* traditional abstraction example
function people(fName, lName) {
    this.firstName = fName;
    let lastName = lName;//if we use let , the prperty of this object becomes private

}
let people1 = new people('muks', 'alato');
console.log(people1.firstName);


//*Inheritance
// It is a concept in which some properties and methods of an Object are being used by another Object.Unlike most of the OOP languages where classes inherit classes, JavaScript Objects inherit Objects i.e.certain features(property and methods) of one object can be reused by other Objects.

class Language{
  constructor(name) {
    this.name = name;
  }
  
  //method to return the string
  toString() {
    return (`Name of technology: ${this.name}`)
  }
}
//sub class/child class
class Framework extends Language{
  constructor(name, id) {
    console.log(super(name));
    // super(name);
    this.id = id;    
  }
  toString() {//overriding the method
    
    return (`${super.toString()}, Framework ID: ${this.id}`)
  }
  
}

let tech = new Framework('React', 2022)
console.log(tech);
console.log(tech.toString());

//Inheritance is a useful feature that allows code reusability.



//* Polymorphism
//Polymorphism is one of the core concepts of object-oriented programming language. Polymorphism means the same function with different signatures is called many times. In real life, for example, a boy at the same time may be a student, class monitor, etc. So a boy can perform different operations at the same time. This is called polymorphism.

// Features of Polymorphism:

// Programmers can be use the same method name repeatedly.
// Polymorphism has the effect of reducing the number of functionalities that can be paired together.

//implementing inheritance polymorphism

class firstClass{
  add() {
    return('first method')
  }
}

class secondClass{
  add() {
    return (3 + 4);
  }
}

class thirdClass{
  add() {
    return ("third method")
  }
}

const obj1 = new firstClass();
const obj2 = new secondClass();
const obj3 = new thirdClass();

console.log(obj1.add());
console.log(obj2.add());
console.log(obj3.add());

//This example shows us the same method will perform in different operations depending on the object upon which it is called.

//?Polymorphism with Functions and Objects:
// todo: It is also possible in JavaScript that we can make functions and objects with polymorphism.In the next example, we will make two functions with the same name ‘area’.  We define the area function in class A.In this function, we have two parameters – x and y.Class B is created by extending class A.

class A{
  area(x, y) {
    return( x*y)
  }
}

class B extends A{
  area(a, b) {
    super.area(a, b);
    console.log('class B')
    return ('class b'+a+b)
  }
}
const object1 = new B();
console.log(object1.area(2, 3));

// todo : A simple yet practical example of oop programming

class GFG{
  newAccount() {
    console.log("gfg!");
    const user1 = new SignUp();
    user1.create(22, 'riya', "riya22@gmail.com", "f", 89001);
    return user1;
  }
}

class SignUp{
  create(userId,name,emailId,sex,mob) {
    this.userId = userId;
    this.name = name;
    this.emailId = emailId;
    this.sex = sex;
    this.mob = mob;
  }
  
}

const accObj = new GFG()


console.log(accObj.newAccount());