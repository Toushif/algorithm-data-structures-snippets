// Example 1

function Parent(name) {
    this.name = name;
}

function Child(name, id) {
    Parent.call(this, name);
    this.id = id;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const childObj = new Child("Toushif", 1);
console.log(childObj); // Child { name: 'Toushif', id: 1 }

// Example 2

function Bike(company) {
    this.company = company;
}

Bike.prototype.getCompany = function () {
    return this.company;
};

function Vehicle(name, price) {
    this.name = name;
    this.price = price;
}

var bike = new Bike("Honda");

Vehicle.prototype = bike; //Now Bike treats as a parent of Vehicle.

var vehicle = new Vehicle("Shine", 70000);

console.log(vehicle.getCompany() + " " + vehicle.name + " " + vehicle.price) // Honda Shine 70000
