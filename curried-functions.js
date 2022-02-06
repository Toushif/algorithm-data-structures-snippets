const add = (x) => (y) => x + y;

add(2); // returns (y => 2 + y)

add(2)(3); // returns 5

const add2 = add(2); // returns function(y) { return 2 + y }
add2(3); // returns 5

const three = (a) => (b) => (c) => a + b + c;

const four = (a) => (b) => (c) => (d) => a + b + c + d;

three(1)(2)(3); // 6

four(1)(2)(3)(4); // 10

//another interesting applicarions
const $ = (x) => (k) => $(k(x));

const add = (x) => (y) => x + y;

const mult = (x) => (y) => x * y;

$(1)(
    // 1
    add(2)
)(
    // + 2 = 3
    mult(6)
)(
    // * 6 = 18
    console.log
); // 18

$(7)(
    // 7
    add(1)
)(
    // + 1 = 8
    mult(8)
)(
    // * 8 = 64
    mult(2)
)(
    // * 2 = 128
    mult(2)
)(
    // * 2 = 256
    console.log
); // 256

//Partial application

const partial = (f, ...a) => (...b) => f(...a, ...b);

const add3 = (x, y, z) => x + y + z;

partial(add3)(1, 2, 3); // 6

partial(add3, 1)(2, 3); // 6

partial(add3, 1, 2)(3); // 6

partial(add3, 1, 2, 3)(); // 6

partial(add3, 1, 1, 1, 1)(1, 1, 1, 1, 1); // 3

// Write a sum method which will work properly when invoked using either syntax below.
// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// METHOD 1
function sum(x) {
    if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    } else {
        return function (y) {
            return x + y;
        };
    }
}

// METHOD 2
function sum(x, y) {
    if (y !== undefined) {
        return x + y;
    } else {
        return function (y) {
            return x + y;
        };
    }
}

// Method 3 -> Use partial function currying as shown above

const createChallenge = (name, opponent, game) => {
    console.log(
        `${name}, is challenging ${opponent} to play a game of ${game}!`
    );
};
// https://dockyard.com/blog/2020/07/17/a-deep-dive-into-currying
// At first, I struggled with function scopes and keeping track of all the passed arguments for each function. Finally, I found the best way to do this is by creating a recursive function to wait for the expected amount of arguments. Once you reach the right amount of arguments, you can trigger the original function with all the arguments, otherwise you’ll keep waiting for more arguments and pass them to the next nested function call. With .length on the original function, we can determine how many arguments we have to wait for before executing the original function.
const curry = (functionToCurry) => {
    const waitForArguments = (...attrs) => {
        return attrs.length === functionToCurry.length
            ? functionToCurry(...attrs)
            : (...nextAttrs) => waitForArguments(...attrs, ...nextAttrs);
    };

    return waitForArguments;
};

// Very important - refer the URL
curry = (functionToCurry, arity = functionToCurry.length) => {
    let waitForArguments = (...attrs) => {
        return attrs.length >= arity
            ? functionToCurry(...attrs)
            : (...nextAttrs) => waitForArguments(...attrs, ...nextAttrs);
    };

    return waitForArguments;
};

// My version-
function curry(Fnc) {
    return function waitingFunc(...args) {
        return Fnc.length === args.length
            ? Fnc(...args)
            : (...next) => waitingFunc(...args, ...next);
    };
}

const curriedChallenge = curry(createChallenge);

console.log(curriedChallenge("John", "Sam", "chess"));
console.log(curriedChallenge("John")("Sam")("chess"));
console.log(curriedChallenge("John", "Sam")("chess"));
console.log(curriedChallenge("John")("Sam", "chess"));


//compute(10).add(20).mul(30)

function compute(num) {
	if(!(this instanceof compute)) {
  	return new compute(num)
  }
	this.num = num;
  
  this.add = function(addNum) {
  	this.num = this.num + addNum
    return this;
  }
  
  this.mul = function(mulNum) {
  	this.num = this.num * mulNum
    return this.num;
  }
}

console.log(compute(10).add(20).mul(30))

const calc = {
    total: 0,

}

const result = calc.add(10).multiply(30).msubtract(50).add(30).divide(4)
console.log(result.total)


// Sum of N numbers recursively (Interview questions) - 
const sum = a => b => b ? sum(a+b) : a;
console.log(sum(1)(2)(3)(4)(5)())
