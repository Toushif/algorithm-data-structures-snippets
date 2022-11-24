// What will this code print?

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

// It will print 0 1 2 3 4, because we use let instead of var here. The variable i is only seen in the for loop’s block scope.

// With var we can do this -

for (var i = 0; i < 5; i++) {
    (function (x) {
        setTimeout(function () {
            console.log(x);
        }, x * 1000);
    })(i);
}
// OR
for (var i = 0; i < 5; i++) {
    setTimeout((function (i) {
        return function() {
             console.log(i);   
        }
    })(i), i * 500);
}

