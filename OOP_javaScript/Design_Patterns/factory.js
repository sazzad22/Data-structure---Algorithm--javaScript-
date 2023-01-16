//*Factory
//We can get an idea of what this design pattern does by looking at its name. The Factory Design Pattern allows us to define an interface or abstract class used to create an object. We then use the interface/abstract class to instantiate different objects.

class Car {
    constructor () {
        this.name = "Car"
        this.wheels = 4
    }
    turnOn = () => console.log("Chacabúm!!")
}

class Truck {
    constructor () {
        this.name = "Truck"
        this.wheels = 8
    }
    turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!")
}

class Motorcycle {
    constructor () {
        this.name = "Motorcycle"
        this.wheels = 2
    }
    turnOn = () => console.log("sssssssssssssssssssssssssssssshhhhhhhhhhham!!")
}


const vehicleFactory = {
    createVehicle: function (type) {
        switch (type) {
            case 'car':
                return new Car();
            case 'truck':
                return new Truck();
            case 'motorcycle':
                return new Motorcycle();
        }
    }
}

const car = vehicleFactory.createVehicle('car');

const myTruck = vehicleFactory.createVehicle('truck');

const motorcycle = vehicleFactory.createVehicle('motorcycle');

console.log(car);

