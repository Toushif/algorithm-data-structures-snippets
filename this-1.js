// What will be the output of the following code -

var length = 10;
function fn() {
    console.log(this.length);
}
var obj = {
    length: 5,
    method: function (fn) {
        debugger
        fn();
        arguments[0]();
    },
};
obj.method(fn, 1);

// Answer -
// 10
// 2

// In the first place, as fn is passed as a parameter to the function method, the scope (this) of the function fn is window. var length = 10; is declared at the window level. It also can be accessed as window.length or length or this.length (when this === window.)

// method is bound to Object obj, and obj.method is called with parameters fn and 1. Though method is accepting only one parameter, while invoking it has passed two parameters; the first is a function callback and other is just a number.

// When fn() is called inside method, which was passed the function as a parameter at the global level, this.length will have access to var length = 10 (declared globally) not length = 5 as defined in Object obj.

// Now, we know that we can access any number of arguments in a JavaScript function using the arguments[] array.

// Hence arguments[0]() is nothing but calling fn(). Inside fn now, the scope of this function becomes the arguments array, and logging the length of arguments[] will return 2.

// Hence the output will be as above.
// 