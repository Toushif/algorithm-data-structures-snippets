//https://www.youtube.com/watch?v=pTbSfCT42_M
//Callbacks functions in javascript are also called higher order functions and functions in JS are first class objects.
//You can pass object or even functions in another function as an arguments. Simple example of a call back function –

let x = function () {
    console.log("Hi inside X");
};

let y = function (callback) {
    console.log("Inside Y");

    callback();
};

y(x);

//Here in above example first console inside Y gets printed then the X function is executed and console inside X is executed.
//Another example –

let add = function (a, b) {
    return a + b;
};

let multiply = function (a, b) {
    return a * b;
};

let doWhatever = function (a, b) {
    console.log(`Your two numbers are ${a} and ${b}`);
};

let calc = function (a, b, callback) {
    if (typeof callback === "function") {
        return callback(a, b);
    }
};

console.log(
    calc(2, 3, function (a, b) {
        return a - b;
    })
);

//Output: -1
//Another practical example-

var arr = [
    { num: 2, str: "apple" },
    { num: 3, str: "cabbage" },
    { num: 3, str: "banana" },
];

arr.sort(function (val1, val2) {
    if (val1.str > val2.str) {
        return -1;
    } else {
        return 1;
    }
});

//Output: [object,object,object]     //(cabbage then banana and then apple)
