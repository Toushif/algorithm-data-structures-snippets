// Consider the following example -

for (var i = 0; i < 5; i++) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Button " + i));
    btn.addEventListener("click", function () {
        console.log(i);
    });
    document.body.insertBefore(btn, document.body.firstElementChild);
}

// (a) What gets logged to the console when the user clicks on “Button 4” and why?
// (b) Provide one or more alternate implementations that will work as expected.

// Above the output will always be 5 since var i is a global variable and its value is lost after iteration within the block scope, so the value of i is 5 which gets printed.
// At the point that the onclick method is invoked (for any of the buttons), the for loop has already completed and the variable i already has a value of 5. (Bonus points for the interviewee if they know enough to talk about how execution contexts, variable objects, activation objects, and the internal “scope” property contribute to the closure behavior.)

// 4 solutions -

// Wrapping the event handler within an IIFE
for (var i = 0; i < 5; i++) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Button " + i));
    btn.addEventListener(
        "click",
        (function (i) {
            return function () {
                console.log(i);
            };
        })(i)
    );
    document.body.appendChild(btn);
}

// Wrapping the entire call to btn.addEventListener in the new anonymous function:
for (var i = 0; i < 5; i++) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Button " + i));
    (function (i) {
        btn.addEventListener("click", function () {
            console.log(i);
        });
    })(i);
    document.body.appendChild(btn);
}

// Using ES6 block scope let instead of var for variable declaration -
for (let i = 0; i < 5; i++) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Button " + i));
    btn.addEventListener("click", function () {
        console.log(i);
    });
    document.body.appendChild(btn);
}

// Or just simple adding a let store = i before the event handler -
for (var i = 0; i < 5; i++) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Button " + i));
    let store = i;
    btn.addEventListener("click", function () {
        console.log(store);
    });
    document.body.appendChild(btn);
} 
