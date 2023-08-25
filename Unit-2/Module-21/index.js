/* 
1) Write code that defines a constructor function called Car that creates a new object 
with the properties: make, model, year
2) Add a getDescription method to the Car prototype that returns a string of info 
*/

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        console.log(`aa This car is the ${this.model} model of the ${this.year} ${this.make}.`);
        return `This car is the ${this.model} model of the ${this.year} ${this.make}.`
    }
}


/* 
3) Define the ElectricCar function as a subclass of car, and include an additional property called range 
4) Have the ElectricCar prototype override the getDescription method with new implementation that includes info about range
*/

class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }
    getDescription() {
        console.log(`${super.getDescription()} It has a range of ${this.range}.`);
        return `${super.getDescription()} It has a range of ${this.range}.`
    }
}

/* 
5) Create an instance of ElectricCar and call the getDescription method on it. 
*/

let teslaCar = new ElectricCar("Tesla", "Model S", 2019, 300);
teslaCar.getDescription();
