class vehicle{
    constructor(brand, wheel){
        this.name = brand
        this.wheel = wheel
    }
}

class Bike extends vehicle{
    constructor(name,wheel){
        super(name,wheel);
        
        
    }
}

class car extends vehicle {
    constructor(name, wheel){
        super(name,wheel);
    }
}

var b1 = new Bike("Honda", 2)
console.log("Vehicle name: " +b1.name + ", No of wheels: " + b1.wheel)

var c1 = new car("Fortuner", 4)
console.log("Vehicle name: " +c1.name + ", No of wheels: " + c1.wheel)