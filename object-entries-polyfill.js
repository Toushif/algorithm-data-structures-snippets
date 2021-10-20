// Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the
// prototype chain as well.

// const object1 = {
//     a: 'somestring',
//     b: 42
//   };

//   for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }

// expected output:
// "a: somestring"
// "b: 42"

if (!Object.entries) {
    Object.entries = function (obj) {
        var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
        while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

        return resArray;
    };
}

const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj2 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(obj2)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
const myObj = Object.create(
    {},
    {
        getFoo: {
            value() {
                return this.foo;
            },
        },
    }
);
myObj.foo = "bar";
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// returns an empty array for any primitive type except for strings (see the above example), since primitives have no own properties
console.log(Object.entries(100)); // [ ]

// iterate through key-value gracefully
const obj3 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj3)) {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj3).forEach(([key, value]) => {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
