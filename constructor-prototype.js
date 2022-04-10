// Contructor functions nd prototypical inheritence

class Printer {
    message = "This works!";

    // @Autobind
    showMessage() {
        console.log("show message..", this.message);
    }
}

const p = new Printer();
// p.showMessage();
console.log("show 1", p);
console.log("show 2", p.constructor); // this is same as show 4 and show 6
console.log("show 3", p.constructor.prototype); // same as show 5
console.log("show 4", Printer); // constructor function - same as show 2
console.log("show 5", Printer.prototype);
console.log("show 6", Printer.prototype.constructor); // this is same as show 4 above only - constructor function
console.log("show 7", Printer.prototype.constructor.prototype); 
console.log("show 8", Printer instanceof Function); // true 
console.log("show 9", p.constructor instanceof Function); // true 
console.log("show 10", Printer.prototype instanceof Object); // true 
console.log("show 10", Object.getPrototypeOf(Printer.prototype) == Object.prototype); // true 

// https://stackoverflow.com/questions/17394802/traversing-prototype-chain-using-constructor-prototype